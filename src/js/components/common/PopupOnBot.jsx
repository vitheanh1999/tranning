import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as DepositActions from '../../actions/Deposit';
import iconX from '../../../assets/imgs/icon_x.png';
import i18n from '../../i18n/i18n';
import {
  Wrapper, AlertStyled, CloseButton,
  Content, Message,
} from './Alert/alertStyle';
import { ButtonCore } from '../mainContainer/mainStyle';
import { ORIENT, getOrientation } from '../../helpers/orientation';
import InputFloatField from './InputFloatField';
import ChangeBotCampaign from '../botDetail/ChangeBotCampaign';
import Alert from './Alert/Alert';
import Spinner from './Spinner';
import ApiErrorUtils from '../../helpers/ApiErrorUtils';
import RadioButton from './RadioButton';
import checkedCheckBox from '../../../assets/img/check_box_checked.png';
import uncheckCheckBox from '../../../assets/img/check_box_uncheck.png';

const ButtonConfirm = styled.div`
  display: flex;
`;

const Checkbox = styled.div`
  background-image: url(${props => (props.isChecked ? checkedCheckBox : uncheckCheckBox)});
  background-size: 100% 100%;
  margin-right: 10px;
  width: 15px;
  height: 15px;
`;

const WrapperOnBot = styled(Wrapper)`
  z-index: 1;
`;

const MessageContent = styled(Message)`
  font-size: 1.2em;
  margin-right: 1em;
  margin-left: ${props => props.marginLeft}em;
  width: ${props => (props.width ? props.width : 7)}em;
  text-align: ${props => (props.textAlign ? props.textAlign : 'end')};
`;

const ContentItem = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin-top: ${props => (props.marginTop ? props.marginTop : 1.5)}em;
`;

const ContentPopup = styled.div`
  color: #fff;
  font-size: ${props => props.fontSize}em;
  margin-bottom: 0.5em;
`;

const ActionPopup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.5em;
`;


const WrapperConfirm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentConfirm = styled.div`
  width: 90%;
  background-color: rgb(255, 255, 255);
  border: 0.25em solid rgb(136, 136, 136);
  padding: 0.2em;
  font-size: 0.8em;
  margin-top: 1em;
`;

const CheckboxConfirm = styled.div`
  display: flex;
  color: red;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const MessageConfirm = styled.div`
  color: red;
  white-space: pre-wrap;
  text-align: center;
  font-size: 0.9em;
