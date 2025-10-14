// import NewsDetailComponent from '@/components/news-detail/news-detail';
// import { NextPage } from 'next';

// const NewsDetail: NextPage<{ params: { slug: string } }> = ({ params }) => {
//   const { slug } = params;
//   const id = slug.split('.')[1];

//   return <NewsDetailComponent id={id} />;
// };

// export default NewsDetail;
import NewsDetailComponent from '@/components/news-detail/news-detail';

interface Props {
  params: { slug: string };
}

export default function NewsDetail({ params }: Props) {
  return <NewsDetailComponent slug={params.slug} />;
}
