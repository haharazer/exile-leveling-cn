import { useAtom, useAtomValue } from "jotai";
import { routeSelector } from "../../state/route";
import { routeFilesSelector } from "../../state/route-files";
import { localeSelector } from "../../state/locale";
import {
  localeLabels,
  message,
  SUPPORTED_LOCALES,
  type Locale,
} from "../../i18n";
import { borderListStyles, interactiveStyles } from "../../styles";
import styles from "./styles.module.css";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaGithub,
  FaMap,
  FaRegClipboard,
  FaTools,
  FaUndoAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RESET, useAtomCallback } from "jotai/utils";
import { pobAtom } from "../../state/pob";

interface NavbarItemProps {
  label: string;
  icon?: React.ReactNode;
  expand: boolean;
  onClick: () => void;
}

function NavbarItem({ label, expand, icon, onClick }: NavbarItemProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.navItem, styles.navElement, {
        [styles.expand]: expand,
        [borderListStyles.item]: expand,
        [interactiveStyles.activeSecondary]: !expand,
        [interactiveStyles.hoverPrimary]: expand,
      })}
    >
      {icon}
      {label}
    </button>
  );
}

interface NavbarProps {}

export function Navbar({}: NavbarProps) {
  const [navExpand, setNavExpand] = useState<boolean>(false);
  const [locale, setLocale] = useAtom(localeSelector);
  const navigate = useNavigate();

  const clipboardRoute = useAtomCallback(async (get) => {
    const route = await get(routeSelector);
    const pobCode = get(pobAtom);

    const output = [...route.sections, `pob-code:${pobCode ?? "none"}`];
    navigator.clipboard.writeText(JSON.stringify(output));
  });

  const reset = useAtomCallback((_get, set) => {
    set(pobAtom, RESET);
  });

  const routeFiles = useAtomValue(routeFilesSelector);

  return (
    <div
      className={classNames(styles.navbar, {
        [styles.expand]: navExpand,
      })}
    >
      <div
        className={classNames(styles.navHolder, {
          [styles.expand]: navExpand,
        })}
      >
        <button onClick={() => setNavExpand(!navExpand)}>
          <FaBars
            aria-label={message(locale, "menu")}
            className={classNames(
              styles.navIcon,
              interactiveStyles.activePrimary,
            )}
            display="block"
          />
        </button>
        <div
          className={classNames(styles.navMain, {
            [styles.expand]: navExpand,
          })}
        >
          <div
            className={classNames(styles.navItems, {
              [styles.expand]: navExpand,
            })}
          >
            <NavbarItem
              label={message(locale, "route")}
              expand={navExpand}
              icon={<FaMap className={classNames("inlineIcon")} />}
              onClick={() => {
                navigate("/");
                setNavExpand(false);
              }}
            />
            <NavbarItem
              label={message(locale, "build")}
              expand={navExpand}
              icon={<FaTools className={classNames("inlineIcon")} />}
              onClick={() => {
                navigate("/build");
                setNavExpand(false);
              }}
            />
            <NavbarItem
              label={message(locale, "reset")}
              expand={navExpand}
              icon={<FaUndoAlt className={classNames("inlineIcon")} />}
              onClick={() => {
                reset();
                setNavExpand(false);
              }}
            />
            <NavAccordion
              label={message(locale, "sections")}
              navExpand={navExpand}
            >
              {routeFiles.map((x, i) => (
                <NavbarItem
                  key={i}
                  label={x.name}
                  expand={navExpand}
                  onClick={() => {
                    navigate(`/#section-${x.name.replace(/\s+/g, "_")}`);
                    setNavExpand(false);
                  }}
                />
              ))}
            </NavAccordion>
            <NavbarItem
              label={message(locale, "editRoute")}
              expand={navExpand}
              icon={<FaTools className={classNames("inlineIcon")} />}
              onClick={() => {
                navigate(`/edit-route`);
                setNavExpand(false);
              }}
            />
            <NavbarItem
              label={message(locale, "export")}
              expand={navExpand}
              icon={<FaRegClipboard className={classNames("inlineIcon")} />}
              onClick={() => {
                clipboardRoute();
                toast.success(message(locale, "exported"));
                setNavExpand(false);
              }}
            />
            <NavbarItem
              label={message(locale, "github")}
              expand={navExpand}
              icon={<FaGithub className={classNames("inlineIcon")} />}
              onClick={() => {
                window
                  .open(
                    "https://github.com/haharazer/exile-leveling-cn",
                    "_blank",
                  )
                  ?.focus();
                setNavExpand(false);
              }}
            />
            <div
              className={styles.localeSwitch}
              role="group"
              aria-label={message(locale, "language")}
            >
              {SUPPORTED_LOCALES.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={classNames(styles.localeOption, {
                    [styles.active]: locale === value,
                  })}
                  aria-pressed={locale === value}
                  onClick={() => {
                    setLocale(value as Locale);
                    setNavExpand(false);
                  }}
                >
                  {localeLabels[value]}
                </button>
              ))}
            </div>
          </div>
          {navExpand && <hr />}
        </div>
      </div>
      <hr />
    </div>
  );
}

interface NavAccordionProps {
  label: string;
  navExpand: boolean;
}

function NavAccordion({
  label,
  navExpand,
  children,
}: React.PropsWithChildren<NavAccordionProps>) {
  const [accordionExpand, setAccordionExpand] = useState<boolean>(false);

  useEffect(() => {
    setAccordionExpand(false);
  }, [navExpand]);
  return (
    <>
      <NavbarItem
        label={label}
        expand={navExpand}
        onClick={() => {
          setAccordionExpand(!accordionExpand);
        }}
      />
      {accordionExpand && <hr />}
      <div
        className={classNames(styles.navAccordion, styles.navItems, {
          [styles.expand]: accordionExpand,
        })}
      >
        {children}
      </div>
      {accordionExpand && <hr />}
    </>
  );
}
