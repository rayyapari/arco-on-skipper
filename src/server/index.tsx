import app from './app';

let currentApp = app;
currentApp.start();

if (module.hot) {
  module.hot.accept(['./app', '../routes'], async () => {
    await currentApp.close();
    currentApp = require('./app').default;
    await currentApp.start();
  });
}

export default app;
