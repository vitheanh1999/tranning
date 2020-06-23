import React, { Component } from 'react';
import {
  RegisterMain, RegisterContent, Title, RegisterForm, Label, Button, FormCheck, Bg888, Warning,
  Error, ErrorButton,
} from './registerStyle';
import api from '../../services/api';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: '',
        isCheck: false,
      },
      password: {
        value: '',
        isCheck: false,
      },
      confirm: {
        value: '',
        isCheck: false,
      },
      agree: {
        checked: null,
      },
      isShowError: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
  }

  handleChange(event) {
    const { name, value } = event.target;
    const state = { ...this.state };
    state[name].checked = value;
    state[name].value = value;
    this.setState(state);
  }

  handleBlur(event) {
    const { name, value } = event.target;
    const state = { ...this.state };
    state[name].value = value;
    this.setState(state);
    switch (name) {
      case 'email':
        if (state[name].value === '') {
          state[name].isCheck = true;
        } else state[name].isCheck = false;
        break;
      case 'password':
        if (state[name].value.length < 8) {
          state[name].isCheck = true;
        } else state[name].isCheck = false;
        break;
      default:
    }
    this.setState(state);
  }

  handleSubmit(event) {
    const params = {
      affiliate_code: 'FE',
      lang_setting: 'en',
      email: this.state.email.value,
      password: this.state.password.value,
      password_confirmation: this.state.confirm.value,
      type: '',
    };
    if (this.state.agree.checked === 'on') {
      api.create().register(params).then((res) => {
        if (res.data.code !== 200) {
          this.setState({
            isShowError: true,
          });
        }
      });
    }

    event.preventDefault();
  }

  handleClose() {
    this.setState({
      isShowError: false,
    });
  }

  handleLogin() {
    // eslint-disable-next-line react/prop-types
    this.props.isShowLogin();
  }

  render() {
    let warning = null;
    let warningPass = null;
    let confirm = null;
    let error = null;
    const emailCheck = this.state.email.isCheck;
    const passCheck = this.state.password.isCheck;
    const passValue = this.state.password.value;
    const confirmCheck = this.state.confirm.value;
    const errorStatus = this.state.isShowError;
    if (emailCheck) {
      warning = <Warning> Invalid Email address</Warning>;
    }
    if (passCheck) {
      warningPass = <Warning> The password must be at least 8 characters long.</Warning>;
    }
    if (confirmCheck !== passValue && confirmCheck !== '') {
      confirm = <Warning> Password and confirm password must be the same</Warning>;
    }
    if (errorStatus) {
      error = (
        <Error>
          <h1>ERROR!</h1>
          <div className="mt-4">Please try again later!!!!!</div>
          <ErrorButton className="btn" onClick={this.handleClose}> OK</ErrorButton>
        </Error>
      );
    }
    return (
      <RegisterMain>
        {error}
        <div>
          <Title> CREATE AN ACCOUNT</Title>
          <RegisterContent>
            <Bg888>
              <RegisterForm>
                <div className="form-group">
                  <Label>Email</Label>
                  <input type="text" name="email" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} />
                  {warning}
                </div>
                <div className="form-group">
                  <Label>New Password</Label>
                  <input type="password" name="password" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} />
                  {warningPass}
                </div>
                <div className="form-group">
                  <Label>Confirm Password</Label>
                  <input type="password" name="confirm" className="form-control" onChange={this.handleChange} />
                  {confirm}
                </div>
                <FormCheck className="form-check">
                  <input type="checkbox" name="agree" className="form-check-input" onChange={this.handleChange} />
                  <label className="form-check-label text-light">I have read and agree to Terms and Conditions and Privacy Policy</label>
                </FormCheck>
                <Button className="btn btn-secondary" onClick={this.handleSubmit} name="buttonSubmit">CREAT AN ACCOUNT</Button>;
                <Button className="btn btn-success" onClick={this.handleLogin}>LOGIN BY LUC888</Button>;
              </RegisterForm>
            </Bg888>
          </RegisterContent>
        </div>

      </RegisterMain>
    );
  }
}
export default Register;
