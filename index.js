var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types');
var configLoader = require('commitizen').configLoader;
var config = configLoader.load() || {};
var options = {
  types: conventionalCommitTypes.types,
  defaultType: config.defaultType,
  defaultScope: config.defaultScope,
  defaultSubject: config.defaultSubject,
  defaultBody: config.defaultBody,
  disableScopeLowerCase: config.disableScopeLowerCase,
  disableSubjectLowerCase: config.disableSubjectLowerCase,
  maxHeaderWidth: 100,
  maxLineWidth: 100
};

module.exports = engine(options);
