import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gray-500 flex justify-center items-center">
      <div className="w-96 h-72 bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-8">

        <h1 className="text-4xl font-bold text-white">
          Counter App
        </h1>

        <h2 className="text-5xl font-bold text-white">
          {count}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={decrement}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            -
          </button>

          <button
            onClick={reset}
            className="px-5 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            +
          </button>
        </div>

      </div>
    </div>
  );
};

export default UseState;