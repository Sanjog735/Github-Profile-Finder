import { useState } from "react";
import RepoCard from "./RepoCard";

const Repos = ({ repos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  // Ensure repos is an array before proceeding
  if (!Array.isArray(repos)) {
    return <div className="text-center text-xl">No repositories found</div>;
  }

  const totalPosts = repos.length;
  const totalPages = Math.ceil(totalPosts / postPerPage);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = repos.slice(firstPostIndex, lastPostIndex);

  const handleSelectPage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages) {
      setCurrentPage(selectedPage);
    }
  };

  return (
    <>
      <div className="flex gap-6 flex-wrap max-w-[1200px] items-center justify-center mt-20 mb-20 mx-auto">
        {currentPost.length > 0 &&
          currentPost.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </div>

      <div
        id="pagination"
        className="mb-10 flex gap-4 md:gap-7 items-center justify-center flex-wrap"
      >
        <span
          onClick={() => handleSelectPage(currentPage - 1)}
          className={`cursor-pointer text-[#0079ff] ${
            currentPage <= 1 && "hidden"
          }`}
        >
          ◀
        </span>

        {[...Array(totalPages)].map((_, i) => (
          <span
            className={`cursor-pointer border-[1px] border-[#0079ff] hover:bg-[#0079ff] hover:text-white transition-all duration-200 px-3 py-1 md:px-5 md:py-2 ${
              currentPage === i + 1 && "active"
            }`}
            onClick={() => handleSelectPage(i + 1)}
            key={i}
          >
            {i + 1}
          </span>
        ))}
        <span
          onClick={() => handleSelectPage(currentPage + 1)}
          className={`cursor-pointer text-[#0079ff] ${
            currentPage >= totalPages && "hidden"
          }`}
        >
          ▶
        </span>
      </div>
    </>
  );
};

export default Repos;
