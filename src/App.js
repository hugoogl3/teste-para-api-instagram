import React from 'react';
import './App.css';
import FB from 'fb';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount()  {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '223113992581235',
        cookie     : true,  
        xfbml      : true,  
        version    : 'v2.1' 
      });
    }
  }

  render() {
    console.log('teste')
    FB.api('/me', function(response) {
      console.log(JSON.stringify(response));
    });

    return (
      <div className="App">
        <h1>teste</h1>
      </div>
    );

  }
}

export default App;
