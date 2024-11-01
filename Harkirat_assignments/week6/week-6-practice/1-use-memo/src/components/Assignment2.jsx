import react, { useMemo, useState } from "react";

// in this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// the goal is to use usememo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// you will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const total_lines = 1000;
const all_words = [];
for (let i = 0; i < total_lines; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " ";
  }
  all_words.push(sentence);
}

export function Assignment2() {
  const [sentences, setsentences] = useState(all_words);
  const [filter, setfilter] = useState("");

  const filteredsentences = useMemo(
    () => sentences.filter((x) => x.includes(filter)),
    [sentences, filter],
  );

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setfilter(e.target.value);
        }}
      ></input>
      {filteredsentences.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
    </div>
  );
}

