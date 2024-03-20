import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from './Dashboard.module.css'; // Убедитесь, что путь к файлу правильный

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className={styles.dashboard}>
      <h1 className="p-4 py-2 bg-light box-shadow">
        <Link to="/" className={styles.dashboardLink}>
          {location?.state || "Dashboard"}
        </Link>
      </h1>
      <Outlet />
    </div>
  );
};

export default Dashboard;
