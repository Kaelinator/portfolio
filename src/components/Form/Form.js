import styled from 'styled-components';

export const Form = styled.form`
  font-family: arial;
  font-size: 1.5em;
  text-align: center;
  display: grid;
  grid-gap: 10px;
  color: #1F1F20;
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Submit = styled.input`
  margin: 5px;
  border: none;
  font-family: inherit;
  font-size: inherit;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.4);
  background-color: white;
  padding: 5px;
  cursor: pointer;

  &.primary {
    background-color: #1cd45e;
    color: white;
  }

  &.danger {
    background-color: #fc4447;
    color: white;
  }
`;

export const Text = styled.input`
  margin: 5px;
  border: none;
  font-family: inherit;
  font-size: inherit;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.4);
  padding: 5px;
`;

export const Color = styled.input`
  margin: 5px;
  border: none;
  font-family: inherit;
  font-size: inherit;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.4);
  padding: 5px;
  cursor: pointer;
`;

export const Label = styled.label`
  margin: 5px;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