`;

const BET_POINT = 10;

const checkOffPointRate = (botInfo) => {
  if (!botInfo) return null;
  if (!botInfo.campaign) return null;
  if (!botInfo.campaign.profit_data) return null;
  if (!botInfo.campaign.data) return null;
  const minProfit = botInfo.campaign.profit_data.min_profit || 0;
  const pointRate = botInfo.campaign.data.point_rate || 0;
  // const money = botInfo.GC || 0;

  if (minProfit < (pointRate * BET_POINT)) return i18n.t('onBot.AutoOff.MinProfit');
  // if (money < (pointRate * BET_POINT)) return i18n.t('onBot.AutoOff.NotEnough');
  return null;
};

class PopupOnBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: getOrientation(),
      onAnimation: false,
      bot: {},
      isConfirmResetLogic: false,
      isChangeCampaign: false,
      isChangeGc: false,
      isResetLogic: true,
      isLoading: false,
      isValidCampaign: true,
      isValidGC: true,
      isCheckNotice: false,
    };

    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    this.onOrientationChange = this.onOrientationChange.bind(this);
    this.onClickResetLogic = this.onClickResetLogic.bind(this);
    this.handleChangeBotCampaign = this.handleChangeBotCampaign.bind(this);
    this.handleCharge = this.handleCharge.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.fetchBotDetail = this.fetchBotDetail.bind(this);
    this.onSuccessCharge = this.onSuccessCharge.bind(this);
    this.onError = this.onError.bind(this);
    window.addEventListener('orientationchange', this.onOrientationChange);
  }

  componentDidMount() {
    const { bot, fetchBotDetail } = this.props;
    this.setState({ bot });
    fetchBotDetail(bot.id, (data) => {
      this.setState({
        bot: JSON.parse(JSON.stringify(data.data)),
      });
    }, () => { });
  }

  onSuccessCharge(data) {
    ApiErrorUtils.handleServerError(
      data,
      Alert.instance,
      () => {
        Alert.instance.showAlert(i18n.t('success'), data.message);
      },
    );
    this.props.fetchUser(
      userData => ApiErrorUtils.handleServerError(
        userData, Alert.instance, () => { }, () => { },
      ),
      err => ApiErrorUtils.handleHttpError(err, Alert.instance, () => { }),
    );
    this.fetchBotDetail();
    this.props.fetchListBots();
    this.setState({ isLoading: false });
  }

  onError(error) {
    this.closeModalCharge();
    ApiErrorUtils.handleHttpError(error, Alert.instance);
    this.setState({ isLoading: false });
  }

  onClickCheckbox(type) {
    const isCheck = this.state[type];
    this.setState({
      [type]: !isCheck,
    });
  }

  onClickResetLogic(value) {
    this.setState({ isResetLogic: value });
  }

  onOrientationChange() {
    const newOrientation = getOrientation();
    const { orientation } = this.state;
    if (orientation !== newOrientation) {
      this.setState({ orientation: newOrientation });
    }
  }

  fetchBotDetail() {
    const { fetchBotDetail } = this.props;
    const { bot } = this.state;
    fetchBotDetail(bot.id, (data) => {
      this.setState({
        bot: JSON.parse(JSON.stringify(data.data)),
      });
    }, () => { });
  }

  handleAnimationEnd() {
    this.setState({ onAnimation: false });
  }

  handleChangeBotCampaign(value) {
    const { updateBotCampaign, fetchListBots } = this.props;
    const { bot } = this.state;
    if (value) {
      this.setState({ isValidCampaign: true });
    }
    updateBotCampaign(bot.id, value, () => {
      this.fetchBotDetail();
      fetchListBots();
    }, () => {
    });
  }

  handleChangeState(value, fieldName) {
    this.setState({ [fieldName]: value });
  }

  handleCharge(gc) {
    const { actions } = this.props;
    const { bot } = this.state;
    const gcAmount = Math.round((gc - bot.GC) * 100) / 100;
    const amount = gcAmount.toLocaleString('ja');
    if (gc) {
      this.setState({ isValidGC: true });
    }
    Alert.instance.showAlertTwoButtons(
      i18n.t('warning'),
      i18n.t('chargeGcBot', { amount }),
      [i18n.t('cancel'), i18n.t('OK')],
      [
        () => Alert.instance.hideAlert(),
        () => {
          this.setState({ isLoading: true });
          actions.chargeAction([bot.id], gcAmount, this.onSuccessCharge, this.onError);
          Alert.instance.hideAlert();
        },
      ],
      Alert.instance.hideAlert(),
    );
  }

  updateBotStatus(botId, status, isResetLogic) {
    const { isConfirmResetLogic, bot } = this.state;
    const { updateBotStatus, onClose } = this.props;

    if (!bot.reset_logic && !isConfirmResetLogic && this.validate()) {
      this.setState({ isConfirmResetLogic: true, isResetLogic: '' });
    } else {
      const checkAutoOff = checkOffPointRate(bot);
      if (checkAutoOff) {
        Alert.instance.showAlert(i18n.t('warning'), checkAutoOff);
        return;
      }
      if (this.validate()) {
        updateBotStatus(botId, status, isResetLogic);
        onClose();
      }
    }
  }

  validate() {
    const { bot, isChangeGc, isChangeCampaign } = this.state;
    if (!bot.campaign) {
      this.setState({ isValidCampaign: false });
    }
    if (!bot.GC) {
      this.setState({ isValidGC: false });
    }
    if (isChangeCampaign) {
      this.setState({ isValidCampaign: false });
    }
    if (isChangeGc) {
      this.setState({ isValidGC: false });
    }
    if (bot.campaign && bot.GC && !isChangeGc && !isChangeCampaign) {
      return true;
    }
    return false;
  }

  renderButtons() {
    const { isResetLogic, bot, isCheckNotice } = this.state;
    const { onClose } = this.props;
    const isDisable = isCheckNotice && isResetLogic !== '';
    return (
      <React.Fragment>
        <ActionPopup>
          <ButtonConfirm>
            <ButtonCore
              fontSize="1.1em"
              hoverBgColor="#20bcdf"
              color="#2d889c"
              padding="0 1em 0 1em"
              onClick={() => onClose()}
              height="3em"
              width="7em"
            >
              {i18n.t('back')}
            </ButtonCore>
            <ButtonCore
              style={{
                cursor: isDisable ? 'pointer' : 'not-allowed',
              }}
              fontSize="1.1em"
              hoverBgColor={isDisable ? '#20bcdf' : '#ccc'}
              color={isDisable ? '#23B083' : '#ccc'}
              margin=" 0 0 0 2em"
              padding="0 1em 0 1em"
              height="3em"
              width="7em"
              onClick={() => {
                if (!isDisable) return;
                this.updateBotStatus(bot.id, bot.status, isResetLogic);
              }}
            >
              {i18n.t('onBot')}
            </ButtonCore>
          </ButtonConfirm>
        </ActionPopup>
      </React.Fragment>
    );
  }

  renderConfirmResetLogic() {
    const { isMobile } = this.props;
    const { isResetLogic } = this.state;
    const isChecked = isResetLogic === '' ? null : !isResetLogic;
    return (
      <Content>
        <Message
          whiteSpace={!isMobile && 'pre-line'}
          fontSize={1.5}
          fontWeight={600}
        >
          {i18n.t('resetLogicConfirm')}
        </Message>
        <ContentPopup fontSize={isMobile && 0.8}>
          <ContentItem marginTop={5}>
            <RadioButton
              isChecked={isResetLogic}
              onChange={() => this.onClickResetLogic(true)}
            />
            <MessageContent
              width={23}
              textAlign="start"
              marginLeft={1}
              onClick={() => this.onClickResetLogic(true)}
            >
              {i18n.t('resetLogic')}
            </MessageContent>
          </ContentItem>
          <ContentItem marginTop={2}>
            <RadioButton
              isChecked={isChecked}
              onChange={() => this.onClickResetLogic(false)}
            />
            <MessageContent
              width={23}
              textAlign="start"
              marginLeft={1}
              onClick={() => this.onClickResetLogic(false)}
            >
              {i18n.t('notResetLogic')}
            </MessageContent>
          </ContentItem>
          <ContentItem marginTop={2}>
            <MessageConfirm marginLeft={1} onClick={() => this.onClickResetLogic(false)}>
              {i18n.t('nodeResetLogic')}
            </MessageConfirm>
          </ContentItem>
        </ContentPopup>
      </Content>
    );
  }

  renderSettingBot() {
    const { listCampaigns, lucUserGC, isMobile } = this.props;
    const {
      bot, isValidCampaign,
      isValidGC, isCheckNotice,
    } = this.state;
    if (!bot) return null;
    const botGc = bot.GC;

    return (
      <Fragment>
        <Content>
          <Message
            whiteSpace={!isMobile && 'pre-line'}
            fontSize={1.5}
            fontWeight={600}
          >
            {i18n.t('onBotMessage')}
          </Message>
          <ContentPopup fontSize={isMobile && 0.8}>
            <ContentItem>
              <MessageContent>
                {i18n.t('campaign')}:
              </MessageContent>
              <ChangeBotCampaign
                campaignBot={bot.campaign || {}}
                updateBotCampaign={this.handleChangeBotCampaign}
                isChangeBotCampaign
                listCampaigns={listCampaigns}
                isError={!isValidCampaign}
                fontSize={1.002}
                handleChangeProps={this.handleChangeState}
              />
            </ContentItem>
            <ContentItem marginTop={2}>
              <MessageContent>
                {i18n.t('gc')}:
              </MessageContent>
              <InputFloatField
                handleChangeInput={this.handleCharge}
                valueDefault={botGc}
                minValue={botGc}
                maxValue={botGc + lucUserGC}
                type="number"
                fontSize={1.2}
                isError={!isValidGC}
                handleChangeProps={this.handleChangeState}
                placeholder={i18n.t('placeholderChargeGC')}
              />
            </ContentItem>
          </ContentPopup>
        </Content>
        <WrapperConfirm>
          <ContentConfirm>
            <CheckboxConfirm>
              <Checkbox
                isChecked={isCheckNotice}
                onClick={() => this.onClickCheckbox('isCheckNotice')}
              />
              <span>{i18n.t('noticeOnBot1')}</span>
            </CheckboxConfirm>
            <MessageConfirm>
              {i18n.t('noticeOnBot2')}
            </MessageConfirm>
          </ContentConfirm>
        </WrapperConfirm>
      </Fragment>
    );
  }

  render() {
    const { onClose } = this.props;
    const {
      orientation, onAnimation, isLoading,
      bot, isConfirmResetLogic,
    } = this.state;
    if (!bot) return null;
    const width = orientation === ORIENT.HORIZONTAL ? '36em' : '80%';
    return (
      <WrapperOnBot className="alertClass">
        <AlertStyled
          onAnimationEnd={this.handleAnimationEnd}
          isAnimation={onAnimation}
          width={width}
          maxWidth="90%"
          id="Alert"
        >
          <CloseButton
            src={iconX}
            onClick={() => onClose()}
          />
          {isConfirmResetLogic ? this.renderConfirmResetLogic() : this.renderSettingBot()}
          {this.renderButtons()}
        </AlertStyled>
        <Spinner isLoading={isLoading} />
      </WrapperOnBot>
    );
  }
}

PopupOnBot.propTypes = {
  onClose: PropTypes.func.isRequired,
  updateBotCampaign: PropTypes.func.isRequired,
  listCampaigns: PropTypes.array.isRequired,
  fetchBotDetail: PropTypes.func.isRequired,
  fetchListBots: PropTypes.func.isRequired,
  updateBotStatus: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  lucUserGC: PropTypes.number.isRequired,
  fetchUser: PropTypes.func.isRequired,
  bot: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: {
    chargeAction: bindActionCreators(DepositActions.gift, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(PopupOnBot);
