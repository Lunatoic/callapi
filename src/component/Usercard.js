import React, { useEffect, useState } from 'react'

const Usercard = ({ userData, counter }) => {

  const [peopleList, setPeopleList] = useState([]);

  // console.log(peopleList);
  useEffect(() => {
    const createCard = () => {
      setPeopleList((prevData) => [...prevData, userData]);
    }
    createCard();
  }, [userData])

  return (
    <>
      <div className='mainContainer'>
        {peopleList.slice(1).map((currEle) => {
          return (
            <div className="card">
              <div className="lines"></div>
              <div className="imgBx">
                <img src={currEle.large} alt="User Profile" />
              </div>
              <div className="content">
                <div className="details">
                  <h2>{`${currEle.first} ${currEle.last}`}</h2>
                  <div className="data">
                    <h3> <span>Gender</span>{`${currEle.gender}`}</h3>
                    <h3> <span>phone Number </span>{`${currEle.phone}`}</h3>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default Usercard
