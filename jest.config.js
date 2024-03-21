const { default: setup, project } = require('@tokopedia/skipper-jest');

module.exports = setup({
  projects: [
    project({
      displayName: 'CLIENT',
      testEnvironment: 'jsdom',
      testMatch: [
        '<rootDir>/src/**/__tests__/**/*.(test|spec).(js|ts|tsx)',
        '!<rootDir>/src/(server|config)/**/__tests__/**/*.(test|spec).(js|ts|tsx)',
      ],
    }),
    project({
      displayName: 'SERVER',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/(server|config)/**/__tests__/**/*.(test|spec).(js|ts|tsx)'],
    }),
  ],
});
