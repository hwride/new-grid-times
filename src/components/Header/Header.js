import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <DesktopSuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <MainHeader>
            <Logo />
          </MainHeader>
          <ActionGroup>
            <UserButton>
              <User size={24} />
            </UserButton>
          </ActionGroup>
          <DesktopActions>
            <Button>Subscribe</Button>
            <SubscribeLink href='#'>Already a subscriber?</SubscribeLink>
          </DesktopActions>
        </Row>
      </DesktopSuperHeader>

      <MobileSuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <UserButton>
              <User size={24} />
            </UserButton>
          </ActionGroup>
        </Row>
      </MobileSuperHeader>
      <MobileMainHeader>
        <Logo />
      </MobileMainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const DesktopSuperHeader = styled(SuperHeader)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: block;
    background: none;
    color: var(--color-gray-900);
  }
`;

const MobileSuperHeader = styled(SuperHeader)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const MobileMainHeader = styled(MainHeader)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const UserButton = styled.button`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const SubscribeLink = styled.a`
  font-style: italic;
  text-decoration: underline;
`;

const DesktopActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export default Header;
