import React, { Component } from 'react';
import Header from './components/root/header';
import Footer from './components/root/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        {React.cloneElement(this.props.children, {
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
