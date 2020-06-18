import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddBotModal from './modal/AddBotModal';
import {
  AreaTotal, BtnAddNew,
} from '../../containers/antTab/ANTStyle';

class AddBot extends Component {
  componentDidMount() {
  }

  render() {
    const {
      total, iconPlus, handleCreateBot, isShowPopup,
      onShowModal, onCloseModal,
    } = this.props;

    return (
      <React.Fragment>
        <AreaTotal>Total : {total}</AreaTotal>
        <BtnAddNew icon={iconPlus} onClick={onShowModal}> Add ANT </BtnAddNew>
        {
          isShowPopup
            ? (
              <AddBotModal
                isShowPopup={isShowPopup}
                onCloseModal={onCloseModal}
                handleCreateBot={handleCreateBot}
              />
            ) : ''}
      </React.Fragment>
    );
  }
}
AddBot.propTypes = {
  total: PropTypes.number,
  iconPlus: PropTypes.string,
  handleCreateBot: PropTypes.func,
  isShowPopup: PropTypes.bool,
  onShowModal: PropTypes.func,
  onCloseModal: PropTypes.func,
};

AddBot.defaultProps = {
  total: 0,
  iconPlus: '',
  handleCreateBot: () => {},
  isShowPopup: false,
  onShowModal: () => {},
  onCloseModal: () => {},
};

export default AddBot;
