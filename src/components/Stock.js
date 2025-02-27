import React from 'react'

const Stock = (props) => {

  // clickHandler(stockObj) {
  //   if (this.state.purchased === false) { 
  //     this.setState({
  //       purchased: true
  //     })
  //     this.props.purchaseStock(stockObj)
  //   } else {
  //     this.setState({
  //       purchased: false
  //     })
  //     this.props.sellStock(stockObj)
  //   }
  // }
  
    return( 
      <div>
        <div className="card">
          <div className="card-body" onClick={() => props.clickHandler(props.stockObj)}>
            <h5 className="card-title">{  props.stockObj.name }</h5>
            <p className="card-text">{
                props.stockObj.price
              }</p>
          </div>
        </div>
      </div>
    )
  }


export default Stock
