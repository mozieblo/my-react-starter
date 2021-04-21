import React, { FC } from 'react';
import { useIntl } from 'react-intl';

const App: FC = () => {
  const intl = useIntl();
  return <div>{intl.formatMessage({ id: 'app.content' })}</div>;
};

export default App;
