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
  NewsItemTitle,
  NewsItem,
  TitleNew,
  ModalLg,
  ModalLgHeader,
  ModalLgBody,
  TaCardTitle,
  ModalDate,
  ModalLgTitle,
  TaCardText,
} from '../news/newStyles';

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

  close() {
    this.setState({
      isShowModal: false,
    });
  }


  renderNotify() {
    const data = this.props.listNotifies;
    const { dataModal } = this.state;
    if (this.props.isShowNotify === true) {
      return (
        <WrapperContent>
          <TitleBox>NEWS</TitleBox>
          <ListBox>
            {data.map(item => (
              <NewsItem onClick={event => this.open(event, item)}>
                <NewsItemTitle>
                  <TitleContent>{item.title}</TitleContent>
                  <TitleNew fontsize={0.7}>{item.is_new ? 'New' : ''}</TitleNew>
                </NewsItemTitle>
                <MainContent>{item.content_data[0].summary}</MainContent>
              </NewsItem>
            ))}
            <ModalLg
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              show={this.state.isShowModal}
              onHide={this.close}
              centered
            >
              <ModalLgHeader closeButton />
              <ModalLgBody>
                <ModalDate><span>{moment(dataModal.view_plan).format('YYYY-MM-DD h:mm')}</span></ModalDate>
                <ModalLgTitle>{dataModal.title}</ModalLgTitle>
              </ModalLgBody>

              {
                dataModal.content_data
                  ? dataModal.content_data.map(item => (
                    <ModalLgBody key={item.id} className="main-body">
                      <TaCardTitle>{item.summary}</TaCardTitle>
                      <TaCardText>{linkifyContent(item.content)}</TaCardText>
                    </ModalLgBody>
                  ))
                  : ''
              }
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
