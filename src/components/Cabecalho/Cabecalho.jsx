import { styled } from 'styled-components'
import CampoTexto from '../CampoTexto/CampoTexto'

const HeaderStyle = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`


const Cabecalho = () => {
  return (
    <>
        <HeaderStyle >
            <img src="/imagens/logo.png" alt="Logo" />
            <CampoTexto /> 
        </HeaderStyle > 
    </>
  )
}

export default Cabecalho