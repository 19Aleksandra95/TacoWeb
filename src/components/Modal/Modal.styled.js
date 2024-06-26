import styled from "styled-components";

export const StyledModal = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgb(0,0,0,0.5);

&:hover {
    cursor: pointer;
}

.modal {
max-width: 450px;
width: 100%;
min-height: 450px;
background-color: white;
border-radius: 5px ;
padding: 15px;

&:hover {
    cursor: auto;
}
/* Tworzymy styl dla wyśrodkowania na stronie */
position: absolute;
left:50%;
top:50%;
transform: translate(-50%, -50%);
}
.closeBtn {
position: absolute;
top: 15px;
right: 15px;
}
`