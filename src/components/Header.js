import React from "react";

import useFetchFilms from "../hooks/useFetchFilms";

const Header = ()=>{
    const {success,films}=useFetchFilms()
    return(
        <header>
            <p>Film Sayısı: {success === true && films.length}</p>
        </header>
    )
}

export default Header