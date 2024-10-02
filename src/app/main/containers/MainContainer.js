'use client';
import { SectionsContainer, Section, Header, ScrollToTopOnMount } from "react-fullpage";
import { styled } from "styled-components";
import InfoAbout from "../components/InfoAbout";
import PortPolio from "../components/Portpolio";
import Experience from "../components/Experience";

const StyledNav = styled.nav`
  background: #fff;
  line-height: 50px;
  border-bottom: 1px solid #000;
  .menu {
    a {
      font-size: 1.75rem;
      padding: 0 30px;
    }
  }
`;
const options = {
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
}
const MainContainer = () => {

  return (
    <>
    <Header>
      <StyledNav>
        <div className="menu">
        <a href="#sectionOne" >INFO & ABOUT</a>
        <a href="#sectionTwo">EXPERIENCE</a>
        <a href="#sectionThree">PORTPOLIO</a>
        </div>
      </StyledNav>
    </Header>
    <ScrollToTopOnMount />
    <SectionsContainer {...options}>
      <Section><InfoAbout/></Section>
      <Section><Experience/></Section>
      <Section><PortPolio/></Section>
    </SectionsContainer>
    </>
  );

};
export default MainContainer;