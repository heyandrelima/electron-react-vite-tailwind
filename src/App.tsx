import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-[200px]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-[200px]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-6xl font-bold mt-6">Vite + React + Electron</h1>
      <div className="card">
        <button
          className="bg-gray-50 border-blue-100 p-2 rounded-2xl m-2 cursor-pointer hover:bg-blue-100 hover:text-blue-900 transition-all duration-200"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
