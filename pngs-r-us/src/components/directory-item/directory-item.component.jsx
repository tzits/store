import { useNavigate } from 'react-router-dom'

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  Header,
  Paragraph
} from  './directory-item.styles.jsx'


const DirectoryItem = ( {category} ) =>  {
    const { imageUrl, title, route } = category
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)
      return (

        <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <Header>{title}</Header>
            <Paragraph>Shop Now</Paragraph>
          </Body>
        </DirectoryItemContainer>
        )

          }
          

export default DirectoryItem