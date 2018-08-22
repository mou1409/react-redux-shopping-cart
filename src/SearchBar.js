import React from 'react'

class SearchBar extends React.Component {

  constructor(){
    super()
    this.state={
      searchString:""
    }
  }

  handleSearchInput(event){
    this.props.thisIsFunctionAsProp_updateSearchString(event.target.value)
  }

  render(){
    return(
      <div className='header'>
          <input value={this.props.searchString} onChange={event=>this.handleSearchInput(event)}/>
          <div className='cart-cont'>
              <span className='cart-font' > {this.props.cart.length} </span>
          </div>
      </div>
    )
  }
}

export default SearchBar
