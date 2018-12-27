#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Bryan Hughes, Ph.D. /'),
  pronouns: chalk.green(' http://pronoun.is/he'),
  handle: chalk.cyan('nebrius'),
  work: chalk.white('Senior Cloud Developer Advocate at Microsoft'),
  twitter: chalk.cyan('https://twitter.com/nebrius'),
  github: chalk.cyan('https://github.com/nebrius'),
  linkedin: chalk.cyan('https://linkedin.com/in/nebrius'),
  web: chalk.cyan('https://nebri.us/'),
  email: chalk.cyan('bryan@nebri.us'),
  npx: chalk.white('npx nebrius'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelEmail: chalk.white.bold('     email:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const subheading = `${data.pronouns}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const emailing = `${data.labelEmail}  ${data.email}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + subheading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + emailing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
