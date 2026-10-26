function order(words: string): string {
  if (words.trim() === "") {
    return "";
  }

  return words
    .split(" ")
    .sort((a, b) => {
      const numA = [...a].find((char) => char >= "1" && char <= "9");
      const numB = [...b].find((char) => char >= "1" && char <= "9");
      return Number(numA) - Number(numB);
    })
    .join(" ");
}

export { order as stringOrder };
