import styled from 'styled-components';

export const MainContainer = styled.div`
    width:100%;
    height:100%;
    background-color:#98a1bb;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const ListItem = styled.div`
 width: 80%;
  display:inline-flex;
   padding: "10px";
   border-radius:2px;
   text-align:center;
`;

export const DetailItem = styled.div`
    padding:10px;
    border-right: solid .5px #363736;
    border:solid .5px #363736;
    border-radius:2px;
    min-width:13rem;
    height:3rem;
    word-wrap:break-word;
    text-size-adjust:auto;
    text-align:center;
    align-items:center;
`;

export const EditButton = styled.button`
border:2px solid #4caf50;
background-color: #4caf50;
color: white;
padding:3px 6px;
text-align:center;
text-decoration: none;
display: inline-block;
font-size:16px;
cursor:pointer;
transition:0.5s all ease-out;
`;

export const DeleteButton = styled.button`
border:2px solid #af4c4f;
background-color: #af4c4f;
color: white;
padding:3px 6px;
text-align:center;
text-decoration: none;
display: inline-block;
font-size:16px;
cursor:pointer;
transition:0.5s all ease-out;
`;

export const ButtonWrapper = styled.span`
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
`
