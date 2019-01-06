import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./containers/App";
import store, { persistor } from "./store/createStore";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCKzoolP57usKCqwENuH9efSgRnc6o9jUw",
  authDomain: "curancy-app.firebaseapp.com",
  databaseURL: "https://curancy-app.firebaseio.com",
  projectId: "curancy-app",
  storageBucket: "curancy-app.appspot.com",
  messagingSenderId: "698191154842"
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={"Loading..."} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
