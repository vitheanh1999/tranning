import styled from 'styled-components';
import Select from 'react-select';
import images from '../../../assets/images';

export const SelectCustomCampaign = styled(Select)`
  color: #000;
  width: 10em;
  margin-right: 1em;
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

export const BotDetailInfoTop = styled.section`
  display:block;
  width: 100%;
  margin-bottom: 1em;
`;
export const BotNameCustom = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;
export const LabelAdd = styled.label`
  display: block;
  width: 100%;
`;
export const NameText = styled.h3`
  margin: 0;
  margin-right: 0.3em;
`;
export const NameTextCampaign = styled.h3`
  margin: 0;
  margin-right: 0.3em;
`;
export const NameInput = styled.input`
  outline: none;
  margin-right: 0.3em;
  display: block;
  height: 2.5em;
`;
export const BtnDetail = styled.div`
  display: block;
  width: 2em;
  cursor: pointer;
  margin-right: 0.3em;
  padding: 0.2em;
  border-radius: 3px;
  opacity: 0.6;

  &:hover {
    background-color: #20bcdf;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
export const BotDetailInfoLeft = styled.div`
  display: block;
`;
export const BotDetailInfoRight = styled.div`
  display: block;
`;
export const BtnEdit = styled(BtnDetail)`
  display: block;
`;
export const BtnDelete = styled(BtnDetail)`
  display: block;
`;
export const BtnSave = styled(BtnDetail)`
  display: block;
  opacity: 1;
`;
export const BtnEditCampaign = styled(BtnDetail)`
  display: block;
`;
export const BtnSaveCampaign = styled(BtnDetail)`
  display: block;
  opacity: 1;
`;
export const BotDetailInfoCampaign = styled.section`
  width: 100%;
  margin-top: 1em;
  border: solid 2px #ccc;
  padding: 1em;
`;
export const CampaignTitle = styled.h4`
  margin: 0;
  margin-bottom: 1em;
  font-size: 1.4em;
  font-weight: 900;
`;
export const UpdateBotCampaign = styled.div``;
