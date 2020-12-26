import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

const App: React.FC = () => {
  return (
    <div>
      <Button> hello </Button>
      <Button disabled> disabled </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com">Baidu</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com" disabled>disabled Baidu</Button>
    </div>
  );
}

export default App;
