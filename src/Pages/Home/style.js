import styled from 'styled-components'


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export  const IframeContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 35px );
  
`

export const Iframe1 =styled.iframe`
  width: ${({width})=> `${width}%`};
  height: 100%;
`

export const Iframe2 =styled.iframe`
  width: ${({width})=> `${width}%`};
  height: 100%;
`