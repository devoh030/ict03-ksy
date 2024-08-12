import { Button, TextField, Typography } from "@mui/material";
import React, { Component } from "react";
import ApiService from "../../ApiService";

class EditProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state={    // 2.
            id: '',
            name: '',
            brand: '',
            madein: '',
            price: '',
            message: ''
        }
    }
    //----------------------상품 1건조회--------------------------
    componentDidMount() {
        this.loadProduct(); // 1. 라이프사이클에서 loadProduct() 호출
    }
    // 2. 수정전 1 건 select
    loadProduct= () => {
        ApiService.fetchProductById(window.localStorage.getItem("productID"))
            .then(res => {
                let product = res.data;
                this.setState({ // 3. 해당 변수를 조회된 값으로 변경
                    id: product.id,
                    name: product.name,
                    brand: product.brand,
                    madein: product.madein,
                    price: product.price
                })
            })
            .catch(err => {
                console.log('loadProduct() Error', err);
            });
    }

    onChange = (e) => { // 4. 조회한 값으로 화면의 state변수를 변경한다
        this.setState({
            [e.target.name] : e.target.value //  value={this.state.name}
        });
    }
    //----------------------수정버튼 > 수정 처리--------------------------
    editProduct = (e) => {  
        
        e.preventDefault();
        
        let inputData = {   //화면에서 수정한 값을 변수에 담는다.
            id: this.state.id,
            name: this.state.name,
            brand: this.state.brand,
            madein: this.state.madein,
            price: this.state.price
        }

        // 수정처리(화면에서 입력한 값-> onChange() -> setState -> inputData)
        ApiService.editProduct(inputData)
            .then(res => {
                console.log('editProduct 성공 : ', res.data); //컨트롤러에서 전달함(resultCode, resultMsg)
                this.props.history.push("/product"); // RouterComponent.js - ListProductComponent 호출
            })
            .catch(err => {
                console.log('editProduct 실패 : ', err);
            }); 
    }

    render() {
        return (
            <div align="center">
                <br/><br/>
                <Typography variant="h4"> Edit Product </Typography> {/* 5. */}
                    <TextField 
                            id="standard-required"
                            variant="standard"
                            label="id"
                            name="id"
                            value={this.state.id}
                    /><br/>

                    <TextField 
                        required
                        id="standard-required"
                        variant="standard"
                        label="name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder='edit Product name'
                        onChange={this.onChange}
                   /><br/>

                   <TextField 
                        required
                        id="standard-required"
                        variant="standard"
                        label="brand"
                        type="text"
                        name="brand"
                        value={this.state.brand}
                        placeholder='edit Product brand'
                        onChange={this.onChange}
                   /><br/>

                    <TextField 
                        required
                        id="standard-required"
                        variant="standard"
                        label="madein"
                        type="text"
                        name="madein"
                        value={this.state.madein}
                        placeholder='edit Product madein'
                        onChange={this.onChange}
                   /><br/>

                    <TextField 
                        required
                        id="standard-required"
                        variant="standard"
                        label="price"
                        type="text"
                        name="price"
                        value={this.state.price}
                        placeholder='edit Product price'
                        onChange={this.onChange}
                   /><br/><br/>

                <Button variant="contained" color="primary" onClick={this.editProduct}> Save </Button>   
            </div>
        );
    }
}

export default EditProductComponent; 