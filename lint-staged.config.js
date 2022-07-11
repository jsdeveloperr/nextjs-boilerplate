module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
    '**/*.ts?(x)': () => 'yarn check',
    '*.+(js|jsx|ts|tsx|json|css|md|mdx)': ['prettier --write'],
  };
