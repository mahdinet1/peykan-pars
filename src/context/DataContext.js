import React, { useState } from 'react'

const DataContext = React.createContext()

const DataContextProvider = ({children}) => {
    const [data, setdata] = useState([
        {
            id:null,
            proName:'',
            carName:'',
            brand:'',
            price:'',
            offer:'',
            existense:true,
            basket:0,
            image:''

        }
    ])
    return (
        <DataContext.Provider value={[data, setdata]}>
            {children}
        </DataContext.Provider> 
    )
}
export { DataContext , DataContextProvider }