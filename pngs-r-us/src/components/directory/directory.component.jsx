import CategoryItem from "../category-item/category-item.component";
import './directory.scss'

const Directory = ({ categories }) => (
  <div className='directory-container' key={Math.random()}>
      {categories.map(( category ) => (
          <CategoryItem category={category} />
      ))}    
  </div>
)

export default Directory