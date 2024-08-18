import Modal from 'react-modal';
import css from './Modal.module.css';
import { IoMdCloseCircle } from 'react-icons/io';
import StarRatings from 'react-star-ratings';

export default function DetailModal({ movie, modalIsOpen, closeModal }) {
  console.log(movie);

  const { backdrop_path, title, release_date, vote_average, overview } = movie;
  const reliaseDate = new Date(release_date).toLocaleDateString('uk-UK');

  return (
    <div>
      <Modal
        className={css.modal_css_style}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <IoMdCloseCircle
          onClick={closeModal}
          className={css.close_cross}
          size={25}
        />
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
        />
        <h1 className={css.title}>{title}</h1>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}
        >
          <p className={css.rating}>Рейтинг:</p>
          <StarRatings
            rating={vote_average}
            starRatedColor="gold"
            numberOfStars={10}
            starDimension="20px"
            starSpacing="3px"
          />
        </div>
        <p className={css.reliase}>Дата виходу: {reliaseDate}</p>
        <p className={css.overwiev}>Опис: {overview}</p>
      </Modal>
    </div>
  );
}
