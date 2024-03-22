import 'core-js/actual/structured-clone';
import 'core-js/actual/string/replace-all';
import '@patternfly/patternfly/patternfly.min.css';
import '@patternfly/patternfly/patternfly-addons.css';
import 'cockpit-lib/cockpit-dark-theme';
import '@shared/styles/main.scss';

import App from '@app/App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
