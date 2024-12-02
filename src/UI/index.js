import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Navbar } from "./Navbar";
import bootstrap from "bootstrap";
import "../scss/style.scss";
import cn from "classnames";

import Homepage from "./Homepage";
import AddCase from "./AddCase";
import ViewCase from "./ViewCase";
import MoodNoteViewer from "./CaseViewers/MoodNoteViewer";
import ExamDataViewer from "./CaseViewers/ExamViewer";
import GPTResViewer from "./CaseViewers/GPTResViewer";

let datapath = "";

function App() {
  const [pageControl, setPageControl] = useState(0);
  const [caseControl, setCaseControl] = useState("");

  function CurrentPage() {
    switch (pageControl) {
      case 0:
        return (
          <Homepage
            pageControl={{
              get: () => {
                return pageControl;
              },
              set: setPageControl,
            }}
            caseControl={{
              get: () => {
                return caseControl;
              },
              set: setCaseControl,
            }}
          ></Homepage>
        );
      case 1:
        return (
          <AddCase
            pageControl={{
              get: () => {
                return pageControl;
              },
              set: setPageControl,
            }}
          ></AddCase>
        );
      case 2:
        return (
          <ViewCase
            pageControl={{
              get: () => {
                return pageControl;
              },
              set: setPageControl,
            }}
            caseControl={{
              get: () => {
                return caseControl;
              },
              set: setCaseControl,
            }}
            datapath={datapath}
          ></ViewCase>
        );
      case 3:
        return (
          <MoodNoteViewer
            pageControl={{
              get: () => {
                return pageControl;
              },
              set: setPageControl,
            }}
            caseControl={{
              get: () => {
                return caseControl;
              },
              set: setCaseControl,
            }}
          ></MoodNoteViewer>
        );
      case 4:
        return (
          <ExamDataViewer
            pageControl={{
              get: () => {
                return pageControl;
              },
              set: setPageControl,
            }}
            caseControl={{
              get: () => {
                return caseControl;
              },
              set: setCaseControl,
            }}
          ></ExamDataViewer>
        );
      case 5:
        return (
          <GPTResViewer
            pageControl={{
              get: () => {
                return pageControl;
              },
              set: setPageControl,
            }}
            caseControl={{
              get: () => {
                return caseControl;
              },
              set: setCaseControl,
            }}
          ></GPTResViewer>
        );
    }
  }

  return (
    <>
      <div id="winCtrl-bar" className={cn("d-flex", "flex-row-reverse")}>
        <Navbar></Navbar>
      </div>
      <CurrentPage></CurrentPage>
    </>
  );
}

async function main() {
  const root = document.createElement("div");
  root.setAttribute("id", "app");
  document.body.appendChild(root);
  const reactRoot = createRoot(root);
  datapath = await api.invoke("get-datapath");

  reactRoot.render(<App></App>);
}

main();
