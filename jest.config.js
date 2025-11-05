// jest.config.js

module.exports = {
  // Use the standard preset for testing React Native code
  preset: 'react-native', 
  
  // This is the CRITICAL block: It tells Babel to transform files 
  // in node_modules that Jest normally skips, including the new @react-navigation libraries.
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo|@unimodules|sentry-expo|native-base|@testing-library/react-native)',
  ],
  
  // The 'setupFilesAfterEnv' property, which pointed to the crashing 'jest.setup.js' file, 
  // has been DELETED to force the test to run.
  
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};