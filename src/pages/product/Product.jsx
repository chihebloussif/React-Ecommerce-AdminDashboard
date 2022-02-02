import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../.././components/chart/Chart';
import {productData} from '../.././dummyData'
import { Publish } from '@material-ui/icons';
const Product = () => {
  return (
            <div className='product'>
                <div className="productTitleContainer">
                    <h1 className="productTitle">Product</h1>
                    <Link to='/newProduct'>
                    <button className="productAddButton">Create</button>
                    </Link>
                </div>
                <div className="productTop">
                  <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="sales performance"/>
                  </div>
                  <div className="productTopRight">
                    <div className="productInfoTop">
                      <img src="https://images.pexels.com/photos/9741356/pexels-photo-9741356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="productInfoImg" />
                      <span className="productName">Apple Airpods</span>
                    </div>
                  <div className="productInfoBottom">
                    <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                      <span className="productInfoKey">Sales:</span>
                      <span className="productInfoValue">4321</span>
                    </div>
                    <div className="productInfoItem">
                      <span className="productInfoKey">Active:</span>
                      <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                      <span className="productInfoKey">in Stock</span>
                      <span className="productInfoValue">no</span>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="productBottom">
                <form action="" className="productUpdateForm">
                      <div className="productUpdateLeft">
                              <label>Product Name</label>
                              <input type="text"
                                     placeholder='Apple Airpods' 
                              />
                              <label htmlFor="">In Stock</label>
                              <select name="inStock" id="stockId">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                              <label htmlFor="">Active</label>
                              <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                      </div>
                      <div className="productUpdateRight">
                          <div className="productUpdateUpload">
                              <img className='productUpdateImg'
                               src="https://images.pexels.com/photos/9741356/pexels-photo-9741356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt=""
                                 />
                                 <label htmlFor="file"><Publish className='productUpdateIcon'/></label>
                                 <input type="file" id="file" style= {{display:"none"}} />
                          </div>
                          <button className="productUpdateButton">Update</button>
                      </div>
                  </form>
                </div>
                
            </div>
  );
};

export default Product;
