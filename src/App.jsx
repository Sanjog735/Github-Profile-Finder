import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import axios from "axios";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUserData = async (username) => {
    setLoading(true);
    setError("");
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(userResponse.data);
      console.log(userResponse.data);

      const reposResponse = await axios.get(userResponse.data.repos_url);
      console.log(reposResponse.data);
      setRepos(reposResponse.data);
    } catch (err) {
      setError("UserName not found ");
      setUserData(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Searchbar onSearch={fetchUserData} />
      {!userData && (
        <p className=" text-2xl md:text-4xl font-bold text-center mt-20">
          Github User Details{" "}
        </p>
      )}
      {loading && <LoadingSpinner />}
      {error && (
        <p className="text-red-500 mt-10 text-xl text-center">{error}</p>
      )}
      {userData && <Card user={userData} repos={repos} />}
    </div>
  );
};

export default App;
