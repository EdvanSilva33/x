import styled from 'styled-components'

const BlocoPrincipal = styled.li`
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secundaria};
  color: ${(props) => props.theme.colors.primary};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secundaria};
    font-size: 14px;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secundaria};
  }
  :hover a {
    border-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secundaria};
    color: ${(props) => props.theme.colors.primary};
  }
`
export default BlocoPrincipal

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.colors.secundaria};
  background-color: ${(props) => props.theme.colors.primary};

  display: inline-block;
  padding: 8px 16px;

  margin-top: 16px;
  font-weight: bold;

  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
