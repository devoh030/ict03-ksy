import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ListProductComponent from '../product/ListProductComponent';
import AddProductComponent from '../product/AddProductComponent';
import EditProductComponent from '../product/EditProductComponent';

const RouterComponent = () => {
    return (
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Route path="/" exact={true} component={ListProductComponent} />
                    <Route path="/product" exact={true} component={ListProductComponent} />
                    <Route path="/add-product" exact={true} component={AddProductComponent} />
                    <Route path="/edit-product" exact={true} component={EditProductComponent} />
                </div>
            </BrowserRouter>             
        </div>
 );
};          
const style = {
    margin: '10px'
}
export default RouterComponent;