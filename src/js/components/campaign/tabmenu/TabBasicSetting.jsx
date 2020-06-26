import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertPatternCampaign } from '../../../helpers/utils';
import {
  TitleGroup, Input, TitleField, Blank, Wrapper, Column, Row, IconHelp,
} from './tabBasicSettingStyle';
import Dropdowm from '../../common/Dropdown/Dropdown';
import HelpCampaign from './HelpCampaign';
import i18n from '../../../i18n/i18n';
import images from '../../../../assets/images';

class TabBasicSetting extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      helpButton: false,
    };
    this.createButtonHelp = this.createButtonHelp.bind(this);
  }

  createButtonHelp(fieldName) {
    // console.log(fieldName);
    const { selectedHelpButton, helpButton } = this.props;
    const image = helpButton === false ? images.iconHelpNormal : images.iconHelpSelected;
    return (<IconHelp onClick={selectedHelpButton} src={image} />);
  }

  render() {
    const { campaignData, listLogicPatterns, listBetPatterns } = this.props;
    const optionLogicPatterns = convertPatternCampaign(listLogicPatterns.data, campaignData.data.components[0], 'logic_pattern_name');
    const optionBetPatterns = convertPatternCampaign(listBetPatterns.data, campaignData.data.components[0], 'bet_pattern_name');
    return (
      <Wrapper>
        <Column>
          <Blank height={0.8} />
          <Row>
            <TitleGroup width={9}>{i18n.t('name')}</TitleGroup>
            <Input
              value={campaignData.name}
              name="name"
            />
            {this.createButtonHelp('name')}
          </Row>
          <Blank height={1} />
          <Row>
            <TitleGroup width={9}>{i18n.t('logicPattern')}</TitleGroup>
            {optionLogicPatterns.length > 0 ? <Dropdowm data={optionLogicPatterns} /> : ''}
            {this.createButtonHelp('logicPattern')}
          </Row>
          <Blank height={1} />
          <Row>
            <TitleGroup width={9}>{i18n.t('betPattern')}</TitleGroup>
            {optionBetPatterns.length > 0 ? <Dropdowm data={optionBetPatterns} /> : ''}
            {this.createButtonHelp('betPattern')}
          </Row>
          <Blank height={1} />
          <TitleGroup width={9}>Profit</TitleGroup>
          <Row>
            <TitleField width={8}>{i18n.t('maxProfit')}</TitleField>
            <Input
              value={campaignData.profit_data.max_profit}
            />
            {this.createButtonHelp('maxProfit')}
          </Row>
          <Blank height={0.5} />
          <Row>
            <TitleField width={8}>{i18n.t('minProfit')}</TitleField>
            <Input
              value={campaignData.profit_data.min_profit}
            />
            {this.createButtonHelp('minProfit')}
          </Row>
          <Blank height={1} />
          <Row>
            <TitleGroup width={9}>{i18n.t('pointRate')}</TitleGroup>
            <Input
              value={campaignData.data.point_rate}
            />
            {this.createButtonHelp('pointRate')}
          </Row>
          <Blank height={1} />
          <Row>
            <TitleGroup width={9}>{i18n.t('pointRateAdaptation')}</TitleGroup>
            <Input
              value={campaignData.data.point_rate * 10}
              disabled
            />
            {this.createButtonHelp('pointRateAdaptation')}
          </Row>
        </Column>
        <HelpCampaign 
        fieldName={campaignData.profit_data.name}
        />
      </Wrapper>

    );
  }
}
TabBasicSetting.defaultProps = {
  listBetPatterns: [],
  listLogicPatterns: [],
};
TabBasicSetting.PropTypes = {
  listLogicPatterns: PropTypes.array.isRequired,
  listBetPatterns: PropTypes.array.isRequired,
  campaignData: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default TabBasicSetting;
