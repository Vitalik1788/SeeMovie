'use client';

import { useEffect, useState } from 'react';
import css from './page.module.css';
import { getTrandingMovies } from './fetch/fetchAPI';
import FilmCard from './compoments/film_card/FilmCard';


export default function Home() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');  

  useEffect(() => {
    const getMovies = async () => {
      try {
        const film = await getTrandingMovies();
        setMovies(film.results.splice(0,12));
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <main className={css.main}>
      <ul className={css.list_style}>
        {movies &&
          movies.map((movie) => {            
            return (
              <li key={movie.id}>
                <FilmCard
                  movie={movie}                  
                />
              </li>
            );
          })}
      </ul>
    </main>
  );
}
