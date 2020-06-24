import React, { Component } from 'react';
import styled from 'styled-components';
import images from '../../../assets/images';
import ListCampaign from '../../components/campaign/ListCampaign';
import CampaignDetail from '../../components/campaign/CampaignDetail';
import api from '../../services/api';
import { ModalWrapper, ModalHeaderCustom } from '../../components/common/CommonStyle';

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${images.caroBackground});
  background-repeat: repeat;
`;

class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCampaigns: [],
      totalCampaigns: null,
      isShowDetail: false,
      campaign: null,
      listLogicPatterns: null,
      listBetPatterns: null,
    };
    this.showCampaignDetail = this.showCampaignDetail.bind(this);
    this.closeCampaignDetail = this.closeCampaignDetail.bind(this);
  }

  componentDidMount() {
    this.fetchListCampaigns();
    this.fetchListLogicPattern();
  }

  fetchListCampaigns() {
    api
      .create()
      .fetchListCampaigns({ perPage: 100, currentPage: 1 })
      .then((res) => {
        if (res.data) {
          this.setState({
            listCampaigns: res.data.data,
            totalCampaigns: res.data.total_campaigns,
          });
        }
      })
      .catch();
  }

  fetchListLogicPattern() {
    api.create().fetchListLogicPattern({}).then((res) => {
      this.setState({
        listLogicPatterns: res.data,
      });
    });
  }

  fetchListBetPatterns() {
    api.create().fetchListBetPattern({}).then((res) => {
      this.setState({
        listBetPatterns: res.data,
      });
    });
  }

  showCampaignDetail(campaign) {
    this.setState({ isShowDetail: true, campaign });
  }

  closeCampaignDetail() {
    this.setState({ isShowDetail: false });
  }

  renderDetailModal() {
    const {
      isShowDetail, campaign, listLogicPatterns, listBetPatterns,
    } = this.state;
    return (
      <ModalWrapper
        id="DetailModal"
        show={isShowDetail}
        centered
        onHide={this.closeCampaignDetail}
      >
        <ModalHeaderCustom closeButton>
          {(campaign && campaign._id) ? 'Campaign Detail' : 'Add Campaign'}
        </ModalHeaderCustom>
        <CampaignDetail
          onClose={() => this.setState({ isShowDetail: false })}
          campaignInfo={campaign}
          listLogicPatterns={listLogicPatterns}
          listBetPatterns={listBetPatterns}
        />
      </ModalWrapper>
    );
  }

  render() {
    const { isShowDetail } = this.state;
    return (
      <Content>
        <ListCampaign
          listCampaigns={this.state.listCampaigns}
          totalCampaigns={this.state.totalCampaigns}
          showBotDetail={this.showCampaignDetail}
        />
        {isShowDetail && (
          this.renderDetailModal()
        )}
      </Content>
    );
  }
}

export default Campaign;
