/* eslint-disable react/prop-types */
const InputSection = ({
  handlePassLength,
  length,
  handleLowerCase,
  includeLowerCase,
  handleUpperCase,
  includeUpperCase,
  handleNumbers,
  includeNumbers,
  handleSymbols,
  includeSymbols,
}) => {
  return (
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
          onChange={handleUpperCase}
          type="checkbox"
          checked={includeUpperCase}
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <label>Include LowerCase Letter</label>
        <input
          onChange={handleLowerCase}
          type="checkbox"
          checked={includeLowerCase}
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <label>Include Numbers</label>
        <input
          onChange={handleNumbers}
          type="checkbox"
          checked={includeNumbers}
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <label>Include Symbols</label>
        <input
          onChange={handleSymbols}
          type="checkbox"
          checked={includeSymbols}
        />
      </div>
    </div>
  );
};

export default InputSection;
