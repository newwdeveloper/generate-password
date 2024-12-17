import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border p-8 bg-white shadow-md rounded-lg w-fit">
        <div className="mb-6 text-center">
          <p className="font-bold text-5xl">Password Generator</p>
        </div>
        <div className="mb-4">
          <input
            type="text"
            alt="password shown here"
            className="border w-full p-2 rounded"
            placeholder="Your password here"
          />
        </div>
        <div className="flex justify-between mb-6 space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Generate
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Copy Password
          </button>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <label>Password Length</label>
            <input
              type="number"
              alt="enter number"
              className="border w-20 p-1 rounded"
            />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label>Include UpperCase Letter</label>
            <input type="checkbox" alt="checkbox" />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label>Include LowerCase Letter</label>
            <input type="checkbox" alt="checkbox" />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label>Include Numbers</label>
            <input type="checkbox" alt="checkbox" />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label>Include Symbols</label>
            <input type="checkbox" alt="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
