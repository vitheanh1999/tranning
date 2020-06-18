import React, { Component } from 'react';
import {
  Wrapper, ImgTop, ImgBottom, LoginMain, Logo, Option, SelectLogin, ImgLogin, H3, SelectRegister,
  Notify, Describe, DescribeTitle, DescribeContent, LoginAction, Note, Top,
} from '../../components/login/loginStyle';
import images from '../../../assets/images';
import FormLogin from './Login';
import Register from '../register/Register';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLogin: false,
      isShowRegister: false,
    };
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleClickRegister = this.handleClickRegister.bind(this);
    this.handleClickTop = this.handleClickTop.bind(this);
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

  render() {
    let formLogin = null;
    if (this.state.isShowLogin) {
      formLogin = (
        <div><FormLogin isShowLogin={this.handleClickLogin} {...this.props} />
          <Top className="btn" onClick={this.handleClickTop}> TOP</Top>
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
        <Notify src={images.notify} />
      </Wrapper>
    );
  }
}

Login.propTypes = {
};

Login.defaultProps = {

};

export default Login;
