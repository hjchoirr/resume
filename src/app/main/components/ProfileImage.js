import styled from "styled-components";

const ProfileImage = ({className}) => {
  return (
  <div className={className}>
    
  </div>
  );
};

const StyledProfileImage = styled(ProfileImage)`
  background: #bcbcbc url('/images/photo.png') no-repeat calc(50% + 350px) bottom;
  height: 450px;
  border: 1px solid red;
  padding: 50px 30px 10px;
  position: relative;
`;
export default StyledProfileImage;