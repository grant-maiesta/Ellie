import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a heartfelt message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <section className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="A cute gif of kisses, symbolizing love and joy" />
    
    {/* Personalized success messages */}
    <p className="App-text-success">
      Thank you, my lovely Ellie! Let us spend many more years together.
      May my life become yours, and yours become mine.
      I love you with all my heart and soul.  
      <br />
      <strong>Grant</strong>
    </p>
    
    <p className="App-text-success">
      Looking forward to spending our lives together, Ellie.
    </p>
    
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">12/01/2025</p>
  </section>
);

export default Success;
