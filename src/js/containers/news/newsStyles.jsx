import styled from "styled-components";
import { Modal } from "react-bootstrap";
import images from "../../../assets/images";

export const ListContent = styled.div`
  background-image: url(${images.caroBackground});
  background-repeat: repeat;
  width: 100%;
`;
export const ListBox = styled.div`
  height: 100%;
  margin: 1.5em 2em;
`;
export const GroupNew = styled.div`
  padding: 1em;
  width: 100%;
  margin-bottom: 0.5em;
  color: white;

  background-color: #333;
`;
export const NewBox = styled.div`
  background-color: #222;
  margin-bottom: 0.5em;
  padding: 0.5em;
  border-radius: 0.5em;

  :hover {
    background: #565050;
    cursor: pointer;
  }
`;

export const TitleContent = styled.div`
  display: flex;
`;
export const Title = styled.p`
  width: 95%;
  font-size: 1em;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  margin: 0;
`;
export const New = styled.a`
  color: aqua !important;
  font-size: ${props => props.fontsize}em;
  font-style: italic;
`;
export const MainContent = styled.div`
  width: 100%;
  font-size: 0.85em;
  font-weight: 200;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  min-height: 3em;
  color: white;
`;
export const DateContent = styled.div`
  justify-content: flex-end;
  display: flex;
`;

export const ModalLg = styled(Modal)`
  padding-left: 0 !important;

  .modal-dialog {
    max-width: 80%;
  }

  .modal-content {
    background-color: #333;
    color: white;
  }
`;
export const ModalLgHeader = styled(Modal.Header)`
  justify-content: center;
  text-align: center;
  align-items: center;

  p {
    width: 60%;
    margin: 0 !important;
    font-size: 2em;
  }

  label {
    width: 20%;
    margin: 0 !important;
    text-align: start;
  }

  button {
    width: 20%;
    text-align: end;
    outline: none;
  }

  .title {
    text-align: center;
  }
`;
export const ModalLgBody = styled(Modal.Body)`
  .modal-body .detailTitle {
    text-align: center;
  }
`;
export const ModalDetailTitle = styled.p`
  text-align: center;
  background-image: linear-gradient(to right, #333, #3a879e, #333);
  font-weight: 600;
`;
