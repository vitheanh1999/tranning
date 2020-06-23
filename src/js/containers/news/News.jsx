import React, { Component } from 'react';
import moment from 'moment';

import {
  Wrapper,
  NewsBox,
  NewsGroup,
  NewsItem,
  NewsItemTitle,
  TitleContent,
  TitleNew,
  MainContent,
  NewsDate,
  ModalLg, ModalLgBody, ModalLgHeader, ModalLgTitle,
  TaCardText, TaCardTitle, ModalDate,
} from './newStyles';
import api from '../../services/api';


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      listNews: [],
      newDetail: [],
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  close() {
    this.setState({ showModal: false });
  }

  open(obj) {
    this.setState({
      showModal: true,
      newDetail: obj,
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    api.create().fetchListNews({ perPage: 10, currentPage: 1 }).then((res) => {
      if (res.data) {
        this.setState({
          listNews: res.data.data,
        });
      }
    }).catch();
  }

  render() {
    const data = this.state.listNews;
    const { newDetail } = this.state;
    return (
      <Wrapper>
        <NewsBox>
          <NewsGroup>
            {
              data.map(item => (
                <NewsItem key={item.id} onClick={() => this.open(item)}>
                  <NewsItemTitle>
                    <TitleContent>{item.title}</TitleContent>
                    <TitleNew>{item.is_new ? 'New' : ''}</TitleNew>
                  </NewsItemTitle>
                  <MainContent>{item.content_data[0].summary}</MainContent>
                  <NewsDate>
                    <span>{moment(item.view_plan).format('YYYY-MM-DD')}</span>
                  </NewsDate>
                </NewsItem>
              ))
            }
            <ModalLg
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              show={this.state.showModal}
              onHide={this.close}
              centered
            >
              <ModalLgHeader closeButton />
              <ModalLgBody>
                <ModalDate><span>{moment(newDetail.view_plan).format('YYYY-MM-DD h:mm')}</span></ModalDate>
                <ModalLgTitle>{newDetail.title}</ModalLgTitle>
              </ModalLgBody>

              {
                  newDetail.content_data
                    ? newDetail.content_data.map(item => (
                      <ModalLgBody key={item.id} className="main-body">
                        <TaCardTitle>{item.summary}</TaCardTitle>
                        <TaCardText>{item.content}</TaCardText>
                      </ModalLgBody>
                    ))
                    : ''
                }
            </ModalLg>
          </NewsGroup>
        </NewsBox>
      </Wrapper>
    );
  }
}

News.propTypes = {
};

News.defaultProps = {

};

export default News;
