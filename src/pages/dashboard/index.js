import React from 'react';
import {useNavigate} from 'react-router-dom';
import {setNavigateRef} from '../../config/navigateRef';
import '../globalPageStyle.css';

function Dashboard() {
  const navigate = useNavigate();
  setNavigateRef(navigate);

  return (
    <div className="pageContainer">
      <p>Dashboard</p>
    </div>
  );
}

export default Dashboard;
