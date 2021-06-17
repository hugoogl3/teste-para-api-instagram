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
  ///oauth/authorize
  render() {
    FB.api(
      '/oauth/authorize',
      'GET',

      {
        "client_id": "223113992581235",
        "redirect_uri": "https://hugoogl3.github.io/teste-para-api-instagram/",
        "scope": 'code',
        "access_token": "EAADK68ZAFsHMBABSwarwq0wNahOf5OUeXTIZAQpumJsHkgomcxksIxso2YH1RYGEAHe85lkhdfZCgb2VC6kLiwUR5ZBzZC3HOZChvim8EJwF4lEhgfbYhLkXt5rZCF1RewXoDoDufQNbwzDyjwXzvxvLX0VcDVrD03EVNZBriK6olIFg2I9bBftMkiGZCwIzCLmhIM10aRFTC7gZDZD" 
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
