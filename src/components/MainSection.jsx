/* eslint-disable react/prop-types */
const MainSection = ({
  password,
  handleCopyPassword,
  handleGeneratePassword,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default MainSection;
