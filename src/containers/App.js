import React, { Component } from "react";
import Routers from "../routers/Routers";
import firebase from "firebase/app";

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCKzoolP57usKCqwENuH9efSgRnc6o9jUw",
      authDomain: "curancy-app.firebaseapp.com",
      databaseURL: "https://curancy-app.firebaseio.com",
      projectId: "curancy-app",
      storageBucket: "curancy-app.appspot.com",
      messagingSenderId: "698191154842"
    });
  }

  render() {
    return <Routers />;
  }
}

export default App;
