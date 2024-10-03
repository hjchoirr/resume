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
    max-width: 1100px;
    margin: 0 auto;
    
    a {
      font-size: 1.75rem;
      padding: 0 30px;
    }

  }
`;

const StyledSections = styled.div`
    max-width: 1200px;
    margin: 0 auto;
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
    <SectionsContainer {...options}>
      <StyledSections>
        <Section><InfoAbout/></Section>
        <Section><Experience/></Section>
        <Section><PortPolio/></Section>
      </StyledSections>
    </SectionsContainer>
    </>
  );

};
export default MainContainer;