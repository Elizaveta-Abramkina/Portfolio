import {Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import React, {ChangeEvent, useContext} from "react";
import '../../../styles/AdminPanel.css'
import {defaultDataProduct, OnlineStoreContext} from "./OnlineStoreContext";
import Product from "./Product";
import axios from "axios";


const ProductPublication = Yup.object().shape({
        title: Yup.string()
            .min(1, "Enter more characters!")
            .max(10, "Title is too long")
            .required("Required!"),
        price: Yup.number()
            .min(1, "Enter more characters!")
            .required("Required!"),
        img: Yup.string()
            .min(1)
    }
)


const AdminPanel: React.FC = () => {

    const {context, setContext} = useContext(OnlineStoreContext)

    return (
        <div className="admin-panel">
            <div className="container">
                <h3>Добавление товара</h3>

                <Formik
                    initialValues={
                        defaultDataProduct
                    }
                    validationSchema={ProductPublication}
                    // onSubmit={ (values)=>{
                    //     console.log(values)
                    // }
                    onSubmit={values => {
                        const newContext = [
                            ...context, values
                        ]
                        setContext(newContext)
                        console.log(context)
                    }
                    }
                >
                    {({values, errors, touched, setFieldValue}) => {

                        return (
                            <Form className="product-form">
                                <div>
                                    <div className="product-form__main">
                                        <label className="product-form__name " htmlFor="product-tittle">Product
                                            tittle</label>
                                        <Field className="product-form__input" id="product-title" name="title"/>
                                        {touched.title && errors.title ? <p>Enter the title!</p> : null}
                                        <p>Permalink: http://localhost:3000/store/products/{values.productLink}</p>
                                        <Field className="product-form__productLink" id="product-link"
                                               name="productLink"/>
                                    </div>
                                    <div>
                                        <label className="product-form__name " htmlFor="product-price">Price</label>
                                        <Field className="product-form__input" type="number" id="product-price"
                                               name="price"/>

                                        <label className="product-form__name " htmlFor="product-new-price">New
                                            price</label>
                                        <Field className="product-form__input" type="number" id="product-new-price"
                                               name="newPrice"/>
                                        {touched.price && errors.price ? <p>Enter the number!</p> : null}
                                    </div>
                                    <div>
                                        <label htmlFor="category ">Category</label>
                                        <Field className="product-form__input" as="select" id="category"
                                               name="category">
                                            <option value="bicycles">Bicycles</option>
                                            <option value="spare-parts">Spare-parts</option>
                                            <option value="accessories">Accessories</option>
                                        </Field>
                                    </div>

                                    <div>
                                        <label className="product-form__name " htmlFor="available">Available</label>
                                        <Field className="product-form__input" type="radio" name="available"
                                               value="Available" id="available"/>
                                        <label className="product-form__name" htmlFor="not-available">Not
                                            available</label>
                                        <Field className="product-form__input" type="radio" name="available"
                                               value="Not available" id="not-available"/>
                                    </div>
                                    <div>
                                        <label className="product-form__name " htmlFor="amount">Amount</label>
                                        <Field className="product-form__input" type="number" name="amount" id="amount"/>
                                    </div>
                                    <div>
                                        <label className="product-form__name " htmlFor="vendor-code">Vendor code</label>
                                        <Field className="product-form__input" id="vendor-code" name="vendorCode"/>
                                    </div>
                                </div>
                                <div>
                                    <label className="product-form__name " htmlFor="description">Description</label>
                                    <Field className="product-form__input" as="textarea" id="description"
                                           name="description"/>
                                    <label className="product-form__name " htmlFor="img">Images</label>
                                    <input type="file" name="img" id="img" multiple
                                           onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                               const reader = new FileReader();
                                               reader.onload = (e: ProgressEvent<FileReader>) => {
                                                   if (e.target) {
                                                       setFieldValue('img', e.target.result);
                                                   }
                                               }
                                               const target = e.target as HTMLInputElement;
                                               const files: File = (target.files as FileList)[0]
                                               if (files) {
                                                   reader.readAsDataURL(files);
                                               }
                                           }}
                                    />
                                    {values.img ? <img src={values.img} alt="#"/> : null}
                                </div>
                                <button type="submit">Post</button>
                            </Form>

                        )
                    }}
                </Formik>
            </div>
            <Product/>
        </div>

    )
}

export default AdminPanel;


