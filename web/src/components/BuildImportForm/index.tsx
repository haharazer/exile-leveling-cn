import { formStyles } from "../../styles";
import { UrlRewriter, fetchStringOrUrl, getRewriteUrl } from "../../utility";
import { TextModal } from "../Modal";
import { PobData, processPob } from "./pob";
import classNames from "classnames";
import { useState } from "react";
import { toast } from "react-toastify";

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
    const match = /youtube.com\/redirect\?.+?q=(.+?)(?:&|$)/.exec(url);
    if (!match) return null;
    const redirectUrl = decodeURIComponent(match[1]);

    return getRewriteUrl(redirectUrl, URL_REWRITERS);
  },
];

interface BuildImportFormProps {
  onSubmit: (pobData: PobData, pobCode: string) => void;
  onReset: () => void;
}

export function BuildImportForm({ onSubmit, onReset }: BuildImportFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TextModal
        label="PoB 导入代码"
        size="small"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        onSubmit={(pobCodeOrUrl) =>
          toast.promise(
            async () => {
              if (!pobCodeOrUrl) return Promise.reject("无效的 PoB 代码或链接");
              const pobCode = await fetchStringOrUrl(
                pobCodeOrUrl,
                URL_REWRITERS
              );

              const pobData = processPob(pobCode);
              if (!pobData) return Promise.reject("解析失败");

              onSubmit(pobData, pobCode);
            },
            {
              pending: "正在导入 BD",
              success: "导入成功",
              error: "导入失败",
            }
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
          重置 BD
        </button>
        <button
          className={classNames(formStyles.formButton)}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          导入 BD
        </button>
      </div>
    </>
  );
}
