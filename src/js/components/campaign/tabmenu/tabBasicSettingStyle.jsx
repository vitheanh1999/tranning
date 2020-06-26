import styled from 'styled-components';

export const TitleGroup = styled.span`
    margin-left:1em;
    font-weight:bold;
    width:${props => (props.width ? `${props.width}em` : 'unset')}
`;
export const Input = styled.input`
    disabled:${props => (props.disabled ? 'disable' : '')};
    border: none;
    min-height: 1.4em;
    height: 2.38em;
    padding: 0.278em;
    border-radius: 0.278em;

`;
export const TitleField = styled.span`
    margin-left:2em;
    width:${props => (props.width ? `${props.width}em` : 'unset')}
`;

export const Blank = styled.div`
    height: ${props => props.height}em;
`;
export const Wrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #808080ab;
    display: flex;
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;
export const HelpWrapper = styled.div`
    width:60%;
`;
export const IconHelp = styled.img`
  width: 1em;
  margin-left: 0.5em;
  cursor: pointer;
`;
