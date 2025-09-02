import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    setUser(data.results[0]); // single random user
  };

  return (
    <div>
      {user ? (
        <>
          <h1>Name: {user.name.first} {user.name.last}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <img src={user.picture.medium} alt="user" />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default App;
