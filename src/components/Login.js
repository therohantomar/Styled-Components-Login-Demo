import React from "react";
import { LoginContainer } from "./styledcomponents/DivComponents";
import {
  Button,
  Input,
  InputContainer,
  Para,
  PasswordDiv,
  SignupButton,
} from "./styledcomponents/formComponents";
import {
  AiFillGoogleCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { H1 } from "./styledcomponents/formComponents";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPassVisible, setIsPassVisible] = React.useState(false);


  return (
    <LoginContainer
      onSubmit={() => alert(email+"sucessfully logged in")}>
      <H1>SignIn</H1>
      <InputContainer>
        <Input
          type="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Your Email here..."
          required
        />
      </InputContainer>
      <PasswordDiv>
        <InputContainer>
          <Input
            type={isPassVisible ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password here..."
            required
          />
          {!isPassVisible ? (
            <AiFillEye
              style={{
                color: "#FC6C85",
                fontSize: "1.3rem",
                position: "absolute",
                right: 10,
                top: 12,
                cursor: "pointer",
              }}
              onClick={() => setIsPassVisible((prev) => !prev)}
            />
          ) : (
            <AiFillEyeInvisible
              style={{
                color: "#FC6C85",
                fontSize: "1.3rem",
                position: "absolute",
                right: 10,
                top: 12,
                cursor: "pointer",
              }}
              onClick={() => {
                setIsPassVisible((prev) => !prev);
              }}
            />
          )}
        </InputContainer>
        <Para>forget password ?</Para>
      </PasswordDiv>
      <span>
        <Button>Signin</Button>
        <Para style={{ display: "flex" }}>
          don't have account ?{" "}
          <SignupButton onClick={(e) => e.preventDefault()}>
            SignUP
          </SignupButton>
        </Para>
      </span>
      <Para>Or</Para>
      <span>
        <AiFillGoogleCircle
          style={{ fontSize: "2rem", color: "#FC6C85", cursor: "pointer" }}
        />{" "}
        <BiLogoFacebookCircle
          style={{ fontSize: "2rem", color: "#FC6C85", cursor: "pointer" }}
        />
        <AiFillGithub
          style={{ fontSize: "2rem", color: "#FC6C85", cursor: "pointer" }}
        />
      </span>
    </LoginContainer>
  );
};

export default Login;
