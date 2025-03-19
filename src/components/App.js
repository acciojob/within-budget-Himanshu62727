
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const itemsDetails = [
  { id: 1, name: "Apple", price: 20 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Neutella", price: 30 },
  { id: 4, name: "Razor", price: 5 },
  { id: 5, name: "ComFlakes", price: 15 },
  { id: 6, name: "Sound Bar", price: 50 },
  { id: 7, name: "Iphone", price: 80 }
  ];

  const [budget, setBudget] = useState(0);

  return (
    <div>
        {/* Do not remove the main div */}

      <h2>Enter your Budget to check avaialable Item:</h2>

      <form>
        <input type="text" placeholder=""
        onChange={(e) => {setBudget(e.target.value)}}
        myFruits={budget}
         />
      </form>

      <h2>Item you can but a Green color</h2>


      <table>
        <tbody>
          <thead>
          {
           itemsDetails.map((myFruits) => (
            <tr key={myFruits.id}>
              <td>{myFruits.name}</td>
              <td style={{color: myFruits.price<=budget && myFruits.price != 0 ? "green" : myFruits.price != 0 && myFruits.price ? "red" : "black"}}>{myFruits.price}</td>
            </tr>
           ))
          }
          </thead>
        </tbody>
      </table>
    </div>
  )
}

export default App
