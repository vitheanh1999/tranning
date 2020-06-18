import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BotDetailInfo from '../BotDetailInfo';
import {
  ModalBotDetail, ModalHeaderCustom, ModalBodyCustom,
} from '../../../containers/antTab/ANTStyle';


class DetailModal extends Component {
  componentDidMount() {
  }

  render() {
    const {
      isShowPopup, onCloseModal, botDetail, iconBotDetail,
      handleRenameBot, handleDeleteBot, iconBtnView, handleUpdateBotCampaign,
    } = this.props;
    return (
      <ModalBotDetail
        isOpen={isShowPopup}
        toggle={onCloseModal}
      >
        <ModalHeaderCustom toggle={onCloseModal}>ANT Detail - ID{botDetail.id}</ModalHeaderCustom>
        <ModalBodyCustom>
          <BotDetailInfo
            bot={botDetail}
            iconBtnView={iconBtnView}
            iconBotDetail={iconBotDetail}
            handleRenameBot={handleRenameBot}
            handleDeleteBot={handleDeleteBot}
            handleUpdateBotCampaign={handleUpdateBotCampaign}
          />
        </ModalBodyCustom>
      </ModalBotDetail>
    );
  }
}
DetailModal.propTypes = {
  isShowPopup: PropTypes.bool,
  onCloseModal: PropTypes.func,
  botDetail: PropTypes.object,
  iconBotDetail: PropTypes.object,
  handleRenameBot: PropTypes.func,
  handleDeleteBot: PropTypes.func,
  iconBtnView: PropTypes.string,
  handleFetchBotHistory: PropTypes.func,
  handleUpdateBotCampaign: PropTypes.func,
};

DetailModal.defaultProps = {
  isShowPopup: false,
  onCloseModal: () => {},
  botDetail: {},
  iconBotDetail: {},
  handleRenameBot: () => {},
  handleDeleteBot: () => {},
  iconBtnView: '',
  handleFetchBotHistory: () => {},
  handleUpdateBotCampaign: () => {},
};

export default DetailModal;
