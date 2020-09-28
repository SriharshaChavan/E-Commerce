import React, { PureComponent } from 'react';
import './Product.css'
class Product  extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='betterview'>
                <h1> {this.props.product.name}</h1>
                <h2> {this.props.product.price}</h2>
                <img src={this.props.product.image} className='imgthumb'/>
                <button onClick={()=>{this.props.addToCart(this.props.product)}}>Add to Cart</button>
            </div>
         );
    }
}

export default Product;