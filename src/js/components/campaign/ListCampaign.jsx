import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContentContainer, ContentHeader, ContentBody, MedianStrip,
} from '../common/CommonStyle';
import { ButtonAddCampaign, IconAdd } from './campaignStyle';
import CampaignItemList from './CampaignItemList';
import addImg from '../../../assets/imgs/add.png';
import i18n from '../../i18n/i18n';


class ListCampaign extends Component {
  renderCampaign() {
    const { listCampaigns, showBotDetail } = this.props;
    const listCampaignItem = listCampaigns.map(item => (
      <CampaignItemList
        campaignInfo={item}
        onClickDetail={() => showBotDetail(item)}
      />
    ));
    return listCampaignItem;
  }

  render() {
    const { totalCampaigns } = this.props;
    return (
      <ContentContainer>
        <ContentHeader>Total : {totalCampaigns}
          <ButtonAddCampaign>
            <IconAdd src={addImg} />
            {i18n.t('addCampaign')}
          </ButtonAddCampaign>
        </ContentHeader>
        <MedianStrip />
        <ContentBody>
          {this.renderCampaign()}
        </ContentBody>
      </ContentContainer>
    );
  }
}

ListCampaign.propTypes = {
  listCampaigns: PropTypes.array.isRequired,
  showBotDetail: PropTypes.func.isRequired,
  totalCampaigns: PropTypes.any.isRequired,
};
export default ListCampaign;
