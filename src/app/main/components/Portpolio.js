'use clinet';
import { useState } from 'react';
import styled from "styled-components";
import Image from "next/image";
import classNames from 'classnames';

const Tab1Content = () => {
  return (
    <>
      <Image src="/images/photo.png" width={250} height={250} alt="사진1"/>
      <div>내용1</div>
    </>
  );
};

const Tab2Content = () => {
  return (
    <>
      <Image src="/images/photo.png" width={250} height={250} alt="사진2"/>
      <div>내용2</div>
    </>
  );
};
const Tab3Content = () => {
  return (
    <>
      <Image src="/images/photo.png" width={250} height={250} alt="사진3"/>
      <div>내용3</div>
    </>
  );
};
const items = {
  tab1 : {
    title: "포켓몬",
    Content: Tab1Content, 
  },
  tab2 : {
    title: "점메추",
    Content: Tab2Content, 
  },
  tab3 : {
    title: "상담관리",
    Content: Tab3Content, 
  },
}

const StyledTab = styled.div`
  padding-top: 50px;

  ul {
    display: flex;
    height: 50px;
    border-bottom: 2px solid #000;
    list-style-type: none;

    li {
      padding: 10px 20px;
      border: 1px solid #000;
      border-bottom: 0;
      font-size: 2rem;
      margin-right: 10px;
      cursor: pointer;

    }

    li.on {
      background: #000;
      color: #fff;
    }
  }
`;


const Portfolio = () => {
  const [item, setItem] = useState(items.tab1);

  const {title, Content} = item;

  const handleClick = (tab) => {
    setItem(tab);
  }

  return (
    <>
      <StyledTab>
      <h2>Portfolio</h2>
      <ul>
        <li onClick={() => handleClick(items.tab1)} className={classNames({on : items.tab1.title === item.title})}>포켓몬도감</li>
        <li onClick={() => handleClick(items.tab2)} className={classNames({on : items.tab2.title === item.title})}>점메추</li>
        <li onClick={() => handleClick(items.tab3)} className={classNames({on : items.tab3.title === item.title})}>상담관리</li>
      </ul>
      </StyledTab>
      <div>{title}</div>
      <Content/>
    </>
  );
};
export default Portfolio;