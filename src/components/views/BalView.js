import React from 'react';
import PropTypes from 'prop-types';
import TextBox from '../elements/TextBox';

const BalView = ({ id, lastLog, fetchBal }) => {
  return <div>
          <TextBox>В реализации</TextBox>
         </div>;
};

BalView.propTypes = {
  id: PropTypes.number,
  lastLog: PropTypes.object,
  fetchBal: PropTypes.number
};
export default BalView;
