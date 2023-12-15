import React from 'react';
import AppRouter from './appRouter';
import SideBar from '../components/sideBar';
import './style.css';
import Header from '../components/header';

function withLayout(WrappedComponent) {
  return props => (
    <div className="SiteContainer">
      <div className="parent">
        <div className="sidebar">
          <SideBar />
        </div>

        <div className="child">
          <Header />
          <WrappedComponent />
        </div>
      </div>
    </div>
  );
}

const AppWithLayout = withLayout(AppRouter);

export default AppWithLayout;
