const esModules = [
  'react-markdown',
  'vfile',
  'unist-.+',
  'unified',
  'bail',
  'is-plain-obj',
  'trough',
  'remark-.+',
  'mdast-util-.+',
  'micromark',
  'parse-entities',
  'character-entities',
  'property-information',
  'comma-separated-tokens',
  'hast-util-whitespace',
  'remark-.+',
  'space-separated-tokens',
].join('|')

module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/.git/',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    // Garbage performance due to this. SWC will fix this soon hopefully
    `/node_modules/(?!${esModules}).+\\.(js|jsx|mjs|cjs|ts|tsx)$`,
  ],
}
