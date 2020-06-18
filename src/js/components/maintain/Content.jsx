import React from 'react';
import PropType from 'prop-types';
import {
  BoxContent, Logo, Title, MainTainContent, Date, Time, DateLabel, Img,
} from '../../containers/maintain/maintainStyle';

const dateTitle = '終了予定 : ';
function Content(props) {
  const {
    logo, title, content, date,
  } = props;
  return (
    <BoxContent>
      <Logo>
        <Img src={logo} alt="" />
      </Logo>
      <Title>{title}</Title>

      <MainTainContent>{content}</MainTainContent>

      <Date>
        <DateLabel>{dateTitle}</DateLabel>
        <Time>{date}</Time>
      </Date>
    </BoxContent>
  );
}

Content.propTypes = {
  logo: PropType.string,
  title: PropType.string.isRequired,
  content: PropType.string.isRequired,
  date: PropType.string.isRequired,
};

Content.defaultProps = {
  logo: '',

};
export default Content;
