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
  sep: string;
};

const AdCardList = ({ data, sep }: AdCardListPropsType) => {
  const [cat, setcat] = useState('Вся доска');
  return (
    <ul className={`${style.adsList} ${style.container}`}>
      {data.map((el) => {
        if (sep === 'Вся доска') {
          return (
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
          );
        }
        if (el.category === sep) {
          return (
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
          );
        }
        return null;
      })}
      {/* <button type="button" onClick={() => setcat('Одежда')}>
        button
      </button> */}
    </ul>
  );
};

export default AdCardList;
