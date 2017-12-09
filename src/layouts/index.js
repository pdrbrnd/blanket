import React from 'react';
import PropTypes from 'prop-types';

import '../style/index';

const TemplateWrapper = ({ children }) => (
  <div>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
