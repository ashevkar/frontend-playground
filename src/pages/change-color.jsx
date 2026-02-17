import React, { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div style={{ backgroundColor: color }} className="w-full h-screen ">
        <div className="fixed flex flex-wrap bottom-12 justify-center px-2 inset-x-0">
          <div className="flex flex-wrap bg-amber-50 px-3 py-2 rounded-2xl gap-3 text-amber-50">
            <button
              className="rounded-2xl px-4 py-1"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="rounded-2xl px-4 py-1"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="rounded-2xl px-4 py-1"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="rounded-2xl px-4 py-1"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeColor;
