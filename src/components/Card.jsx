import React, { useEffect, useState } from "react";
import Repos from "./Repos";

const Card = ({ user, repos }) => {
  const {
    avatar_url,
    bio,
    followers,
    following,
    name,
    login,
    public_repos,
    html_url,
  } = user;

  return (
    <div className="  mt-10 ">
      <div
        id="details"
        className="flex flex-col md:flex-row items-center justify-center gap-5"
      >
        <img
          className=" rounded-full w-20 h-20 md:w-40 md:h-40"
          src={avatar_url}
          alt="user-image"
        />

        <div className=" text-center md:text-start">
          <h1 className=" font-bold text-2xl md:text-3xl">{name}</h1>
          <a
            href={html_url}
            target="_blank"
            className=" text-[#0079ff] mt-2 cursor-pointer"
          >
            @{login}
          </a>
          <h3 className=" text-gray-400 mt-2 md:text-[18px]">{bio}</h3>
        </div>
      </div>

      <div className=" mt-10 bg-[#0079ff] rounded-[10px] w-max flex gap-10 md:gap-40 items-center justify-center mx-auto py-5 px-7 md:px-16 ">
        <div>
          <h2 className="md:text-xl text-white">Repos</h2>
          <p className=" text-center md:text-2xl font-bold text-white">
            {public_repos ? public_repos : 0}
          </p>
        </div>

        <div>
          <h2 className="md:text-xl text-white">Followers</h2>
          <p className=" text-center md:text-2xl font-bold text-white">
            {followers ? followers : 0}
          </p>
        </div>

        <div>
          <h2 className="md:text-xl text-white">Followng</h2>
          <p className=" text-center md:text-2xl font-bold text-white">
            {following ? following : 0}
          </p>
        </div>
      </div>

      <Repos repos={repos} />
    </div>
  );
};

export default Card;
