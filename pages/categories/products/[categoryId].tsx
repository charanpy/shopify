import React, { useState, useEffect } from 'react';
import { getCategoryProduct, getProductByCategoryId } from 'lib/product';
import { getCategory } from 'lib/category';
import { dataProps } from 'lib/page-props';
import ProductContainer from '@/components/product/products-list/products.container';
import Seo from '@/components/seo/Seo';
import { capitalize } from '@/utils/capitalize';
import dbConnect from '@/utils/db';

const Products = ({ product = [] }) => {
  const [title, setTitle] = useState('Products');
  useEffect(() => {
    const title = localStorage.getItem('shopifyCategory') || 'Products';
    setTitle(capitalize(title));
  }, []);
  console.log(product, 'dsdsj');

  return (
    <>
      <Seo
        title={title}
        url={`/products/${product?.length ? product[0].category : 'product'}`}
      />
      <ProductContainer products={product} />
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = [
    { params: { categoryId: '60cc110911ff72b0ada884b8' } },
    { params: { categoryId: '60cc7d9ce6df3d3c6008b707' } },
    { params: { categoryId: '60cc7d9ce6df3d3c6008b708' } },
    { params: { categoryId: '60cc7d9ce6df3d3c6008b709' } },
    { params: { categoryId: '60cc7d9ce6df3d3c6008b70b' } },
    { params: { categoryId: '60cc7d9ce6df3d3c6008b70c' } },
  ];

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  console.log(params, 12);
  await dbConnect();
  const product = await getCategoryProduct(params.categoryId);

  return dataProps('product', JSON.parse(JSON.stringify(product)));
};

export default Products;
