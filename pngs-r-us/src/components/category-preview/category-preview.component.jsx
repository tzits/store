import { CategoryPreviewContainer, Title, Preview, TitleHeader} from './category-preview.styles'
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <TitleHeader>
                <Title to={title}>
                    <span>{title.toUpperCase()}</span>
                </Title>
            </TitleHeader>
            <Preview>
                {
                    products.filter((_, idx) => idx < 4).map((product => 
                    <ProductCard key={product.id} product={product} />))
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview