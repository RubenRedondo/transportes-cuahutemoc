import {styled} from "styled-components";
import {colors} from "../../styles/colors.js";

export const LoginScreenStyled = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(213deg, #343434);
  background-size: 1000% 1000%;
  -webkit-animation: AnimationName 30s ease infinite alternate;
  -moz-animation: AnimationName 30s ease infinite alternate;
  -o-animation: AnimationName 30s ease infinite alternate;
  animation: AnimationName 30s ease infinite alternate;
  overflow: hidden;
  
  img {
    width: 200px;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  @-o-keyframes AnimationName {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  &:after {
    z-index: 1;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

`;

export const LoginCard = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 90%;
  max-width: 980px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  z-index: 2;

  .image-container {
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
    }

  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    
    input {
      border: 1px solid ${colors["light-gray"]};
      background-color: transparent;
      border-radius: 2px;
      color: #1a1a1a;
    }
    
  }

`;








