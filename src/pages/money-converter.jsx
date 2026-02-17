import React from "react";

const MoneyConverter = () => {
        



  return (
    <div className="flex justify-center  items-center  h-screen inset-">
      <div className="flex flex-col justify-center gap-2 w-[40rem] rounded-xl bg-transparent border-8 border-amber-200 p-4">
        <div className="flex gap-0  flex-col bg-amber-50 rounded-xl ">
          <div className="flex justify-between text-gray-500 m-3 p-3">
            <label for="money">From</label>
            <label for="currency">Currency type </label>
          </div>
          <div className="flex justify-between m-3">
            <input
              type="number"
              id="money"
              name="money"
              placeholder="Enter amount
                    "
              className="rounded-lg p-3 shadow"
            />
            <select
              id="currency"
              name="currency"
              className="w-[10rem] h-[
                    3rem] shadow rounded-lg p-3"
            ></select>
          </div>
        </div>
        <div className="flex  justify-center items-center">
          <button className="absolute border-2 rounded-xl bg-blue-500 p-2 text-white w-[5rem] ">swap</button>
        </div>
        <div className="flex gap-0  flex-col bg-amber-50 rounded-xl">
          <div className="flex justify-between text-gray-500 m-3 p-3">
            <label for="money">To</label>
            <label for="currency">Currency type </label>
          </div>
          <div className="flex justify-between m-3">
            <input
              type="number"
              id="money"
              name="money"
              placeholder="Enter amount"
              className="rounded-lg p-3 shadow"
            />
            <select
              id="currency"
              name="currency"
              className="w-[10rem] h-[
                    3rem] shadow rounded-lg p-3"
            ></select>
          </div>
        </div>
        <button className="bg-blue-800 text-white rounded-xl h-14 mt-3">Convert USD to INR</button>
      </div>
    </div>
  );
};

export default MoneyConverter;
