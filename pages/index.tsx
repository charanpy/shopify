import Container from '@/layout/Container';
import { CategoryTypes } from '@/types/Category.type';
import { getCategory } from 'lib/category';
import { homePageRecommendation } from 'lib/product';
import RecommendationContainer from '@/components/recommendation/recommendation.container';
import CategoryListContainer from '@/components/list-category-name/category-list.container';

const Home = (props) => {
  const { categories, ...recommendationProducts } = props;
  console.log(recommendationProducts);

  return (
    <Container center={false}>
      <section className='mt-20 mr'>
        <CategoryListContainer categories={categories} />
        <RecommendationContainer product={recommendationProducts} />
      </section>
    </Container>
  );
};

export const getStaticProps = async () => {
  const categories: CategoryTypes[] | boolean = await getCategory();
  const { men, women, electronics, games } = await homePageRecommendation();
  return {
    props: {
      categories,
      men,
      women,
      electronics,
      games,
    },
  };
};

export default Home;
