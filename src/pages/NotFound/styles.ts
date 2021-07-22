import styled from 'styled-components';

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media(max-width: 1200px) {
    flex-direction: column;
  }
`;

export const NotFoundInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  img {
    height: 750px;
    width: 500px;
  }

  @media(max-width: 1200px) {
    flex-direction: column;

    img {
      height: 500px;
    }
  }

  @media(max-width: 600px) {
    img {
        height: 400px;
        width: 300px;
    }
  }
`;

export const NotFoundText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 50px;

  h1 {
    font-family: var(--font);
    font-size: 50px;
    font-weight: 600;
  }

  p {
    font-family: var(--font);
    font-size: 28px;
    font-weight: 500;
  }

  @media(max-width: 600px) {
    margin: 0;

    h1 {
      text-align: center;
      font-size: 40px;
    }

    p {
      text-align: center;
      font-size: 25px;
    }
  }
`;
