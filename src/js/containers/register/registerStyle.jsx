import styled from 'styled-components';
import images from '../../../assets/images';

export const RegisterMain = styled.div`
    background-image: url(${images.caroBg});
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    color:#fff;
    text-align:center;
    margin-bottom:40px;
    font-weight:bold;
`;
export const RegisterContent = styled.div`
    width: 28em;
    height: 36.2em;
    background-image: url(${images.registerBg});
    background-size: 100% 100%
`;

export const Bg888 = styled.div`
    background-image: url(${images.bgLuc888});
    background-position: right -61px bottom -63px;
    background-repeat: no-repeat;
    background-size: 60%;
    width:100%;
    height: 100%;
`;

export const RegisterForm = styled.form`
    padding: 40px;
`;

export const Label = styled.label`
    color:#fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.8em;
    padding-top: 0.3em;
    padding-bottom: 4px;
`;

export const Button = styled.button`
    color:#fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.2em;
    padding: 0.4em;
    width: 100%;
`;

export const FormCheck = styled.div`
    padding:0.4em;
`;

export const Warning = styled.p`
    color:red;
    font-size: 14px;
`;
export const Error = styled.div`
    background-color: rgb(0, 0, 0);
    width:40%;
    height:30%;
    position: absolute;
    z-index: 999;
    border-radius: 5px;
    border-width: 2px;
    border-color: rgb(128, 128, 128);
    border-style: solid;
    padding:20px;
    text-align:center;
    color:#fff
`;

export const ErrorButton = styled.button`
    width: 20%;
    background-color: rgb(0, 158, 112);
    color:#fff;
    margin-top:50px;
    padding:10px;
`;
