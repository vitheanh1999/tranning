import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../../services/api';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  font-weight: 700;
`;

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    api.create().fetchMaintainInfo().then((res) => {
      console.log('res = ', res);
    });
  }

  render() {
    return (
      <Wrapper>Test</Wrapper>
    );
  }
}

Test.propTypes = {
};

Test.defaultProps = {

};

export default Test;
