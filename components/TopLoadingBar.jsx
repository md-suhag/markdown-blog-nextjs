"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
const TopLoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20);

    setTimeout(() => {
      setProgress(40);
    }, 50);

    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 30);
  }, []);
  return (
    <LoadingBar
      color="#7c3aed"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default TopLoadingBar;
