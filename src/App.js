import "./App.css";
import { useState } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";

const initialBudgetData = localStorage.getItem("budgetData") 
  ? JSON.parse(localStorage.getItem("budgetData")) 
  : [];

function App() {
  const [budgetData, setBudgetData] = useState(initialBudgetData);
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newBudgetItem = {
      id: Date.now(),
      item: item,
      cost: parseInt(cost),
    };

    setBudgetData((prev) => [...prev, newBudgetItem]);
    localStorage.setItem("budgetData", JSON.stringify([...budgetData, newBudgetItem]));

    setItem("");
    setCost("");
  };

  const handleRemoveClick = () => {
    setBudgetData([]);
    localStorage.setItem("budgetData", JSON.stringify([]));
  };

  const totalCost = budgetData.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <div className="container mx-auto mt-10 bg-yellow-200 p-8">
      <h1 className="text-3xl font-bold mb-6">예산 계산기</h1>
      <div className="w-full bg-white p-4">
        <Form 
          handleSubmit={handleSubmit} 
          item={item} setItem={setItem} 
          cost={cost} setCost={setCost} 
        />
      </div>
      <div className="w-full bg-white p-4">
        <Lists budgetData={budgetData} setBudgetData={setBudgetData} />
      </div>
      <div className="text-right text-xl mt-4">
        <p >총지출: <span>{totalCost}원</span></p>
      </div>
        <button onClick={handleRemoveClick} className="p-2 bg-red-600 text-white text-xs rounded shadow-lg mt-4 mr-4 bottom-4 left-4">Delete All</button>
      
    </div>
  );
}

export default App;
