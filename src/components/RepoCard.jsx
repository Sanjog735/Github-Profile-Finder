import React, { useEffect, useState } from "react";

const RepoCard = ({ name, description, language, languages_url }) => {
  // const [langs, setLangs] = useState([]);

  // useEffect(() => {
  //   const fetchLangs = async () => {
  //     if (!languages_url) return;

  //     try {
  //       const response = await fetch(languages_url);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch repositories");
  //       }
  //       const data = await response.json();
  //       setLangs(data);
  //     } catch (error) {
  //       console.error("Error fetching languages:", error.message);
  //     }
  //   };
  //   fetchLangs();
  // }, [languages_url]);

  // console.log(langs);

  return (
    <div className="">
      <a className="cursor-pointer rounded-lg border p-4  w-[300px] h-[200px] flex flex-col justify-center hover:border-[#0079ff] transition-all duration-200">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 text-base">
          {description ? `${description.slice(0, 50)}...` : "No Description"}
        </p>

        <span className="mt-4 bg-blue-500 w-min text-white font-bold py-1 px-2 rounded-full">
          {language ? language : "Null"}
        </span>
      </a>
    </div>
  );
};

export default RepoCard;
