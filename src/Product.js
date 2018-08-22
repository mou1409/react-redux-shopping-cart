import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Product extends Component {

  shouldComponentUpdate(newProps,newState){
    if( this.props.isAddedToCart != newProps.isAddedToCart ){
      console.log("shouldComponentUpdate for Product", this.props.productName)
      return true
    }else {
      return false
    }
  }

  componentWillUpdate(){
    //console.log("componentWillUpdate is triggered")
  }

  componentDidUpdate(){
    //console.log("componentDidUpdate is triggered")
  }

  render(){
    //console.log("The Product Card is rendering for product: ", this.props.productName)
    return(
      <div className="product">
            <div className="product-image">
                <img src={this.props.productImage}/>
            </div>
            <h4 className="product-name">{this.props.productName}</h4>
            <h4 className="product-price">$ {this.props.productPrice}</h4>
            {
              this.props.isAddedToCart ?
              <div className="product-action">
                  <button onClick={()=>{ this.props.handleAddToCartInProduct(this.props.productId) }}  style={{ backgroundColor:'red' }}className="remove" type="button"> Remove </button>
              </div> :
              <div className="product-action">
                  <button onClick={()=>{ this.props.handleAddToCartInProduct(this.props.productId) }}  className="added" type="button"> Add to cart </button>
              </div>
            }
      </div>
    )
  }
}

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number,
  productImage:PropTypes.string,
  productId: PropTypes.number,
}

Product.defaultProps = {
  productPrice: 0,
  productImage:"http://4.bp.blogspot.com/_CHG2GRbeET8/SS3f-tcSNiI/AAAAAAAAJEk/qVdRYu1MLMs/s320/missing-715826.gif"
}

export default Product
