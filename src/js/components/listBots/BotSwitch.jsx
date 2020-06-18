import React, { Component } from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: auto;
  margin-right: 0.5em;

  .check-icon {
    height: 100%;
    font-size: 14px;
  }
`;

class BotSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <Wrapper className="flex-shrink-0">
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          offColor="#d00000"
          uncheckedIcon={<span className="check-icon unchecked-icon d-flex align-items-center">OFF</span>}
          checkedIcon={<span className="check-icon checked-icon d-flex align-items-center justify-content-center">ON</span>}
          width={72}
          handleDiameter={19.8}
          height={27}
          activeBoxShadow="none"
        />
      </Wrapper>
    );
  }
}

export default BotSwitch;
