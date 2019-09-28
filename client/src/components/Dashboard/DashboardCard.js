import React, { useState } from "react";
import "./Dashboard.css";

function DashboardCard({ headline, children }) {
  return (
    <div className="dashboard-card d-flex flex-column p-3 mb-4">
      <div className="dash-card-header">{headline}</div>
      <div className="mt-2 dash-content">
        <div className="d-flex flex-column">{children}</div>
      </div>
    </div>
  );
}

export default DashboardCard;
