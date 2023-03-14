module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run lint:types',
  '*.{json,yaml}': ['prettier --write'],
};
