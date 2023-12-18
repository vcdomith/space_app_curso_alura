import {styled} from 'styled-components'

const FigureContainer = styled.figure`
    width: 448px;
    height: 336px;

    margin: 0;

    border-radius: 1rem;
    overflow: hidden;

    background-color: #001634;
`

const ImageStyle = styled.img`
    /* aspect-ratio: 7 / 4; */
    width: 28rem;
    max-height: 240px;
`

const FigureCaptionContainerStyle = styled.figcaption`
    height: 96px;
`

const TitleStyle = styled.h3`
    margin: 0;
`

const SourceStyle = styled.p`
    margin: 0;
`

const Imagem = ({ foto }) => {
  return (
    <FigureContainer>
        <ImageStyle src={foto.path} alt={`Foto de ${foto.titulo}`} />
        <FigureCaptionContainerStyle>
            <TitleStyle>{foto.titulo}</TitleStyle>
            <footer>
                <SourceStyle>{foto.fonte}</SourceStyle>
                <button>Favorito</button>
                <button>Expandir</button>
            </footer>
        </FigureCaptionContainerStyle>
    </FigureContainer>
  )
}

export default Imagem