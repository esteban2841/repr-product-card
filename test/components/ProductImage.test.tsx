import React from 'react';
import renderer from "react-test-renderer"
import { ProductImage , ProductCard } from '../../src/components';
import { product1 } from './data/products';



describe('ProductImage', () => {
  test('should show our component with personalized image', () => {
    const wrapper = renderer.create(
        <ProductImage img='https://hola.jpg'/>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  });
  test("should show the component with product's image on it",()=>{
    const wrapper = renderer.create(
        <ProductCard product={product1}>
            {
                ()=><ProductImage />
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
});


