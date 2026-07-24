import { ErrorFallback } from "../components/ErrorFallback";
import { Loading } from "../components/Loading";
import { useAutoProgress } from "../components/AutoProgress";
import { Navbar } from "../components/Navbar";
import { pipe } from "../utility";
import { withBlank } from "../utility/withBlank";
import { withScrollRestoration } from "../utility/withScrollRestoration";
import { Suspense, lazy, useEffect, type JSX } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAtomValue } from "jotai";
import { localeSelector } from "../state/locale";
import { message } from "../i18n";

const RoutesContainer = pipe(
  withBlank,
  withScrollRestoration,
)(lazy(() => import("./Routes")));
const BuildContainer = withBlank(lazy(() => import("./Build")));
const EditRouteContainer = withBlank(lazy(() => import("./EditRoute")));

export function App() {
  useAutoProgress();
  const locale = useAtomValue(localeSelector);

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route
              path="/"
              element={
                <Page
                  title={message(locale, "appTitle")}
                  component={<RoutesContainer />}
                />
              }
            />
            <Route
              path="/build"
              element={
                <Page
                  title={message(locale, "buildTitle")}
                  component={<BuildContainer />}
                />
              }
            />
            <Route
              path="/edit-route"
              element={
                <Page
                  title={message(locale, "editRouteTitle")}
                  component={<EditRouteContainer />}
                />
              }
            />
          </Routes>
        </ErrorBoundary>
      </Suspense>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick={true}
        theme={"dark"}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        newestOnTop={true}
      />
    </>
  );
}

interface PageProps {
  title: string;
  component: JSX.Element;
}

function Page({ title, component }: PageProps) {
  const locale = useAtomValue(localeSelector);
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = locale;
  }, [locale, title]);

  return component;
}
