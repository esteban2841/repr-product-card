# repr-product-cart

This is a package proving how to deploy in NPM a project

## Esteban Puentes Roldan

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "repr-product-cart"
```



```
<ProductCard 
          product={product}
          initialValues={{
            count:4,
            maxCount:10
          }}
        >
          {
            ( {reset, isMaxCountReached, increaseBy,count} )=>{
              return (

              <>
                <ProductImage />
                <ProductTitle  />
                <ProductButtons />

              </> 
              )
            }
            
          }
</ProductCard>
```