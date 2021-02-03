import React, { Component } from 'react';
import QuantityPicker from "../quantityPicker/quantityPicker";
import "./product.css";


class Product extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="product">
                <img src="https://picsum.photos/230/200" alt="testImg"/>
                <h4>This will be a product</h4>
                <p>Product description</p>
                <h6>Total</h6>
                <h6>Price</h6>

                <QuantityPicker></QuantityPicker>
            </div>
         );
    }
}
 
export default Product;