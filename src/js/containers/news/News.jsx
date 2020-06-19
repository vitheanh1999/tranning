import React, { Component, Fragment } from 'react';
import moment from 'moment';
import api from '../../services/api';
import {
  ListContent,
  ListBox,
  NewBox,
  TitleContent,
  MainContent,
  DateContent,
  GroupNew,
  Title,
  New,
  ModalLg,
  ModalLgHeader,
  ModalDetailTitle,
  ModalLgBody,
} from './newsStyles';

const linkifyContent = (text) => {
  if (!text) {
    return '';
  }
  const dangerDom = (
    <div id="Contentxxx" dangerouslySetInnerHTML={{ __html: text }} />
  );
  return <Fragment>{dangerDom}</Fragment>;
};
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      showModal: false,
      dataModal: [],
    };
  }

  // componentWillMount() {
  //   this.fetchData();
  // }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    api
      .create()
      .fetchListNews({ perPage: 10, currentPage: 1 })
      .then((res) => {
        if (res.data) {
          this.setState({
            listNews: res.data.data,
          });
        }
      })
      .catch();
  }

  open(dataModal) {
    this.setState({
      showModal: true,
      dataModal,
    });
  }

  close() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const data = this.state.listNews;
    const { dataModal } = this.state;

    return (
      <ListContent>
        <ListBox>
          <GroupNew>
            {data.map((value, key) => (
              <NewBox onClick={() => this.open(value)}>
                <TitleContent>
                  <Title>{value.title}</Title>
                  <New>New</New>
                </TitleContent>
                <MainContent>{value.content_data[0].summary}</MainContent>
                <DateContent>
                  {moment(value.view_plan).format('YYYY-MM-DD')}
                </DateContent>
              </NewBox>
            ))}
            <ModalLg
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              show={this.state.showModal}
              onHide={() => this.close()}
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
                  ? dataModal.content_data.map((value, key) => (
                    <ModalLgBody>
                      <ModalDetailTitle>{value.summary}</ModalDetailTitle>
                      <div>{linkifyContent(value.content)}</div>
                    </ModalLgBody>
                  ))
                  : ''}
              </ModalLgBody>
            </ModalLg>
          </GroupNew>
        </ListBox>
      </ListContent>
    );
  }
}

export default News;
