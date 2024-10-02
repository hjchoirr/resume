import styled from "styled-components";

const ProfileImage = ({className}) => {
  return (
  <div className={className}>
    <div className="tit">
     RESUME 
     <span>최이름</span>
    </div>
  </div>
  );
};

const StyledProfileImage = styled(ProfileImage)`
  background: #bcbcbc url('/images/photo.png') no-repeat calc(50% + 350px) bottom;
  height: 500px;
  border: 0 solid red;
  padding: 70px 30px 10px;
  position: relative;

  .tit {
    position: absolute;
    bottom: 10px;
    left: 50px;
    font-size: 2rem;

    span {
      padding: 20px;
      font-size: 1.5rem;
    }
  }
`;
export default StyledProfileImage;