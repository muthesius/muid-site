'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'muid',
    environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      },
    },
    MOIN: {
      host: "http://helloworld.local:3000"
      // host: "https://moin.muid.sh"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  // disable mirage
  ENV['ember-cli-mirage'] = {
    enabled: false
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    ENV.APP.autoboot = false;
    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    // Configuration for staging deployment
    ENV.rootURL = '/muid-moin';
    ENV.locationType = 'hash';
    ENV.MOIN.host = "https://moin.muid.sh";
  }

  if (environment === 'production') {
    ENV.MOIN.host = "https://moin.muid.sh";
    // ENV.locationType = 'auto';
    // ENV.rootURL = '/muid/';
    // ENV.rootURL = '/muid-site';
    // ENV.rootURL = '/muid-site';
    // ENV.locationType = 'hash';
  }

  return ENV;
};
