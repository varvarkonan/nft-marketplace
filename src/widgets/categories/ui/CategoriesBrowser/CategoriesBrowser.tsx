import { type ReactNode, memo, useEffect } from 'react';
import cls from './CategoriesBrowser.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import MusicNotes from '@/shared/assets/icons/MusicNotes.svg';
import PaintBrush from '@/shared/assets/icons/PaintBrush.svg';
import Camera from '@/shared/assets/icons/Camera.svg';
import VideoCamera from '@/shared/assets/icons/VideoCamera.svg';
import Basketball from '@/shared/assets/icons/Basketball.svg';
import Planet from '@/shared/assets/icons/Planet.svg';
import MagicWand from '@/shared/assets/icons/MagicWand.svg';
import Swatches from '@/shared/assets/icons/Swatches.svg';
import {
  $allCategories,
  getAllCategoriesFx,
  CategoryCard,
  type Category,
  loadAllCategoriesTriggered,
} from '@/entities/Category';
import { useUnit } from 'effector-react';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface CategoriesBrowserProps {
  className?: string;
}

export const CategoriesBrowser = memo(function CategoriesBrowser(props: CategoriesBrowserProps) {
  const { className } = props;
  const icons: Array<React.FunctionComponent<React.SVGAttributes<SVGElement>>> = [
    PaintBrush,
    Swatches,
    MusicNotes,
    Camera,
    VideoCamera,
    MagicWand,
    Basketball,
    Planet,
  ];
  const [categories, isLoading] = useUnit([$allCategories, getAllCategoriesFx.pending]);

  useEffect(() => {
    loadAllCategoriesTriggered();
  }, []);

  const renderCategoryCard = (
    category: Category,
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  ): ReactNode => {
    return <CategoryCard category={category} Svg={Svg} />;
  };

  if (isLoading) {
    return 'loading...';
  }

  return (
    <Stack direction="column" gap="50" className={classNames(cls.CategoriesBrowser, {}, [className])}>
      <Text text="Browse Categories" size="h3" />
      <Stack gap="30" className={cls.categoriesWrapper}>
        {...categories.map((category, index) => renderCategoryCard(category, icons[index]))}
      </Stack>
    </Stack>
  );
});
