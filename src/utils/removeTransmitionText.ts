export const removeTransmitionText = (text: string): string => {
  const phraseToRemove = "Transmisión en vivo";
  const phrase = text
    .split("|")
    .filter(oracion => !oracion.includes(phraseToRemove))
    .map(oracion => oracion.trim());
  const modifiedText = phrase.join("");

  return modifiedText;
};
