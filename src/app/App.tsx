import { type ReactNode, useState } from 'react';
import cls from './App.module.scss';
import { Button } from '@/shared/ui/Button/Button';

export const App = (): ReactNode => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>Hello</p>
      <input type="text" value={value} />
      <Button
        onClick={() => {
          setValue(value + 1);
        }}
        className={cls.testcls}
      >
        Click me
      </Button>
    </div>
  );
};
