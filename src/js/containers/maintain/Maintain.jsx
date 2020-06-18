import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import images from '../../../assets/images';
import api from '../../services/api';
import { convertToLocalDateTime } from '../../helpers/utils';
import {
  Wrapper, VectorLeftTop, VectorBotRight, AreaContent,
  LinkToTop,
} from './maintainStyle';
import Content from '../../components/maintain/Content';

class Maintain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: images.logo,
      title: 'メンテナンス中',
      content: 'Test',
      date: '2020-05-15 04:35 PM',
      redirect: false,
    };
  }

  componentWillMount() {
    api.create().fetchMaintainInfo().then((res) => {
      this.checkData(res.data);
    });
  }

  checkData(res) {
    const { code, data } = res;
    if (code !== 200 || !data || data == null) {
      this.setState({ redirect: true });
    } else {
      const { description, end_plan: endPlan } = data;
      this.setState({
        content: description,
        date: convertToLocalDateTime(endPlan, 'YYYY-MM-DD HH:mm A'),
        redirect: false,
      });
    }
  }

  render() {
    const {
      logo, title, content, date, redirect,
    } = this.state;
    if (redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <Wrapper>
        <VectorLeftTop src={images.vectorLeftTop} />
        <VectorBotRight src={images.vectorBotRight} />
        <AreaContent>
          <Content logo={logo} title={title} content={content} date={date} />
          <LinkToTop href="/login">Top</LinkToTop>
        </AreaContent>
      </Wrapper>
    );
  }
}

Maintain.propTypes = {
};

Maintain.defaultProps = {

};

export default Maintain;
