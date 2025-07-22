import React, { useState } from "react";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [msg, setMsg] = useState("You need to add team members!");
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam((prevState) => [...prevState, fighter]);
      setMoney((prevMoney) => prevMoney - fighter.price);
      setZombieFighters((prevFighters) =>
        prevFighters.filter((f) => f.id !== fighter.id)
      );
      setMsg(`${fighter.name} added to your team!`);
    } else {
      setMsg("Not enough money to buy this fighter!");
    }
  };

  return (
    <>
      <h3>{msg}</h3>
      <h2>Money: {money} </h2>
      <h3>Current Team: {team.length === 0 && <span>None</span>}</h3>

      <ul>
        {team.map((item, idx) => (
          <li key={idx}>
            <p>
              <img src={item.img}></img>
            </p>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Strength: {item.strength}</p>
            <p>Agility: {item.agility}</p>
          </li>
        ))}
      </ul>
      <h3>Buy Fighters:</h3>
      <ul>
        {zombieFighters.map((item, idx) => (
          <li key={idx}>
            <p>
              <img src={item.img}></img>
            </p>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Strength: {item.strength}</p>
            <p>Agility: {item.agility}</p>
            <p>
              <button id={item.id} onClick={() => handleAddFighter(item)}>
                Add
              </button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
