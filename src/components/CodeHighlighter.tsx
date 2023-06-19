"use client";

import "highlight.js/styles/night-owl.css";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect } from "react";
import clsx from "clsx";
hljs.registerLanguage("javascript", javascript);

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CodeHighlighter(props: Props) {
  const { children, className } = props;
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div className={clsx("[&_code]:rounded-md", className)}>
      <pre>
        <code className="js">{children}</code>
      </pre>
    </div>
  );
}
