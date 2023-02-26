import React, { useState, useEffect } from "react";

import axios from "axios";

const ListFilms = () => {
  const [films, setFilms] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3004/films").then((res) => {
      setFilms(res.data);
    });
  }, []);
  
  if (films === null) return null;
  return (
    <div>
      {films.map((film) => (
        <div key={film.id}>
          <h1>{film.name}</h1>
          <p>{film.rate}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListFilms;
