import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fce4ec;
  width: 100%;
  height: 50px;

  > h2 {
    font-family: 'Dancing Script', cursive;
    font-weight: 600;
    color: #e57373;
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
  height: 200px;

  > img {
    height: 100px;
    width: 100px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: #fff;

  .itens {
    margin: 0 auto;

    > ul {
      display: flex;
      align-items: center;
      list-style: none;

      > li {
        margin: 10px;
        transition: 0.5s;

        &:hover {
          opacity: 0.7;
        }

        > a {
          text-decoration: none;
          color: #e57373;
        }
      }
    }
  }

  div.menu {
    margin: 0 auto;

    > ul {
      display: flex;
      align-items: center;
      list-style: none;

      > li {
        margin: 10px;
        transition: 0.5s;

        &:hover {
          opacity: 0.7;
        }

        > a {
          text-decoration: none;
          color: #e57373;

          > svg {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
  }
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 800px;
  background: #fff;
  margin: 0 auto;
  padding: 0 250px;
  border-bottom: 1px solid #bdbdbd;

  @media (max-width: 1700px) {
    padding: 0 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin: 100px auto;
  }

  span {
    color: #e57373;
  }

  img {
    height: max(200px, min(550px, 40vw));
    width: max(200px, min(550px, 40vw));
    border-radius: 20px;
    transition: 0.5s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Section2 = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;

  img {
    height: max(200px, min(400px, 40vw));
    width: max(200px, min(400px, 40vw));
    border-radius: 20px;
    transition: 0.5s;

    &:hover {
      opacity: 0.7;
    }
  }

  > .box {
    display: flex;
    align-items: center;
    width: 50%;
    height: 100px;
    background: #e57373;
    border-radius: 0 0 20px;

    span {
      font-family: 'Dancing Script', cursive;
      font-weight: 600;
      font-size: 20px;
      margin-left: 10px;

      justify-content: center;
    }
  }
`;

export const Section3 = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  background: #fff;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      font-family: 'Dancing Script', cursive;
      font-weight: 600;
      color: #e57373;
      margin-top: 100px;
    }

    h2 {
      color: #e57373;
      margin-top: 10px;
    }
  }
`;

export const Itens = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 500px;
  width: 100%;
  background: #fff;
  padding: 0 300px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 400px;
    width: 250px;
    margin: 0 auto;

    img {
      height: max(100px, min(300, 15vw));
      width: max(100px, min(250px, 15vw));
      margin-top: 10px;
      transition: 0.5s;

      &:hover {
        opacity: 0.7;
      }
    }

    a {
      color: #e57373;
      text-decoration: none;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e57373;
  width: 100%;
  height: 200px;

  div.payment {
    margin: 10px;
    ul {
      list-style: none;

      li {
        display: inline-block;
        padding: 5px;
      }
    }
  }

  .socialNetwork {
    ul {
      list-style: none;

      li {
        display: inline-block;
        padding: 5px;
      }

      a {
        color: #fff;
      }

      svg {
        height: 30px;
        width: 30px;
      }
    }
  }

  .questions {
    margin: 10px;
    ul {
      list-style: none;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;
