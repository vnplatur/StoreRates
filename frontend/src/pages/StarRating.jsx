import styles from "./Shops.module.css";

function StarRating({ rating, setRating }) {

  return (
    <div className={styles.stars}>

      {[1,2,3,4,5].map((star) => (

        <span
          key={star}
          className={
            star <= rating
              ? styles.starActive
              : styles.star
          }
          onClick={() => setRating(star)}
        >
          ★
        </span>

      ))}

    </div>
  );
}

export default StarRating;