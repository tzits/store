import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCategories } from '../../store/category/category.action'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            console.log(categoriesArray)
            dispatch(setCategories(categoriesArray))
        };

    getCategoriesMap();
    }, [])


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path="/:category" element={<Category />} />
        </Routes>
    )
}

export default Shop