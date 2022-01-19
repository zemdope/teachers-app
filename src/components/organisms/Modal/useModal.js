import React, { useState } from 'react';
import Modal from './Modal';

const useModal = (initialValue = false) => {
  const [isOpen, setModalState] = useState(initialValue);

  const handleCloseModal = () => setModalState(false);
  const handleOpenModal = () => setModalState(true);
  return {
    isOpen,
    handleOpenModal,
    handleCloseModal
  };
};

export default useModal;
