import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TInput, TInputMasked } from './styles';

function Input({ style, icon, masked, type, ...rest }, ref) {
  if (masked) {
    return (
      <Container style={style}>
        <TInputMasked
          {...rest}
          ref={ref}
          type={type}
          underlineColorAndroid="transparent"
        />
        {icon && <Icon name={icon} size={30} color="#CD0D0E" />}
      </Container>
    );
  }

  return (
    <Container style={style}>
      <TInput {...rest} ref={ref} />
      {icon && <Icon name={icon} size={30} color="#CD0D0E" />}
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
