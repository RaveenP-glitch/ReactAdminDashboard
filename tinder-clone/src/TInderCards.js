import React,{ useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";


function TinderCards() {

  const [people,setPeople] = useState([
    {name: "Elon Musk",
    url: "https://454438.smushcdn.com/2569731/wp-content/uploads/2012/07/pictures-of-famous-people/mark-zuckerberg.jpg?size=600x500&lossy=1&strip=1&webp=1",
  },
  {
    name: "Jeff Bezos",
    url: "https://images.unsplash.com/photo-1541726156-b8aff4dcce65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhbW91cyUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  ]);

  const swiped = (direction, nameToDelete) =>{
    console.log("removing: "+nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };



  return (<div className='tinderCards'>
    <div className="tinderCards__cardContainer">
    
     {people.map((person) => (
   
      <TinderCard
      className="swipe"
      key={person.name}
      preventSwipe={["up","down"]}
      onSwipe={(dir) => swiped(dir, person.name)}
      onCardLeftScreen={() => outOfFrame(person.name)}
      >

      </TinderCard>
    ))}

    </div>
    
  </div>
  );
}

export default TinderCards;
