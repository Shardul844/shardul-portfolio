export function splitChars(text: string) {
  return text.split("").map((char, index) => ({
    key: `${index}-${char}`,
    char: char === " " ? "\u00A0" : char,
  }));
}

export function splitWords(text: string) {
  return text.split(" ").map((word, index) => ({
    key: `${index}-${word}`,
    word,
  }));
}
