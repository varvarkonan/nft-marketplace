import { memo } from 'react';
import cls from './MainPage.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Counter } from '@/entities/Counter';
import { Text } from '@/shared/ui/Button/Text';

interface MainPageProps {
  className?: string;
}

export const MainPage = memo(function MainPage(props: MainPageProps) {
  const { className } = props;
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <Text text="This is MAIN PAGE" />
      <Counter />
    </div>
  );
});
