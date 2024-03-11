import React from "react";
import List from "./List";

function Lists({ budgetData, setBudgetData }) {
  const handleRemove = (id) => {
    const newBudgetData = budgetData.filter(item => item.id !== id);
    setBudgetData(newBudgetData);
    localStorage.setItem("budgetData", JSON.stringify(newBudgetData));
  };

  const handleEdit = (id, newItem) => {
    const newBudgetData = budgetData.map(item => 
      item.id === id ? { ...item, ...newItem } : item
    );
    setBudgetData(newBudgetData);
    localStorage.setItem("budgetData", JSON.stringify(newBudgetData));
  };

  return (
    <div>
      {budgetData.map((data) => (
        <List
          key={data.id}
          id={data.id}
          item={data.item}
          cost={data.cost}
          onRemove={handleRemove}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default Lists;
