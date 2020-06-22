import styled from 'styled-components';
import images from '../../../assets/images';

export const Wrapper = styled.div`
    background-image: url(${images.caroBg});
    background-repeat: repeat;
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;  
    min-height: 300px;
`;
export const WrapperContent = styled.div`
  width: calc(100% - 1em);
  flex: 1;
  overflow: auto;
  overflow-y: overlay;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;
export const ImgTop = styled.img`
    width: 25em;
    position: absolute;
    top:0;
    left:0;
    background-repeat: no-repeat;
    position:fixed;
`;

export const ImgBottom = styled.img`
    width: 25em;
    position: absolute;
    bottom:0;
    right:0;
    background-repeat: no-repeat;
    position:fixed;
`;

export const LoginMain = styled.div`
    width: 100%;
    height: 100%;
    // overflow: auto;
    background-image: url(/img/shadow.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

export const LoginAction = styled.div`  
    margin-top:100px
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Logo = styled.img`
    width:15em;
`;

export const Option = styled.div`
    display:flex;
    padding:40px;
`;
export const SelectLogin = styled.div`
    display:flex;
    padding:10px;
    cursor: pointer;
`;
export const ImgLogin = styled.img`
    width: 3.15em;
    height: 3.15em;
`;
export const H3 = styled.h3`
    color:#fff;
    padding:10px;
    font-weight: 600;
`;
export const SelectRegister = styled.div`
    display:flex;
    padding:10px;
    cursor: pointer;
`;
export const Notify = styled.div`
    display: flex;
    position: absolute;
    -webkit-box-align: center;
    align-items: center;
    top: 0em;
    right: 0em;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    border-radius: 1em;
<<<<<<< HEAD
    
=======
>>>>>>> 9d247d23fbe8f53e3eabe2f8b359ac29d942f3c1
`;
export const IconNotify = styled.div`
    background-image: url(${images.notify});
    width: 2em;
    height: 2.3em;
    position: absolute;
    top: 2em;
    right: 3em;
    background-size: contain;
    cursor: pointer;
    z-index:11;
    :hover{
        -webkit-filter: opacity(75%);
        filter: opacity(75%);
    }
`;
export const CountNotify = styled.div`
    min-width: 1.4em;
    height: 1.4em;
    background-color: #3095cb;
    border-radius: 2.5em;
    position: absolute;
    top: 1em;
<<<<<<< HEAD
    right: -0.1em;
=======
    right: 0;
>>>>>>> 9d247d23fbe8f53e3eabe2f8b359ac29d942f3c1
    z-index: 11;
    text-align: center;
    color: white;
    
`
export const NotifyNews = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  top: 1em;
  right: 1em;
  background-color: ${props => (props.isShowAll ? '#000000c2' : '0000')};
  width: ${props => props.width}em;
  min-height: ${props => props.height}em;
  max-height: 30%;
  border-radius: 1em;
  flex-direction: column;
  justify-content: flex-start;
`;
export const Describe = styled.div` 
    background-image: url(/img/caroBackground.png);
    background-repeat: repeat;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding:20px;
`;
export const DescribeTitle = styled.img`
    z-index:10;
`;

export const DescribeContent = styled.img`
    border-radius: 3em;
     padding:20px;
     z-index:10;
`;

export const Note = styled.img`
    z-index:10;
`;
export const LoginForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:100px
    background: #252525;
    border-radius: 0.5em;
    border-width: 0.07em;
    border-style: solid;
    border-color: #ffffff4d;
    width:30em;
    padding:40px;
`;

export const Input = styled.input`
    margin-top:30px;
    width:100%;
    height: 3em;
    font-size: 0.9em;
    border-radius: 0.55em;
    border: 0 solid white;
    padding: 0.278em 0.278em 0.278em 1em;
    background-color: white;
    outline: none;
`;

export const Div = styled.div`
    margin-top:30px;
    padding:10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const DivCover = styled.div`
    padding:10px;
    color: #fff;
    margin-left: 86px;
`;
export const ButtonLogin = styled.button`
    padding:10px;
    font-weight: 600;
`;
export const Check = styled.input`
    font-weight: 600;
`;

export const Top = styled.button`
    position: absolute;
    bottom: 2em;
    cursor: pointer;
    padding: 0.8em;
    background-color: #105463;
    color: #fff;
    font-weight:600;
`;  