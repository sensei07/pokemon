import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    return (
        <header className={classNames(cls.Navbar, {}, [className])} />
    );
});
