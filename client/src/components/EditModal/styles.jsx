import styled from 'styled-components';

export const ModalBackground = styled.div`
   width:100%;
   height:100%;
   background-color:#98a1bb;;
   position:fixed;
   display:flex;
   justify-content:center;
   align-items:center;
   z-index:2;
`;

export const ModalInfoRow = styled.div`
   height:10%;
   width:100%;
   padding-bottom:30px;
   left:0;
   display:flex;
   flex-direction:row;
   position:relative;
   justify-content:center;
   align-items:center;
`;

export const InfoLabel = styled.label`
   width: 40%;
   position:relative;
   color:black;
   left:5px;
`

export const TextInput = styled.text`
   
`
export const ModalContainer = styled.div`
   width:500px;
   height:500px;
   border-radius:12px;
   background-color: #616161;
   box-shadow:rgba(0,0,0,35) 0px 5px 15px;
   display:flex;
   flex-direction:column;
   padding:25px 
`;

export const Title = styled.div`
    display:inline-block;
    text-align:center;
    margin-top:10px;
    color:black;
`