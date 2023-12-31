import styled from "styled-components";
// import Bg from './Images/bg.jpg'

export const Main = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(110deg, #007842 55%, #1b316a 50%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: 11;
  /* position: absolute; */
`;
export const LogoCont = styled.div`
  width: 48%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AppName = styled.h5`
  width: 85%;
  // padding-top: 10px;
  height: 6vh;
  color: #f3f3f3;
  font-family: corbel light;
  font-style: bolder;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 68%;
`;
export const FormCont = styled.form`
  width: 48%;
  display: flex;
  padding-bottom: 15px;
  margin-bottom: 20px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border: 10px solid #444;
  // background-color: #1e1f24;
  background: linear-gradient(110deg, #1b316a 55%, #007842 50%);

  border-radius: 15px;

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 320px) {
    width: 95%;
  }
`;

export const FormHead = styled.h5`
  width: 85%;
  height: 8vh;
  padding-top: 30px;
  color: #fff;
  font-family: corbel light;
  font-weight: 900;
  font-size: 37px;
  margin: 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBody = styled.div`
  width: 95%;
  min-height: 40vh;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const Em = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const SvgStyle = {
  height: "80%",
  width: "10%",
  color: "#e98337",
};

export const FormInputDiv = styled.div`
  width: 40%;
  height: 5vh;
  margin: 6px 15px;
  padding: 2px 0 2px 8px;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #5e2900;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 320px) {
    width: 90%;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  height: 100%;
  text-align: center;
  transition: all ease-in-out 0.3s;
  color: #dadee3;
  background: transparent !important;

  &:focus {
    width: 80%;
    outline: none;
    text-align: start;
    transition: all ease-in-out 0.3s;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  border: none;
  background: transparent;
  height: 100%;
  text-align: center;
  transition: all ease-in-out 0.3s;
  color: #677568;

  &:focus {
    width: 80%;
    outline: none;
    // padding: 0px 5px;
    text-align: start;
    transition: all ease-in-out 0.3s;
  }
`;

export const FormOption = styled.option`
  background: #1e1f24;
  border-radius: 5px;
  color: #e98337;

  &:focus {
    width: 80%;
    outline: none;
    // padding: 0px 5px;
    text-align: start;
    transition: all ease-in-out 0.3s;
  }
`;

export const FormButton = styled.button`
  width: 50%;
  height: 6vh;
  border-radius: 8px;
  border: none;
  background: #e98337;
  color: #fff;
  font-family: corbel light;
  font-weight: 500;
  font-size: 17px;
  transition: 0.3s all ease-in-out;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 320px) {
    width: 90%;
  }
  &:hover {
    width: 52%;
    color: #fff;
    background: #f17b21;
    transition: 0.3s all ease-in-out;
    font-weight: 700;
    border: 1px solid #00a99e;
    box-shadow: 0px 2px 11px 0px #326867;
  }
`;

export const SwitchCont = styled.div`
  width: 55%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwitchPara = styled.p`
  color: #fff;
  font-size: 15px;
  font-family: corbel light;
  font-weight: 600;
`;

export const SwitchSpan = styled.span`
  text-decoration: underline;
  color: #096ddf;
  font-weight: bold;
`;
export const TermsConCont = styled.div`
  width: 48%;
  margin-bottom: 40px;
  background-color: #1e1f24;
  border-radius: 12px;
  padding: 10px;

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 320px) {
    width: 95%;
  }
`;
