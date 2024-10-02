import styled from "styled-components";

const StyledItem = styled.div`

 
    display: flex;
    height: 20px;
    width: 100%;
    align-items: center;
    margin: 0 20px 20px 0;

    .tit {
      font-size: 1.5rem;
      margin-right: 10px;
      width: auto;

    }
    .bar {
      flex-grow: 1;
      height: 2px;
      background: #bcbcbc;
    }
`;
const Item = ({title}) => {
  return (
    <StyledItem>
    
      <div className="tit">{title}</div>
      <div className="bar"></div>
    </StyledItem>
  );
};
export default Item;