'use strict'
const YeomanGenerator = require('yeoman-generator')

class ContributingGenerator extends YeomanGenerator {
  prompting () {
    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }]

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing () {
    this.fs.copy(
      this.templatePath('_CONTRIBUTING.md'),
      this.destinationPath('CONTRIBUTING.md')
    )
  }
}

module.exports = ContributingGenerator
