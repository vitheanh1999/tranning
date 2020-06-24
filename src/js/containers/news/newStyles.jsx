import styled from 'styled-components';
import { Modal, Card } from 'react-bootstrap';
import images from '../../../assets/images';

export const Wrapper = styled.div`
    background-image: url(${images.caroBackground});
    background-repeat: repeat;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vw;
`;

export const ListBox = styled.div`
    height: 100%;
    margin: 1.5em 1.5em;
`;

export const NewsBox = styled.div`
    line-height: 1.6;
    width: 95%;
    height: 100%;
    margin: 0 2em;
    padding-top: 1em;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
`;

export const NewsGroup = styled.div`
    padding: 1em;
    overflow: auto;
    flex-direction: column;
    background-color: #333;
    color: #fff;
    font-size: 1.1em;
    flex-shrink: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const NewsItem = styled.div`
    cursor: pointer;
    background-color: #222222;
    width: 100%;
    border-radius: .5em;
    padding: .5em;
    margin-bottom: .5em;
    :hover{
        background: #565050;
    }
`;

export const NewsItemTitle = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TitleContent = styled.div`
    display: inline-block;
    width: 95%;
    font-size: 1em;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
    position: relative;
    padding-right: 0.5em;
`;

export const TitleNew = styled.i`
    text-aligh:right
    color: aqua;
    font-size: 1em;
    vertical-align: top;
    content:'New';
    font-size:${props => props.fontsize}em;
`;

export const MainContent = styled.div`
    width: 100%;
    font-size: 0.85em;
    font-weight: 200;
    color: white;
    height: 3em;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const NewsDate = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    -webkit-box-pack: end;
`;

export const NewsDetail = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
`;


export const ModalLg = styled(Modal)`
font-family:
    "SF Pro JP",
    "SF Pro Display",
    "SF Pro Icons",
    "Hiragino Kaku Gothic Pro",
    "ヒラギノ角ゴ Pro W3",
    "メイリオ",
    "Meiryo",
    "ＭＳ Ｐゴシック",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
padding-left: 0!important;
font-size: 16px;
line-height: 1.6;
.modal-dialog{
    max-width: 80%;
}
.modal-content{
    background-color: #333333;
    color: #fcfcfc;
}
`;
export const ModalLgBody = styled(Modal.Body)`
    padding: 0 1em;
    padding-top: 16px;
    margin: 1em;
    font-size: 20px;
    &.main-body{
        margin-top: 0;
        font-size: 17px; 
    }
`;
export const ModalLgHeader = styled(ModalLg.Header)`
    
    button{
        color: #fcfcfc;
    }
    button:hover{
        color: #000;
    }
`;

export const ModalDate = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    -webkit-box-pack: end;
    line-height: 2;
    font-size: 100%;
`;

export const ModalLgTitle = styled(ModalLg.Title)`
font-size: 2em;
    font-weight: 700;
    word-break: break-word;
    color: white;
`;

export const TaCard = styled(Card)``;
export const TaCardText = styled(Card.Text)`
width: 100%;
    font-size: 1em;
    font-weight: 200;
    color: white;
    margin: 2em 0 2em 0;
    word-wrap: break-word;
    white-space: pre-wrap;
`;
export const TaCardTitle = styled(Card.Title)`
    background-image: url(${images.iconSummryNew});
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    line-height: 1.6;
    font-weight: 600;
`;

export const ModalDetailTitle = styled.p`
  text-align: center;
  background-image: linear-gradient(to right, #333, #3a879e, #333);
  font-weight: 600;
`;
