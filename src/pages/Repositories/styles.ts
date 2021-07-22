import styled, { keyframes } from 'styled-components';

export const ReposContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Repos = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 1622px;
  width: 100%;
  height: 491px;
  margin-bottom: 25px;
  color: var(--white);
  background: var(--dark-gray);
  font-family: var(--font);
  padding: 35px;
  border-radius: 15px;

  h1 {
    font-size: 45px;
  }

  h2 {
    font-size: 35px;
    margin-top: 44px;
    margin-bottom: 21px;
  }

  p {
    font-size: 25px;
  }

  @media (max-width: 1200px) {
    border-radius: 0;

    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const KnowMore = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--green);
  max-width: 250px;
  width: 100%;
  height: 80px;
  font-family: var(--font);
  font-size: 22px;
  text-decoration: none;
  color: var(--white);
  border-radius: 10px;
  margin-top: 28px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--dark-green);
  }

  @media (max-width: 1200px) {
    width: 75%;
    height: 70px;
    font-size: 18px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 40px;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 40px;

  h1 {
    font-family: var(--font);
    font-size: 65px;
  }

  strong, p {
    font-family: var(--font);
    font-size: 25px;
    margin: 10px 0;
  }

  @media (max-width: 1200px) {
    align-items: center;
    margin: 0;

    h1 {
      font-size: 35px;
    }

    strong, p {
      font-size: 20px;
      margin: 10px 0;
    } 
  }
`;

export const ProfilePhoto = styled.img`
  border-radius: 100%;
  height: 370px;
  width: 370px;

  @media (max-width: 1200px) {
    height: 250px;
    width: 250px;
  }
`;

export const SeeGitHub = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-gray);
  color: var(--white);
  font-family: var(--font);
  font-size: 20px;
  text-decoration: none;
  max-width: 250px;
  width: 100%;
  height: 65px;
  border-radius: 10px;
  font-weight: 600;
`;

export const SearchReposForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin: 100px 0;
`;

export const SearchRepos = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font);
  font-size: 20px;
  max-width: 1478px;
  width: 100%;
  height: 90px;
  padding-left: 25px;
  border: 1px solid ${props => props.theme.borderColor};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 1200px) {
    height: 65px;
    font-size: 15px;
    border-radius: 0;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 144px;
  width: 100%;
  height: 90px;
  background-color: var(--dark-gray);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray);
  }

  @media (max-width: 1200px) {
    height: 65px;
    border-radius: 0;

    svg {
      height: 45px;
      width: 45px;
    }
  }
`;

export const WarningMessage = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    p {
        font-family: var(--font);
        font-size: 30px;
        font-weight: 600;
        color: var(--second-gray);
        margin-left: 20px;
    }

    @media (max-width: 1200px) {
      p {
        font-size: 18px;
        margin-left: 10px;
      }

      svg {
        height: 30px;
        width: 30px;
      }
    }
`;

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 75px;
  border: none;
  border-radius: 100px;
  margin: 10px;
  outline: none;
  background: none;
  transition: 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

export const anim1 = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  p {
    font-family: var(--font);
    font-size: 25px;
    margin-left: 15px;
  }
`;

export const Loading = styled.div`
  border: 6px solid var(--tertiary-gray);
  border-top-color: var(--dark-gray);
  border-radius: 100%;
  height: 40px;
  width: 40px;
  animation: ${anim1} 1s infinite;
`;

