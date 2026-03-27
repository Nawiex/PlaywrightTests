module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'step-definitions/**/*.ts',
      'support/hooks.ts'
    ],
    paths: ['features/**/*.feature'],
    publishQuiet: true
  }
}