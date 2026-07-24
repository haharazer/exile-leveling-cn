import { formStyles } from "../../styles";
import {
  type UrlRewriter,
  fetchStringOrUrl,
  getRewriteUrl,
} from "../../utility";
import { TextModal } from "../Modal";
import classNames from "classnames";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAtomValue } from "jotai";
import { localeSelector } from "../../state/locale";
import { message } from "../../i18n";

const URL_REWRITERS: UrlRewriter[] = [
  (url) => {
    const match = /pastebin\.com\/(.+)$/.exec(url);
    if (!match) return null;

    return `pastebin.com/raw/${match[1]}`;
  },
  (url) => {
    const match = /poe\.ninja\/pob\/(.+)$/.exec(url);
    if (!match) return null;

    return `poe.ninja/pob/raw/${match[1]}`;
  },
  (url) => {
    const match = /pobb\.in\/(.+)$/.exec(url);
    if (!match) return null;

    return `pobb.in/${match[1]}/raw`;
  },
  (url) => {
    const match = /maxroll\.gg\/poe\/pob\/(.+)$/.exec(url);
    if (!match) return null;

    return `maxroll.gg/poe/api/pob/${match[1]}`;
  },
  (url) => {
    const match = /youtube.com\/redirect\?.+?q=(.+?)(?:&|$)/.exec(url);
    if (!match) return null;
    const redirectUrl = decodeURIComponent(match[1]);

    return getRewriteUrl(redirectUrl, URL_REWRITERS);
  },
];

interface BuildImportFormProps {
  onSubmit: (pobCode: string) => void;
  onReset: () => void;
}

export function BuildImportForm({ onSubmit, onReset }: BuildImportFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useAtomValue(localeSelector);

  return (
    <>
      <TextModal
        label={message(locale, "pobCode")}
        size="small"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        onSubmit={(pobCodeOrUrl) =>
          toast.promise(
            async () => {
              if (!pobCodeOrUrl) return Promise.reject("invalid pobCodeOrUrl");
              const pobCode = await fetchStringOrUrl(
                pobCodeOrUrl,
                URL_REWRITERS,
              );

              onSubmit(pobCode);
            },
            {
              pending: message(locale, "importingBuild"),
              success: message(locale, "importSuccess"),
              error: message(locale, "importFailed"),
            },
          )
        }
      />
      <div className={classNames(formStyles.groupRight)}>
        <button
          className={classNames(formStyles.formButton)}
          onClick={() => {
            onReset();
          }}
        >
          {message(locale, "reset")}
        </button>
        <button
          className={classNames(formStyles.formButton)}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {message(locale, "importBuild")}
        </button>
      </div>
    </>
  );
}
