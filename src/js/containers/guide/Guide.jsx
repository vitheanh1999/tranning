import React, { Component } from 'react';
import { Wrapper } from './guideStyle';
import { ImagesGuide } from './guideStyle';
import images from '../../../assets/images';


class Guide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {

  }

  render() {
    const guideImgsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
      return `guideImg${item}`;
    }) 
    return (
      <Wrapper>
        {guideImgsArr.map((img, index) => {
          return (
            <ImagesGuide key={index} src={images[img]} />
          )
        })}
      </Wrapper>
    );
  }
}

Guide.propTypes = {
};

Guide.defaultProps = {

};

export default Guide;
