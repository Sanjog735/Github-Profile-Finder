import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RepoCard from "./RepoCard";

const UserData = () => {
  const { userData, isLoading, error } = useSelector((state) => state.search);

  const [repos, setRepos] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  // Ensure repos is an array before proceeding
  if (!Array.isArray(repos)) {
    return <div className=" text-center text-xl">No Repositories Found</div>;
  }

  const totalPosts = repos.length;
  const totalPages = Math.round(totalPosts / postPerPage);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = repos.slice(firstPostIndex, lastPostIndex);

  const handleSelectedPage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages) {
      setCurrentPage(selectedPage);
    }
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      if (!userData || !userData.repos_url) return;

      try {
        const response = await fetch(userData.repos_url);
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error.message);
      }
    };
    fetchRepositories();
  }, [userData]);

  // console.log(repos);

  if (isLoading) {
    return <p className="text-center text-gray-500">Searching...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!userData) {
    return <p className="text-center text-gray-500 mt-2">No user found.</p>;
  }

  return (
    <div className="mt-10">
      <div
        id="details"
        className="flex flex-col md:flex-row items-center justify-center gap-5"
      >
        <img
          src={userData.avatar_url}
          alt={`${userData.login}'s avatar`}
          className="rounded-full w-20 h-20 md:w-40 md:h-40"
        />
        <div className=" text-center md:text-start">
          <h1 className=" font-bold text-2xl md:text-3xl">{userData.name}</h1>
          <a
            href={userData.html_url}
            target="_blank"
            className=" text-[#0079ff] mt-2 cursor-pointer"
          >
            @{userData.login}
          </a>
          <h3 className=" text-gray-400 mt-2 md:text-[18px]">{userData.bio}</h3>
        </div>
      </div>
      <div className=" mt-10 bg-[#0079ff] rounded-[10px] w-max flex gap-10 md:gap-40 items-center justify-center mx-auto py-5 px-7 md:px-16 ">
        <div>
          <h2 className="md:text-xl text-white">Repos</h2>
          <p className=" text-center md:text-2xl font-bold text-white">
            {userData.public_repos ? userData.public_repos : 0}
          </p>
        </div>

        <div>
          <h2 className="md:text-xl text-white">Followers</h2>
          <p className=" text-center md:text-2xl font-bold text-white">
            {userData.followers ? userData.followers : 0}
          </p>
        </div>

        <div>
          <h2 className="md:text-xl text-white">Followng</h2>
          <p className=" text-center md:text-2xl font-bold text-white">
            {userData.following ? userData.following : 0}
          </p>
        </div>
      </div>
      {/*  All the Repositories */}
      <div className=" flex gap-6 flex-wrap max-w-[1200px] items-center justify-center mt-20 mb-20 mx-auto">
        {currentPost.length > 0 &&
          currentPost.map((item, i) => <RepoCard key={i} {...item} />)}
      </div>

      <div
        id="pagination"
        className="mb-10 flex gap-4 md:gap-7 items-center justify-center flex-wrap"
      >
        <span
          onClick={() => handleSelectedPage(currentPage - 1)}
          className={`cursor-pointer text-[#0079ff] ${
            currentPage <= 1 && "hidden"
          }`}
        >
          ◀
        </span>
        {[...Array(totalPages)].map((_, i) => (
          <span
            onClick={() => handleSelectedPage(i + 1)}
            className={`cursor-pointer border-[1px] border-[#0079ff] hover:bg-[#0079ff] hover:text-white transition-all duration-200 px-3 py-1 md:px-5 md:py-2 ${
              currentPage === i + 1 && "active"
            }`}
          >
            {i + 1}
          </span>
        ))}
        <span
          onClick={() => handleSelectedPage(currentPage + 1)}
          className={`cursor-pointer text-[#0079ff] ${
            currentPage >= totalPages && "hidden"
          }`}
        >
          ▶
        </span>
      </div>
    </div>
  );
};

export default UserData;
