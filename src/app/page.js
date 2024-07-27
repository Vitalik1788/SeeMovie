'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getTrandingMovies } from "./fetch/fetchAPI";

export default function Home() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const film = await getTrandingMovies();
        setMovies(film.results);
      } catch (error) {
        setError(error.message)
      }
    }
    getMovies();
  }, []);

  console.log(movies);

  return (
    <main className={styles.main}>
      <div>

      </div>
    </main>
  );
}
