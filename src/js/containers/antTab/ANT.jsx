import React, { Component } from 'react';
import PropTypes from 'prop-types';
import images from '../../../assets/images';
import {
  Wrapper, WrapperContent, AreaHeader, AreaBody,
} from './ANTStyle';
import api from '../../services/api';
import ListBots from '../../components/listBots/ListBots';
import Bot from '../../components/listBots/Bot';
import AddBot from '../../components/listBots/AddBot';

class ANT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBots: [],
      listBotHistories: [],
      listChartData: [],
      sortBy: 'statusOnOff',
      currentPage: 1,
      perPage: 10,
      isDeleted: 0,
      isShowPopup: false,
      botDetail: {},
    };
    this.onShowModal = this.onShowModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleUpdateBot = this.handleUpdateBot.bind(this);
    this.handleRenameBot = this.handleRenameBot.bind(this);
    this.handleFetchBotDetail = this.handleFetchBotDetail.bind(this);
    this.handleDeleteBot = this.handleDeleteBot.bind(this);
    this.onChangeSoftBy = this.onChangeSoftBy.bind(this);
    this.handleFetchBotHistory = this.handleFetchBotHistory.bind(this);
    this.handleFetchChartData = this.handleFetchChartData.bind(this);
    this.handleUpdateBotCampaign = this.handleUpdateBotCampaign.bind(this);
  }

  componentDidMount() {
    this.handleGetList();
  }

  onShowModal() {
    this.setState({
      isShowPopup: true,
    });
  }

  onCloseModal() {
    this.setState({
      isShowPopup: false,
    });
  }

  onChangeSoftBy(selectedOption) {
    const { sortBy } = this.state;
    const newSortBy = selectedOption.value;
    if (sortBy !== newSortBy) {
      this.setState({
        sortBy: newSortBy,
      }, () => {
        this.handleGetList();
      });
    }
  }

  handleFetchBotDetail(botId) {
    api.create().fetchBotDetail({ botId }).then((res) => {
      if (res.data) {
        const { code, data } = res.data;
        if (code === 200 && data) {
          this.setState({ botDetail: data });
        }
      }
    });
  }

  handleDeleteBot(botId) {
    api.create().deleteBot({ botId }).then((res) => {
      if (res.data) {
        const { code } = res.data;
        if (code === 200) {
          this.handleGetList();
        }
      }
    });
  }

  handleRenameBot(params) {
    api.create().updateBotName(params).then((res) => {
      if (res.data) {
        const { code, data } = res.data;
        if (code === 201 && data) {
          this.handleFetchBotDetail(data.id);
          this.handleGetList();
        }
      }
    });
  }

  handleUpdateBot(params) {
    api.create().createBots(params).then((res) => {
      if (res.data) {
        const { code, data } = res.data;
        if (code === 201 && data) {
          this.handleGetList();
          this.onCloseModal();
        }
      }
    });
  }

  handleGetList() {
    const {
      sortBy, currentPage, perPage, isDeleted,
    } = this.state;
    const paramsFetchListBots = {
      sortBy,
      currentPage,
      perPage,
      isDeleted,
    };
    api.create().fetchListBots(paramsFetchListBots).then((res) => {
      if (res.data) {
        const { code, data } = res.data;
        if (code === 200 && data) {
          this.setState({ listBots: data });
        }
      }
    });
  }

  handleFetchBotHistory(paramsFetchBotHistory) {
    api.create().fetchBotHistory(paramsFetchBotHistory).then((res) => {
      if (res.data) {
        const { code, data } = res.data;
        if (code === 200 && data) {
          this.setState({ listBotHistories: data });
        }
      }
    });
  }

  handleFetchChartData(paramsFetchChartData) {
    api.create().fetchChartData(paramsFetchChartData).then((res) => {
      if (res.data) {
        const { code, data } = res.data;
        if (code === 200 && data) {
          this.setState({ listChartData: data });
        }
      }
    });
  }

  handleUpdateBotCampaign(paramsUpdateBotCampaign) {
    api.create().updateBotCampaign(paramsUpdateBotCampaign).then((res) => {
      if (res.data) {
        const { code } = res.data;
        if (code === 200) {
          this.handleFetchBotDetail(paramsUpdateBotCampaign.botId);
          this.handleGetList();
        }
      }
    });
  }

  render() {
    const {
      listBots: list, isShowPopup, botDetail,
      listChartData, listBotHistories,
    } = this.state;
    const { fontSize } = this.props;
    return (
      <Wrapper src={images.backgroundMaintain}>
        <WrapperContent fontSize={fontSize}>
          <AreaHeader>
            <AddBot
              total={list.length}
              iconPlus={images.iconPlus}
              handleCreateBot={this.handleUpdateBot}
              isShowPopup={isShowPopup}
              onShowModal={this.onShowModal}
              onCloseModal={this.onCloseModal}
            />
          </AreaHeader>
          <AreaBody>
            <ListBots
              onChangeSoftBy={this.onChangeSoftBy}
            >
              {
                list.map((bot, botIndex) => (
                  <Bot
                    key={botIndex}
                    bot={bot}
                    botIndex={botIndex}
                    iconBtnView={images.iconBtnView}
                    iconBtnShowDetail={images.iconBtnShowDetail}
                    iconBotDetail={images.iconBotDetail}
                    handleRenameBot={this.handleRenameBot}
                    handleFetchBotDetail={this.handleFetchBotDetail}
                    handleDeleteBot={this.handleDeleteBot}
                    botDetail={botDetail}
                    handleUpdateBotCampaign={this.handleUpdateBotCampaign}
                    handleFetchBotHistory={this.handleFetchBotHistory}
                    handleFetchChartData={this.handleFetchChartData}
                    listChartData={listChartData}
                    listBotHistories={listBotHistories}
                  />
                ))
              }
            </ListBots>
          </AreaBody>
        </WrapperContent>
      </Wrapper>
    );
  }
}

ANT.propTypes = {
  fontSize: PropTypes.number,
};

ANT.defaultProps = {
  fontSize: 14,
};

export default ANT;
