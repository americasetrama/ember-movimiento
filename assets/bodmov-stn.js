"use strict";



define('bodmov-stn/app', ['exports', 'bodmov-stn/resolver', 'ember-load-initializers', 'bodmov-stn/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('bodmov-stn/components/body-movin', ['exports', 'ember-cli-bodymovin/components/body-movin'], function (exports, _bodyMovin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bodyMovin.default;
    }
  });
});
define('bodmov-stn/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('bodmov-stn/helpers/app-version', ['exports', 'bodmov-stn/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('bodmov-stn/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('bodmov-stn/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('bodmov-stn/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'bodmov-stn/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('bodmov-stn/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('bodmov-stn/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('bodmov-stn/initializers/export-application-global', ['exports', 'bodmov-stn/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("bodmov-stn/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('bodmov-stn/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('bodmov-stn/router', ['exports', 'bodmov-stn/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('bodmov-stn/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("bodmov-stn/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ir1RkkJm", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"logo-intro\"],[8],[0,\"\\n\"],[6,\"img\"],[10,\"width\",\"250px\"],[10,\"src\",\"http://santuan.github.io/stn/img/trinomia.svg\"],[10,\"alt\",\"logo santuan\"],[10,\"class\",\"logo-santuan\"],[8],[9],[0,\"\\n\"],[1,[26,\"body-movin\",null,[[\"class\",\"clickAction\",\"loop\",\"autoplay\",\"path\",\"external\"],[\"santuan-logo-movin\",\"reverse\",false,true,\"https://raw.githubusercontent.com/americasetrama/ember-movimiento/gh-pages/animations/mov-santuan.json\",true]]],false],[0,\"\\n\"],[6,\"h2\"],[8],[0,\"{{desarrollador gráfico}}\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"a\"],[10,\"href\",\"https://santuan.github.io/web/\"],[10,\"target\",\"_blank\"],[8],[0,\"\\n\"],[1,[26,\"body-movin\",null,[[\"class\",\"clickAction\",\"loop\",\"autoplay\",\"path\",\"external\"],[\"pop-notification\",\"reverse\",false,true,\"https://raw.githubusercontent.com/americasetrama/ember-movimiento/gh-pages/animations/pop-up-notification-6.json\",true]]],false],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[26,\"body-movin\",null,[[\"class\",\"loop\",\"autoplay\",\"path\",\"external\"],[\"shape-dance\",true,true,\"https://raw.githubusercontent.com/americasetrama/ember-movimiento/gh-pages/animations/shape-dance-3.json\",true]]],false],[0,\"\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\\n\\n\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "bodmov-stn/templates/application.hbs" } });
});


define('bodmov-stn/config/environment', [], function() {
  var prefix = 'bodmov-stn';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("bodmov-stn/app")["default"].create({"name":"bodmov-stn","version":"0.0.0"});
}
//# sourceMappingURL=bodmov-stn.map
