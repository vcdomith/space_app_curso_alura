import {styled} from 'styled-components'

const FigureContainer = styled.figure`
    min-width: 448px;
    min-height: 336px;

    margin: 0;

    border-radius: 1rem;
`

const ImageStyle = styled.img`
    /* aspect-ratio: 7 / 4; */
    width: 28rem;
    height: 16rem;
`

const Imagem = ({ foto }) => {
  return (
    <FigureContainer>
        <ImageStyle src={foto.path} alt={`Foto de ${foto.titulo}`} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <footer>
                <p>{foto.fonte}</p>
                <button>Favorito</button>
                <button>Expandir</button>
            </footer>
        </figcaption>
    </FigureContainer>
  )
}

export default Imagem