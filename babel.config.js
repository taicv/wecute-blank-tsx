module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-paper/babel','@babel/plugin-transform-export-namespace-from','react-native-reanimated/plugin'],
    env: {
      production: {
        plugins: ['react-native-paper/babel','@babel/plugin-transform-export-namespace-from','react-native-reanimated/plugin'],
      },
    },
  };
};
