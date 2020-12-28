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
  min-height: 800px;
  max-height: 1500px;
  background: #fff;
  margin: 0 auto;
  padding: 0 250px;
  border-bottom: 1px solid #bdbdbd;



  @media (max-width: 1700px) {
    padding: 0 10px;
  }

  .cart {



    h1 {
    color: #e57373;
    border-bottom: 1px solid #000;
  }

    .itens {
      margin-top: 50px;

     > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 60px;
}

        img {
          height: 70px;
          width: 70px;
        }

        h3,
        h4,
        span {
          color: #e57373;
        }
      }
    }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto;

      h3, h4 {
        color: #e57373;
        padding-top: 10px;
      }

      button {
        width: 150px;
        height: 50px;
        border: 0;
        border-radius: 9px;
        background: #e57373;
        color: #fff;
        margin-top: 20px;
      }
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
