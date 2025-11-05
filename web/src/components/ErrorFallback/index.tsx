import styles from "./styles.module.css";
import classNames from "classnames";
import { FallbackProps } from "react-error-boundary";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <span>
      {"糟糕，似乎出现了错误。点击 "}
      <span
        className={classNames(styles.reset)}
        onClick={() => {
          localStorage.clear();
          location.reload();
        }}
      >
        这里
      </span>
      {" 以尝试修复。"}
    </span>
  );
}
