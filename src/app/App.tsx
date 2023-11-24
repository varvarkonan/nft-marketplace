import { type ReactNode, useState } from 'react';
import cls from './App.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import Eye from '@/shared/assets/icons/RocketLaunch.svg';

export const App = (): ReactNode => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>Hello</p>
      <input type="text" value={value} />
      <Button Icon={Eye} size="primary" variant="filled" className={cls.testcls}>
        Click me
      </Button>
      <Button Icon={Eye} size="secondary" variant="filled" className={cls.testcls}>
        Click me
      </Button>
      <Button Icon={Eye} size="tertiary" variant="filled" className={cls.testcls}>
        Click me
      </Button>
      <Button Icon={Eye} size="primary" variant="outlined" className={cls.testcls}>
        Click me
      </Button>
      <Button Icon={Eye} size="secondary" variant="outlined" className={cls.testcls}>
        Click me
      </Button>
      <Button Icon={Eye} size="tertiary" variant="outlined" className={cls.testcls}>
        Click me
      </Button>
    </div>
  );
};
