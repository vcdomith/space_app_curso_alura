import {styled} from 'styled-components'
import Titulo from '../Titulo/Titulo'
import Tags from './Tags/Tags'
import Populares from './Populares/Populares'
import Imagem from './Imagem/Imagem'


// const TituloStyle = styled.
const GaleriaContainer = styled.div`
  display: flex;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
`

const ImageListContainerStyle = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  gap: 1.5rem;
`

const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>

        <SecaoFluida>

          <Titulo >Navegue pela galeria</Titulo>
          <ImageListContainerStyle>
            {fotos.map( foto => <Imagem key ={foto.id} foto={foto} ></Imagem>)}
          </ImageListContainerStyle>

        </SecaoFluida>

        <Populares />

      </GaleriaContainer>
    </>
  )
}

export default Galeria