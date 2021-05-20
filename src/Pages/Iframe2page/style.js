import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:${({color}=false) => color? `#${color}` : '#61dafb'};
  display:flex;
  flex-direction: column;
  
`

export const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`