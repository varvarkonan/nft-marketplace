import { memo } from 'react';
import cls from './CategoryCard.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { type Category } from '../../model/types';
import { Stack } from '@/shared/ui/Stack';
import { AppImage } from '@/shared/ui/AppImage';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import TestIcon from '@/shared/assets/icons/Camera.svg';

interface CategoryCardProps {
  className?: string;
  category: Category;
}

export const CategoryCard = memo(function CategoryCard(props: CategoryCardProps) {
  const { className, category } = props;
  return (
    <Stack direction="column" className={classNames(cls.CategoryCard, {}, [className])}>
      <div>
        <AppImage src={category.img} className={cls.img} />
        <Stack justify="center" align="center" className={cls.iconWrapper}>
          <Icon Svg={TestIcon} width={100} height={100} />
        </Stack>
      </div>
      <Stack className={cls.nameWrapper}>
        <Text text={category.name} size="h5" />
      </Stack>
    </Stack>
  );
});
