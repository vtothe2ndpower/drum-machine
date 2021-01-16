import React, { Component } from 'react';
import DrumPad from './DrumPad';

class DrumPanel extends Component {
  static defaultProps = {
    buttonID: [],
    audioID: ["Q", "W", "E", "S", "D", "Z", "X", "C"],
    audioSrc: []
  }

  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, id) {
    // Play audio in the 
    const button = document.getElementById(id);
    const audioTag = button.getElementsByTagName("audio");
    const audio = audioTag[0];

    button.addEventListener('click', () => {
    	console.log('Button Clicked!');
      console.log(audioTag);
      audio.play();
    });
  }

  render() {
    return (
      <div>
        <h2>Drum Panel Component</h2>

        <div id="drum-machine">

          <div id="display"></div>

          {this.props.map()}
          <DrumPad  />

        </div>
        
      </div>
    )
  }
}

export default DrumPanel;

// Lots of repetition - how can I make this dry

// <!DOCTYPE html>
// <html>
// <body>

// <h1>The audio src attribute</h1>

// <p>Click on the play button to play a sound:</p>

// <button id="butt">
// 	Q <audio src="horse.ogg"></audio>
// </button>


// <p><b>Note:</b> The .ogg fileformat is not supported in IE or Safari.</p>

// </body>
// <script>
// 	const button = document.getElementById('butt');
//     const audioTag = button.getElementsByTagName("audio");
//     const audio = audioTag[0];
    
    
//     button.addEventListener('click', () => {
//     	console.log('Button Clicked!');
//         console.log(audioTag);
//         audio.play();
//     });

// </script>
// </html>