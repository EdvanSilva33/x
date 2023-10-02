import styled from 'styled-components'

const CaixaDePesquisa = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.colors.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export default CaixaDePesquisa

export const Botao = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.secundaria};
  margin-left: 8px;
  cursor: pointer;
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.colors.primary};
`
