import React, { useEffect, useState } from 'react'
import './App.css'
import Usercard from './component/Usercard';
import Footer from './component/Footer';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [counter, setCounter] = useState(1);

  // const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const url = `https://randomuser.me/api/?page=${counter}&results=1&seed=abc`
      let res = await fetch(url);
      let data = await res.json();

      const { first, last } = data.results[0].name;
      const { gender } = data.results[0];
      const { phone } = data.results[0];
      const { large } = data.results[0].picture;

      // console.log(large);

      const myData = {
        first, last, gender, phone, large,
      };

      setUserData(myData);
      // console.log(userData);
    }
    catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    getData();
  }, [counter]);


  const incrementCount = () => {
    setCounter(counter + 1)
  };
  // console.log(counter)

  return (
    <>
      <Usercard userData={userData} counter={counter} />
      <Footer counter={counter} incrementCount={incrementCount} />
    </>
  )
}

export default App
