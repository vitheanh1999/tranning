import React, { Component } from 'react';
import { log } from 'pusher-js';
import {
  Wrapper,
  ImgTop,
  ImgBottom,
  LoginMain,
  Logo,
  Option,
  SelectLogin,
  ImgLogin,
  H3,
  SelectRegister,
  Notify,
  IconNotify,
  CountNotify,
  Describe,
  DescribeTitle,
  DescribeContent,
  LoginAction,
  Note,
  Top,
} from '../../components/login/loginStyle';
import images from '../../../assets/images';
import FormLogin from './Login';
import Register from '../register/Register';
import ShowNotify from './ShowNotify';
import api from '../../services/api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLogin: false,
      isShowRegister: false,
      isShowNotify: false,
      isShowAll: false,
      listNotifies: [],
    };
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleClickRegister = this.handleClickRegister.bind(this);
    this.handleClickTop = this.handleClickTop.bind(this);
    this.handleClickNotify = this.handleClickNotify.bind(this);
  }

  handleClickLogin() {
    const { isShowLogin } = this.state;
    this.setState({
      isShowLogin: !isShowLogin,
      isShowRegister: false,
    });
  }

  handleClickRegister() {
    const { isShowRegister } = this.state;
    this.setState({
      isShowRegister: !isShowRegister,
    });
  }

  handleClickTop() {
    this.setState({
      isShowLogin: false,
      isShowRegister: false,
    });
  }

  handleClickNotify() {
    const { isShowNotify } = this.state;
    this.setState({
      isShowNotify: !isShowNotify,
    });
  }


  componentDidMount() {
    this.fetchListNewsNotLogin();
  }

  fetchListNewsNotLogin() {
    api
      .create()
      .fetchListNewsNotLogin({ perPage: 100, currentPage: 1 })
      .then((res) => {
        if (res.data) {
          this.setState({
            listNotifies: res.data.data,
          });
        }
      })
      .catch();
  }

  render() {
    let formLogin = null;
    const { listNotifies, isShowLogin, isShowNotify } = this.state;
    let totalNotify = listNotifies.filter(item => item.is_new === true)
      .length;
    if (totalNotify > 9) totalNotify = '9+';
    const { isShowAll } = this.state;
    if (isShowLogin) {
      formLogin = (
        <div>
          <FormLogin isShowLogin={this.handleClickLogin} {...this.props} />
          <Top className="btn" onClick={this.handleClickTop}>
            {' '}
            TOP
          </Top>
        </div>
      );
    } else if (this.state.isShowRegister) {
      formLogin = <Register isShowLogin={this.handleClickLogin} />;
    } else {
      formLogin = (
        <LoginMain>
          <LoginAction>
            <Logo src={images.logo} />
            <Option>
              <SelectLogin onClick={this.handleClickLogin}>
                <ImgLogin src={images.login} />
                <H3>LOGIN</H3>
              </SelectLogin>
              <SelectRegister onClick={this.handleClickRegister}>
                <ImgLogin src={images.login} />
                <H3>REGISTER</H3>
              </SelectRegister>
            </Option>
          </LoginAction>
          <Describe>
            <DescribeTitle src={images.title1} />
            <DescribeContent src={images.title1Content} />
          </Describe>
          <Describe>
            <DescribeTitle src={images.title2} />
            <DescribeContent src={images.title2Content} />
          </Describe>
          <Describe>
            <DescribeTitle src={images.title3} />
            <DescribeContent src={images.title3Content} />
            <Note src={images.noteRed} />
          </Describe>
        </LoginMain>
      );
    }
    return (
      <Wrapper>
        {formLogin}
        <ImgTop src={images.imgTop} />
        <ImgBottom src={images.imgBottom} />
        <Notify
          onClick={() => this.handleClickNotify()}
        >
          <IconNotify src={images.notify}>
            <CountNotify>{totalNotify}</CountNotify>
          </IconNotify>
          {
            isShowNotify && (
              <ShowNotify
                id="New"
                listNotifies={this.state.listNotifies}
                isShowNotify={this.state.isShowNotify}
              />)
          }
        </Notify>
      </Wrapper>
    );
  }
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
