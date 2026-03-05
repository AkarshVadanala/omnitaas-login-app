import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="welcome-avatar">
          {username?.charAt(0).toUpperCase()}
        </div>
        <p className="subtitle">Authentication Successful</p>
        <h1>Welcome back,</h1>
        <h2>{username}!</h2>
        <div className="divider" />
        <p>You have successfully signed in to your account.<br />Your session is now active.</p>
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-label">Role</div>
            <div className="stat-value">Admin</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Status</div>
            <div className="stat-value">Active</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Access</div>
            <div className="stat-value">Full</div>
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Welcome;