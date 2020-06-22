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
<<<<<<< HEAD
      isShowAll: false,
      listNotifies: [],
=======
      listNews:[]
>>>>>>> 9d247d23fbe8f53e3eabe2f8b359ac29d942f3c1
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

<<<<<<< HEAD
  closeNotifyButton() {
    const { isShowNotify } = this.state;
    if (!isShowNotify) {
      this.setState({
        isShowAll: false,
      });
    }
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
=======
  componentDidMount() {
    this.fetchData();
    console.log(this.state.listNews);
    
>>>>>>> 9d247d23fbe8f53e3eabe2f8b359ac29d942f3c1
  }

  fetchData() {
    api
      .create()
      .fetchListNewsNotLogin({ perPage: 10, currentPage: 1 })
      .then((res) => {
        if (res.data) {
          this.setState({
            listNews: res.data.data,
          });
        }
      })
      .catch();
  }
  render() {
    let formLogin = null;
    const { listNotifies } = this.state;
    let totalNotify = listNotifies.filter(item => item.is_new === true)
      .length;
    if (totalNotify > 9) totalNotify = '9+';
    const { isShowAll } = this.state;
    if (this.state.isShowLogin) {
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
<<<<<<< HEAD
        <Notify
          onClick={() => this.handleClickNotify()}
          onBlur={event => this.closeNotifyButton(event)}
        >
          <IconNotify src={images.notify}>
            <CountNotify>{totalNotify}</CountNotify>
          </IconNotify>
          <ShowNotify
            id="New"
            listNotifies={this.state.listNotifies}
            isShowNotify={this.state.isShowNotify}
          />
=======
        <Notify onClick={() => this.handleClickNotify()}>
          <IconNotify><CountNotify>2</CountNotify></IconNotify>
          <ShowNotify isShowNotify={this.state.isShowNotify} />
>>>>>>> 9d247d23fbe8f53e3eabe2f8b359ac29d942f3c1
        </Notify>
      </Wrapper>
    );
  }
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
