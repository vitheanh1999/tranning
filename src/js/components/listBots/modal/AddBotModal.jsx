/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../../services/api';
import {
  ModalCustom, ModalHeaderCustom, ModalBodyCustom,
  FormAdd, LabelAdd, BtnAddBot, SelectCustomCampaign,
} from '../../../containers/antTab/ANTStyle';

const customStyles = {
  menu: provided => ({
    ...provided,
    margin: 0,
    borderRadius: 0,
  }),
};

class AddBotModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: '',
        campaign_id: '',
        isError: false,
        errorMessage: '',
      },
      listCampaigns: [],
      selectedOption: null,
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.handleFetchListCampaigns();
  }

  handleFetchListCampaigns() {
    const paramsListCampaigns = {
      currentPage: '',
      perPage: '',
    };
    api.create().fetchListCampaigns(paramsListCampaigns).then((res) => {
      if (res.data) {
        let listCampaigns = [];
        const { code, data } = res.data;
        if (code === 200 && data) {
          listCampaigns = data.map(item => ({
            value: item._id,
            label: item.name,
          }));
          this.setState({ listCampaigns });
        }
      }
    });
  }

  handleChangeSelect(selectedOption) {
    const { values } = this.state;
    values.campaign_id = selectedOption.value;
    this.setState({
      values,
      selectedOption,
    });
  }

  handleChangeInput(event) {
    const { values } = this.state;
    values.name = event.target.value;
    this.setState({ values });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { handleCreateBot } = this.props;
    const { values } = this.state;
    const botInfos = [];
    botInfos.length = 0;
    botInfos.push(values);
    handleCreateBot(botInfos);
  }

  render() {
    const { isShowPopup, onCloseModal } = this.props;
    const { listCampaigns, selectedOption } = this.state;

    return (
      <ModalCustom
        isOpen={isShowPopup}
        toggle={onCloseModal}
      >
        <ModalHeaderCustom toggle={onCloseModal}>Add ANT</ModalHeaderCustom>
        <ModalBodyCustom>
          <FormAdd onSubmit={this.handleSubmit} className="d-flex flex-column align-items-end">
            <LabelAdd>
              ANT name
              <input type="text" value={this.state.values.name} onChange={this.handleChangeInput} />
            </LabelAdd>
            <LabelAdd>
              Campaign
              <SelectCustomCampaign
                autoFocus
                defaultValue={listCampaigns[0]}
                value={selectedOption}
                onChange={this.handleChangeSelect}
                // menuIsOpen
                classNamePrefix="select"
                options={listCampaigns}
                label="Single select"
                styles={customStyles}
              />
            </LabelAdd>
            <BtnAddBot type="submit"> Add ANT </BtnAddBot>
          </FormAdd>
        </ModalBodyCustom>
      </ModalCustom>
    );
  }
}
AddBotModal.propTypes = {
  isShowPopup: PropTypes.bool,
  onCloseModal: PropTypes.func,
  handleCreateBot: PropTypes.func,
};

AddBotModal.defaultProps = {
  isShowPopup: false,
  onCloseModal: () => {},
  handleCreateBot: () => {},
};

export default AddBotModal;
