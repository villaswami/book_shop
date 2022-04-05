import React from 'react';
import Header from './Header';

const withHeader = Component => {
  const WithHeader = props => {
    const employee = JSON.parse(localStorage.getItem('bookstore-employee'));

    // if (!employee && window.location.pathname !== '/dashboard/login')
    //   props.history.push('/dashboard/login');

    if (employee?.role !== 'ADMIN' && window.location.pathname !== '/dashboard/books' && window.location.pathname !== '/dashboard/orders' && window.location.pathname !== '/dashboard/genres' && window.location.pathname !== '/dashboard/employees' && window.location.pathname !== '/dashboard/statistics') return null;
    return (
      <>
        <Header />
        <Component {...props} />
      </>
    );
  };

  return WithHeader;
};

export default withHeader;
