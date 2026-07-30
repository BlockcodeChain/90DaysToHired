import { useState, useEffect } from "react";

const DateTime = ({ dark }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = time.toLocaleDateString();
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="flex justify-center items-center">
      <h2
        className={`text-3xl w-96 flex justify-center rounded-3xl bg-gray-400 py-3 ${
          dark ? "text-red-600/80" : "text-white"
        } font-medium`}
      >
        {formattedDate} - {formattedTime}
      </h2>
    </div>
  );
};

export default DateTime;