import { useState } from "react";

// need to change the zeros to hits from db
const hits_db = [0, 0, 0, 0];

export default function Reactions() {

  // increase the size and color emoji on click
  const [reaction, setReaction] = useState(null);

  // number of different reactions on the article
  const [hits, setHits] = useState(hits_db);

  function handleFaceClick(key, index) {
    // visual change
    setReaction(key);

    // console.log(key, "was clicked", "this is the reaction:", reaction);

    console.log("selected:", reactionSelected);
    const isNotSelected = key !== null;

    if (isNotSelected) {
      // console.log("not selected");
      setHits(prevHits => {
        const newHits = [];
        let i = 0;
        while (i < prevHits.length) {
          if (key == i) {
            newHits.push(prevHits[i]+1);
          } else {
            newHits.push(prevHits[i]);
          }
          i++;
        }
        return newHits;
      });

    } else {
      // console.log("selected");
      // console.log(hits);
      setHits(prevHits => {
        const newHits = [];
        let i = 0;
        while (i < prevHits.length) {
          // keys is null
          if (index == i) {
            newHits.push(prevHits[i]-1);
          } else {
            newHits.push(prevHits[i]);
          }
          i++;
        }
        return newHits;
      });
    }
  }

  const faces = ["😭", "😐", "😀", "🤩"];

  const Faces = faces.map((face, i) => {

    return (reaction == i)
      ? <div
        key={i}
        className="face face-selected"
        onClick={() => handleFaceClick(null, i)}
      >
        {face}
      </div>
      : <div
          key={i}
          className="face"
          onClick={() => handleFaceClick(i, i)}
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
        {hit}
      </div>
    );
  });

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