import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copyMessage, setCopyMessage] = useState(""); // New state for pop-up message

  const charSets = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    specialChar: "!@#$%^&*()",
  };

  const handleGeneratePassword = () => {
    let allCharacterset = "";
    let generatePassword = "";

    if (includeUpperCase) allCharacterset += charSets.upperCase;
    if (includeLowerCase) allCharacterset += charSets.lowerCase;
    if (includeNumbers) allCharacterset += charSets.number;
    if (includeSymbols) allCharacterset += charSets.specialChar;

    for (let i = 0; i < length; i++) {
      generatePassword += allCharacterset.charAt(
        Math.floor(Math.random() * allCharacterset.length)
      );
    }

    setPassword(generatePassword);
  };

  const handlePassLength = (e) => {
    setLength(e.target.value);
  };

  const handleUpperCase = () => {
    setIncludeUpperCase(!includeUpperCase);
  };

  const handleLowerCase = () => {
    setIncludeLowerCase(!includeLowerCase);
  };

  const handleNumbers = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const handleSymbols = () => {
    setIncludeSymbols(!includeSymbols);
  };

  // Function to copy the password to the clipboard and show pop-up message
  const handleCopyPassword = () => {
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          setCopyMessage("Password copied!"); // Show pop-up message
          setTimeout(() => {
            setCopyMessage(""); // Hide pop-up message after 2 seconds
          }, 2000);
        })
        .catch((error) => {
          setCopyMessage("Failed to copy password!"); // Show error message
          setTimeout(() => {
            setCopyMessage(""); // Hide error message after 2 seconds
          }, 2000);
        });
    } else {
      setCopyMessage("No password to copy!"); // Show message if no password exists
      setTimeout(() => {
        setCopyMessage(""); // Hide message after 2 seconds
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border p-8 bg-white shadow-md rounded-lg w-fit relative">
        <div className="mb-6 text-center">
          <p className="font-bold text-5xl">Password Generator</p>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="border w-full p-2 rounded"
            placeholder="Your password here"
          />
        </div>
        <div className="flex justify-between mb-6 space-x-4">
          <button
            onClick={handleGeneratePassword}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Generate Password
          </button>
          <button
            onClick={handleCopyPassword}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Copy Password
          </button>
        </div>

        {/* Pop-up message positioned outside the box */}
        {copyMessage && (
          <div className="absolute top-0 right-0 mt-4 mr-4 p-2 text-center text-white bg-red-500 rounded">
            {copyMessage}
          </div>
        )}

        <div>
          <div className="flex justify-between items-center mb-4">
            <label>Password Length</label>
            <input
              onChange={handlePassLength}
              type="number"
              value={length}
              min="4"
              max="20"
              className="border w-20 p-1 rounded"
            />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label>Include UpperCase Letter</label>
            <input
              onClick={handleUpperCase}
              type="checkbox"
              checked={includeUpperCase}
            />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label>Include LowerCase Letter</label>
            <input
              onClick={handleLowerCase}
              type="checkbox"
              checked={includeLowerCase}
            />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label>Include Numbers</label>
            <input
              onClick={handleNumbers}
              type="checkbox"
              checked={includeNumbers}
            />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label>Include Symbols</label>
            <input
              onClick={handleSymbols}
              type="checkbox"
              checked={includeSymbols}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
