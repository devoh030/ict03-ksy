import React, { Component } from "react";
import {Table, TableHead, TableRow, TableCell, TableBody, Typography, Button} from '@mui/material';
import ApiService from "../../ApiService";
import {Create, Delete} from '@mui/icons-material';

class ListProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [], //리스트 데이터
            message: null
        }
    }

    // Life Cycle (라이프사이클) 중 컴포넌트가 생성된 후 사용자에게 보여지기 전까지의 전체과정을 렌더링해준다.(데이터 로딩)
    componentDidMount() {       // 1. 렌더링 이전에 요청데이터를 미리 읽어옴
        this.reloadProductList();        
    }

    //list
    reloadProductList = () => {
        ApiService.fetchProducts()  // 2. 스프링부트와의 통신기능 호출
            .then(res => {          // 4. res에 db결과가 들어있다. (response)
                this.setState({     
                    products: res.data // 5. 변수에 결과를 담는다.
                })
            })
            .catch(err => {
                console.log('reloadProductList() Error, Axioserr')
            })
    }

    // insert
    addProduct = () => {
        window.localStorage.removeItem("productID"); //SQL에서 자동증가

        // history.push() - 페이지 이동(RouterComponent에서 지정한 해당 path)할 때 props 값 전달
        this.props.history.push("/add-product"); 
    }

    // update
    editProduct = (ID) => {
        window.localStorage.setItem("productID", ID);
        this.props.history.push("/edit-product");    // RouterComponent - EditProductComponent 호출  
    }

    // delete
    deleteProduct = (ID) => {
        ApiService.deleteProduct(ID)
            .then(res => {
                this.setState({
                    // 리액트에서 특정아이템을 삭제할때는 불변성을 지켜가며 update해줘야한다. 이때 filter라는 함수를 사용한다.
                    // filter는 배열에서 특정조건이 만족하는 요소들만 추출하여 새로운 값을 만든다.
                    // filter 함수를 통해 조건에 만족하지 않으면 배열의 요소를 제거한다.
                    products: this.state.products.filter(product => product.id !== ID)
                });
                console.log('delete 성공: ', res.data);
            })
            .catch(err => {
                console.log('delete 실패: ', err);
            })
        //this.reloadProductList(); => 한번에 조회
    }

    render() {
        return (
            <div>
                <br/><br/>
                <h3>ListProductComponent</h3>
                <Typography variant="h4" style={style}>Product List</Typography> <br/><br/>
                <Button variant="contained" color="secondary" onClick={this.addProduct}>Add Product</Button><br/><br/>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>MadeIn</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> {/* 6. 실행결과 */}
                        {this.state.products.map(product => 
                            <TableRow key={product.id}>
                                <TableCell component="th" scope="product">{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.brand}</TableCell>
                                <TableCell>{product.madein}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell onClick={() => this.editProduct(product.id)}>
                                    <Create />
                                </TableCell>
                                <TableCell onClick={() => this.deleteProduct(product.id)}>
                                    <Delete />
                                </TableCell>
                            </TableRow> 
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    }
}
const style = {
    display: 'flex',
    justifyContent: 'center'
}
export default ListProductComponent; 