import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title, children }) => (
  <div className='page-header'>

    <h1>{ title }</h1>

    { children }

  </div>
);

PageHeader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  children: null,
};

export default PageHeader;
