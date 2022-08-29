import React from "react";
import styles from './Button.module.css';
//css모듈 사용하는 import ./Button.css를  ./Button.module.css로 바꿔줘야함. 컴파일 하라고 힌트주는 것인듯
//고유한 버전의 스타일과 클래스를 생성해준다.  다른 곳이랑 겹칠 일이 없는 css 모듈
//css로 따로 관리할 수 있지만 사용하는 컴포넌트에 한정시켜 사용 할 수 있게 하는 역할

// import styled from "styled-components";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

// @media (min-width: 768px) {
//   width: auto;
// }

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// `;

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
