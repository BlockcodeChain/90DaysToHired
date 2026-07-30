import { useState } from "react";

const Input = ({ dark }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const btnhandle = () => {
    if (task.trim() === "") return;

    setTasks((prev) => [...prev, task]);
    setTask("");
  };
  const clearbtn=()=>{
    setTasks("")
  }
  return (
    <div className="w-full py-3 mt-10 flex justify-center items-center flex-col">
      {/* Input */}
      <div className="px-4 flex">
        <input
          type="text"
          placeholder="AAJ KA KAAM"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className={`border px-4 py-2 rounded-l-2xl outline-none ${
            dark
              ? "text-blue-600 border-blue-400"
              : "text-white border-gray-400 bg-gray-800"
          }`}
        />

        <button
          onClick={btnhandle}
          className={`font-medium rounded-r-2xl border px-4 py-2 cursor-pointer active:scale-95 transition-all duration-300 ${
            dark
              ? "text-blue-500 hover:bg-blue-500 hover:text-white"
              : "text-white hover:bg-white hover:text-black"
          }`}
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="w-full max-w-md mt-10 shadow-blue-300 shaodw-md border-gray-400/50 border px-4 h-96 rounded-2xl py-2   overflow-y-auto">
        {tasks.length === 0 ? (
          <div
            className={`w-full p-6 rounded-xl shadow-md ${
              dark ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <h2
              className={`text-center text-lg font-semibold ${
                dark ? "text-white" : "text-red-600"
              }`}
            >
              No Task Found 😔
            </h2>
          </div>
        ) : (
          <div className="space-y-4">
            {tasks.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 ${
                  dark
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <span className="font-medium wrap-break-words">{item}</span>

                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition">
                    Edit
                  </button>

                  <button className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 active:scale-95 transition">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
        <button className={`text-red-600 bg-white mt-10 border py-2 px-5 rounded font-medium active:scale-90`} onClick={clearbtn}>Clear All</button>
    </div>
  );
};

export default Input;