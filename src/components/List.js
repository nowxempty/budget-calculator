import React, { useState } from 'react';

function List({ id, item, cost, onRemove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);
  const [editedCost, setEditedCost] = useState(cost);

  const submitEdit = () => {
    onEdit(id, { item: editedItem, cost: editedCost });
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center bg-white p-4 mb-2 shadow-md">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedItem}
            onChange={(e) => setEditedItem(e.target.value)}
          />
          <input
            type="number"
            value={editedCost}
            onChange={(e) => setEditedCost(parseInt(e.target.value, 10))}
          />
          <button onClick={submitEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="flex-1 flex justify-between items-center">
          <span className="text-gray-700 text-lg">{item} - {cost}원</span>
          <div className="flex justify-between items-center bg-white p-4 mb-2 shadow">
          <button onClick={() => setIsEditing(true)} >Edit</button>
          <span className="inline-block w-2"></span>
          <button onClick={() => onRemove(id)} >Remove</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
