import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailModal from './modal/DetailModal';
import HistoryModal from './modal/HistoryModal';
import {
  WrapperItem, WarrperInfo, WarrperBtn, BotName,
  BotGC, BotCampaignName, BtnShow,
} from '../../containers/antTab/ANTStyle';
import BotSwitch from './BotSwitch';

class Bot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowBotDetail: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onShowBotDetail = this.onShowBotDetail.bind(this);
    this.onCloseBotDetail = this.onCloseBotDetail.bind(this);
  }

  componentDidMount() {
  }

  onShowBotDetail() {
    this.setState({
      isShowBotDetail: true,
    });
  }

  onCloseBotDetail() {
    this.setState({
      isShowBotDetail: false,
    });
  }

  toggleModal() {
    const { handleFetchBotDetail, bot } = this.props;
    handleFetchBotDetail(bot.id);
    this.onShowBotDetail();
  }

  render() {
    const {
      bot, iconBtnShowDetail, iconBtnView, iconBotDetail,
      handleRenameBot, botDetail, handleDeleteBot, handleFetchBotHistory,
      handleFetchChartData, listChartData, listBotHistories, handleUpdateBotCampaign,
    } = this.props;
    const { isShowBotDetail } = this.state;
    return (
      <WrapperItem className="d-flex justify-content-between" onClick={this.toggleModal}>
        <WarrperInfo className="">
          <div className="d-flex">
            <BotSwitch />
            <BotName>{bot.name}</BotName>
          </div>
          {
            bot.campaign
              ? <BotCampaignName>Campaign: {bot.campaign.name}</BotCampaignName> : ''
          }
          <BotGC>GC: {bot.GC}</BotGC>
        </WarrperInfo>
        <WarrperBtn className="d-flex flex-column justify-content-around align-items-end">
          <BtnShow icon={iconBtnShowDetail} />
          <HistoryModal
            iconBtnView={iconBtnView}
            botId={bot.id}
            botName={bot.name}
          />
        </WarrperBtn>
        {
          isShowBotDetail
            ? (
              <DetailModal
                isShowPopup={isShowBotDetail}
                onCloseModal={this.onCloseBotDetail}
                botDetail={botDetail}
                iconBotDetail={iconBotDetail}
                handleRenameBot={handleRenameBot}
                handleDeleteBot={handleDeleteBot}
                iconBtnView={iconBtnView}
                handleFetchBotHistory={handleFetchBotHistory}
                handleFetchChartData={handleFetchChartData}
                listChartData={listChartData}
                listBotHistories={listBotHistories}
                handleUpdateBotCampaign={handleUpdateBotCampaign}
              />
            ) : ''}
      </WrapperItem>
    );
  }
}

Bot.propTypes = {
  bot: PropTypes.object,
  iconBtnShowDetail: PropTypes.string,
  iconBtnView: PropTypes.string,
  iconBotDetail: PropTypes.object,
  handleRenameBot: PropTypes.func,
  botDetail: PropTypes.object,
  handleDeleteBot: PropTypes.func,
  handleFetchBotDetail: PropTypes.func,
  handleFetchBotHistory: PropTypes.func,
  handleFetchChartData: PropTypes.func,
  listChartData: PropTypes.array,
  listBotHistories: PropTypes.array,
  handleUpdateBotCampaign: PropTypes.func,
};

Bot.defaultProps = {
  bot: {},
  iconBtnShowDetail: '',
  iconBtnView: '',
  iconBotDetail: {},
  handleRenameBot: () => {},
  botDetail: {},
  handleDeleteBot: () => {},
  handleFetchBotDetail: () => {},
  handleFetchBotHistory: () => {},
  handleFetchChartData: () => {},
  listChartData: [],
  listBotHistories: [],
  handleUpdateBotCampaign: () => {},
};

export default Bot;
