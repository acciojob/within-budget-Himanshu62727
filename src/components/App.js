import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const itemsDetails = [
    { id: 1, name: "Apple", price: 20 },
    { id: 2, name: "Banana", price: 10 },
    { id: 3, name: "Neutella", price: 30 },
    { id: 4, name: "Razor", price: 5 },
    { id: 5, name: "CornFlakes", price: 15 },
    { id: 6, name: "Sound Bar", price: 50 },
    { id: 7, name: "iPhone", price: 80 }
  ];

  const [budget, setBudget] = useState(0);

  return (
    <div>
      {/* Do not remove the main div */}

      <h2>Enter your Budget to check available Items:</h2>

      <form>
        <input 
          type="number" 
          placeholder="Enter budget"
          onChange={(e) => setBudget(Number(e.target.value))}
          value={budget}
        />
      </form>

      <h2>Items you can buy are in Green</h2>

      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            itemsDetails.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td style={{color: item.price <= budget ? "green" : "red"}}>
                  {item.price}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
