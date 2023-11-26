import { memo } from 'react';
import cls from './MainPage.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Counter } from '@/entities/Counter';
import { Text } from '@/shared/ui/Button/Text';
import { Input } from '@/shared/ui/Input';
import UserIcon from '@/shared/assets/icons/User.svg';

interface MainPageProps {
  className?: string;
}

export const MainPage = memo(function MainPage(props: MainPageProps) {
  const { className } = props;
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <Text text="This is MAIN PAGE" />
      <Counter />
      <Input placeholder="Username" LeftIcon={<UserIcon />} />
    </div>
  );
});
