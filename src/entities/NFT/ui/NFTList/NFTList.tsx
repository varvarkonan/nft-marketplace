import { memo } from 'react';
import cls from './NFTList.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface NFTListProps {
  className?: string;
}

export const NFTList = memo(function NFTList(props: NFTListProps) {
  const { className } = props;
  return <div className={classNames(cls.NFTList, {}, [className])}>NFTList</div>;
});
