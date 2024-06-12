import React from "react";
import { apiSlice } from "../../api/apiSlice";
import styles from './service.module.css';
import Card from "./card/card";

import strategyIcon from '../../assets/icons/1.png';
import analysisIcon from '../../assets/icons/2.png';
import socialNetworksIcon from '../../assets/icons/3.png';
import developmentIcon from '../../assets/icons/4.png';
import contentIcon from '../../assets/icons/5.png';
import uxIcon from '../../assets/icons/6.png';
import targetIcon from '../../assets/icons/7.png';
import productIcon from '../../assets/icons/8.png';


const Service = ({ limit = 8 }) => {
    const { data: posts, error, isLoading } = apiSlice.useGetPostsQuery(limit);

    const iconsSrc = [
        strategyIcon,
        analysisIcon,
        socialNetworksIcon,
        developmentIcon,
        contentIcon,
        uxIcon,
        targetIcon,
        productIcon];

    const cardTitle = [
        'стратегия',
        'анализ',
        'соц сети',
        'развитие',
        'контент',
        'дизайн ux',
        'таргетированная реклама',
        'продукт',
    ]

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <section className={styles.service}>
            <div className={styles.service__container}>
                <div className={styles.service__descr}>
                    <h2 className={styles.service__title}>сервис</h2>
                    <p className={styles.service__firstP}>от идеи до незабываемого и
                        измеримого результата.</p>
                    <span className={styles.service__span_line}></span>
                    <p className={styles.service__secondP}>интеграция безупречного производства,
                        передовых технологий и тщательного измерения производительности</p>
                </div>

                <ul className={styles.service__card_list}>
                    {posts ?
                        posts.map((post, index) => (
                            <Card title={cardTitle[index]} text={post.body} descr={post.title} key={post.id} src={iconsSrc[index]} />
                        )) : error
                    }
                </ul>
            </div>
        </section>
    )
}

export default Service;