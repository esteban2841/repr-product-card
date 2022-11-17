import React, { createContext, CSSProperties } from 'react'
import styles from "../styles/styles.module.css";

import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps, onChangeArgs, InitialValues, ProductCardsHandler } from '../interfaces/ProductInterfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props{
    product: Product
    // children?: ReactElement | ReactElement[]
    children?:( args:ProductCardsHandler)=> JSX.Element
    className?: string;
    style?: CSSProperties;
    onChange?:( args: onChangeArgs) => void;
    value?:number;
    initialValues?:InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues = {}}: Props) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues})

  return (
    <Provider value={{
        counter, 
        increaseBy,
        product,
        maxCount,
    }}>

        <div 
            className={`${styles.productCard} ${className}`}
            style={ style }
        >

        { children && children({
            count:counter,
            isMaxCountReached:isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
        }) }
    
        </div>
    </Provider>
  )
}


