import React,{ useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";


function TInderCards() {

  const [people,setPeople] = useState([
    {name: "Elon Musk",
    url: "",
  },
  {
    name: "Jeff Bezos",
    url: "",
  },
  ]);


  return (<div className='tinderCards'>
    <div className="tinderCards__cardContainer">
    
     {people.map((person) => (
      <h1>{person.name}</h1>
    ))}

    </div>
    
  </div>
  );
}

export default TInderCards;
