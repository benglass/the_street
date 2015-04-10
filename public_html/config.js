System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "d3": "github:mbostock/d3@3.5.5",
    "jquery": "github:components/jquery@2.1.3",
    "lodash": "npm:lodash@3.6.0",
    "techanjs": "github:andredumas/techan.js@0.5.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.87",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.87",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:lodash@3.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

