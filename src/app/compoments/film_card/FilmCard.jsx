import { useState } from 'react';
import DetailModal from '../detail_modal/Modal';
import css from './FilmCard.module.css';


export default function FilmCard({ movie }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeModal() {
    setModalIsOpen(false);
    document.body.style.overflowY = 'unset';
  }

  const { backdrop_path, title } = movie;

  return (
    <>
      <div className={css.box}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
        />
        <h2 className={css.film_title}>{title}</h2>
        <div className={css.button_box}>
          <button onClick={openModal} className={css.styled_button}>
            Деталі
          </button>
          <button className={css.styled_button}>Трейлер</button>
        </div>
      </div>
      <DetailModal movie={movie} modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );


}