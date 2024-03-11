import React from 'react'

export default function Form({ handleSubmit, item, setItem, cost, setCost }) {

    const handleItemChange = (e) => {
        setItem(e.target.value);
    };

    const handleCostChange = (e) => {
        setCost(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
          <div className="flex flex-col mb-4">
           <div className="flex flex-1">
            <div className="flex-1 mr-2">
                  <label htmlFor="item" className="block text-sm font-medium text-gray-700">지출 항목</label>
                  <input 
                      type="text"
                      name="item"
                      className="w-full p-2 border-2 border-gray-300 block shadow-sm sm:text-sm rounded-md"
                      placeholder="예) 렌트비"
                      value={item}
                      onChange={handleItemChange}
                  />
              </div>
              <div className="flex-1 ml-2">
                  <label htmlFor="cost" className="block text-sm font-medium text-gray-700">비용</label>
                  <input 
                      type="number"
                      name="cost"
                      className="w-full p-2 border-2 border-gray-300 block shadow-sm sm:text-sm rounded-md"
                      placeholder="예) 100"
                      value={cost}
                      onChange={handleCostChange}
                  />
              </div>
              </div>
              <div className="flex flex-col justify-end">
              <input 
                  type="submit"
                  value="제출"
                  className="mt-2 p-1 bg-blue-500 text-white text-xs rounded shadow-lg w-24 self-end mr-2"
              />
              </div>
          </div>

        </form>
    )
}
