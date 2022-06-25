import React, { useState } from 'react';
import AdCard from './AdCard/AdCard';
import style from './AdCardList.module.scss';

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

const AdCardList = ({ data }: AdCardListPropsType) => {
  const [cat, setcat] = useState('Вся доска');
  return (
    <ul className={`${style.adsList} ${style.container}`}>
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
};

export default AdCardList;
