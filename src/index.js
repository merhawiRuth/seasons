import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we call setState
        this.setState({ lat: position.coords.latitude });
        console.log(position);
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else {
      return <div>loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
