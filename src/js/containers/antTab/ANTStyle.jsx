import styled from 'styled-components';
import Select from 'react-select';
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import images from '../../../assets/images';

export const SelectCustomCampaign = styled(Select)`
  color: #000;

  .select__control {
    .select__dropdown-indicator {
      svg {
        display: none;
      }

      &::before {
        content: '';
        background: url(${images.iconDropDown.iconOpenDropDown}) center center no-repeat;
        display: block;
        width: 1em;
        margin-right: 0.3em;
        height: 1em;
        background-size: 100%;
      }
    }

    &.select__control--menu-is-open .select__dropdown-indicator::before {
      background-image: url(${images.iconDropDown.iconCloseDropDown});
    }
  }

  .select__option {
    border-bottom: 1px solid #c6c6c6;
  }
`;
export const ModalCustom = styled(Modal)`
  display:block;

  .modal-content {
    border: none;
  }
`;

export const ModalBotDetail = styled(ModalCustom)`
  max-width: 80%;
`;

export const ModalHistory = styled(ModalCustom)`
  max-width: 80%;
`;

export const ModalHeaderCustom = styled(ModalHeader)`
  background-color: #00647a;
  border-bottom: #00647a;
  color: #fff;
  height: 2.5em;
  padding: 0.5em;
  font-weight: 700;
  font-size: 1.5em;

  .close {
    outline: none !important;
    color: #fcfcfc;
  }
`;

export const ModalBodyCustom = styled(ModalBody)`
  padding: 2em 3em;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalFooterCustom = styled(ModalFooter)`
  background-color: blue;
`;
export const FormAdd = styled.form`
  width: 100%;
  font-size: 1.3em;

  input {
    display: block;
    font-size: 1em;
    height: 2em;
    border-radius: 0.13334em;
    padding: 0.5em;
    width: 100%;
    border: none;
    outline: none;
    box-shadow: none;
  }
`;
export const LabelAdd = styled.label`
  display: block;
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-image: url("${props => props.src}");
  background-repeat: repeat;
  color: rgb(255, 255, 255);
  padding: 1em 0;
  display: table;
`;
export const WrapperContent = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: calc(100% - 4em);
  margin: 0 2em;
  margin-left: auto;
  margin-right: auto;
  background-color: #333;
  color: #fff;
  border-radius: 0.3em;
  font-size: ${props => props.fontSize}px;

  * {
    font-size: 100%;
  }
`;
export const AreaHeader = styled.section`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  border-bottom: 0.3em solid rgb(45, 136, 156);
  font-weight: bold;
  font-size: 120%;

`;
export const AreaTotal = styled.strong`
  max-width: 100%;
`;
export const Btn = styled.button`
    opacity: 1;
    outline: none !important;
    border: none;
    border-radius: 0.3em;
    color: rgb(255, 255, 255);
    font-weight: 600;
    cursor: pointer;
    background-color: #2d889c;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const BtnAddBot = styled(Btn)`
  display: inline-block;
  padding: 0.4em 1em;
  margin-top: 0.5em;
`;
export const BtnAddNew = styled(Btn)`
  max-width: 100%;
  height: 1.7em;
  font-weight: 600;
  padding: 0 1em;

  &::before {
    content: "";
    background: url("${props => props.icon}") center center no-repeat;
    width: 1em;
    height: 1em;
    margin-right: 0.2em;
    background-size: 100%;
  }
`;
export const AreaBody = styled.section`
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 1em;
`;
export const WrapperSortBy = styled.div`
  max-width: 100%;
`;
export const BoxSortBy = styled.div`
  max-width: 100%;
  margin-bottom: 1em;
`;
export const LabelSortBy = styled.span`
  max-width: 100%;
`;
export const ValueSelected = styled.span`
  max-width: 100%;
`;
export const AreaBot = styled.div`
  max-width: 100%;
`;
export const WrapperItem = styled.div`
  max-width: 100%;
  border-bottom: 1px solid rgb(255, 255, 255);
  cursor: pointer;
  transition: 0.2s;
  padding: 1em 2%;
  width: 100%;
  min-height: 8.5em;
  font-size: 0.99em;
  font-weight: bold;

  &:hover {
    background-color: #0a5a6c;
  }
`;
export const WarrperInfo = styled.div`
  max-width: 80%;
`;
export const WarrperBtn = styled.div`
  max-width: 100%;
`;
export const BotName = styled.div`
  max-width: 100%;
`;
export const BotGC = styled.div`
  max-width: 100%;
`;
export const BotCampaignName = styled.div`
  max-width: 100%;
`;
export const BtnHistory = styled(Btn)`
  max-width: 100%;
  position: relative;
  width: 9em;
  height: 1.7em;

  &::after {
    content: "";
    background: url("${props => props.iconAfter}") center center no-repeat;
    width: 1em;
    height: 1em;
    margin-right: 0.2em;
    background-size: 100%;
    display: inline-block;
    margin-left: 0.3em;
  }
`;
export const BtnShow = styled.span`
  max-width: 100%;
  position: relative;

  &::before {
    content: "";
    background: url("${props => props.icon}") center center no-repeat;
    display: block;
    width: 1em;
    height: 1em;
    margin-right: 0.2em;
    background-size: 100%;
  }
`;
export const Test = styled.section`
  max-width: 100%;
  display: block;
`;
