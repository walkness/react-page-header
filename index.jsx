import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';


const PageHeader = ({ title, children, className, ...props }) => (
  <div className={classNames('page-header', className)} styleName='page-header' {...props}>

    <h1>{ title }</h1>

    { children }

  </div>
);

PageHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  children: null,
  className: null,
};

export default PageHeader;
