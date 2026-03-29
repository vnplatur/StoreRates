import { useState } from "react";
import ShopCard from "./ShopCard";
import styles from "./Shops.module.css";

function Shops() {

  const [search, setSearch] = useState("");

  const stores = [
    {
      id: 1,
      name: "Fresh Mart",
      address: "Pune",
      rating: 4.2,
      userRating: 3
    },
    {
      id: 2,
      name: "City Electronics",
      address: "Mumbai",
      rating: 4.5,
      userRating: 0
    }
  ];

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(search.toLowerCase()) ||
    store.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>

      <h2 className={styles.title}>Shops</h2>

      <input
        className={styles.search}
        placeholder="Search store by name or address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.grid}>
        {filteredStores.map((store) => (
          <ShopCard key={store.id} store={store} />
        ))}
      </div>

    </div>
  );
}

export default Shops;