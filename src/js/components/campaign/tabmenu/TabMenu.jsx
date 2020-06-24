import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, TabButton } from './tabMenuStyle';

class TabMenu extends Component {
  renderTab(tab) {
    const { onChangeTab, selectTedId } = this.props; 
    return (
      <TabButton
        onClick={() => onChangeTab(tab.id)}
        selected={selectTedId === tab.id}
      >
        {tab.text}
      </TabButton>
    );
  }

  render() {
    const { tabs } = this.props;
    return (
      <Wrapper>
        {tabs.map(item => (
          this.renderTab(item)
        ))}
      </Wrapper>
    );
  }
}
TabMenu.defaultProps = {
  onChangeTab: () => {},
  selecTedId: 1,
};
TabMenu.propTypes = {
  onChangeTab: PropTypes.func,
  selecTedId: PropTypes.any,
};
export default TabMenu;
