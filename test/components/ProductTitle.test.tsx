import React from 'react';
import renderer from "react-test-renderer"
import { ProductTitle , ProductCard } from '../../src/components';
import { product1 } from './data/products';



describe('ProductTitle', () => {
  test('should show our component with personalized title', () => {
    const wrapper = renderer.create(
        <ProductTitle title='Product'className='custom-classname'/>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  });
  test("should show the component with product's name on it",()=>{
    const wrapper = renderer.create(
        <ProductCard product={product1}>
            {
                ()=><ProductTitle title='holis'/>
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
});


