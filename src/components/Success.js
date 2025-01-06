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
  Thank you, my lovely Ellie!<br />
  Let us spend many more years together.<br />
  May my life becomes yours, and yours becomes mine.<br />
  I love you with all my heart and soul.  
  <br />
 <span style={{ display: 'block', fontSize: '1.3em', marginTop: '20px' }}>❤️   <strong>   Grant Mai   </strong>   ❤️</span>
</p>
    
    <p className="App-text-success">
      I am looking forward to spending our life together, Ellie.
    </p>
    
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">12/01/2025</p>
  </section>
);

export default Success;
