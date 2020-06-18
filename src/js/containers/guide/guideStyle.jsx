import styled from 'styled-components';
import images from '../../../assets/images'

export const Wrapper = styled.div`
    background-image: url(${images.caroBackground});
    background-repeat: repeat;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ImagesGuide = styled.img`
    width: 90%;
    margin: 1em;
    max-width: 1080px;
`;
