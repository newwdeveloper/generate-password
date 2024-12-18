import { useState } from "react";
import "./App.css";
import useGeneratePassword from "./components/useLogic";
import useHandleCopy from "./components/useHandleCopy";
import MainSection from "./components/MainSection";
import InputSection from "./components/InputSection";

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
  const { handleGeneratePassword } = useGeneratePassword({
    includeLowerCase,
    includeUpperCase,
    includeSymbols,
    includeNumbers,
    charSets,
    length,
    setPassword,
  });

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
  const { handleCopyPassword } = useHandleCopy({ password, setCopyMessage });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border p-8 bg-white shadow-md rounded-lg w-fit relative">
        <MainSection
          password={password}
          handleCopyPassword={handleCopyPassword}
          handleGeneratePassword={handleGeneratePassword}
        />
        {/* Pop-up message positioned outside the box */}
        {copyMessage && (
          <div className="absolute top-0 right-0 mt-4 mr-4 p-2 text-center text-white bg-red-500 rounded">
            {copyMessage}
          </div>
        )}
        <InputSection
          handlePassLength={handlePassLength}
          length={length}
          handleLowerCase={handleLowerCase}
          includeLowerCase={includeLowerCase}
          handleUpperCase={handleUpperCase}
          includeUpperCase={includeUpperCase}
          handleNumbers={handleNumbers}
          includeNumbers={includeNumbers}
          handleSymbols={handleSymbols}
          includeSymbols={includeSymbols}
        />
      </div>
    </div>
  );
}

export default App;
