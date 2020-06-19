import React, { Component } from 'react';
import { log } from 'pusher-js';
import News from '../news/News';
import ApiErrorUtils from '../../helpers/ApiErrorUtils';
import Alert from '../../components/common/Alert/Alert';
import {
  WrapperContent,
} from '../../components/login/NotifyStyle';

class ShowNotify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      perPage: 100,
    };
  }

  //   fetchData(data) {
  //     ApiErrorUtils.handleServerError(data, Alert.instance, () => {
  //       this.setState({});
  //     });
  //   }


  renderNotify() {
    if (this.props.isShowNotify === true) {
      return (
          <WrapperContent ></WrapperContent>
      );
    }
  }

  render() {
    return <div>{this.renderNotify()}</div>;
  }
}

export default ShowNotify;
