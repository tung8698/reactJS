import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    let {renderProduct} = this.props;
    return (
<div className="media product">
            <div className="media-left">
              <a href="#">
                <img
                  className="media-object"
                  src={`images/${renderProduct.image}`}
                  alt="charmander"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{renderProduct.productName}</h4>
              <p>
                {renderProduct.description}
              </p>
              <input
                name="quantity-product-1"
                type="number"
                defaultValue={1}
                min={1}
              />
              <button data-product={1} className="btn btn-success">
                Mua hàng
              </button>
              <a data-product={1} href="#" className="price">
                {" "}
                {renderProduct.price}{" "}
              </a>
            </div>
          </div>
    )
  }
}
