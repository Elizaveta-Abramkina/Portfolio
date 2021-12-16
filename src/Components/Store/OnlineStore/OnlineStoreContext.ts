import React, {SetStateAction} from "react";


export interface IDataProduct {
    title: string
    price: number | null
    newPrice: number | null
    description: string
    available: number | null
    vendorCode: string
    category: string | null
    img: string
    linkAllProducts: string
    productLink: string
}

export const defaultDataProduct = {
    title: '',
    price: null,
    newPrice: null,
    description: '',
    available: null,
    vendorCode: '',
    category: null,
    img: '',
    linkAllProducts: '',
    productLink:''
}


// Тестовый массив даных
//  export const defaultDataProduct = {
//      title: 'Название',
//      price: 100,
//      newPrice: 90,
//      description: 'Описание товара',
//      available: 10,
//      vendorCode: 'арт-001',
//      category: null,
//      img: '',
//      linkAllProducts:'http://localhost:3000/store/products',
//      productLink:''
//  }

export const defaultValue = {
    context: [defaultDataProduct],
    setContext: () => {
    }
}

export interface IOnlineStoreContext {
    context: IDataProduct[]
    setContext: React.Dispatch<SetStateAction<IDataProduct[]>>
}

export const OnlineStoreContext = React.createContext <IOnlineStoreContext>(defaultValue)

