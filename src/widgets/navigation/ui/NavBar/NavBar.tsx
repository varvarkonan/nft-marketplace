import { memo } from 'react';
import cls from './NavBar.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(function NavBar(props: NavBarProps) {
  const { className } = props;
  return <div className={classNames(cls.NavBar, {}, [className])}>NavBar</div>;
});
