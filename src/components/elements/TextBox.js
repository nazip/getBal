import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const TextBox = ({children = ''}) => (
  <Text>{children}</Text>
);

TextBox.propTypes = {
  children: PropTypes.string
};

export default TextBox;
