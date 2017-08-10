// tslint:disable no-require-imports no-var-requires
import 'core-js/shim';

require('zone.js/dist/zone');

if (process.env.NODE_ENV !== 'production') {
  Error.stackTraceLimit = Infinity;

  require('zone.js/dist/long-stack-trace-zone');
}
