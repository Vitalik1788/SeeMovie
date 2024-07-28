import css from './FilmCard.module.css'

export default function FilmCard({ movie }) {
  const { backdrop_path, title } = movie;

  console.log(movie);

  return (
    <div className={css.box}>
      <img
        className={css.poster}
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt={title}
      />
      <h2 className={css.film_title}>{title}</h2>
      <div className={css.button_box}>
        <button className={css.styled_button}>Деталі</button>
        <button className={css.styled_button}>Трейлер</button>
      </div>
    </div>
  );


}