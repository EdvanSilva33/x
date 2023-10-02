import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;

  }
body{
  padding-bottom:120px;
}

`
export default Global

export const Container = styled.div`
  list-style: none;
  position: relative;
  color: ${(props) => props.theme.colors.corTitulo};
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    max-width: 80%;
  }
`
export const Box = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
