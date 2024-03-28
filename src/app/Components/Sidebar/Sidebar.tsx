"use client"
import React from 'react'
import styled from 'styled-components';
import { useGlobalState} from '@/app/context/GlobalProvider';
import Image from 'next/image';
import avatar from '@/../public/me.png';

function Sidebar() {

  const { theme } = useGlobalState();

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay">
          <Image width={70} height={70} src={avatar} alt='' />
        </div>
      </div>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
`;

export default Sidebar