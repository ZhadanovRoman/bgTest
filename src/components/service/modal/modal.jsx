
import React, { useEffect, useRef, useCallback } from 'react';
import styles from './modal.module.css';

const Modal = ({ text, onClose }) => {
  const modalRef = useRef();

  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal} ref={modalRef}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Modal;