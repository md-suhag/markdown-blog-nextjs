"use client";
import React, { useEffect, useState } from "react";
// import parse from 'html-react-parser';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll("h2");
    const h2Data = Array.from(h2Elements).map((h2) => ({
      text: h2.textContent,
      id: h2.id,
    }));
    setHeadings(h2Data);
  }, [htmlContent]);

  return (
    <div className="absolute hidden on-this-page top-24 md:right-48 lg:right-1/4 md:block">
      <h2 className="my-2 font-bold text-md">On This Page</h2>
      <ul className="space-y-1 text-sm">
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
