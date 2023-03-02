import styled from 'styled-components';

export const ModalBackground = styled.div`
   width:100%;
   height:100%;
   background-color:#98a1bb;;
   position:fixed;
   display:flex;
   justify-content:center;
   align-items:center;
`;

export const ModalContainer = styled.div`
   width:500px;
   height:500px;
   border-radius:12px;
   background-color: white;
   box-shadow:rgba(0,0,0,35) 0px 5px 15px;
   display:flex;
   flex-direction:column;
   padding:25px 
`;

export const Title = styled.div`
    display:inline-block;
    text-align:center;
    margin-top:10px;
`