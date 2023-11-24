import { memo } from 'react';
import cls from './AboutPage.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { mainRoute } from '@/pages/main';
import { Link } from 'atomic-router-react';
import { Counter } from '@/entities/Counter';

interface AboutPageProps {
  className?: string;
}

export const AboutPage = memo(function AboutPage(props: AboutPageProps) {
  const { className } = props;
  return (
    <div className={classNames(cls.AboutPage, {}, [className])}>
      <Link to={mainRoute}>TO MAIN PAGE</Link>
      <Counter />
    </div>
  );
});
