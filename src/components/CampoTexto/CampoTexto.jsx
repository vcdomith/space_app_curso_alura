import {styled} from 'styled-components'
import search from '/imagens/search.png'


const ContainerStyle = styled.div`
    
    position: relative;
    display: inline-block;

`

const InputStyle = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`


const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = ({ aoBuscar }) => {
  return (
    <>
        <ContainerStyle >
            <InputStyle 
                onChange={evento => aoBuscar(evento.target.value)}
                placeholder='O que você procura?'
                // {...props} 
                />
            <IconeLupa src={search} alt='Icone de lupa' />
        </ContainerStyle >
    </>
  )
}

export default CampoTexto