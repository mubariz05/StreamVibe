import { useState, useCallback } from 'react';

export function useAuthModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('login'); // 'login' | 'register'

    const openLogin = useCallback(() => {
        setModalType('login');
        setIsOpen(true);
    }, []);

    const openRegister = useCallback(() => {
        setModalType('register');
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    return { isOpen, modalType, openLogin, openRegister, closeModal };
}