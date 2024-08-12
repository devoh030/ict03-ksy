import { Button, TextField, Typography } from "@mui/material";
import React, { Component } from "react";
import ApiService from "../../ApiService";

class AddProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state={    // 2. 해당변수에 입력한 값으로 변경된 상태가 된다.
            name: '',
            brand: '',
            madein: '',
            price: '',
            message: ''
        }
    }

    onChange = (e) => { // 1. 입력한 값으로 변경한다
        this.setState({
            [e.target.name] : e.target.value //  value={this.state.name}
        });
    }

    saveProduct = (e) => { 
        e.preventDefault();
             
        let inputData = {
            name: this.state.name,
            brand: this.state.brand,
            madein: this.state.madein,
            price: this.state.price
        }

        // 등록처리(화면에서 입력한 값-> onChange() -> setState -> inputData)
        ApiService.addProduct(inputData)
            .then(res => {
                console.log('addProduct 성공 : ', res.data); //컨트롤러에서 전달함(resultCode, resultMsg)
                this.props.history.push("/product"); // RouterComponent.js - ListProductComponent 호출
            })
            .catch(err => {
                console.log('addProduct 실패 : ', err);
            }); 
    }

    render() {
        return (
            <div align="center">
                <br/><br/>
                <Typography variant="h4"> Add Product </Typography>
                    <TextField 
                        required
                        id="standard-required"
                        variant="standard"
                        label="name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder='Input Product name'
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
                        placeholder='Input Product brand'
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
                        placeholder='Input Product madein'
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
                        placeholder='Input Product price'
                        onChange={this.onChange}
                   /><br/><br/>

                <Button variant="contained" color="primary" onClick={this.saveProduct}> Save </Button>   
            </div>
        );
    }
}

export default AddProductComponent; 