import { memo } from 'react';
import cls from './AboutPage.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Counter } from '@/entities/Counter';

interface AboutPageProps {
  className?: string;
}

export const AboutPage = memo(function AboutPage(props: AboutPageProps) {
  const { className } = props;
  return (
    <div className={classNames(cls.AboutPage, {}, [className])}>
      <p>This is ABOUT PAGE</p>
      <Counter />
    </div>
  );
});
