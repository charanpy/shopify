import React, { FC } from 'react';
import Head from 'next/head';

interface SeoProps {
  title: string;
  description?: string;
  url: string;
}

const descriptionDefault =
  'Shopify, Online Shopping, online shopping india, india shopping online,buy online, buy mobiles online, buy books online, buy ebooks, computers, laptop, toys, watches, fashion jewellery, home, kitchen, small appliances, beauty, Sports, Fitness & Outdoors';

const Seo: FC<SeoProps> = ({ title, description, url }) => {
  return (
    <Head>
      <title>
        {url === '/' ? 'Shopify' : title} {url !== '/' ? '- Shopify' : ''}
      </title>
      <meta name='description' content={descriptionDefault || description} />
      <meta property='og:title' content={`${title} -Shopify`} />
      <meta property='og:description' content={`Learn more about ${title}`} />
      <meta property='og:url' content={`${process.env.URL}${url}`} />
      <meta property='og:type' content='website' />
      <meta
        name='keywords'
        content='Shopify.com, Shopify, Online Shopping, online shopping india, india shopping online, ebooks, computers, laptop, toys, watches, fashion jewellery, home, kitchen, small appliances, beauty, Sports, Fitness & Outdoors'
      />
    </Head>
  );
};

export default Seo;
