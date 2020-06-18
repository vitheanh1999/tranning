import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import i18n from '../../i18n/i18n';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  white-space: nowrap;

  .react-switch-bg {
    cursor: pointer !important;
  }

  .react-switch {
    opacity: 1 !important;
  }
`;

const uncheckedIcon = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: 14,
  color: '#fff',
  paddingRight: 2,
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

const checkedIcon = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: 14,
  color: '#fff',
  paddingLeft: 2,
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

export default class CustomSwitch extends Component {
  componentDidMount() {

  }

  render() {
    const {
      checked, customStyle, onChange, disabled,
    } = this.props;
    return (
      <Wrapper style={customStyle} onClick={onChange}>
        <Switch
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          handleDiameter={22}
          height={30}
          width={73}
          offColor="#d00000"
          offHandleColor="#fff"
          onColor="#186f00"
          onHandleColor="#fff"
          uncheckedIcon={<div style={uncheckedIcon}>{i18n.t('off')}</div>}
          checkedIcon={<div style={checkedIcon}>{i18n.t('on')}</div>}
          className="react-switch"
          id="icon-switch"
        />
      </Wrapper>
    );
  }
}

CustomSwitch.defaultProps = {
  customStyle: {},
  onChange: () => { },
  disabled: false,
};

CustomSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  customStyle: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
