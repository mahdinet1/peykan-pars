import React from 'react'
import ProductsList from '../components/productsList/ProductsList'
import { DataContextProvider } from '../context/DataContext'

const Home:React.FC = () => {
    return (
        <div> 
            <DataContextProvider>
                <ProductsList /> 
            </DataContextProvider>
        </div>
    )
}

export default Home
