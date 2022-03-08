import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const Container = styled.div`
  // min-height: 692px;
  // position: fixed;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // top: 0;
  // z-index: 0;
  // overflow: hidden;
  // background: linear-gradient(
  //   108deg,
  //   rgba(1, 147, 86, 1) 0%,
  //   rgba(10, 201, 122, 1) 100%
  // );
  min-height: 100vh;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;
export const FormWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  // @media screen and (max-width: 480px) {
  //   height: 80%;
  // }
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  background-color: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 20px;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 3%;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 5%;
  margin-bottom: 7%;
  border-radius: 4px;
`;
export const FormTextaria = styled.textarea`
  padding: 5%;
  margin-bottom: 7%;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  background: var(--primary-color);
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
export const CloseIconLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 26px;
  position: absolute;
  top: 14px;
  right: 20px;
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
