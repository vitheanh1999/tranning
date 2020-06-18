import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BotSwitch from './BotSwitch';
import HistoryModal from './modal/HistoryModal';
import api from '../../services/api';
import {
  BotDetailInfoTop, BotNameCustom, BtnEdit, BtnDelete,
  BtnSave, NameText, NameInput, BotDetailInfoLeft,
  BotDetailInfoRight, BotDetailInfoCampaign, CampaignTitle, UpdateBotCampaign,
  SelectCustomCampaign, BtnEditCampaign, BtnSaveCampaign, NameTextCampaign,
} from './BotDetailStyle';


const customStyles = {
  menu: provided => ({
    ...provided,
    margin: 0,
    borderRadius: 0,
  }),
};

class BotDetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isEditName: false,
      isEditCampaign: false,
      listCampaigns: [],
      selectedOption: null,
    };
    this.onEditName = this.onEditName.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onRenameBot = this.onRenameBot.bind(this);
    this.onRemoveBot = this.onRemoveBot.bind(this);
    this.onEditCampaign = this.onEditCampaign.bind(this);
    this.onChangeCampaign = this.onChangeCampaign.bind(this);
    this.onUpdateBotCampaign = this.onUpdateBotCampaign.bind(this);
  }

  componentDidMount() {
    this.handleFetchListCampaigns();
  }


  onChangeInput(event) {
    const name = event.target.value;
    this.setState({ name });
  }

  onEditName() {
    const { bot } = this.props;
    this.setState({ name: bot.name, isEditName: true });
  }

  onRemoveBot() {
    const confirm = window.confirm('Are you sure you want?');
    if (confirm) {
      const { handleDeleteBot, bot } = this.props;
      const botId = bot.id;
      handleDeleteBot(botId);
    }
  }

  onRenameBot() {
    const { handleRenameBot, bot } = this.props;
    const { name } = this.state;
    this.setState({ isEditName: false });
    if (name !== bot.name) {
      const params = {
        id: bot.id,
        name,
      };
      handleRenameBot(params);
    }
  }

  onEditCampaign() {
    this.setState({
      isEditCampaign: true,
    });
  }

  onChangeCampaign(selectedOption) {
    this.setState({
      selectedOption,
    });
  }

  onUpdateBotCampaign(botCampaignSelected) {
    const { handleUpdateBotCampaign, bot } = this.props;
    const { selectedOption } = this.state;
    this.setState({ isEditCampaign: false });
    if (
      selectedOption !== null
      && selectedOption.value !== botCampaignSelected.value
    ) {
      const params = {
        botId: bot.id,
        campaignId: selectedOption.value,
      };
      handleUpdateBotCampaign(params);
    }
  }

  handleFetchListCampaigns() {
    const paramsListCampaigns = {
      currentPage: '',
      perPage: '',
    };
    api.create().fetchListCampaigns(paramsListCampaigns).then((res) => {
      if (res.data) {
        let listCampaigns = [];
        const { code, data } = res.data;
        if (code === 200 && data) {
          listCampaigns = data.map(item => ({
            value: item._id,
            label: item.name,
          }));
          this.setState({ listCampaigns });
        }
      }
    });
  }

  renderCampaign() {
    const {
      bot, iconBotDetail,
    } = this.props;
    const {
      isEditCampaign, listCampaigns,
    } = this.state;
    const botCampaign = bot.campaign;
    const botCampaignSelected = botCampaign
      ? { value: botCampaign._id, label: botCampaign.name } : {};
    return (
      <Fragment>
        <CampaignTitle className="text-uppercase">Campaign</CampaignTitle>
        <UpdateBotCampaign className="d-flex align-items-center">
          {
            isEditCampaign
              ? (
                <Fragment>
                  <SelectCustomCampaign
                    onChange={this.onChangeCampaign}
                    autoFocus
                    defaultValue={botCampaignSelected}
                    classNamePrefix="select"
                    options={listCampaigns}
                    styles={customStyles}
                  />
                  <BtnSaveCampaign onClick={() => this.onUpdateBotCampaign(botCampaignSelected)}>
                    <img src={iconBotDetail.iconSaveWhite} alt="" />
                  </BtnSaveCampaign>
                </Fragment>
              )
              : (
                <Fragment>
                  <NameTextCampaign>{botCampaign && botCampaign.name}</NameTextCampaign>
                  <BtnEditCampaign onClick={this.onEditCampaign}>
                    <img src={iconBotDetail.iconEditWhite} alt="" />
                  </BtnEditCampaign>
                </Fragment>
              )
          }
        </UpdateBotCampaign>
      </Fragment>
    );
  }

  render() {
    const {
      bot, iconBotDetail, iconBtnView,
    } = this.props;
    const {
      isEditName, name,
    } = this.state;
    return (
      <Fragment>
        <BotDetailInfoTop className="d-flex justify-content-between align-items-end">
          <BotDetailInfoLeft>
            <BotNameCustom>
              {
                isEditName
                  ? (
                    <Fragment>
                      <NameInput type="text" value={name} onChange={this.onChangeInput} />
                      <BtnSave onClick={this.onRenameBot}>
                        <img src={iconBotDetail.iconSaveWhite} alt="" />
                      </BtnSave>
                    </Fragment>
                  )
                  : (
                    <Fragment>
                      <NameText>{bot.name}</NameText>
                      <BtnEdit onClick={this.onEditName}>
                        <img src={iconBotDetail.iconEditWhite} alt="" />
                      </BtnEdit>
                    </Fragment>
                  )
              }
              <BtnDelete onClick={this.onRemoveBot}>
                <img src={iconBotDetail.iconDelete} alt="" />
              </BtnDelete>
            </BotNameCustom>
            <BotSwitch />
          </BotDetailInfoLeft>
          <BotDetailInfoRight>
            <HistoryModal
              iconBtnView={iconBtnView}
              botId={bot.id}
              botName={bot.name}
            />
          </BotDetailInfoRight>
        </BotDetailInfoTop>
        <BotDetailInfoCampaign className="d-flex justify-content-between">
          <BotDetailInfoLeft>
            {bot && this.renderCampaign()}
          </BotDetailInfoLeft>
          <BotDetailInfoRight>

          </BotDetailInfoRight>
        </BotDetailInfoCampaign>
      </Fragment>
    );
  }
}

BotDetailInfo.propTypes = {
  iconBtnView: PropTypes.string,
  bot: PropTypes.object,
  iconBotDetail: PropTypes.object,
  handleRenameBot: PropTypes.func,
  handleDeleteBot: PropTypes.func,
  handleUpdateBotCampaign: PropTypes.func,
};

BotDetailInfo.defaultProps = {
  iconBtnView: '',
  bot: {},
  iconBotDetail: {},
  handleRenameBot: () => {},
  handleDeleteBot: () => {},
  handleUpdateBotCampaign: () => {},
};

export default BotDetailInfo;
