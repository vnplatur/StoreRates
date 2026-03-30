import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Discover and Rate the Best Stores</h1>

          <p>
            Our platform allows users to explore stores, share ratings,
            and help others find the best shopping experiences.
          </p>

          <div className={styles.buttons}>
            <NavLink to="/shops" className={styles.primaryBtn}>
              Browse Shops
            </NavLink>

            <NavLink to="/register" className={styles.secondaryBtn}>
              Join Now
            </NavLink>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>

        <h2>Platform Features</h2>

        <div className={styles.featureGrid}>

          <div className={styles.card}>
            <h3>Explore Stores</h3>
            <p>
              Search and discover stores by name or address across the platform.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Rate Stores</h3>
            <p>
              Submit ratings between 1 to 5 stars and share your experience.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Track Performance</h3>
            <p>
              Store owners can track ratings and view user feedback.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Admin Management</h3>
            <p>
              Admins can manage users, stores, and monitor platform statistics.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className={styles.cta}>

        <h2>Start Exploring Stores Today</h2>

        <NavLink to="/shops" className={styles.primaryBtn}>
          View Shops
        </NavLink>

      </section>

    </div>
  );
}

export default Home;