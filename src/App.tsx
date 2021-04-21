import React from 'react';
import { useIntl } from 'react-intl';

function App() {
  const intl = useIntl();
  return <div>{intl.formatMessage({ id: 'app.content' })}</div>;
}

export default App;
