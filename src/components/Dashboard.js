import React from "react";


const Dashboard = ({ isSuitable }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Candidate Suitability: {isSuitable ? "Suitable" : "Not Suitable"}</p>
      {/* You can add more dashboard elements and information here */}
    </div>
  );
};

export default Dashboard;
