import { memo } from 'react';
import cls from './CategoryCard.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { type Category } from '../../model/types';
import { Stack } from '@/shared/ui/Stack';
import { AppImage } from '@/shared/ui/AppImage';
import { Text } from '@/shared/ui/Text';

interface CategoryCardProps {
  className?: string;
  category: Category;
}

export const CategoryCard = memo(function CategoryCard(props: CategoryCardProps) {
  const { className, category } = props;
  return (
    <Stack direction="column" className={classNames(cls.CategoryCard, {}, [className])}>
      <div>
        <AppImage src={category.img} />
      </div>
      <Stack>
        <Text text={category.name} />
      </Stack>
    </Stack>
  );
});
