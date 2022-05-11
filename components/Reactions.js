import { useState } from "react";

export default function Reactions() {

  const [reaction, setReaction] = useState(null);
  const [hits, setHits] = useState([0, 0, 0, 0]);

  function handleFaceClick(key) {
    setReaction(key);
  }

  const faces = ["😭", "😐", "😀", "🤩"];

  const Faces = faces.map((face, i) => {

    return (reaction == i)
      ? <div
        key={i}
        className="face face-selected"
        onClick={() => handleFaceClick(null)}
      >
        {face}
      </div>
      : <div
        key={i}
        className="face"
        onClick={() => handleFaceClick(i)}
      >
        {face}
      </div>
  });

  const Hits = hits.map((hit, i) => {
    return (
      <div
        key={i}
        className="hit"
      >
        <span>{hits[i]}</span>
      </div>
    );
  })  

  return (
    <>
    <div className="reactions">
      {Faces}
    </div>
    <div className="hits">
      {Hits}
    </div>
    </>
  );
}