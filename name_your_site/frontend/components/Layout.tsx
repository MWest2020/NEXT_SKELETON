import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
