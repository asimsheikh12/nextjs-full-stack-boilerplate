import dynamic from 'next/dynamic';

import { Main, Meta } from '@/layouts';

const HomeComponent = dynamic(() => import('../containers/Home'), {
  ssr: true,
});

interface IProps {}

const Index: React.FC<IProps> = (): JSX.Element => {
  return (
    <Main meta={<Meta title="Home Page" description="Home Page Description" />}>
      <HomeComponent />
    </Main>
  );
};

export default Index;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
