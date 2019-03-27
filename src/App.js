import React, {Component} from 'react';
import Ads from './components/Ads/Ads'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ads/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
