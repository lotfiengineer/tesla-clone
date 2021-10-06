import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { Button } from '@material-ui/core'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector(selectCars);

  return (
    <Container>
      <Button>
        <img src="/images/logo.svg" alt="" />
      </Button>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <Button key={index}>
              {car}
            </Button>
          ))}
      </Menu>

      <RightMenu>
        <Button>Shop</Button>
        <Button>Tesla Account</Button>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper onClick={() => setBurgerStatus(false)}>
          <CustomClose />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <Button>
                {car}
              </Button>
            </li>
          ))}
        <li>
          <Button>Existing Inventory</Button>
        </li>
        <li>
          <Button>Used Inventory</Button>
        </li>
        <li>
          <Button>Trade-in</Button>
        </li>
        <li>
          <Button>Cybertruck</Button>
        </li>
        <li>
          <Button>Roadaster</Button>
        </li>
        <li>
          <Button>Existing Inventory</Button>
        </li>
        <li>
          <Button>Existing Inventory</Button>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
  }

  @media (max-width: 810px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.25s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  text-align: right;
`;
