import './App.css';
import ScrollBox from './ScrollBox';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
            <ScrollBox 
              ref={(ref)=> this.scrollBox=ref}
            />
            <button onClick={()=> this.scrollBox.scrollToBottom()}>
              to the Bottom
            </button>
        </div>
    );
  }
}

export default App;
