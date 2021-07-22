import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--dark-gray);
  max-width: 1024px;
  width: 100%;
  height: 836px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SearchText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 708px;
  width: 100%;
  margin-top: 72px;

  h1 {
    font-family: var(--font);
    font-size: 50px;
    color: var(--white);
    margin-bottom: 10px;
    text-align: left;
  }

  p {
    font-family: var(--font);
    font-size: 30px;
    color: var(--white);
    text-align: left;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 836px;
  background-color: var(--white);

  h1 {
    max-width: 615px;
    width: 100%;
    font-family: var(--font);
    font-size: 40px;
    color: var(--black);
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 28px;
    }
  }
`;

export const SearchLabel = styled.label`
  margin-top: 53px;
  margin-bottom: 18px;
  max-width: 615px;
  width: 100%;
  font-family: var(--font);
  font-size: 25px;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 615px;
  width: 100%;
  height: 80px;
  padding-left: 32px;
  border-radius: 10px;
  border: 3px solid ${props => props.theme.borderColor};
  font-family: var(--font);
  font-size: 20px;
  outline: none;

  &:focus {
    border: 4px solid ${props => props.theme.borderColor};
  }

  @media (max-width: 600px) {
    font-size: 16px;
    height: 70px;
    border-radius: 0;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-gray);
  max-width: 615px;
  width: 100%;
  height: 80px;
  font-family: var(--font);
  font-size: 30px;
  font-weight: 600;
  color: var(--white);
  border: none;
  border-radius: 10px;
  margin-top: 34px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--light-gray);
  }

  &:focus {
    border: 6px solid var(--gray);
  }

  @media (max-width: 600px) {
    font-size: 25px;
    height: 70px;
    border-radius: 0;
  }
`;

export const WarnMessage = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  max-width: 615px;
  width: 100%;
  font-family: var(--font);
  font-size: 22px;
  font-weight: 500;
  color: var(--red);
  margin-top: 13px;

  svg {
    margin-right: 13px;
  }
`;
