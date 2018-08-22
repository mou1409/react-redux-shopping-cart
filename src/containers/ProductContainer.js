import React from 'react'
import Product from '../../src/Product'

const ProductContainer = (props) =>{

  //console.log("This is ProductContainer rendering. . . . .",props)

    return(
      <div className="products">
            {
              props.products.map(function(eachProduct){
                  return <Product
                                  handleAddToCartInProduct={(product)=>props.handleAddToCartInProductContainer(product)}
                                  key={eachProduct.id}
                                  productName={eachProduct.productName}
                                  productPrice={eachProduct.productPrice}
                                  productImage={eachProduct.productImage}
                                  productId={eachProduct.id}
                                  isAddedToCart={props.cart.indexOf(eachProduct.id) >= 0}
                                  />
              })
            }
      </div>
    )
}

export default ProductContainer
