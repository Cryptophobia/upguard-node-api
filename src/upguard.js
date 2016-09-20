function Upguard(config){
  return {
    nodes: require('./accessor.js')(config, 'node', 'nodes'),
    changeReport: require('./accessor.js')(config, 'change_report', 'change_report'),

    environments: require('./accessor.js')(config, 'environment', 'environments'),
    userFields: require('./accessor.js')(config, 'user_field', 'user_fields'),

    macros: require('./accessor.js')(config, 'macro', 'macros'),
    search: require('./accessor.js')(config, 'search', 'search')
  };
}

module.exports = Upguard