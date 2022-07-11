module.exports = {
  description: 'Create a new page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the route of the page?',
    },
  ],
  actions: [
    {
      type: 'addMany',
      destination: '../pages/{{kebabCase name}}',
      templateFiles: 'templates/pages/*.tsx.hbs',
      base: 'templates/pages',
    },
    {
      type: 'add',
      path: '../styles/pages/{{pascalCase name}}.module.scss',
      templateFile: 'templates/pages/style.ts.hbs',
    },
  ],
}