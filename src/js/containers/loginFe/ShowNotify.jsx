import React, { Component, Fragment } from 'react';
import moment from 'moment';
import {
  WrapperContent,
  TitleBox,

} from '../../components/login/NotifyStyle';
import {
  ListBox,
  TitleContent,
  MainContent,
  NewBox,
  Title,
  ModalLg,
  ModalLgHeader,
  ModalLgBody,
  ModalDetailTitle,
  New,
} from '../news/newsStyles';

const linkifyContent = (text) => {
  if (!text) {
    return '';
  }
  const dangerDom = (
    <div id="Contentxxx" dangerouslySetInnerHTML={{ __html: text }} />
  );
  return <Fragment>{dangerDom}</Fragment>;
};
class ShowNotify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      dataModal: [],
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
  }


  open(event, dataModal) {
    this.setState({
      isShowModal: true,
      dataModal,
    });
    event.stopPropagation();
  }

  close(event) {
    console.log('close modal');
    this.setState({
      isShowModal: false,
    });
  }

  renderNotify() {
    const data = this.props.listNotifies; 
    const { dataModal } = this.state;
    if (this.props.isShowNotify === true) {
      return (
        <WrapperContent
        onBlur={event => this.closeNotifyButton(event)}
        >
          <TitleBox>NEWS</TitleBox>
          <ListBox>
            {data.map(value => (
              <NewBox onClick={event => this.open(event, value)}>
                <TitleContent>
                  <Title>{value.title}</Title>
                  <New fontsize={0.7}>{value.is_new ? 'New' : ''}</New>
                </TitleContent>
                <MainContent>{value.content_data[0].summary}</MainContent>
              </NewBox>
            ))}
            <ModalLg
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              show={this.state.isShowModal}
              onHide={event => this.close(event)}
              centered
            >
              <ModalLgHeader closeButton>
                <label>
                  {moment(dataModal.view_plan).format('YYYY-MM-DD h:mm')}
                </label>
                <p className="title">{dataModal.title}</p>
              </ModalLgHeader>
              <ModalLgBody>
                {dataModal.content_data
                  ? dataModal.content_data.map(value => (
                    <ModalLgBody>
                      <ModalDetailTitle>{value.summary}</ModalDetailTitle>
                      <div>{linkifyContent(value.content)}</div>
                    </ModalLgBody>
                  ))
                  : ''}
              </ModalLgBody>
            </ModalLg>
          </ListBox>
        </WrapperContent>
      );
    }
  }

  render() {
    return <div>{this.renderNotify()}</div>;
  }
}

export default ShowNotify;
