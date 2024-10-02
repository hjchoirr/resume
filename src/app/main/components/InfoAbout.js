'use client';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';
import Item from './Item';
const StyledItems = styled.div`

  display: flex;
  margin-top: 20px;

  .item {
    flex-grow: 1;
    margin: 20px 0;
  }

`;

const InfoAbout = () => {
  return (
    <>
    <ProfileImage />
    <StyledItems>
      <Item title="Info" className="item"/>
      <Item title="About" className="item"/>
    </StyledItems>
    </>
  );
};
export default InfoAbout;