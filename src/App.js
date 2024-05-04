import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [userData, setUserData] = useState("");
  const getData = async() => {
    try {
      const url = `https://randomuser.me/api/?page=1&results=1&seed=abc`
      let res = await fetch(url);
      let data = await res.json();

      const {first, last} = data.results[0].name;
      const {gender} = data.results[0];
      const {phone} = data.results[0];
      const {large} = data.results[0].picture;

      // console.log(large);

      const myData = {
        first,last,gender,phone,large,
      };

      setUserData(myData);

    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getData();
  })
  return (
    <>
      <div className="card">
        <div className="lines"></div>
        <div className="imgBx">
          <img src= {userData.large} alt="User Profile" />
        </div>
        <div className="content">
          <div className="details">
            <h2>{`${userData.first} ${userData.last}`}</h2>
            <div className="data">
              <h3> <span>Gender</span>{`${userData.gender}`}</h3>
              <h3> <span>phone Number </span>{`${userData.phone}` }</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
