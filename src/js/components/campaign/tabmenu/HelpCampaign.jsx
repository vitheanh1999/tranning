import React, { Component } from 'react';
import { HelpWrapper, TitleGroup } from './tabBasicSettingStyle';
import i18n from '../../../i18n/i18n';


class HelpCampaign extends Component {
  render() {
    const { fieldName } = this.props;
    return (
      <HelpWrapper>
        <TitleGroup>{fieldName ? i18n.t(fieldName) : i18n.t('help')}</TitleGroup>
      </HelpWrapper>
    );
  }
}

export default HelpCampaign;
