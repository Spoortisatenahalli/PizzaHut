import React, { createContext, useReducer, useState } from 'react'
import MenuList from "../Helpers/MenuList"


const ProductContext= createContext(); // to create a context


const ProductContextProvider = () => {

  const [products] = useState(MenuList);
    
  const [state, dispatch] = useReducer(cartReducer,{
      products : products,
      cart : []
  })

  const [productState, dispatchProduct] = useReducer(productReducer,{
      bylatest: false,
      byProdAssurance:false,
      searchQuery : "",
  })



  return (
    <ProductContext.Provider>

    </ProductContext.Provider>
  )
}

export default ProductContextProvider