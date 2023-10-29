import styled from "styled-components";


export const InputContainer=styled.div`
display:flex;
border:2px solid #FC6C85;
border-radius:10px;
height:max-content;
position:relative;
margin-top:2rem;
`

export const Input=styled.input`
width:20vw;
border-radius:1rem;
border:none;
padding:1em;
font-Size:1rem;
color:#FC6C85;
outline:none;

@media (max-width:700px){
    width:70vw;
}
 ,`

export const Button=styled.button`
width:20vw;
border:4px solid black;
color:white;
font-weight:bolder;
border-radius:1rem;
padding:1em;
border:1px solid pink;
background: #FC6C85;
font-size:1rem;
cursor:pointer;
&:hover{
    background:#FC8C85;
}
@media (max-width:700px){
    width:70vw;
}
`

export const Para=styled.p`
color:#FC8C85;
cursor:pointer;
`

export const H1=styled.h1`
color:#FC5C85;
font-weight:bolder;`

export const PasswordDiv=styled.div`
display:flex;
flex-direction:column;
margin:0;`

export const SignupButton=styled.button`
background:transparent;
color:#FC5C85;
cursor:pointer;
box-shadow:none;
outline:none;
border:none;`