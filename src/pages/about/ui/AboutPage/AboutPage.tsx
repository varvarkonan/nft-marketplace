import { memo } from 'react';
import cls from './AboutPage.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Counter } from '@/entities/Counter';
import { Text } from '@/shared/ui/Button/Text';

interface AboutPageProps {
  className?: string;
}

export const AboutPage = memo(function AboutPage(props: AboutPageProps) {
  const { className } = props;
  return (
    <div className={classNames(cls.AboutPage, {}, [className])}>
      <Text text="This is ABOUT PAGE" />
      <Counter />
    </div>
  );
});
