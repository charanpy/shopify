import React from 'react';
import Seo from '@/components/seo/Seo';
import { notFound } from 'lib/page-props';
import { searchProduct } from 'lib/product';
import ProductsContainer from '@/components/product/products-list/products.container';
import NotFound from '@/components/not-found/not-found';
import { capitalize } from '@/utils/capitalize';

const SearchProduct = ({ products, searchTerm }) => {
  return (
    <>
      <Seo title={capitalize(searchTerm)} url={`/${searchTerm}`} />
      {!products.length && <NotFound />}
      <ProductsContainer products={products} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const searchTerm = context.query.search;
  if (!searchTerm) return notFound();
  const products = await searchProduct(searchTerm);
  return {
    props: {
      products,
      searchTerm,
    },
  };
};

export default SearchProduct;
