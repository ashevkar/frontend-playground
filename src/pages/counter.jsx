import React, {useState} from 'react'


const Counter = () => {
    // let Counter = 20;
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    console.log(counter);
    // counter = counter + 1;
    setCounter(counter+1);
  };
  const decreaseValue = () => {
    setCounter(counter - 1);
  };
  const winner = () => {
    if (counter === 0 || counter == 20) {
      console.log("winner");
      return "winner";
    }
    // return null;
  };
  return (
    <div className="flex items-center justify-center min-h-screen">

    <div className="p-8 text-center bg-gray-100 rounded-2xl shadow-lg">
      <h2 className="mb-4">Counter value: {counter}</h2>
      <button className="mr-4 p-4 bg-blue-400 text-white rounded-xl" onClick={addValue} disabled = {counter == 20}>Increase value</button>
      <button className="p-4 bg-blue-400 text-white rounded-xl" onClick={decreaseValue} disabled = {counter == 0}>Decrease value </button>
      {winner() && ( 
        <h1 className="m-5 bg-green-200 text-green-800 p-4 rounded-xl ">{winner()}</h1>
        
      )}
      </div>
    </div>  
    )
}

export default Counter