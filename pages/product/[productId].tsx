import React from 'react';
import { GetServerSidePropsContext } from 'next';
import ProductComponent from '@/components/product/product';
import { getProductById } from 'lib/product';
import { notFound } from 'lib/page-props';
import Seo from '@/components/seo/Seo';

const Product = ({ product }) => {
  return (
    <>
      <Seo
        title={product?.name || 'Shopify'}
        url={`/product/${product?._id}`}
        description={product?.description || product?.name}
      />
      <ProductComponent product={product} />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const {
    query: { productId },
  } = context;

  if (!productId) {
    return notFound();
  }
  const product = await getProductById(productId as string);
  console.log('hey');

  return product;
};

export default Product;
