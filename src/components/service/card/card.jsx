import React, { useState } from "react";
import styles from './card.module.css';
import Modal from "../modal/modal";

const Card = ({ src, text, title, descr }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.card} onClick={handleCardClick}>
            <img src={src} alt={src} className={styles.card__img} />
            <h3 className={styles.card__title}>{title}</h3>
            <span className={styles.card__descr}>{descr}</span>
            <button className={styles.card__linkBtn} onClick={handleCardClick}>
                подробнее
            </button>
            {isModalOpen && <Modal text={text} onClose={closeModal} />}
        </div>
    );
}

export default Card;