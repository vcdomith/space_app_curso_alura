import { styled } from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais/EstilosGlobais"
import Cabecalho from "./components/Cabecalho/Cabecalho"
import BarraLateral from "./components/BarraLateral/BarraLateral"
import Banner from "./components/Banner/Banner"
import Galeria from "./components/Galeria/Galeria"

import fotos from './fotos.json'
import { useState } from "react"

const FundoGradiente = styled.div`

  background: var(--Gradiente-fundo, linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%));

  width: 100%;
  min-height: 100vh;

  margin: 0;


`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`



const App = () => {

  const [fotosGaleria, setFotoGaleria] = useState(fotos)

  return (
    <FundoGradiente >

		<EstilosGlobais />

		<AppContainer>

			<Cabecalho />

			<MainContainer>
				
				<BarraLateral />
				<ConteudoGaleria>

					<Banner 
						texto='A galeria mais completa do espaço!' 
						backgroundImage='src/assets/banner.png'
					/>
					<Galeria fotos={fotosGaleria} />

				</ConteudoGaleria>

			</MainContainer>

		</AppContainer>

	</FundoGradiente >
  )
}

export default App
