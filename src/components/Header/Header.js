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
        <DesktopRow>
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
          <EndDesktopActions>
            <DesktopActions>
              <SubscribeButton>Subscribe</SubscribeButton>
              <SubscribeLink href='#'>Already a subscriber?</SubscribeLink>
            </DesktopActions>
          </EndDesktopActions>
        </DesktopRow>
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
            <button>
              <User size={24} />
            </button>
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
    margin-bottom: 67px;
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

const DesktopRow = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
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
`;

const MobileMainHeader = styled(MainHeader)`
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const EndDesktopActions = styled.div`
  justify-self: end;
`;

const DesktopActions = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  gap: 8px;
`;

const SubscribeButton = styled(Button)`
  grid-row: 2;
`

const SubscribeLink = styled.a`
  font-style: italic;
  text-decoration: underline;
  grid-row: 3;
  align-self: start;
`;

export default Header;
