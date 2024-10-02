'use client';
import { SectionsContainer, Section, Header } from "react-fullpage";
import { styled } from "styled-components";
import InfoAbout from "../components/InfoAbout";
import PortPolio from "../components/Portpolio";
import Experience from "../components/Experience";

const StyledNav = styled.nav`
  .menu {
    a {
      font-size: 1.75rem;
      padding: 0 50px;
      
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
    <SectionsContainer {...options}>
      <Section><InfoAbout/></Section>
      <Section><Experience/></Section>
      <Section><PortPolio/></Section>
    </SectionsContainer>
    </>
  );

};
export default MainContainer;