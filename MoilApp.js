"use client";

import { useEffect, useRef } from "react";
import moilData from "./embedded/moil-data.json";

export default function MoilApp({ bodyMarkup, appLogicSource }) {
  const initialized = useRef(false);

  useEffect(() => {
    // Guard against React 18/19 StrictMode double-invoking effects in dev,
    // and against this ever re-running on a re-render.
    if (initialized.current) return;
    initialized.current = true;

    // The original app logic was a plain (non-module) <script> that
    // referenced the bare identifier `DATA` throughout. Running that same
    // source through `new Function("DATA", ...)` and calling it with the
    // dataset reproduces that exact binding without changing a single
    // line of the original decision-engine / rendering / event-wiring
    // code.
    try {
      const run = new Function("DATA", appLogicSource);
      run(moilData);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("MOIL app logic failed to initialize:", err);
    }
  }, [appLogicSource]);

  return (
    <div
      id="moil-app-root"
      // Straight port of the original file's <body> contents: static
      // structural HTML (header, panes, cards, table/chart containers
      // with ids) that the script above fills in and wires up after
      // mount.
      dangerouslySetInnerHTML={{ __html: bodyMarkup }}
    />
  );
}
