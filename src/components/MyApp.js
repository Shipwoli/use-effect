import React from "react";
// importing useEffect and useState from react
import { useEffect, useState } from "react";


function MyApp(){
    // creating variables

     const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// using useEffect to fetch data
    useEffect(() =>{
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
          });
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>{error.message}</div>;
      }
      return ( 
        <div>
         {loading? <p>Loading...</p>  : <img src={data.message} alt="A Random Dog" />} 
        </div>
     );
    }


export default MyApp;