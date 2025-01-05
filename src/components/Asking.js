import React from "react";

/**
 * Asking component for proposing the Valentine's Day question.
 *
 * @param {string} gif - The URL or import path of the chosen gif.
 * @param {string} altText - The alt text for the displayed gif.
 * @param {function} handleAccept - Callback function for accepting the proposal.
 * @param {function} handleReject - Callback function for rejecting the proposal.
 * @param {string} noButtonText - The text to be displayed on the rejection button.
 * @returns {JSX.Element} JSX element representing the Asking component.
 */
const Asking = ({ gif, altText, handleAccept, handleReject, noButtonText }) => (
  <div className="asking-container">
    {/* Displaying the chosen gif with alt text */}
    <img className="App-gif" src={gif} alt={altText} />
    {/* Asking the special question with personalized name */}
    <p className="App-text">
      Hi Ellie, it has been a wonderful month even though we are apart.
    </p>
    <p className="App-text">It is silly to ask again, but I love you so much.</p>
    <p className="App-text">Ellie, will you be my Valentine?</p>
    <div className="button-group">
      {/* Button for accepting the proposal */}
      <button 
        className="App-button" 
        onClick={handleAccept} 
        aria-label="Accept and be my Valentine"
      >
        Yes
      </button>
      {/* Button for rejecting the proposal with dynamic text */}
      <button 
        className="App-button" 
        onClick={handleReject} 
        aria-label={`Reject with message: ${noButtonText}`}
      >
        {noButtonText}
      </button>
    </div>
  </div>
);

export default Asking;
