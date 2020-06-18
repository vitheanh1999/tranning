import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import api from '../../../services/api';
import {
  ModalHistory, ModalHeaderCustom, ModalBodyCustom,
  BtnHistory,
} from '../../../containers/antTab/ANTStyle';


class HistoryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPopup: false,
    };
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.onToggleModal = this.onToggleModal.bind(this);
    this.handleFetchBotGCNow = this.handleFetchBotGCNow.bind(this);
    this.handleFetchBotHistoryNow = this.handleFetchBotHistoryNow.bind(this);
    this.handleFetchTableStatusNow = this.handleFetchTableStatusNow.bind(this);
  }

  onToggleModal() {
    this.setState(prevState => ({
      isShowPopup: !prevState.isShowPopup,
    }));
  }

  handleToggleModal(event) {
    event.stopPropagation();
    this.onToggleModal();
    this.handleFetchBotGCNow();
    this.handleFetchBotHistoryNow();
    this.handleFetchTableStatusNow();
  }

  handleFetchBotGCNow() {
    const { botId } = this.props;
    api.create().fetchBotGCNow(botId).then((res) => {
      if (res.data) {
        const { code } = res.data;
        if (code === 200) {
        }
      }
    });
  }

  handleFetchBotHistoryNow() {
    const { botId } = this.props;
    const params = {
      botId,
      currentPage: 1,
      perPage: 10,
    };
    api.create().fetchBotHistoryNow(params).then((res) => {
      if (res.data) {
        const { code, data } = res.data;
        if (code === 200) {
        }
      }
    });
  }

  handleFetchTableStatusNow() {
    const { botId } = this.props;
    api.create().fetchTableStatusNow(botId).then((res) => {
      if (res.data) {
        const { code } = res.data;
        if (code === 200) {
        }
      }
    });
  }

  render() {
    const {
      iconBtnView, botName,
    } = this.props;
    const { isShowPopup } = this.state;
    return (
      <Fragment>
        <BtnHistory
          iconAfter={iconBtnView}
          onClick={e => this.handleToggleModal(e)}
        >
          History
        </BtnHistory>
        {
          isShowPopup
            ? (
              <ModalHistory
                isOpen={isShowPopup}
                toggle={this.onToggleModal}
              >
                <ModalHeaderCustom toggle={this.onToggleModal}>History</ModalHeaderCustom>
                <ModalBodyCustom>
                  {botName}
                </ModalBodyCustom>
              </ModalHistory>
            ) : ''
        }
      </Fragment>
    );
  }
}
HistoryModal.propTypes = {
  iconBtnView: PropTypes.string,
  botId: PropTypes.number,
  botName: PropTypes.string,
};

HistoryModal.defaultProps = {
  iconBtnView: '',
  botId: 0,
  botName: '',
};

export default HistoryModal;
