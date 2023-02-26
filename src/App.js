import React from "react";

import ListFilms from "./components/ListFilms";

import ListFilmsController from "./components/listFilms/ListFilmsController";

import ListFilms2 from "./components/ListFilms2";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <h1>MVC - Film Listeleme</h1>
      {/* <ListFilms /> */}
      {/* <ListFilmsController /> */}
      <ListFilms2 />
    </div>
  );
}

export default App;
