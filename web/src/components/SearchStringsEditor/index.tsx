import { useAtom } from "jotai";
import { searchStringsAtom } from "../../state/search-strings";
import { formStyles } from "../../styles";
import { CodeEditor } from "../CodeEditor";
import styles from "./styles.module.css";
import classNames from "classnames";
import { type Grammar } from "prismjs";
import { useAtomValue } from "jotai";
import { localeSelector } from "../../state/locale";
import { message } from "../../i18n";

const SearchStringGrammar: Grammar = {
  comment: /#.*/,
};

export function SearchStringsEditor() {
  const [searchStrings, setSearchStrings] = useAtom(searchStringsAtom);
  const locale = useAtomValue(localeSelector);

  return (
    <div className={classNames(formStyles.formRow)}>
      <label>
        {message(locale, "searchSyntax")} {"("}
        <a href="https://poe.re/" target="_blank">
          {message(locale, "regexTool")}
        </a>
        {/* TODO Should add some hints for alias format */}
        {")"}
      </label>
      <CodeEditor
        className={classNames(styles.input)}
        grammar={SearchStringGrammar}
        value={searchStrings?.join("\n") || ""}
        onValueChange={(value) => {
          if (value.length == 0) setSearchStrings(null);
          else setSearchStrings(value.split(/\r\n|\r|\n/));
        }}
      />
    </div>
  );
}
