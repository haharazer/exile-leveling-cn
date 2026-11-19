import { useLayoutEffect, type RefObject } from "react";

// Reserve space per task rather than leaving an empty column below the panel.
export function useSidebarAvoidance(
  contentRef: RefObject<HTMLDivElement | null>,
  sidebar: HTMLDivElement | null,
) {
  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content || !sidebar) return;

    let rows: HTMLElement[] = [];
    let frame: number | undefined;
    const insets = new Map<HTMLElement, number>();

    const update = () => {
      frame = undefined;
      const floating = getComputedStyle(sidebar).position === "fixed";
      const panel = sidebar.getBoundingClientRect();
      const gap = parseFloat(getComputedStyle(content.parentElement!).gap) || 0;

      // Read all geometry before writing styles to avoid repeated layouts.
      const nextInsets = rows.map((row) => {
        const rect = row.getBoundingClientRect();
        const overlaps =
          floating &&
          rect.top < panel.bottom &&
          rect.bottom > panel.top &&
          rect.right > panel.left &&
          rect.left < panel.right;
        return overlaps ? Math.ceil(rect.right - panel.left + gap) : 0;
      });

      rows.forEach((row, index) => {
        const inset = nextInsets[index];
        if (inset === (insets.get(row) ?? 0)) return;
        if (inset > 0) {
          row.style.setProperty("--sidebar-inset", `${inset}px`);
          insets.set(row, inset);
        } else {
          row.style.removeProperty("--sidebar-inset");
          insets.delete(row);
        }
      });
    };

    const scheduleUpdate = () => {
      if (frame === undefined) frame = requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    const observeRows = () => {
      resizeObserver.disconnect();
      rows = Array.from(
        content.querySelectorAll<HTMLElement>("[data-sidebar-avoid]"),
      );
      for (const row of insets.keys()) {
        if (!content.contains(row)) insets.delete(row);
      }
      resizeObserver.observe(sidebar);
      resizeObserver.observe(content);
      rows.forEach((row) => resizeObserver.observe(row));
      scheduleUpdate();
    };

    const mutationObserver = new MutationObserver(observeRows);
    mutationObserver.observe(content, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    observeRows();
    if (frame !== undefined) cancelAnimationFrame(frame);
    update();

    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      insets.forEach((_, row) => row.style.removeProperty("--sidebar-inset"));
    };
  }, [contentRef, sidebar]);
}
