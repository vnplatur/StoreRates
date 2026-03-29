import { useState } from "react";
import StarRating from "./StarRating";
import styles from "./Shops.module.css";

function ShopCard({ store }) {

  const [rating, setRating] = useState(store.userRating);

  const submitRating = () => {
    console.log("Submit rating:", rating);
  };

  return (
    <div className={styles.card}>

      <h3>{store.name}</h3>

      <p className={styles.address}>{store.address}</p>

      <div className={styles.ratingRow}>
        <span>Overall Rating</span>
        <strong>{store.rating} ⭐</strong>
      </div>

      <div className={styles.ratingRow}>
        <span>Your Rating</span>
        <StarRating rating={rating} setRating={setRating} />
      </div>

      <button
        className={styles.button}
        onClick={submitRating}
      >
        {store.userRating ? "Modify Rating" : "Submit Rating"}
      </button>

    </div>
  );
}

export default ShopCard;