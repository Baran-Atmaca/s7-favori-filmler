import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SavedList from "./components/SavedList";
import {movies} from "./movies.js";
import MovieDetails from "./components/MovieDetails.jsx";
import MoviesList from "./components/MoviesList.jsx";
// movies arrayini movies.js dosyasından import et

function App() {
  /*
    - kaydedilmiş filmler ve film listesi için 2 tane state tanımla.
    - film listesi için tanımladığın state'in başlangıç değerini movies.js'deki movies objesi olarak belirle.
    - kaydedilmiş filmler için tanımladığın state'in başlangıç değeri boş array olsun. 
    - bunu SavedList componentına prop olarak gönder.
  */
  const [filmListesi, setFilmListesi] = useState(movies);
  const [savedFilm, setSavedFilm] = useState([]);

  const handleSave = (movie) => {
    /*
      - bu fonksiyon, parametre olarak aldığı movie'yi kaydedilmiş filmlere eklemeli.
      - aynı filmi 2. kez eklememeli.
      - bu fonksiyonu "Kaydet" butonunun olduğu componente prop olarak gönder.
    */
    if (savedFilm.find((item) => item.id === movie.id)) {
      return;
  } else {
      setSavedFilm([...savedFilm, movie]);
  }
  };

  return (
    <div className="page-container">
      <h1 className="grand-hotel-regular">Favori Filmlerim</h1>
      <div className="content">
        {/* 
          2 adet route tanımla:.
            - 1. route '/' olacak, MoviesList componentini görüntüleyecek ve ona film listesini props olarak yollayacak.
            - 2. route `/filmler/` parametresinden sonra `id` parametresini alacak  (örnek: `/filmler/2`, `/filmler/3`)
            - Bu route `MovieDetails` componentini görüntüleyecek.
        */}

        <Switch>
          <Route exact path="/">
              <MoviesList movies={filmListesi}/>
          </Route>
          <Route path="/filmler/:id">
                <MovieDetails onSave={handleSave}/>
          </Route>
        </Switch>

        <SavedList savedList={savedFilm}/>
      </div>
    </div>
  );
}

export default App;
