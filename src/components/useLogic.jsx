const useGeneratePassword = ({
  includeLowerCase,
  includeUpperCase,
  includeSymbols,
  includeNumbers,
  charSets,
  setPassword,
  length,
}) => {
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
  return { handleGeneratePassword };
};

export default useGeneratePassword;
