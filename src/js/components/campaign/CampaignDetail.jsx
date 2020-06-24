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
      selectedTabId: TABS[0].id,
    };
    this.onChangeTab = this.onChangeTab.bind(this);
  }

  componentDidMount() {
    this.onChangeTab();
  }

  onChangeTab(tabId) {
    this.setState({
      selectedTabId: tabId,
    });
  }

  render() {
    const { campaignInfo } = this.props;
    const { selectedTabId } = this.state;
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
