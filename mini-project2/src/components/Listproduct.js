import React, { Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';
class Listproduct extends Component {
  render() {
    console.log("Mock data:",this.props.products);
    let {products}=this.props;
    let elementProduct = products.map((item,index)=>{
      return <Product key={index} renderProduct={item}/>
    })
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              {/* PRODUCT : START */}
               {/*} <Product />*/}
               {elementProduct}
              {/* PRODUCT : END */}
              {/* PRODUCT : START */}
              <div className="media product">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src="images/target-leap-frog.jpg"
                      alt="target-leap-frog"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">target leap frog</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam magnam
                    magni ut deleniti!
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
                    12 USD{" "}
                  </a>
                </div>
              </div>
              {/* PRODUCT : END */}
            </div>
          </div>
        </div>
    )
  }
}
// mapStateToProps: ket noi state trong store cua app voi props tren components
const mapStateToProps = (state) => {
  return{
    products:state.Listproduct,
  };
};
export default connect(mapStateToProps,null)(Listproduct);