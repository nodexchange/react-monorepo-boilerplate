module.exports = {
  automock: false,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '../mocks/fileMock.js',
    '\\.(css|less)$': '../mocks/styleMock.js',
  },
  coverageDirectory: '.jest-coverage',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.jsx?$': '../node_modules/babel-jest',
    '^.+\\.js?$': '../node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
  testRegex: '.*.runner.js',
  verbose: true,
};
