import React, { useState, useEffect } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";

// Array of rejection messages
const rejectionTexts = [
  "Cũng cũng..",
  "Cứ từ từ..",
  "Để xem sao..",
  "Cứ hớn hở hớn hở thế nhở!",
  "Em chắc chưa?",
  "Anh biết bé yêu anh.",
  "Đừng hòng thoát khỏi tay anh!",
];

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [currentRejectionIndex, setCurrentRejectionIndex] = useState(0);
  const [showStaticMessage, setShowStaticMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStaticMessage(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => setAccepted(true);

  const handleReject = () => {
    setRejected(true);
    const nextIndex = (currentRejectionIndex + 1) % rejectionTexts.length;
    setNoButtonText(rejectionTexts[nextIndex]);
    setCurrentRejectionIndex(nextIndex);
  };

  return (
    <div className="App">
      <div className="App-body">
        {showStaticMessage ? (
          <div>
            <h1 style={{ fontFamily: 'Lobster, cursive' }}>Dear my Ellie!</h1>
            <p>This website is created by Grant for Ellie.</p>
          </div>
        ) : (
          <>
            {!accepted && (
              <Asking
                gif={rejected ? madBear : flowerBear}
                altText={rejected ? "Rejected" : "I love you"}
                handleAccept={handleAccept}
                handleReject={handleReject}
                noButtonText={noButtonText}
              />
            )}
            {accepted && <Success />}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
