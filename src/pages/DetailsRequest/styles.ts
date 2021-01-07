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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  background: #fff;
  margin: 0 auto;
  padding: 1em;

  .title {
    h1 {
      color: #e57373;
      padding: 1em;
      margin-left: auto;
      border-bottom: 1px solid #e57373;
    }
  }

  .myItens {
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    width: 800px;

    @media (max-width: 1000px) {
      width: 430px;
    }

    .item {
      border-bottom: 1px solid #bdbdbd;

      > ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;

        > li {
          > img {
            height: 60px;
            width: 60px;
          }

          > span {
            color: #e57373;

            @media (max-width: 1000px) {
              font-size: 12px;
            }
          }
        }
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
