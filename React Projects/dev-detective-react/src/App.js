import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import MainCard from "./components/MainCard";

const API_URL = "https://api.github.com/users/";

const App = () => {
  const [username, setUsername] = useState("vijay-10");
  const [data, setdata] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const userDetails = async () => {
    const response = await fetch(`${API_URL}${username}`);
    const userData = await response.json();
    setdata(userData);
    setLoading(false);
  };
  
  useEffect(() => {
    userDetails();
  }, [username]);

  return (
    <div>
      <Header />
      <InputField setUsername={setUsername} />
      {loading? 'Loading...' : <MainCard userData={data} />}
    </div>
  );
};

export default App;
