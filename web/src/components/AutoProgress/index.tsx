import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { activeEdgeAtom } from "../../state/route";
import { type Id, toast } from "react-toastify";
import useWebSocket, { ReadyState } from "react-use-websocket-lite";
import React from "react";
import { localeSelector } from "../../state/locale";
import { message } from "../../i18n";

const AUTO_PROGRESS_URL = "ws://localhost:6754";

export function useAutoProgress() {
  const write = useSetAtom(activeEdgeAtom);
  const locale = useAtomValue(localeSelector);
  const { readyState } = useWebSocket({
    url: AUTO_PROGRESS_URL,
    shouldReconnect: true,
    reconnectInterval: 1000,
    onMessage(event) {
      if (typeof event.data === "string") {
        write(event.data);
      }
    },
  });

  const toastId = React.useRef<Id | null>(null);

  useEffect(() => {
    if (readyState == ReadyState.CONNECTING) {
      if (toastId.current === null || !toast.isActive(toastId.current)) {
        toastId.current = toast("");
      }

      toast.update(toastId.current, {
        render: message(locale, "setupAutoProgress"),
        type: "info",
        onClick: () => {
          window.open(
            "https://github.com/HeartofPhos/exile-log-api/releases",
            "_blank",
          );
        },
        style: { cursor: "pointer" },
        autoClose: false,
        closeOnClick: false,
        closeButton: null,
      });
    } else {
      if (toastId.current === null || !toast.isActive(toastId.current)) {
        toastId.current = toast("");
      }

      toast.update(toastId.current, {
        render: message(locale, "autoProgressConnected"),
        type: "success",
        onClick: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
      });
    }
  }, [locale, readyState]);
}
