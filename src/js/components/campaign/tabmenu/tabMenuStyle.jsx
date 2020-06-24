import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 2.5em;
  border-bottom: 1px solid #808080ab;
  display: flex;
  flex-direction: row;
`;

export const TabButton = styled.div`
    cursor: pointer;
    padding-left: 1em;
    padding-right: 1em;
    width: 8em;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #fcfcfc;
    font-weight: 700;
    border-bottom: 2px #2d889c;
    border-right: 1px #80808087;
    text-transform: capitalize;
    background-color: ${props => (props.selected ? '#000000e6' : '#333333')};
`
