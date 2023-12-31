"use client"
import React from "react";

export default function Loading({ text = "Loading", speed = 300 }) {
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return (
    <React.Fragment>
      <div className="flex_column text-center d-flex justify-content-center align-content-center" style={{ padding: "20rem 0", alignItems: "center" }}>
        <div className="loader-wrapper">
          <div className="loader">
            <div className="loader loader-inner"></div>
          </div>
        </div>
        <p className="loading">{content}</p>
      </div>
    </React.Fragment>
  );
}
