import { memo } from 'react';
import cls from './NavBar.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Link } from 'atomic-router-react';
import { aboutRoute } from '@/pages/about';
import { mainRoute } from '@/pages/main';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(function NavBar(props: NavBarProps) {
  const { className } = props;
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Link to={mainRoute}>Main Page</Link>
      <Link to={aboutRoute}>About Page</Link>
    </div>
  );
});
