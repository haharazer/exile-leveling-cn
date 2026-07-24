import { formStyles } from "../../styles";
import { type UrlRewriter, fetchStringOrUrl } from "../../utility";
import { Modal, TextModal } from "../Modal";
import { Workspace } from "./Workspace";
import styles from "./styles.module.css";
import classNames from "classnames";
import { buildRouteSource, getRouteFiles } from "common";
import type { RouteData } from "common";
import React from "react";
import { useEffect, useState } from "react";
import { BiHelpCircle } from "react-icons/bi";
import flattenChildren from "react-keyed-flatten-children";
import { toast } from "react-toastify";
import { FragmentDescriptionLookup } from "../../../../common/src/route-processing/fragment/language";
import { useAtomValue } from "jotai";
import { localeSelector } from "../../state/locale";
import { gameText, message } from "../../i18n";

function cloneRouteFiles(routeFiles: RouteData.RouteFile[]) {
  return routeFiles.map((x) => ({ ...x }));
}

const URL_REWRITERS: UrlRewriter[] = [
  (url) => {
    const match = /pastebin\.com\/(.+)$/.exec(url);
    if (!match) return null;

    return `pastebin.com/raw/${match[1]}`;
  },
];

interface RouteEditorProps {
  routeFiles: RouteData.RouteFile[];
  onSubmit: (routeFiles: RouteData.RouteFile[]) => void;
  onReset: () => void;
}

export function RouteEditor({
  routeFiles,
  onSubmit,
  onReset,
}: RouteEditorProps) {
  const locale = useAtomValue(localeSelector);
  const [workingFiles, setWorkingFiles] = useState<RouteData.RouteFile[]>([]);
  const [importIsOpen, setImportIsOpen] = useState<boolean>(false);
  const [guideIsOpen, setGuideIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setWorkingFiles(cloneRouteFiles(routeFiles));
  }, [routeFiles]);

  const submitWorkingFiles = () => {
    onSubmit(getRouteFiles(workingFiles.map((x) => x.contents)));
  };

  useEffect(() => {
    const handler = (evt: KeyboardEvent) => {
      if ((evt.metaKey || evt.ctrlKey) && evt.key === "s") {
        evt.preventDefault();
        submitWorkingFiles();
      }
    };
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [workingFiles]);

  return (
    <>
      <TextModal
        size="large"
        label={message(locale, "importRoute")}
        isOpen={importIsOpen}
        onRequestClose={() => setImportIsOpen(false)}
        onSubmit={(routeOrUrl) =>
          toast.promise(
            async () => {
              if (!routeOrUrl) return;
              const routeSrc = await fetchStringOrUrl(
                routeOrUrl,
                URL_REWRITERS,
              );

              const routeFiles = getRouteFiles([routeSrc]);
              onSubmit(routeFiles);
            },
            {
              pending: message(locale, "importingRoute"),
              success: message(locale, "importSuccess"),
              error: message(locale, "importFailed"),
            },
          )
        }
      />
      <Modal
        size="large"
        isOpen={guideIsOpen}
        onRequestClose={() => setGuideIsOpen(false)}
      >
        <HelpPage />
      </Modal>
      <div className={classNames(formStyles.form, styles.editorForm)}>
        <Workspace
          workingFiles={workingFiles}
          isDirty={(workingFile, i) =>
            i < routeFiles.length &&
            routeFiles[i].contents !== workingFile.contents
          }
          onUpdate={setWorkingFiles}
        />
        <div className={classNames(formStyles.groupRight)}>
          <BiHelpCircle
            size={24}
            onClick={() => {
              setGuideIsOpen(true);
            }}
          />
          <button
            className={classNames(formStyles.formButton)}
            onClick={() => {
              const routeSource = buildRouteSource(workingFiles);
              navigator.clipboard.writeText(routeSource);
              toast.success(message(locale, "exported"));
            }}
          >
            {message(locale, "exportButton")}
          </button>
          <button
            className={classNames(formStyles.formButton)}
            onClick={() => {
              setImportIsOpen(true);
            }}
          >
            {message(locale, "importButton")}
          </button>
          <button
            className={classNames(formStyles.formButton)}
            onClick={() => {
              setWorkingFiles(cloneRouteFiles(routeFiles));
              onReset();
            }}
          >
            {message(locale, "reset")}
          </button>
          <button
            className={classNames(formStyles.formButton)}
            onClick={() => {
              submitWorkingFiles();
            }}
          >
            {message(locale, "save")}
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

function HelpPage() {
  const fragmentDescriptions: React.ReactNode[] = Object.entries(
    FragmentDescriptionLookup,
  ).map(([key, variants], i) => (
    <React.Fragment key={key}>
      {variants.map((variant, j) => (
        <React.Fragment key={`variant-${j}`}>
          {i !== 0 && <hr />}
          <div>
            <span className="token keyword control-flow">{"{"}</span>
            <span className="token keyword">{key}</span>
            {variant.parameters.map((param, i) => (
              <React.Fragment key={`variant-parameters-${i}`}>
                <span className="token keyword control-flow">{"|"}</span>
                <span className="token property">{param.name}</span>
              </React.Fragment>
            ))}
            <span className="token keyword control-flow">{"}"}</span>
            <br />
            <span>{gameText("zh-CN", variant.description)}</span>
            <br />
            {variant.parameters.map((param, j) => (
              <React.Fragment key={`variant-description-${j}`}>
                <span className="token property">{param.name}</span>:{" "}
                {gameText("zh-CN", param.description)}
                <br />
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  ));

  return (
    <div className={classNames(styles.help)}>
      {flattenChildren(fragmentDescriptions)}
    </div>
  );
}
