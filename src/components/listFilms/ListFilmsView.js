import React from "react";

const ListFilmsView =({films, onClick, textColor})=>{
    return (
        <div>
          {films.map((film) => (
            <div key={film.id}>
              <h1 style={{color:textColor}}>{film.name}</h1>
              <p>{film.rate}</p>
              <button onClick={onClick}>Değiştir</button>
              <hr />
            </div>
          ))}
        </div>
      );
}

export default ListFilmsView