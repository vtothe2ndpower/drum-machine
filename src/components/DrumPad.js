import React, { Component } from 'react';

class DrumPad extends Component {
  render() {
    const { buttonID, audioID, audioSrc, handleClick } = this.props;
    return (
      <div>
        <h3>Drum Pad Component</h3>

        <button className="drum-pad" id={buttonID} onClick={handleClick}>{audioID}
            <audio src={audioSrc} className="clip" id={audioID}></audio>
        </button>
        
      </div>
    )
  }
}

export default DrumPad;