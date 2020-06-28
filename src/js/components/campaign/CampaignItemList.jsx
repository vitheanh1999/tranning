import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { WrapperListItem, ListInformation, WrapperAction } from '../common/CommonStyle';
import i18n from '../../i18n/i18n';
import images from '../../../assets/imgs/edit2.png';
import {
  Title, Row, FieldTitle, FieldText, ButtonAction, Image,
} from './campaignStyle';

const renderField = (title, value) => (
  <Row>
    <FieldTitle>{title}</FieldTitle>
    <FieldText>{value}</FieldText>
  </Row>
);
class CampaignItemList extends Component {
  renderAction() {
    const { onClickDetail } = this.props;
    return (
      <Fragment>
        <ButtonAction
          fontSize="1em"
          padding="0.2em 0.5em 0.2em 0.5em"
          hoverBgColor="#20bcdf"
          opacity="0.5"
          margin="0 1em 0.7em 0"
          color="#2d889c"
          height={2}
          onClick={onClickDetail}
        >
          {i18n.t('edit')}
          <Image src={images} alt="" />
        </ButtonAction>
      </Fragment>
    );
  }

  render() {
    const { campaignInfo } = this.props;
    return (
      <WrapperListItem>
        <ListInformation>
          <Title>{campaignInfo.name}</Title>
          {
            renderField(i18n.t('logicPattern'),
              campaignInfo && campaignInfo.data && campaignInfo.data.components
                && campaignInfo.data.components.length ? campaignInfo.data.components[0].logic_pattern_name : 'non-select')
          }
          {
            renderField(i18n.t('betPattern'),
              campaignInfo && campaignInfo.data && campaignInfo.data.components
                && campaignInfo.data.components.length ? campaignInfo.data.components[0].bet_pattern_name : 'non-select')
          }
        </ListInformation>
        <WrapperAction>
          {this.renderAction()}
        </WrapperAction>
      </WrapperListItem>
    );
  }
}
CampaignItemList.defaultProps = {
  onClickDetail: null,
};

CampaignItemList.propTypes = {
  campaignInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  onClickDetail: PropTypes.func,
};

export default CampaignItemList;
