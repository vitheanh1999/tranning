import styled from 'styled-components';
import images from '../../../assets/images';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${images.backgroundMaintain});
  background-repeat: repeat;
  color: rgb(255, 255, 255);
`;
export const VectorLeftTop = styled.img`
  width: 25em;
  max-width: 60%;
  position: absolute;
  top: 0;
  left: 0;
`;
export const VectorBotRight = styled.img`
  width: 25em;
  max-width: 60%;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const AreaContent = styled.div`
  display: block;
  position: relative;
  z-index: 1;
`;

export const LinkToTop = styled.a`
  display: block;
  max-width: 70px;
  margin: auto;
  text-align: center;
  background-color: rgb(16, 84, 99);
  color: rgb(255, 255, 255);
  text-transform: uppercase;
`;
export const BoxContent = styled.div`
  width: 40em;
  background-color: rgba(0, 0, 0, 0.4);
  color: rgb(255, 255, 255);
  margin-bottom: 2em;
  font-size: 1em;
  padding: 3em;

  @media (max-width: 768px) {
    margin-bottom: 1em;
    padding: 1em;
  }
`;
export const Logo = styled.div`
  display: block;
  position: relative;
  text-align:center;
`;
export const Title = styled.h2`
  display: block;
  text-align: center;
`;
export const MainTainContent = styled.div`
  display: block;
  position: relative;
  min-height: 10em;
  text-align: center;
  overflow: auto;
`;
export const Date = styled.div`
  display: flex;
  justify-content: center;

`;
export const Time = styled.time`
  display: block;
`;
export const DateLabel = styled.strong`
  font-weight: 400;
  margin-right: 0.4em;
`;
export const Img = styled.img`
  display: block;
  position: relative;
  width: 50%;
  margin: auto;
`;
