import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: rgb(118 46 177 / 73%);
  border-bottom: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Container = styled.div`
  width: 1230px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding-left: 15px;
  padding-right: 15px;
  // border: 1px solid black;
`;

export const Main = styled.main`
  // background-color: rgb(118 46 177 / 18%);
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddBtn = styled.button`
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 10px 30px;
  position: relative;
  border: 2px solid #63009c;
  color: #63009c;
  font-family: 'Montserrat', sans-serif;
  transition: 0.4s;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
  }
  &:hover:after {
    border-color: #63009c;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }
`;
