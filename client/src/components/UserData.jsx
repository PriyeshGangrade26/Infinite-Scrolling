import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/userdata.css";
import { LoadingSpinner } from "./LoadingSpinner";
import { PageLoader } from "./PageLoader";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [firstPageLoaded, setFirstPageLoaded] = useState(false);

  const loader = useRef(null);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://randomuser.me/api/?results=20&page=${page}`
      );
      if (page > 1) {
        setUsers([...users, ...response.data.results]);
      } else {
        setUsers(response.data.results);
        setFirstPageLoaded(true);
      }
      setLoading(false);
    };
    if (page > 1 || !firstPageLoaded) {
      setLoading(true);
      setTimeout(() => {
        loadUsers();
      }, 3000);
    }
  }, [page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    }, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  return (
    <>
      {users.length === 0 && loading && <LoadingSpinner />}
      {users.map((user, index) => (
        <div
          className="UserListContainer"
          key={index}>
          <div className="profile">
            <div>
              <img
                src={user.picture.large}
                alt="User"
                className="image"
              />
            </div>
            <h2>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</h2>
            <p>Age : {user.dob.age}</p>
            <p>Email : {user.email}</p>
          </div>
        </div>
      ))}
      {users.length > 0 && loading && page > 1 && <PageLoader />}
      <div ref={loader}></div>
    </>
  );
};

export { UserData };
