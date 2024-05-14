import React, { useState, useEffect } from "react";

const RepoCard = ({ repo }) => {
  const { name, description, language, html_url } = repo;
  // useEffect(() => {
  //   const fetchLanguages = async () => {
  //     try {
  //       const response = await fetch(languages_url);
  //       const data = await response.json();
  //       setLanguages(Object.keys(data)); // Extracting keys from the language object
  //       console.log(languages);
  //     } catch (error) {
  //       console.error("Error fetching languages:", error);
  //     }
  //   };

  //   fetchLanguages();
  // }, [languages_url]);

  return (
    <a
      href={html_url}
      target="_blank"
      className=" cursor-pointer rounded-lg border p-4  w-[300px] h-[200px] flex flex-col justify-center hover:border-[#0079ff] transition-all duration-200"
    >
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700">
        {description ? `${description.slice(0, 50)}...` : "No Description"}
      </p>
      <div className="flex mt-4">
        {/* {languages.map((lang, index) => (
          <span
            key={index}
            className="mr-2 px-2 py-1 rounded-full text-white bg-[#0079ff]"
          >
            {lang}
          </span>
        ))} */}

        <span className="mr-2 px-2 py-1 rounded-full text-white bg-[#0079ff]">
          {language ? language : "Unknown"}
        </span>
      </div>
    </a>
  );
};

export default RepoCard;
