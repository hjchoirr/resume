import Item from './Item';
import styled from 'styled-components';
const StyledItems = styled.div`

  display: flex;
  padding-top: 65px;

  .item {
    flex-grow: 1;
    margin: 20px 0;
  }
    
`;

const Experience = () => {
  return (
    <>
    <StyledItems>
      <Item title="EDUCATION" className="item"/>
      <Item title="WORK EXPERIENCE"/>
    </StyledItems>
    <StyledItems>
      <Item title="CERTIFICATES"/>
      <Item title="SKILL"/>
    </StyledItems>
    </>
  );

};
export default Experience;