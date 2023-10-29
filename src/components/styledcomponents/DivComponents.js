import styled from "styled-components";



export const LoginContainer=styled.form`
width:40vw;
background:white;
box-shadow:5px 5px 10px pink;
display:flex;
align-items:center;
padding:1rem;
flex-direction:column;
justify-content:center;
border-radius:20px;


@media (max-width:700px){
    width:90vw;
}

`


export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: #e7dada;
`;


