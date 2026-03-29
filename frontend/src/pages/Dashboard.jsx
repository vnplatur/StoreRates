import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = ({ user,role }) => {

//   const role = role;
//   const user = user;
//   const role = user.role;

  return (
    <div className={styles.dashboardContainer}>

      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>Welcome, {user}</p>
      </div>

      {/* ADMIN SECTION */}
      {role === "admin" && (
        <div className={styles.section}>

          <h2 className={styles.sectionTitle}>Platform Overview</h2>

          <div className={styles.statsGrid}>

            <div className={styles.statCard}>
              <span>Total Users</span>
              <h3>120</h3>
            </div>

            <div className={styles.statCard}>
              <span>Total Stores</span>
              <h3>45</h3>
            </div>

            <div className={styles.statCard}>
              <span>Total Ratings</span>
              <h3>560</h3>
            </div>

          </div>

        </div>
      )}


      {/* USER STORE LIST */}
      {(role === "user" || role === "admin") && (

        <div className={styles.section}>

          <h2 className={styles.sectionTitle}>Stores</h2>

          <input
            className={styles.search}
            placeholder="Search store by name or address"
          />

          <div className={styles.storeGrid}>

            <div className={styles.storeCard}>
              <h3>ABC Store</h3>
              <p>Pune, Maharashtra</p>

              <div className={styles.ratingRow}>
                <span>Overall Rating</span>
                <strong>4.2 ⭐</strong>
              </div>

              <div className={styles.ratingRow}>
                <span>Your Rating</span>
                <strong>3 ⭐</strong>
              </div>

              <button className={styles.primaryBtn}>
                Submit / Modify Rating
              </button>
            </div>

          </div>

        </div>
      )}


      {/* STORE OWNER SECTION */}
      {role === "owner" && (

        <div className={styles.section}>

          <h2 className={styles.sectionTitle}>Store Performance</h2>

          <div className={styles.statCardLarge}>
            <span>Average Rating</span>
            <h2>4.5 ⭐</h2>
          </div>

          <div className={styles.tableContainer}>

            <table className={styles.table}>

              <thead>
                <tr>
                  <th>User</th>
                  <th>Rating</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>John Doe</td>
                  <td>5 ⭐</td>
                </tr>

                <tr>
                  <td>Jane Smith</td>
                  <td>4 ⭐</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>
      )}

    </div>
  );
};

export default Dashboard;