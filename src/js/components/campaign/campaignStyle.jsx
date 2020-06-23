import styled from 'styled-components';


export const Title = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;
export const Row = styled.div`
  display: flex;
`;
export const FieldText = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.5em;
`;

export const FieldTitle = styled(FieldText)`
  font-weight: bold;
  margin-left: 0;
`;
export const ButtonAction = styled.div`
  cursor: pointer;
  width: ${props => props.width && props.width}em;
  height: ${props => props.height && props.height}em;
  font-size: ${props => props.fontSize && props.fontSize};
  margin: ${props => props.margin && props.margin};
  padding: ${props => props.padding && props.padding};
  background-color: ${props => (props.color && props.color)};
  border-radius: ${props => (props.borderRadiusor ? props.borderRadiusor : 0.3)}em;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > img {
    width: 1em;
  }

  &: hover {
    background-color: ${props => props.hoverBgColor && props.hoverBgColor};
  }
`;

export const Image = styled.img`
  margin-left: 0.25em;
`;

export const ButtonAddCampaign = styled.div`
    padding: 1em;
    align-items: center;
    cursor: pointer;
    height: 1.7em;
    background-color: #2d889c;
    justify-content: center;
    display: flex;
    border-radius: 0.3em;
    color: #fff;
    font-weight: 600;
    &:hover{
        background-color: #20bcdf;
    }
`;

export const IconAdd = styled.img`
  width: 1em;
  margin-right: 0.5em;
`;