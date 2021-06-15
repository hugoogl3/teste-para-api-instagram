import React from 'react';
import './App.css';
import FB from 'fb';
import { render } from 'react-dom';

let Teste = "teste"
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
    FB.api(
      '/oauth/authorize',
      'GET',
      {
        "client_id": "223113992581235",
        "redirect_uri": "https://www.hugodk33.github.io/cv",
        "scope": 'code',
        "access_token": "EAADK68ZAFsHMBAHvL9e2SJPVRisNyCZB8ZAIABrPBa6QRdoyujgh88zDF5QptwbTFJJllDaYu7wQT8frN3MMRTCbGhB0JhaX22qwp4rXWUwEKVA4eo68ZB9yhgYDPfZCnawzdAd9vPPiDekn5CoARtZAMDT5ehgVzoPqjqlLdCZB10sGjmItI8ytoUwm4O8UrieZBE0DAGjdOQZDZD" 
      },
      function(response) {
        console.log("resposta")
        console.log(response)
      }
    );

    return (
      <div className="App">
        <h1>testado API do instagram</h1>
      </div>
    );

  }
}

export default App;
