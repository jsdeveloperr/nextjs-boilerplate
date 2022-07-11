module.exports = {
    description: 'Creates a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: '../components/{{pascalCase name}}',
        templateFiles: 'templates/components/*.hbs',
        base: 'templates/components',
      },
    ]
  }