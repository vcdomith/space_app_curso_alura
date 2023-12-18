import {styled} from 'styled-components'
import tags from './tags.json'
import Tag from './Tag/Tag'

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 56px;
`

const SubTituloStyle = styled.h2`
    color: #D9D9D9;
    font-family: GandhiSansRegular;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`

const Tags = () => {
  return (
    <TagsContainer >
    <SubTituloStyle>Busque por tags:</SubTituloStyle>
    {tags.map( 
        tag => 
            <Tag 
                key={tag.id} 
                texto={tag.titulo}
            >
            </Tag>
    )}
    </TagsContainer >
  )
}

export default Tags