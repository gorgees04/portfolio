import React from "react";

const Languages = () => {
  const languages = [
    { language: "assyrian (aramaic)", level: "native" },
    { language: "english", level: "fluent" },
    { language: "arabic", level: "fluent" },
    { language: "kurdish", level: "fluent" },
  ];
  return (
    <div className="my-[100px]">
      <h1 className="text-center text-3xl font-bold">Languages</h1>
      <div className="flex flex-wrap justify-center my-5">
        {languages.map((lang: { language: string; level: string }) => {
          return (
            <div key={lang.language} className="m-7 text-center">
              <h1 className="capitalize text-2xl font-bold">{lang.language}</h1>
              <p className="text-gLightBlue capitalize">({lang.level})</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
