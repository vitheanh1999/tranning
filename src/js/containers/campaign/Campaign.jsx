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
    };
    this.showCampaignDetail = this.showCampaignDetail.bind(this);
    this.closeCampaignDetail = this.closeCampaignDetail.bind(this);
  }

  componentDidMount() {
    this.fetchListCampaigns();
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

  showCampaignDetail(campaign) {
    this.setState({ isShowDetail: true, campaign });
  }

  closeCampaignDetail() {
    this.setState({ isShowDetail: false });
  }

  renderDetailModal() {
    const { isShowDetail, campaign } = this.state;
    return (
      <ModalWrapper
        id="DetailModal"
        isOpen={isShowDetail}
        centered
      >
        <ModalHeaderCustom toggle={this.closeCampaignDetail}>
          {(campaign && campaign._id) ? 'Campaign Detail' : 'Add Campaign'}
        </ModalHeaderCustom>
        <CampaignDetail
          onClose={() => this.setState({ isShowDetail: false })}
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
