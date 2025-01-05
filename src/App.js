import React, { useState } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";

// Array of rejection messages
const rejectionTexts = [
  "Cũng cũng",
  "Từ từ",
  "Để xem sao",
  "Chắc chưa?",
  "Anh biết bé yêu anh",
  "Đừng hòng thoát khỏi tay anh",
];

// Helper function to get a random rejection message
const getRandomRejectionText = (lastIndex) => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * rejectionTexts.length);
  } while (randomIndex === lastIndex);

  return { text: rejectionTexts[randomIndex], index: randomIndex };
};

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);

  const handleAccept = () => setAccepted(true);

  const handleReject = () => {
    setRejected(true);
    const { text, index } = getRandomRejectionText(lastRejectedIndex);
    setNoButtonText(text);
    setLastRejectedIndex(index);
  };

  return (
    <div className="App">
      <div className="App-body">
        {/* Asking to be my Valentine */}
        {!accepted && (
          <Asking
            gif={rejected ? madBear : flowerBear}
            altText={rejected ? "Rejected Bear" : "I love you Bear"}
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
          />
        )}

        {/* She said YES! */}
        {accepted && <Success />}
      </div>
    </div>
  );
};

export default App;
