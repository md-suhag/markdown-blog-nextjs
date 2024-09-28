"use client";
import React from "react";
import Typed from "typed.js";
const AutoTyping = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Next js", "React js", "Shadcn Ui", "Tailwind CSS"],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return <span ref={el} />;
};

export default AutoTyping;
