// babel.config.js

module.exports = function(api) {
  api.cache(true);
  
  // Use a conditional check to apply different presets during testing
  const presets = ['babel-preset-expo'];

  if (process.env.NODE_ENV === 'test') {
    // When Jest is running (i.e., npm test), use the Jest preset
    presets.push('babel-preset-jest');
  }

  return {
    presets,
  };
};