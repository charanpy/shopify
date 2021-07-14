import Container from '@/layout/Container';
import { CategoryTypes } from '@/types/Category.type';
import { getCategories, getCategory } from 'lib/category';
import { homePage, homePageRecommendation } from 'lib/product';
import RecommendationContainer from '@/components/recommendation/recommendation.container';
import CategoryListContainer from '@/components/list-category-name/category-list.container';
import Seo from '@/components/seo/Seo';
import SearchProduct from '@/components/search-product/search-product';

const Home = (props) => {
  const { categories, ...recommendationProducts } = props;

  return (
    <>
      <Seo title='Home' url='/' />
      <Container center={false} content={false}>
        <SearchProduct />
        <CategoryListContainer categories={categories} />
        <RecommendationContainer product={recommendationProducts} />
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const categories = await getCategories();
  const { men, women, electronics, games } = await homePage();

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
      men: JSON.parse(JSON.stringify(men)),
      women: JSON.parse(JSON.stringify(women)),
      electronics: JSON.parse(JSON.stringify(electronics)),
      games: JSON.parse(JSON.stringify(games)),
    },
  };
};

export default Home;
