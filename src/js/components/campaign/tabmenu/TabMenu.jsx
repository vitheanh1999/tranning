import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, TabButton } from './tabMenuStyle';

class TabMenu extends Component {
  renderTab(tab) {
    const { onChangeTab, selecTedId } = this.props;
    return (
      <TabButton
        selected={selecTedId === tab.id}
        onClick={() => onChangeTab(tab.id)}
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
  tabs: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  selecTedId: PropTypes.any,
};
export default TabMenu;
