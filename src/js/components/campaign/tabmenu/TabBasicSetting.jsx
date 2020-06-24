import React, { Component } from 'react';
import {
  TitleGroup, Input, TitleField, Blank, Wrapper, Column, Row,
} from './tabBasicSettingStyle';
import Dropdowm from '../../common/Dropdown/Dropdown';
import HelpCampaign from './HelpCampaign';
import i18n from '../../../i18n/i18n';

class TabBasicSetting extends Component {
  render() {
    const { campaignData } = this.props;
    return (
      <Wrapper>
        <Column>
          <Blank height={0.8} />
          <Row>
            <TitleGroup width={9}>{i18n.t('name')}</TitleGroup>
            <Input
              value={campaignData.name}
            />
          </Row>
          <Blank height={1} />
          <Row>
            <TitleGroup width={9}>{i18n.t('logicPattern')}</TitleGroup>
            <Dropdowm />
          </Row>
          <Blank height={1} />
          <Row>
            <TitleGroup width={9}>{i18n.t('betPattern')}</TitleGroup>
            <Dropdowm />
          </Row>
          <Blank height={1} />
          <TitleGroup width={9}>Profit</TitleGroup>
          <Row>
            <TitleField width={8}>{i18n.t('maxProfit')}</TitleField>
            <Input
              value={campaignData.profit_data.max_profit}
            />
          </Row>
          <Blank height={0.5} />
          <Row>
            <TitleField width={8}>{i18n.t('minProfit')}</TitleField>
            <Input
              value={campaignData.profit_data.min_profit}
            />
          </Row>
          <Blank height={1} />
          <Row>
            <TitleGroup width={9}>{i18n.t('pointRate')}</TitleGroup>
            <Input
              value={campaignData.data.point_rate}
            />
          </Row>
          <Blank height={1} />
          <Row>
            <TitleGroup width={9}>{i18n.t('pointRateAdaptation')}</TitleGroup>
            <Input
              value={campaignData.data.point_rate * 10}
              disabled
            />
          </Row>
        </Column>
        <HelpCampaign />
      </Wrapper>

    );
  }
}

export default TabBasicSetting;
