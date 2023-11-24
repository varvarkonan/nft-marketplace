import { memo } from 'react';
import cls from './Counter.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { useStore } from 'effector-react';
import { $counter, $counterCombined, $counterText, minus, plus } from '../../model';

interface CounterProps {
  className?: string;
}

export const Counter = memo(function Counter(props: CounterProps) {
  const { className } = props;
  const counter = useStore($counter);
  const counterText = useStore($counterText);
  const counterCombined = useStore($counterCombined);

  return (
    <div className={classNames(cls.Counter, {}, [className])}>
      <p>counter: {counter}</p>
      <p>counterText: {counterText}</p>
      <p>
        counterCombined: {counterCombined.counter}, {counterCombined.text}
      </p>
      <Button onClick={plus} size="tertiary" variant="filled">
        Increment
      </Button>
      <Button onClick={minus} size="tertiary" variant="filled">
        Decrement
      </Button>
    </div>
  );
});
