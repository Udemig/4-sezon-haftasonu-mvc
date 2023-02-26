import React, { useState, useEffect } from "react";

import ListFilmsView from "./ListFilmsView";
import axios from "axios";

const ListFilmsController = () => {
  const [films, setFilms] = useState(null);
  const [textColor, setTextColor] = useState("black");

  const changeColor = () => {
    if (textColor === "black") {
      setTextColor("red");
    }
    if (textColor === "red") {
      setTextColor("black");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3004/films").then((res) => setFilms(res.data));
  }, []);
  if (films === null) return null;
  return (
    <ListFilmsView textColor={textColor} films={films} onClick={changeColor} />
  );
};

export default ListFilmsController;
