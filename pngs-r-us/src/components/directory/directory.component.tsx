import DirectoryItem from "../directory-item/directory-item.component";
import {DirectoryContainer} from './directory.styles'
import { Key } from 'react'

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
}

const categories: DirectoryCategory[] = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://images4-g.ravelrycache.com/uploads/heidiarjes/167343764/penguin_finished-1_medium.jpg",
    'route': 'shop/hats'
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://images.stockx.com/images/Supreme-Penguins-Hooded-Fleece-Jacket-Blue.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1634933503&q=60",
    'route': 'shop/jackets'
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://cdn.shopify.com/s/files/1/2286/6873/products/SW-33131-xx_ikiki_George_P_Penguin_001_5813e578-33c3-424b-b528-20aaa621191d.jpg?v=1608745225",
    'route': 'shop/sneakers'
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://m.media-amazon.com/images/I/A1nYNISnPeL._CLa%7C2140%2C2000%7CA1SiV3-4KIL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png",
    'route': 'shop/womens'
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i5.walmartimages.com/asr/e1c18004-bc46-420c-9381-ac8f81395103_1.6d1c16b26c58730a077e21a66a3791c8.jpeg",
    'route': 'shop/mens'
  }
]

const Directory = () => (
  
  <DirectoryContainer key={Math.random()}>
      {categories.map(( category ) => (
          <DirectoryItem category={category} />
      ))}    
  </DirectoryContainer>
)

export default Directory