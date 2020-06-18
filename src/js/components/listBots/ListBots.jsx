import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styled from 'styled-components';
import images from '../../../assets/images';
import {
  WrapperSortBy, BoxSortBy, LabelSortBy,
  AreaBot,
} from '../../containers/antTab/ANTStyle';

const optionsSortBy = [
  { value: 'statusOnOff', label: 'Status(On - Off)' },
  { value: 'campaign', label: 'Campaign' },
  { value: 'gcHightLow', label: 'GC(Hight-Low)' },
  { value: 'gcLowHight', label: 'GC(Low-Hight)' },
];

const SelectCustom = styled(Select)`
  color: #000;
  width: 11em;
  margin-left: 1em;

  .select__control {
    .select__dropdown-indicator {
      svg {
        display: none;
      }

      &::before {
        content: '';
        background: url(${images.iconDropDown.iconOpenDropDown}) center center no-repeat;
        display: block;
        width: 1em;
        margin-right: 0.3em;
        height: 1em;
        background-size: 100%;
      }
    }

    &.select__control--menu-is-open .select__dropdown-indicator::before {
      background-image: url(${images.iconDropDown.iconCloseDropDown});
    }
  }

  .select__option:not(:last-child) {
    border-bottom: 1px solid #c6c6c6;
  }
`;
const customStyles = {
  menu: provided => ({
    ...provided,
    margin: 0,
    borderRadius: 0,
  }),
};

function ListBots(props) {
  const {
    children, onChangeSoftBy,
  } = props;
  return (
    <React.Fragment>
      <WrapperSortBy className="d-flex justify-content-end align-items-center">
        <BoxSortBy className="d-flex justify-content-end align-items-center">
          <LabelSortBy> Sort By </LabelSortBy>
          <SelectCustom
            autoFocus
            defaultValue={optionsSortBy[0]}
            // menuIsOpen
            onChange={onChangeSoftBy}
            classNamePrefix="select"
            options={optionsSortBy}
            styles={customStyles}
          />
        </BoxSortBy>
      </WrapperSortBy>
      <AreaBot>
        {children}
      </AreaBot>
    </React.Fragment>
  );
}

ListBots.propTypes = {
  children: PropTypes.array,
  onChangeSoftBy: PropTypes.func,
};

ListBots.defaultProps = {
  children: null,
  onChangeSoftBy: () => {},
};

export default ListBots;
