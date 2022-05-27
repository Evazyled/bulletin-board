import React from 'react';
import AdCard from './AdCard/AdCard';

type AdCardListPropsType = {
  data: {
    id: number;
    image: string;
    category: string;
    title: string;
    description: string;
    price: string;
    date: string;
    views: number;
  }[];
};

const AdCardList = ({ data }: AdCardListPropsType) => (
  <ul>
    {data.map((el) => (
      <AdCard
        key={el.id}
        id={el.id}
        image={el.image}
        category={el.category}
        title={el.title}
        description={el.description}
        price={el.price}
        date={el.date}
        views={el.views}
      />
    ))}
  </ul>
);

export default AdCardList;
