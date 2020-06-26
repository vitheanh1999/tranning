import React, { Component } from 'react';
import { WrapperDetail } from '../common/CommonStyle';
import TabMenu from './tabmenu/TabMenu';
import TabBasicSetting from './tabmenu/TabBasicSetting';


const TABS = [
  { id: 1, text: 'basic' },
  { id: 2, text: 'advance' },
  { id: 3, text: 'Option' },
];
class CampaignDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabId: 1,
      helpButton: false,
    };
    this.onChangeTab = this.onChangeTab.bind(this);
    this.selectedHelpButton = this.selectedHelpButton.bind(this);
  }

  onChangeTab(tabId) {
    this.setState({
      selectedTabId: tabId,
    });
  }

  selectedHelpButton() {
    this.setState({
      helpButton: !this.state.helpButton,
    });
  }

  render() {
    const { campaignInfo, listLogicPatterns, listBetPatterns } = this.props;
    const { selectedTabId, helpButton } = this.state;

    return (
      <WrapperDetail>
        <TabMenu
          onChangeTab={this.onChangeTab}
          tabs={TABS}
          selectedId={selectedTabId}
        />
        {
            selectedTabId === TABS[0].id && (
            <TabBasicSetting
              campaignData={campaignInfo}
              listLogicPatterns={listLogicPatterns}
              listBetPatterns={listBetPatterns}
              selectedHelpButton={this.selectedHelpButton}
              helpButton={helpButton}
            />
            )
          }
        {
            selectedTabId === TABS[1].id && (
            <div>advance</div>
            )
          }
      </WrapperDetail>
    );
  }
}

export default CampaignDetail;
