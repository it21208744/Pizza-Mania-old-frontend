import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";
import { Modal } from "react-bootstrap";
import CreatePayment from './payment-add.component';
const shortid = require('shortid');



export class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.onChangecustomer = this.onChangecustomer.bind(this);
        this.onChangeitem1 = this.onChangeitem1.bind(this);
        this.onChangequantity1 = this.onChangequantity1.bind(this);
        this.onChangeitem2 = this.onChangeitem2.bind(this);
        this.onChangequantity2 = this.onChangequantity2.bind(this);
        this.onChangeitem3 = this.onChangeitem3.bind(this);
        this.onChangequantity3 = this.onChangequantity3.bind(this);
        this.onChangeorderFor = this.onChangeorderFor.bind(this);
        this.onChangedeliveryAddress = this.onChangedeliveryAddress.bind(this);
        this.onChangeamount = this.onChangeamount.bind(this);
        this.onChangesize1 = this.onChangesize1.bind(this);
        this.onChangesize2 = this.onChangesize2.bind(this);
        this.onChangesize3 = this.onChangesize3.bind(this);
        // this.onChangeorderStatus = this.onChangeorderStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getPrice1 = this.getPrice1.bind(this);

        this.state = {
            products: [],
            orderId: '',
            customer: '',
            item1: '',
            size1: '',
            quantity1: '',
            item2: '',
            size2: '',
            quantity2: '',
            item3: '',
            size3: '',
            quantity3: '',
            orderFor: '',
            deliveryAddress: '',
            amount: '',
            orderStatus: '',
            price: '',
            show: false

        }
    }

    onChangecustomer(e) {
        this.setState({
            customer: e.target.value
        });
    }

    onChangeitem1(e) {
        this.setState({
            item1: e.target.value
        });
    }

    onChangesize1(e) {
        this.setState({
            size1: e.target.value
        });
    }

    onChangesize2(e) {
        this.setState({
            size2: e.target.value
        });
    }

    onChangesize3(e) {
        this.setState({
            size3: e.target.value
        });
    }

    onChangequantity1(e) {
        this.setState({
            quantity1: e.target.value
        });
    }

    onChangeitem2(e) {
        this.setState({
            item2: e.target.value
        });
    }

    onChangequantity2(e) {
        this.setState({
            quantity2: e.target.value
        });
    }

    onChangeitem3(e) {
        this.setState({
            item3: e.target.value
        });
    }

    onChangequantity3(e) {
        this.setState({
            quantity3: e.target.value
        });
    }

    onChangeorderFor(e) {
        this.setState({
            orderFor: e.target.value
        });
    }

    onChangedeliveryAddress(e) {
        this.setState({
            deliveryAddress: e.target.value
        });
    }

    onChangeamount(e) {
        this.setState({
            amount: e.target.value
        });
    }

    componentDidMount() {
        this.getProduct();
    }

    getProduct() {
        axios.get('http://localhost:5000/product/')
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getPrice3(item3, size3, quantity3) {

        console.log(item3)

        let amount3 = 0;
        let i = 1;




        this.state.products.map((currentProduct) => {

            if (item3 == currentProduct.productName && currentProduct.availability == "No") {
                Swal.fire({
                    icon: 'info',
                    title: 'Error',
                    text: 'Item3 is not available!!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#60e004'
                })

            } else {



                if (item3 == currentProduct.productName && size3 == currentProduct.productSize) {
                    console.log("Product Name inside getproduct is " + currentProduct.productName)


                    if (currentProduct.discount > 0) {
                        amount3 = (currentProduct.price * quantity3) - currentProduct.discount

                    } else {
                        amount3 = currentProduct.price * quantity3
                    }


                }


            }

        })
        return amount3;



    }

    getPrice2(item2, size2, quantity2) {

        console.log(item2)


        let amount2 = 0;
        let i = 1;



        this.state.products.map((currentProduct) => {

            if (item2 == currentProduct.productName && currentProduct.availability == "No") {
                Swal.fire({
                    icon: 'info',
                    title: 'Error',
                    text: 'Item2 is not available!!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#60e004'
                })

            } else {



                if (item2 == currentProduct.productName && size2 == currentProduct.productSize) {
                    console.log("Product Name inside getproduct is " + currentProduct.productName)

                    if (currentProduct.discount > 0) {
                        amount2 = (currentProduct.price * quantity2) - currentProduct.discount

                    } else {

                        amount2 = currentProduct.price * quantity2

                    }

                }


            }

        })
        return amount2;



    }

    getAvailability1(item1,size1){

        let availability1 = ""

        this.state.products.map((currentProduct) => {

            if (item1 == currentProduct.productName ) {
                  
               availability1 = currentProduct.availability

            } 

        })
        return availability1;

    }
    getAvailability2(item2,size2){

        let availability2 = ""

        this.state.products.map((currentProduct) => {

            if (item2 == currentProduct.productName ) {
                  
               availability2 = currentProduct.availability

            } 

        })
        return availability2;

    }
    getAvailability3(item3,size3){

        let availability3 = ""

        this.state.products.map((currentProduct) => {

            if (item3 == currentProduct.productName ) {
                  
               availability3 = currentProduct.availability

            } 

        })
        return availability3;

    }

    getPrice1(item1, size1, quantity1) {

        console.log(item1)


        let amount1 = 0;
        let i = 1;
       



        this.state.products.map((currentProduct) => {

            if (item1 == currentProduct.productName && currentProduct.availability == "No") {
                
                
                Swal.fire({
                    icon: 'info',
                    title: 'Error',
                    text: 'Item1 is not available!!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#60e004'
                })

            } else {


                if (item1 == currentProduct.productName && size1 == currentProduct.productSize) {
                    console.log("Product Name inside getproduct is " + currentProduct.productName)


                    if (currentProduct.discount > 0) {
                        amount1 = (currentProduct.price * quantity1) - currentProduct.discount

                    } else {
                        amount1 = currentProduct.price * quantity1
                    }







                }
            }




        })
        return amount1;



    }

    gotoPayment = (id) => {
        this.setState({
            id: id,

            show: true

        })
        console.log("LIst id is :" + id);
    }

    closeModalBox = () => {
        this.setState({ show: false })

    }




    onSubmit(e) {

        const item1 = this.state.item1;
        const size1 = this.state.size1;
        const quantity1 = this.state.quantity1;
        const item2 = this.state.item2;
        const size2 = this.state.size2;
        const quantity2 = this.state.quantity2;
        const item3 = this.state.item3;
        const size3 = this.state.size3;
        const quantity3 = this.state.quantity3;

        let av1 = this.getAvailability1(item1,size1);
        console.log("Availability1 is"+av1);

        let av2 = this.getAvailability2(item2,size2);
        console.log("Availability2 is"+av2);

        let av3 = this.getAvailability3(item3,size3);
        console.log("Availability3 is"+av3);

        let price1 = this.getPrice1(item1, size1, quantity1);
        console.log("Price 1 is" + price1);

        let price2 = this.getPrice2(item2, size2, quantity2);
        console.log("Price 2 is" + price2);

        let price3 = this.getPrice3(item3, size3, quantity3);
        console.log("Price 3 is" + price3);

        let amount = price1 + price2 + price3;
        console.log("Amount is" + amount);

        e.preventDefault();


        const product = [];


        const order = {
            orderId: shortid.generate(),
            customer: this.state.customer,
            item1: this.state.item1,
            size1: this.state.size1,
            quantity1: this.state.quantity1,
            item2: this.state.item2,
            size2: this.state.size2,
            quantity2: this.state.quantity2,
            item3: this.state.item3,
            size3: this.state.size3,
            quantity3: this.state.quantity3,
            orderFor: this.state.orderFor,
            deliveryAddress: this.state.deliveryAddress,
            amount: amount,
            orderStatus: 'Order Taken',
        }


        console.log(order);

        if (this.state.customer.length < 6) {
            this.setState({ cusError: "Customer name is too short." })
        }
        else if (this.state.item1.length < 3) {
            this.setState({ item1Error: "Item name is too short." })
        }
        else if (this.state.quantity1 <= 0) {
            this.setState({ quantity1Error: "Invalid Quantity." })
        } 
        
        // else if (this.state.orderFor.length < 5) {
        //     this.setState({ orderForError: "Order For is too short." })
        // }
        else {
            
            axios.post('http://localhost:5000/order/', order)

                .then(res => {

                    console.log(res);
                    const id = res.data;

                    if (res.status === 200) {
                        this.clearData();
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Order has been added!!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#60e004'
                        })

                        this.gotoPayment(id);
                        // window.location = '/payment';

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Error in adding!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#e00404'
                        })
                    }
                })




        }

    }

    clearData = () => {
        this.setState({
            customer: '',
            item1: '',
            size1: '',
            quantity1: '',
            item2: '',
            size2: '',
            quantity2: '',
            item3: '',
            size3: '',
            quantity3: '',
            orderFor: '',
            deliveryAddress: '',
            amount: '',

        })
    }

    render() {
        return (
            <div className="flex flex-col px-5 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <form className='px-12 py-6 border-2 rounded-lg shadow-md bg-gray-50' onSubmit={this.onSubmit}>
                                        <div class="">
                                            <p className='text-4xl font-semibold text-black uppercase drop-shadow-lg'>
                                                Add Order
                                            </p>
                                            <div className="grid grid-cols-1 gap-4 form-group">
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Customer
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.customer}
                                                        onChange={this.onChangecustomer}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.cusError}</p>
                                                </div>

                                            </div>

                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Item 1
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.item1}
                                                        onChange={this.onChangeitem1}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.item1Error}</p>
                                                </div>
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                        Size 1
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.size1}
                                                        onChange={this.onChangesize1}
                                                    />
                                                </div>
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                        Quantity 1
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.quantity1}
                                                        onChange={this.onChangequantity1}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.quantity1Error}</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Item 2
                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={this.state.item2}
                                                        onChange={this.onChangeitem2}
                                                    />
                                                </div>
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                        Size 2
                                                    </label>
                                                    <input type="text"

                                                        className="form-control"
                                                        value={this.state.size2}
                                                        onChange={this.onChangesize2}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Quantity 2
                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={this.state.quantity2}
                                                        onChange={this.onChangequantity2}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.quantity2Error}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 form-group">

                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Item 3
                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={this.state.item3}
                                                        onChange={this.onChangeitem3}
                                                    />
                                                </div>
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                        Size 3
                                                    </label>
                                                    <input type="text"

                                                        className="form-control"
                                                        value={this.state.size3}
                                                        onChange={this.onChangesize3}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Quantity 3
                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={this.state.quantity3}
                                                        onChange={this.onChangequantity3}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.quantity3Error}</p>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Order For
                                                </label>
                                                <select type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.orderFor}
                                                    onChange={this.onChangeorderFor}
                                                >
                                                    <option>Select From Here</option>
                                                    <option>Dine In</option>
                                                    <option>Take Away</option>
                                                    <option>Delivery</option>

                                                </select><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.orderForError}</p>
                                            </div>
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Delivery Address
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.deliveryAddress}
                                                    onChange={this.onChangedeliveryAddress}
                                                /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.deliveryAddressError}</p>
                                            </div>
                                            
                                                
                                            {/* <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Amount
                                                </label>
                                                <input type="number"
                                                    required
                                                    className="form-control"
                                                    value={this.state.amount}
                                                    onChange={this.onChangeamount}
                                                />
                                            </div> */}
                                            <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Order" />
                                            </div>
                                        </div>
                                    </form>

                                </div>

                                <div class="">
                                    <Modal show={this.state.show} onHide={this.closeModalBox} centered size={"xl"}>
                                        <Modal.Header className='px-5 pt-4 border-2 shadow-md bg-gray-50' closeButton>
                                            <div class="">
                                                <Modal.Title className='items-center' >
                                                    <p className='font-semibold text-black uppercase '>
                                                        Add Payment Details
                                                    </p>
                                                </Modal.Title>
                                            </div>
                                        </Modal.Header >
                                        <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                            <CreatePayment payId={this.state.id} key={this.state.id} close={this.closeModalBox} />
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}