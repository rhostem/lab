"bundle";
System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js", ["npm:core-js@1.2.6/library/modules/$.to-iobject.js", "npm:core-js@1.2.6/library/modules/$.object-sap.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject.js');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap.js')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js", ["npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/helpers/get.js", ["npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$getOwnPropertyDescriptor = $__require('npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js')["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/create.js", ["npm:core-js@1.2.6/library/modules/$.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/create.js", ["npm:core-js@1.2.6/library/fn/object/create.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/create.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js", ["npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.set-proto.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js');
  $export($export.S, 'Object', {setPrototypeOf: $__require('npm:core-js@1.2.6/library/modules/$.set-proto.js').set});
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/set-prototype-of.js", ["npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').Object.setPrototypeOf;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js", ["npm:core-js@1.2.6/library/fn/object/set-prototype-of.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/set-prototype-of.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/helpers/inherits.js", ["npm:babel-runtime@5.8.38/core-js/object/create.js", "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$create = $__require('npm:babel-runtime@5.8.38/core-js/object/create.js')["default"];
  var _Object$setPrototypeOf = $__require('npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js')["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.object-sap.js", ["npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.core.js", "npm:core-js@1.2.6/library/modules/$.fails.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js'),
      core = $__require('npm:core-js@1.2.6/library/modules/$.core.js'),
      fails = $__require('npm:core-js@1.2.6/library/modules/$.fails.js');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.keys.js", ["npm:core-js@1.2.6/library/modules/$.to-object.js", "npm:core-js@1.2.6/library/modules/$.object-sap.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object.js');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap.js')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/keys.js", ["npm:core-js@1.2.6/library/modules/es6.object.keys.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/es6.object.keys.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').Object.keys;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/keys.js", ["npm:core-js@1.2.6/library/fn/object/keys.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/keys.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-proto.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.an-object.js", "npm:core-js@1.2.6/library/modules/$.ctx.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getDesc = $__require('npm:core-js@1.2.6/library/modules/$.js').getDesc,
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object.js');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.same-value.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.species-constructor.js", ["npm:core-js@1.2.6/library/modules/$.an-object.js", "npm:core-js@1.2.6/library/modules/$.a-function.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object.js'),
      aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function.js'),
      SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.invoke.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.html.js", ["npm:core-js@1.2.6/library/modules/$.global.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.global.js').document && document.documentElement;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.dom-create.js", ["npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.global.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
      document = $__require('npm:core-js@1.2.6/library/modules/$.global.js').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.task.js", ["npm:core-js@1.2.6/library/modules/$.ctx.js", "npm:core-js@1.2.6/library/modules/$.invoke.js", "npm:core-js@1.2.6/library/modules/$.html.js", "npm:core-js@1.2.6/library/modules/$.dom-create.js", "npm:core-js@1.2.6/library/modules/$.global.js", "npm:core-js@1.2.6/library/modules/$.cof.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js'),
        invoke = $__require('npm:core-js@1.2.6/library/modules/$.invoke.js'),
        html = $__require('npm:core-js@1.2.6/library/modules/$.html.js'),
        cel = $__require('npm:core-js@1.2.6/library/modules/$.dom-create.js'),
        global = $__require('npm:core-js@1.2.6/library/modules/$.global.js'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('npm:core-js@1.2.6/library/modules/$.cof.js')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.microtask.js", ["npm:core-js@1.2.6/library/modules/$.global.js", "npm:core-js@1.2.6/library/modules/$.task.js", "npm:core-js@1.2.6/library/modules/$.cof.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var global = $__require('npm:core-js@1.2.6/library/modules/$.global.js'),
        macrotask = $__require('npm:core-js@1.2.6/library/modules/$.task.js').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('npm:core-js@1.2.6/library/modules/$.cof.js')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-detect.js", ["npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.promise.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.library.js", "npm:core-js@1.2.6/library/modules/$.global.js", "npm:core-js@1.2.6/library/modules/$.ctx.js", "npm:core-js@1.2.6/library/modules/$.classof.js", "npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.an-object.js", "npm:core-js@1.2.6/library/modules/$.a-function.js", "npm:core-js@1.2.6/library/modules/$.strict-new.js", "npm:core-js@1.2.6/library/modules/$.for-of.js", "npm:core-js@1.2.6/library/modules/$.set-proto.js", "npm:core-js@1.2.6/library/modules/$.same-value.js", "npm:core-js@1.2.6/library/modules/$.wks.js", "npm:core-js@1.2.6/library/modules/$.species-constructor.js", "npm:core-js@1.2.6/library/modules/$.microtask.js", "npm:core-js@1.2.6/library/modules/$.descriptors.js", "npm:core-js@1.2.6/library/modules/$.redefine-all.js", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js", "npm:core-js@1.2.6/library/modules/$.set-species.js", "npm:core-js@1.2.6/library/modules/$.core.js", "npm:core-js@1.2.6/library/modules/$.iter-detect.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
        LIBRARY = $__require('npm:core-js@1.2.6/library/modules/$.library.js'),
        global = $__require('npm:core-js@1.2.6/library/modules/$.global.js'),
        ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js'),
        classof = $__require('npm:core-js@1.2.6/library/modules/$.classof.js'),
        $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js'),
        isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
        anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object.js'),
        aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function.js'),
        strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new.js'),
        forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of.js'),
        setProto = $__require('npm:core-js@1.2.6/library/modules/$.set-proto.js').set,
        same = $__require('npm:core-js@1.2.6/library/modules/$.same-value.js'),
        SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('species'),
        speciesConstructor = $__require('npm:core-js@1.2.6/library/modules/$.species-constructor.js'),
        asap = $__require('npm:core-js@1.2.6/library/modules/$.microtask.js'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('npm:core-js@1.2.6/library/modules/$.descriptors.js')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('npm:core-js@1.2.6/library/modules/$.redefine-all.js')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js')(P, PROMISE);
    $__require('npm:core-js@1.2.6/library/modules/$.set-species.js')(PROMISE);
    Wrapper = $__require('npm:core-js@1.2.6/library/modules/$.core.js')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('npm:core-js@1.2.6/library/modules/$.iter-detect.js')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/promise.js", ["npm:core-js@1.2.6/library/modules/es6.object.to-string.js", "npm:core-js@1.2.6/library/modules/es6.string.iterator.js", "npm:core-js@1.2.6/library/modules/web.dom.iterable.js", "npm:core-js@1.2.6/library/modules/es6.promise.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/es6.object.to-string.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.iterator.js');
  $__require('npm:core-js@1.2.6/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.promise.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').Promise;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/core-js/promise.js", ["npm:core-js@1.2.6/library/fn/promise.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/promise.js'),
    __esModule: true
  };
  return module.exports;
});

(function() {
var define = System.amdDefine;
(function(f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define("github:socketio/socket.io-client@1.4.6/socket.io.js", [], f);
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }
    g.io = f();
  }
})(function() {
  var define,
      module,
      exports;
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a)
            return a(o, !0);
          if (i)
            return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }
        var l = n[o] = {exports: {}};
        t[o][0].call(l.exports, function(e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)
      s(r[o]);
    return s;
  })({
    1: [function(_dereq_, module, exports) {
      module.exports = _dereq_('./lib/');
    }, {"./lib/": 2}],
    2: [function(_dereq_, module, exports) {
      module.exports = _dereq_('./socket');
      module.exports.parser = _dereq_('engine.io-parser');
    }, {
      "./socket": 3,
      "engine.io-parser": 19
    }],
    3: [function(_dereq_, module, exports) {
      (function(global) {
        var transports = _dereq_('./transports');
        var Emitter = _dereq_('component-emitter');
        var debug = _dereq_('debug')('engine.io-client:socket');
        var index = _dereq_('indexof');
        var parser = _dereq_('engine.io-parser');
        var parseuri = _dereq_('parseuri');
        var parsejson = _dereq_('parsejson');
        var parseqs = _dereq_('parseqs');
        module.exports = Socket;
        function noop() {}
        function Socket(uri, opts) {
          if (!(this instanceof Socket))
            return new Socket(uri, opts);
          opts = opts || {};
          if (uri && 'object' == typeof uri) {
            opts = uri;
            uri = null;
          }
          if (uri) {
            uri = parseuri(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
            opts.port = uri.port;
            if (uri.query)
              opts.query = uri.query;
          } else if (opts.host) {
            opts.hostname = parseuri(opts.host).host;
          }
          this.secure = null != opts.secure ? opts.secure : (global.location && 'https:' == location.protocol);
          if (opts.hostname && !opts.port) {
            opts.port = this.secure ? '443' : '80';
          }
          this.agent = opts.agent || false;
          this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
          this.port = opts.port || (global.location && location.port ? location.port : (this.secure ? 443 : 80));
          this.query = opts.query || {};
          if ('string' == typeof this.query)
            this.query = parseqs.decode(this.query);
          this.upgrade = false !== opts.upgrade;
          this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
          this.forceJSONP = !!opts.forceJSONP;
          this.jsonp = false !== opts.jsonp;
          this.forceBase64 = !!opts.forceBase64;
          this.enablesXDR = !!opts.enablesXDR;
          this.timestampParam = opts.timestampParam || 't';
          this.timestampRequests = opts.timestampRequests;
          this.transports = opts.transports || ['polling', 'websocket'];
          this.readyState = '';
          this.writeBuffer = [];
          this.policyPort = opts.policyPort || 843;
          this.rememberUpgrade = opts.rememberUpgrade || false;
          this.binaryType = null;
          this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
          this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;
          if (true === this.perMessageDeflate)
            this.perMessageDeflate = {};
          if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
            this.perMessageDeflate.threshold = 1024;
          }
          this.pfx = opts.pfx || null;
          this.key = opts.key || null;
          this.passphrase = opts.passphrase || null;
          this.cert = opts.cert || null;
          this.ca = opts.ca || null;
          this.ciphers = opts.ciphers || null;
          this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
          var freeGlobal = typeof global == 'object' && global;
          if (freeGlobal.global === freeGlobal) {
            if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
              this.extraHeaders = opts.extraHeaders;
            }
          }
          this.open();
        }
        Socket.priorWebsocketSuccess = false;
        Emitter(Socket.prototype);
        Socket.protocol = parser.protocol;
        Socket.Socket = Socket;
        Socket.Transport = _dereq_('./transport');
        Socket.transports = _dereq_('./transports');
        Socket.parser = _dereq_('engine.io-parser');
        Socket.prototype.createTransport = function(name) {
          debug('creating transport "%s"', name);
          var query = clone(this.query);
          query.EIO = parser.protocol;
          query.transport = name;
          if (this.id)
            query.sid = this.id;
          var transport = new transports[name]({
            agent: this.agent,
            hostname: this.hostname,
            port: this.port,
            secure: this.secure,
            path: this.path,
            query: query,
            forceJSONP: this.forceJSONP,
            jsonp: this.jsonp,
            forceBase64: this.forceBase64,
            enablesXDR: this.enablesXDR,
            timestampRequests: this.timestampRequests,
            timestampParam: this.timestampParam,
            policyPort: this.policyPort,
            socket: this,
            pfx: this.pfx,
            key: this.key,
            passphrase: this.passphrase,
            cert: this.cert,
            ca: this.ca,
            ciphers: this.ciphers,
            rejectUnauthorized: this.rejectUnauthorized,
            perMessageDeflate: this.perMessageDeflate,
            extraHeaders: this.extraHeaders
          });
          return transport;
        };
        function clone(obj) {
          var o = {};
          for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
              o[i] = obj[i];
            }
          }
          return o;
        }
        Socket.prototype.open = function() {
          var transport;
          if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
            transport = 'websocket';
          } else if (0 === this.transports.length) {
            var self = this;
            setTimeout(function() {
              self.emit('error', 'No transports available');
            }, 0);
            return;
          } else {
            transport = this.transports[0];
          }
          this.readyState = 'opening';
          try {
            transport = this.createTransport(transport);
          } catch (e) {
            this.transports.shift();
            this.open();
            return;
          }
          transport.open();
          this.setTransport(transport);
        };
        Socket.prototype.setTransport = function(transport) {
          debug('setting transport %s', transport.name);
          var self = this;
          if (this.transport) {
            debug('clearing existing transport %s', this.transport.name);
            this.transport.removeAllListeners();
          }
          this.transport = transport;
          transport.on('drain', function() {
            self.onDrain();
          }).on('packet', function(packet) {
            self.onPacket(packet);
          }).on('error', function(e) {
            self.onError(e);
          }).on('close', function() {
            self.onClose('transport close');
          });
        };
        Socket.prototype.probe = function(name) {
          debug('probing transport "%s"', name);
          var transport = this.createTransport(name, {probe: 1}),
              failed = false,
              self = this;
          Socket.priorWebsocketSuccess = false;
          function onTransportOpen() {
            if (self.onlyBinaryUpgrades) {
              var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
              failed = failed || upgradeLosesBinary;
            }
            if (failed)
              return;
            debug('probe transport "%s" opened', name);
            transport.send([{
              type: 'ping',
              data: 'probe'
            }]);
            transport.once('packet', function(msg) {
              if (failed)
                return;
              if ('pong' == msg.type && 'probe' == msg.data) {
                debug('probe transport "%s" pong', name);
                self.upgrading = true;
                self.emit('upgrading', transport);
                if (!transport)
                  return;
                Socket.priorWebsocketSuccess = 'websocket' == transport.name;
                debug('pausing current transport "%s"', self.transport.name);
                self.transport.pause(function() {
                  if (failed)
                    return;
                  if ('closed' == self.readyState)
                    return;
                  debug('changing transport and sending upgrade packet');
                  cleanup();
                  self.setTransport(transport);
                  transport.send([{type: 'upgrade'}]);
                  self.emit('upgrade', transport);
                  transport = null;
                  self.upgrading = false;
                  self.flush();
                });
              } else {
                debug('probe transport "%s" failed', name);
                var err = new Error('probe error');
                err.transport = transport.name;
                self.emit('upgradeError', err);
              }
            });
          }
          function freezeTransport() {
            if (failed)
              return;
            failed = true;
            cleanup();
            transport.close();
            transport = null;
          }
          function onerror(err) {
            var error = new Error('probe error: ' + err);
            error.transport = transport.name;
            freezeTransport();
            debug('probe transport "%s" failed because of error: %s', name, err);
            self.emit('upgradeError', error);
          }
          function onTransportClose() {
            onerror("transport closed");
          }
          function onclose() {
            onerror("socket closed");
          }
          function onupgrade(to) {
            if (transport && to.name != transport.name) {
              debug('"%s" works - aborting "%s"', to.name, transport.name);
              freezeTransport();
            }
          }
          function cleanup() {
            transport.removeListener('open', onTransportOpen);
            transport.removeListener('error', onerror);
            transport.removeListener('close', onTransportClose);
            self.removeListener('close', onclose);
            self.removeListener('upgrading', onupgrade);
          }
          transport.once('open', onTransportOpen);
          transport.once('error', onerror);
          transport.once('close', onTransportClose);
          this.once('close', onclose);
          this.once('upgrading', onupgrade);
          transport.open();
        };
        Socket.prototype.onOpen = function() {
          debug('socket open');
          this.readyState = 'open';
          Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
          this.emit('open');
          this.flush();
          if ('open' == this.readyState && this.upgrade && this.transport.pause) {
            debug('starting upgrade probes');
            for (var i = 0,
                l = this.upgrades.length; i < l; i++) {
              this.probe(this.upgrades[i]);
            }
          }
        };
        Socket.prototype.onPacket = function(packet) {
          if ('opening' == this.readyState || 'open' == this.readyState) {
            debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
            this.emit('packet', packet);
            this.emit('heartbeat');
            switch (packet.type) {
              case 'open':
                this.onHandshake(parsejson(packet.data));
                break;
              case 'pong':
                this.setPing();
                this.emit('pong');
                break;
              case 'error':
                var err = new Error('server error');
                err.code = packet.data;
                this.onError(err);
                break;
              case 'message':
                this.emit('data', packet.data);
                this.emit('message', packet.data);
                break;
            }
          } else {
            debug('packet received with socket readyState "%s"', this.readyState);
          }
        };
        Socket.prototype.onHandshake = function(data) {
          this.emit('handshake', data);
          this.id = data.sid;
          this.transport.query.sid = data.sid;
          this.upgrades = this.filterUpgrades(data.upgrades);
          this.pingInterval = data.pingInterval;
          this.pingTimeout = data.pingTimeout;
          this.onOpen();
          if ('closed' == this.readyState)
            return;
          this.setPing();
          this.removeListener('heartbeat', this.onHeartbeat);
          this.on('heartbeat', this.onHeartbeat);
        };
        Socket.prototype.onHeartbeat = function(timeout) {
          clearTimeout(this.pingTimeoutTimer);
          var self = this;
          self.pingTimeoutTimer = setTimeout(function() {
            if ('closed' == self.readyState)
              return;
            self.onClose('ping timeout');
          }, timeout || (self.pingInterval + self.pingTimeout));
        };
        Socket.prototype.setPing = function() {
          var self = this;
          clearTimeout(self.pingIntervalTimer);
          self.pingIntervalTimer = setTimeout(function() {
            debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
            self.ping();
            self.onHeartbeat(self.pingTimeout);
          }, self.pingInterval);
        };
        Socket.prototype.ping = function() {
          var self = this;
          this.sendPacket('ping', function() {
            self.emit('ping');
          });
        };
        Socket.prototype.onDrain = function() {
          this.writeBuffer.splice(0, this.prevBufferLen);
          this.prevBufferLen = 0;
          if (0 === this.writeBuffer.length) {
            this.emit('drain');
          } else {
            this.flush();
          }
        };
        Socket.prototype.flush = function() {
          if ('closed' != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            debug('flushing %d packets in socket', this.writeBuffer.length);
            this.transport.send(this.writeBuffer);
            this.prevBufferLen = this.writeBuffer.length;
            this.emit('flush');
          }
        };
        Socket.prototype.write = Socket.prototype.send = function(msg, options, fn) {
          this.sendPacket('message', msg, options, fn);
          return this;
        };
        Socket.prototype.sendPacket = function(type, data, options, fn) {
          if ('function' == typeof data) {
            fn = data;
            data = undefined;
          }
          if ('function' == typeof options) {
            fn = options;
            options = null;
          }
          if ('closing' == this.readyState || 'closed' == this.readyState) {
            return;
          }
          options = options || {};
          options.compress = false !== options.compress;
          var packet = {
            type: type,
            data: data,
            options: options
          };
          this.emit('packetCreate', packet);
          this.writeBuffer.push(packet);
          if (fn)
            this.once('flush', fn);
          this.flush();
        };
        Socket.prototype.close = function() {
          if ('opening' == this.readyState || 'open' == this.readyState) {
            this.readyState = 'closing';
            var self = this;
            if (this.writeBuffer.length) {
              this.once('drain', function() {
                if (this.upgrading) {
                  waitForUpgrade();
                } else {
                  close();
                }
              });
            } else if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          }
          function close() {
            self.onClose('forced close');
            debug('socket closing - telling transport to close');
            self.transport.close();
          }
          function cleanupAndClose() {
            self.removeListener('upgrade', cleanupAndClose);
            self.removeListener('upgradeError', cleanupAndClose);
            close();
          }
          function waitForUpgrade() {
            self.once('upgrade', cleanupAndClose);
            self.once('upgradeError', cleanupAndClose);
          }
          return this;
        };
        Socket.prototype.onError = function(err) {
          debug('socket error %j', err);
          Socket.priorWebsocketSuccess = false;
          this.emit('error', err);
          this.onClose('transport error', err);
        };
        Socket.prototype.onClose = function(reason, desc) {
          if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
            debug('socket close with reason: "%s"', reason);
            var self = this;
            clearTimeout(this.pingIntervalTimer);
            clearTimeout(this.pingTimeoutTimer);
            this.transport.removeAllListeners('close');
            this.transport.close();
            this.transport.removeAllListeners();
            this.readyState = 'closed';
            this.id = null;
            this.emit('close', reason, desc);
            self.writeBuffer = [];
            self.prevBufferLen = 0;
          }
        };
        Socket.prototype.filterUpgrades = function(upgrades) {
          var filteredUpgrades = [];
          for (var i = 0,
              j = upgrades.length; i < j; i++) {
            if (~index(this.transports, upgrades[i]))
              filteredUpgrades.push(upgrades[i]);
          }
          return filteredUpgrades;
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./transport": 4,
      "./transports": 5,
      "component-emitter": 15,
      "debug": 17,
      "engine.io-parser": 19,
      "indexof": 23,
      "parsejson": 26,
      "parseqs": 27,
      "parseuri": 28
    }],
    4: [function(_dereq_, module, exports) {
      var parser = _dereq_('engine.io-parser');
      var Emitter = _dereq_('component-emitter');
      module.exports = Transport;
      function Transport(opts) {
        this.path = opts.path;
        this.hostname = opts.hostname;
        this.port = opts.port;
        this.secure = opts.secure;
        this.query = opts.query;
        this.timestampParam = opts.timestampParam;
        this.timestampRequests = opts.timestampRequests;
        this.readyState = '';
        this.agent = opts.agent || false;
        this.socket = opts.socket;
        this.enablesXDR = opts.enablesXDR;
        this.pfx = opts.pfx;
        this.key = opts.key;
        this.passphrase = opts.passphrase;
        this.cert = opts.cert;
        this.ca = opts.ca;
        this.ciphers = opts.ciphers;
        this.rejectUnauthorized = opts.rejectUnauthorized;
        this.extraHeaders = opts.extraHeaders;
      }
      Emitter(Transport.prototype);
      Transport.prototype.onError = function(msg, desc) {
        var err = new Error(msg);
        err.type = 'TransportError';
        err.description = desc;
        this.emit('error', err);
        return this;
      };
      Transport.prototype.open = function() {
        if ('closed' == this.readyState || '' == this.readyState) {
          this.readyState = 'opening';
          this.doOpen();
        }
        return this;
      };
      Transport.prototype.close = function() {
        if ('opening' == this.readyState || 'open' == this.readyState) {
          this.doClose();
          this.onClose();
        }
        return this;
      };
      Transport.prototype.send = function(packets) {
        if ('open' == this.readyState) {
          this.write(packets);
        } else {
          throw new Error('Transport not open');
        }
      };
      Transport.prototype.onOpen = function() {
        this.readyState = 'open';
        this.writable = true;
        this.emit('open');
      };
      Transport.prototype.onData = function(data) {
        var packet = parser.decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
      };
      Transport.prototype.onPacket = function(packet) {
        this.emit('packet', packet);
      };
      Transport.prototype.onClose = function() {
        this.readyState = 'closed';
        this.emit('close');
      };
    }, {
      "component-emitter": 15,
      "engine.io-parser": 19
    }],
    5: [function(_dereq_, module, exports) {
      (function(global) {
        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var XHR = _dereq_('./polling-xhr');
        var JSONP = _dereq_('./polling-jsonp');
        var websocket = _dereq_('./websocket');
        exports.polling = polling;
        exports.websocket = websocket;
        function polling(opts) {
          var xhr;
          var xd = false;
          var xs = false;
          var jsonp = false !== opts.jsonp;
          if (global.location) {
            var isSSL = 'https:' == location.protocol;
            var port = location.port;
            if (!port) {
              port = isSSL ? 443 : 80;
            }
            xd = opts.hostname != location.hostname || port != opts.port;
            xs = opts.secure != isSSL;
          }
          opts.xdomain = xd;
          opts.xscheme = xs;
          xhr = new XMLHttpRequest(opts);
          if ('open' in xhr && !opts.forceJSONP) {
            return new XHR(opts);
          } else {
            if (!jsonp)
              throw new Error('JSONP disabled');
            return new JSONP(opts);
          }
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./polling-jsonp": 6,
      "./polling-xhr": 7,
      "./websocket": 9,
      "xmlhttprequest-ssl": 10
    }],
    6: [function(_dereq_, module, exports) {
      (function(global) {
        var Polling = _dereq_('./polling');
        var inherit = _dereq_('component-inherit');
        module.exports = JSONPPolling;
        var rNewline = /\n/g;
        var rEscapedNewline = /\\n/g;
        var callbacks;
        var index = 0;
        function empty() {}
        function JSONPPolling(opts) {
          Polling.call(this, opts);
          this.query = this.query || {};
          if (!callbacks) {
            if (!global.___eio)
              global.___eio = [];
            callbacks = global.___eio;
          }
          this.index = callbacks.length;
          var self = this;
          callbacks.push(function(msg) {
            self.onData(msg);
          });
          this.query.j = this.index;
          if (global.document && global.addEventListener) {
            global.addEventListener('beforeunload', function() {
              if (self.script)
                self.script.onerror = empty;
            }, false);
          }
        }
        inherit(JSONPPolling, Polling);
        JSONPPolling.prototype.supportsBinary = false;
        JSONPPolling.prototype.doClose = function() {
          if (this.script) {
            this.script.parentNode.removeChild(this.script);
            this.script = null;
          }
          if (this.form) {
            this.form.parentNode.removeChild(this.form);
            this.form = null;
            this.iframe = null;
          }
          Polling.prototype.doClose.call(this);
        };
        JSONPPolling.prototype.doPoll = function() {
          var self = this;
          var script = document.createElement('script');
          if (this.script) {
            this.script.parentNode.removeChild(this.script);
            this.script = null;
          }
          script.async = true;
          script.src = this.uri();
          script.onerror = function(e) {
            self.onError('jsonp poll error', e);
          };
          var insertAt = document.getElementsByTagName('script')[0];
          if (insertAt) {
            insertAt.parentNode.insertBefore(script, insertAt);
          } else {
            (document.head || document.body).appendChild(script);
          }
          this.script = script;
          var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
          if (isUAgecko) {
            setTimeout(function() {
              var iframe = document.createElement('iframe');
              document.body.appendChild(iframe);
              document.body.removeChild(iframe);
            }, 100);
          }
        };
        JSONPPolling.prototype.doWrite = function(data, fn) {
          var self = this;
          if (!this.form) {
            var form = document.createElement('form');
            var area = document.createElement('textarea');
            var id = this.iframeId = 'eio_iframe_' + this.index;
            var iframe;
            form.className = 'socketio';
            form.style.position = 'absolute';
            form.style.top = '-1000px';
            form.style.left = '-1000px';
            form.target = id;
            form.method = 'POST';
            form.setAttribute('accept-charset', 'utf-8');
            area.name = 'd';
            form.appendChild(area);
            document.body.appendChild(form);
            this.form = form;
            this.area = area;
          }
          this.form.action = this.uri();
          function complete() {
            initIframe();
            fn();
          }
          function initIframe() {
            if (self.iframe) {
              try {
                self.form.removeChild(self.iframe);
              } catch (e) {
                self.onError('jsonp polling iframe removal error', e);
              }
            }
            try {
              var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
              iframe = document.createElement(html);
            } catch (e) {
              iframe = document.createElement('iframe');
              iframe.name = self.iframeId;
              iframe.src = 'javascript:0';
            }
            iframe.id = self.iframeId;
            self.form.appendChild(iframe);
            self.iframe = iframe;
          }
          initIframe();
          data = data.replace(rEscapedNewline, '\\\n');
          this.area.value = data.replace(rNewline, '\\n');
          try {
            this.form.submit();
          } catch (e) {}
          if (this.iframe.attachEvent) {
            this.iframe.onreadystatechange = function() {
              if (self.iframe.readyState == 'complete') {
                complete();
              }
            };
          } else {
            this.iframe.onload = complete;
          }
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./polling": 8,
      "component-inherit": 16
    }],
    7: [function(_dereq_, module, exports) {
      (function(global) {
        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var Polling = _dereq_('./polling');
        var Emitter = _dereq_('component-emitter');
        var inherit = _dereq_('component-inherit');
        var debug = _dereq_('debug')('engine.io-client:polling-xhr');
        module.exports = XHR;
        module.exports.Request = Request;
        function empty() {}
        function XHR(opts) {
          Polling.call(this, opts);
          if (global.location) {
            var isSSL = 'https:' == location.protocol;
            var port = location.port;
            if (!port) {
              port = isSSL ? 443 : 80;
            }
            this.xd = opts.hostname != global.location.hostname || port != opts.port;
            this.xs = opts.secure != isSSL;
          } else {
            this.extraHeaders = opts.extraHeaders;
          }
        }
        inherit(XHR, Polling);
        XHR.prototype.supportsBinary = true;
        XHR.prototype.request = function(opts) {
          opts = opts || {};
          opts.uri = this.uri();
          opts.xd = this.xd;
          opts.xs = this.xs;
          opts.agent = this.agent || false;
          opts.supportsBinary = this.supportsBinary;
          opts.enablesXDR = this.enablesXDR;
          opts.pfx = this.pfx;
          opts.key = this.key;
          opts.passphrase = this.passphrase;
          opts.cert = this.cert;
          opts.ca = this.ca;
          opts.ciphers = this.ciphers;
          opts.rejectUnauthorized = this.rejectUnauthorized;
          opts.extraHeaders = this.extraHeaders;
          return new Request(opts);
        };
        XHR.prototype.doWrite = function(data, fn) {
          var isBinary = typeof data !== 'string' && data !== undefined;
          var req = this.request({
            method: 'POST',
            data: data,
            isBinary: isBinary
          });
          var self = this;
          req.on('success', fn);
          req.on('error', function(err) {
            self.onError('xhr post error', err);
          });
          this.sendXhr = req;
        };
        XHR.prototype.doPoll = function() {
          debug('xhr poll');
          var req = this.request();
          var self = this;
          req.on('data', function(data) {
            self.onData(data);
          });
          req.on('error', function(err) {
            self.onError('xhr poll error', err);
          });
          this.pollXhr = req;
        };
        function Request(opts) {
          this.method = opts.method || 'GET';
          this.uri = opts.uri;
          this.xd = !!opts.xd;
          this.xs = !!opts.xs;
          this.async = false !== opts.async;
          this.data = undefined != opts.data ? opts.data : null;
          this.agent = opts.agent;
          this.isBinary = opts.isBinary;
          this.supportsBinary = opts.supportsBinary;
          this.enablesXDR = opts.enablesXDR;
          this.pfx = opts.pfx;
          this.key = opts.key;
          this.passphrase = opts.passphrase;
          this.cert = opts.cert;
          this.ca = opts.ca;
          this.ciphers = opts.ciphers;
          this.rejectUnauthorized = opts.rejectUnauthorized;
          this.extraHeaders = opts.extraHeaders;
          this.create();
        }
        Emitter(Request.prototype);
        Request.prototype.create = function() {
          var opts = {
            agent: this.agent,
            xdomain: this.xd,
            xscheme: this.xs,
            enablesXDR: this.enablesXDR
          };
          opts.pfx = this.pfx;
          opts.key = this.key;
          opts.passphrase = this.passphrase;
          opts.cert = this.cert;
          opts.ca = this.ca;
          opts.ciphers = this.ciphers;
          opts.rejectUnauthorized = this.rejectUnauthorized;
          var xhr = this.xhr = new XMLHttpRequest(opts);
          var self = this;
          try {
            debug('xhr open %s: %s', this.method, this.uri);
            xhr.open(this.method, this.uri, this.async);
            try {
              if (this.extraHeaders) {
                xhr.setDisableHeaderCheck(true);
                for (var i in this.extraHeaders) {
                  if (this.extraHeaders.hasOwnProperty(i)) {
                    xhr.setRequestHeader(i, this.extraHeaders[i]);
                  }
                }
              }
            } catch (e) {}
            if (this.supportsBinary) {
              xhr.responseType = 'arraybuffer';
            }
            if ('POST' == this.method) {
              try {
                if (this.isBinary) {
                  xhr.setRequestHeader('Content-type', 'application/octet-stream');
                } else {
                  xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                }
              } catch (e) {}
            }
            if ('withCredentials' in xhr) {
              xhr.withCredentials = true;
            }
            if (this.hasXDR()) {
              xhr.onload = function() {
                self.onLoad();
              };
              xhr.onerror = function() {
                self.onError(xhr.responseText);
              };
            } else {
              xhr.onreadystatechange = function() {
                if (4 != xhr.readyState)
                  return;
                if (200 == xhr.status || 1223 == xhr.status) {
                  self.onLoad();
                } else {
                  setTimeout(function() {
                    self.onError(xhr.status);
                  }, 0);
                }
              };
            }
            debug('xhr data %s', this.data);
            xhr.send(this.data);
          } catch (e) {
            setTimeout(function() {
              self.onError(e);
            }, 0);
            return;
          }
          if (global.document) {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
          }
        };
        Request.prototype.onSuccess = function() {
          this.emit('success');
          this.cleanup();
        };
        Request.prototype.onData = function(data) {
          this.emit('data', data);
          this.onSuccess();
        };
        Request.prototype.onError = function(err) {
          this.emit('error', err);
          this.cleanup(true);
        };
        Request.prototype.cleanup = function(fromError) {
          if ('undefined' == typeof this.xhr || null === this.xhr) {
            return;
          }
          if (this.hasXDR()) {
            this.xhr.onload = this.xhr.onerror = empty;
          } else {
            this.xhr.onreadystatechange = empty;
          }
          if (fromError) {
            try {
              this.xhr.abort();
            } catch (e) {}
          }
          if (global.document) {
            delete Request.requests[this.index];
          }
          this.xhr = null;
        };
        Request.prototype.onLoad = function() {
          var data;
          try {
            var contentType;
            try {
              contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
            } catch (e) {}
            if (contentType === 'application/octet-stream') {
              data = this.xhr.response;
            } else {
              if (!this.supportsBinary) {
                data = this.xhr.responseText;
              } else {
                try {
                  data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
                } catch (e) {
                  var ui8Arr = new Uint8Array(this.xhr.response);
                  var dataArray = [];
                  for (var idx = 0,
                      length = ui8Arr.length; idx < length; idx++) {
                    dataArray.push(ui8Arr[idx]);
                  }
                  data = String.fromCharCode.apply(null, dataArray);
                }
              }
            }
          } catch (e) {
            this.onError(e);
          }
          if (null != data) {
            this.onData(data);
          }
        };
        Request.prototype.hasXDR = function() {
          return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
        };
        Request.prototype.abort = function() {
          this.cleanup();
        };
        if (global.document) {
          Request.requestsCount = 0;
          Request.requests = {};
          if (global.attachEvent) {
            global.attachEvent('onunload', unloadHandler);
          } else if (global.addEventListener) {
            global.addEventListener('beforeunload', unloadHandler, false);
          }
        }
        function unloadHandler() {
          for (var i in Request.requests) {
            if (Request.requests.hasOwnProperty(i)) {
              Request.requests[i].abort();
            }
          }
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./polling": 8,
      "component-emitter": 15,
      "component-inherit": 16,
      "debug": 17,
      "xmlhttprequest-ssl": 10
    }],
    8: [function(_dereq_, module, exports) {
      var Transport = _dereq_('../transport');
      var parseqs = _dereq_('parseqs');
      var parser = _dereq_('engine.io-parser');
      var inherit = _dereq_('component-inherit');
      var yeast = _dereq_('yeast');
      var debug = _dereq_('debug')('engine.io-client:polling');
      module.exports = Polling;
      var hasXHR2 = (function() {
        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var xhr = new XMLHttpRequest({xdomain: false});
        return null != xhr.responseType;
      })();
      function Polling(opts) {
        var forceBase64 = (opts && opts.forceBase64);
        if (!hasXHR2 || forceBase64) {
          this.supportsBinary = false;
        }
        Transport.call(this, opts);
      }
      inherit(Polling, Transport);
      Polling.prototype.name = 'polling';
      Polling.prototype.doOpen = function() {
        this.poll();
      };
      Polling.prototype.pause = function(onPause) {
        var pending = 0;
        var self = this;
        this.readyState = 'pausing';
        function pause() {
          debug('paused');
          self.readyState = 'paused';
          onPause();
        }
        if (this.polling || !this.writable) {
          var total = 0;
          if (this.polling) {
            debug('we are currently polling - waiting to pause');
            total++;
            this.once('pollComplete', function() {
              debug('pre-pause polling complete');
              --total || pause();
            });
          }
          if (!this.writable) {
            debug('we are currently writing - waiting to pause');
            total++;
            this.once('drain', function() {
              debug('pre-pause writing complete');
              --total || pause();
            });
          }
        } else {
          pause();
        }
      };
      Polling.prototype.poll = function() {
        debug('polling');
        this.polling = true;
        this.doPoll();
        this.emit('poll');
      };
      Polling.prototype.onData = function(data) {
        var self = this;
        debug('polling got data %s', data);
        var callback = function(packet, index, total) {
          if ('opening' == self.readyState) {
            self.onOpen();
          }
          if ('close' == packet.type) {
            self.onClose();
            return false;
          }
          self.onPacket(packet);
        };
        parser.decodePayload(data, this.socket.binaryType, callback);
        if ('closed' != this.readyState) {
          this.polling = false;
          this.emit('pollComplete');
          if ('open' == this.readyState) {
            this.poll();
          } else {
            debug('ignoring poll - transport state "%s"', this.readyState);
          }
        }
      };
      Polling.prototype.doClose = function() {
        var self = this;
        function close() {
          debug('writing close packet');
          self.write([{type: 'close'}]);
        }
        if ('open' == this.readyState) {
          debug('transport open - closing');
          close();
        } else {
          debug('transport not open - deferring close');
          this.once('open', close);
        }
      };
      Polling.prototype.write = function(packets) {
        var self = this;
        this.writable = false;
        var callbackfn = function() {
          self.writable = true;
          self.emit('drain');
        };
        var self = this;
        parser.encodePayload(packets, this.supportsBinary, function(data) {
          self.doWrite(data, callbackfn);
        });
      };
      Polling.prototype.uri = function() {
        var query = this.query || {};
        var schema = this.secure ? 'https' : 'http';
        var port = '';
        if (false !== this.timestampRequests) {
          query[this.timestampParam] = yeast();
        }
        if (!this.supportsBinary && !query.sid) {
          query.b64 = 1;
        }
        query = parseqs.encode(query);
        if (this.port && (('https' == schema && this.port != 443) || ('http' == schema && this.port != 80))) {
          port = ':' + this.port;
        }
        if (query.length) {
          query = '?' + query;
        }
        var ipv6 = this.hostname.indexOf(':') !== -1;
        return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
      };
    }, {
      "../transport": 4,
      "component-inherit": 16,
      "debug": 17,
      "engine.io-parser": 19,
      "parseqs": 27,
      "xmlhttprequest-ssl": 10,
      "yeast": 30
    }],
    9: [function(_dereq_, module, exports) {
      (function(global) {
        var Transport = _dereq_('../transport');
        var parser = _dereq_('engine.io-parser');
        var parseqs = _dereq_('parseqs');
        var inherit = _dereq_('component-inherit');
        var yeast = _dereq_('yeast');
        var debug = _dereq_('debug')('engine.io-client:websocket');
        var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
        var WebSocket = BrowserWebSocket;
        if (!WebSocket && typeof window === 'undefined') {
          try {
            WebSocket = _dereq_('ws');
          } catch (e) {}
        }
        module.exports = WS;
        function WS(opts) {
          var forceBase64 = (opts && opts.forceBase64);
          if (forceBase64) {
            this.supportsBinary = false;
          }
          this.perMessageDeflate = opts.perMessageDeflate;
          Transport.call(this, opts);
        }
        inherit(WS, Transport);
        WS.prototype.name = 'websocket';
        WS.prototype.supportsBinary = true;
        WS.prototype.doOpen = function() {
          if (!this.check()) {
            return;
          }
          var self = this;
          var uri = this.uri();
          var protocols = void(0);
          var opts = {
            agent: this.agent,
            perMessageDeflate: this.perMessageDeflate
          };
          opts.pfx = this.pfx;
          opts.key = this.key;
          opts.passphrase = this.passphrase;
          opts.cert = this.cert;
          opts.ca = this.ca;
          opts.ciphers = this.ciphers;
          opts.rejectUnauthorized = this.rejectUnauthorized;
          if (this.extraHeaders) {
            opts.headers = this.extraHeaders;
          }
          this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
          if (this.ws.binaryType === undefined) {
            this.supportsBinary = false;
          }
          if (this.ws.supports && this.ws.supports.binary) {
            this.supportsBinary = true;
            this.ws.binaryType = 'buffer';
          } else {
            this.ws.binaryType = 'arraybuffer';
          }
          this.addEventListeners();
        };
        WS.prototype.addEventListeners = function() {
          var self = this;
          this.ws.onopen = function() {
            self.onOpen();
          };
          this.ws.onclose = function() {
            self.onClose();
          };
          this.ws.onmessage = function(ev) {
            self.onData(ev.data);
          };
          this.ws.onerror = function(e) {
            self.onError('websocket error', e);
          };
        };
        if ('undefined' != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
          WS.prototype.onData = function(data) {
            var self = this;
            setTimeout(function() {
              Transport.prototype.onData.call(self, data);
            }, 0);
          };
        }
        WS.prototype.write = function(packets) {
          var self = this;
          this.writable = false;
          var total = packets.length;
          for (var i = 0,
              l = total; i < l; i++) {
            (function(packet) {
              parser.encodePacket(packet, self.supportsBinary, function(data) {
                if (!BrowserWebSocket) {
                  var opts = {};
                  if (packet.options) {
                    opts.compress = packet.options.compress;
                  }
                  if (self.perMessageDeflate) {
                    var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
                    if (len < self.perMessageDeflate.threshold) {
                      opts.compress = false;
                    }
                  }
                }
                try {
                  if (BrowserWebSocket) {
                    self.ws.send(data);
                  } else {
                    self.ws.send(data, opts);
                  }
                } catch (e) {
                  debug('websocket closed before onclose event');
                }
                --total || done();
              });
            })(packets[i]);
          }
          function done() {
            self.emit('flush');
            setTimeout(function() {
              self.writable = true;
              self.emit('drain');
            }, 0);
          }
        };
        WS.prototype.onClose = function() {
          Transport.prototype.onClose.call(this);
        };
        WS.prototype.doClose = function() {
          if (typeof this.ws !== 'undefined') {
            this.ws.close();
          }
        };
        WS.prototype.uri = function() {
          var query = this.query || {};
          var schema = this.secure ? 'wss' : 'ws';
          var port = '';
          if (this.port && (('wss' == schema && this.port != 443) || ('ws' == schema && this.port != 80))) {
            port = ':' + this.port;
          }
          if (this.timestampRequests) {
            query[this.timestampParam] = yeast();
          }
          if (!this.supportsBinary) {
            query.b64 = 1;
          }
          query = parseqs.encode(query);
          if (query.length) {
            query = '?' + query;
          }
          var ipv6 = this.hostname.indexOf(':') !== -1;
          return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
        };
        WS.prototype.check = function() {
          return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "../transport": 4,
      "component-inherit": 16,
      "debug": 17,
      "engine.io-parser": 19,
      "parseqs": 27,
      "ws": undefined,
      "yeast": 30
    }],
    10: [function(_dereq_, module, exports) {
      var hasCORS = _dereq_('has-cors');
      module.exports = function(opts) {
        var xdomain = opts.xdomain;
        var xscheme = opts.xscheme;
        var enablesXDR = opts.enablesXDR;
        try {
          if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (e) {}
        try {
          if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
            return new XDomainRequest();
          }
        } catch (e) {}
        if (!xdomain) {
          try {
            return new ActiveXObject('Microsoft.XMLHTTP');
          } catch (e) {}
        }
      };
    }, {"has-cors": 22}],
    11: [function(_dereq_, module, exports) {
      module.exports = after;
      function after(count, callback, err_cb) {
        var bail = false;
        err_cb = err_cb || noop;
        proxy.count = count;
        return (count === 0) ? callback() : proxy;
        function proxy(err, result) {
          if (proxy.count <= 0) {
            throw new Error('after called too many times');
          }
          --proxy.count;
          if (err) {
            bail = true;
            callback(err);
            callback = err_cb;
          } else if (proxy.count === 0 && !bail) {
            callback(null, result);
          }
        }
      }
      function noop() {}
    }, {}],
    12: [function(_dereq_, module, exports) {
      module.exports = function(arraybuffer, start, end) {
        var bytes = arraybuffer.byteLength;
        start = start || 0;
        end = end || bytes;
        if (arraybuffer.slice) {
          return arraybuffer.slice(start, end);
        }
        if (start < 0) {
          start += bytes;
        }
        if (end < 0) {
          end += bytes;
        }
        if (end > bytes) {
          end = bytes;
        }
        if (start >= bytes || start >= end || bytes === 0) {
          return new ArrayBuffer(0);
        }
        var abv = new Uint8Array(arraybuffer);
        var result = new Uint8Array(end - start);
        for (var i = start,
            ii = 0; i < end; i++, ii++) {
          result[ii] = abv[i];
        }
        return result.buffer;
      };
    }, {}],
    13: [function(_dereq_, module, exports) {
      (function(chars) {
        "use strict";
        exports.encode = function(arraybuffer) {
          var bytes = new Uint8Array(arraybuffer),
              i,
              len = bytes.length,
              base64 = "";
          for (i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
            base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
            base64 += chars[bytes[i + 2] & 63];
          }
          if ((len % 3) === 2) {
            base64 = base64.substring(0, base64.length - 1) + "=";
          } else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2) + "==";
          }
          return base64;
        };
        exports.decode = function(base64) {
          var bufferLength = base64.length * 0.75,
              len = base64.length,
              i,
              p = 0,
              encoded1,
              encoded2,
              encoded3,
              encoded4;
          if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") {
              bufferLength--;
            }
          }
          var arraybuffer = new ArrayBuffer(bufferLength),
              bytes = new Uint8Array(arraybuffer);
          for (i = 0; i < len; i += 4) {
            encoded1 = chars.indexOf(base64[i]);
            encoded2 = chars.indexOf(base64[i + 1]);
            encoded3 = chars.indexOf(base64[i + 2]);
            encoded4 = chars.indexOf(base64[i + 3]);
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
          }
          return arraybuffer;
        };
      })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    }, {}],
    14: [function(_dereq_, module, exports) {
      (function(global) {
        var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;
        var blobSupported = (function() {
          try {
            var a = new Blob(['hi']);
            return a.size === 2;
          } catch (e) {
            return false;
          }
        })();
        var blobSupportsArrayBufferView = blobSupported && (function() {
          try {
            var b = new Blob([new Uint8Array([1, 2])]);
            return b.size === 2;
          } catch (e) {
            return false;
          }
        })();
        var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
        function mapArrayBufferViews(ary) {
          for (var i = 0; i < ary.length; i++) {
            var chunk = ary[i];
            if (chunk.buffer instanceof ArrayBuffer) {
              var buf = chunk.buffer;
              if (chunk.byteLength !== buf.byteLength) {
                var copy = new Uint8Array(chunk.byteLength);
                copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
                buf = copy.buffer;
              }
              ary[i] = buf;
            }
          }
        }
        function BlobBuilderConstructor(ary, options) {
          options = options || {};
          var bb = new BlobBuilder();
          mapArrayBufferViews(ary);
          for (var i = 0; i < ary.length; i++) {
            bb.append(ary[i]);
          }
          return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
        }
        ;
        function BlobConstructor(ary, options) {
          mapArrayBufferViews(ary);
          return new Blob(ary, options || {});
        }
        ;
        module.exports = (function() {
          if (blobSupported) {
            return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
          } else if (blobBuilderSupported) {
            return BlobBuilderConstructor;
          } else {
            return undefined;
          }
        })();
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}],
    15: [function(_dereq_, module, exports) {
      module.exports = Emitter;
      function Emitter(obj) {
        if (obj)
          return mixin(obj);
      }
      ;
      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }
      Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks[event] = this._callbacks[event] || []).push(fn);
        return this;
      };
      Emitter.prototype.once = function(event, fn) {
        var self = this;
        this._callbacks = this._callbacks || {};
        function on() {
          self.off(event, on);
          fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
      };
      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }
        var callbacks = this._callbacks[event];
        if (!callbacks)
          return this;
        if (1 == arguments.length) {
          delete this._callbacks[event];
          return this;
        }
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        return this;
      };
      Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this._callbacks[event];
        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0,
              len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }
        return this;
      };
      Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks[event] || [];
      };
      Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
      };
    }, {}],
    16: [function(_dereq_, module, exports) {
      module.exports = function(a, b) {
        var fn = function() {};
        fn.prototype = b.prototype;
        a.prototype = new fn;
        a.prototype.constructor = a;
      };
    }, {}],
    17: [function(_dereq_, module, exports) {
      exports = module.exports = _dereq_('./debug');
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
      exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
      function useColors() {
        return ('WebkitAppearance' in document.documentElement.style) || (window.console && (console.firebug || (console.exception && console.table))) || (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
      }
      exports.formatters.j = function(v) {
        return JSON.stringify(v);
      };
      function formatArgs() {
        var args = arguments;
        var useColors = this.useColors;
        args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
        if (!useColors)
          return args;
        var c = 'color: ' + this.color;
        args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
        var index = 0;
        var lastC = 0;
        args[0].replace(/%[a-z%]/g, function(match) {
          if ('%%' === match)
            return;
          index++;
          if ('%c' === match) {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
        return args;
      }
      function log() {
        return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }
      function save(namespaces) {
        try {
          if (null == namespaces) {
            exports.storage.removeItem('debug');
          } else {
            exports.storage.debug = namespaces;
          }
        } catch (e) {}
      }
      function load() {
        var r;
        try {
          r = exports.storage.debug;
        } catch (e) {}
        return r;
      }
      exports.enable(load());
      function localstorage() {
        try {
          return window.localStorage;
        } catch (e) {}
      }
    }, {"./debug": 18}],
    18: [function(_dereq_, module, exports) {
      exports = module.exports = debug;
      exports.coerce = coerce;
      exports.disable = disable;
      exports.enable = enable;
      exports.enabled = enabled;
      exports.humanize = _dereq_('ms');
      exports.names = [];
      exports.skips = [];
      exports.formatters = {};
      var prevColor = 0;
      var prevTime;
      function selectColor() {
        return exports.colors[prevColor++ % exports.colors.length];
      }
      function debug(namespace) {
        function disabled() {}
        disabled.enabled = false;
        function enabled() {
          var self = enabled;
          var curr = +new Date();
          var ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          if (null == self.useColors)
            self.useColors = exports.useColors();
          if (null == self.color && self.useColors)
            self.color = selectColor();
          var args = Array.prototype.slice.call(arguments);
          args[0] = exports.coerce(args[0]);
          if ('string' !== typeof args[0]) {
            args = ['%o'].concat(args);
          }
          var index = 0;
          args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
            if (match === '%%')
              return match;
            index++;
            var formatter = exports.formatters[format];
            if ('function' === typeof formatter) {
              var val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          if ('function' === typeof exports.formatArgs) {
            args = exports.formatArgs.apply(self, args);
          }
          var logFn = enabled.log || exports.log || console.log.bind(console);
          logFn.apply(self, args);
        }
        enabled.enabled = true;
        var fn = exports.enabled(namespace) ? enabled : disabled;
        fn.namespace = namespace;
        return fn;
      }
      function enable(namespaces) {
        exports.save(namespaces);
        var split = (namespaces || '').split(/[\s,]+/);
        var len = split.length;
        for (var i = 0; i < len; i++) {
          if (!split[i])
            continue;
          namespaces = split[i].replace(/\*/g, '.*?');
          if (namespaces[0] === '-') {
            exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
          } else {
            exports.names.push(new RegExp('^' + namespaces + '$'));
          }
        }
      }
      function disable() {
        exports.enable('');
      }
      function enabled(name) {
        var i,
            len;
        for (i = 0, len = exports.skips.length; i < len; i++) {
          if (exports.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = exports.names.length; i < len; i++) {
          if (exports.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error)
          return val.stack || val.message;
        return val;
      }
    }, {"ms": 25}],
    19: [function(_dereq_, module, exports) {
      (function(global) {
        var keys = _dereq_('./keys');
        var hasBinary = _dereq_('has-binary');
        var sliceBuffer = _dereq_('arraybuffer.slice');
        var base64encoder = _dereq_('base64-arraybuffer');
        var after = _dereq_('after');
        var utf8 = _dereq_('utf8');
        var isAndroid = navigator.userAgent.match(/Android/i);
        var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);
        var dontSendBlobs = isAndroid || isPhantomJS;
        exports.protocol = 3;
        var packets = exports.packets = {
          open: 0,
          close: 1,
          ping: 2,
          pong: 3,
          message: 4,
          upgrade: 5,
          noop: 6
        };
        var packetslist = keys(packets);
        var err = {
          type: 'error',
          data: 'parser error'
        };
        var Blob = _dereq_('blob');
        exports.encodePacket = function(packet, supportsBinary, utf8encode, callback) {
          if ('function' == typeof supportsBinary) {
            callback = supportsBinary;
            supportsBinary = false;
          }
          if ('function' == typeof utf8encode) {
            callback = utf8encode;
            utf8encode = null;
          }
          var data = (packet.data === undefined) ? undefined : packet.data.buffer || packet.data;
          if (global.ArrayBuffer && data instanceof ArrayBuffer) {
            return encodeArrayBuffer(packet, supportsBinary, callback);
          } else if (Blob && data instanceof global.Blob) {
            return encodeBlob(packet, supportsBinary, callback);
          }
          if (data && data.base64) {
            return encodeBase64Object(packet, callback);
          }
          var encoded = packets[packet.type];
          if (undefined !== packet.data) {
            encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
          }
          return callback('' + encoded);
        };
        function encodeBase64Object(packet, callback) {
          var message = 'b' + exports.packets[packet.type] + packet.data.data;
          return callback(message);
        }
        function encodeArrayBuffer(packet, supportsBinary, callback) {
          if (!supportsBinary) {
            return exports.encodeBase64Packet(packet, callback);
          }
          var data = packet.data;
          var contentArray = new Uint8Array(data);
          var resultBuffer = new Uint8Array(1 + data.byteLength);
          resultBuffer[0] = packets[packet.type];
          for (var i = 0; i < contentArray.length; i++) {
            resultBuffer[i + 1] = contentArray[i];
          }
          return callback(resultBuffer.buffer);
        }
        function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
          if (!supportsBinary) {
            return exports.encodeBase64Packet(packet, callback);
          }
          var fr = new FileReader();
          fr.onload = function() {
            packet.data = fr.result;
            exports.encodePacket(packet, supportsBinary, true, callback);
          };
          return fr.readAsArrayBuffer(packet.data);
        }
        function encodeBlob(packet, supportsBinary, callback) {
          if (!supportsBinary) {
            return exports.encodeBase64Packet(packet, callback);
          }
          if (dontSendBlobs) {
            return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
          }
          var length = new Uint8Array(1);
          length[0] = packets[packet.type];
          var blob = new Blob([length.buffer, packet.data]);
          return callback(blob);
        }
        exports.encodeBase64Packet = function(packet, callback) {
          var message = 'b' + exports.packets[packet.type];
          if (Blob && packet.data instanceof global.Blob) {
            var fr = new FileReader();
            fr.onload = function() {
              var b64 = fr.result.split(',')[1];
              callback(message + b64);
            };
            return fr.readAsDataURL(packet.data);
          }
          var b64data;
          try {
            b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
          } catch (e) {
            var typed = new Uint8Array(packet.data);
            var basic = new Array(typed.length);
            for (var i = 0; i < typed.length; i++) {
              basic[i] = typed[i];
            }
            b64data = String.fromCharCode.apply(null, basic);
          }
          message += global.btoa(b64data);
          return callback(message);
        };
        exports.decodePacket = function(data, binaryType, utf8decode) {
          if (typeof data == 'string' || data === undefined) {
            if (data.charAt(0) == 'b') {
              return exports.decodeBase64Packet(data.substr(1), binaryType);
            }
            if (utf8decode) {
              try {
                data = utf8.decode(data);
              } catch (e) {
                return err;
              }
            }
            var type = data.charAt(0);
            if (Number(type) != type || !packetslist[type]) {
              return err;
            }
            if (data.length > 1) {
              return {
                type: packetslist[type],
                data: data.substring(1)
              };
            } else {
              return {type: packetslist[type]};
            }
          }
          var asArray = new Uint8Array(data);
          var type = asArray[0];
          var rest = sliceBuffer(data, 1);
          if (Blob && binaryType === 'blob') {
            rest = new Blob([rest]);
          }
          return {
            type: packetslist[type],
            data: rest
          };
        };
        exports.decodeBase64Packet = function(msg, binaryType) {
          var type = packetslist[msg.charAt(0)];
          if (!global.ArrayBuffer) {
            return {
              type: type,
              data: {
                base64: true,
                data: msg.substr(1)
              }
            };
          }
          var data = base64encoder.decode(msg.substr(1));
          if (binaryType === 'blob' && Blob) {
            data = new Blob([data]);
          }
          return {
            type: type,
            data: data
          };
        };
        exports.encodePayload = function(packets, supportsBinary, callback) {
          if (typeof supportsBinary == 'function') {
            callback = supportsBinary;
            supportsBinary = null;
          }
          var isBinary = hasBinary(packets);
          if (supportsBinary && isBinary) {
            if (Blob && !dontSendBlobs) {
              return exports.encodePayloadAsBlob(packets, callback);
            }
            return exports.encodePayloadAsArrayBuffer(packets, callback);
          }
          if (!packets.length) {
            return callback('0:');
          }
          function setLengthHeader(message) {
            return message.length + ':' + message;
          }
          function encodeOne(packet, doneCallback) {
            exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
              doneCallback(null, setLengthHeader(message));
            });
          }
          map(packets, encodeOne, function(err, results) {
            return callback(results.join(''));
          });
        };
        function map(ary, each, done) {
          var result = new Array(ary.length);
          var next = after(ary.length, done);
          var eachWithIndex = function(i, el, cb) {
            each(el, function(error, msg) {
              result[i] = msg;
              cb(error, result);
            });
          };
          for (var i = 0; i < ary.length; i++) {
            eachWithIndex(i, ary[i], next);
          }
        }
        exports.decodePayload = function(data, binaryType, callback) {
          if (typeof data != 'string') {
            return exports.decodePayloadAsBinary(data, binaryType, callback);
          }
          if (typeof binaryType === 'function') {
            callback = binaryType;
            binaryType = null;
          }
          var packet;
          if (data == '') {
            return callback(err, 0, 1);
          }
          var length = '',
              n,
              msg;
          for (var i = 0,
              l = data.length; i < l; i++) {
            var chr = data.charAt(i);
            if (':' != chr) {
              length += chr;
            } else {
              if ('' == length || (length != (n = Number(length)))) {
                return callback(err, 0, 1);
              }
              msg = data.substr(i + 1, n);
              if (length != msg.length) {
                return callback(err, 0, 1);
              }
              if (msg.length) {
                packet = exports.decodePacket(msg, binaryType, true);
                if (err.type == packet.type && err.data == packet.data) {
                  return callback(err, 0, 1);
                }
                var ret = callback(packet, i + n, l);
                if (false === ret)
                  return;
              }
              i += n;
              length = '';
            }
          }
          if (length != '') {
            return callback(err, 0, 1);
          }
        };
        exports.encodePayloadAsArrayBuffer = function(packets, callback) {
          if (!packets.length) {
            return callback(new ArrayBuffer(0));
          }
          function encodeOne(packet, doneCallback) {
            exports.encodePacket(packet, true, true, function(data) {
              return doneCallback(null, data);
            });
          }
          map(packets, encodeOne, function(err, encodedPackets) {
            var totalLength = encodedPackets.reduce(function(acc, p) {
              var len;
              if (typeof p === 'string') {
                len = p.length;
              } else {
                len = p.byteLength;
              }
              return acc + len.toString().length + len + 2;
            }, 0);
            var resultArray = new Uint8Array(totalLength);
            var bufferIndex = 0;
            encodedPackets.forEach(function(p) {
              var isString = typeof p === 'string';
              var ab = p;
              if (isString) {
                var view = new Uint8Array(p.length);
                for (var i = 0; i < p.length; i++) {
                  view[i] = p.charCodeAt(i);
                }
                ab = view.buffer;
              }
              if (isString) {
                resultArray[bufferIndex++] = 0;
              } else {
                resultArray[bufferIndex++] = 1;
              }
              var lenStr = ab.byteLength.toString();
              for (var i = 0; i < lenStr.length; i++) {
                resultArray[bufferIndex++] = parseInt(lenStr[i]);
              }
              resultArray[bufferIndex++] = 255;
              var view = new Uint8Array(ab);
              for (var i = 0; i < view.length; i++) {
                resultArray[bufferIndex++] = view[i];
              }
            });
            return callback(resultArray.buffer);
          });
        };
        exports.encodePayloadAsBlob = function(packets, callback) {
          function encodeOne(packet, doneCallback) {
            exports.encodePacket(packet, true, true, function(encoded) {
              var binaryIdentifier = new Uint8Array(1);
              binaryIdentifier[0] = 1;
              if (typeof encoded === 'string') {
                var view = new Uint8Array(encoded.length);
                for (var i = 0; i < encoded.length; i++) {
                  view[i] = encoded.charCodeAt(i);
                }
                encoded = view.buffer;
                binaryIdentifier[0] = 0;
              }
              var len = (encoded instanceof ArrayBuffer) ? encoded.byteLength : encoded.size;
              var lenStr = len.toString();
              var lengthAry = new Uint8Array(lenStr.length + 1);
              for (var i = 0; i < lenStr.length; i++) {
                lengthAry[i] = parseInt(lenStr[i]);
              }
              lengthAry[lenStr.length] = 255;
              if (Blob) {
                var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
                doneCallback(null, blob);
              }
            });
          }
          map(packets, encodeOne, function(err, results) {
            return callback(new Blob(results));
          });
        };
        exports.decodePayloadAsBinary = function(data, binaryType, callback) {
          if (typeof binaryType === 'function') {
            callback = binaryType;
            binaryType = null;
          }
          var bufferTail = data;
          var buffers = [];
          var numberTooLong = false;
          while (bufferTail.byteLength > 0) {
            var tailArray = new Uint8Array(bufferTail);
            var isString = tailArray[0] === 0;
            var msgLength = '';
            for (var i = 1; ; i++) {
              if (tailArray[i] == 255)
                break;
              if (msgLength.length > 310) {
                numberTooLong = true;
                break;
              }
              msgLength += tailArray[i];
            }
            if (numberTooLong)
              return callback(err, 0, 1);
            bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
            msgLength = parseInt(msgLength);
            var msg = sliceBuffer(bufferTail, 0, msgLength);
            if (isString) {
              try {
                msg = String.fromCharCode.apply(null, new Uint8Array(msg));
              } catch (e) {
                var typed = new Uint8Array(msg);
                msg = '';
                for (var i = 0; i < typed.length; i++) {
                  msg += String.fromCharCode(typed[i]);
                }
              }
            }
            buffers.push(msg);
            bufferTail = sliceBuffer(bufferTail, msgLength);
          }
          var total = buffers.length;
          buffers.forEach(function(buffer, i) {
            callback(exports.decodePacket(buffer, binaryType, true), i, total);
          });
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./keys": 20,
      "after": 11,
      "arraybuffer.slice": 12,
      "base64-arraybuffer": 13,
      "blob": 14,
      "has-binary": 21,
      "utf8": 29
    }],
    20: [function(_dereq_, module, exports) {
      module.exports = Object.keys || function keys(obj) {
        var arr = [];
        var has = Object.prototype.hasOwnProperty;
        for (var i in obj) {
          if (has.call(obj, i)) {
            arr.push(i);
          }
        }
        return arr;
      };
    }, {}],
    21: [function(_dereq_, module, exports) {
      (function(global) {
        var isArray = _dereq_('isarray');
        module.exports = hasBinary;
        function hasBinary(data) {
          function _hasBinary(obj) {
            if (!obj)
              return false;
            if ((global.Buffer && global.Buffer.isBuffer(obj)) || (global.ArrayBuffer && obj instanceof ArrayBuffer) || (global.Blob && obj instanceof Blob) || (global.File && obj instanceof File)) {
              return true;
            }
            if (isArray(obj)) {
              for (var i = 0; i < obj.length; i++) {
                if (_hasBinary(obj[i])) {
                  return true;
                }
              }
            } else if (obj && 'object' == typeof obj) {
              if (obj.toJSON) {
                obj = obj.toJSON();
              }
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                  return true;
                }
              }
            }
            return false;
          }
          return _hasBinary(data);
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {"isarray": 24}],
    22: [function(_dereq_, module, exports) {
      try {
        module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
      } catch (err) {
        module.exports = false;
      }
    }, {}],
    23: [function(_dereq_, module, exports) {
      var indexOf = [].indexOf;
      module.exports = function(arr, obj) {
        if (indexOf)
          return arr.indexOf(obj);
        for (var i = 0; i < arr.length; ++i) {
          if (arr[i] === obj)
            return i;
        }
        return -1;
      };
    }, {}],
    24: [function(_dereq_, module, exports) {
      module.exports = Array.isArray || function(arr) {
        return Object.prototype.toString.call(arr) == '[object Array]';
      };
    }, {}],
    25: [function(_dereq_, module, exports) {
      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var y = d * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        if ('string' == typeof val)
          return parse(val);
        return options.long ? long(val) : short(val);
      };
      function parse(str) {
        str = '' + str;
        if (str.length > 10000)
          return;
        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
        if (!match)
          return;
        var n = parseFloat(match[1]);
        var type = (match[2] || 'ms').toLowerCase();
        switch (type) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * y;
          case 'days':
          case 'day':
          case 'd':
            return n * d;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * h;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * m;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * s;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;
        }
      }
      function short(ms) {
        if (ms >= d)
          return Math.round(ms / d) + 'd';
        if (ms >= h)
          return Math.round(ms / h) + 'h';
        if (ms >= m)
          return Math.round(ms / m) + 'm';
        if (ms >= s)
          return Math.round(ms / s) + 's';
        return ms + 'ms';
      }
      function long(ms) {
        return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
      }
      function plural(ms, n, name) {
        if (ms < n)
          return;
        if (ms < n * 1.5)
          return Math.floor(ms / n) + ' ' + name;
        return Math.ceil(ms / n) + ' ' + name + 's';
      }
    }, {}],
    26: [function(_dereq_, module, exports) {
      (function(global) {
        var rvalidchars = /^[\],:{}\s]*$/;
        var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
        var rtrimLeft = /^\s+/;
        var rtrimRight = /\s+$/;
        module.exports = function parsejson(data) {
          if ('string' != typeof data || !data) {
            return null;
          }
          data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
          if (global.JSON && JSON.parse) {
            return JSON.parse(data);
          }
          if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
            return (new Function('return ' + data))();
          }
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}],
    27: [function(_dereq_, module, exports) {
      exports.encode = function(obj) {
        var str = '';
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (str.length)
              str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
          }
        }
        return str;
      };
      exports.decode = function(qs) {
        var qry = {};
        var pairs = qs.split('&');
        for (var i = 0,
            l = pairs.length; i < l; i++) {
          var pair = pairs[i].split('=');
          qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return qry;
      };
    }, {}],
    28: [function(_dereq_, module, exports) {
      var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
      module.exports = function parseuri(str) {
        var src = str,
            b = str.indexOf('['),
            e = str.indexOf(']');
        if (b != -1 && e != -1) {
          str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
        }
        var m = re.exec(str || ''),
            uri = {},
            i = 14;
        while (i--) {
          uri[parts[i]] = m[i] || '';
        }
        if (b != -1 && e != -1) {
          uri.source = src;
          uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
          uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
          uri.ipv6uri = true;
        }
        return uri;
      };
    }, {}],
    29: [function(_dereq_, module, exports) {
      (function(global) {
        ;
        (function(root) {
          var freeExports = typeof exports == 'object' && exports;
          var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;
          var freeGlobal = typeof global == 'object' && global;
          if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
            root = freeGlobal;
          }
          var stringFromCharCode = String.fromCharCode;
          function ucs2decode(string) {
            var output = [];
            var counter = 0;
            var length = string.length;
            var value;
            var extra;
            while (counter < length) {
              value = string.charCodeAt(counter++);
              if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) {
                  output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                } else {
                  output.push(value);
                  counter--;
                }
              } else {
                output.push(value);
              }
            }
            return output;
          }
          function ucs2encode(array) {
            var length = array.length;
            var index = -1;
            var value;
            var output = '';
            while (++index < length) {
              value = array[index];
              if (value > 0xFFFF) {
                value -= 0x10000;
                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                value = 0xDC00 | value & 0x3FF;
              }
              output += stringFromCharCode(value);
            }
            return output;
          }
          function checkScalarValue(codePoint) {
            if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
              throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
            }
          }
          function createByte(codePoint, shift) {
            return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
          }
          function encodeCodePoint(codePoint) {
            if ((codePoint & 0xFFFFFF80) == 0) {
              return stringFromCharCode(codePoint);
            }
            var symbol = '';
            if ((codePoint & 0xFFFFF800) == 0) {
              symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
            } else if ((codePoint & 0xFFFF0000) == 0) {
              checkScalarValue(codePoint);
              symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
              symbol += createByte(codePoint, 6);
            } else if ((codePoint & 0xFFE00000) == 0) {
              symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
              symbol += createByte(codePoint, 12);
              symbol += createByte(codePoint, 6);
            }
            symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
            return symbol;
          }
          function utf8encode(string) {
            var codePoints = ucs2decode(string);
            var length = codePoints.length;
            var index = -1;
            var codePoint;
            var byteString = '';
            while (++index < length) {
              codePoint = codePoints[index];
              byteString += encodeCodePoint(codePoint);
            }
            return byteString;
          }
          function readContinuationByte() {
            if (byteIndex >= byteCount) {
              throw Error('Invalid byte index');
            }
            var continuationByte = byteArray[byteIndex] & 0xFF;
            byteIndex++;
            if ((continuationByte & 0xC0) == 0x80) {
              return continuationByte & 0x3F;
            }
            throw Error('Invalid continuation byte');
          }
          function decodeSymbol() {
            var byte1;
            var byte2;
            var byte3;
            var byte4;
            var codePoint;
            if (byteIndex > byteCount) {
              throw Error('Invalid byte index');
            }
            if (byteIndex == byteCount) {
              return false;
            }
            byte1 = byteArray[byteIndex] & 0xFF;
            byteIndex++;
            if ((byte1 & 0x80) == 0) {
              return byte1;
            }
            if ((byte1 & 0xE0) == 0xC0) {
              var byte2 = readContinuationByte();
              codePoint = ((byte1 & 0x1F) << 6) | byte2;
              if (codePoint >= 0x80) {
                return codePoint;
              } else {
                throw Error('Invalid continuation byte');
              }
            }
            if ((byte1 & 0xF0) == 0xE0) {
              byte2 = readContinuationByte();
              byte3 = readContinuationByte();
              codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
              if (codePoint >= 0x0800) {
                checkScalarValue(codePoint);
                return codePoint;
              } else {
                throw Error('Invalid continuation byte');
              }
            }
            if ((byte1 & 0xF8) == 0xF0) {
              byte2 = readContinuationByte();
              byte3 = readContinuationByte();
              byte4 = readContinuationByte();
              codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) | (byte3 << 0x06) | byte4;
              if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
                return codePoint;
              }
            }
            throw Error('Invalid UTF-8 detected');
          }
          var byteArray;
          var byteCount;
          var byteIndex;
          function utf8decode(byteString) {
            byteArray = ucs2decode(byteString);
            byteCount = byteArray.length;
            byteIndex = 0;
            var codePoints = [];
            var tmp;
            while ((tmp = decodeSymbol()) !== false) {
              codePoints.push(tmp);
            }
            return ucs2encode(codePoints);
          }
          var utf8 = {
            'version': '2.0.0',
            'encode': utf8encode,
            'decode': utf8decode
          };
          if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
            define(function() {
              return utf8;
            });
          } else if (freeExports && !freeExports.nodeType) {
            if (freeModule) {
              freeModule.exports = utf8;
            } else {
              var object = {};
              var hasOwnProperty = object.hasOwnProperty;
              for (var key in utf8) {
                hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
              }
            }
          } else {
            root.utf8 = utf8;
          }
        }(this));
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}],
    30: [function(_dereq_, module, exports) {
      'use strict';
      var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
          length = 64,
          map = {},
          seed = 0,
          i = 0,
          prev;
      function encode(num) {
        var encoded = '';
        do {
          encoded = alphabet[num % length] + encoded;
          num = Math.floor(num / length);
        } while (num > 0);
        return encoded;
      }
      function decode(str) {
        var decoded = 0;
        for (i = 0; i < str.length; i++) {
          decoded = decoded * length + map[str.charAt(i)];
        }
        return decoded;
      }
      function yeast() {
        var now = encode(+new Date());
        if (now !== prev)
          return seed = 0, prev = now;
        return now + '.' + encode(seed++);
      }
      for (; i < length; i++)
        map[alphabet[i]] = i;
      yeast.encode = encode;
      yeast.decode = decode;
      module.exports = yeast;
    }, {}],
    31: [function(_dereq_, module, exports) {
      var url = _dereq_('./url');
      var parser = _dereq_('socket.io-parser');
      var Manager = _dereq_('./manager');
      var debug = _dereq_('debug')('socket.io-client');
      module.exports = exports = lookup;
      var cache = exports.managers = {};
      function lookup(uri, opts) {
        if (typeof uri == 'object') {
          opts = uri;
          uri = undefined;
        }
        opts = opts || {};
        var parsed = url(uri);
        var source = parsed.source;
        var id = parsed.id;
        var path = parsed.path;
        var sameNamespace = cache[id] && path in cache[id].nsps;
        var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
        var io;
        if (newConnection) {
          debug('ignoring socket cache for %s', source);
          io = Manager(source, opts);
        } else {
          if (!cache[id]) {
            debug('new io instance for %s', source);
            cache[id] = Manager(source, opts);
          }
          io = cache[id];
        }
        return io.socket(parsed.path);
      }
      exports.protocol = parser.protocol;
      exports.connect = lookup;
      exports.Manager = _dereq_('./manager');
      exports.Socket = _dereq_('./socket');
    }, {
      "./manager": 32,
      "./socket": 34,
      "./url": 35,
      "debug": 39,
      "socket.io-parser": 47
    }],
    32: [function(_dereq_, module, exports) {
      var eio = _dereq_('engine.io-client');
      var Socket = _dereq_('./socket');
      var Emitter = _dereq_('component-emitter');
      var parser = _dereq_('socket.io-parser');
      var on = _dereq_('./on');
      var bind = _dereq_('component-bind');
      var debug = _dereq_('debug')('socket.io-client:manager');
      var indexOf = _dereq_('indexof');
      var Backoff = _dereq_('backo2');
      var has = Object.prototype.hasOwnProperty;
      module.exports = Manager;
      function Manager(uri, opts) {
        if (!(this instanceof Manager))
          return new Manager(uri, opts);
        if (uri && ('object' == typeof uri)) {
          opts = uri;
          uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || '/socket.io';
        this.nsps = {};
        this.subs = [];
        this.opts = opts;
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor(opts.randomizationFactor || 0.5);
        this.backoff = new Backoff({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this.readyState = 'closed';
        this.uri = uri;
        this.connecting = [];
        this.lastPing = null;
        this.encoding = false;
        this.packetBuffer = [];
        this.encoder = new parser.Encoder();
        this.decoder = new parser.Decoder();
        this.autoConnect = opts.autoConnect !== false;
        if (this.autoConnect)
          this.open();
      }
      Manager.prototype.emitAll = function() {
        this.emit.apply(this, arguments);
        for (var nsp in this.nsps) {
          if (has.call(this.nsps, nsp)) {
            this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
          }
        }
      };
      Manager.prototype.updateSocketIds = function() {
        for (var nsp in this.nsps) {
          if (has.call(this.nsps, nsp)) {
            this.nsps[nsp].id = this.engine.id;
          }
        }
      };
      Emitter(Manager.prototype);
      Manager.prototype.reconnection = function(v) {
        if (!arguments.length)
          return this._reconnection;
        this._reconnection = !!v;
        return this;
      };
      Manager.prototype.reconnectionAttempts = function(v) {
        if (!arguments.length)
          return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
      };
      Manager.prototype.reconnectionDelay = function(v) {
        if (!arguments.length)
          return this._reconnectionDelay;
        this._reconnectionDelay = v;
        this.backoff && this.backoff.setMin(v);
        return this;
      };
      Manager.prototype.randomizationFactor = function(v) {
        if (!arguments.length)
          return this._randomizationFactor;
        this._randomizationFactor = v;
        this.backoff && this.backoff.setJitter(v);
        return this;
      };
      Manager.prototype.reconnectionDelayMax = function(v) {
        if (!arguments.length)
          return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        this.backoff && this.backoff.setMax(v);
        return this;
      };
      Manager.prototype.timeout = function(v) {
        if (!arguments.length)
          return this._timeout;
        this._timeout = v;
        return this;
      };
      Manager.prototype.maybeReconnectOnOpen = function() {
        if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
          this.reconnect();
        }
      };
      Manager.prototype.open = Manager.prototype.connect = function(fn) {
        debug('readyState %s', this.readyState);
        if (~this.readyState.indexOf('open'))
          return this;
        debug('opening %s', this.uri);
        this.engine = eio(this.uri, this.opts);
        var socket = this.engine;
        var self = this;
        this.readyState = 'opening';
        this.skipReconnect = false;
        var openSub = on(socket, 'open', function() {
          self.onopen();
          fn && fn();
        });
        var errorSub = on(socket, 'error', function(data) {
          debug('connect_error');
          self.cleanup();
          self.readyState = 'closed';
          self.emitAll('connect_error', data);
          if (fn) {
            var err = new Error('Connection error');
            err.data = data;
            fn(err);
          } else {
            self.maybeReconnectOnOpen();
          }
        });
        if (false !== this._timeout) {
          var timeout = this._timeout;
          debug('connect attempt will timeout after %d', timeout);
          var timer = setTimeout(function() {
            debug('connect attempt timed out after %d', timeout);
            openSub.destroy();
            socket.close();
            socket.emit('error', 'timeout');
            self.emitAll('connect_timeout', timeout);
          }, timeout);
          this.subs.push({destroy: function() {
              clearTimeout(timer);
            }});
        }
        this.subs.push(openSub);
        this.subs.push(errorSub);
        return this;
      };
      Manager.prototype.onopen = function() {
        debug('open');
        this.cleanup();
        this.readyState = 'open';
        this.emit('open');
        var socket = this.engine;
        this.subs.push(on(socket, 'data', bind(this, 'ondata')));
        this.subs.push(on(socket, 'ping', bind(this, 'onping')));
        this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
        this.subs.push(on(socket, 'error', bind(this, 'onerror')));
        this.subs.push(on(socket, 'close', bind(this, 'onclose')));
        this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
      };
      Manager.prototype.onping = function() {
        this.lastPing = new Date;
        this.emitAll('ping');
      };
      Manager.prototype.onpong = function() {
        this.emitAll('pong', new Date - this.lastPing);
      };
      Manager.prototype.ondata = function(data) {
        this.decoder.add(data);
      };
      Manager.prototype.ondecoded = function(packet) {
        this.emit('packet', packet);
      };
      Manager.prototype.onerror = function(err) {
        debug('error', err);
        this.emitAll('error', err);
      };
      Manager.prototype.socket = function(nsp) {
        var socket = this.nsps[nsp];
        if (!socket) {
          socket = new Socket(this, nsp);
          this.nsps[nsp] = socket;
          var self = this;
          socket.on('connecting', onConnecting);
          socket.on('connect', function() {
            socket.id = self.engine.id;
          });
          if (this.autoConnect) {
            onConnecting();
          }
        }
        function onConnecting() {
          if (!~indexOf(self.connecting, socket)) {
            self.connecting.push(socket);
          }
        }
        return socket;
      };
      Manager.prototype.destroy = function(socket) {
        var index = indexOf(this.connecting, socket);
        if (~index)
          this.connecting.splice(index, 1);
        if (this.connecting.length)
          return;
        this.close();
      };
      Manager.prototype.packet = function(packet) {
        debug('writing packet %j', packet);
        var self = this;
        if (!self.encoding) {
          self.encoding = true;
          this.encoder.encode(packet, function(encodedPackets) {
            for (var i = 0; i < encodedPackets.length; i++) {
              self.engine.write(encodedPackets[i], packet.options);
            }
            self.encoding = false;
            self.processPacketQueue();
          });
        } else {
          self.packetBuffer.push(packet);
        }
      };
      Manager.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
          var pack = this.packetBuffer.shift();
          this.packet(pack);
        }
      };
      Manager.prototype.cleanup = function() {
        debug('cleanup');
        var sub;
        while (sub = this.subs.shift())
          sub.destroy();
        this.packetBuffer = [];
        this.encoding = false;
        this.lastPing = null;
        this.decoder.destroy();
      };
      Manager.prototype.close = Manager.prototype.disconnect = function() {
        debug('disconnect');
        this.skipReconnect = true;
        this.reconnecting = false;
        if ('opening' == this.readyState) {
          this.cleanup();
        }
        this.backoff.reset();
        this.readyState = 'closed';
        if (this.engine)
          this.engine.close();
      };
      Manager.prototype.onclose = function(reason) {
        debug('onclose');
        this.cleanup();
        this.backoff.reset();
        this.readyState = 'closed';
        this.emit('close', reason);
        if (this._reconnection && !this.skipReconnect) {
          this.reconnect();
        }
      };
      Manager.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect)
          return this;
        var self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
          debug('reconnect failed');
          this.backoff.reset();
          this.emitAll('reconnect_failed');
          this.reconnecting = false;
        } else {
          var delay = this.backoff.duration();
          debug('will wait %dms before reconnect attempt', delay);
          this.reconnecting = true;
          var timer = setTimeout(function() {
            if (self.skipReconnect)
              return;
            debug('attempting reconnect');
            self.emitAll('reconnect_attempt', self.backoff.attempts);
            self.emitAll('reconnecting', self.backoff.attempts);
            if (self.skipReconnect)
              return;
            self.open(function(err) {
              if (err) {
                debug('reconnect attempt error');
                self.reconnecting = false;
                self.reconnect();
                self.emitAll('reconnect_error', err.data);
              } else {
                debug('reconnect success');
                self.onreconnect();
              }
            });
          }, delay);
          this.subs.push({destroy: function() {
              clearTimeout(timer);
            }});
        }
      };
      Manager.prototype.onreconnect = function() {
        var attempt = this.backoff.attempts;
        this.reconnecting = false;
        this.backoff.reset();
        this.updateSocketIds();
        this.emitAll('reconnect', attempt);
      };
    }, {
      "./on": 33,
      "./socket": 34,
      "backo2": 36,
      "component-bind": 37,
      "component-emitter": 38,
      "debug": 39,
      "engine.io-client": 1,
      "indexof": 42,
      "socket.io-parser": 47
    }],
    33: [function(_dereq_, module, exports) {
      module.exports = on;
      function on(obj, ev, fn) {
        obj.on(ev, fn);
        return {destroy: function() {
            obj.removeListener(ev, fn);
          }};
      }
    }, {}],
    34: [function(_dereq_, module, exports) {
      var parser = _dereq_('socket.io-parser');
      var Emitter = _dereq_('component-emitter');
      var toArray = _dereq_('to-array');
      var on = _dereq_('./on');
      var bind = _dereq_('component-bind');
      var debug = _dereq_('debug')('socket.io-client:socket');
      var hasBin = _dereq_('has-binary');
      module.exports = exports = Socket;
      var events = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1
      };
      var emit = Emitter.prototype.emit;
      function Socket(io, nsp) {
        this.io = io;
        this.nsp = nsp;
        this.json = this;
        this.ids = 0;
        this.acks = {};
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.connected = false;
        this.disconnected = true;
        if (this.io.autoConnect)
          this.open();
      }
      Emitter(Socket.prototype);
      Socket.prototype.subEvents = function() {
        if (this.subs)
          return;
        var io = this.io;
        this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
      };
      Socket.prototype.open = Socket.prototype.connect = function() {
        if (this.connected)
          return this;
        this.subEvents();
        this.io.open();
        if ('open' == this.io.readyState)
          this.onopen();
        this.emit('connecting');
        return this;
      };
      Socket.prototype.send = function() {
        var args = toArray(arguments);
        args.unshift('message');
        this.emit.apply(this, args);
        return this;
      };
      Socket.prototype.emit = function(ev) {
        if (events.hasOwnProperty(ev)) {
          emit.apply(this, arguments);
          return this;
        }
        var args = toArray(arguments);
        var parserType = parser.EVENT;
        if (hasBin(args)) {
          parserType = parser.BINARY_EVENT;
        }
        var packet = {
          type: parserType,
          data: args
        };
        packet.options = {};
        packet.options.compress = !this.flags || false !== this.flags.compress;
        if ('function' == typeof args[args.length - 1]) {
          debug('emitting packet with ack id %d', this.ids);
          this.acks[this.ids] = args.pop();
          packet.id = this.ids++;
        }
        if (this.connected) {
          this.packet(packet);
        } else {
          this.sendBuffer.push(packet);
        }
        delete this.flags;
        return this;
      };
      Socket.prototype.packet = function(packet) {
        packet.nsp = this.nsp;
        this.io.packet(packet);
      };
      Socket.prototype.onopen = function() {
        debug('transport is open - connecting');
        if ('/' != this.nsp) {
          this.packet({type: parser.CONNECT});
        }
      };
      Socket.prototype.onclose = function(reason) {
        debug('close (%s)', reason);
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        this.emit('disconnect', reason);
      };
      Socket.prototype.onpacket = function(packet) {
        if (packet.nsp != this.nsp)
          return;
        switch (packet.type) {
          case parser.CONNECT:
            this.onconnect();
            break;
          case parser.EVENT:
            this.onevent(packet);
            break;
          case parser.BINARY_EVENT:
            this.onevent(packet);
            break;
          case parser.ACK:
            this.onack(packet);
            break;
          case parser.BINARY_ACK:
            this.onack(packet);
            break;
          case parser.DISCONNECT:
            this.ondisconnect();
            break;
          case parser.ERROR:
            this.emit('error', packet.data);
            break;
        }
      };
      Socket.prototype.onevent = function(packet) {
        var args = packet.data || [];
        debug('emitting event %j', args);
        if (null != packet.id) {
          debug('attaching ack callback to event');
          args.push(this.ack(packet.id));
        }
        if (this.connected) {
          emit.apply(this, args);
        } else {
          this.receiveBuffer.push(args);
        }
      };
      Socket.prototype.ack = function(id) {
        var self = this;
        var sent = false;
        return function() {
          if (sent)
            return;
          sent = true;
          var args = toArray(arguments);
          debug('sending ack %j', args);
          var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
          self.packet({
            type: type,
            id: id,
            data: args
          });
        };
      };
      Socket.prototype.onack = function(packet) {
        var ack = this.acks[packet.id];
        if ('function' == typeof ack) {
          debug('calling ack %s with %j', packet.id, packet.data);
          ack.apply(this, packet.data);
          delete this.acks[packet.id];
        } else {
          debug('bad ack %s', packet.id);
        }
      };
      Socket.prototype.onconnect = function() {
        this.connected = true;
        this.disconnected = false;
        this.emit('connect');
        this.emitBuffered();
      };
      Socket.prototype.emitBuffered = function() {
        var i;
        for (i = 0; i < this.receiveBuffer.length; i++) {
          emit.apply(this, this.receiveBuffer[i]);
        }
        this.receiveBuffer = [];
        for (i = 0; i < this.sendBuffer.length; i++) {
          this.packet(this.sendBuffer[i]);
        }
        this.sendBuffer = [];
      };
      Socket.prototype.ondisconnect = function() {
        debug('server disconnect (%s)', this.nsp);
        this.destroy();
        this.onclose('io server disconnect');
      };
      Socket.prototype.destroy = function() {
        if (this.subs) {
          for (var i = 0; i < this.subs.length; i++) {
            this.subs[i].destroy();
          }
          this.subs = null;
        }
        this.io.destroy(this);
      };
      Socket.prototype.close = Socket.prototype.disconnect = function() {
        if (this.connected) {
          debug('performing disconnect (%s)', this.nsp);
          this.packet({type: parser.DISCONNECT});
        }
        this.destroy();
        if (this.connected) {
          this.onclose('io client disconnect');
        }
        return this;
      };
      Socket.prototype.compress = function(compress) {
        this.flags = this.flags || {};
        this.flags.compress = compress;
        return this;
      };
    }, {
      "./on": 33,
      "component-bind": 37,
      "component-emitter": 38,
      "debug": 39,
      "has-binary": 41,
      "socket.io-parser": 47,
      "to-array": 51
    }],
    35: [function(_dereq_, module, exports) {
      (function(global) {
        var parseuri = _dereq_('parseuri');
        var debug = _dereq_('debug')('socket.io-client:url');
        module.exports = url;
        function url(uri, loc) {
          var obj = uri;
          var loc = loc || global.location;
          if (null == uri)
            uri = loc.protocol + '//' + loc.host;
          if ('string' == typeof uri) {
            if ('/' == uri.charAt(0)) {
              if ('/' == uri.charAt(1)) {
                uri = loc.protocol + uri;
              } else {
                uri = loc.host + uri;
              }
            }
            if (!/^(https?|wss?):\/\//.test(uri)) {
              debug('protocol-less url %s', uri);
              if ('undefined' != typeof loc) {
                uri = loc.protocol + '//' + uri;
              } else {
                uri = 'https://' + uri;
              }
            }
            debug('parse %s', uri);
            obj = parseuri(uri);
          }
          if (!obj.port) {
            if (/^(http|ws)$/.test(obj.protocol)) {
              obj.port = '80';
            } else if (/^(http|ws)s$/.test(obj.protocol)) {
              obj.port = '443';
            }
          }
          obj.path = obj.path || '/';
          var ipv6 = obj.host.indexOf(':') !== -1;
          var host = ipv6 ? '[' + obj.host + ']' : obj.host;
          obj.id = obj.protocol + '://' + host + ':' + obj.port;
          obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : (':' + obj.port));
          return obj;
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "debug": 39,
      "parseuri": 45
    }],
    36: [function(_dereq_, module, exports) {
      module.exports = Backoff;
      function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 10000;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
      }
      Backoff.prototype.duration = function() {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var rand = Math.random();
          var deviation = Math.floor(rand * this.jitter * ms);
          ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
      };
      Backoff.prototype.reset = function() {
        this.attempts = 0;
      };
      Backoff.prototype.setMin = function(min) {
        this.ms = min;
      };
      Backoff.prototype.setMax = function(max) {
        this.max = max;
      };
      Backoff.prototype.setJitter = function(jitter) {
        this.jitter = jitter;
      };
    }, {}],
    37: [function(_dereq_, module, exports) {
      var slice = [].slice;
      module.exports = function(obj, fn) {
        if ('string' == typeof fn)
          fn = obj[fn];
        if ('function' != typeof fn)
          throw new Error('bind() requires a function');
        var args = slice.call(arguments, 2);
        return function() {
          return fn.apply(obj, args.concat(slice.call(arguments)));
        };
      };
    }, {}],
    38: [function(_dereq_, module, exports) {
      module.exports = Emitter;
      function Emitter(obj) {
        if (obj)
          return mixin(obj);
      }
      ;
      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }
      Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
        return this;
      };
      Emitter.prototype.once = function(event, fn) {
        function on() {
          this.off(event, on);
          fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
      };
      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }
        var callbacks = this._callbacks['$' + event];
        if (!callbacks)
          return this;
        if (1 == arguments.length) {
          delete this._callbacks['$' + event];
          return this;
        }
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        return this;
      };
      Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this._callbacks['$' + event];
        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0,
              len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }
        return this;
      };
      Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
      };
      Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
      };
    }, {}],
    39: [function(_dereq_, module, exports) {
      arguments[4][17][0].apply(exports, arguments);
    }, {
      "./debug": 40,
      "dup": 17
    }],
    40: [function(_dereq_, module, exports) {
      arguments[4][18][0].apply(exports, arguments);
    }, {
      "dup": 18,
      "ms": 44
    }],
    41: [function(_dereq_, module, exports) {
      (function(global) {
        var isArray = _dereq_('isarray');
        module.exports = hasBinary;
        function hasBinary(data) {
          function _hasBinary(obj) {
            if (!obj)
              return false;
            if ((global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) || (global.ArrayBuffer && obj instanceof ArrayBuffer) || (global.Blob && obj instanceof Blob) || (global.File && obj instanceof File)) {
              return true;
            }
            if (isArray(obj)) {
              for (var i = 0; i < obj.length; i++) {
                if (_hasBinary(obj[i])) {
                  return true;
                }
              }
            } else if (obj && 'object' == typeof obj) {
              if (obj.toJSON && 'function' == typeof obj.toJSON) {
                obj = obj.toJSON();
              }
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                  return true;
                }
              }
            }
            return false;
          }
          return _hasBinary(data);
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {"isarray": 43}],
    42: [function(_dereq_, module, exports) {
      arguments[4][23][0].apply(exports, arguments);
    }, {"dup": 23}],
    43: [function(_dereq_, module, exports) {
      arguments[4][24][0].apply(exports, arguments);
    }, {"dup": 24}],
    44: [function(_dereq_, module, exports) {
      arguments[4][25][0].apply(exports, arguments);
    }, {"dup": 25}],
    45: [function(_dereq_, module, exports) {
      arguments[4][28][0].apply(exports, arguments);
    }, {"dup": 28}],
    46: [function(_dereq_, module, exports) {
      (function(global) {
        var isArray = _dereq_('isarray');
        var isBuf = _dereq_('./is-buffer');
        exports.deconstructPacket = function(packet) {
          var buffers = [];
          var packetData = packet.data;
          function _deconstructPacket(data) {
            if (!data)
              return data;
            if (isBuf(data)) {
              var placeholder = {
                _placeholder: true,
                num: buffers.length
              };
              buffers.push(data);
              return placeholder;
            } else if (isArray(data)) {
              var newData = new Array(data.length);
              for (var i = 0; i < data.length; i++) {
                newData[i] = _deconstructPacket(data[i]);
              }
              return newData;
            } else if ('object' == typeof data && !(data instanceof Date)) {
              var newData = {};
              for (var key in data) {
                newData[key] = _deconstructPacket(data[key]);
              }
              return newData;
            }
            return data;
          }
          var pack = packet;
          pack.data = _deconstructPacket(packetData);
          pack.attachments = buffers.length;
          return {
            packet: pack,
            buffers: buffers
          };
        };
        exports.reconstructPacket = function(packet, buffers) {
          var curPlaceHolder = 0;
          function _reconstructPacket(data) {
            if (data && data._placeholder) {
              var buf = buffers[data.num];
              return buf;
            } else if (isArray(data)) {
              for (var i = 0; i < data.length; i++) {
                data[i] = _reconstructPacket(data[i]);
              }
              return data;
            } else if (data && 'object' == typeof data) {
              for (var key in data) {
                data[key] = _reconstructPacket(data[key]);
              }
              return data;
            }
            return data;
          }
          packet.data = _reconstructPacket(packet.data);
          packet.attachments = undefined;
          return packet;
        };
        exports.removeBlobs = function(data, callback) {
          function _removeBlobs(obj, curKey, containingObject) {
            if (!obj)
              return obj;
            if ((global.Blob && obj instanceof Blob) || (global.File && obj instanceof File)) {
              pendingBlobs++;
              var fileReader = new FileReader();
              fileReader.onload = function() {
                if (containingObject) {
                  containingObject[curKey] = this.result;
                } else {
                  bloblessData = this.result;
                }
                if (!--pendingBlobs) {
                  callback(bloblessData);
                }
              };
              fileReader.readAsArrayBuffer(obj);
            } else if (isArray(obj)) {
              for (var i = 0; i < obj.length; i++) {
                _removeBlobs(obj[i], i, obj);
              }
            } else if (obj && 'object' == typeof obj && !isBuf(obj)) {
              for (var key in obj) {
                _removeBlobs(obj[key], key, obj);
              }
            }
          }
          var pendingBlobs = 0;
          var bloblessData = data;
          _removeBlobs(bloblessData);
          if (!pendingBlobs) {
            callback(bloblessData);
          }
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./is-buffer": 48,
      "isarray": 43
    }],
    47: [function(_dereq_, module, exports) {
      var debug = _dereq_('debug')('socket.io-parser');
      var json = _dereq_('json3');
      var isArray = _dereq_('isarray');
      var Emitter = _dereq_('component-emitter');
      var binary = _dereq_('./binary');
      var isBuf = _dereq_('./is-buffer');
      exports.protocol = 4;
      exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'BINARY_EVENT', 'ACK', 'BINARY_ACK', 'ERROR'];
      exports.CONNECT = 0;
      exports.DISCONNECT = 1;
      exports.EVENT = 2;
      exports.ACK = 3;
      exports.ERROR = 4;
      exports.BINARY_EVENT = 5;
      exports.BINARY_ACK = 6;
      exports.Encoder = Encoder;
      exports.Decoder = Decoder;
      function Encoder() {}
      Encoder.prototype.encode = function(obj, callback) {
        debug('encoding packet %j', obj);
        if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
          encodeAsBinary(obj, callback);
        } else {
          var encoding = encodeAsString(obj);
          callback([encoding]);
        }
      };
      function encodeAsString(obj) {
        var str = '';
        var nsp = false;
        str += obj.type;
        if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
          str += obj.attachments;
          str += '-';
        }
        if (obj.nsp && '/' != obj.nsp) {
          nsp = true;
          str += obj.nsp;
        }
        if (null != obj.id) {
          if (nsp) {
            str += ',';
            nsp = false;
          }
          str += obj.id;
        }
        if (null != obj.data) {
          if (nsp)
            str += ',';
          str += json.stringify(obj.data);
        }
        debug('encoded %j as %s', obj, str);
        return str;
      }
      function encodeAsBinary(obj, callback) {
        function writeEncoding(bloblessData) {
          var deconstruction = binary.deconstructPacket(bloblessData);
          var pack = encodeAsString(deconstruction.packet);
          var buffers = deconstruction.buffers;
          buffers.unshift(pack);
          callback(buffers);
        }
        binary.removeBlobs(obj, writeEncoding);
      }
      function Decoder() {
        this.reconstructor = null;
      }
      Emitter(Decoder.prototype);
      Decoder.prototype.add = function(obj) {
        var packet;
        if ('string' == typeof obj) {
          packet = decodeString(obj);
          if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) {
            this.reconstructor = new BinaryReconstructor(packet);
            if (this.reconstructor.reconPack.attachments === 0) {
              this.emit('decoded', packet);
            }
          } else {
            this.emit('decoded', packet);
          }
        } else if (isBuf(obj) || obj.base64) {
          if (!this.reconstructor) {
            throw new Error('got binary data when not reconstructing a packet');
          } else {
            packet = this.reconstructor.takeBinaryData(obj);
            if (packet) {
              this.reconstructor = null;
              this.emit('decoded', packet);
            }
          }
        } else {
          throw new Error('Unknown type: ' + obj);
        }
      };
      function decodeString(str) {
        var p = {};
        var i = 0;
        p.type = Number(str.charAt(0));
        if (null == exports.types[p.type])
          return error();
        if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
          var buf = '';
          while (str.charAt(++i) != '-') {
            buf += str.charAt(i);
            if (i == str.length)
              break;
          }
          if (buf != Number(buf) || str.charAt(i) != '-') {
            throw new Error('Illegal attachments');
          }
          p.attachments = Number(buf);
        }
        if ('/' == str.charAt(i + 1)) {
          p.nsp = '';
          while (++i) {
            var c = str.charAt(i);
            if (',' == c)
              break;
            p.nsp += c;
            if (i == str.length)
              break;
          }
        } else {
          p.nsp = '/';
        }
        var next = str.charAt(i + 1);
        if ('' !== next && Number(next) == next) {
          p.id = '';
          while (++i) {
            var c = str.charAt(i);
            if (null == c || Number(c) != c) {
              --i;
              break;
            }
            p.id += str.charAt(i);
            if (i == str.length)
              break;
          }
          p.id = Number(p.id);
        }
        if (str.charAt(++i)) {
          try {
            p.data = json.parse(str.substr(i));
          } catch (e) {
            return error();
          }
        }
        debug('decoded %s as %j', str, p);
        return p;
      }
      Decoder.prototype.destroy = function() {
        if (this.reconstructor) {
          this.reconstructor.finishedReconstruction();
        }
      };
      function BinaryReconstructor(packet) {
        this.reconPack = packet;
        this.buffers = [];
      }
      BinaryReconstructor.prototype.takeBinaryData = function(binData) {
        this.buffers.push(binData);
        if (this.buffers.length == this.reconPack.attachments) {
          var packet = binary.reconstructPacket(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }
        return null;
      };
      BinaryReconstructor.prototype.finishedReconstruction = function() {
        this.reconPack = null;
        this.buffers = [];
      };
      function error(data) {
        return {
          type: exports.ERROR,
          data: 'parser error'
        };
      }
    }, {
      "./binary": 46,
      "./is-buffer": 48,
      "component-emitter": 49,
      "debug": 39,
      "isarray": 43,
      "json3": 50
    }],
    48: [function(_dereq_, module, exports) {
      (function(global) {
        module.exports = isBuf;
        function isBuf(obj) {
          return (global.Buffer && global.Buffer.isBuffer(obj)) || (global.ArrayBuffer && obj instanceof ArrayBuffer);
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}],
    49: [function(_dereq_, module, exports) {
      arguments[4][15][0].apply(exports, arguments);
    }, {"dup": 15}],
    50: [function(_dereq_, module, exports) {
      (function(global) {
        ;
        (function() {
          var isLoader = typeof define === "function" && define.amd;
          var objectTypes = {
            "function": true,
            "object": true
          };
          var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
          var root = objectTypes[typeof window] && window || this,
              freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;
          if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
            root = freeGlobal;
          }
          function runInContext(context, exports) {
            context || (context = root["Object"]());
            exports || (exports = root["Object"]());
            var Number = context["Number"] || root["Number"],
                String = context["String"] || root["String"],
                Object = context["Object"] || root["Object"],
                Date = context["Date"] || root["Date"],
                SyntaxError = context["SyntaxError"] || root["SyntaxError"],
                TypeError = context["TypeError"] || root["TypeError"],
                Math = context["Math"] || root["Math"],
                nativeJSON = context["JSON"] || root["JSON"];
            if (typeof nativeJSON == "object" && nativeJSON) {
              exports.stringify = nativeJSON.stringify;
              exports.parse = nativeJSON.parse;
            }
            var objectProto = Object.prototype,
                getClass = objectProto.toString,
                isProperty,
                forEach,
                undef;
            var isExtended = new Date(-3509827334573292);
            try {
              isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 && isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
            } catch (exception) {}
            function has(name) {
              if (has[name] !== undef) {
                return has[name];
              }
              var isSupported;
              if (name == "bug-string-char-index") {
                isSupported = "a"[0] != "a";
              } else if (name == "json") {
                isSupported = has("json-stringify") && has("json-parse");
              } else {
                var value,
                    serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                if (name == "json-stringify") {
                  var stringify = exports.stringify,
                      stringifySupported = typeof stringify == "function" && isExtended;
                  if (stringifySupported) {
                    (value = function() {
                      return 1;
                    }).toJSON = value;
                    try {
                      stringifySupported = stringify(0) === "0" && stringify(new Number()) === "0" && stringify(new String()) == '""' && stringify(getClass) === undef && stringify(undef) === undef && stringify() === undef && stringify(value) === "1" && stringify([value]) == "[1]" && stringify([undef]) == "[null]" && stringify(null) == "null" && stringify([undef, getClass, null]) == "[null,null,null]" && stringify({"a": [value, true, false, null, "\x00\b\n\f\r\t"]}) == serialized && stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' && stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' && stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                    } catch (exception) {
                      stringifySupported = false;
                    }
                  }
                  isSupported = stringifySupported;
                }
                if (name == "json-parse") {
                  var parse = exports.parse;
                  if (typeof parse == "function") {
                    try {
                      if (parse("0") === 0 && !parse(false)) {
                        value = parse(serialized);
                        var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                        if (parseSupported) {
                          try {
                            parseSupported = !parse('"\t"');
                          } catch (exception) {}
                          if (parseSupported) {
                            try {
                              parseSupported = parse("01") !== 1;
                            } catch (exception) {}
                          }
                          if (parseSupported) {
                            try {
                              parseSupported = parse("1.") !== 1;
                            } catch (exception) {}
                          }
                        }
                      }
                    } catch (exception) {
                      parseSupported = false;
                    }
                  }
                  isSupported = parseSupported;
                }
              }
              return has[name] = !!isSupported;
            }
            if (!has("json")) {
              var functionClass = "[object Function]",
                  dateClass = "[object Date]",
                  numberClass = "[object Number]",
                  stringClass = "[object String]",
                  arrayClass = "[object Array]",
                  booleanClass = "[object Boolean]";
              var charIndexBuggy = has("bug-string-char-index");
              if (!isExtended) {
                var floor = Math.floor;
                var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                var getDay = function(year, month) {
                  return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                };
              }
              if (!(isProperty = objectProto.hasOwnProperty)) {
                isProperty = function(property) {
                  var members = {},
                      constructor;
                  if ((members.__proto__ = null, members.__proto__ = {"toString": 1}, members).toString != getClass) {
                    isProperty = function(property) {
                      var original = this.__proto__,
                          result = property in (this.__proto__ = null, this);
                      this.__proto__ = original;
                      return result;
                    };
                  } else {
                    constructor = members.constructor;
                    isProperty = function(property) {
                      var parent = (this.constructor || constructor).prototype;
                      return property in this && !(property in parent && this[property] === parent[property]);
                    };
                  }
                  members = null;
                  return isProperty.call(this, property);
                };
              }
              forEach = function(object, callback) {
                var size = 0,
                    Properties,
                    members,
                    property;
                (Properties = function() {
                  this.valueOf = 0;
                }).prototype.valueOf = 0;
                members = new Properties();
                for (property in members) {
                  if (isProperty.call(members, property)) {
                    size++;
                  }
                }
                Properties = members = null;
                if (!size) {
                  members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                  forEach = function(object, callback) {
                    var isFunction = getClass.call(object) == functionClass,
                        property,
                        length;
                    var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                    for (property in object) {
                      if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                        callback(property);
                      }
                    }
                    for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property))
                      ;
                  };
                } else if (size == 2) {
                  forEach = function(object, callback) {
                    var members = {},
                        isFunction = getClass.call(object) == functionClass,
                        property;
                    for (property in object) {
                      if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                        callback(property);
                      }
                    }
                  };
                } else {
                  forEach = function(object, callback) {
                    var isFunction = getClass.call(object) == functionClass,
                        property,
                        isConstructor;
                    for (property in object) {
                      if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                        callback(property);
                      }
                    }
                    if (isConstructor || isProperty.call(object, (property = "constructor"))) {
                      callback(property);
                    }
                  };
                }
                return forEach(object, callback);
              };
              if (!has("json-stringify")) {
                var Escapes = {
                  92: "\\\\",
                  34: '\\"',
                  8: "\\b",
                  12: "\\f",
                  10: "\\n",
                  13: "\\r",
                  9: "\\t"
                };
                var leadingZeroes = "000000";
                var toPaddedString = function(width, value) {
                  return (leadingZeroes + (value || 0)).slice(-width);
                };
                var unicodePrefix = "\\u00";
                var quote = function(value) {
                  var result = '"',
                      index = 0,
                      length = value.length,
                      useCharIndex = !charIndexBuggy || length > 10;
                  var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
                  for (; index < length; index++) {
                    var charCode = value.charCodeAt(index);
                    switch (charCode) {
                      case 8:
                      case 9:
                      case 10:
                      case 12:
                      case 13:
                      case 34:
                      case 92:
                        result += Escapes[charCode];
                        break;
                      default:
                        if (charCode < 32) {
                          result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                          break;
                        }
                        result += useCharIndex ? symbols[index] : value.charAt(index);
                    }
                  }
                  return result + '"';
                };
                var serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                  var value,
                      className,
                      year,
                      month,
                      date,
                      time,
                      hours,
                      minutes,
                      seconds,
                      milliseconds,
                      results,
                      element,
                      index,
                      length,
                      prefix,
                      result;
                  try {
                    value = object[property];
                  } catch (exception) {}
                  if (typeof value == "object" && value) {
                    className = getClass.call(value);
                    if (className == dateClass && !isProperty.call(value, "toJSON")) {
                      if (value > -1 / 0 && value < 1 / 0) {
                        if (getDay) {
                          date = floor(value / 864e5);
                          for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++)
                            ;
                          for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++)
                            ;
                          date = 1 + date - getDay(year, month);
                          time = (value % 864e5 + 864e5) % 864e5;
                          hours = floor(time / 36e5) % 24;
                          minutes = floor(time / 6e4) % 60;
                          seconds = floor(time / 1e3) % 60;
                          milliseconds = time % 1e3;
                        } else {
                          year = value.getUTCFullYear();
                          month = value.getUTCMonth();
                          date = value.getUTCDate();
                          hours = value.getUTCHours();
                          minutes = value.getUTCMinutes();
                          seconds = value.getUTCSeconds();
                          milliseconds = value.getUTCMilliseconds();
                        }
                        value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, milliseconds) + "Z";
                      } else {
                        value = null;
                      }
                    } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
                      value = value.toJSON(property);
                    }
                  }
                  if (callback) {
                    value = callback.call(object, property, value);
                  }
                  if (value === null) {
                    return "null";
                  }
                  className = getClass.call(value);
                  if (className == booleanClass) {
                    return "" + value;
                  } else if (className == numberClass) {
                    return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                  } else if (className == stringClass) {
                    return quote("" + value);
                  }
                  if (typeof value == "object") {
                    for (length = stack.length; length--; ) {
                      if (stack[length] === value) {
                        throw TypeError();
                      }
                    }
                    stack.push(value);
                    results = [];
                    prefix = indentation;
                    indentation += whitespace;
                    if (className == arrayClass) {
                      for (index = 0, length = value.length; index < length; index++) {
                        element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                        results.push(element === undef ? "null" : element);
                      }
                      result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
                    } else {
                      forEach(properties || value, function(property) {
                        var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                        if (element !== undef) {
                          results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                        }
                      });
                      result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
                    }
                    stack.pop();
                    return result;
                  }
                };
                exports.stringify = function(source, filter, width) {
                  var whitespace,
                      callback,
                      properties,
                      className;
                  if (objectTypes[typeof filter] && filter) {
                    if ((className = getClass.call(filter)) == functionClass) {
                      callback = filter;
                    } else if (className == arrayClass) {
                      properties = {};
                      for (var index = 0,
                          length = filter.length,
                          value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1))
                        ;
                    }
                  }
                  if (width) {
                    if ((className = getClass.call(width)) == numberClass) {
                      if ((width -= width % 1) > 0) {
                        for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ")
                          ;
                      }
                    } else if (className == stringClass) {
                      whitespace = width.length <= 10 ? width : width.slice(0, 10);
                    }
                  }
                  return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
                };
              }
              if (!has("json-parse")) {
                var fromCharCode = String.fromCharCode;
                var Unescapes = {
                  92: "\\",
                  34: '"',
                  47: "/",
                  98: "\b",
                  116: "\t",
                  110: "\n",
                  102: "\f",
                  114: "\r"
                };
                var Index,
                    Source;
                var abort = function() {
                  Index = Source = null;
                  throw SyntaxError();
                };
                var lex = function() {
                  var source = Source,
                      length = source.length,
                      value,
                      begin,
                      position,
                      isSigned,
                      charCode;
                  while (Index < length) {
                    charCode = source.charCodeAt(Index);
                    switch (charCode) {
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        Index++;
                        break;
                      case 123:
                      case 125:
                      case 91:
                      case 93:
                      case 58:
                      case 44:
                        value = charIndexBuggy ? source.charAt(Index) : source[Index];
                        Index++;
                        return value;
                      case 34:
                        for (value = "@", Index++; Index < length; ) {
                          charCode = source.charCodeAt(Index);
                          if (charCode < 32) {
                            abort();
                          } else if (charCode == 92) {
                            charCode = source.charCodeAt(++Index);
                            switch (charCode) {
                              case 92:
                              case 34:
                              case 47:
                              case 98:
                              case 116:
                              case 110:
                              case 102:
                              case 114:
                                value += Unescapes[charCode];
                                Index++;
                                break;
                              case 117:
                                begin = ++Index;
                                for (position = Index + 4; Index < position; Index++) {
                                  charCode = source.charCodeAt(Index);
                                  if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                    abort();
                                  }
                                }
                                value += fromCharCode("0x" + source.slice(begin, Index));
                                break;
                              default:
                                abort();
                            }
                          } else {
                            if (charCode == 34) {
                              break;
                            }
                            charCode = source.charCodeAt(Index);
                            begin = Index;
                            while (charCode >= 32 && charCode != 92 && charCode != 34) {
                              charCode = source.charCodeAt(++Index);
                            }
                            value += source.slice(begin, Index);
                          }
                        }
                        if (source.charCodeAt(Index) == 34) {
                          Index++;
                          return value;
                        }
                        abort();
                      default:
                        begin = Index;
                        if (charCode == 45) {
                          isSigned = true;
                          charCode = source.charCodeAt(++Index);
                        }
                        if (charCode >= 48 && charCode <= 57) {
                          if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                            abort();
                          }
                          isSigned = false;
                          for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++)
                            ;
                          if (source.charCodeAt(Index) == 46) {
                            position = ++Index;
                            for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++)
                              ;
                            if (position == Index) {
                              abort();
                            }
                            Index = position;
                          }
                          charCode = source.charCodeAt(Index);
                          if (charCode == 101 || charCode == 69) {
                            charCode = source.charCodeAt(++Index);
                            if (charCode == 43 || charCode == 45) {
                              Index++;
                            }
                            for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++)
                              ;
                            if (position == Index) {
                              abort();
                            }
                            Index = position;
                          }
                          return +source.slice(begin, Index);
                        }
                        if (isSigned) {
                          abort();
                        }
                        if (source.slice(Index, Index + 4) == "true") {
                          Index += 4;
                          return true;
                        } else if (source.slice(Index, Index + 5) == "false") {
                          Index += 5;
                          return false;
                        } else if (source.slice(Index, Index + 4) == "null") {
                          Index += 4;
                          return null;
                        }
                        abort();
                    }
                  }
                  return "$";
                };
                var get = function(value) {
                  var results,
                      hasMembers;
                  if (value == "$") {
                    abort();
                  }
                  if (typeof value == "string") {
                    if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                      return value.slice(1);
                    }
                    if (value == "[") {
                      results = [];
                      for (; ; hasMembers || (hasMembers = true)) {
                        value = lex();
                        if (value == "]") {
                          break;
                        }
                        if (hasMembers) {
                          if (value == ",") {
                            value = lex();
                            if (value == "]") {
                              abort();
                            }
                          } else {
                            abort();
                          }
                        }
                        if (value == ",") {
                          abort();
                        }
                        results.push(get(value));
                      }
                      return results;
                    } else if (value == "{") {
                      results = {};
                      for (; ; hasMembers || (hasMembers = true)) {
                        value = lex();
                        if (value == "}") {
                          break;
                        }
                        if (hasMembers) {
                          if (value == ",") {
                            value = lex();
                            if (value == "}") {
                              abort();
                            }
                          } else {
                            abort();
                          }
                        }
                        if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                          abort();
                        }
                        results[value.slice(1)] = get(lex());
                      }
                      return results;
                    }
                    abort();
                  }
                  return value;
                };
                var update = function(source, property, callback) {
                  var element = walk(source, property, callback);
                  if (element === undef) {
                    delete source[property];
                  } else {
                    source[property] = element;
                  }
                };
                var walk = function(source, property, callback) {
                  var value = source[property],
                      length;
                  if (typeof value == "object" && value) {
                    if (getClass.call(value) == arrayClass) {
                      for (length = value.length; length--; ) {
                        update(value, length, callback);
                      }
                    } else {
                      forEach(value, function(property) {
                        update(value, property, callback);
                      });
                    }
                  }
                  return callback.call(source, property, value);
                };
                exports.parse = function(source, callback) {
                  var result,
                      value;
                  Index = 0;
                  Source = "" + source;
                  result = get(lex());
                  if (lex() != "$") {
                    abort();
                  }
                  Index = Source = null;
                  return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
                };
              }
            }
            exports["runInContext"] = runInContext;
            return exports;
          }
          if (freeExports && !isLoader) {
            runInContext(root, freeExports);
          } else {
            var nativeJSON = root.JSON,
                previousJSON = root["JSON3"],
                isRestored = false;
            var JSON3 = runInContext(root, (root["JSON3"] = {"noConflict": function() {
                if (!isRestored) {
                  isRestored = true;
                  root.JSON = nativeJSON;
                  root["JSON3"] = previousJSON;
                  nativeJSON = previousJSON = null;
                }
                return JSON3;
              }}));
            root.JSON = {
              "parse": JSON3.parse,
              "stringify": JSON3.stringify
            };
          }
          if (isLoader) {
            define(function() {
              return JSON3;
            });
          }
        }).call(this);
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}],
    51: [function(_dereq_, module, exports) {
      module.exports = toArray;
      function toArray(list, index) {
        var array = [];
        index = index || 0;
        for (var i = index || 0; i < list.length; i++) {
          array[i - index] = list[i];
        }
        return array;
      }
    }, {}]
  }, {}, [31])(31);
});

})();
(function() {
var define = System.amdDefine;
define("github:socketio/socket.io-client@1.4.6.js", ["github:socketio/socket.io-client@1.4.6/socket.io.js"], function(main) {
  return main;
});

})();
System.registerDynamic("npm:core-js@1.2.6/library/fn/object/define-property.js", ["npm:core-js@1.2.6/library/modules/$.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/define-property.js", ["npm:core-js@1.2.6/library/fn/object/define-property.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/define-property.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/helpers/create-class.js", ["npm:babel-runtime@5.8.38/core-js/object/define-property.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('npm:babel-runtime@5.8.38/core-js/object/define-property.js')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/helpers/class-call-check.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-object.js", ["npm:core-js@1.2.6/library/modules/$.defined.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('npm:core-js@1.2.6/library/modules/$.defined.js');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-array.js", ["npm:core-js@1.2.6/library/modules/$.cof.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof.js');
  module.exports = Array.isArray || function(arg) {
    return cof(arg) == 'Array';
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.array-species-create.js", ["npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.is-array.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
      isArray = $__require('npm:core-js@1.2.6/library/modules/$.is-array.js'),
      SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('species');
  module.exports = function(original, length) {
    var C;
    if (isArray(original)) {
      C = original.constructor;
      if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
        C = undefined;
      if (isObject(C)) {
        C = C[SPECIES];
        if (C === null)
          C = undefined;
      }
    }
    return new (C === undefined ? Array : C)(length);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.array-methods.js", ["npm:core-js@1.2.6/library/modules/$.ctx.js", "npm:core-js@1.2.6/library/modules/$.iobject.js", "npm:core-js@1.2.6/library/modules/$.to-object.js", "npm:core-js@1.2.6/library/modules/$.to-length.js", "npm:core-js@1.2.6/library/modules/$.array-species-create.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js'),
      IObject = $__require('npm:core-js@1.2.6/library/modules/$.iobject.js'),
      toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object.js'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length.js'),
      asc = $__require('npm:core-js@1.2.6/library/modules/$.array-species-create.js');
  module.exports = function(TYPE) {
    var IS_MAP = TYPE == 1,
        IS_FILTER = TYPE == 2,
        IS_SOME = TYPE == 3,
        IS_EVERY = TYPE == 4,
        IS_FIND_INDEX = TYPE == 6,
        NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that) {
      var O = toObject($this),
          self = IObject(O),
          f = ctx(callbackfn, that, 3),
          length = toLength(self.length),
          index = 0,
          result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined,
          val,
          res;
      for (; length > index; index++)
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (TYPE) {
            if (IS_MAP)
              result[index] = res;
            else if (res)
              switch (TYPE) {
                case 3:
                  return true;
                case 5:
                  return val;
                case 6:
                  return index;
                case 2:
                  result.push(val);
              }
            else if (IS_EVERY)
              return false;
          }
        }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection-weak.js", ["npm:core-js@1.2.6/library/modules/$.hide.js", "npm:core-js@1.2.6/library/modules/$.redefine-all.js", "npm:core-js@1.2.6/library/modules/$.an-object.js", "npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.strict-new.js", "npm:core-js@1.2.6/library/modules/$.for-of.js", "npm:core-js@1.2.6/library/modules/$.array-methods.js", "npm:core-js@1.2.6/library/modules/$.has.js", "npm:core-js@1.2.6/library/modules/$.uid.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hide = $__require('npm:core-js@1.2.6/library/modules/$.hide.js'),
      redefineAll = $__require('npm:core-js@1.2.6/library/modules/$.redefine-all.js'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object.js'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
      strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new.js'),
      forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of.js'),
      createArrayMethod = $__require('npm:core-js@1.2.6/library/modules/$.array-methods.js'),
      $has = $__require('npm:core-js@1.2.6/library/modules/$.has.js'),
      WEAK = $__require('npm:core-js@1.2.6/library/modules/$.uid.js')('weak'),
      isExtensible = Object.isExtensible || isObject,
      arrayFind = createArrayMethod(5),
      arrayFindIndex = createArrayMethod(6),
      id = 0;
  var frozenStore = function(that) {
    return that._l || (that._l = new FrozenStore);
  };
  var FrozenStore = function() {
    this.a = [];
  };
  var findFrozen = function(store, key) {
    return arrayFind(store.a, function(it) {
      return it[0] === key;
    });
  };
  FrozenStore.prototype = {
    get: function(key) {
      var entry = findFrozen(this, key);
      if (entry)
        return entry[1];
    },
    has: function(key) {
      return !!findFrozen(this, key);
    },
    set: function(key, value) {
      var entry = findFrozen(this, key);
      if (entry)
        entry[1] = value;
      else
        this.a.push([key, value]);
    },
    'delete': function(key) {
      var index = arrayFindIndex(this.a, function(it) {
        return it[0] === key;
      });
      if (~index)
        this.a.splice(index, 1);
      return !!~index;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = id++;
        that._l = undefined;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        'delete': function(key) {
          if (!isObject(key))
            return false;
          if (!isExtensible(key))
            return frozenStore(this)['delete'](key);
          return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
        },
        has: function has(key) {
          if (!isObject(key))
            return false;
          if (!isExtensible(key))
            return frozenStore(this).has(key);
          return $has(key, WEAK) && $has(key[WEAK], this._i);
        }
      });
      return C;
    },
    def: function(that, key, value) {
      if (!isExtensible(anObject(key))) {
        frozenStore(that).set(key, value);
      } else {
        $has(key, WEAK) || hide(key, WEAK, {});
        key[WEAK][that._i] = value;
      }
      return that;
    },
    frozenStore: frozenStore,
    WEAK: WEAK
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.weak-map.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.redefine.js", "npm:core-js@1.2.6/library/modules/$.collection-weak.js", "npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.has.js", "npm:core-js@1.2.6/library/modules/$.collection.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine.js'),
      weak = $__require('npm:core-js@1.2.6/library/modules/$.collection-weak.js'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has.js'),
      frozenStore = weak.frozenStore,
      WEAK = weak.WEAK,
      isExtensible = Object.isExtensible || isObject,
      tmp = {};
  var $WeakMap = $__require('npm:core-js@1.2.6/library/modules/$.collection.js')('WeakMap', function(get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    get: function get(key) {
      if (isObject(key)) {
        if (!isExtensible(key))
          return frozenStore(this).get(key);
        if (has(key, WEAK))
          return key[WEAK][this._i];
      }
    },
    set: function set(key, value) {
      return weak.def(this, key, value);
    }
  }, weak, true, true);
  if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
    $.each.call(['delete', 'has', 'get', 'set'], function(key) {
      var proto = $WeakMap.prototype,
          method = proto[key];
      redefine(proto, key, function(a, b) {
        if (isObject(a) && !isExtensible(a)) {
          var result = frozenStore(this)[key](a, b);
          return key == 'set' ? this : result;
        }
        return method.call(this, a, b);
      });
    });
  }
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/weak-map.js", ["npm:core-js@1.2.6/library/modules/es6.object.to-string.js", "npm:core-js@1.2.6/library/modules/web.dom.iterable.js", "npm:core-js@1.2.6/library/modules/es6.weak-map.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/es6.object.to-string.js');
  $__require('npm:core-js@1.2.6/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.weak-map.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').WeakMap;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/core-js/weak-map.js", ["npm:core-js@1.2.6/library/fn/weak-map.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/weak-map.js'),
    __esModule: true
  };
  return module.exports;
});

System.register('npm:weakee@1.0.0/weakee.js', ['npm:babel-runtime@5.8.38/helpers/create-class.js', 'npm:babel-runtime@5.8.38/helpers/class-call-check.js', 'npm:babel-runtime@5.8.38/core-js/weak-map.js'], function (_export) {
  var _createClass, _classCallCheck, _WeakMap, objectToEvents, Emitter;

  return {
    setters: [function (_npmBabelRuntime5838HelpersCreateClassJs) {
      _createClass = _npmBabelRuntime5838HelpersCreateClassJs['default'];
    }, function (_npmBabelRuntime5838HelpersClassCallCheckJs) {
      _classCallCheck = _npmBabelRuntime5838HelpersClassCallCheckJs['default'];
    }, function (_npmBabelRuntime5838CoreJsWeakMapJs) {
      _WeakMap = _npmBabelRuntime5838CoreJsWeakMapJs['default'];
    }],
    execute: function () {
      /* */
      'use strict';

      'format es6';
      'use strict';

      objectToEvents = new _WeakMap();

      Emitter = (function () {
        function Emitter() {
          _classCallCheck(this, Emitter);

          objectToEvents.set(this, {});
        }

        _createClass(Emitter, [{
          key: 'on',
          value: function on(type, handler) {
            var events = objectToEvents.get(this);

            if (!events[type]) {
              events[type] = [];
            }
            events[type].push(handler);
            return this;
          }
        }, {
          key: 'once',
          value: function once(type, handler) {
            this.on(type, function tempHandler() {
              handler.apply(this, arguments);
              this.off(type, tempHandler);
            });
            return this;
          }
        }, {
          key: 'off',
          value: function off(type, handler) {
            var events = objectToEvents.get(this)[type];

            if (events) {
              if (!handler) {
                events.length = 0;
              } else {
                events.splice(events.indexOf(handler), 1);
              }
            }
            return this;
          }
        }, {
          key: 'emit',
          value: function emit(type) {
            var event, events;

            events = (objectToEvents.get(this)[type] || []).slice();

            var args = new Array(arguments.length - 1);
            var iterateTo = args.length + 1;
            for (var i = 1; i < iterateTo; ++i) {
              args[i - 1] = arguments[i];
            }

            if (events.length) {
              while (event = events.shift()) {
                event.apply(this, args);
              }
            }
            return this;
          }
        }]);

        return Emitter;
      })();

      _export('default', Emitter);
    }
  };
});
System.register("npm:weakee@1.0.0.js", ["npm:weakee@1.0.0/weakee.js"], function (_export) {
  "use strict";

  return {
    setters: [function (_npmWeakee100WeakeeJs) {
      var _exportObj = {};

      for (var _key in _npmWeakee100WeakeeJs) {
        if (_key !== "default") _exportObj[_key] = _npmWeakee100WeakeeJs[_key];
      }

      _exportObj["default"] = _npmWeakee100WeakeeJs["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
System.registerDynamic("npm:ms@0.7.1/index.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    if ('string' == typeof val)
      return parse(val);
    return options.long ? long(val) : short(val);
  };
  function parse(str) {
    str = '' + str;
    if (str.length > 10000)
      return;
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match)
      return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;
      case 'days':
      case 'day':
      case 'd':
        return n * d;
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;
    }
  }
  function short(ms) {
    if (ms >= d)
      return Math.round(ms / d) + 'd';
    if (ms >= h)
      return Math.round(ms / h) + 'h';
    if (ms >= m)
      return Math.round(ms / m) + 'm';
    if (ms >= s)
      return Math.round(ms / s) + 's';
    return ms + 'ms';
  }
  function long(ms) {
    return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
  }
  function plural(ms, n, name) {
    if (ms < n)
      return;
    if (ms < n * 1.5)
      return Math.floor(ms / n) + ' ' + name;
    return Math.ceil(ms / n) + ' ' + name + 's';
  }
  return module.exports;
});

System.registerDynamic("npm:ms@0.7.1.js", ["npm:ms@0.7.1/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:ms@0.7.1/index.js');
  return module.exports;
});

System.registerDynamic("npm:debug@2.2.0/debug.js", ["npm:ms@0.7.1.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports = module.exports = debug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = $__require('npm:ms@0.7.1.js');
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};
  var prevColor = 0;
  var prevTime;
  function selectColor() {
    return exports.colors[prevColor++ % exports.colors.length];
  }
  function debug(namespace) {
    function disabled() {}
    disabled.enabled = false;
    function enabled() {
      var self = enabled;
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      if (null == self.useColors)
        self.useColors = exports.useColors();
      if (null == self.color && self.useColors)
        self.color = selectColor();
      var args = Array.prototype.slice.call(arguments);
      args[0] = exports.coerce(args[0]);
      if ('string' !== typeof args[0]) {
        args = ['%o'].concat(args);
      }
      var index = 0;
      args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
        if (match === '%%')
          return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      if ('function' === typeof exports.formatArgs) {
        args = exports.formatArgs.apply(self, args);
      }
      var logFn = enabled.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }
    enabled.enabled = true;
    var fn = exports.enabled(namespace) ? enabled : disabled;
    fn.namespace = namespace;
    return fn;
  }
  function enable(namespaces) {
    exports.save(namespaces);
    var split = (namespaces || '').split(/[\s,]+/);
    var len = split.length;
    for (var i = 0; i < len; i++) {
      if (!split[i])
        continue;
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  function disable() {
    exports.enable('');
  }
  function enabled(name) {
    var i,
        len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  function coerce(val) {
    if (val instanceof Error)
      return val.stack || val.message;
    return val;
  }
  return module.exports;
});

System.registerDynamic("npm:debug@2.2.0/browser.js", ["npm:debug@2.2.0/debug.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports = module.exports = $__require('npm:debug@2.2.0/debug.js');
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
  exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
  function useColors() {
    return ('WebkitAppearance' in document.documentElement.style) || (window.console && (console.firebug || (console.exception && console.table))) || (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
  }
  exports.formatters.j = function(v) {
    return JSON.stringify(v);
  };
  function formatArgs() {
    var args = arguments;
    var useColors = this.useColors;
    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
    if (!useColors)
      return args;
    var c = 'color: ' + this.color;
    args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-z%]/g, function(match) {
      if ('%%' === match)
        return;
      index++;
      if ('%c' === match) {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
    return args;
  }
  function log() {
    return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {}
  }
  function load() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {}
    return r;
  }
  exports.enable(load());
  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }
  return module.exports;
});

System.registerDynamic("npm:debug@2.2.0.js", ["npm:debug@2.2.0/browser.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:debug@2.2.0/browser.js');
  return module.exports;
});

System.register('github:capaj/systemjs-hot-reloader@0.6.0/hot-reloader.js', ['npm:babel-runtime@5.8.38/helpers/get.js', 'npm:babel-runtime@5.8.38/helpers/inherits.js', 'npm:babel-runtime@5.8.38/helpers/create-class.js', 'npm:babel-runtime@5.8.38/helpers/class-call-check.js', 'npm:babel-runtime@5.8.38/core-js/object/keys.js', 'npm:babel-runtime@5.8.38/core-js/promise.js', 'github:socketio/socket.io-client@1.4.6.js', 'npm:weakee@1.0.0.js', 'npm:debug@2.2.0.js'], function (_export) {
  var _get, _inherits, _createClass, _classCallCheck, _Object$keys, _Promise, socketIO, Emitter, debug, d, HotReloader;

  function identity(value) {
    return value;
  }

  return {
    setters: [function (_npmBabelRuntime5838HelpersGetJs) {
      _get = _npmBabelRuntime5838HelpersGetJs['default'];
    }, function (_npmBabelRuntime5838HelpersInheritsJs) {
      _inherits = _npmBabelRuntime5838HelpersInheritsJs['default'];
    }, function (_npmBabelRuntime5838HelpersCreateClassJs) {
      _createClass = _npmBabelRuntime5838HelpersCreateClassJs['default'];
    }, function (_npmBabelRuntime5838HelpersClassCallCheckJs) {
      _classCallCheck = _npmBabelRuntime5838HelpersClassCallCheckJs['default'];
    }, function (_npmBabelRuntime5838CoreJsObjectKeysJs) {
      _Object$keys = _npmBabelRuntime5838CoreJsObjectKeysJs['default'];
    }, function (_npmBabelRuntime5838CoreJsPromiseJs) {
      _Promise = _npmBabelRuntime5838CoreJsPromiseJs['default'];
    }, function (_githubSocketioSocketIoClient146Js) {
      socketIO = _githubSocketioSocketIoClient146Js['default'];
    }, function (_npmWeakee100Js) {
      Emitter = _npmWeakee100Js['default'];
    }, function (_npmDebug220Js) {
      debug = _npmDebug220Js['default'];
    }],
    execute: function () {
      /* */
      'use strict';

      /* eslint-env browser */
      "format esm";d = debug('hot-reloader');

      if (System.trace !== true) {
        console.warn('System.trace must be set to true via configuration before loading modules to hot-reload.');
      }
      HotReloader = (function (_Emitter) {
        _inherits(HotReloader, _Emitter);

        function HotReloader(backendUrl) {
          var _this = this;

          var transform = arguments.length <= 1 || arguments[1] === undefined ? identity : arguments[1];

          _classCallCheck(this, HotReloader);

          if (!backendUrl) {
            backendUrl = '//' + document.location.host;
          }
          _get(Object.getPrototypeOf(HotReloader.prototype), 'constructor', this).call(this);
          this.originalSystemImport = System['import'];
          this.transform = transform;
          var self = this;
          self.clientImportedModules = [];
          System['import'] = function () {
            var args = arguments;
            self.clientImportedModules.push(args[0]);
            return self.originalSystemImport.apply(System, arguments)['catch'](function (err) {
              self.lastFailedSystemImport = args;
              throw err;
            });
          };
          this.socket = socketIO(backendUrl);
          this.socket.on('connect', function () {
            d('hot reload connected to watcher on ', backendUrl);
            _this.socket.emit('identification', navigator.userAgent);
            _this.socket.emit('package.json', function (pjson) {
              // self.pjson = pjson // maybe needed in the future?
              self.jspmConfigFile = pjson.jspm.configFile || 'config.js';
            });
          });
          this.socket.on('reload', function () {
            d('whole page reload requested');
            document.location.reload(true);
          });
          this.socket.on('change', this.onFileChanged.bind(this));
          window.onerror = function (err) {
            _this.socket.emit('error', err); // emitting errors for jspm-dev-buddy
          };
          this.socket.on('disconnect', function () {
            d('hot reload disconnected from ', backendUrl);
          });
          this.pushImporters(System.loads);
        }

        _createClass(HotReloader, [{
          key: 'onFileChanged',
          value: function onFileChanged(ev) {
            var _this2 = this;

            var moduleName = this.transform(ev.path);
            this.emit('change', moduleName);
            if (moduleName === 'index.html' || moduleName === this.jspmConfigFile) {
              document.location.reload(true);
            } else {
              if (this.lastFailedSystemImport) {
                // for wehn inital System.import fails
                return this.originalSystemImport.apply(System, this.lastFailedSystemImport).then(function () {
                  d(_this2.lastFailedSystemImport[0], 'broken module reimported succesfully');
                  _this2.lastFailedSystemImport = null;
                });
              }
              if (this.currentHotReload) {
                this.currentHotReload = this.currentHotReload.then(function () {
                  // chain promises TODO we can solve this better- this often leads to the same module being reloaded mutliple times
                  return _this2.hotReload(moduleName);
                });
              } else {
                if (this.failedReimport) {
                  this.reImportRootModules(this.failedReimport, new Date());
                } else {
                  this.currentHotReload = this.hotReload(moduleName);
                }
              }
            }
          }
        }, {
          key: 'pushImporters',
          value: function pushImporters(moduleMap, overwriteOlds) {
            _Object$keys(moduleMap).forEach(function (moduleName) {
              var mod = System.loads[moduleName];
              if (!mod.importers) {
                mod.importers = [];
              }
              mod.deps.forEach(function (dependantName) {
                var normalizedDependantName = mod.depMap[dependantName];
                var dependantMod = System.loads[normalizedDependantName];
                if (!dependantMod) {
                  return;
                }
                if (!dependantMod.importers) {
                  dependantMod.importers = [];
                }
                if (overwriteOlds) {
                  var imsIndex = dependantMod.importers.length;
                  while (imsIndex--) {
                    if (dependantMod.importers[imsIndex].name === mod.name) {
                      dependantMod.importers[imsIndex] = mod;
                      return;
                    }
                  }
                }
                dependantMod.importers.push(mod);
              });
            });
          }
        }, {
          key: 'deleteModule',
          value: function deleteModule(moduleToDelete, from) {
            var name = moduleToDelete.name;
            if (!this.modulesJustDeleted[name]) {
              var exportedValue = undefined;
              this.modulesJustDeleted[name] = moduleToDelete;
              if (!moduleToDelete.exports) {
                // this is a module from System.loads
                exportedValue = System.get(name);
                if (!exportedValue) {
                  console.warn('missing exported value on ' + name + ', reloading whole page because module record is broken');
                  return document.location.reload(true);
                }
              } else {
                exportedValue = moduleToDelete.exports;
              }
              if (typeof exportedValue.__unload === 'function') {
                exportedValue.__unload(); // calling module unload hook
              }
              System['delete'](name);
              this.emit('deleted', moduleToDelete);
              d('deleted a module ', name, ' because it has dependency on ', from);
            }
          }
        }, {
          key: 'getModuleRecord',
          value: function getModuleRecord(moduleName) {
            return System.normalize(moduleName).then(function (normalizedName) {
              var aModule = System._loader.moduleRecords[normalizedName];
              if (!aModule) {
                var _ret = (function () {
                  aModule = System.loads[normalizedName];
                  if (aModule) {
                    return {
                      v: aModule
                    };
                  }
                  var fullModulePath = location.origin + '/' + moduleName;
                  var loadsKey = _Object$keys(System.loads).find(function (n) {
                    return n.indexOf(fullModulePath) !== -1;
                  });
                  // normalize does not yield a key which would match the key used in System.loads, so we have to improvise a bit
                  if (loadsKey) {
                    return {
                      v: System.loads[loadsKey]
                    };
                  }
                  throw new Error('module was not found in Systemjs moduleRecords');
                })();

                if (typeof _ret === 'object') return _ret.v;
              }
              return aModule;
            });
          }
        }, {
          key: 'hotReload',
          value: function hotReload(moduleName) {
            var _this3 = this;

            var self = this;
            var start = new Date().getTime();

            this.modulesJustDeleted = {}; // TODO use weakmap
            return this.getModuleRecord(moduleName).then(function (module) {
              _this3.deleteModule(module, 'origin');
              var toReimport = [];

              function deleteAllImporters(mod) {
                var importersToBeDeleted = mod.importers;
                return importersToBeDeleted.map(function (importer) {
                  if (self.modulesJustDeleted.hasOwnProperty(importer.name)) {
                    d('already deleted', importer.name);
                    return false;
                  }
                  self.deleteModule(importer, mod.name);
                  if (importer.importers.length === 0 && toReimport.indexOf(importer.name) === -1) {
                    toReimport.push(importer.name);
                    return true;
                  } else {
                    // recourse
                    var deleted = deleteAllImporters(importer);
                    return deleted;
                  }
                });
              }

              if (typeof module.importers === 'undefined' || module.importers.length === 0) {
                toReimport.push(module.name);
              } else {
                var deleted = deleteAllImporters(module);
                if (deleted.find(function (res) {
                  return res === false;
                }) !== undefined) {
                  toReimport.push(module.name);
                }
              }
              d('toReimport', toReimport);
              if (toReimport.length === 0) {
                toReimport = self.clientImportedModules;
              }
              return _this3.reImportRootModules(toReimport, start);
            }, function (err) {
              _this3.emit('moduleRecordNotFound', err);
              // not found any module for this file, not really an error
            });
          }
        }, {
          key: 'reImportRootModules',
          value: function reImportRootModules(toReimport, start) {
            var _this4 = this;

            var promises = toReimport.map(function (moduleName) {
              return _this4.originalSystemImport.call(System, moduleName).then(function (moduleReloaded) {
                d('reimported ', moduleName);
                if (typeof moduleReloaded.__reload === 'function') {
                  var deletedModule = _this4.modulesJustDeleted[moduleName];
                  if (deletedModule !== undefined) {
                    moduleReloaded.__reload(deletedModule.exports); // calling module reload hook
                  }
                }
              });
            });
            return _Promise.all(promises).then(function () {
              _this4.emit('allReimported', toReimport);
              _this4.pushImporters(_this4.modulesJustDeleted, true);
              _this4.modulesJustDeleted = {};
              _this4.failedReimport = null;
              _this4.currentHotReload = null;
              d('all reimported in ', new Date().getTime() - start, 'ms');
            }, function (err) {
              _Object$keys(_this4.modulesJustDeleted).forEach(function (modName) {
                d('deleting on failed reimport: ', modName); // failed import of a module leaves something in the SystemJS module cache, even though it is not visible in System._loader.moduleRecords we need to delete the module to revert to clean state
                System['delete'](modName);
              });
              _this4.emit('error', err);
              console.error('Module "' + toReimport + '" reimport failed because this error was thrown: ', err);
              _this4.failedReimport = toReimport;
              _this4.currentHotReload = null;
            });
          }
        }]);

        return HotReloader;
      })(Emitter);

      _export('default', HotReloader);
    }
  };
});
System.register("github:capaj/systemjs-hot-reloader@0.6.0.js", ["github:capaj/systemjs-hot-reloader@0.6.0/hot-reloader.js"], function (_export) {
  "use strict";

  return {
    setters: [function (_githubCapajSystemjsHotReloader060HotReloaderJs) {
      var _exportObj = {};

      for (var _key in _githubCapajSystemjsHotReloader060HotReloaderJs) {
        if (_key !== "default") _exportObj[_key] = _githubCapajSystemjsHotReloader060HotReloaderJs[_key];
      }

      _exportObj["default"] = _githubCapajSystemjsHotReloader060HotReloaderJs["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.to-string.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.string-at.js", ["npm:core-js@1.2.6/library/modules/$.to-integer.js", "npm:core-js@1.2.6/library/modules/$.defined.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer.js'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined.js');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.iterator.js", ["npm:core-js@1.2.6/library/modules/$.string-at.js", "npm:core-js@1.2.6/library/modules/$.iter-define.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('npm:core-js@1.2.6/library/modules/$.string-at.js')(true);
  $__require('npm:core-js@1.2.6/library/modules/$.iter-define.js')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {};
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iobject.js", ["npm:core-js@1.2.6/library/modules/$.cof.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof.js');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-iobject.js", ["npm:core-js@1.2.6/library/modules/$.iobject.js", "npm:core-js@1.2.6/library/modules/$.defined.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('npm:core-js@1.2.6/library/modules/$.iobject.js'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined.js');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.iterator.js", ["npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js", "npm:core-js@1.2.6/library/modules/$.iter-step.js", "npm:core-js@1.2.6/library/modules/$.iterators.js", "npm:core-js@1.2.6/library/modules/$.to-iobject.js", "npm:core-js@1.2.6/library/modules/$.iter-define.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var addToUnscopables = $__require('npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js'),
      step = $__require('npm:core-js@1.2.6/library/modules/$.iter-step.js'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators.js'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.iter-define.js')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/web.dom.iterable.js", ["npm:core-js@1.2.6/library/modules/es6.array.iterator.js", "npm:core-js@1.2.6/library/modules/$.iterators.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/es6.array.iterator.js');
  var Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators.js');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.defined.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.library.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-create.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.property-desc.js", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js", "npm:core-js@1.2.6/library/modules/$.hide.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      descriptor = $__require('npm:core-js@1.2.6/library/modules/$.property-desc.js'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js'),
      IteratorPrototype = {};
  $__require('npm:core-js@1.2.6/library/modules/$.hide.js')(IteratorPrototype, $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-define.js", ["npm:core-js@1.2.6/library/modules/$.library.js", "npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.redefine.js", "npm:core-js@1.2.6/library/modules/$.hide.js", "npm:core-js@1.2.6/library/modules/$.has.js", "npm:core-js@1.2.6/library/modules/$.iterators.js", "npm:core-js@1.2.6/library/modules/$.iter-create.js", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js", "npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('npm:core-js@1.2.6/library/modules/$.library.js'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js'),
      redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine.js'),
      hide = $__require('npm:core-js@1.2.6/library/modules/$.hide.js'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has.js'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators.js'),
      $iterCreate = $__require('npm:core-js@1.2.6/library/modules/$.iter-create.js'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js'),
      getProto = $__require('npm:core-js@1.2.6/library/modules/$.js').getProto,
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-step.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-species.js", ["npm:core-js@1.2.6/library/modules/$.core.js", "npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.descriptors.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = $__require('npm:core-js@1.2.6/library/modules/$.core.js'),
      $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors.js'),
      SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection-strong.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.hide.js", "npm:core-js@1.2.6/library/modules/$.redefine-all.js", "npm:core-js@1.2.6/library/modules/$.ctx.js", "npm:core-js@1.2.6/library/modules/$.strict-new.js", "npm:core-js@1.2.6/library/modules/$.defined.js", "npm:core-js@1.2.6/library/modules/$.for-of.js", "npm:core-js@1.2.6/library/modules/$.iter-define.js", "npm:core-js@1.2.6/library/modules/$.iter-step.js", "npm:core-js@1.2.6/library/modules/$.uid.js", "npm:core-js@1.2.6/library/modules/$.has.js", "npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.set-species.js", "npm:core-js@1.2.6/library/modules/$.descriptors.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      hide = $__require('npm:core-js@1.2.6/library/modules/$.hide.js'),
      redefineAll = $__require('npm:core-js@1.2.6/library/modules/$.redefine-all.js'),
      ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js'),
      strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new.js'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined.js'),
      forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of.js'),
      $iterDefine = $__require('npm:core-js@1.2.6/library/modules/$.iter-define.js'),
      step = $__require('npm:core-js@1.2.6/library/modules/$.iter-step.js'),
      ID = $__require('npm:core-js@1.2.6/library/modules/$.uid.js')('id'),
      $has = $__require('npm:core-js@1.2.6/library/modules/$.has.js'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
      setSpecies = $__require('npm:core-js@1.2.6/library/modules/$.set-species.js'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors.js'),
      isExtensible = Object.isExtensible || isObject,
      SIZE = DESCRIPTORS ? '_s' : 'size',
      id = 0;
  var fastKey = function(it, create) {
    if (!isObject(it))
      return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$has(it, ID)) {
      if (!isExtensible(it))
        return 'F';
      if (!create)
        return 'E';
      hide(it, ID, ++id);
    }
    return 'O' + it[ID];
  };
  var getEntry = function(that, key) {
    var index = fastKey(key),
        entry;
    if (index !== 'F')
      return that._i[index];
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key)
        return entry;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = $.create(null);
        that._f = undefined;
        that._l = undefined;
        that[SIZE] = 0;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        clear: function clear() {
          for (var that = this,
              data = that._i,
              entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p)
              entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        'delete': function(key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev)
              prev.n = next;
            if (next)
              next.p = prev;
            if (that._f == entry)
              that._f = next;
            if (that._l == entry)
              that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            while (entry && entry.r)
              entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (DESCRIPTORS)
        $.setDesc(C.prototype, 'size', {get: function() {
            return defined(this[SIZE]);
          }});
      return C;
    },
    def: function(that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      if (entry) {
        entry.v = value;
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          k: key,
          v: value,
          p: prev = that._l,
          n: undefined,
          r: false
        };
        if (!that._f)
          that._f = entry;
        if (prev)
          prev.n = entry;
        that[SIZE]++;
        if (index !== 'F')
          that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
      $iterDefine(C, NAME, function(iterated, kind) {
        this._t = iterated;
        this._k = kind;
        this._l = undefined;
      }, function() {
        var that = this,
            kind = that._k,
            entry = that._l;
        while (entry && entry.r)
          entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = undefined;
          return step(1);
        }
        if (kind == 'keys')
          return step(0, entry.k);
        if (kind == 'values')
          return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
      setSpecies(NAME);
    }
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.property-desc.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.hide.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.property-desc.js", "npm:core-js@1.2.6/library/modules/$.descriptors.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      createDesc = $__require('npm:core-js@1.2.6/library/modules/$.property-desc.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.descriptors.js') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.redefine.js", ["npm:core-js@1.2.6/library/modules/$.hide.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.hide.js');
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.redefine-all.js", ["npm:core-js@1.2.6/library/modules/$.redefine.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine.js');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.strict-new.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.has.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.has.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('npm:core-js@1.2.6/library/modules/$.js').setDesc,
      has = $__require('npm:core-js@1.2.6/library/modules/$.has.js'),
      TAG = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.fails.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.descriptors.js", ["npm:core-js@1.2.6/library/modules/$.fails.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('npm:core-js@1.2.6/library/modules/$.fails.js')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection.js", ["npm:core-js@1.2.6/library/modules/$.js", "npm:core-js@1.2.6/library/modules/$.global.js", "npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.fails.js", "npm:core-js@1.2.6/library/modules/$.hide.js", "npm:core-js@1.2.6/library/modules/$.redefine-all.js", "npm:core-js@1.2.6/library/modules/$.for-of.js", "npm:core-js@1.2.6/library/modules/$.strict-new.js", "npm:core-js@1.2.6/library/modules/$.is-object.js", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js", "npm:core-js@1.2.6/library/modules/$.descriptors.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js'),
      global = $__require('npm:core-js@1.2.6/library/modules/$.global.js'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js'),
      fails = $__require('npm:core-js@1.2.6/library/modules/$.fails.js'),
      hide = $__require('npm:core-js@1.2.6/library/modules/$.hide.js'),
      redefineAll = $__require('npm:core-js@1.2.6/library/modules/$.redefine-all.js'),
      forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of.js'),
      strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new.js'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors.js');
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
    } else {
      C = wrapper(function(target, iterable) {
        strictNew(target, C, NAME);
        target._c = new Base;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, target[ADDER], target);
      });
      $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function(KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear'))
          hide(C.prototype, KEY, function(a, b) {
            if (!IS_ADDER && IS_WEAK && !isObject(a))
              return KEY == 'get' ? undefined : false;
            var result = this._c[KEY](a === 0 ? 0 : a, b);
            return IS_ADDER ? this : result;
          });
      });
      if ('size' in proto)
        $.setDesc(C.prototype, 'size', {get: function() {
            return this._c.size;
          }});
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);
    if (!IS_WEAK)
      common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.set.js", ["npm:core-js@1.2.6/library/modules/$.collection-strong.js", "npm:core-js@1.2.6/library/modules/$.collection.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var strong = $__require('npm:core-js@1.2.6/library/modules/$.collection-strong.js');
  $__require('npm:core-js@1.2.6/library/modules/$.collection.js')('Set', function(get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {add: function add(value) {
      return strong.def(this, value = value === 0 ? 0 : value, value);
    }}, strong);
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.export.js", ["npm:core-js@1.2.6/library/modules/$.global.js", "npm:core-js@1.2.6/library/modules/$.core.js", "npm:core-js@1.2.6/library/modules/$.ctx.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global.js'),
      core = $__require('npm:core-js@1.2.6/library/modules/$.core.js'),
      ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.a-function.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.ctx.js", ["npm:core-js@1.2.6/library/modules/$.a-function.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function.js');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-call.js", ["npm:core-js@1.2.6/library/modules/$.an-object.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object.js');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-array-iter.js", ["npm:core-js@1.2.6/library/modules/$.iterators.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators.js'),
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-object.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.an-object.js", ["npm:core-js@1.2.6/library/modules/$.is-object.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object.js');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-integer.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-length.js", ["npm:core-js@1.2.6/library/modules/$.to-integer.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer.js'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iterators.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.get-iterator-method.js", ["npm:core-js@1.2.6/library/modules/$.classof.js", "npm:core-js@1.2.6/library/modules/$.wks.js", "npm:core-js@1.2.6/library/modules/$.iterators.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('npm:core-js@1.2.6/library/modules/$.classof.js'),
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('iterator'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.for-of.js", ["npm:core-js@1.2.6/library/modules/$.ctx.js", "npm:core-js@1.2.6/library/modules/$.iter-call.js", "npm:core-js@1.2.6/library/modules/$.is-array-iter.js", "npm:core-js@1.2.6/library/modules/$.an-object.js", "npm:core-js@1.2.6/library/modules/$.to-length.js", "npm:core-js@1.2.6/library/modules/core.get-iterator-method.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx.js'),
      call = $__require('npm:core-js@1.2.6/library/modules/$.iter-call.js'),
      isArrayIter = $__require('npm:core-js@1.2.6/library/modules/$.is-array-iter.js'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object.js'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length.js'),
      getIterFn = $__require('npm:core-js@1.2.6/library/modules/core.get-iterator-method.js');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.cof.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.shared.js", ["npm:core-js@1.2.6/library/modules/$.global.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global.js'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.uid.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.global.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.wks.js", ["npm:core-js@1.2.6/library/modules/$.shared.js", "npm:core-js@1.2.6/library/modules/$.uid.js", "npm:core-js@1.2.6/library/modules/$.global.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('npm:core-js@1.2.6/library/modules/$.shared.js')('wks'),
      uid = $__require('npm:core-js@1.2.6/library/modules/$.uid.js'),
      Symbol = $__require('npm:core-js@1.2.6/library/modules/$.global.js').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.classof.js", ["npm:core-js@1.2.6/library/modules/$.cof.js", "npm:core-js@1.2.6/library/modules/$.wks.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof.js'),
      TAG = $__require('npm:core-js@1.2.6/library/modules/$.wks.js')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection-to-json.js", ["npm:core-js@1.2.6/library/modules/$.for-of.js", "npm:core-js@1.2.6/library/modules/$.classof.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of.js'),
      classof = $__require('npm:core-js@1.2.6/library/modules/$.classof.js');
  module.exports = function(NAME) {
    return function toJSON() {
      if (classof(this) != NAME)
        throw TypeError(NAME + "#toJSON isn't generic");
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    };
  };
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.set.to-json.js", ["npm:core-js@1.2.6/library/modules/$.export.js", "npm:core-js@1.2.6/library/modules/$.collection-to-json.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export.js');
  $export($export.P, 'Set', {toJSON: $__require('npm:core-js@1.2.6/library/modules/$.collection-to-json.js')('Set')});
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.core.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/set.js", ["npm:core-js@1.2.6/library/modules/es6.object.to-string.js", "npm:core-js@1.2.6/library/modules/es6.string.iterator.js", "npm:core-js@1.2.6/library/modules/web.dom.iterable.js", "npm:core-js@1.2.6/library/modules/es6.set.js", "npm:core-js@1.2.6/library/modules/es7.set.to-json.js", "npm:core-js@1.2.6/library/modules/$.core.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('npm:core-js@1.2.6/library/modules/es6.object.to-string.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.iterator.js');
  $__require('npm:core-js@1.2.6/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.6/library/modules/es6.set.js');
  $__require('npm:core-js@1.2.6/library/modules/es7.set.to-json.js');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core.js').Set;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.38/core-js/set.js", ["npm:core-js@1.2.6/library/fn/set.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/set.js'),
    __esModule: true
  };
  return module.exports;
});

System.registerDynamic("npm:classnames@2.2.5/index.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          classes.push(classNames.apply(null, arg));
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(' ');
    }
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
      define('classnames', [], function() {
        return classNames;
      });
    } else {
      window.classNames = classNames;
    }
  }());
  return module.exports;
});

System.registerDynamic("npm:classnames@2.2.5.js", ["npm:classnames@2.2.5/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:classnames@2.2.5/index.js');
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/FallbackCompositionState.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/PooledClass.js", "npm:react@15.1.0/lib/getTextContentAccessor.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('npm:object-assign@4.1.0.js');
  var PooledClass = $__require('npm:react@15.1.0/lib/PooledClass.js');
  var getTextContentAccessor = $__require('npm:react@15.1.0/lib/getTextContentAccessor.js');
  function FallbackCompositionState(root) {
    this._root = root;
    this._startText = this.getText();
    this._fallbackText = null;
  }
  _assign(FallbackCompositionState.prototype, {
    destructor: function() {
      this._root = null;
      this._startText = null;
      this._fallbackText = null;
    },
    getText: function() {
      if ('value' in this._root) {
        return this._root.value;
      }
      return this._root[getTextContentAccessor()];
    },
    getData: function() {
      if (this._fallbackText) {
        return this._fallbackText;
      }
      var start;
      var startValue = this._startText;
      var startLength = startValue.length;
      var end;
      var endValue = this.getText();
      var endLength = endValue.length;
      for (start = 0; start < startLength; start++) {
        if (startValue[start] !== endValue[start]) {
          break;
        }
      }
      var minEnd = startLength - start;
      for (end = 1; end <= minEnd; end++) {
        if (startValue[startLength - end] !== endValue[endLength - end]) {
          break;
        }
      }
      var sliceTail = end > 1 ? 1 - end : undefined;
      this._fallbackText = endValue.slice(start, sliceTail);
      return this._fallbackText;
    }
  });
  PooledClass.addPoolingTo(FallbackCompositionState);
  module.exports = FallbackCompositionState;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticCompositionEvent.js", ["npm:react@15.1.0/lib/SyntheticEvent.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('npm:react@15.1.0/lib/SyntheticEvent.js');
  var CompositionEventInterface = {data: null};
  function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);
  module.exports = SyntheticCompositionEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticInputEvent.js", ["npm:react@15.1.0/lib/SyntheticEvent.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('npm:react@15.1.0/lib/SyntheticEvent.js');
  var InputEventInterface = {data: null};
  function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);
  module.exports = SyntheticInputEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/BeforeInputEventPlugin.js", ["npm:react@15.1.0/lib/EventConstants.js", "npm:react@15.1.0/lib/EventPropagators.js", "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:react@15.1.0/lib/FallbackCompositionState.js", "npm:react@15.1.0/lib/SyntheticCompositionEvent.js", "npm:react@15.1.0/lib/SyntheticInputEvent.js", "npm:fbjs@0.8.3/lib/keyOf.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('npm:react@15.1.0/lib/EventConstants.js');
  var EventPropagators = $__require('npm:react@15.1.0/lib/EventPropagators.js');
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
  var FallbackCompositionState = $__require('npm:react@15.1.0/lib/FallbackCompositionState.js');
  var SyntheticCompositionEvent = $__require('npm:react@15.1.0/lib/SyntheticCompositionEvent.js');
  var SyntheticInputEvent = $__require('npm:react@15.1.0/lib/SyntheticInputEvent.js');
  var keyOf = $__require('npm:fbjs@0.8.3/lib/keyOf.js');
  var END_KEYCODES = [9, 13, 27, 32];
  var START_KEYCODE = 229;
  var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;
  var documentMode = null;
  if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
    documentMode = document.documentMode;
  }
  var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();
  var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
  function isPresto() {
    var opera = window.opera;
    return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
  }
  var SPACEBAR_CODE = 32;
  var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {
    beforeInput: {
      phasedRegistrationNames: {
        bubbled: keyOf({onBeforeInput: null}),
        captured: keyOf({onBeforeInputCapture: null})
      },
      dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
    },
    compositionEnd: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionEnd: null}),
        captured: keyOf({onCompositionEndCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionStart: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionStart: null}),
        captured: keyOf({onCompositionStartCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionUpdate: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionUpdate: null}),
        captured: keyOf({onCompositionUpdateCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    }
  };
  var hasSpaceKeypress = false;
  function isKeypressCommand(nativeEvent) {
    return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
  }
  function getCompositionEventType(topLevelType) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionStart:
        return eventTypes.compositionStart;
      case topLevelTypes.topCompositionEnd:
        return eventTypes.compositionEnd;
      case topLevelTypes.topCompositionUpdate:
        return eventTypes.compositionUpdate;
    }
  }
  function isFallbackCompositionStart(topLevelType, nativeEvent) {
    return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
  }
  function isFallbackCompositionEnd(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topKeyUp:
        return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
      case topLevelTypes.topKeyDown:
        return nativeEvent.keyCode !== START_KEYCODE;
      case topLevelTypes.topKeyPress:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topBlur:
        return true;
      default:
        return false;
    }
  }
  function getDataFromCustomEvent(nativeEvent) {
    var detail = nativeEvent.detail;
    if (typeof detail === 'object' && 'data' in detail) {
      return detail.data;
    }
    return null;
  }
  var currentComposition = null;
  function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var eventType;
    var fallbackData;
    if (canUseCompositionEvent) {
      eventType = getCompositionEventType(topLevelType);
    } else if (!currentComposition) {
      if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
        eventType = eventTypes.compositionStart;
      }
    } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionEnd;
    }
    if (!eventType) {
      return null;
    }
    if (useFallbackCompositionData) {
      if (!currentComposition && eventType === eventTypes.compositionStart) {
        currentComposition = FallbackCompositionState.getPooled(nativeEventTarget);
      } else if (eventType === eventTypes.compositionEnd) {
        if (currentComposition) {
          fallbackData = currentComposition.getData();
        }
      }
    }
    var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);
    if (fallbackData) {
      event.data = fallbackData;
    } else {
      var customData = getDataFromCustomEvent(nativeEvent);
      if (customData !== null) {
        event.data = customData;
      }
    }
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  function getNativeBeforeInputChars(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionEnd:
        return getDataFromCustomEvent(nativeEvent);
      case topLevelTypes.topKeyPress:
        var which = nativeEvent.which;
        if (which !== SPACEBAR_CODE) {
          return null;
        }
        hasSpaceKeypress = true;
        return SPACEBAR_CHAR;
      case topLevelTypes.topTextInput:
        var chars = nativeEvent.data;
        if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
          return null;
        }
        return chars;
      default:
        return null;
    }
  }
  function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
    if (currentComposition) {
      if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
        var chars = currentComposition.getData();
        FallbackCompositionState.release(currentComposition);
        currentComposition = null;
        return chars;
      }
      return null;
    }
    switch (topLevelType) {
      case topLevelTypes.topPaste:
        return null;
      case topLevelTypes.topKeyPress:
        if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
          return String.fromCharCode(nativeEvent.which);
        }
        return null;
      case topLevelTypes.topCompositionEnd:
        return useFallbackCompositionData ? null : nativeEvent.data;
      default:
        return null;
    }
  }
  function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var chars;
    if (canUseTextInputEvent) {
      chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
    } else {
      chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
    }
    if (!chars) {
      return null;
    }
    var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);
    event.data = chars;
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  var BeforeInputEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      return [extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
    }
  };
  module.exports = BeforeInputEventPlugin;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ChangeEventPlugin.js", ["npm:react@15.1.0/lib/EventConstants.js", "npm:react@15.1.0/lib/EventPluginHub.js", "npm:react@15.1.0/lib/EventPropagators.js", "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactUpdates.js", "npm:react@15.1.0/lib/SyntheticEvent.js", "npm:react@15.1.0/lib/getEventTarget.js", "npm:react@15.1.0/lib/isEventSupported.js", "npm:react@15.1.0/lib/isTextInputElement.js", "npm:fbjs@0.8.3/lib/keyOf.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var EventConstants = $__require('npm:react@15.1.0/lib/EventConstants.js');
    var EventPluginHub = $__require('npm:react@15.1.0/lib/EventPluginHub.js');
    var EventPropagators = $__require('npm:react@15.1.0/lib/EventPropagators.js');
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactUpdates = $__require('npm:react@15.1.0/lib/ReactUpdates.js');
    var SyntheticEvent = $__require('npm:react@15.1.0/lib/SyntheticEvent.js');
    var getEventTarget = $__require('npm:react@15.1.0/lib/getEventTarget.js');
    var isEventSupported = $__require('npm:react@15.1.0/lib/isEventSupported.js');
    var isTextInputElement = $__require('npm:react@15.1.0/lib/isTextInputElement.js');
    var keyOf = $__require('npm:fbjs@0.8.3/lib/keyOf.js');
    var topLevelTypes = EventConstants.topLevelTypes;
    var eventTypes = {change: {
        phasedRegistrationNames: {
          bubbled: keyOf({onChange: null}),
          captured: keyOf({onChangeCapture: null})
        },
        dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
      }};
    var activeElement = null;
    var activeElementInst = null;
    var activeElementValue = null;
    var activeElementValueProp = null;
    function shouldUseChangeEvent(elem) {
      var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
    }
    var doesChangeEventBubble = false;
    if (ExecutionEnvironment.canUseDOM) {
      doesChangeEventBubble = isEventSupported('change') && (!('documentMode' in document) || document.documentMode > 8);
    }
    function manualDispatchChangeEvent(nativeEvent) {
      var event = SyntheticEvent.getPooled(eventTypes.change, activeElementInst, nativeEvent, getEventTarget(nativeEvent));
      EventPropagators.accumulateTwoPhaseDispatches(event);
      ReactUpdates.batchedUpdates(runEventInBatch, event);
    }
    function runEventInBatch(event) {
      EventPluginHub.enqueueEvents(event);
      EventPluginHub.processEventQueue(false);
    }
    function startWatchingForChangeEventIE8(target, targetInst) {
      activeElement = target;
      activeElementInst = targetInst;
      activeElement.attachEvent('onchange', manualDispatchChangeEvent);
    }
    function stopWatchingForChangeEventIE8() {
      if (!activeElement) {
        return;
      }
      activeElement.detachEvent('onchange', manualDispatchChangeEvent);
      activeElement = null;
      activeElementInst = null;
    }
    function getTargetInstForChangeEvent(topLevelType, targetInst) {
      if (topLevelType === topLevelTypes.topChange) {
        return targetInst;
      }
    }
    function handleEventsForChangeEventIE8(topLevelType, target, targetInst) {
      if (topLevelType === topLevelTypes.topFocus) {
        stopWatchingForChangeEventIE8();
        startWatchingForChangeEventIE8(target, targetInst);
      } else if (topLevelType === topLevelTypes.topBlur) {
        stopWatchingForChangeEventIE8();
      }
    }
    var isInputEventSupported = false;
    if (ExecutionEnvironment.canUseDOM) {
      isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 11);
    }
    var newValueProp = {
      get: function() {
        return activeElementValueProp.get.call(this);
      },
      set: function(val) {
        activeElementValue = '' + val;
        activeElementValueProp.set.call(this, val);
      }
    };
    function startWatchingForValueChange(target, targetInst) {
      activeElement = target;
      activeElementInst = targetInst;
      activeElementValue = target.value;
      activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');
      Object.defineProperty(activeElement, 'value', newValueProp);
      if (activeElement.attachEvent) {
        activeElement.attachEvent('onpropertychange', handlePropertyChange);
      } else {
        activeElement.addEventListener('propertychange', handlePropertyChange, false);
      }
    }
    function stopWatchingForValueChange() {
      if (!activeElement) {
        return;
      }
      delete activeElement.value;
      if (activeElement.detachEvent) {
        activeElement.detachEvent('onpropertychange', handlePropertyChange);
      } else {
        activeElement.removeEventListener('propertychange', handlePropertyChange, false);
      }
      activeElement = null;
      activeElementInst = null;
      activeElementValue = null;
      activeElementValueProp = null;
    }
    function handlePropertyChange(nativeEvent) {
      if (nativeEvent.propertyName !== 'value') {
        return;
      }
      var value = nativeEvent.srcElement.value;
      if (value === activeElementValue) {
        return;
      }
      activeElementValue = value;
      manualDispatchChangeEvent(nativeEvent);
    }
    function getTargetInstForInputEvent(topLevelType, targetInst) {
      if (topLevelType === topLevelTypes.topInput) {
        return targetInst;
      }
    }
    function handleEventsForInputEventIE(topLevelType, target, targetInst) {
      if (topLevelType === topLevelTypes.topFocus) {
        stopWatchingForValueChange();
        startWatchingForValueChange(target, targetInst);
      } else if (topLevelType === topLevelTypes.topBlur) {
        stopWatchingForValueChange();
      }
    }
    function getTargetInstForInputEventIE(topLevelType, targetInst) {
      if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
        if (activeElement && activeElement.value !== activeElementValue) {
          activeElementValue = activeElement.value;
          return activeElementInst;
        }
      }
    }
    function shouldUseClickEvent(elem) {
      return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
    }
    function getTargetInstForClickEvent(topLevelType, targetInst) {
      if (topLevelType === topLevelTypes.topClick) {
        return targetInst;
      }
    }
    var ChangeEventPlugin = {
      eventTypes: eventTypes,
      extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
        var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;
        var getTargetInstFunc,
            handleEventFunc;
        if (shouldUseChangeEvent(targetNode)) {
          if (doesChangeEventBubble) {
            getTargetInstFunc = getTargetInstForChangeEvent;
          } else {
            handleEventFunc = handleEventsForChangeEventIE8;
          }
        } else if (isTextInputElement(targetNode)) {
          if (isInputEventSupported) {
            getTargetInstFunc = getTargetInstForInputEvent;
          } else {
            getTargetInstFunc = getTargetInstForInputEventIE;
            handleEventFunc = handleEventsForInputEventIE;
          }
        } else if (shouldUseClickEvent(targetNode)) {
          getTargetInstFunc = getTargetInstForClickEvent;
        }
        if (getTargetInstFunc) {
          var inst = getTargetInstFunc(topLevelType, targetInst);
          if (inst) {
            var event = SyntheticEvent.getPooled(eventTypes.change, inst, nativeEvent, nativeEventTarget);
            event.type = 'change';
            EventPropagators.accumulateTwoPhaseDispatches(event);
            return event;
          }
        }
        if (handleEventFunc) {
          handleEventFunc(topLevelType, targetNode, targetInst);
        }
      }
    };
    module.exports = ChangeEventPlugin;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/DefaultEventPluginOrder.js", ["npm:fbjs@0.8.3/lib/keyOf.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var keyOf = $__require('npm:fbjs@0.8.3/lib/keyOf.js');
  var DefaultEventPluginOrder = [keyOf({ResponderEventPlugin: null}), keyOf({SimpleEventPlugin: null}), keyOf({TapEventPlugin: null}), keyOf({EnterLeaveEventPlugin: null}), keyOf({ChangeEventPlugin: null}), keyOf({SelectEventPlugin: null}), keyOf({BeforeInputEventPlugin: null})];
  module.exports = DefaultEventPluginOrder;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/EnterLeaveEventPlugin.js", ["npm:react@15.1.0/lib/EventConstants.js", "npm:react@15.1.0/lib/EventPropagators.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/SyntheticMouseEvent.js", "npm:fbjs@0.8.3/lib/keyOf.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('npm:react@15.1.0/lib/EventConstants.js');
  var EventPropagators = $__require('npm:react@15.1.0/lib/EventPropagators.js');
  var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
  var SyntheticMouseEvent = $__require('npm:react@15.1.0/lib/SyntheticMouseEvent.js');
  var keyOf = $__require('npm:fbjs@0.8.3/lib/keyOf.js');
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {
    mouseEnter: {
      registrationName: keyOf({onMouseEnter: null}),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    },
    mouseLeave: {
      registrationName: keyOf({onMouseLeave: null}),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    }
  };
  var EnterLeaveEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
        return null;
      }
      if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
        return null;
      }
      var win;
      if (nativeEventTarget.window === nativeEventTarget) {
        win = nativeEventTarget;
      } else {
        var doc = nativeEventTarget.ownerDocument;
        if (doc) {
          win = doc.defaultView || doc.parentWindow;
        } else {
          win = window;
        }
      }
      var from;
      var to;
      if (topLevelType === topLevelTypes.topMouseOut) {
        from = targetInst;
        var related = nativeEvent.relatedTarget || nativeEvent.toElement;
        to = related ? ReactDOMComponentTree.getClosestInstanceFromNode(related) : null;
      } else {
        from = null;
        to = targetInst;
      }
      if (from === to) {
        return null;
      }
      var fromNode = from == null ? win : ReactDOMComponentTree.getNodeFromInstance(from);
      var toNode = to == null ? win : ReactDOMComponentTree.getNodeFromInstance(to);
      var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, from, nativeEvent, nativeEventTarget);
      leave.type = 'mouseleave';
      leave.target = fromNode;
      leave.relatedTarget = toNode;
      var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, to, nativeEvent, nativeEventTarget);
      enter.type = 'mouseenter';
      enter.target = toNode;
      enter.relatedTarget = fromNode;
      EventPropagators.accumulateEnterLeaveDispatches(leave, enter, from, to);
      return [leave, enter];
    }
  };
  module.exports = EnterLeaveEventPlugin;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/HTMLDOMPropertyConfig.js", ["npm:react@15.1.0/lib/DOMProperty.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('npm:react@15.1.0/lib/DOMProperty.js');
  var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
  var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
  var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
  var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
  var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
  var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
  var HTMLDOMPropertyConfig = {
    isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')),
    Properties: {
      accept: 0,
      acceptCharset: 0,
      accessKey: 0,
      action: 0,
      allowFullScreen: HAS_BOOLEAN_VALUE,
      allowTransparency: 0,
      alt: 0,
      async: HAS_BOOLEAN_VALUE,
      autoComplete: 0,
      autoPlay: HAS_BOOLEAN_VALUE,
      capture: HAS_BOOLEAN_VALUE,
      cellPadding: 0,
      cellSpacing: 0,
      charSet: 0,
      challenge: 0,
      checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      cite: 0,
      classID: 0,
      className: 0,
      cols: HAS_POSITIVE_NUMERIC_VALUE,
      colSpan: 0,
      content: 0,
      contentEditable: 0,
      contextMenu: 0,
      controls: HAS_BOOLEAN_VALUE,
      coords: 0,
      crossOrigin: 0,
      data: 0,
      dateTime: 0,
      'default': HAS_BOOLEAN_VALUE,
      defer: HAS_BOOLEAN_VALUE,
      dir: 0,
      disabled: HAS_BOOLEAN_VALUE,
      download: HAS_OVERLOADED_BOOLEAN_VALUE,
      draggable: 0,
      encType: 0,
      form: 0,
      formAction: 0,
      formEncType: 0,
      formMethod: 0,
      formNoValidate: HAS_BOOLEAN_VALUE,
      formTarget: 0,
      frameBorder: 0,
      headers: 0,
      height: 0,
      hidden: HAS_BOOLEAN_VALUE,
      high: 0,
      href: 0,
      hrefLang: 0,
      htmlFor: 0,
      httpEquiv: 0,
      icon: 0,
      id: 0,
      inputMode: 0,
      integrity: 0,
      is: 0,
      keyParams: 0,
      keyType: 0,
      kind: 0,
      label: 0,
      lang: 0,
      list: 0,
      loop: HAS_BOOLEAN_VALUE,
      low: 0,
      manifest: 0,
      marginHeight: 0,
      marginWidth: 0,
      max: 0,
      maxLength: 0,
      media: 0,
      mediaGroup: 0,
      method: 0,
      min: 0,
      minLength: 0,
      multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      name: 0,
      nonce: 0,
      noValidate: HAS_BOOLEAN_VALUE,
      open: HAS_BOOLEAN_VALUE,
      optimum: 0,
      pattern: 0,
      placeholder: 0,
      poster: 0,
      preload: 0,
      profile: 0,
      radioGroup: 0,
      readOnly: HAS_BOOLEAN_VALUE,
      rel: 0,
      required: HAS_BOOLEAN_VALUE,
      reversed: HAS_BOOLEAN_VALUE,
      role: 0,
      rows: HAS_POSITIVE_NUMERIC_VALUE,
      rowSpan: HAS_NUMERIC_VALUE,
      sandbox: 0,
      scope: 0,
      scoped: HAS_BOOLEAN_VALUE,
      scrolling: 0,
      seamless: HAS_BOOLEAN_VALUE,
      selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      shape: 0,
      size: HAS_POSITIVE_NUMERIC_VALUE,
      sizes: 0,
      span: HAS_POSITIVE_NUMERIC_VALUE,
      spellCheck: 0,
      src: 0,
      srcDoc: 0,
      srcLang: 0,
      srcSet: 0,
      start: HAS_NUMERIC_VALUE,
      step: 0,
      style: 0,
      summary: 0,
      tabIndex: 0,
      target: 0,
      title: 0,
      type: 0,
      useMap: 0,
      value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
      width: 0,
      wmode: 0,
      wrap: 0,
      about: 0,
      datatype: 0,
      inlist: 0,
      prefix: 0,
      property: 0,
      resource: 0,
      'typeof': 0,
      vocab: 0,
      autoCapitalize: 0,
      autoCorrect: 0,
      autoSave: 0,
      color: 0,
      itemProp: 0,
      itemScope: HAS_BOOLEAN_VALUE,
      itemType: 0,
      itemID: 0,
      itemRef: 0,
      results: 0,
      security: 0,
      unselectable: 0
    },
    DOMAttributeNames: {
      acceptCharset: 'accept-charset',
      className: 'class',
      htmlFor: 'for',
      httpEquiv: 'http-equiv'
    },
    DOMPropertyNames: {}
  };
  module.exports = HTMLDOMPropertyConfig;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/AutoFocusUtils.js", ["npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:fbjs@0.8.3/lib/focusNode.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
  var focusNode = $__require('npm:fbjs@0.8.3/lib/focusNode.js');
  var AutoFocusUtils = {focusDOMComponent: function() {
      focusNode(ReactDOMComponentTree.getNodeFromInstance(this));
    }};
  module.exports = AutoFocusUtils;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/camelize.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _hyphenPattern = /-(.)/g;
  function camelize(string) {
    return string.replace(_hyphenPattern, function(_, character) {
      return character.toUpperCase();
    });
  }
  module.exports = camelize;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/camelizeStyleName.js", ["npm:fbjs@0.8.3/lib/camelize.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var camelize = $__require('npm:fbjs@0.8.3/lib/camelize.js');
  var msPattern = /^-ms-/;
  function camelizeStyleName(string) {
    return camelize(string.replace(msPattern, 'ms-'));
  }
  module.exports = camelizeStyleName;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/CSSProperty.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridColumn: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  }
  var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(isUnitlessNumber).forEach(function(prop) {
    prefixes.forEach(function(prefix) {
      isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
  });
  var shorthandPropertyExpansions = {
    background: {
      backgroundAttachment: true,
      backgroundColor: true,
      backgroundImage: true,
      backgroundPositionX: true,
      backgroundPositionY: true,
      backgroundRepeat: true
    },
    backgroundPosition: {
      backgroundPositionX: true,
      backgroundPositionY: true
    },
    border: {
      borderWidth: true,
      borderStyle: true,
      borderColor: true
    },
    borderBottom: {
      borderBottomWidth: true,
      borderBottomStyle: true,
      borderBottomColor: true
    },
    borderLeft: {
      borderLeftWidth: true,
      borderLeftStyle: true,
      borderLeftColor: true
    },
    borderRight: {
      borderRightWidth: true,
      borderRightStyle: true,
      borderRightColor: true
    },
    borderTop: {
      borderTopWidth: true,
      borderTopStyle: true,
      borderTopColor: true
    },
    font: {
      fontStyle: true,
      fontVariant: true,
      fontWeight: true,
      fontSize: true,
      lineHeight: true,
      fontFamily: true
    },
    outline: {
      outlineWidth: true,
      outlineStyle: true,
      outlineColor: true
    }
  };
  var CSSProperty = {
    isUnitlessNumber: isUnitlessNumber,
    shorthandPropertyExpansions: shorthandPropertyExpansions
  };
  module.exports = CSSProperty;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/dangerousStyleValue.js", ["npm:react@15.1.0/lib/CSSProperty.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var CSSProperty = $__require('npm:react@15.1.0/lib/CSSProperty.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var isUnitlessNumber = CSSProperty.isUnitlessNumber;
    var styleWarnings = {};
    function dangerousStyleValue(name, value, component) {
      var isEmpty = value == null || typeof value === 'boolean' || value === '';
      if (isEmpty) {
        return '';
      }
      var isNonNumeric = isNaN(value);
      if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
        return '' + value;
      }
      if (typeof value === 'string') {
        if ("production" !== 'production') {
          if (component) {
            var owner = component._currentElement._owner;
            var ownerName = owner ? owner.getName() : null;
            if (ownerName && !styleWarnings[ownerName]) {
              styleWarnings[ownerName] = {};
            }
            var warned = false;
            if (ownerName) {
              var warnings = styleWarnings[ownerName];
              warned = warnings[name];
              if (!warned) {
                warnings[name] = true;
              }
            }
            if (!warned) {
              "production" !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
            }
          }
        }
        value = value.trim();
      }
      return value + 'px';
    }
    module.exports = dangerousStyleValue;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/hyphenate.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _uppercasePattern = /([A-Z])/g;
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }
  module.exports = hyphenate;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/hyphenateStyleName.js", ["npm:fbjs@0.8.3/lib/hyphenate.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hyphenate = $__require('npm:fbjs@0.8.3/lib/hyphenate.js');
  var msPattern = /^ms-/;
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }
  module.exports = hyphenateStyleName;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/memoizeStringOnly.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function memoizeStringOnly(callback) {
    var cache = {};
    return function(string) {
      if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(this, string);
      }
      return cache[string];
    };
  }
  module.exports = memoizeStringOnly;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/CSSPropertyOperations.js", ["npm:react@15.1.0/lib/CSSProperty.js", "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:fbjs@0.8.3/lib/camelizeStyleName.js", "npm:react@15.1.0/lib/dangerousStyleValue.js", "npm:fbjs@0.8.3/lib/hyphenateStyleName.js", "npm:fbjs@0.8.3/lib/memoizeStringOnly.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var CSSProperty = $__require('npm:react@15.1.0/lib/CSSProperty.js');
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var camelizeStyleName = $__require('npm:fbjs@0.8.3/lib/camelizeStyleName.js');
    var dangerousStyleValue = $__require('npm:react@15.1.0/lib/dangerousStyleValue.js');
    var hyphenateStyleName = $__require('npm:fbjs@0.8.3/lib/hyphenateStyleName.js');
    var memoizeStringOnly = $__require('npm:fbjs@0.8.3/lib/memoizeStringOnly.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var processStyleName = memoizeStringOnly(function(styleName) {
      return hyphenateStyleName(styleName);
    });
    var hasShorthandPropertyBug = false;
    var styleFloatAccessor = 'cssFloat';
    if (ExecutionEnvironment.canUseDOM) {
      var tempStyle = document.createElement('div').style;
      try {
        tempStyle.font = '';
      } catch (e) {
        hasShorthandPropertyBug = true;
      }
      if (document.documentElement.style.cssFloat === undefined) {
        styleFloatAccessor = 'styleFloat';
      }
    }
    if ("production" !== 'production') {
      var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
      var badStyleValueWithSemicolonPattern = /;\s*$/;
      var warnedStyleNames = {};
      var warnedStyleValues = {};
      var warnedForNaNValue = false;
      var warnHyphenatedStyleName = function(name, owner) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }
        warnedStyleNames[name] = true;
        "production" !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
      };
      var warnBadVendoredStyleName = function(name, owner) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }
        warnedStyleNames[name] = true;
        "production" !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
      };
      var warnStyleValueWithSemicolon = function(name, value, owner) {
        if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
          return;
        }
        warnedStyleValues[value] = true;
        "production" !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
      };
      var warnStyleValueIsNaN = function(name, value, owner) {
        if (warnedForNaNValue) {
          return;
        }
        warnedForNaNValue = true;
        "production" !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
      };
      var checkRenderMessage = function(owner) {
        if (owner) {
          var name = owner.getName();
          if (name) {
            return ' Check the render method of `' + name + '`.';
          }
        }
        return '';
      };
      var warnValidStyle = function(name, value, component) {
        var owner;
        if (component) {
          owner = component._currentElement._owner;
        }
        if (name.indexOf('-') > -1) {
          warnHyphenatedStyleName(name, owner);
        } else if (badVendoredStyleNamePattern.test(name)) {
          warnBadVendoredStyleName(name, owner);
        } else if (badStyleValueWithSemicolonPattern.test(value)) {
          warnStyleValueWithSemicolon(name, value, owner);
        }
        if (typeof value === 'number' && isNaN(value)) {
          warnStyleValueIsNaN(name, value, owner);
        }
      };
    }
    var CSSPropertyOperations = {
      createMarkupForStyles: function(styles, component) {
        var serialized = '';
        for (var styleName in styles) {
          if (!styles.hasOwnProperty(styleName)) {
            continue;
          }
          var styleValue = styles[styleName];
          if ("production" !== 'production') {
            warnValidStyle(styleName, styleValue, component);
          }
          if (styleValue != null) {
            serialized += processStyleName(styleName) + ':';
            serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
          }
        }
        return serialized || null;
      },
      setValueForStyles: function(node, styles, component) {
        if ("production" !== 'production') {
          ReactInstrumentation.debugTool.onNativeOperation(component._debugID, 'update styles', styles);
        }
        var style = node.style;
        for (var styleName in styles) {
          if (!styles.hasOwnProperty(styleName)) {
            continue;
          }
          if ("production" !== 'production') {
            warnValidStyle(styleName, styles[styleName], component);
          }
          var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
          if (styleName === 'float' || styleName === 'cssFloat') {
            styleName = styleFloatAccessor;
          }
          if (styleValue) {
            style[styleName] = styleValue;
          } else {
            var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
            if (expansion) {
              for (var individualStyleName in expansion) {
                style[individualStyleName] = '';
              }
            } else {
              style[styleName] = '';
            }
          }
        }
      }
    };
    module.exports = CSSPropertyOperations;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMIDOperations.js", ["npm:react@15.1.0/lib/DOMChildrenOperations.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var DOMChildrenOperations = $__require('npm:react@15.1.0/lib/DOMChildrenOperations.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactDOMIDOperations = {dangerouslyProcessChildrenUpdates: function(parentInst, updates) {
        var node = ReactDOMComponentTree.getNodeFromInstance(parentInst);
        DOMChildrenOperations.processUpdates(node, updates);
      }};
    module.exports = ReactDOMIDOperations;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactComponentBrowserEnvironment.js", ["npm:react@15.1.0/lib/DOMChildrenOperations.js", "npm:react@15.1.0/lib/ReactDOMIDOperations.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var DOMChildrenOperations = $__require('npm:react@15.1.0/lib/DOMChildrenOperations.js');
    var ReactDOMIDOperations = $__require('npm:react@15.1.0/lib/ReactDOMIDOperations.js');
    var ReactComponentBrowserEnvironment = {
      processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
      replaceNodeWithMarkup: DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup,
      unmountIDFromEnvironment: function(rootNodeID) {}
    };
    module.exports = ReactComponentBrowserEnvironment;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMButton.js", ["npm:react@15.1.0/lib/DisabledInputUtils.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var DisabledInputUtils = $__require('npm:react@15.1.0/lib/DisabledInputUtils.js');
  var ReactDOMButton = {getNativeProps: DisabledInputUtils.getNativeProps};
  module.exports = ReactDOMButton;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMInput.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/DisabledInputUtils.js", "npm:react@15.1.0/lib/DOMPropertyOperations.js", "npm:react@15.1.0/lib/LinkedValueUtils.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactUpdates.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var DisabledInputUtils = $__require('npm:react@15.1.0/lib/DisabledInputUtils.js');
    var DOMPropertyOperations = $__require('npm:react@15.1.0/lib/DOMPropertyOperations.js');
    var LinkedValueUtils = $__require('npm:react@15.1.0/lib/LinkedValueUtils.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactUpdates = $__require('npm:react@15.1.0/lib/ReactUpdates.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var didWarnValueLink = false;
    var didWarnCheckedLink = false;
    var didWarnValueNull = false;
    var didWarnValueDefaultValue = false;
    var didWarnCheckedDefaultChecked = false;
    var didWarnControlledToUncontrolled = false;
    var didWarnUncontrolledToControlled = false;
    function forceUpdateIfMounted() {
      if (this._rootNodeID) {
        ReactDOMInput.updateWrapper(this);
      }
    }
    function warnIfValueIsNull(props) {
      if (props != null && props.value === null && !didWarnValueNull) {
        "production" !== 'production' ? warning(false, '`value` prop on `input` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.') : void 0;
        didWarnValueNull = true;
      }
    }
    var ReactDOMInput = {
      getNativeProps: function(inst, props) {
        var value = LinkedValueUtils.getValue(props);
        var checked = LinkedValueUtils.getChecked(props);
        var nativeProps = _assign({type: undefined}, DisabledInputUtils.getNativeProps(inst, props), {
          defaultChecked: undefined,
          defaultValue: undefined,
          value: value != null ? value : inst._wrapperState.initialValue,
          checked: checked != null ? checked : inst._wrapperState.initialChecked,
          onChange: inst._wrapperState.onChange
        });
        return nativeProps;
      },
      mountWrapper: function(inst, props) {
        if ("production" !== 'production') {
          LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);
          var owner = inst._currentElement._owner;
          if (props.valueLink !== undefined && !didWarnValueLink) {
            "production" !== 'production' ? warning(false, '`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
            didWarnValueLink = true;
          }
          if (props.checkedLink !== undefined && !didWarnCheckedLink) {
            "production" !== 'production' ? warning(false, '`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
            didWarnCheckedLink = true;
          }
          if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
            "production" !== 'production' ? warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
            didWarnCheckedDefaultChecked = true;
          }
          if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
            "production" !== 'production' ? warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
            didWarnValueDefaultValue = true;
          }
          warnIfValueIsNull(props);
        }
        var defaultValue = props.defaultValue;
        inst._wrapperState = {
          initialChecked: props.defaultChecked || false,
          initialValue: defaultValue != null ? defaultValue : null,
          listeners: null,
          onChange: _handleChange.bind(inst)
        };
        if ("production" !== 'production') {
          inst._wrapperState.controlled = props.checked !== undefined || props.value !== undefined;
        }
      },
      updateWrapper: function(inst) {
        var props = inst._currentElement.props;
        if ("production" !== 'production') {
          warnIfValueIsNull(props);
          var initialValue = inst._wrapperState.initialChecked || inst._wrapperState.initialValue;
          var defaultValue = props.defaultChecked || props.defaultValue;
          var controlled = props.checked !== undefined || props.value !== undefined;
          var owner = inst._currentElement._owner;
          if ((initialValue || !inst._wrapperState.controlled) && controlled && !didWarnUncontrolledToControlled) {
            "production" !== 'production' ? warning(false, '%s is changing an uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
            didWarnUncontrolledToControlled = true;
          }
          if (inst._wrapperState.controlled && (defaultValue || !controlled) && !didWarnControlledToUncontrolled) {
            "production" !== 'production' ? warning(false, '%s is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
            didWarnControlledToUncontrolled = true;
          }
        }
        var checked = props.checked;
        if (checked != null) {
          DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'checked', checked || false);
        }
        var value = LinkedValueUtils.getValue(props);
        if (value != null) {
          DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'value', '' + value);
        }
      }
    };
    function _handleChange(event) {
      var props = this._currentElement.props;
      var returnValue = LinkedValueUtils.executeOnChange(props, event);
      ReactUpdates.asap(forceUpdateIfMounted, this);
      var name = props.name;
      if (props.type === 'radio' && name != null) {
        var rootNode = ReactDOMComponentTree.getNodeFromInstance(this);
        var queryRoot = rootNode;
        while (queryRoot.parentNode) {
          queryRoot = queryRoot.parentNode;
        }
        var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
        for (var i = 0; i < group.length; i++) {
          var otherNode = group[i];
          if (otherNode === rootNode || otherNode.form !== rootNode.form) {
            continue;
          }
          var otherInstance = ReactDOMComponentTree.getInstanceFromNode(otherNode);
          !otherInstance ? "production" !== 'production' ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(false) : void 0;
          ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
        }
      }
      return returnValue;
    }
    module.exports = ReactDOMInput;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMOption.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/ReactChildren.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactDOMSelect.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var ReactChildren = $__require('npm:react@15.1.0/lib/ReactChildren.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactDOMSelect = $__require('npm:react@15.1.0/lib/ReactDOMSelect.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var ReactDOMOption = {
      mountWrapper: function(inst, props, nativeParent) {
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : void 0;
        }
        var selectValue = null;
        if (nativeParent != null) {
          var selectParent = nativeParent;
          if (selectParent._tag === 'optgroup') {
            selectParent = selectParent._nativeParent;
          }
          if (selectParent != null && selectParent._tag === 'select') {
            selectValue = ReactDOMSelect.getSelectValueContext(selectParent);
          }
        }
        var selected = null;
        if (selectValue != null) {
          selected = false;
          if (Array.isArray(selectValue)) {
            for (var i = 0; i < selectValue.length; i++) {
              if ('' + selectValue[i] === '' + props.value) {
                selected = true;
                break;
              }
            }
          } else {
            selected = '' + selectValue === '' + props.value;
          }
        }
        inst._wrapperState = {selected: selected};
      },
      postMountWrapper: function(inst) {
        var props = inst._currentElement.props;
        if (props.value != null) {
          var node = ReactDOMComponentTree.getNodeFromInstance(inst);
          node.setAttribute('value', props.value);
        }
      },
      getNativeProps: function(inst, props) {
        var nativeProps = _assign({
          selected: undefined,
          children: undefined
        }, props);
        if (inst._wrapperState.selected != null) {
          nativeProps.selected = inst._wrapperState.selected;
        }
        var content = '';
        ReactChildren.forEach(props.children, function(child) {
          if (child == null) {
            return;
          }
          if (typeof child === 'string' || typeof child === 'number') {
            content += child;
          } else {
            "production" !== 'production' ? warning(false, 'Only strings and numbers are supported as <option> children.') : void 0;
          }
        });
        if (content) {
          nativeProps.children = content;
        }
        return nativeProps;
      }
    };
    module.exports = ReactDOMOption;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMSelect.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/DisabledInputUtils.js", "npm:react@15.1.0/lib/LinkedValueUtils.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactUpdates.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var DisabledInputUtils = $__require('npm:react@15.1.0/lib/DisabledInputUtils.js');
    var LinkedValueUtils = $__require('npm:react@15.1.0/lib/LinkedValueUtils.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactUpdates = $__require('npm:react@15.1.0/lib/ReactUpdates.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var didWarnValueLink = false;
    var didWarnValueNull = false;
    var didWarnValueDefaultValue = false;
    function updateOptionsIfPendingUpdateAndMounted() {
      if (this._rootNodeID && this._wrapperState.pendingUpdate) {
        this._wrapperState.pendingUpdate = false;
        var props = this._currentElement.props;
        var value = LinkedValueUtils.getValue(props);
        if (value != null) {
          updateOptions(this, Boolean(props.multiple), value);
        }
      }
    }
    function getDeclarationErrorAddendum(owner) {
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    function warnIfValueIsNull(props) {
      if (props != null && props.value === null && !didWarnValueNull) {
        "production" !== 'production' ? warning(false, '`value` prop on `select` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.') : void 0;
        didWarnValueNull = true;
      }
    }
    var valuePropNames = ['value', 'defaultValue'];
    function checkSelectPropTypes(inst, props) {
      var owner = inst._currentElement._owner;
      LinkedValueUtils.checkPropTypes('select', props, owner);
      if (props.valueLink !== undefined && !didWarnValueLink) {
        "production" !== 'production' ? warning(false, '`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.') : void 0;
        didWarnValueLink = true;
      }
      for (var i = 0; i < valuePropNames.length; i++) {
        var propName = valuePropNames[i];
        if (props[propName] == null) {
          continue;
        }
        if (props.multiple) {
          "production" !== 'production' ? warning(Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : void 0;
        } else {
          "production" !== 'production' ? warning(!Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : void 0;
        }
      }
    }
    function updateOptions(inst, multiple, propValue) {
      var selectedValue,
          i;
      var options = ReactDOMComponentTree.getNodeFromInstance(inst).options;
      if (multiple) {
        selectedValue = {};
        for (i = 0; i < propValue.length; i++) {
          selectedValue['' + propValue[i]] = true;
        }
        for (i = 0; i < options.length; i++) {
          var selected = selectedValue.hasOwnProperty(options[i].value);
          if (options[i].selected !== selected) {
            options[i].selected = selected;
          }
        }
      } else {
        selectedValue = '' + propValue;
        for (i = 0; i < options.length; i++) {
          if (options[i].value === selectedValue) {
            options[i].selected = true;
            return;
          }
        }
        if (options.length) {
          options[0].selected = true;
        }
      }
    }
    var ReactDOMSelect = {
      getNativeProps: function(inst, props) {
        return _assign({}, DisabledInputUtils.getNativeProps(inst, props), {
          onChange: inst._wrapperState.onChange,
          value: undefined
        });
      },
      mountWrapper: function(inst, props) {
        if ("production" !== 'production') {
          checkSelectPropTypes(inst, props);
          warnIfValueIsNull(props);
        }
        var value = LinkedValueUtils.getValue(props);
        inst._wrapperState = {
          pendingUpdate: false,
          initialValue: value != null ? value : props.defaultValue,
          listeners: null,
          onChange: _handleChange.bind(inst),
          wasMultiple: Boolean(props.multiple)
        };
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
          "production" !== 'production' ? warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
          didWarnValueDefaultValue = true;
        }
      },
      getSelectValueContext: function(inst) {
        return inst._wrapperState.initialValue;
      },
      postUpdateWrapper: function(inst) {
        var props = inst._currentElement.props;
        if ("production" !== 'production') {
          warnIfValueIsNull(props);
        }
        inst._wrapperState.initialValue = undefined;
        var wasMultiple = inst._wrapperState.wasMultiple;
        inst._wrapperState.wasMultiple = Boolean(props.multiple);
        var value = LinkedValueUtils.getValue(props);
        if (value != null) {
          inst._wrapperState.pendingUpdate = false;
          updateOptions(inst, Boolean(props.multiple), value);
        } else if (wasMultiple !== Boolean(props.multiple)) {
          if (props.defaultValue != null) {
            updateOptions(inst, Boolean(props.multiple), props.defaultValue);
          } else {
            updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
          }
        }
      }
    };
    function _handleChange(event) {
      var props = this._currentElement.props;
      var returnValue = LinkedValueUtils.executeOnChange(props, event);
      if (this._rootNodeID) {
        this._wrapperState.pendingUpdate = true;
      }
      ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
      return returnValue;
    }
    module.exports = ReactDOMSelect;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/DisabledInputUtils.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var disableableMouseListenerNames = {
    onClick: true,
    onDoubleClick: true,
    onMouseDown: true,
    onMouseMove: true,
    onMouseUp: true,
    onClickCapture: true,
    onDoubleClickCapture: true,
    onMouseDownCapture: true,
    onMouseMoveCapture: true,
    onMouseUpCapture: true
  };
  var DisabledInputUtils = {getNativeProps: function(inst, props) {
      if (!props.disabled) {
        return props;
      }
      var nativeProps = {};
      for (var key in props) {
        if (!disableableMouseListenerNames[key] && props.hasOwnProperty(key)) {
          nativeProps[key] = props[key];
        }
      }
      return nativeProps;
    }};
  module.exports = DisabledInputUtils;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMUnknownPropertyDevtool.js", ["npm:react@15.1.0/lib/DOMProperty.js", "npm:react@15.1.0/lib/EventPluginRegistry.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var DOMProperty = $__require('npm:react@15.1.0/lib/DOMProperty.js');
    var EventPluginRegistry = $__require('npm:react@15.1.0/lib/EventPluginRegistry.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    if ("production" !== 'production') {
      var reactProps = {
        children: true,
        dangerouslySetInnerHTML: true,
        key: true,
        ref: true
      };
      var warnedProperties = {};
      var warnUnknownProperty = function(name) {
        if (DOMProperty.properties.hasOwnProperty(name) || DOMProperty.isCustomAttribute(name)) {
          return;
        }
        if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
          return;
        }
        warnedProperties[name] = true;
        var lowerCasedName = name.toLowerCase();
        var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;
        "production" !== 'production' ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : void 0;
        var registrationName = EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? EventPluginRegistry.possibleRegistrationNames[lowerCasedName] : null;
        "production" !== 'production' ? warning(registrationName == null, 'Unknown event handler property %s. Did you mean `%s`?', name, registrationName) : void 0;
      };
    }
    var ReactDOMUnknownPropertyDevtool = {
      onCreateMarkupForProperty: function(name, value) {
        warnUnknownProperty(name);
      },
      onSetValueForProperty: function(node, name, value) {
        warnUnknownProperty(name);
      },
      onDeleteValueForProperty: function(node, name) {
        warnUnknownProperty(name);
      }
    };
    module.exports = ReactDOMUnknownPropertyDevtool;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMDebugTool.js", ["npm:react@15.1.0/lib/ReactDOMUnknownPropertyDevtool.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactDOMUnknownPropertyDevtool = $__require('npm:react@15.1.0/lib/ReactDOMUnknownPropertyDevtool.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var eventHandlers = [];
    var handlerDoesThrowForEvent = {};
    function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
      if ("production" !== 'production') {
        eventHandlers.forEach(function(handler) {
          try {
            if (handler[handlerFunctionName]) {
              handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
            }
          } catch (e) {
            "production" !== 'production' ? warning(!handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by devtool while handling %s: %s', handlerFunctionName, e.message) : void 0;
            handlerDoesThrowForEvent[handlerFunctionName] = true;
          }
        });
      }
    }
    var ReactDOMDebugTool = {
      addDevtool: function(devtool) {
        eventHandlers.push(devtool);
      },
      removeDevtool: function(devtool) {
        for (var i = 0; i < eventHandlers.length; i++) {
          if (eventHandlers[i] === devtool) {
            eventHandlers.splice(i, 1);
            i--;
          }
        }
      },
      onCreateMarkupForProperty: function(name, value) {
        emitEvent('onCreateMarkupForProperty', name, value);
      },
      onSetValueForProperty: function(node, name, value) {
        emitEvent('onSetValueForProperty', node, name, value);
      },
      onDeleteValueForProperty: function(node, name) {
        emitEvent('onDeleteValueForProperty', node, name);
      }
    };
    ReactDOMDebugTool.addDevtool(ReactDOMUnknownPropertyDevtool);
    module.exports = ReactDOMDebugTool;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMInstrumentation.js", ["npm:react@15.1.0/lib/ReactDOMDebugTool.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMDebugTool = $__require('npm:react@15.1.0/lib/ReactDOMDebugTool.js');
  module.exports = {debugTool: ReactDOMDebugTool};
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/quoteAttributeValueForBrowser.js", ["npm:react@15.1.0/lib/escapeTextContentForBrowser.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var escapeTextContentForBrowser = $__require('npm:react@15.1.0/lib/escapeTextContentForBrowser.js');
  function quoteAttributeValueForBrowser(value) {
    return '"' + escapeTextContentForBrowser(value) + '"';
  }
  module.exports = quoteAttributeValueForBrowser;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/DOMPropertyOperations.js", ["npm:react@15.1.0/lib/DOMProperty.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactDOMInstrumentation.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:react@15.1.0/lib/quoteAttributeValueForBrowser.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var DOMProperty = $__require('npm:react@15.1.0/lib/DOMProperty.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactDOMInstrumentation = $__require('npm:react@15.1.0/lib/ReactDOMInstrumentation.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var quoteAttributeValueForBrowser = $__require('npm:react@15.1.0/lib/quoteAttributeValueForBrowser.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + DOMProperty.ATTRIBUTE_NAME_START_CHAR + '][' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');
    var illegalAttributeNameCache = {};
    var validatedAttributeNameCache = {};
    function isAttributeNameSafe(attributeName) {
      if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
        return true;
      }
      if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
        return false;
      }
      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
        validatedAttributeNameCache[attributeName] = true;
        return true;
      }
      illegalAttributeNameCache[attributeName] = true;
      "production" !== 'production' ? warning(false, 'Invalid attribute name: `%s`', attributeName) : void 0;
      return false;
    }
    function shouldIgnoreValue(propertyInfo, value) {
      return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
    }
    var DOMPropertyOperations = {
      createMarkupForID: function(id) {
        return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
      },
      setAttributeForID: function(node, id) {
        node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
      },
      createMarkupForRoot: function() {
        return DOMProperty.ROOT_ATTRIBUTE_NAME + '=""';
      },
      setAttributeForRoot: function(node) {
        node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME, '');
      },
      createMarkupForProperty: function(name, value) {
        if ("production" !== 'production') {
          ReactDOMInstrumentation.debugTool.onCreateMarkupForProperty(name, value);
        }
        var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
        if (propertyInfo) {
          if (shouldIgnoreValue(propertyInfo, value)) {
            return '';
          }
          var attributeName = propertyInfo.attributeName;
          if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
            return attributeName + '=""';
          }
          return attributeName + '=' + quoteAttributeValueForBrowser(value);
        } else if (DOMProperty.isCustomAttribute(name)) {
          if (value == null) {
            return '';
          }
          return name + '=' + quoteAttributeValueForBrowser(value);
        }
        return null;
      },
      createMarkupForCustomAttribute: function(name, value) {
        if (!isAttributeNameSafe(name) || value == null) {
          return '';
        }
        return name + '=' + quoteAttributeValueForBrowser(value);
      },
      setValueForProperty: function(node, name, value) {
        var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
        if (propertyInfo) {
          var mutationMethod = propertyInfo.mutationMethod;
          if (mutationMethod) {
            mutationMethod(node, value);
          } else if (shouldIgnoreValue(propertyInfo, value)) {
            this.deleteValueForProperty(node, name);
            return;
          } else if (propertyInfo.mustUseProperty) {
            var propName = propertyInfo.propertyName;
            if (!propertyInfo.hasSideEffects || '' + node[propName] !== '' + value) {
              node[propName] = value;
            }
          } else {
            var attributeName = propertyInfo.attributeName;
            var namespace = propertyInfo.attributeNamespace;
            if (namespace) {
              node.setAttributeNS(namespace, attributeName, '' + value);
            } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
              node.setAttribute(attributeName, '');
            } else {
              node.setAttribute(attributeName, '' + value);
            }
          }
        } else if (DOMProperty.isCustomAttribute(name)) {
          DOMPropertyOperations.setValueForAttribute(node, name, value);
          return;
        }
        if ("production" !== 'production') {
          ReactDOMInstrumentation.debugTool.onSetValueForProperty(node, name, value);
          var payload = {};
          payload[name] = value;
          ReactInstrumentation.debugTool.onNativeOperation(ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 'update attribute', payload);
        }
      },
      setValueForAttribute: function(node, name, value) {
        if (!isAttributeNameSafe(name)) {
          return;
        }
        if (value == null) {
          node.removeAttribute(name);
        } else {
          node.setAttribute(name, '' + value);
        }
        if ("production" !== 'production') {
          var payload = {};
          payload[name] = value;
          ReactInstrumentation.debugTool.onNativeOperation(ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 'update attribute', payload);
        }
      },
      deleteValueForProperty: function(node, name) {
        var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
        if (propertyInfo) {
          var mutationMethod = propertyInfo.mutationMethod;
          if (mutationMethod) {
            mutationMethod(node, undefined);
          } else if (propertyInfo.mustUseProperty) {
            var propName = propertyInfo.propertyName;
            if (propertyInfo.hasBooleanValue) {
              node[propName] = false;
            } else {
              if (!propertyInfo.hasSideEffects || '' + node[propName] !== '') {
                node[propName] = '';
              }
            }
          } else {
            node.removeAttribute(propertyInfo.attributeName);
          }
        } else if (DOMProperty.isCustomAttribute(name)) {
          node.removeAttribute(name);
        }
        if ("production" !== 'production') {
          ReactDOMInstrumentation.debugTool.onDeleteValueForProperty(node, name);
          ReactInstrumentation.debugTool.onNativeOperation(ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 'remove attribute', name);
        }
      }
    };
    module.exports = DOMPropertyOperations;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/LinkedValueUtils.js", ["npm:react@15.1.0/lib/ReactPropTypes.js", "npm:react@15.1.0/lib/ReactPropTypeLocations.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactPropTypes = $__require('npm:react@15.1.0/lib/ReactPropTypes.js');
    var ReactPropTypeLocations = $__require('npm:react@15.1.0/lib/ReactPropTypeLocations.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var hasReadOnlyValue = {
      'button': true,
      'checkbox': true,
      'image': true,
      'hidden': true,
      'radio': true,
      'reset': true,
      'submit': true
    };
    function _assertSingleLink(inputProps) {
      !(inputProps.checkedLink == null || inputProps.valueLink == null) ? "production" !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(false) : void 0;
    }
    function _assertValueLink(inputProps) {
      _assertSingleLink(inputProps);
      !(inputProps.value == null && inputProps.onChange == null) ? "production" !== 'production' ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(false) : void 0;
    }
    function _assertCheckedLink(inputProps) {
      _assertSingleLink(inputProps);
      !(inputProps.checked == null && inputProps.onChange == null) ? "production" !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(false) : void 0;
    }
    var propTypes = {
      value: function(props, propName, componentName) {
        if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
          return null;
        }
        return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
      },
      checked: function(props, propName, componentName) {
        if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
          return null;
        }
        return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
      },
      onChange: ReactPropTypes.func
    };
    var loggedTypeFailures = {};
    function getDeclarationErrorAddendum(owner) {
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    var LinkedValueUtils = {
      checkPropTypes: function(tagName, props, owner) {
        for (var propName in propTypes) {
          if (propTypes.hasOwnProperty(propName)) {
            var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop);
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var addendum = getDeclarationErrorAddendum(owner);
            "production" !== 'production' ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : void 0;
          }
        }
      },
      getValue: function(inputProps) {
        if (inputProps.valueLink) {
          _assertValueLink(inputProps);
          return inputProps.valueLink.value;
        }
        return inputProps.value;
      },
      getChecked: function(inputProps) {
        if (inputProps.checkedLink) {
          _assertCheckedLink(inputProps);
          return inputProps.checkedLink.value;
        }
        return inputProps.checked;
      },
      executeOnChange: function(inputProps, event) {
        if (inputProps.valueLink) {
          _assertValueLink(inputProps);
          return inputProps.valueLink.requestChange(event.target.value);
        } else if (inputProps.checkedLink) {
          _assertCheckedLink(inputProps);
          return inputProps.checkedLink.requestChange(event.target.checked);
        } else if (inputProps.onChange) {
          return inputProps.onChange.call(undefined, event);
        }
      }
    };
    module.exports = LinkedValueUtils;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMTextarea.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/DisabledInputUtils.js", "npm:react@15.1.0/lib/DOMPropertyOperations.js", "npm:react@15.1.0/lib/LinkedValueUtils.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactUpdates.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var DisabledInputUtils = $__require('npm:react@15.1.0/lib/DisabledInputUtils.js');
    var DOMPropertyOperations = $__require('npm:react@15.1.0/lib/DOMPropertyOperations.js');
    var LinkedValueUtils = $__require('npm:react@15.1.0/lib/LinkedValueUtils.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactUpdates = $__require('npm:react@15.1.0/lib/ReactUpdates.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var didWarnValueLink = false;
    var didWarnValueNull = false;
    var didWarnValDefaultVal = false;
    function forceUpdateIfMounted() {
      if (this._rootNodeID) {
        ReactDOMTextarea.updateWrapper(this);
      }
    }
    function warnIfValueIsNull(props) {
      if (props != null && props.value === null && !didWarnValueNull) {
        "production" !== 'production' ? warning(false, '`value` prop on `textarea` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.') : void 0;
        didWarnValueNull = true;
      }
    }
    var ReactDOMTextarea = {
      getNativeProps: function(inst, props) {
        !(props.dangerouslySetInnerHTML == null) ? "production" !== 'production' ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(false) : void 0;
        var nativeProps = _assign({}, DisabledInputUtils.getNativeProps(inst, props), {
          defaultValue: undefined,
          value: undefined,
          children: inst._wrapperState.initialValue,
          onChange: inst._wrapperState.onChange
        });
        return nativeProps;
      },
      mountWrapper: function(inst, props) {
        if ("production" !== 'production') {
          LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
          if (props.valueLink !== undefined && !didWarnValueLink) {
            "production" !== 'production' ? warning(false, '`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.') : void 0;
            didWarnValueLink = true;
          }
          if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
            "production" !== 'production' ? warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
            didWarnValDefaultVal = true;
          }
          warnIfValueIsNull(props);
        }
        var defaultValue = props.defaultValue;
        var children = props.children;
        if (children != null) {
          if ("production" !== 'production') {
            "production" !== 'production' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : void 0;
          }
          !(defaultValue == null) ? "production" !== 'production' ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(false) : void 0;
          if (Array.isArray(children)) {
            !(children.length <= 1) ? "production" !== 'production' ? invariant(false, '<textarea> can only have at most one child.') : invariant(false) : void 0;
            children = children[0];
          }
          defaultValue = '' + children;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        var value = LinkedValueUtils.getValue(props);
        inst._wrapperState = {
          initialValue: '' + (value != null ? value : defaultValue),
          listeners: null,
          onChange: _handleChange.bind(inst)
        };
      },
      updateWrapper: function(inst) {
        var props = inst._currentElement.props;
        if ("production" !== 'production') {
          warnIfValueIsNull(props);
        }
        var value = LinkedValueUtils.getValue(props);
        if (value != null) {
          DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'value', '' + value);
        }
      }
    };
    function _handleChange(event) {
      var props = this._currentElement.props;
      var returnValue = LinkedValueUtils.executeOnChange(props, event);
      ReactUpdates.asap(forceUpdateIfMounted, this);
      return returnValue;
    }
    module.exports = ReactDOMTextarea;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactChildReconciler.js", ["npm:react@15.1.0/lib/ReactReconciler.js", "npm:react@15.1.0/lib/instantiateReactComponent.js", "npm:react@15.1.0/lib/KeyEscapeUtils.js", "npm:react@15.1.0/lib/shouldUpdateReactComponent.js", "npm:react@15.1.0/lib/traverseAllChildren.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactReconciler = $__require('npm:react@15.1.0/lib/ReactReconciler.js');
    var instantiateReactComponent = $__require('npm:react@15.1.0/lib/instantiateReactComponent.js');
    var KeyEscapeUtils = $__require('npm:react@15.1.0/lib/KeyEscapeUtils.js');
    var shouldUpdateReactComponent = $__require('npm:react@15.1.0/lib/shouldUpdateReactComponent.js');
    var traverseAllChildren = $__require('npm:react@15.1.0/lib/traverseAllChildren.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    function instantiateChild(childInstances, child, name) {
      var keyUnique = childInstances[name] === undefined;
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', KeyEscapeUtils.unescape(name)) : void 0;
      }
      if (child != null && keyUnique) {
        childInstances[name] = instantiateReactComponent(child);
      }
    }
    var ReactChildReconciler = {
      instantiateChildren: function(nestedChildNodes, transaction, context) {
        if (nestedChildNodes == null) {
          return null;
        }
        var childInstances = {};
        traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
        return childInstances;
      },
      updateChildren: function(prevChildren, nextChildren, removedNodes, transaction, context) {
        if (!nextChildren && !prevChildren) {
          return;
        }
        var name;
        var prevChild;
        for (name in nextChildren) {
          if (!nextChildren.hasOwnProperty(name)) {
            continue;
          }
          prevChild = prevChildren && prevChildren[name];
          var prevElement = prevChild && prevChild._currentElement;
          var nextElement = nextChildren[name];
          if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
            ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
            nextChildren[name] = prevChild;
          } else {
            if (prevChild) {
              removedNodes[name] = ReactReconciler.getNativeNode(prevChild);
              ReactReconciler.unmountComponent(prevChild, false);
            }
            var nextChildInstance = instantiateReactComponent(nextElement);
            nextChildren[name] = nextChildInstance;
          }
        }
        for (name in prevChildren) {
          if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
            prevChild = prevChildren[name];
            removedNodes[name] = ReactReconciler.getNativeNode(prevChild);
            ReactReconciler.unmountComponent(prevChild, false);
          }
        }
      },
      unmountChildren: function(renderedChildren, safely) {
        for (var name in renderedChildren) {
          if (renderedChildren.hasOwnProperty(name)) {
            var renderedChild = renderedChildren[name];
            ReactReconciler.unmountComponent(renderedChild, safely);
          }
        }
      }
    };
    module.exports = ReactChildReconciler;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/flattenChildren.js", ["npm:react@15.1.0/lib/KeyEscapeUtils.js", "npm:react@15.1.0/lib/traverseAllChildren.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var KeyEscapeUtils = $__require('npm:react@15.1.0/lib/KeyEscapeUtils.js');
    var traverseAllChildren = $__require('npm:react@15.1.0/lib/traverseAllChildren.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    function flattenSingleChildIntoContext(traverseContext, child, name) {
      var result = traverseContext;
      var keyUnique = result[name] === undefined;
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', KeyEscapeUtils.unescape(name)) : void 0;
      }
      if (keyUnique && child != null) {
        result[name] = child;
      }
    }
    function flattenChildren(children) {
      if (children == null) {
        return children;
      }
      var result = {};
      traverseAllChildren(children, flattenSingleChildIntoContext, result);
      return result;
    }
    module.exports = flattenChildren;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactMultiChild.js", ["npm:react@15.1.0/lib/ReactComponentEnvironment.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:react@15.1.0/lib/ReactMultiChildUpdateTypes.js", "npm:react@15.1.0/lib/ReactCurrentOwner.js", "npm:react@15.1.0/lib/ReactReconciler.js", "npm:react@15.1.0/lib/ReactChildReconciler.js", "npm:fbjs@0.8.3/lib/emptyFunction.js", "npm:react@15.1.0/lib/flattenChildren.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactComponentEnvironment = $__require('npm:react@15.1.0/lib/ReactComponentEnvironment.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var ReactMultiChildUpdateTypes = $__require('npm:react@15.1.0/lib/ReactMultiChildUpdateTypes.js');
    var ReactCurrentOwner = $__require('npm:react@15.1.0/lib/ReactCurrentOwner.js');
    var ReactReconciler = $__require('npm:react@15.1.0/lib/ReactReconciler.js');
    var ReactChildReconciler = $__require('npm:react@15.1.0/lib/ReactChildReconciler.js');
    var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
    var flattenChildren = $__require('npm:react@15.1.0/lib/flattenChildren.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    function makeInsertMarkup(markup, afterNode, toIndex) {
      return {
        type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
        content: markup,
        fromIndex: null,
        fromNode: null,
        toIndex: toIndex,
        afterNode: afterNode
      };
    }
    function makeMove(child, afterNode, toIndex) {
      return {
        type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
        content: null,
        fromIndex: child._mountIndex,
        fromNode: ReactReconciler.getNativeNode(child),
        toIndex: toIndex,
        afterNode: afterNode
      };
    }
    function makeRemove(child, node) {
      return {
        type: ReactMultiChildUpdateTypes.REMOVE_NODE,
        content: null,
        fromIndex: child._mountIndex,
        fromNode: node,
        toIndex: null,
        afterNode: null
      };
    }
    function makeSetMarkup(markup) {
      return {
        type: ReactMultiChildUpdateTypes.SET_MARKUP,
        content: markup,
        fromIndex: null,
        fromNode: null,
        toIndex: null,
        afterNode: null
      };
    }
    function makeTextContent(textContent) {
      return {
        type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
        content: textContent,
        fromIndex: null,
        fromNode: null,
        toIndex: null,
        afterNode: null
      };
    }
    function enqueue(queue, update) {
      if (update) {
        queue = queue || [];
        queue.push(update);
      }
      return queue;
    }
    function processQueue(inst, updateQueue) {
      ReactComponentEnvironment.processChildrenUpdates(inst, updateQueue);
    }
    var setChildrenForInstrumentation = emptyFunction;
    if ("production" !== 'production') {
      setChildrenForInstrumentation = function(children) {
        ReactInstrumentation.debugTool.onSetChildren(this._debugID, children ? Object.keys(children).map(function(key) {
          return children[key]._debugID;
        }) : []);
      };
    }
    var ReactMultiChild = {Mixin: {
        _reconcilerInstantiateChildren: function(nestedChildren, transaction, context) {
          if ("production" !== 'production') {
            if (this._currentElement) {
              try {
                ReactCurrentOwner.current = this._currentElement._owner;
                return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
              } finally {
                ReactCurrentOwner.current = null;
              }
            }
          }
          return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
        },
        _reconcilerUpdateChildren: function(prevChildren, nextNestedChildrenElements, removedNodes, transaction, context) {
          var nextChildren;
          if ("production" !== 'production') {
            if (this._currentElement) {
              try {
                ReactCurrentOwner.current = this._currentElement._owner;
                nextChildren = flattenChildren(nextNestedChildrenElements);
              } finally {
                ReactCurrentOwner.current = null;
              }
              ReactChildReconciler.updateChildren(prevChildren, nextChildren, removedNodes, transaction, context);
              return nextChildren;
            }
          }
          nextChildren = flattenChildren(nextNestedChildrenElements);
          ReactChildReconciler.updateChildren(prevChildren, nextChildren, removedNodes, transaction, context);
          return nextChildren;
        },
        mountChildren: function(nestedChildren, transaction, context) {
          var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
          this._renderedChildren = children;
          var mountImages = [];
          var index = 0;
          for (var name in children) {
            if (children.hasOwnProperty(name)) {
              var child = children[name];
              var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._nativeContainerInfo, context);
              child._mountIndex = index++;
              mountImages.push(mountImage);
            }
          }
          if ("production" !== 'production') {
            setChildrenForInstrumentation.call(this, children);
          }
          return mountImages;
        },
        updateTextContent: function(nextContent) {
          var prevChildren = this._renderedChildren;
          ReactChildReconciler.unmountChildren(prevChildren, false);
          for (var name in prevChildren) {
            if (prevChildren.hasOwnProperty(name)) {
              !false ? "production" !== 'production' ? invariant(false, 'updateTextContent called on non-empty component.') : invariant(false) : void 0;
            }
          }
          var updates = [makeTextContent(nextContent)];
          processQueue(this, updates);
        },
        updateMarkup: function(nextMarkup) {
          var prevChildren = this._renderedChildren;
          ReactChildReconciler.unmountChildren(prevChildren, false);
          for (var name in prevChildren) {
            if (prevChildren.hasOwnProperty(name)) {
              !false ? "production" !== 'production' ? invariant(false, 'updateTextContent called on non-empty component.') : invariant(false) : void 0;
            }
          }
          var updates = [makeSetMarkup(nextMarkup)];
          processQueue(this, updates);
        },
        updateChildren: function(nextNestedChildrenElements, transaction, context) {
          this._updateChildren(nextNestedChildrenElements, transaction, context);
        },
        _updateChildren: function(nextNestedChildrenElements, transaction, context) {
          var prevChildren = this._renderedChildren;
          var removedNodes = {};
          var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, removedNodes, transaction, context);
          if (!nextChildren && !prevChildren) {
            return;
          }
          var updates = null;
          var name;
          var lastIndex = 0;
          var nextIndex = 0;
          var lastPlacedNode = null;
          for (name in nextChildren) {
            if (!nextChildren.hasOwnProperty(name)) {
              continue;
            }
            var prevChild = prevChildren && prevChildren[name];
            var nextChild = nextChildren[name];
            if (prevChild === nextChild) {
              updates = enqueue(updates, this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));
              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              prevChild._mountIndex = nextIndex;
            } else {
              if (prevChild) {
                lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              }
              updates = enqueue(updates, this._mountChildAtIndex(nextChild, lastPlacedNode, nextIndex, transaction, context));
            }
            nextIndex++;
            lastPlacedNode = ReactReconciler.getNativeNode(nextChild);
          }
          for (name in removedNodes) {
            if (removedNodes.hasOwnProperty(name)) {
              updates = enqueue(updates, this._unmountChild(prevChildren[name], removedNodes[name]));
            }
          }
          if (updates) {
            processQueue(this, updates);
          }
          this._renderedChildren = nextChildren;
          if ("production" !== 'production') {
            setChildrenForInstrumentation.call(this, nextChildren);
          }
        },
        unmountChildren: function(safely) {
          var renderedChildren = this._renderedChildren;
          ReactChildReconciler.unmountChildren(renderedChildren, safely);
          this._renderedChildren = null;
        },
        moveChild: function(child, afterNode, toIndex, lastIndex) {
          if (child._mountIndex < lastIndex) {
            return makeMove(child, afterNode, toIndex);
          }
        },
        createChild: function(child, afterNode, mountImage) {
          return makeInsertMarkup(mountImage, afterNode, child._mountIndex);
        },
        removeChild: function(child, node) {
          return makeRemove(child, node);
        },
        _mountChildAtIndex: function(child, afterNode, index, transaction, context) {
          var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._nativeContainerInfo, context);
          child._mountIndex = index;
          return this.createChild(child, afterNode, mountImage);
        },
        _unmountChild: function(child, node) {
          var update = this.removeChild(child, node);
          child._mountIndex = null;
          return update;
        }
      }};
    module.exports = ReactMultiChild;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactServerRenderingTransaction.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/PooledClass.js", "npm:react@15.1.0/lib/Transaction.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('npm:object-assign@4.1.0.js');
  var PooledClass = $__require('npm:react@15.1.0/lib/PooledClass.js');
  var Transaction = $__require('npm:react@15.1.0/lib/Transaction.js');
  var TRANSACTION_WRAPPERS = [];
  var noopCallbackQueue = {enqueue: function() {}};
  function ReactServerRenderingTransaction(renderToStaticMarkup) {
    this.reinitializeTransaction();
    this.renderToStaticMarkup = renderToStaticMarkup;
    this.useCreateElement = false;
  }
  var Mixin = {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    getReactMountReady: function() {
      return noopCallbackQueue;
    },
    destructor: function() {},
    checkpoint: function() {},
    rollback: function() {}
  };
  _assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);
  PooledClass.addPoolingTo(ReactServerRenderingTransaction);
  module.exports = ReactServerRenderingTransaction;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMComponent.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/AutoFocusUtils.js", "npm:react@15.1.0/lib/CSSPropertyOperations.js", "npm:react@15.1.0/lib/DOMLazyTree.js", "npm:react@15.1.0/lib/DOMNamespaces.js", "npm:react@15.1.0/lib/DOMProperty.js", "npm:react@15.1.0/lib/DOMPropertyOperations.js", "npm:react@15.1.0/lib/EventConstants.js", "npm:react@15.1.0/lib/EventPluginHub.js", "npm:react@15.1.0/lib/EventPluginRegistry.js", "npm:react@15.1.0/lib/ReactBrowserEventEmitter.js", "npm:react@15.1.0/lib/ReactComponentBrowserEnvironment.js", "npm:react@15.1.0/lib/ReactDOMButton.js", "npm:react@15.1.0/lib/ReactDOMComponentFlags.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactDOMInput.js", "npm:react@15.1.0/lib/ReactDOMOption.js", "npm:react@15.1.0/lib/ReactDOMSelect.js", "npm:react@15.1.0/lib/ReactDOMTextarea.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:react@15.1.0/lib/ReactMultiChild.js", "npm:react@15.1.0/lib/ReactServerRenderingTransaction.js", "npm:fbjs@0.8.3/lib/emptyFunction.js", "npm:react@15.1.0/lib/escapeTextContentForBrowser.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:react@15.1.0/lib/isEventSupported.js", "npm:fbjs@0.8.3/lib/keyOf.js", "npm:fbjs@0.8.3/lib/shallowEqual.js", "npm:react@15.1.0/lib/validateDOMNesting.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var AutoFocusUtils = $__require('npm:react@15.1.0/lib/AutoFocusUtils.js');
    var CSSPropertyOperations = $__require('npm:react@15.1.0/lib/CSSPropertyOperations.js');
    var DOMLazyTree = $__require('npm:react@15.1.0/lib/DOMLazyTree.js');
    var DOMNamespaces = $__require('npm:react@15.1.0/lib/DOMNamespaces.js');
    var DOMProperty = $__require('npm:react@15.1.0/lib/DOMProperty.js');
    var DOMPropertyOperations = $__require('npm:react@15.1.0/lib/DOMPropertyOperations.js');
    var EventConstants = $__require('npm:react@15.1.0/lib/EventConstants.js');
    var EventPluginHub = $__require('npm:react@15.1.0/lib/EventPluginHub.js');
    var EventPluginRegistry = $__require('npm:react@15.1.0/lib/EventPluginRegistry.js');
    var ReactBrowserEventEmitter = $__require('npm:react@15.1.0/lib/ReactBrowserEventEmitter.js');
    var ReactComponentBrowserEnvironment = $__require('npm:react@15.1.0/lib/ReactComponentBrowserEnvironment.js');
    var ReactDOMButton = $__require('npm:react@15.1.0/lib/ReactDOMButton.js');
    var ReactDOMComponentFlags = $__require('npm:react@15.1.0/lib/ReactDOMComponentFlags.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactDOMInput = $__require('npm:react@15.1.0/lib/ReactDOMInput.js');
    var ReactDOMOption = $__require('npm:react@15.1.0/lib/ReactDOMOption.js');
    var ReactDOMSelect = $__require('npm:react@15.1.0/lib/ReactDOMSelect.js');
    var ReactDOMTextarea = $__require('npm:react@15.1.0/lib/ReactDOMTextarea.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var ReactMultiChild = $__require('npm:react@15.1.0/lib/ReactMultiChild.js');
    var ReactServerRenderingTransaction = $__require('npm:react@15.1.0/lib/ReactServerRenderingTransaction.js');
    var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
    var escapeTextContentForBrowser = $__require('npm:react@15.1.0/lib/escapeTextContentForBrowser.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var isEventSupported = $__require('npm:react@15.1.0/lib/isEventSupported.js');
    var keyOf = $__require('npm:fbjs@0.8.3/lib/keyOf.js');
    var shallowEqual = $__require('npm:fbjs@0.8.3/lib/shallowEqual.js');
    var validateDOMNesting = $__require('npm:react@15.1.0/lib/validateDOMNesting.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var Flags = ReactDOMComponentFlags;
    var deleteListener = EventPluginHub.deleteListener;
    var getNode = ReactDOMComponentTree.getNodeFromInstance;
    var listenTo = ReactBrowserEventEmitter.listenTo;
    var registrationNameModules = EventPluginRegistry.registrationNameModules;
    var CONTENT_TYPES = {
      'string': true,
      'number': true
    };
    var STYLE = keyOf({style: null});
    var HTML = keyOf({__html: null});
    var RESERVED_PROPS = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null
    };
    var DOC_FRAGMENT_TYPE = 11;
    function getDeclarationErrorAddendum(internalInstance) {
      if (internalInstance) {
        var owner = internalInstance._currentElement._owner || null;
        if (owner) {
          var name = owner.getName();
          if (name) {
            return ' This DOM node was rendered by `' + name + '`.';
          }
        }
      }
      return '';
    }
    function friendlyStringify(obj) {
      if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
          return '[' + obj.map(friendlyStringify).join(', ') + ']';
        } else {
          var pairs = [];
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
              pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
            }
          }
          return '{' + pairs.join(', ') + '}';
        }
      } else if (typeof obj === 'string') {
        return JSON.stringify(obj);
      } else if (typeof obj === 'function') {
        return '[function object]';
      }
      return String(obj);
    }
    var styleMutationWarning = {};
    function checkAndWarnForMutatedStyle(style1, style2, component) {
      if (style1 == null || style2 == null) {
        return;
      }
      if (shallowEqual(style1, style2)) {
        return;
      }
      var componentName = component._tag;
      var owner = component._currentElement._owner;
      var ownerName;
      if (owner) {
        ownerName = owner.getName();
      }
      var hash = ownerName + '|' + componentName;
      if (styleMutationWarning.hasOwnProperty(hash)) {
        return;
      }
      styleMutationWarning[hash] = true;
      "production" !== 'production' ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : void 0;
    }
    function assertValidProps(component, props) {
      if (!props) {
        return;
      }
      if (voidElementTags[component._tag]) {
        !(props.children == null && props.dangerouslySetInnerHTML == null) ? "production" !== 'production' ? invariant(false, '%s is a void element tag and must not have `children` or ' + 'use `props.dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : invariant(false) : void 0;
      }
      if (props.dangerouslySetInnerHTML != null) {
        !(props.children == null) ? "production" !== 'production' ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(false) : void 0;
        !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? "production" !== 'production' ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(false) : void 0;
      }
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : void 0;
        "production" !== 'production' ? warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
        "production" !== 'production' ? warning(props.onFocusIn == null && props.onFocusOut == null, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.') : void 0;
      }
      !(props.style == null || typeof props.style === 'object') ? "production" !== 'production' ? invariant(false, 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.%s', getDeclarationErrorAddendum(component)) : invariant(false) : void 0;
    }
    function enqueuePutListener(inst, registrationName, listener, transaction) {
      if (transaction instanceof ReactServerRenderingTransaction) {
        return;
      }
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : void 0;
      }
      var containerInfo = inst._nativeContainerInfo;
      var isDocumentFragment = containerInfo._node && containerInfo._node.nodeType === DOC_FRAGMENT_TYPE;
      var doc = isDocumentFragment ? containerInfo._node : containerInfo._ownerDocument;
      listenTo(registrationName, doc);
      transaction.getReactMountReady().enqueue(putListener, {
        inst: inst,
        registrationName: registrationName,
        listener: listener
      });
    }
    function putListener() {
      var listenerToPut = this;
      EventPluginHub.putListener(listenerToPut.inst, listenerToPut.registrationName, listenerToPut.listener);
    }
    function optionPostMount() {
      var inst = this;
      ReactDOMOption.postMountWrapper(inst);
    }
    var setContentChildForInstrumentation = emptyFunction;
    if ("production" !== 'production') {
      setContentChildForInstrumentation = function(contentToUse) {
        var debugID = this._debugID;
        var contentDebugID = debugID + '#text';
        this._contentDebugID = contentDebugID;
        ReactInstrumentation.debugTool.onSetDisplayName(contentDebugID, '#text');
        ReactInstrumentation.debugTool.onSetText(contentDebugID, '' + contentToUse);
        ReactInstrumentation.debugTool.onMountComponent(contentDebugID);
        ReactInstrumentation.debugTool.onSetChildren(debugID, [contentDebugID]);
      };
    }
    var mediaEvents = {
      topAbort: 'abort',
      topCanPlay: 'canplay',
      topCanPlayThrough: 'canplaythrough',
      topDurationChange: 'durationchange',
      topEmptied: 'emptied',
      topEncrypted: 'encrypted',
      topEnded: 'ended',
      topError: 'error',
      topLoadedData: 'loadeddata',
      topLoadedMetadata: 'loadedmetadata',
      topLoadStart: 'loadstart',
      topPause: 'pause',
      topPlay: 'play',
      topPlaying: 'playing',
      topProgress: 'progress',
      topRateChange: 'ratechange',
      topSeeked: 'seeked',
      topSeeking: 'seeking',
      topStalled: 'stalled',
      topSuspend: 'suspend',
      topTimeUpdate: 'timeupdate',
      topVolumeChange: 'volumechange',
      topWaiting: 'waiting'
    };
    function trapBubbledEventsLocal() {
      var inst = this;
      !inst._rootNodeID ? "production" !== 'production' ? invariant(false, 'Must be mounted to trap events') : invariant(false) : void 0;
      var node = getNode(inst);
      !node ? "production" !== 'production' ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : invariant(false) : void 0;
      switch (inst._tag) {
        case 'iframe':
        case 'object':
          inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
          break;
        case 'video':
        case 'audio':
          inst._wrapperState.listeners = [];
          for (var event in mediaEvents) {
            if (mediaEvents.hasOwnProperty(event)) {
              inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
            }
          }
          break;
        case 'img':
          inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
          break;
        case 'form':
          inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit', node)];
          break;
        case 'input':
        case 'select':
        case 'textarea':
          inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topInvalid, 'invalid', node)];
          break;
      }
    }
    function postUpdateSelectWrapper() {
      ReactDOMSelect.postUpdateWrapper(this);
    }
    var omittedCloseTags = {
      'area': true,
      'base': true,
      'br': true,
      'col': true,
      'embed': true,
      'hr': true,
      'img': true,
      'input': true,
      'keygen': true,
      'link': true,
      'meta': true,
      'param': true,
      'source': true,
      'track': true,
      'wbr': true
    };
    var newlineEatingTags = {
      'listing': true,
      'pre': true,
      'textarea': true
    };
    var voidElementTags = _assign({'menuitem': true}, omittedCloseTags);
    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var validatedTagCache = {};
    var hasOwnProperty = {}.hasOwnProperty;
    function validateDangerousTag(tag) {
      if (!hasOwnProperty.call(validatedTagCache, tag)) {
        !VALID_TAG_REGEX.test(tag) ? "production" !== 'production' ? invariant(false, 'Invalid tag: %s', tag) : invariant(false) : void 0;
        validatedTagCache[tag] = true;
      }
    }
    function isCustomComponent(tagName, props) {
      return tagName.indexOf('-') >= 0 || props.is != null;
    }
    var globalIdCounter = 1;
    function ReactDOMComponent(element) {
      var tag = element.type;
      validateDangerousTag(tag);
      this._currentElement = element;
      this._tag = tag.toLowerCase();
      this._namespaceURI = null;
      this._renderedChildren = null;
      this._previousStyle = null;
      this._previousStyleCopy = null;
      this._nativeNode = null;
      this._nativeParent = null;
      this._rootNodeID = null;
      this._domID = null;
      this._nativeContainerInfo = null;
      this._wrapperState = null;
      this._topLevelWrapper = null;
      this._flags = 0;
      if ("production" !== 'production') {
        this._ancestorInfo = null;
        this._contentDebugID = null;
      }
    }
    ReactDOMComponent.displayName = 'ReactDOMComponent';
    ReactDOMComponent.Mixin = {
      mountComponent: function(transaction, nativeParent, nativeContainerInfo, context) {
        this._rootNodeID = globalIdCounter++;
        this._domID = nativeContainerInfo._idCounter++;
        this._nativeParent = nativeParent;
        this._nativeContainerInfo = nativeContainerInfo;
        var props = this._currentElement.props;
        switch (this._tag) {
          case 'iframe':
          case 'object':
          case 'img':
          case 'form':
          case 'video':
          case 'audio':
            this._wrapperState = {listeners: null};
            transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
            break;
          case 'button':
            props = ReactDOMButton.getNativeProps(this, props, nativeParent);
            break;
          case 'input':
            ReactDOMInput.mountWrapper(this, props, nativeParent);
            props = ReactDOMInput.getNativeProps(this, props);
            transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
            break;
          case 'option':
            ReactDOMOption.mountWrapper(this, props, nativeParent);
            props = ReactDOMOption.getNativeProps(this, props);
            break;
          case 'select':
            ReactDOMSelect.mountWrapper(this, props, nativeParent);
            props = ReactDOMSelect.getNativeProps(this, props);
            transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
            break;
          case 'textarea':
            ReactDOMTextarea.mountWrapper(this, props, nativeParent);
            props = ReactDOMTextarea.getNativeProps(this, props);
            transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
            break;
        }
        assertValidProps(this, props);
        var namespaceURI;
        var parentTag;
        if (nativeParent != null) {
          namespaceURI = nativeParent._namespaceURI;
          parentTag = nativeParent._tag;
        } else if (nativeContainerInfo._tag) {
          namespaceURI = nativeContainerInfo._namespaceURI;
          parentTag = nativeContainerInfo._tag;
        }
        if (namespaceURI == null || namespaceURI === DOMNamespaces.svg && parentTag === 'foreignobject') {
          namespaceURI = DOMNamespaces.html;
        }
        if (namespaceURI === DOMNamespaces.html) {
          if (this._tag === 'svg') {
            namespaceURI = DOMNamespaces.svg;
          } else if (this._tag === 'math') {
            namespaceURI = DOMNamespaces.mathml;
          }
        }
        this._namespaceURI = namespaceURI;
        if ("production" !== 'production') {
          var parentInfo;
          if (nativeParent != null) {
            parentInfo = nativeParent._ancestorInfo;
          } else if (nativeContainerInfo._tag) {
            parentInfo = nativeContainerInfo._ancestorInfo;
          }
          if (parentInfo) {
            validateDOMNesting(this._tag, this, parentInfo);
          }
          this._ancestorInfo = validateDOMNesting.updatedAncestorInfo(parentInfo, this._tag, this);
        }
        var mountImage;
        if (transaction.useCreateElement) {
          var ownerDocument = nativeContainerInfo._ownerDocument;
          var el;
          if (namespaceURI === DOMNamespaces.html) {
            if (this._tag === 'script') {
              var div = ownerDocument.createElement('div');
              var type = this._currentElement.type;
              div.innerHTML = '<' + type + '></' + type + '>';
              el = div.removeChild(div.firstChild);
            } else {
              el = ownerDocument.createElement(this._currentElement.type, props.is || null);
            }
          } else {
            el = ownerDocument.createElementNS(namespaceURI, this._currentElement.type);
          }
          ReactDOMComponentTree.precacheNode(this, el);
          this._flags |= Flags.hasCachedChildNodes;
          if (!this._nativeParent) {
            DOMPropertyOperations.setAttributeForRoot(el);
          }
          this._updateDOMProperties(null, props, transaction);
          var lazyTree = DOMLazyTree(el);
          this._createInitialChildren(transaction, props, context, lazyTree);
          mountImage = lazyTree;
        } else {
          var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
          var tagContent = this._createContentMarkup(transaction, props, context);
          if (!tagContent && omittedCloseTags[this._tag]) {
            mountImage = tagOpen + '/>';
          } else {
            mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
          }
        }
        switch (this._tag) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            if (props.autoFocus) {
              transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
            }
            break;
          case 'option':
            transaction.getReactMountReady().enqueue(optionPostMount, this);
        }
        return mountImage;
      },
      _createOpenTagMarkupAndPutListeners: function(transaction, props) {
        var ret = '<' + this._currentElement.type;
        for (var propKey in props) {
          if (!props.hasOwnProperty(propKey)) {
            continue;
          }
          var propValue = props[propKey];
          if (propValue == null) {
            continue;
          }
          if (registrationNameModules.hasOwnProperty(propKey)) {
            if (propValue) {
              enqueuePutListener(this, propKey, propValue, transaction);
            }
          } else {
            if (propKey === STYLE) {
              if (propValue) {
                if ("production" !== 'production') {
                  this._previousStyle = propValue;
                }
                propValue = this._previousStyleCopy = _assign({}, props.style);
              }
              propValue = CSSPropertyOperations.createMarkupForStyles(propValue, this);
            }
            var markup = null;
            if (this._tag != null && isCustomComponent(this._tag, props)) {
              if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
                markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
              }
            } else {
              markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
            }
            if (markup) {
              ret += ' ' + markup;
            }
          }
        }
        if (transaction.renderToStaticMarkup) {
          return ret;
        }
        if (!this._nativeParent) {
          ret += ' ' + DOMPropertyOperations.createMarkupForRoot();
        }
        ret += ' ' + DOMPropertyOperations.createMarkupForID(this._domID);
        return ret;
      },
      _createContentMarkup: function(transaction, props, context) {
        var ret = '';
        var innerHTML = props.dangerouslySetInnerHTML;
        if (innerHTML != null) {
          if (innerHTML.__html != null) {
            ret = innerHTML.__html;
          }
        } else {
          var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
          var childrenToUse = contentToUse != null ? null : props.children;
          if (contentToUse != null) {
            ret = escapeTextContentForBrowser(contentToUse);
            if ("production" !== 'production') {
              setContentChildForInstrumentation.call(this, contentToUse);
            }
          } else if (childrenToUse != null) {
            var mountImages = this.mountChildren(childrenToUse, transaction, context);
            ret = mountImages.join('');
          }
        }
        if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
          return '\n' + ret;
        } else {
          return ret;
        }
      },
      _createInitialChildren: function(transaction, props, context, lazyTree) {
        var innerHTML = props.dangerouslySetInnerHTML;
        if (innerHTML != null) {
          if (innerHTML.__html != null) {
            DOMLazyTree.queueHTML(lazyTree, innerHTML.__html);
          }
        } else {
          var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
          var childrenToUse = contentToUse != null ? null : props.children;
          if (contentToUse != null) {
            if ("production" !== 'production') {
              setContentChildForInstrumentation.call(this, contentToUse);
            }
            DOMLazyTree.queueText(lazyTree, contentToUse);
          } else if (childrenToUse != null) {
            var mountImages = this.mountChildren(childrenToUse, transaction, context);
            for (var i = 0; i < mountImages.length; i++) {
              DOMLazyTree.queueChild(lazyTree, mountImages[i]);
            }
          }
        }
      },
      receiveComponent: function(nextElement, transaction, context) {
        var prevElement = this._currentElement;
        this._currentElement = nextElement;
        this.updateComponent(transaction, prevElement, nextElement, context);
      },
      updateComponent: function(transaction, prevElement, nextElement, context) {
        var lastProps = prevElement.props;
        var nextProps = this._currentElement.props;
        switch (this._tag) {
          case 'button':
            lastProps = ReactDOMButton.getNativeProps(this, lastProps);
            nextProps = ReactDOMButton.getNativeProps(this, nextProps);
            break;
          case 'input':
            ReactDOMInput.updateWrapper(this);
            lastProps = ReactDOMInput.getNativeProps(this, lastProps);
            nextProps = ReactDOMInput.getNativeProps(this, nextProps);
            break;
          case 'option':
            lastProps = ReactDOMOption.getNativeProps(this, lastProps);
            nextProps = ReactDOMOption.getNativeProps(this, nextProps);
            break;
          case 'select':
            lastProps = ReactDOMSelect.getNativeProps(this, lastProps);
            nextProps = ReactDOMSelect.getNativeProps(this, nextProps);
            break;
          case 'textarea':
            ReactDOMTextarea.updateWrapper(this);
            lastProps = ReactDOMTextarea.getNativeProps(this, lastProps);
            nextProps = ReactDOMTextarea.getNativeProps(this, nextProps);
            break;
        }
        assertValidProps(this, nextProps);
        this._updateDOMProperties(lastProps, nextProps, transaction);
        this._updateDOMChildren(lastProps, nextProps, transaction, context);
        if (this._tag === 'select') {
          transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
        }
      },
      _updateDOMProperties: function(lastProps, nextProps, transaction) {
        var propKey;
        var styleName;
        var styleUpdates;
        for (propKey in lastProps) {
          if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
            continue;
          }
          if (propKey === STYLE) {
            var lastStyle = this._previousStyleCopy;
            for (styleName in lastStyle) {
              if (lastStyle.hasOwnProperty(styleName)) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = '';
              }
            }
            this._previousStyleCopy = null;
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            if (lastProps[propKey]) {
              deleteListener(this, propKey);
            }
          } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
            DOMPropertyOperations.deleteValueForProperty(getNode(this), propKey);
          }
        }
        for (propKey in nextProps) {
          var nextProp = nextProps[propKey];
          var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps != null ? lastProps[propKey] : undefined;
          if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
            continue;
          }
          if (propKey === STYLE) {
            if (nextProp) {
              if ("production" !== 'production') {
                checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
                this._previousStyle = nextProp;
              }
              nextProp = this._previousStyleCopy = _assign({}, nextProp);
            } else {
              this._previousStyleCopy = null;
            }
            if (lastProp) {
              for (styleName in lastProp) {
                if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                  styleUpdates = styleUpdates || {};
                  styleUpdates[styleName] = '';
                }
              }
              for (styleName in nextProp) {
                if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                  styleUpdates = styleUpdates || {};
                  styleUpdates[styleName] = nextProp[styleName];
                }
              }
            } else {
              styleUpdates = nextProp;
            }
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            if (nextProp) {
              enqueuePutListener(this, propKey, nextProp, transaction);
            } else if (lastProp) {
              deleteListener(this, propKey);
            }
          } else if (isCustomComponent(this._tag, nextProps)) {
            if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
              DOMPropertyOperations.setValueForAttribute(getNode(this), propKey, nextProp);
            }
          } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
            var node = getNode(this);
            if (nextProp != null) {
              DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
            } else {
              DOMPropertyOperations.deleteValueForProperty(node, propKey);
            }
          }
        }
        if (styleUpdates) {
          CSSPropertyOperations.setValueForStyles(getNode(this), styleUpdates, this);
        }
      },
      _updateDOMChildren: function(lastProps, nextProps, transaction, context) {
        var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
        var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
        var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
        var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
        var lastChildren = lastContent != null ? null : lastProps.children;
        var nextChildren = nextContent != null ? null : nextProps.children;
        var lastHasContentOrHtml = lastContent != null || lastHtml != null;
        var nextHasContentOrHtml = nextContent != null || nextHtml != null;
        if (lastChildren != null && nextChildren == null) {
          this.updateChildren(null, transaction, context);
        } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
          this.updateTextContent('');
          if ("production" !== 'production') {
            ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
          }
        }
        if (nextContent != null) {
          if (lastContent !== nextContent) {
            this.updateTextContent('' + nextContent);
            if ("production" !== 'production') {
              this._contentDebugID = this._debugID + '#text';
              setContentChildForInstrumentation.call(this, nextContent);
            }
          }
        } else if (nextHtml != null) {
          if (lastHtml !== nextHtml) {
            this.updateMarkup('' + nextHtml);
          }
          if ("production" !== 'production') {
            ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
          }
        } else if (nextChildren != null) {
          if ("production" !== 'production') {
            if (this._contentDebugID) {
              ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);
              this._contentDebugID = null;
            }
          }
          this.updateChildren(nextChildren, transaction, context);
        }
      },
      getNativeNode: function() {
        return getNode(this);
      },
      unmountComponent: function(safely) {
        switch (this._tag) {
          case 'iframe':
          case 'object':
          case 'img':
          case 'form':
          case 'video':
          case 'audio':
            var listeners = this._wrapperState.listeners;
            if (listeners) {
              for (var i = 0; i < listeners.length; i++) {
                listeners[i].remove();
              }
            }
            break;
          case 'html':
          case 'head':
          case 'body':
            !false ? "production" !== 'production' ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, ' + '<head>, and <body>) reliably and efficiently. To fix this, have a ' + 'single top-level component that never unmounts render these ' + 'elements.', this._tag) : invariant(false) : void 0;
            break;
        }
        this.unmountChildren(safely);
        ReactDOMComponentTree.uncacheNode(this);
        EventPluginHub.deleteAllListeners(this);
        ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
        this._rootNodeID = null;
        this._domID = null;
        this._wrapperState = null;
        if ("production" !== 'production') {
          if (this._contentDebugID) {
            ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);
            this._contentDebugID = null;
          }
        }
      },
      getPublicInstance: function() {
        return getNode(this);
      }
    };
    _assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
    module.exports = ReactDOMComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMEmptyComponent.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/DOMLazyTree.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('npm:object-assign@4.1.0.js');
  var DOMLazyTree = $__require('npm:react@15.1.0/lib/DOMLazyTree.js');
  var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
  var ReactDOMEmptyComponent = function(instantiate) {
    this._currentElement = null;
    this._nativeNode = null;
    this._nativeParent = null;
    this._nativeContainerInfo = null;
    this._domID = null;
  };
  _assign(ReactDOMEmptyComponent.prototype, {
    mountComponent: function(transaction, nativeParent, nativeContainerInfo, context) {
      var domID = nativeContainerInfo._idCounter++;
      this._domID = domID;
      this._nativeParent = nativeParent;
      this._nativeContainerInfo = nativeContainerInfo;
      var nodeValue = ' react-empty: ' + this._domID + ' ';
      if (transaction.useCreateElement) {
        var ownerDocument = nativeContainerInfo._ownerDocument;
        var node = ownerDocument.createComment(nodeValue);
        ReactDOMComponentTree.precacheNode(this, node);
        return DOMLazyTree(node);
      } else {
        if (transaction.renderToStaticMarkup) {
          return '';
        }
        return '<!--' + nodeValue + '-->';
      }
    },
    receiveComponent: function() {},
    getNativeNode: function() {
      return ReactDOMComponentTree.getNodeFromInstance(this);
    },
    unmountComponent: function() {
      ReactDOMComponentTree.uncacheNode(this);
    }
  });
  module.exports = ReactDOMEmptyComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMTreeTraversal.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    function getLowestCommonAncestor(instA, instB) {
      !('_nativeNode' in instA) ? "production" !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : invariant(false) : void 0;
      !('_nativeNode' in instB) ? "production" !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : invariant(false) : void 0;
      var depthA = 0;
      for (var tempA = instA; tempA; tempA = tempA._nativeParent) {
        depthA++;
      }
      var depthB = 0;
      for (var tempB = instB; tempB; tempB = tempB._nativeParent) {
        depthB++;
      }
      while (depthA - depthB > 0) {
        instA = instA._nativeParent;
        depthA--;
      }
      while (depthB - depthA > 0) {
        instB = instB._nativeParent;
        depthB--;
      }
      var depth = depthA;
      while (depth--) {
        if (instA === instB) {
          return instA;
        }
        instA = instA._nativeParent;
        instB = instB._nativeParent;
      }
      return null;
    }
    function isAncestor(instA, instB) {
      !('_nativeNode' in instA) ? "production" !== 'production' ? invariant(false, 'isAncestor: Invalid argument.') : invariant(false) : void 0;
      !('_nativeNode' in instB) ? "production" !== 'production' ? invariant(false, 'isAncestor: Invalid argument.') : invariant(false) : void 0;
      while (instB) {
        if (instB === instA) {
          return true;
        }
        instB = instB._nativeParent;
      }
      return false;
    }
    function getParentInstance(inst) {
      !('_nativeNode' in inst) ? "production" !== 'production' ? invariant(false, 'getParentInstance: Invalid argument.') : invariant(false) : void 0;
      return inst._nativeParent;
    }
    function traverseTwoPhase(inst, fn, arg) {
      var path = [];
      while (inst) {
        path.push(inst);
        inst = inst._nativeParent;
      }
      var i;
      for (i = path.length; i-- > 0; ) {
        fn(path[i], false, arg);
      }
      for (i = 0; i < path.length; i++) {
        fn(path[i], true, arg);
      }
    }
    function traverseEnterLeave(from, to, fn, argFrom, argTo) {
      var common = from && to ? getLowestCommonAncestor(from, to) : null;
      var pathFrom = [];
      while (from && from !== common) {
        pathFrom.push(from);
        from = from._nativeParent;
      }
      var pathTo = [];
      while (to && to !== common) {
        pathTo.push(to);
        to = to._nativeParent;
      }
      var i;
      for (i = 0; i < pathFrom.length; i++) {
        fn(pathFrom[i], true, argFrom);
      }
      for (i = pathTo.length; i-- > 0; ) {
        fn(pathTo[i], false, argTo);
      }
    }
    module.exports = {
      isAncestor: isAncestor,
      getLowestCommonAncestor: getLowestCommonAncestor,
      getParentInstance: getParentInstance,
      traverseTwoPhase: traverseTwoPhase,
      traverseEnterLeave: traverseEnterLeave
    };
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/createArrayFromMixed.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    function toArray(obj) {
      var length = obj.length;
      !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? "production" !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : void 0;
      !(typeof length === 'number') ? "production" !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : void 0;
      !(length === 0 || length - 1 in obj) ? "production" !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : void 0;
      !(typeof obj.callee !== 'function') ? "production" !== 'production' ? invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : invariant(false) : void 0;
      if (obj.hasOwnProperty) {
        try {
          return Array.prototype.slice.call(obj);
        } catch (e) {}
      }
      var ret = Array(length);
      for (var ii = 0; ii < length; ii++) {
        ret[ii] = obj[ii];
      }
      return ret;
    }
    function hasArrayNature(obj) {
      return (!!obj && (typeof obj == 'object' || typeof obj == 'function') && 'length' in obj && !('setInterval' in obj) && typeof obj.nodeType != 'number' && (Array.isArray(obj) || 'callee' in obj || 'item' in obj));
    }
    function createArrayFromMixed(obj) {
      if (!hasArrayNature(obj)) {
        return [obj];
      } else if (Array.isArray(obj)) {
        return obj.slice();
      } else {
        return toArray(obj);
      }
    }
    module.exports = createArrayFromMixed;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/createNodesFromMarkup.js", ["npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:fbjs@0.8.3/lib/createArrayFromMixed.js", "npm:fbjs@0.8.3/lib/getMarkupWrap.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
    var createArrayFromMixed = $__require('npm:fbjs@0.8.3/lib/createArrayFromMixed.js');
    var getMarkupWrap = $__require('npm:fbjs@0.8.3/lib/getMarkupWrap.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
    var nodeNamePattern = /^\s*<(\w+)/;
    function getNodeName(markup) {
      var nodeNameMatch = markup.match(nodeNamePattern);
      return nodeNameMatch && nodeNameMatch[1].toLowerCase();
    }
    function createNodesFromMarkup(markup, handleScript) {
      var node = dummyNode;
      !!!dummyNode ? "production" !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : void 0;
      var nodeName = getNodeName(markup);
      var wrap = nodeName && getMarkupWrap(nodeName);
      if (wrap) {
        node.innerHTML = wrap[1] + markup + wrap[2];
        var wrapDepth = wrap[0];
        while (wrapDepth--) {
          node = node.lastChild;
        }
      } else {
        node.innerHTML = markup;
      }
      var scripts = node.getElementsByTagName('script');
      if (scripts.length) {
        !handleScript ? "production" !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : void 0;
        createArrayFromMixed(scripts).forEach(handleScript);
      }
      var nodes = Array.from(node.childNodes);
      while (node.lastChild) {
        node.removeChild(node.lastChild);
      }
      return nodes;
    }
    module.exports = createNodesFromMarkup;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/getMarkupWrap.js", ["npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
    var shouldWrap = {};
    var selectWrap = [1, '<select multiple="true">', '</select>'];
    var tableWrap = [1, '<table>', '</table>'];
    var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
    var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];
    var markupWrap = {
      '*': [1, '?<div>', '</div>'],
      'area': [1, '<map>', '</map>'],
      'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      'legend': [1, '<fieldset>', '</fieldset>'],
      'param': [1, '<object>', '</object>'],
      'tr': [2, '<table><tbody>', '</tbody></table>'],
      'optgroup': selectWrap,
      'option': selectWrap,
      'caption': tableWrap,
      'colgroup': tableWrap,
      'tbody': tableWrap,
      'tfoot': tableWrap,
      'thead': tableWrap,
      'td': trWrap,
      'th': trWrap
    };
    var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
    svgElements.forEach(function(nodeName) {
      markupWrap[nodeName] = svgWrap;
      shouldWrap[nodeName] = true;
    });
    function getMarkupWrap(nodeName) {
      !!!dummyNode ? "production" !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : void 0;
      if (!markupWrap.hasOwnProperty(nodeName)) {
        nodeName = '*';
      }
      if (!shouldWrap.hasOwnProperty(nodeName)) {
        if (nodeName === '*') {
          dummyNode.innerHTML = '<link />';
        } else {
          dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
        }
        shouldWrap[nodeName] = !dummyNode.firstChild;
      }
      return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
    }
    module.exports = getMarkupWrap;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/Danger.js", ["npm:react@15.1.0/lib/DOMLazyTree.js", "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:fbjs@0.8.3/lib/createNodesFromMarkup.js", "npm:fbjs@0.8.3/lib/emptyFunction.js", "npm:fbjs@0.8.3/lib/getMarkupWrap.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var DOMLazyTree = $__require('npm:react@15.1.0/lib/DOMLazyTree.js');
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
    var createNodesFromMarkup = $__require('npm:fbjs@0.8.3/lib/createNodesFromMarkup.js');
    var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
    var getMarkupWrap = $__require('npm:fbjs@0.8.3/lib/getMarkupWrap.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
    var RESULT_INDEX_ATTR = 'data-danger-index';
    function getNodeName(markup) {
      return markup.substring(1, markup.indexOf(' '));
    }
    var Danger = {
      dangerouslyRenderMarkup: function(markupList) {
        !ExecutionEnvironment.canUseDOM ? "production" !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString for server rendering.') : invariant(false) : void 0;
        var nodeName;
        var markupByNodeName = {};
        for (var i = 0; i < markupList.length; i++) {
          !markupList[i] ? "production" !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(false) : void 0;
          nodeName = getNodeName(markupList[i]);
          nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
          markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
          markupByNodeName[nodeName][i] = markupList[i];
        }
        var resultList = [];
        var resultListAssignmentCount = 0;
        for (nodeName in markupByNodeName) {
          if (!markupByNodeName.hasOwnProperty(nodeName)) {
            continue;
          }
          var markupListByNodeName = markupByNodeName[nodeName];
          var resultIndex;
          for (resultIndex in markupListByNodeName) {
            if (markupListByNodeName.hasOwnProperty(resultIndex)) {
              var markup = markupListByNodeName[resultIndex];
              markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP, '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
            }
          }
          var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction);
          for (var j = 0; j < renderNodes.length; ++j) {
            var renderNode = renderNodes[j];
            if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {
              resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
              renderNode.removeAttribute(RESULT_INDEX_ATTR);
              !!resultList.hasOwnProperty(resultIndex) ? "production" !== 'production' ? invariant(false, 'Danger: Assigning to an already-occupied result index.') : invariant(false) : void 0;
              resultList[resultIndex] = renderNode;
              resultListAssignmentCount += 1;
            } else if ("production" !== 'production') {
              console.error('Danger: Discarding unexpected node:', renderNode);
            }
          }
        }
        !(resultListAssignmentCount === resultList.length) ? "production" !== 'production' ? invariant(false, 'Danger: Did not assign to every index of resultList.') : invariant(false) : void 0;
        !(resultList.length === markupList.length) ? "production" !== 'production' ? invariant(false, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(false) : void 0;
        return resultList;
      },
      dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
        !ExecutionEnvironment.canUseDOM ? "production" !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString() for server rendering.') : invariant(false) : void 0;
        !markup ? "production" !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(false) : void 0;
        !(oldChild.nodeName !== 'HTML') ? "production" !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See ReactDOMServer.renderToString().') : invariant(false) : void 0;
        if (typeof markup === 'string') {
          var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
          oldChild.parentNode.replaceChild(newChild, oldChild);
        } else {
          DOMLazyTree.replaceChildWithTree(oldChild, markup);
        }
      }
    };
    module.exports = Danger;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactMultiChildUpdateTypes.js", ["npm:fbjs@0.8.3/lib/keyMirror.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var keyMirror = $__require('npm:fbjs@0.8.3/lib/keyMirror.js');
  var ReactMultiChildUpdateTypes = keyMirror({
    INSERT_MARKUP: null,
    MOVE_EXISTING: null,
    REMOVE_NODE: null,
    SET_MARKUP: null,
    TEXT_CONTENT: null
  });
  module.exports = ReactMultiChildUpdateTypes;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/DOMChildrenOperations.js", ["npm:react@15.1.0/lib/DOMLazyTree.js", "npm:react@15.1.0/lib/Danger.js", "npm:react@15.1.0/lib/ReactMultiChildUpdateTypes.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:react@15.1.0/lib/createMicrosoftUnsafeLocalFunction.js", "npm:react@15.1.0/lib/setInnerHTML.js", "npm:react@15.1.0/lib/setTextContent.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var DOMLazyTree = $__require('npm:react@15.1.0/lib/DOMLazyTree.js');
    var Danger = $__require('npm:react@15.1.0/lib/Danger.js');
    var ReactMultiChildUpdateTypes = $__require('npm:react@15.1.0/lib/ReactMultiChildUpdateTypes.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var createMicrosoftUnsafeLocalFunction = $__require('npm:react@15.1.0/lib/createMicrosoftUnsafeLocalFunction.js');
    var setInnerHTML = $__require('npm:react@15.1.0/lib/setInnerHTML.js');
    var setTextContent = $__require('npm:react@15.1.0/lib/setTextContent.js');
    function getNodeAfter(parentNode, node) {
      if (Array.isArray(node)) {
        node = node[1];
      }
      return node ? node.nextSibling : parentNode.firstChild;
    }
    var insertChildAt = createMicrosoftUnsafeLocalFunction(function(parentNode, childNode, referenceNode) {
      parentNode.insertBefore(childNode, referenceNode);
    });
    function insertLazyTreeChildAt(parentNode, childTree, referenceNode) {
      DOMLazyTree.insertTreeBefore(parentNode, childTree, referenceNode);
    }
    function moveChild(parentNode, childNode, referenceNode) {
      if (Array.isArray(childNode)) {
        moveDelimitedText(parentNode, childNode[0], childNode[1], referenceNode);
      } else {
        insertChildAt(parentNode, childNode, referenceNode);
      }
    }
    function removeChild(parentNode, childNode) {
      if (Array.isArray(childNode)) {
        var closingComment = childNode[1];
        childNode = childNode[0];
        removeDelimitedText(parentNode, childNode, closingComment);
        parentNode.removeChild(closingComment);
      }
      parentNode.removeChild(childNode);
    }
    function moveDelimitedText(parentNode, openingComment, closingComment, referenceNode) {
      var node = openingComment;
      while (true) {
        var nextNode = node.nextSibling;
        insertChildAt(parentNode, node, referenceNode);
        if (node === closingComment) {
          break;
        }
        node = nextNode;
      }
    }
    function removeDelimitedText(parentNode, startNode, closingComment) {
      while (true) {
        var node = startNode.nextSibling;
        if (node === closingComment) {
          break;
        } else {
          parentNode.removeChild(node);
        }
      }
    }
    function replaceDelimitedText(openingComment, closingComment, stringText) {
      var parentNode = openingComment.parentNode;
      var nodeAfterComment = openingComment.nextSibling;
      if (nodeAfterComment === closingComment) {
        if (stringText) {
          insertChildAt(parentNode, document.createTextNode(stringText), nodeAfterComment);
        }
      } else {
        if (stringText) {
          setTextContent(nodeAfterComment, stringText);
          removeDelimitedText(parentNode, nodeAfterComment, closingComment);
        } else {
          removeDelimitedText(parentNode, openingComment, closingComment);
        }
      }
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onNativeOperation(ReactDOMComponentTree.getInstanceFromNode(openingComment)._debugID, 'replace text', stringText);
      }
    }
    var dangerouslyReplaceNodeWithMarkup = Danger.dangerouslyReplaceNodeWithMarkup;
    if ("production" !== 'production') {
      dangerouslyReplaceNodeWithMarkup = function(oldChild, markup, prevInstance) {
        Danger.dangerouslyReplaceNodeWithMarkup(oldChild, markup);
        if (prevInstance._debugID !== 0) {
          ReactInstrumentation.debugTool.onNativeOperation(prevInstance._debugID, 'replace with', markup.toString());
        } else {
          var nextInstance = ReactDOMComponentTree.getInstanceFromNode(markup.node);
          if (nextInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onNativeOperation(nextInstance._debugID, 'mount', markup.toString());
          }
        }
      };
    }
    var DOMChildrenOperations = {
      dangerouslyReplaceNodeWithMarkup: dangerouslyReplaceNodeWithMarkup,
      replaceDelimitedText: replaceDelimitedText,
      processUpdates: function(parentNode, updates) {
        if ("production" !== 'production') {
          var parentNodeDebugID = ReactDOMComponentTree.getInstanceFromNode(parentNode)._debugID;
        }
        for (var k = 0; k < updates.length; k++) {
          var update = updates[k];
          switch (update.type) {
            case ReactMultiChildUpdateTypes.INSERT_MARKUP:
              insertLazyTreeChildAt(parentNode, update.content, getNodeAfter(parentNode, update.afterNode));
              if ("production" !== 'production') {
                ReactInstrumentation.debugTool.onNativeOperation(parentNodeDebugID, 'insert child', {
                  toIndex: update.toIndex,
                  content: update.content.toString()
                });
              }
              break;
            case ReactMultiChildUpdateTypes.MOVE_EXISTING:
              moveChild(parentNode, update.fromNode, getNodeAfter(parentNode, update.afterNode));
              if ("production" !== 'production') {
                ReactInstrumentation.debugTool.onNativeOperation(parentNodeDebugID, 'move child', {
                  fromIndex: update.fromIndex,
                  toIndex: update.toIndex
                });
              }
              break;
            case ReactMultiChildUpdateTypes.SET_MARKUP:
              setInnerHTML(parentNode, update.content);
              if ("production" !== 'production') {
                ReactInstrumentation.debugTool.onNativeOperation(parentNodeDebugID, 'replace children', update.content.toString());
              }
              break;
            case ReactMultiChildUpdateTypes.TEXT_CONTENT:
              setTextContent(parentNode, update.content);
              if ("production" !== 'production') {
                ReactInstrumentation.debugTool.onNativeOperation(parentNodeDebugID, 'replace text', update.content.toString());
              }
              break;
            case ReactMultiChildUpdateTypes.REMOVE_NODE:
              removeChild(parentNode, update.fromNode);
              if ("production" !== 'production') {
                ReactInstrumentation.debugTool.onNativeOperation(parentNodeDebugID, 'remove child', {fromIndex: update.fromIndex});
              }
              break;
          }
        }
      }
    };
    module.exports = DOMChildrenOperations;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMTextComponent.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/DOMChildrenOperations.js", "npm:react@15.1.0/lib/DOMLazyTree.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:react@15.1.0/lib/escapeTextContentForBrowser.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:react@15.1.0/lib/validateDOMNesting.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var DOMChildrenOperations = $__require('npm:react@15.1.0/lib/DOMChildrenOperations.js');
    var DOMLazyTree = $__require('npm:react@15.1.0/lib/DOMLazyTree.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var escapeTextContentForBrowser = $__require('npm:react@15.1.0/lib/escapeTextContentForBrowser.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var validateDOMNesting = $__require('npm:react@15.1.0/lib/validateDOMNesting.js');
    var ReactDOMTextComponent = function(text) {
      this._currentElement = text;
      this._stringText = '' + text;
      this._nativeNode = null;
      this._nativeParent = null;
      this._domID = null;
      this._mountIndex = 0;
      this._closingComment = null;
      this._commentNodes = null;
    };
    _assign(ReactDOMTextComponent.prototype, {
      mountComponent: function(transaction, nativeParent, nativeContainerInfo, context) {
        if ("production" !== 'production') {
          ReactInstrumentation.debugTool.onSetText(this._debugID, this._stringText);
          var parentInfo;
          if (nativeParent != null) {
            parentInfo = nativeParent._ancestorInfo;
          } else if (nativeContainerInfo != null) {
            parentInfo = nativeContainerInfo._ancestorInfo;
          }
          if (parentInfo) {
            validateDOMNesting('#text', this, parentInfo);
          }
        }
        var domID = nativeContainerInfo._idCounter++;
        var openingValue = ' react-text: ' + domID + ' ';
        var closingValue = ' /react-text ';
        this._domID = domID;
        this._nativeParent = nativeParent;
        if (transaction.useCreateElement) {
          var ownerDocument = nativeContainerInfo._ownerDocument;
          var openingComment = ownerDocument.createComment(openingValue);
          var closingComment = ownerDocument.createComment(closingValue);
          var lazyTree = DOMLazyTree(ownerDocument.createDocumentFragment());
          DOMLazyTree.queueChild(lazyTree, DOMLazyTree(openingComment));
          if (this._stringText) {
            DOMLazyTree.queueChild(lazyTree, DOMLazyTree(ownerDocument.createTextNode(this._stringText)));
          }
          DOMLazyTree.queueChild(lazyTree, DOMLazyTree(closingComment));
          ReactDOMComponentTree.precacheNode(this, openingComment);
          this._closingComment = closingComment;
          return lazyTree;
        } else {
          var escapedText = escapeTextContentForBrowser(this._stringText);
          if (transaction.renderToStaticMarkup) {
            return escapedText;
          }
          return '<!--' + openingValue + '-->' + escapedText + '<!--' + closingValue + '-->';
        }
      },
      receiveComponent: function(nextText, transaction) {
        if (nextText !== this._currentElement) {
          this._currentElement = nextText;
          var nextStringText = '' + nextText;
          if (nextStringText !== this._stringText) {
            this._stringText = nextStringText;
            var commentNodes = this.getNativeNode();
            DOMChildrenOperations.replaceDelimitedText(commentNodes[0], commentNodes[1], nextStringText);
            if ("production" !== 'production') {
              ReactInstrumentation.debugTool.onSetText(this._debugID, nextStringText);
            }
          }
        }
      },
      getNativeNode: function() {
        var nativeNode = this._commentNodes;
        if (nativeNode) {
          return nativeNode;
        }
        if (!this._closingComment) {
          var openingComment = ReactDOMComponentTree.getNodeFromInstance(this);
          var node = openingComment.nextSibling;
          while (true) {
            !(node != null) ? "production" !== 'production' ? invariant(false, 'Missing closing comment for text component %s', this._domID) : invariant(false) : void 0;
            if (node.nodeType === 8 && node.nodeValue === ' /react-text ') {
              this._closingComment = node;
              break;
            }
            node = node.nextSibling;
          }
        }
        nativeNode = [this._nativeNode, this._closingComment];
        this._commentNodes = nativeNode;
        return nativeNode;
      },
      unmountComponent: function() {
        this._closingComment = null;
        this._commentNodes = null;
        ReactDOMComponentTree.uncacheNode(this);
      }
    });
    module.exports = ReactDOMTextComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDefaultBatchingStrategy.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/ReactUpdates.js", "npm:react@15.1.0/lib/Transaction.js", "npm:fbjs@0.8.3/lib/emptyFunction.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('npm:object-assign@4.1.0.js');
  var ReactUpdates = $__require('npm:react@15.1.0/lib/ReactUpdates.js');
  var Transaction = $__require('npm:react@15.1.0/lib/Transaction.js');
  var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
  var RESET_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: function() {
      ReactDefaultBatchingStrategy.isBatchingUpdates = false;
    }
  };
  var FLUSH_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
  };
  var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
  function ReactDefaultBatchingStrategyTransaction() {
    this.reinitializeTransaction();
  }
  _assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    }});
  var transaction = new ReactDefaultBatchingStrategyTransaction();
  var ReactDefaultBatchingStrategy = {
    isBatchingUpdates: false,
    batchedUpdates: function(callback, a, b, c, d, e) {
      var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
      ReactDefaultBatchingStrategy.isBatchingUpdates = true;
      if (alreadyBatchingUpdates) {
        callback(a, b, c, d, e);
      } else {
        transaction.perform(callback, null, a, b, c, d, e);
      }
    }
  };
  module.exports = ReactDefaultBatchingStrategy;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/getUnboundedScrollPosition.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function getUnboundedScrollPosition(scrollable) {
    if (scrollable === window) {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
    return {
      x: scrollable.scrollLeft,
      y: scrollable.scrollTop
    };
  }
  module.exports = getUnboundedScrollPosition;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactEventListener.js", ["npm:object-assign@4.1.0.js", "npm:fbjs@0.8.3/lib/EventListener.js", "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:react@15.1.0/lib/PooledClass.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactUpdates.js", "npm:react@15.1.0/lib/getEventTarget.js", "npm:fbjs@0.8.3/lib/getUnboundedScrollPosition.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var EventListener = $__require('npm:fbjs@0.8.3/lib/EventListener.js');
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
    var PooledClass = $__require('npm:react@15.1.0/lib/PooledClass.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactUpdates = $__require('npm:react@15.1.0/lib/ReactUpdates.js');
    var getEventTarget = $__require('npm:react@15.1.0/lib/getEventTarget.js');
    var getUnboundedScrollPosition = $__require('npm:fbjs@0.8.3/lib/getUnboundedScrollPosition.js');
    function findParent(inst) {
      while (inst._nativeParent) {
        inst = inst._nativeParent;
      }
      var rootNode = ReactDOMComponentTree.getNodeFromInstance(inst);
      var container = rootNode.parentNode;
      return ReactDOMComponentTree.getClosestInstanceFromNode(container);
    }
    function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
      this.topLevelType = topLevelType;
      this.nativeEvent = nativeEvent;
      this.ancestors = [];
    }
    _assign(TopLevelCallbackBookKeeping.prototype, {destructor: function() {
        this.topLevelType = null;
        this.nativeEvent = null;
        this.ancestors.length = 0;
      }});
    PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);
    function handleTopLevelImpl(bookKeeping) {
      var nativeEventTarget = getEventTarget(bookKeeping.nativeEvent);
      var targetInst = ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);
      var ancestor = targetInst;
      do {
        bookKeeping.ancestors.push(ancestor);
        ancestor = ancestor && findParent(ancestor);
      } while (ancestor);
      for (var i = 0; i < bookKeeping.ancestors.length; i++) {
        targetInst = bookKeeping.ancestors[i];
        ReactEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
      }
    }
    function scrollValueMonitor(cb) {
      var scrollPosition = getUnboundedScrollPosition(window);
      cb(scrollPosition);
    }
    var ReactEventListener = {
      _enabled: true,
      _handleTopLevel: null,
      WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
      setHandleTopLevel: function(handleTopLevel) {
        ReactEventListener._handleTopLevel = handleTopLevel;
      },
      setEnabled: function(enabled) {
        ReactEventListener._enabled = !!enabled;
      },
      isEnabled: function() {
        return ReactEventListener._enabled;
      },
      trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
        var element = handle;
        if (!element) {
          return null;
        }
        return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
      },
      trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
        var element = handle;
        if (!element) {
          return null;
        }
        return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
      },
      monitorScrollValue: function(refresh) {
        var callback = scrollValueMonitor.bind(null, refresh);
        EventListener.listen(window, 'scroll', callback);
      },
      dispatchEvent: function(topLevelType, nativeEvent) {
        if (!ReactEventListener._enabled) {
          return;
        }
        var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
        try {
          ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
        } finally {
          TopLevelCallbackBookKeeping.release(bookKeeping);
        }
      }
    };
    module.exports = ReactEventListener;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactInjection.js", ["npm:react@15.1.0/lib/DOMProperty.js", "npm:react@15.1.0/lib/EventPluginHub.js", "npm:react@15.1.0/lib/EventPluginUtils.js", "npm:react@15.1.0/lib/ReactComponentEnvironment.js", "npm:react@15.1.0/lib/ReactClass.js", "npm:react@15.1.0/lib/ReactEmptyComponent.js", "npm:react@15.1.0/lib/ReactBrowserEventEmitter.js", "npm:react@15.1.0/lib/ReactNativeComponent.js", "npm:react@15.1.0/lib/ReactUpdates.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var DOMProperty = $__require('npm:react@15.1.0/lib/DOMProperty.js');
  var EventPluginHub = $__require('npm:react@15.1.0/lib/EventPluginHub.js');
  var EventPluginUtils = $__require('npm:react@15.1.0/lib/EventPluginUtils.js');
  var ReactComponentEnvironment = $__require('npm:react@15.1.0/lib/ReactComponentEnvironment.js');
  var ReactClass = $__require('npm:react@15.1.0/lib/ReactClass.js');
  var ReactEmptyComponent = $__require('npm:react@15.1.0/lib/ReactEmptyComponent.js');
  var ReactBrowserEventEmitter = $__require('npm:react@15.1.0/lib/ReactBrowserEventEmitter.js');
  var ReactNativeComponent = $__require('npm:react@15.1.0/lib/ReactNativeComponent.js');
  var ReactUpdates = $__require('npm:react@15.1.0/lib/ReactUpdates.js');
  var ReactInjection = {
    Component: ReactComponentEnvironment.injection,
    Class: ReactClass.injection,
    DOMProperty: DOMProperty.injection,
    EmptyComponent: ReactEmptyComponent.injection,
    EventPluginHub: EventPluginHub.injection,
    EventPluginUtils: EventPluginUtils.injection,
    EventEmitter: ReactBrowserEventEmitter.injection,
    NativeComponent: ReactNativeComponent.injection,
    Updates: ReactUpdates.injection
  };
  module.exports = ReactInjection;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactReconcileTransaction.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/CallbackQueue.js", "npm:react@15.1.0/lib/PooledClass.js", "npm:react@15.1.0/lib/ReactBrowserEventEmitter.js", "npm:react@15.1.0/lib/ReactInputSelection.js", "npm:react@15.1.0/lib/Transaction.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _assign = $__require('npm:object-assign@4.1.0.js');
  var CallbackQueue = $__require('npm:react@15.1.0/lib/CallbackQueue.js');
  var PooledClass = $__require('npm:react@15.1.0/lib/PooledClass.js');
  var ReactBrowserEventEmitter = $__require('npm:react@15.1.0/lib/ReactBrowserEventEmitter.js');
  var ReactInputSelection = $__require('npm:react@15.1.0/lib/ReactInputSelection.js');
  var Transaction = $__require('npm:react@15.1.0/lib/Transaction.js');
  var SELECTION_RESTORATION = {
    initialize: ReactInputSelection.getSelectionInformation,
    close: ReactInputSelection.restoreSelection
  };
  var EVENT_SUPPRESSION = {
    initialize: function() {
      var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
      ReactBrowserEventEmitter.setEnabled(false);
      return currentlyEnabled;
    },
    close: function(previouslyEnabled) {
      ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
    }
  };
  var ON_DOM_READY_QUEUEING = {
    initialize: function() {
      this.reactMountReady.reset();
    },
    close: function() {
      this.reactMountReady.notifyAll();
    }
  };
  var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];
  function ReactReconcileTransaction(useCreateElement) {
    this.reinitializeTransaction();
    this.renderToStaticMarkup = false;
    this.reactMountReady = CallbackQueue.getPooled(null);
    this.useCreateElement = useCreateElement;
  }
  var Mixin = {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    getReactMountReady: function() {
      return this.reactMountReady;
    },
    checkpoint: function() {
      return this.reactMountReady.checkpoint();
    },
    rollback: function(checkpoint) {
      this.reactMountReady.rollback(checkpoint);
    },
    destructor: function() {
      CallbackQueue.release(this.reactMountReady);
      this.reactMountReady = null;
    }
  };
  _assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);
  PooledClass.addPoolingTo(ReactReconcileTransaction);
  module.exports = ReactReconcileTransaction;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SVGDOMPropertyConfig.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var NS = {
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace'
  };
  var ATTRS = {
    accentHeight: 'accent-height',
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 'alignment-baseline',
    allowReorder: 'allowReorder',
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 'arabic-form',
    ascent: 0,
    attributeName: 'attributeName',
    attributeType: 'attributeType',
    autoReverse: 'autoReverse',
    azimuth: 0,
    baseFrequency: 'baseFrequency',
    baseProfile: 'baseProfile',
    baselineShift: 'baseline-shift',
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 'calcMode',
    capHeight: 'cap-height',
    clip: 0,
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    clipPathUnits: 'clipPathUnits',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    contentScriptType: 'contentScriptType',
    contentStyleType: 'contentStyleType',
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 'diffuseConstant',
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 'dominant-baseline',
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 'edgeMode',
    elevation: 0,
    enableBackground: 'enable-background',
    end: 0,
    exponent: 0,
    externalResourcesRequired: 'externalResourcesRequired',
    fill: 0,
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    filter: 0,
    filterRes: 'filterRes',
    filterUnits: 'filterUnits',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    focusable: 0,
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    glyphRef: 'glyphRef',
    gradientTransform: 'gradientTransform',
    gradientUnits: 'gradientUnits',
    hanging: 0,
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    ideographic: 0,
    imageRendering: 'image-rendering',
    'in': 0,
    in2: 0,
    intercept: 0,
    k: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    kernelMatrix: 'kernelMatrix',
    kernelUnitLength: 'kernelUnitLength',
    kerning: 0,
    keyPoints: 'keyPoints',
    keySplines: 'keySplines',
    keyTimes: 'keyTimes',
    lengthAdjust: 'lengthAdjust',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    limitingConeAngle: 'limitingConeAngle',
    local: 0,
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    markerHeight: 'markerHeight',
    markerUnits: 'markerUnits',
    markerWidth: 'markerWidth',
    mask: 0,
    maskContentUnits: 'maskContentUnits',
    maskUnits: 'maskUnits',
    mathematical: 0,
    mode: 0,
    numOctaves: 'numOctaves',
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pathLength: 'pathLength',
    patternContentUnits: 'patternContentUnits',
    patternTransform: 'patternTransform',
    patternUnits: 'patternUnits',
    pointerEvents: 'pointer-events',
    points: 0,
    pointsAtX: 'pointsAtX',
    pointsAtY: 'pointsAtY',
    pointsAtZ: 'pointsAtZ',
    preserveAlpha: 'preserveAlpha',
    preserveAspectRatio: 'preserveAspectRatio',
    primitiveUnits: 'primitiveUnits',
    r: 0,
    radius: 0,
    refX: 'refX',
    refY: 'refY',
    renderingIntent: 'rendering-intent',
    repeatCount: 'repeatCount',
    repeatDur: 'repeatDur',
    requiredExtensions: 'requiredExtensions',
    requiredFeatures: 'requiredFeatures',
    restart: 0,
    result: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    seed: 0,
    shapeRendering: 'shape-rendering',
    slope: 0,
    spacing: 0,
    specularConstant: 'specularConstant',
    specularExponent: 'specularExponent',
    speed: 0,
    spreadMethod: 'spreadMethod',
    startOffset: 'startOffset',
    stdDeviation: 'stdDeviation',
    stemh: 0,
    stemv: 0,
    stitchTiles: 'stitchTiles',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    string: 0,
    stroke: 0,
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    surfaceScale: 'surfaceScale',
    systemLanguage: 'systemLanguage',
    tableValues: 'tableValues',
    targetX: 'targetX',
    targetY: 'targetY',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    textLength: 'textLength',
    to: 0,
    transform: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicode: 0,
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    values: 0,
    vectorEffect: 'vector-effect',
    version: 0,
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    viewBox: 'viewBox',
    viewTarget: 'viewTarget',
    visibility: 0,
    widths: 0,
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    x: 0,
    xHeight: 'x-height',
    x1: 0,
    x2: 0,
    xChannelSelector: 'xChannelSelector',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlBase: 'xml:base',
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space',
    y: 0,
    y1: 0,
    y2: 0,
    yChannelSelector: 'yChannelSelector',
    z: 0,
    zoomAndPan: 'zoomAndPan'
  };
  var SVGDOMPropertyConfig = {
    Properties: {},
    DOMAttributeNamespaces: {
      xlinkActuate: NS.xlink,
      xlinkArcrole: NS.xlink,
      xlinkHref: NS.xlink,
      xlinkRole: NS.xlink,
      xlinkShow: NS.xlink,
      xlinkTitle: NS.xlink,
      xlinkType: NS.xlink,
      xmlBase: NS.xml,
      xmlLang: NS.xml,
      xmlSpace: NS.xml
    },
    DOMAttributeNames: {}
  };
  Object.keys(ATTRS).forEach(function(key) {
    SVGDOMPropertyConfig.Properties[key] = 0;
    if (ATTRS[key]) {
      SVGDOMPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
    }
  });
  module.exports = SVGDOMPropertyConfig;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/getNodeForCharacterOffset.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function getLeafNode(node) {
    while (node && node.firstChild) {
      node = node.firstChild;
    }
    return node;
  }
  function getSiblingNode(node) {
    while (node) {
      if (node.nextSibling) {
        return node.nextSibling;
      }
      node = node.parentNode;
    }
  }
  function getNodeForCharacterOffset(root, offset) {
    var node = getLeafNode(root);
    var nodeStart = 0;
    var nodeEnd = 0;
    while (node) {
      if (node.nodeType === 3) {
        nodeEnd = nodeStart + node.textContent.length;
        if (nodeStart <= offset && nodeEnd >= offset) {
          return {
            node: node,
            offset: offset - nodeStart
          };
        }
        nodeStart = nodeEnd;
      }
      node = getLeafNode(getSiblingNode(node));
    }
  }
  module.exports = getNodeForCharacterOffset;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/getTextContentAccessor.js", ["npm:fbjs@0.8.3/lib/ExecutionEnvironment.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
  var contentKey = null;
  function getTextContentAccessor() {
    if (!contentKey && ExecutionEnvironment.canUseDOM) {
      contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
    }
    return contentKey;
  }
  module.exports = getTextContentAccessor;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMSelection.js", ["npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:react@15.1.0/lib/getNodeForCharacterOffset.js", "npm:react@15.1.0/lib/getTextContentAccessor.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
  var getNodeForCharacterOffset = $__require('npm:react@15.1.0/lib/getNodeForCharacterOffset.js');
  var getTextContentAccessor = $__require('npm:react@15.1.0/lib/getTextContentAccessor.js');
  function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
    return anchorNode === focusNode && anchorOffset === focusOffset;
  }
  function getIEOffsets(node) {
    var selection = document.selection;
    var selectedRange = selection.createRange();
    var selectedLength = selectedRange.text.length;
    var fromStart = selectedRange.duplicate();
    fromStart.moveToElementText(node);
    fromStart.setEndPoint('EndToStart', selectedRange);
    var startOffset = fromStart.text.length;
    var endOffset = startOffset + selectedLength;
    return {
      start: startOffset,
      end: endOffset
    };
  }
  function getModernOffsets(node) {
    var selection = window.getSelection && window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    var anchorNode = selection.anchorNode;
    var anchorOffset = selection.anchorOffset;
    var focusNode = selection.focusNode;
    var focusOffset = selection.focusOffset;
    var currentRange = selection.getRangeAt(0);
    try {
      currentRange.startContainer.nodeType;
      currentRange.endContainer.nodeType;
    } catch (e) {
      return null;
    }
    var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
    var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
    var tempRange = currentRange.cloneRange();
    tempRange.selectNodeContents(node);
    tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
    var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);
    var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
    var end = start + rangeLength;
    var detectionRange = document.createRange();
    detectionRange.setStart(anchorNode, anchorOffset);
    detectionRange.setEnd(focusNode, focusOffset);
    var isBackward = detectionRange.collapsed;
    return {
      start: isBackward ? end : start,
      end: isBackward ? start : end
    };
  }
  function setIEOffsets(node, offsets) {
    var range = document.selection.createRange().duplicate();
    var start,
        end;
    if (offsets.end === undefined) {
      start = offsets.start;
      end = start;
    } else if (offsets.start > offsets.end) {
      start = offsets.end;
      end = offsets.start;
    } else {
      start = offsets.start;
      end = offsets.end;
    }
    range.moveToElementText(node);
    range.moveStart('character', start);
    range.setEndPoint('EndToStart', range);
    range.moveEnd('character', end - start);
    range.select();
  }
  function setModernOffsets(node, offsets) {
    if (!window.getSelection) {
      return;
    }
    var selection = window.getSelection();
    var length = node[getTextContentAccessor()].length;
    var start = Math.min(offsets.start, length);
    var end = offsets.end === undefined ? start : Math.min(offsets.end, length);
    if (!selection.extend && start > end) {
      var temp = end;
      end = start;
      start = temp;
    }
    var startMarker = getNodeForCharacterOffset(node, start);
    var endMarker = getNodeForCharacterOffset(node, end);
    if (startMarker && endMarker) {
      var range = document.createRange();
      range.setStart(startMarker.node, startMarker.offset);
      selection.removeAllRanges();
      if (start > end) {
        selection.addRange(range);
        selection.extend(endMarker.node, endMarker.offset);
      } else {
        range.setEnd(endMarker.node, endMarker.offset);
        selection.addRange(range);
      }
    }
  }
  var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);
  var ReactDOMSelection = {
    getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
    setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
  };
  module.exports = ReactDOMSelection;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/isNode.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isNode(object) {
    return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
  }
  module.exports = isNode;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/isTextNode.js", ["npm:fbjs@0.8.3/lib/isNode.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isNode = $__require('npm:fbjs@0.8.3/lib/isNode.js');
  function isTextNode(object) {
    return isNode(object) && object.nodeType == 3;
  }
  module.exports = isTextNode;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/containsNode.js", ["npm:fbjs@0.8.3/lib/isTextNode.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isTextNode = $__require('npm:fbjs@0.8.3/lib/isTextNode.js');
  function containsNode(outerNode, innerNode) {
    if (!outerNode || !innerNode) {
      return false;
    } else if (outerNode === innerNode) {
      return true;
    } else if (isTextNode(outerNode)) {
      return false;
    } else if (isTextNode(innerNode)) {
      return containsNode(outerNode, innerNode.parentNode);
    } else if ('contains' in outerNode) {
      return outerNode.contains(innerNode);
    } else if (outerNode.compareDocumentPosition) {
      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
    } else {
      return false;
    }
  }
  module.exports = containsNode;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/focusNode.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function focusNode(node) {
    try {
      node.focus();
    } catch (e) {}
  }
  module.exports = focusNode;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactInputSelection.js", ["npm:react@15.1.0/lib/ReactDOMSelection.js", "npm:fbjs@0.8.3/lib/containsNode.js", "npm:fbjs@0.8.3/lib/focusNode.js", "npm:fbjs@0.8.3/lib/getActiveElement.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMSelection = $__require('npm:react@15.1.0/lib/ReactDOMSelection.js');
  var containsNode = $__require('npm:fbjs@0.8.3/lib/containsNode.js');
  var focusNode = $__require('npm:fbjs@0.8.3/lib/focusNode.js');
  var getActiveElement = $__require('npm:fbjs@0.8.3/lib/getActiveElement.js');
  function isInDocument(node) {
    return containsNode(document.documentElement, node);
  }
  var ReactInputSelection = {
    hasSelectionCapabilities: function(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
    },
    getSelectionInformation: function() {
      var focusedElem = getActiveElement();
      return {
        focusedElem: focusedElem,
        selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
      };
    },
    restoreSelection: function(priorSelectionInformation) {
      var curFocusedElem = getActiveElement();
      var priorFocusedElem = priorSelectionInformation.focusedElem;
      var priorSelectionRange = priorSelectionInformation.selectionRange;
      if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
        if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
          ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
        }
        focusNode(priorFocusedElem);
      }
    },
    getSelection: function(input) {
      var selection;
      if ('selectionStart' in input) {
        selection = {
          start: input.selectionStart,
          end: input.selectionEnd
        };
      } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
        var range = document.selection.createRange();
        if (range.parentElement() === input) {
          selection = {
            start: -range.moveStart('character', -input.value.length),
            end: -range.moveEnd('character', -input.value.length)
          };
        }
      } else {
        selection = ReactDOMSelection.getOffsets(input);
      }
      return selection || {
        start: 0,
        end: 0
      };
    },
    setSelection: function(input, offsets) {
      var start = offsets.start;
      var end = offsets.end;
      if (end === undefined) {
        end = start;
      }
      if ('selectionStart' in input) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        range.select();
      } else {
        ReactDOMSelection.setOffsets(input, offsets);
      }
    }
  };
  module.exports = ReactInputSelection;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/getActiveElement.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function getActiveElement() {
    if (typeof document === 'undefined') {
      return null;
    }
    try {
      return document.activeElement || document.body;
    } catch (e) {
      return document.body;
    }
  }
  module.exports = getActiveElement;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/isTextInputElement.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var supportedInputTypes = {
    'color': true,
    'date': true,
    'datetime': true,
    'datetime-local': true,
    'email': true,
    'month': true,
    'number': true,
    'password': true,
    'range': true,
    'search': true,
    'tel': true,
    'text': true,
    'time': true,
    'url': true,
    'week': true
  };
  function isTextInputElement(elem) {
    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');
  }
  module.exports = isTextInputElement;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/shallowEqual.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }
    return true;
  }
  module.exports = shallowEqual;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SelectEventPlugin.js", ["npm:react@15.1.0/lib/EventConstants.js", "npm:react@15.1.0/lib/EventPropagators.js", "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactInputSelection.js", "npm:react@15.1.0/lib/SyntheticEvent.js", "npm:fbjs@0.8.3/lib/getActiveElement.js", "npm:react@15.1.0/lib/isTextInputElement.js", "npm:fbjs@0.8.3/lib/keyOf.js", "npm:fbjs@0.8.3/lib/shallowEqual.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var EventConstants = $__require('npm:react@15.1.0/lib/EventConstants.js');
  var EventPropagators = $__require('npm:react@15.1.0/lib/EventPropagators.js');
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
  var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
  var ReactInputSelection = $__require('npm:react@15.1.0/lib/ReactInputSelection.js');
  var SyntheticEvent = $__require('npm:react@15.1.0/lib/SyntheticEvent.js');
  var getActiveElement = $__require('npm:fbjs@0.8.3/lib/getActiveElement.js');
  var isTextInputElement = $__require('npm:react@15.1.0/lib/isTextInputElement.js');
  var keyOf = $__require('npm:fbjs@0.8.3/lib/keyOf.js');
  var shallowEqual = $__require('npm:fbjs@0.8.3/lib/shallowEqual.js');
  var topLevelTypes = EventConstants.topLevelTypes;
  var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;
  var eventTypes = {select: {
      phasedRegistrationNames: {
        bubbled: keyOf({onSelect: null}),
        captured: keyOf({onSelectCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
    }};
  var activeElement = null;
  var activeElementInst = null;
  var lastSelection = null;
  var mouseDown = false;
  var hasListener = false;
  var ON_SELECT_KEY = keyOf({onSelect: null});
  function getSelection(node) {
    if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
      return {
        start: node.selectionStart,
        end: node.selectionEnd
      };
    } else if (window.getSelection) {
      var selection = window.getSelection();
      return {
        anchorNode: selection.anchorNode,
        anchorOffset: selection.anchorOffset,
        focusNode: selection.focusNode,
        focusOffset: selection.focusOffset
      };
    } else if (document.selection) {
      var range = document.selection.createRange();
      return {
        parentElement: range.parentElement(),
        text: range.text,
        top: range.boundingTop,
        left: range.boundingLeft
      };
    }
  }
  function constructSelectEvent(nativeEvent, nativeEventTarget) {
    if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
      return null;
    }
    var currentSelection = getSelection(activeElement);
    if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
      lastSelection = currentSelection;
      var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementInst, nativeEvent, nativeEventTarget);
      syntheticEvent.type = 'select';
      syntheticEvent.target = activeElement;
      EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
      return syntheticEvent;
    }
    return null;
  }
  var SelectEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      if (!hasListener) {
        return null;
      }
      var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;
      switch (topLevelType) {
        case topLevelTypes.topFocus:
          if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
            activeElement = targetNode;
            activeElementInst = targetInst;
            lastSelection = null;
          }
          break;
        case topLevelTypes.topBlur:
          activeElement = null;
          activeElementInst = null;
          lastSelection = null;
          break;
        case topLevelTypes.topMouseDown:
          mouseDown = true;
          break;
        case topLevelTypes.topContextMenu:
        case topLevelTypes.topMouseUp:
          mouseDown = false;
          return constructSelectEvent(nativeEvent, nativeEventTarget);
        case topLevelTypes.topSelectionChange:
          if (skipSelectionChangeEvent) {
            break;
          }
        case topLevelTypes.topKeyDown:
        case topLevelTypes.topKeyUp:
          return constructSelectEvent(nativeEvent, nativeEventTarget);
      }
      return null;
    },
    didPutListener: function(inst, registrationName, listener) {
      if (registrationName === ON_SELECT_KEY) {
        hasListener = true;
      }
    }
  };
  module.exports = SelectEventPlugin;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/EventListener.js", ["npm:fbjs@0.8.3/lib/emptyFunction.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
    var EventListener = {
      listen: function listen(target, eventType, callback) {
        if (target.addEventListener) {
          target.addEventListener(eventType, callback, false);
          return {remove: function remove() {
              target.removeEventListener(eventType, callback, false);
            }};
        } else if (target.attachEvent) {
          target.attachEvent('on' + eventType, callback);
          return {remove: function remove() {
              target.detachEvent('on' + eventType, callback);
            }};
        }
      },
      capture: function capture(target, eventType, callback) {
        if (target.addEventListener) {
          target.addEventListener(eventType, callback, true);
          return {remove: function remove() {
              target.removeEventListener(eventType, callback, true);
            }};
        } else {
          if ("production" !== 'production') {
            console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
          }
          return {remove: emptyFunction};
        }
      },
      registerDefault: function registerDefault() {}
    };
    module.exports = EventListener;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/EventPropagators.js", ["npm:react@15.1.0/lib/EventConstants.js", "npm:react@15.1.0/lib/EventPluginHub.js", "npm:react@15.1.0/lib/EventPluginUtils.js", "npm:react@15.1.0/lib/accumulateInto.js", "npm:react@15.1.0/lib/forEachAccumulated.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var EventConstants = $__require('npm:react@15.1.0/lib/EventConstants.js');
    var EventPluginHub = $__require('npm:react@15.1.0/lib/EventPluginHub.js');
    var EventPluginUtils = $__require('npm:react@15.1.0/lib/EventPluginUtils.js');
    var accumulateInto = $__require('npm:react@15.1.0/lib/accumulateInto.js');
    var forEachAccumulated = $__require('npm:react@15.1.0/lib/forEachAccumulated.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var PropagationPhases = EventConstants.PropagationPhases;
    var getListener = EventPluginHub.getListener;
    function listenerAtPhase(inst, event, propagationPhase) {
      var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
      return getListener(inst, registrationName);
    }
    function accumulateDirectionalDispatches(inst, upwards, event) {
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(inst, 'Dispatching inst must not be null') : void 0;
      }
      var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
      var listener = listenerAtPhase(inst, event, phase);
      if (listener) {
        event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
        event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
      }
    }
    function accumulateTwoPhaseDispatchesSingle(event) {
      if (event && event.dispatchConfig.phasedRegistrationNames) {
        EventPluginUtils.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
      }
    }
    function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
      if (event && event.dispatchConfig.phasedRegistrationNames) {
        var targetInst = event._targetInst;
        var parentInst = targetInst ? EventPluginUtils.getParentInstance(targetInst) : null;
        EventPluginUtils.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
      }
    }
    function accumulateDispatches(inst, ignoredDirection, event) {
      if (event && event.dispatchConfig.registrationName) {
        var registrationName = event.dispatchConfig.registrationName;
        var listener = getListener(inst, registrationName);
        if (listener) {
          event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
          event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
        }
      }
    }
    function accumulateDirectDispatchesSingle(event) {
      if (event && event.dispatchConfig.registrationName) {
        accumulateDispatches(event._targetInst, null, event);
      }
    }
    function accumulateTwoPhaseDispatches(events) {
      forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
    }
    function accumulateTwoPhaseDispatchesSkipTarget(events) {
      forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
    }
    function accumulateEnterLeaveDispatches(leave, enter, from, to) {
      EventPluginUtils.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
    }
    function accumulateDirectDispatches(events) {
      forEachAccumulated(events, accumulateDirectDispatchesSingle);
    }
    var EventPropagators = {
      accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
      accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
      accumulateDirectDispatches: accumulateDirectDispatches,
      accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
    };
    module.exports = EventPropagators;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticAnimationEvent.js", ["npm:react@15.1.0/lib/SyntheticEvent.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('npm:react@15.1.0/lib/SyntheticEvent.js');
  var AnimationEventInterface = {
    animationName: null,
    elapsedTime: null,
    pseudoElement: null
  };
  function SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticAnimationEvent, AnimationEventInterface);
  module.exports = SyntheticAnimationEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticClipboardEvent.js", ["npm:react@15.1.0/lib/SyntheticEvent.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('npm:react@15.1.0/lib/SyntheticEvent.js');
  var ClipboardEventInterface = {clipboardData: function(event) {
      return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
    }};
  function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
  module.exports = SyntheticClipboardEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticFocusEvent.js", ["npm:react@15.1.0/lib/SyntheticUIEvent.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('npm:react@15.1.0/lib/SyntheticUIEvent.js');
  var FocusEventInterface = {relatedTarget: null};
  function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
  module.exports = SyntheticFocusEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/getEventKey.js", ["npm:react@15.1.0/lib/getEventCharCode.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getEventCharCode = $__require('npm:react@15.1.0/lib/getEventCharCode.js');
  var normalizeKey = {
    'Esc': 'Escape',
    'Spacebar': ' ',
    'Left': 'ArrowLeft',
    'Up': 'ArrowUp',
    'Right': 'ArrowRight',
    'Down': 'ArrowDown',
    'Del': 'Delete',
    'Win': 'OS',
    'Menu': 'ContextMenu',
    'Apps': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'MozPrintableKey': 'Unidentified'
  };
  var translateToKey = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  };
  function getEventKey(nativeEvent) {
    if (nativeEvent.key) {
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
      if (key !== 'Unidentified') {
        return key;
      }
    }
    if (nativeEvent.type === 'keypress') {
      var charCode = getEventCharCode(nativeEvent);
      return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }
    if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
      return translateToKey[nativeEvent.keyCode] || 'Unidentified';
    }
    return '';
  }
  module.exports = getEventKey;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticKeyboardEvent.js", ["npm:react@15.1.0/lib/SyntheticUIEvent.js", "npm:react@15.1.0/lib/getEventCharCode.js", "npm:react@15.1.0/lib/getEventKey.js", "npm:react@15.1.0/lib/getEventModifierState.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('npm:react@15.1.0/lib/SyntheticUIEvent.js');
  var getEventCharCode = $__require('npm:react@15.1.0/lib/getEventCharCode.js');
  var getEventKey = $__require('npm:react@15.1.0/lib/getEventKey.js');
  var getEventModifierState = $__require('npm:react@15.1.0/lib/getEventModifierState.js');
  var KeyboardEventInterface = {
    key: getEventKey,
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: getEventModifierState,
    charCode: function(event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      return 0;
    },
    keyCode: function(event) {
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    },
    which: function(event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    }
  };
  function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
  module.exports = SyntheticKeyboardEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticDragEvent.js", ["npm:react@15.1.0/lib/SyntheticMouseEvent.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticMouseEvent = $__require('npm:react@15.1.0/lib/SyntheticMouseEvent.js');
  var DragEventInterface = {dataTransfer: null};
  function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
  module.exports = SyntheticDragEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticTouchEvent.js", ["npm:react@15.1.0/lib/SyntheticUIEvent.js", "npm:react@15.1.0/lib/getEventModifierState.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('npm:react@15.1.0/lib/SyntheticUIEvent.js');
  var getEventModifierState = $__require('npm:react@15.1.0/lib/getEventModifierState.js');
  var TouchEventInterface = {
    touches: null,
    targetTouches: null,
    changedTouches: null,
    altKey: null,
    metaKey: null,
    ctrlKey: null,
    shiftKey: null,
    getModifierState: getEventModifierState
  };
  function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
  module.exports = SyntheticTouchEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticTransitionEvent.js", ["npm:react@15.1.0/lib/SyntheticEvent.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('npm:react@15.1.0/lib/SyntheticEvent.js');
  var TransitionEventInterface = {
    propertyName: null,
    elapsedTime: null,
    pseudoElement: null
  };
  function SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticTransitionEvent, TransitionEventInterface);
  module.exports = SyntheticTransitionEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticEvent.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/PooledClass.js", "npm:fbjs@0.8.3/lib/emptyFunction.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var PooledClass = $__require('npm:react@15.1.0/lib/PooledClass.js');
    var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var didWarnForAddedNewProperty = false;
    var isProxySupported = typeof Proxy === 'function';
    var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];
    var EventInterface = {
      type: null,
      target: null,
      currentTarget: emptyFunction.thatReturnsNull,
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function(event) {
        return event.timeStamp || Date.now();
      },
      defaultPrevented: null,
      isTrusted: null
    };
    function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
      if ("production" !== 'production') {
        delete this.nativeEvent;
        delete this.preventDefault;
        delete this.stopPropagation;
      }
      this.dispatchConfig = dispatchConfig;
      this._targetInst = targetInst;
      this.nativeEvent = nativeEvent;
      var Interface = this.constructor.Interface;
      for (var propName in Interface) {
        if (!Interface.hasOwnProperty(propName)) {
          continue;
        }
        if ("production" !== 'production') {
          delete this[propName];
        }
        var normalize = Interface[propName];
        if (normalize) {
          this[propName] = normalize(nativeEvent);
        } else {
          if (propName === 'target') {
            this.target = nativeEventTarget;
          } else {
            this[propName] = nativeEvent[propName];
          }
        }
      }
      var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
      if (defaultPrevented) {
        this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
      } else {
        this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
      }
      this.isPropagationStopped = emptyFunction.thatReturnsFalse;
      return this;
    }
    _assign(SyntheticEvent.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var event = this.nativeEvent;
        if (!event) {
          return;
        }
        if (event.preventDefault) {
          event.preventDefault();
        } else {
          event.returnValue = false;
        }
        this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
      },
      stopPropagation: function() {
        var event = this.nativeEvent;
        if (!event) {
          return;
        }
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          event.cancelBubble = true;
        }
        this.isPropagationStopped = emptyFunction.thatReturnsTrue;
      },
      persist: function() {
        this.isPersistent = emptyFunction.thatReturnsTrue;
      },
      isPersistent: emptyFunction.thatReturnsFalse,
      destructor: function() {
        var Interface = this.constructor.Interface;
        for (var propName in Interface) {
          if ("production" !== 'production') {
            Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
          } else {
            this[propName] = null;
          }
        }
        for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
          this[shouldBeReleasedProperties[i]] = null;
        }
        if ("production" !== 'production') {
          var noop = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
          Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
          Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', noop));
          Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', noop));
        }
      }
    });
    SyntheticEvent.Interface = EventInterface;
    if ("production" !== 'production') {
      if (isProxySupported) {
        SyntheticEvent = new Proxy(SyntheticEvent, {
          construct: function(target, args) {
            return this.apply(target, Object.create(target.prototype), args);
          },
          apply: function(constructor, that, args) {
            return new Proxy(constructor.apply(that, args), {set: function(target, prop, value) {
                if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
                  "production" !== 'production' ? warning(didWarnForAddedNewProperty || target.isPersistent(), 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re adding a new property in the synthetic event object. ' + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
                  didWarnForAddedNewProperty = true;
                }
                target[prop] = value;
                return true;
              }});
          }
        });
      }
    }
    SyntheticEvent.augmentClass = function(Class, Interface) {
      var Super = this;
      var E = function() {};
      E.prototype = Super.prototype;
      var prototype = new E();
      _assign(prototype, Class.prototype);
      Class.prototype = prototype;
      Class.prototype.constructor = Class;
      Class.Interface = _assign({}, Super.Interface, Interface);
      Class.augmentClass = Super.augmentClass;
      PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
    };
    PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);
    module.exports = SyntheticEvent;
    function getPooledWarningPropertyDefinition(propName, getVal) {
      var isFunction = typeof getVal === 'function';
      return {
        configurable: true,
        set: set,
        get: get
      };
      function set(val) {
        var action = isFunction ? 'setting the method' : 'setting the property';
        warn(action, 'This is effectively a no-op');
        return val;
      }
      function get() {
        var action = isFunction ? 'accessing the method' : 'accessing the property';
        var result = isFunction ? 'This is a no-op function' : 'This is set to null';
        warn(action, result);
        return getVal;
      }
      function warn(action, result) {
        var warningCondition = false;
        "production" !== 'production' ? warning(warningCondition, 'This synthetic event is reused for performance reasons. If you\'re seeing this, ' + 'you\'re %s `%s` on a released/nullified synthetic event. %s. ' + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result) : void 0;
      }
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/getEventTarget.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function getEventTarget(nativeEvent) {
    var target = nativeEvent.target || nativeEvent.srcElement || window;
    if (target.correspondingUseElement) {
      target = target.correspondingUseElement;
    }
    return target.nodeType === 3 ? target.parentNode : target;
  }
  module.exports = getEventTarget;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticUIEvent.js", ["npm:react@15.1.0/lib/SyntheticEvent.js", "npm:react@15.1.0/lib/getEventTarget.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticEvent = $__require('npm:react@15.1.0/lib/SyntheticEvent.js');
  var getEventTarget = $__require('npm:react@15.1.0/lib/getEventTarget.js');
  var UIEventInterface = {
    view: function(event) {
      if (event.view) {
        return event.view;
      }
      var target = getEventTarget(event);
      if (target != null && target.window === target) {
        return target;
      }
      var doc = target.ownerDocument;
      if (doc) {
        return doc.defaultView || doc.parentWindow;
      } else {
        return window;
      }
    },
    detail: function(event) {
      return event.detail || 0;
    }
  };
  function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
  module.exports = SyntheticUIEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/getEventModifierState.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var modifierKeyToProp = {
    'Alt': 'altKey',
    'Control': 'ctrlKey',
    'Meta': 'metaKey',
    'Shift': 'shiftKey'
  };
  function modifierStateGetter(keyArg) {
    var syntheticEvent = this;
    var nativeEvent = syntheticEvent.nativeEvent;
    if (nativeEvent.getModifierState) {
      return nativeEvent.getModifierState(keyArg);
    }
    var keyProp = modifierKeyToProp[keyArg];
    return keyProp ? !!nativeEvent[keyProp] : false;
  }
  function getEventModifierState(nativeEvent) {
    return modifierStateGetter;
  }
  module.exports = getEventModifierState;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticMouseEvent.js", ["npm:react@15.1.0/lib/SyntheticUIEvent.js", "npm:react@15.1.0/lib/ViewportMetrics.js", "npm:react@15.1.0/lib/getEventModifierState.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticUIEvent = $__require('npm:react@15.1.0/lib/SyntheticUIEvent.js');
  var ViewportMetrics = $__require('npm:react@15.1.0/lib/ViewportMetrics.js');
  var getEventModifierState = $__require('npm:react@15.1.0/lib/getEventModifierState.js');
  var MouseEventInterface = {
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: getEventModifierState,
    button: function(event) {
      var button = event.button;
      if ('which' in event) {
        return button;
      }
      return button === 2 ? 2 : button === 4 ? 1 : 0;
    },
    buttons: null,
    relatedTarget: function(event) {
      return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
    },
    pageX: function(event) {
      return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
    },
    pageY: function(event) {
      return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
    }
  };
  function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
  module.exports = SyntheticMouseEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SyntheticWheelEvent.js", ["npm:react@15.1.0/lib/SyntheticMouseEvent.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SyntheticMouseEvent = $__require('npm:react@15.1.0/lib/SyntheticMouseEvent.js');
  var WheelEventInterface = {
    deltaX: function(event) {
      return 'deltaX' in event ? event.deltaX : 'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
    },
    deltaY: function(event) {
      return 'deltaY' in event ? event.deltaY : 'wheelDeltaY' in event ? -event.wheelDeltaY : 'wheelDelta' in event ? -event.wheelDelta : 0;
    },
    deltaZ: null,
    deltaMode: null
  };
  function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
  module.exports = SyntheticWheelEvent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/getEventCharCode.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function getEventCharCode(nativeEvent) {
    var charCode;
    var keyCode = nativeEvent.keyCode;
    if ('charCode' in nativeEvent) {
      charCode = nativeEvent.charCode;
      if (charCode === 0 && keyCode === 13) {
        charCode = 13;
      }
    } else {
      charCode = keyCode;
    }
    if (charCode >= 32 || charCode === 13) {
      return charCode;
    }
    return 0;
  }
  module.exports = getEventCharCode;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/SimpleEventPlugin.js", ["npm:react@15.1.0/lib/EventConstants.js", "npm:fbjs@0.8.3/lib/EventListener.js", "npm:react@15.1.0/lib/EventPropagators.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/SyntheticAnimationEvent.js", "npm:react@15.1.0/lib/SyntheticClipboardEvent.js", "npm:react@15.1.0/lib/SyntheticEvent.js", "npm:react@15.1.0/lib/SyntheticFocusEvent.js", "npm:react@15.1.0/lib/SyntheticKeyboardEvent.js", "npm:react@15.1.0/lib/SyntheticMouseEvent.js", "npm:react@15.1.0/lib/SyntheticDragEvent.js", "npm:react@15.1.0/lib/SyntheticTouchEvent.js", "npm:react@15.1.0/lib/SyntheticTransitionEvent.js", "npm:react@15.1.0/lib/SyntheticUIEvent.js", "npm:react@15.1.0/lib/SyntheticWheelEvent.js", "npm:fbjs@0.8.3/lib/emptyFunction.js", "npm:react@15.1.0/lib/getEventCharCode.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/keyOf.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var EventConstants = $__require('npm:react@15.1.0/lib/EventConstants.js');
    var EventListener = $__require('npm:fbjs@0.8.3/lib/EventListener.js');
    var EventPropagators = $__require('npm:react@15.1.0/lib/EventPropagators.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var SyntheticAnimationEvent = $__require('npm:react@15.1.0/lib/SyntheticAnimationEvent.js');
    var SyntheticClipboardEvent = $__require('npm:react@15.1.0/lib/SyntheticClipboardEvent.js');
    var SyntheticEvent = $__require('npm:react@15.1.0/lib/SyntheticEvent.js');
    var SyntheticFocusEvent = $__require('npm:react@15.1.0/lib/SyntheticFocusEvent.js');
    var SyntheticKeyboardEvent = $__require('npm:react@15.1.0/lib/SyntheticKeyboardEvent.js');
    var SyntheticMouseEvent = $__require('npm:react@15.1.0/lib/SyntheticMouseEvent.js');
    var SyntheticDragEvent = $__require('npm:react@15.1.0/lib/SyntheticDragEvent.js');
    var SyntheticTouchEvent = $__require('npm:react@15.1.0/lib/SyntheticTouchEvent.js');
    var SyntheticTransitionEvent = $__require('npm:react@15.1.0/lib/SyntheticTransitionEvent.js');
    var SyntheticUIEvent = $__require('npm:react@15.1.0/lib/SyntheticUIEvent.js');
    var SyntheticWheelEvent = $__require('npm:react@15.1.0/lib/SyntheticWheelEvent.js');
    var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
    var getEventCharCode = $__require('npm:react@15.1.0/lib/getEventCharCode.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var keyOf = $__require('npm:fbjs@0.8.3/lib/keyOf.js');
    var topLevelTypes = EventConstants.topLevelTypes;
    var eventTypes = {
      abort: {phasedRegistrationNames: {
          bubbled: keyOf({onAbort: true}),
          captured: keyOf({onAbortCapture: true})
        }},
      animationEnd: {phasedRegistrationNames: {
          bubbled: keyOf({onAnimationEnd: true}),
          captured: keyOf({onAnimationEndCapture: true})
        }},
      animationIteration: {phasedRegistrationNames: {
          bubbled: keyOf({onAnimationIteration: true}),
          captured: keyOf({onAnimationIterationCapture: true})
        }},
      animationStart: {phasedRegistrationNames: {
          bubbled: keyOf({onAnimationStart: true}),
          captured: keyOf({onAnimationStartCapture: true})
        }},
      blur: {phasedRegistrationNames: {
          bubbled: keyOf({onBlur: true}),
          captured: keyOf({onBlurCapture: true})
        }},
      canPlay: {phasedRegistrationNames: {
          bubbled: keyOf({onCanPlay: true}),
          captured: keyOf({onCanPlayCapture: true})
        }},
      canPlayThrough: {phasedRegistrationNames: {
          bubbled: keyOf({onCanPlayThrough: true}),
          captured: keyOf({onCanPlayThroughCapture: true})
        }},
      click: {phasedRegistrationNames: {
          bubbled: keyOf({onClick: true}),
          captured: keyOf({onClickCapture: true})
        }},
      contextMenu: {phasedRegistrationNames: {
          bubbled: keyOf({onContextMenu: true}),
          captured: keyOf({onContextMenuCapture: true})
        }},
      copy: {phasedRegistrationNames: {
          bubbled: keyOf({onCopy: true}),
          captured: keyOf({onCopyCapture: true})
        }},
      cut: {phasedRegistrationNames: {
          bubbled: keyOf({onCut: true}),
          captured: keyOf({onCutCapture: true})
        }},
      doubleClick: {phasedRegistrationNames: {
          bubbled: keyOf({onDoubleClick: true}),
          captured: keyOf({onDoubleClickCapture: true})
        }},
      drag: {phasedRegistrationNames: {
          bubbled: keyOf({onDrag: true}),
          captured: keyOf({onDragCapture: true})
        }},
      dragEnd: {phasedRegistrationNames: {
          bubbled: keyOf({onDragEnd: true}),
          captured: keyOf({onDragEndCapture: true})
        }},
      dragEnter: {phasedRegistrationNames: {
          bubbled: keyOf({onDragEnter: true}),
          captured: keyOf({onDragEnterCapture: true})
        }},
      dragExit: {phasedRegistrationNames: {
          bubbled: keyOf({onDragExit: true}),
          captured: keyOf({onDragExitCapture: true})
        }},
      dragLeave: {phasedRegistrationNames: {
          bubbled: keyOf({onDragLeave: true}),
          captured: keyOf({onDragLeaveCapture: true})
        }},
      dragOver: {phasedRegistrationNames: {
          bubbled: keyOf({onDragOver: true}),
          captured: keyOf({onDragOverCapture: true})
        }},
      dragStart: {phasedRegistrationNames: {
          bubbled: keyOf({onDragStart: true}),
          captured: keyOf({onDragStartCapture: true})
        }},
      drop: {phasedRegistrationNames: {
          bubbled: keyOf({onDrop: true}),
          captured: keyOf({onDropCapture: true})
        }},
      durationChange: {phasedRegistrationNames: {
          bubbled: keyOf({onDurationChange: true}),
          captured: keyOf({onDurationChangeCapture: true})
        }},
      emptied: {phasedRegistrationNames: {
          bubbled: keyOf({onEmptied: true}),
          captured: keyOf({onEmptiedCapture: true})
        }},
      encrypted: {phasedRegistrationNames: {
          bubbled: keyOf({onEncrypted: true}),
          captured: keyOf({onEncryptedCapture: true})
        }},
      ended: {phasedRegistrationNames: {
          bubbled: keyOf({onEnded: true}),
          captured: keyOf({onEndedCapture: true})
        }},
      error: {phasedRegistrationNames: {
          bubbled: keyOf({onError: true}),
          captured: keyOf({onErrorCapture: true})
        }},
      focus: {phasedRegistrationNames: {
          bubbled: keyOf({onFocus: true}),
          captured: keyOf({onFocusCapture: true})
        }},
      input: {phasedRegistrationNames: {
          bubbled: keyOf({onInput: true}),
          captured: keyOf({onInputCapture: true})
        }},
      invalid: {phasedRegistrationNames: {
          bubbled: keyOf({onInvalid: true}),
          captured: keyOf({onInvalidCapture: true})
        }},
      keyDown: {phasedRegistrationNames: {
          bubbled: keyOf({onKeyDown: true}),
          captured: keyOf({onKeyDownCapture: true})
        }},
      keyPress: {phasedRegistrationNames: {
          bubbled: keyOf({onKeyPress: true}),
          captured: keyOf({onKeyPressCapture: true})
        }},
      keyUp: {phasedRegistrationNames: {
          bubbled: keyOf({onKeyUp: true}),
          captured: keyOf({onKeyUpCapture: true})
        }},
      load: {phasedRegistrationNames: {
          bubbled: keyOf({onLoad: true}),
          captured: keyOf({onLoadCapture: true})
        }},
      loadedData: {phasedRegistrationNames: {
          bubbled: keyOf({onLoadedData: true}),
          captured: keyOf({onLoadedDataCapture: true})
        }},
      loadedMetadata: {phasedRegistrationNames: {
          bubbled: keyOf({onLoadedMetadata: true}),
          captured: keyOf({onLoadedMetadataCapture: true})
        }},
      loadStart: {phasedRegistrationNames: {
          bubbled: keyOf({onLoadStart: true}),
          captured: keyOf({onLoadStartCapture: true})
        }},
      mouseDown: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseDown: true}),
          captured: keyOf({onMouseDownCapture: true})
        }},
      mouseMove: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseMove: true}),
          captured: keyOf({onMouseMoveCapture: true})
        }},
      mouseOut: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseOut: true}),
          captured: keyOf({onMouseOutCapture: true})
        }},
      mouseOver: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseOver: true}),
          captured: keyOf({onMouseOverCapture: true})
        }},
      mouseUp: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseUp: true}),
          captured: keyOf({onMouseUpCapture: true})
        }},
      paste: {phasedRegistrationNames: {
          bubbled: keyOf({onPaste: true}),
          captured: keyOf({onPasteCapture: true})
        }},
      pause: {phasedRegistrationNames: {
          bubbled: keyOf({onPause: true}),
          captured: keyOf({onPauseCapture: true})
        }},
      play: {phasedRegistrationNames: {
          bubbled: keyOf({onPlay: true}),
          captured: keyOf({onPlayCapture: true})
        }},
      playing: {phasedRegistrationNames: {
          bubbled: keyOf({onPlaying: true}),
          captured: keyOf({onPlayingCapture: true})
        }},
      progress: {phasedRegistrationNames: {
          bubbled: keyOf({onProgress: true}),
          captured: keyOf({onProgressCapture: true})
        }},
      rateChange: {phasedRegistrationNames: {
          bubbled: keyOf({onRateChange: true}),
          captured: keyOf({onRateChangeCapture: true})
        }},
      reset: {phasedRegistrationNames: {
          bubbled: keyOf({onReset: true}),
          captured: keyOf({onResetCapture: true})
        }},
      scroll: {phasedRegistrationNames: {
          bubbled: keyOf({onScroll: true}),
          captured: keyOf({onScrollCapture: true})
        }},
      seeked: {phasedRegistrationNames: {
          bubbled: keyOf({onSeeked: true}),
          captured: keyOf({onSeekedCapture: true})
        }},
      seeking: {phasedRegistrationNames: {
          bubbled: keyOf({onSeeking: true}),
          captured: keyOf({onSeekingCapture: true})
        }},
      stalled: {phasedRegistrationNames: {
          bubbled: keyOf({onStalled: true}),
          captured: keyOf({onStalledCapture: true})
        }},
      submit: {phasedRegistrationNames: {
          bubbled: keyOf({onSubmit: true}),
          captured: keyOf({onSubmitCapture: true})
        }},
      suspend: {phasedRegistrationNames: {
          bubbled: keyOf({onSuspend: true}),
          captured: keyOf({onSuspendCapture: true})
        }},
      timeUpdate: {phasedRegistrationNames: {
          bubbled: keyOf({onTimeUpdate: true}),
          captured: keyOf({onTimeUpdateCapture: true})
        }},
      touchCancel: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchCancel: true}),
          captured: keyOf({onTouchCancelCapture: true})
        }},
      touchEnd: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchEnd: true}),
          captured: keyOf({onTouchEndCapture: true})
        }},
      touchMove: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchMove: true}),
          captured: keyOf({onTouchMoveCapture: true})
        }},
      touchStart: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchStart: true}),
          captured: keyOf({onTouchStartCapture: true})
        }},
      transitionEnd: {phasedRegistrationNames: {
          bubbled: keyOf({onTransitionEnd: true}),
          captured: keyOf({onTransitionEndCapture: true})
        }},
      volumeChange: {phasedRegistrationNames: {
          bubbled: keyOf({onVolumeChange: true}),
          captured: keyOf({onVolumeChangeCapture: true})
        }},
      waiting: {phasedRegistrationNames: {
          bubbled: keyOf({onWaiting: true}),
          captured: keyOf({onWaitingCapture: true})
        }},
      wheel: {phasedRegistrationNames: {
          bubbled: keyOf({onWheel: true}),
          captured: keyOf({onWheelCapture: true})
        }}
    };
    var topLevelEventsToDispatchConfig = {
      topAbort: eventTypes.abort,
      topAnimationEnd: eventTypes.animationEnd,
      topAnimationIteration: eventTypes.animationIteration,
      topAnimationStart: eventTypes.animationStart,
      topBlur: eventTypes.blur,
      topCanPlay: eventTypes.canPlay,
      topCanPlayThrough: eventTypes.canPlayThrough,
      topClick: eventTypes.click,
      topContextMenu: eventTypes.contextMenu,
      topCopy: eventTypes.copy,
      topCut: eventTypes.cut,
      topDoubleClick: eventTypes.doubleClick,
      topDrag: eventTypes.drag,
      topDragEnd: eventTypes.dragEnd,
      topDragEnter: eventTypes.dragEnter,
      topDragExit: eventTypes.dragExit,
      topDragLeave: eventTypes.dragLeave,
      topDragOver: eventTypes.dragOver,
      topDragStart: eventTypes.dragStart,
      topDrop: eventTypes.drop,
      topDurationChange: eventTypes.durationChange,
      topEmptied: eventTypes.emptied,
      topEncrypted: eventTypes.encrypted,
      topEnded: eventTypes.ended,
      topError: eventTypes.error,
      topFocus: eventTypes.focus,
      topInput: eventTypes.input,
      topInvalid: eventTypes.invalid,
      topKeyDown: eventTypes.keyDown,
      topKeyPress: eventTypes.keyPress,
      topKeyUp: eventTypes.keyUp,
      topLoad: eventTypes.load,
      topLoadedData: eventTypes.loadedData,
      topLoadedMetadata: eventTypes.loadedMetadata,
      topLoadStart: eventTypes.loadStart,
      topMouseDown: eventTypes.mouseDown,
      topMouseMove: eventTypes.mouseMove,
      topMouseOut: eventTypes.mouseOut,
      topMouseOver: eventTypes.mouseOver,
      topMouseUp: eventTypes.mouseUp,
      topPaste: eventTypes.paste,
      topPause: eventTypes.pause,
      topPlay: eventTypes.play,
      topPlaying: eventTypes.playing,
      topProgress: eventTypes.progress,
      topRateChange: eventTypes.rateChange,
      topReset: eventTypes.reset,
      topScroll: eventTypes.scroll,
      topSeeked: eventTypes.seeked,
      topSeeking: eventTypes.seeking,
      topStalled: eventTypes.stalled,
      topSubmit: eventTypes.submit,
      topSuspend: eventTypes.suspend,
      topTimeUpdate: eventTypes.timeUpdate,
      topTouchCancel: eventTypes.touchCancel,
      topTouchEnd: eventTypes.touchEnd,
      topTouchMove: eventTypes.touchMove,
      topTouchStart: eventTypes.touchStart,
      topTransitionEnd: eventTypes.transitionEnd,
      topVolumeChange: eventTypes.volumeChange,
      topWaiting: eventTypes.waiting,
      topWheel: eventTypes.wheel
    };
    for (var type in topLevelEventsToDispatchConfig) {
      topLevelEventsToDispatchConfig[type].dependencies = [type];
    }
    var ON_CLICK_KEY = keyOf({onClick: null});
    var onClickListeners = {};
    var SimpleEventPlugin = {
      eventTypes: eventTypes,
      extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
        var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
        if (!dispatchConfig) {
          return null;
        }
        var EventConstructor;
        switch (topLevelType) {
          case topLevelTypes.topAbort:
          case topLevelTypes.topCanPlay:
          case topLevelTypes.topCanPlayThrough:
          case topLevelTypes.topDurationChange:
          case topLevelTypes.topEmptied:
          case topLevelTypes.topEncrypted:
          case topLevelTypes.topEnded:
          case topLevelTypes.topError:
          case topLevelTypes.topInput:
          case topLevelTypes.topInvalid:
          case topLevelTypes.topLoad:
          case topLevelTypes.topLoadedData:
          case topLevelTypes.topLoadedMetadata:
          case topLevelTypes.topLoadStart:
          case topLevelTypes.topPause:
          case topLevelTypes.topPlay:
          case topLevelTypes.topPlaying:
          case topLevelTypes.topProgress:
          case topLevelTypes.topRateChange:
          case topLevelTypes.topReset:
          case topLevelTypes.topSeeked:
          case topLevelTypes.topSeeking:
          case topLevelTypes.topStalled:
          case topLevelTypes.topSubmit:
          case topLevelTypes.topSuspend:
          case topLevelTypes.topTimeUpdate:
          case topLevelTypes.topVolumeChange:
          case topLevelTypes.topWaiting:
            EventConstructor = SyntheticEvent;
            break;
          case topLevelTypes.topKeyPress:
            if (getEventCharCode(nativeEvent) === 0) {
              return null;
            }
          case topLevelTypes.topKeyDown:
          case topLevelTypes.topKeyUp:
            EventConstructor = SyntheticKeyboardEvent;
            break;
          case topLevelTypes.topBlur:
          case topLevelTypes.topFocus:
            EventConstructor = SyntheticFocusEvent;
            break;
          case topLevelTypes.topClick:
            if (nativeEvent.button === 2) {
              return null;
            }
          case topLevelTypes.topContextMenu:
          case topLevelTypes.topDoubleClick:
          case topLevelTypes.topMouseDown:
          case topLevelTypes.topMouseMove:
          case topLevelTypes.topMouseOut:
          case topLevelTypes.topMouseOver:
          case topLevelTypes.topMouseUp:
            EventConstructor = SyntheticMouseEvent;
            break;
          case topLevelTypes.topDrag:
          case topLevelTypes.topDragEnd:
          case topLevelTypes.topDragEnter:
          case topLevelTypes.topDragExit:
          case topLevelTypes.topDragLeave:
          case topLevelTypes.topDragOver:
          case topLevelTypes.topDragStart:
          case topLevelTypes.topDrop:
            EventConstructor = SyntheticDragEvent;
            break;
          case topLevelTypes.topTouchCancel:
          case topLevelTypes.topTouchEnd:
          case topLevelTypes.topTouchMove:
          case topLevelTypes.topTouchStart:
            EventConstructor = SyntheticTouchEvent;
            break;
          case topLevelTypes.topAnimationEnd:
          case topLevelTypes.topAnimationIteration:
          case topLevelTypes.topAnimationStart:
            EventConstructor = SyntheticAnimationEvent;
            break;
          case topLevelTypes.topTransitionEnd:
            EventConstructor = SyntheticTransitionEvent;
            break;
          case topLevelTypes.topScroll:
            EventConstructor = SyntheticUIEvent;
            break;
          case topLevelTypes.topWheel:
            EventConstructor = SyntheticWheelEvent;
            break;
          case topLevelTypes.topCopy:
          case topLevelTypes.topCut:
          case topLevelTypes.topPaste:
            EventConstructor = SyntheticClipboardEvent;
            break;
        }
        !EventConstructor ? "production" !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(false) : void 0;
        var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      },
      didPutListener: function(inst, registrationName, listener) {
        if (registrationName === ON_CLICK_KEY) {
          var id = inst._rootNodeID;
          var node = ReactDOMComponentTree.getNodeFromInstance(inst);
          if (!onClickListeners[id]) {
            onClickListeners[id] = EventListener.listen(node, 'click', emptyFunction);
          }
        }
      },
      willDeleteListener: function(inst, registrationName) {
        if (registrationName === ON_CLICK_KEY) {
          var id = inst._rootNodeID;
          onClickListeners[id].remove();
          delete onClickListeners[id];
        }
      }
    };
    module.exports = SimpleEventPlugin;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDefaultInjection.js", ["npm:react@15.1.0/lib/BeforeInputEventPlugin.js", "npm:react@15.1.0/lib/ChangeEventPlugin.js", "npm:react@15.1.0/lib/DefaultEventPluginOrder.js", "npm:react@15.1.0/lib/EnterLeaveEventPlugin.js", "npm:react@15.1.0/lib/HTMLDOMPropertyConfig.js", "npm:react@15.1.0/lib/ReactComponentBrowserEnvironment.js", "npm:react@15.1.0/lib/ReactDOMComponent.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactDOMEmptyComponent.js", "npm:react@15.1.0/lib/ReactDOMTreeTraversal.js", "npm:react@15.1.0/lib/ReactDOMTextComponent.js", "npm:react@15.1.0/lib/ReactDefaultBatchingStrategy.js", "npm:react@15.1.0/lib/ReactEventListener.js", "npm:react@15.1.0/lib/ReactInjection.js", "npm:react@15.1.0/lib/ReactReconcileTransaction.js", "npm:react@15.1.0/lib/SVGDOMPropertyConfig.js", "npm:react@15.1.0/lib/SelectEventPlugin.js", "npm:react@15.1.0/lib/SimpleEventPlugin.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var BeforeInputEventPlugin = $__require('npm:react@15.1.0/lib/BeforeInputEventPlugin.js');
  var ChangeEventPlugin = $__require('npm:react@15.1.0/lib/ChangeEventPlugin.js');
  var DefaultEventPluginOrder = $__require('npm:react@15.1.0/lib/DefaultEventPluginOrder.js');
  var EnterLeaveEventPlugin = $__require('npm:react@15.1.0/lib/EnterLeaveEventPlugin.js');
  var HTMLDOMPropertyConfig = $__require('npm:react@15.1.0/lib/HTMLDOMPropertyConfig.js');
  var ReactComponentBrowserEnvironment = $__require('npm:react@15.1.0/lib/ReactComponentBrowserEnvironment.js');
  var ReactDOMComponent = $__require('npm:react@15.1.0/lib/ReactDOMComponent.js');
  var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
  var ReactDOMEmptyComponent = $__require('npm:react@15.1.0/lib/ReactDOMEmptyComponent.js');
  var ReactDOMTreeTraversal = $__require('npm:react@15.1.0/lib/ReactDOMTreeTraversal.js');
  var ReactDOMTextComponent = $__require('npm:react@15.1.0/lib/ReactDOMTextComponent.js');
  var ReactDefaultBatchingStrategy = $__require('npm:react@15.1.0/lib/ReactDefaultBatchingStrategy.js');
  var ReactEventListener = $__require('npm:react@15.1.0/lib/ReactEventListener.js');
  var ReactInjection = $__require('npm:react@15.1.0/lib/ReactInjection.js');
  var ReactReconcileTransaction = $__require('npm:react@15.1.0/lib/ReactReconcileTransaction.js');
  var SVGDOMPropertyConfig = $__require('npm:react@15.1.0/lib/SVGDOMPropertyConfig.js');
  var SelectEventPlugin = $__require('npm:react@15.1.0/lib/SelectEventPlugin.js');
  var SimpleEventPlugin = $__require('npm:react@15.1.0/lib/SimpleEventPlugin.js');
  var alreadyInjected = false;
  function inject() {
    if (alreadyInjected) {
      return;
    }
    alreadyInjected = true;
    ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
    ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
    ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
    ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);
    ReactInjection.EventPluginHub.injectEventPluginsByName({
      SimpleEventPlugin: SimpleEventPlugin,
      EnterLeaveEventPlugin: EnterLeaveEventPlugin,
      ChangeEventPlugin: ChangeEventPlugin,
      SelectEventPlugin: SelectEventPlugin,
      BeforeInputEventPlugin: BeforeInputEventPlugin
    });
    ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);
    ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
    ReactInjection.EmptyComponent.injectEmptyComponentFactory(function(instantiate) {
      return new ReactDOMEmptyComponent(instantiate);
    });
    ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
    ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
    ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
  }
  module.exports = {inject: inject};
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/findDOMNode.js", ["npm:react@15.1.0/lib/ReactCurrentOwner.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactInstanceMap.js", "npm:react@15.1.0/lib/getNativeComponentFromComposite.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactCurrentOwner = $__require('npm:react@15.1.0/lib/ReactCurrentOwner.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactInstanceMap = $__require('npm:react@15.1.0/lib/ReactInstanceMap.js');
    var getNativeComponentFromComposite = $__require('npm:react@15.1.0/lib/getNativeComponentFromComposite.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    function findDOMNode(componentOrElement) {
      if ("production" !== 'production') {
        var owner = ReactCurrentOwner.current;
        if (owner !== null) {
          "production" !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
          owner._warnedAboutRefsInRender = true;
        }
      }
      if (componentOrElement == null) {
        return null;
      }
      if (componentOrElement.nodeType === 1) {
        return componentOrElement;
      }
      var inst = ReactInstanceMap.get(componentOrElement);
      if (inst) {
        inst = getNativeComponentFromComposite(inst);
        return inst ? ReactDOMComponentTree.getNodeFromInstance(inst) : null;
      }
      if (typeof componentOrElement.render === 'function') {
        !false ? "production" !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : invariant(false) : void 0;
      } else {
        !false ? "production" !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false) : void 0;
      }
    }
    module.exports = findDOMNode;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/getNativeComponentFromComposite.js", ["npm:react@15.1.0/lib/ReactNodeTypes.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactNodeTypes = $__require('npm:react@15.1.0/lib/ReactNodeTypes.js');
  function getNativeComponentFromComposite(inst) {
    var type;
    while ((type = inst._renderedNodeType) === ReactNodeTypes.COMPOSITE) {
      inst = inst._renderedComponent;
    }
    if (type === ReactNodeTypes.NATIVE) {
      return inst._renderedComponent;
    } else if (type === ReactNodeTypes.EMPTY) {
      return null;
    }
  }
  module.exports = getNativeComponentFromComposite;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/DOMNamespaces.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var DOMNamespaces = {
    html: 'http://www.w3.org/1999/xhtml',
    mathml: 'http://www.w3.org/1998/Math/MathML',
    svg: 'http://www.w3.org/2000/svg'
  };
  module.exports = DOMNamespaces;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/escapeTextContentForBrowser.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ESCAPE_LOOKUP = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    '\'': '&#x27;'
  };
  var ESCAPE_REGEX = /[&><"']/g;
  function escaper(match) {
    return ESCAPE_LOOKUP[match];
  }
  function escapeTextContentForBrowser(text) {
    return ('' + text).replace(ESCAPE_REGEX, escaper);
  }
  module.exports = escapeTextContentForBrowser;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/setTextContent.js", ["npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:react@15.1.0/lib/escapeTextContentForBrowser.js", "npm:react@15.1.0/lib/setInnerHTML.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
  var escapeTextContentForBrowser = $__require('npm:react@15.1.0/lib/escapeTextContentForBrowser.js');
  var setInnerHTML = $__require('npm:react@15.1.0/lib/setInnerHTML.js');
  var setTextContent = function(node, text) {
    node.textContent = text;
  };
  if (ExecutionEnvironment.canUseDOM) {
    if (!('textContent' in document.documentElement)) {
      setTextContent = function(node, text) {
        setInnerHTML(node, escapeTextContentForBrowser(text));
      };
    }
  }
  module.exports = setTextContent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/DOMLazyTree.js", ["npm:react@15.1.0/lib/DOMNamespaces.js", "npm:react@15.1.0/lib/createMicrosoftUnsafeLocalFunction.js", "npm:react@15.1.0/lib/setTextContent.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var DOMNamespaces = $__require('npm:react@15.1.0/lib/DOMNamespaces.js');
  var createMicrosoftUnsafeLocalFunction = $__require('npm:react@15.1.0/lib/createMicrosoftUnsafeLocalFunction.js');
  var setTextContent = $__require('npm:react@15.1.0/lib/setTextContent.js');
  var ELEMENT_NODE_TYPE = 1;
  var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
  var enableLazy = typeof document !== 'undefined' && typeof document.documentMode === 'number' || typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && /\bEdge\/\d/.test(navigator.userAgent);
  function insertTreeChildren(tree) {
    if (!enableLazy) {
      return;
    }
    var node = tree.node;
    var children = tree.children;
    if (children.length) {
      for (var i = 0; i < children.length; i++) {
        insertTreeBefore(node, children[i], null);
      }
    } else if (tree.html != null) {
      node.innerHTML = tree.html;
    } else if (tree.text != null) {
      setTextContent(node, tree.text);
    }
  }
  var insertTreeBefore = createMicrosoftUnsafeLocalFunction(function(parentNode, tree, referenceNode) {
    if (tree.node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE || tree.node.nodeType === ELEMENT_NODE_TYPE && tree.node.nodeName.toLowerCase() === 'object' && (tree.node.namespaceURI == null || tree.node.namespaceURI === DOMNamespaces.html)) {
      insertTreeChildren(tree);
      parentNode.insertBefore(tree.node, referenceNode);
    } else {
      parentNode.insertBefore(tree.node, referenceNode);
      insertTreeChildren(tree);
    }
  });
  function replaceChildWithTree(oldNode, newTree) {
    oldNode.parentNode.replaceChild(newTree.node, oldNode);
    insertTreeChildren(newTree);
  }
  function queueChild(parentTree, childTree) {
    if (enableLazy) {
      parentTree.children.push(childTree);
    } else {
      parentTree.node.appendChild(childTree.node);
    }
  }
  function queueHTML(tree, html) {
    if (enableLazy) {
      tree.html = html;
    } else {
      tree.node.innerHTML = html;
    }
  }
  function queueText(tree, text) {
    if (enableLazy) {
      tree.text = text;
    } else {
      setTextContent(tree.node, text);
    }
  }
  function toString() {
    return this.node.nodeName;
  }
  function DOMLazyTree(node) {
    return {
      node: node,
      children: [],
      html: null,
      text: null,
      toString: toString
    };
  }
  DOMLazyTree.insertTreeBefore = insertTreeBefore;
  DOMLazyTree.replaceChildWithTree = replaceChildWithTree;
  DOMLazyTree.queueChild = queueChild;
  DOMLazyTree.queueHTML = queueHTML;
  DOMLazyTree.queueText = queueText;
  module.exports = DOMLazyTree;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/EventPluginRegistry.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var EventPluginOrder = null;
    var namesToPlugins = {};
    function recomputePluginOrdering() {
      if (!EventPluginOrder) {
        return;
      }
      for (var pluginName in namesToPlugins) {
        var PluginModule = namesToPlugins[pluginName];
        var pluginIndex = EventPluginOrder.indexOf(pluginName);
        !(pluginIndex > -1) ? "production" !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(false) : void 0;
        if (EventPluginRegistry.plugins[pluginIndex]) {
          continue;
        }
        !PluginModule.extractEvents ? "production" !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(false) : void 0;
        EventPluginRegistry.plugins[pluginIndex] = PluginModule;
        var publishedEvents = PluginModule.eventTypes;
        for (var eventName in publishedEvents) {
          !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? "production" !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(false) : void 0;
        }
      }
    }
    function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
      !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? "production" !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(false) : void 0;
      EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
      var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
      if (phasedRegistrationNames) {
        for (var phaseName in phasedRegistrationNames) {
          if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
            var phasedRegistrationName = phasedRegistrationNames[phaseName];
            publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
          }
        }
        return true;
      } else if (dispatchConfig.registrationName) {
        publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
        return true;
      }
      return false;
    }
    function publishRegistrationName(registrationName, PluginModule, eventName) {
      !!EventPluginRegistry.registrationNameModules[registrationName] ? "production" !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(false) : void 0;
      EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
      EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
      if ("production" !== 'production') {
        var lowerCasedName = registrationName.toLowerCase();
        EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;
      }
    }
    var EventPluginRegistry = {
      plugins: [],
      eventNameDispatchConfigs: {},
      registrationNameModules: {},
      registrationNameDependencies: {},
      possibleRegistrationNames: "production" !== 'production' ? {} : null,
      injectEventPluginOrder: function(InjectedEventPluginOrder) {
        !!EventPluginOrder ? "production" !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(false) : void 0;
        EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
        recomputePluginOrdering();
      },
      injectEventPluginsByName: function(injectedNamesToPlugins) {
        var isOrderingDirty = false;
        for (var pluginName in injectedNamesToPlugins) {
          if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
            continue;
          }
          var PluginModule = injectedNamesToPlugins[pluginName];
          if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
            !!namesToPlugins[pluginName] ? "production" !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(false) : void 0;
            namesToPlugins[pluginName] = PluginModule;
            isOrderingDirty = true;
          }
        }
        if (isOrderingDirty) {
          recomputePluginOrdering();
        }
      },
      getPluginModuleForEvent: function(event) {
        var dispatchConfig = event.dispatchConfig;
        if (dispatchConfig.registrationName) {
          return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
        }
        for (var phase in dispatchConfig.phasedRegistrationNames) {
          if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
            continue;
          }
          var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
          if (PluginModule) {
            return PluginModule;
          }
        }
        return null;
      },
      _resetEventPlugins: function() {
        EventPluginOrder = null;
        for (var pluginName in namesToPlugins) {
          if (namesToPlugins.hasOwnProperty(pluginName)) {
            delete namesToPlugins[pluginName];
          }
        }
        EventPluginRegistry.plugins.length = 0;
        var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
        for (var eventName in eventNameDispatchConfigs) {
          if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
            delete eventNameDispatchConfigs[eventName];
          }
        }
        var registrationNameModules = EventPluginRegistry.registrationNameModules;
        for (var registrationName in registrationNameModules) {
          if (registrationNameModules.hasOwnProperty(registrationName)) {
            delete registrationNameModules[registrationName];
          }
        }
        if ("production" !== 'production') {
          var possibleRegistrationNames = EventPluginRegistry.possibleRegistrationNames;
          for (var lowerCasedName in possibleRegistrationNames) {
            if (possibleRegistrationNames.hasOwnProperty(lowerCasedName)) {
              delete possibleRegistrationNames[lowerCasedName];
            }
          }
        }
      }
    };
    module.exports = EventPluginRegistry;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/EventConstants.js", ["npm:fbjs@0.8.3/lib/keyMirror.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var keyMirror = $__require('npm:fbjs@0.8.3/lib/keyMirror.js');
  var PropagationPhases = keyMirror({
    bubbled: null,
    captured: null
  });
  var topLevelTypes = keyMirror({
    topAbort: null,
    topAnimationEnd: null,
    topAnimationIteration: null,
    topAnimationStart: null,
    topBlur: null,
    topCanPlay: null,
    topCanPlayThrough: null,
    topChange: null,
    topClick: null,
    topCompositionEnd: null,
    topCompositionStart: null,
    topCompositionUpdate: null,
    topContextMenu: null,
    topCopy: null,
    topCut: null,
    topDoubleClick: null,
    topDrag: null,
    topDragEnd: null,
    topDragEnter: null,
    topDragExit: null,
    topDragLeave: null,
    topDragOver: null,
    topDragStart: null,
    topDrop: null,
    topDurationChange: null,
    topEmptied: null,
    topEncrypted: null,
    topEnded: null,
    topError: null,
    topFocus: null,
    topInput: null,
    topInvalid: null,
    topKeyDown: null,
    topKeyPress: null,
    topKeyUp: null,
    topLoad: null,
    topLoadedData: null,
    topLoadedMetadata: null,
    topLoadStart: null,
    topMouseDown: null,
    topMouseMove: null,
    topMouseOut: null,
    topMouseOver: null,
    topMouseUp: null,
    topPaste: null,
    topPause: null,
    topPlay: null,
    topPlaying: null,
    topProgress: null,
    topRateChange: null,
    topReset: null,
    topScroll: null,
    topSeeked: null,
    topSeeking: null,
    topSelectionChange: null,
    topStalled: null,
    topSubmit: null,
    topSuspend: null,
    topTextInput: null,
    topTimeUpdate: null,
    topTouchCancel: null,
    topTouchEnd: null,
    topTouchMove: null,
    topTouchStart: null,
    topTransitionEnd: null,
    topVolumeChange: null,
    topWaiting: null,
    topWheel: null
  });
  var EventConstants = {
    topLevelTypes: topLevelTypes,
    PropagationPhases: PropagationPhases
  };
  module.exports = EventConstants;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/EventPluginUtils.js", ["npm:react@15.1.0/lib/EventConstants.js", "npm:react@15.1.0/lib/ReactErrorUtils.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var EventConstants = $__require('npm:react@15.1.0/lib/EventConstants.js');
    var ReactErrorUtils = $__require('npm:react@15.1.0/lib/ReactErrorUtils.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var ComponentTree;
    var TreeTraversal;
    var injection = {
      injectComponentTree: function(Injected) {
        ComponentTree = Injected;
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.') : void 0;
        }
      },
      injectTreeTraversal: function(Injected) {
        TreeTraversal = Injected;
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(Injected && Injected.isAncestor && Injected.getLowestCommonAncestor, 'EventPluginUtils.injection.injectTreeTraversal(...): Injected ' + 'module is missing isAncestor or getLowestCommonAncestor.') : void 0;
        }
      }
    };
    var topLevelTypes = EventConstants.topLevelTypes;
    function isEndish(topLevelType) {
      return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
    }
    function isMoveish(topLevelType) {
      return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
    }
    function isStartish(topLevelType) {
      return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
    }
    var validateEventDispatches;
    if ("production" !== 'production') {
      validateEventDispatches = function(event) {
        var dispatchListeners = event._dispatchListeners;
        var dispatchInstances = event._dispatchInstances;
        var listenersIsArr = Array.isArray(dispatchListeners);
        var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
        var instancesIsArr = Array.isArray(dispatchInstances);
        var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;
        "production" !== 'production' ? warning(instancesIsArr === listenersIsArr && instancesLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : void 0;
      };
    }
    function executeDispatch(event, simulated, listener, inst) {
      var type = event.type || 'unknown-event';
      event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
      if (simulated) {
        ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event);
      } else {
        ReactErrorUtils.invokeGuardedCallback(type, listener, event);
      }
      event.currentTarget = null;
    }
    function executeDispatchesInOrder(event, simulated) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchInstances = event._dispatchInstances;
      if ("production" !== 'production') {
        validateEventDispatches(event);
      }
      if (Array.isArray(dispatchListeners)) {
        for (var i = 0; i < dispatchListeners.length; i++) {
          if (event.isPropagationStopped()) {
            break;
          }
          executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
        }
      } else if (dispatchListeners) {
        executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
      }
      event._dispatchListeners = null;
      event._dispatchInstances = null;
    }
    function executeDispatchesInOrderStopAtTrueImpl(event) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchInstances = event._dispatchInstances;
      if ("production" !== 'production') {
        validateEventDispatches(event);
      }
      if (Array.isArray(dispatchListeners)) {
        for (var i = 0; i < dispatchListeners.length; i++) {
          if (event.isPropagationStopped()) {
            break;
          }
          if (dispatchListeners[i](event, dispatchInstances[i])) {
            return dispatchInstances[i];
          }
        }
      } else if (dispatchListeners) {
        if (dispatchListeners(event, dispatchInstances)) {
          return dispatchInstances;
        }
      }
      return null;
    }
    function executeDispatchesInOrderStopAtTrue(event) {
      var ret = executeDispatchesInOrderStopAtTrueImpl(event);
      event._dispatchInstances = null;
      event._dispatchListeners = null;
      return ret;
    }
    function executeDirectDispatch(event) {
      if ("production" !== 'production') {
        validateEventDispatches(event);
      }
      var dispatchListener = event._dispatchListeners;
      var dispatchInstance = event._dispatchInstances;
      !!Array.isArray(dispatchListener) ? "production" !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : invariant(false) : void 0;
      event.currentTarget = dispatchListener ? EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
      var res = dispatchListener ? dispatchListener(event) : null;
      event.currentTarget = null;
      event._dispatchListeners = null;
      event._dispatchInstances = null;
      return res;
    }
    function hasDispatches(event) {
      return !!event._dispatchListeners;
    }
    var EventPluginUtils = {
      isEndish: isEndish,
      isMoveish: isMoveish,
      isStartish: isStartish,
      executeDirectDispatch: executeDirectDispatch,
      executeDispatchesInOrder: executeDispatchesInOrder,
      executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
      hasDispatches: hasDispatches,
      getInstanceFromNode: function(node) {
        return ComponentTree.getInstanceFromNode(node);
      },
      getNodeFromInstance: function(node) {
        return ComponentTree.getNodeFromInstance(node);
      },
      isAncestor: function(a, b) {
        return TreeTraversal.isAncestor(a, b);
      },
      getLowestCommonAncestor: function(a, b) {
        return TreeTraversal.getLowestCommonAncestor(a, b);
      },
      getParentInstance: function(inst) {
        return TreeTraversal.getParentInstance(inst);
      },
      traverseTwoPhase: function(target, fn, arg) {
        return TreeTraversal.traverseTwoPhase(target, fn, arg);
      },
      traverseEnterLeave: function(from, to, fn, argFrom, argTo) {
        return TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);
      },
      injection: injection
    };
    module.exports = EventPluginUtils;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/accumulateInto.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    function accumulateInto(current, next) {
      !(next != null) ? "production" !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(false) : void 0;
      if (current == null) {
        return next;
      }
      var currentIsArray = Array.isArray(current);
      var nextIsArray = Array.isArray(next);
      if (currentIsArray && nextIsArray) {
        current.push.apply(current, next);
        return current;
      }
      if (currentIsArray) {
        current.push(next);
        return current;
      }
      if (nextIsArray) {
        return [current].concat(next);
      }
      return [current, next];
    }
    module.exports = accumulateInto;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/forEachAccumulated.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var forEachAccumulated = function(arr, cb, scope) {
    if (Array.isArray(arr)) {
      arr.forEach(cb, scope);
    } else if (arr) {
      cb.call(scope, arr);
    }
  };
  module.exports = forEachAccumulated;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/EventPluginHub.js", ["npm:react@15.1.0/lib/EventPluginRegistry.js", "npm:react@15.1.0/lib/EventPluginUtils.js", "npm:react@15.1.0/lib/ReactErrorUtils.js", "npm:react@15.1.0/lib/accumulateInto.js", "npm:react@15.1.0/lib/forEachAccumulated.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var EventPluginRegistry = $__require('npm:react@15.1.0/lib/EventPluginRegistry.js');
    var EventPluginUtils = $__require('npm:react@15.1.0/lib/EventPluginUtils.js');
    var ReactErrorUtils = $__require('npm:react@15.1.0/lib/ReactErrorUtils.js');
    var accumulateInto = $__require('npm:react@15.1.0/lib/accumulateInto.js');
    var forEachAccumulated = $__require('npm:react@15.1.0/lib/forEachAccumulated.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var listenerBank = {};
    var eventQueue = null;
    var executeDispatchesAndRelease = function(event, simulated) {
      if (event) {
        EventPluginUtils.executeDispatchesInOrder(event, simulated);
        if (!event.isPersistent()) {
          event.constructor.release(event);
        }
      }
    };
    var executeDispatchesAndReleaseSimulated = function(e) {
      return executeDispatchesAndRelease(e, true);
    };
    var executeDispatchesAndReleaseTopLevel = function(e) {
      return executeDispatchesAndRelease(e, false);
    };
    var EventPluginHub = {
      injection: {
        injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
        injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
      },
      putListener: function(inst, registrationName, listener) {
        !(typeof listener === 'function') ? "production" !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(false) : void 0;
        var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
        bankForRegistrationName[inst._rootNodeID] = listener;
        var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
        if (PluginModule && PluginModule.didPutListener) {
          PluginModule.didPutListener(inst, registrationName, listener);
        }
      },
      getListener: function(inst, registrationName) {
        var bankForRegistrationName = listenerBank[registrationName];
        return bankForRegistrationName && bankForRegistrationName[inst._rootNodeID];
      },
      deleteListener: function(inst, registrationName) {
        var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
        if (PluginModule && PluginModule.willDeleteListener) {
          PluginModule.willDeleteListener(inst, registrationName);
        }
        var bankForRegistrationName = listenerBank[registrationName];
        if (bankForRegistrationName) {
          delete bankForRegistrationName[inst._rootNodeID];
        }
      },
      deleteAllListeners: function(inst) {
        for (var registrationName in listenerBank) {
          if (!listenerBank[registrationName][inst._rootNodeID]) {
            continue;
          }
          var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
          if (PluginModule && PluginModule.willDeleteListener) {
            PluginModule.willDeleteListener(inst, registrationName);
          }
          delete listenerBank[registrationName][inst._rootNodeID];
        }
      },
      extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
        var events;
        var plugins = EventPluginRegistry.plugins;
        for (var i = 0; i < plugins.length; i++) {
          var possiblePlugin = plugins[i];
          if (possiblePlugin) {
            var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
            if (extractedEvents) {
              events = accumulateInto(events, extractedEvents);
            }
          }
        }
        return events;
      },
      enqueueEvents: function(events) {
        if (events) {
          eventQueue = accumulateInto(eventQueue, events);
        }
      },
      processEventQueue: function(simulated) {
        var processingEventQueue = eventQueue;
        eventQueue = null;
        if (simulated) {
          forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
        } else {
          forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
        }
        !!eventQueue ? "production" !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(false) : void 0;
        ReactErrorUtils.rethrowCaughtError();
      },
      __purge: function() {
        listenerBank = {};
      },
      __getListenerBank: function() {
        return listenerBank;
      }
    };
    module.exports = EventPluginHub;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactEventEmitterMixin.js", ["npm:react@15.1.0/lib/EventPluginHub.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var EventPluginHub = $__require('npm:react@15.1.0/lib/EventPluginHub.js');
  function runEventQueueInBatch(events) {
    EventPluginHub.enqueueEvents(events);
    EventPluginHub.processEventQueue(false);
  }
  var ReactEventEmitterMixin = {handleTopLevel: function(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      var events = EventPluginHub.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
      runEventQueueInBatch(events);
    }};
  module.exports = ReactEventEmitterMixin;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ViewportMetrics.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ViewportMetrics = {
    currentScrollLeft: 0,
    currentScrollTop: 0,
    refreshScrollValues: function(scrollPosition) {
      ViewportMetrics.currentScrollLeft = scrollPosition.x;
      ViewportMetrics.currentScrollTop = scrollPosition.y;
    }
  };
  module.exports = ViewportMetrics;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/getVendorPrefixedEventName.js", ["npm:fbjs@0.8.3/lib/ExecutionEnvironment.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
  function makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes['Webkit' + styleProp] = 'webkit' + eventName;
    prefixes['Moz' + styleProp] = 'moz' + eventName;
    prefixes['ms' + styleProp] = 'MS' + eventName;
    prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();
    return prefixes;
  }
  var vendorPrefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
    animationstart: makePrefixMap('Animation', 'AnimationStart'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };
  var prefixedEventNames = {};
  var style = {};
  if (ExecutionEnvironment.canUseDOM) {
    style = document.createElement('div').style;
    if (!('AnimationEvent' in window)) {
      delete vendorPrefixes.animationend.animation;
      delete vendorPrefixes.animationiteration.animation;
      delete vendorPrefixes.animationstart.animation;
    }
    if (!('TransitionEvent' in window)) {
      delete vendorPrefixes.transitionend.transition;
    }
  }
  function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) {
      return prefixedEventNames[eventName];
    } else if (!vendorPrefixes[eventName]) {
      return eventName;
    }
    var prefixMap = vendorPrefixes[eventName];
    for (var styleProp in prefixMap) {
      if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
        return prefixedEventNames[eventName] = prefixMap[styleProp];
      }
    }
    return '';
  }
  module.exports = getVendorPrefixedEventName;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/isEventSupported.js", ["npm:fbjs@0.8.3/lib/ExecutionEnvironment.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
  var useHasFeature;
  if (ExecutionEnvironment.canUseDOM) {
    useHasFeature = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature('', '') !== true;
  }
  function isEventSupported(eventNameSuffix, capture) {
    if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
      return false;
    }
    var eventName = 'on' + eventNameSuffix;
    var isSupported = eventName in document;
    if (!isSupported) {
      var element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }
    if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
      isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    }
    return isSupported;
  }
  module.exports = isEventSupported;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactBrowserEventEmitter.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/EventConstants.js", "npm:react@15.1.0/lib/EventPluginRegistry.js", "npm:react@15.1.0/lib/ReactEventEmitterMixin.js", "npm:react@15.1.0/lib/ViewportMetrics.js", "npm:react@15.1.0/lib/getVendorPrefixedEventName.js", "npm:react@15.1.0/lib/isEventSupported.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var EventConstants = $__require('npm:react@15.1.0/lib/EventConstants.js');
    var EventPluginRegistry = $__require('npm:react@15.1.0/lib/EventPluginRegistry.js');
    var ReactEventEmitterMixin = $__require('npm:react@15.1.0/lib/ReactEventEmitterMixin.js');
    var ViewportMetrics = $__require('npm:react@15.1.0/lib/ViewportMetrics.js');
    var getVendorPrefixedEventName = $__require('npm:react@15.1.0/lib/getVendorPrefixedEventName.js');
    var isEventSupported = $__require('npm:react@15.1.0/lib/isEventSupported.js');
    var hasEventPageXY;
    var alreadyListeningTo = {};
    var isMonitoringScrollValue = false;
    var reactTopListenersCounter = 0;
    var topEventMapping = {
      topAbort: 'abort',
      topAnimationEnd: getVendorPrefixedEventName('animationend') || 'animationend',
      topAnimationIteration: getVendorPrefixedEventName('animationiteration') || 'animationiteration',
      topAnimationStart: getVendorPrefixedEventName('animationstart') || 'animationstart',
      topBlur: 'blur',
      topCanPlay: 'canplay',
      topCanPlayThrough: 'canplaythrough',
      topChange: 'change',
      topClick: 'click',
      topCompositionEnd: 'compositionend',
      topCompositionStart: 'compositionstart',
      topCompositionUpdate: 'compositionupdate',
      topContextMenu: 'contextmenu',
      topCopy: 'copy',
      topCut: 'cut',
      topDoubleClick: 'dblclick',
      topDrag: 'drag',
      topDragEnd: 'dragend',
      topDragEnter: 'dragenter',
      topDragExit: 'dragexit',
      topDragLeave: 'dragleave',
      topDragOver: 'dragover',
      topDragStart: 'dragstart',
      topDrop: 'drop',
      topDurationChange: 'durationchange',
      topEmptied: 'emptied',
      topEncrypted: 'encrypted',
      topEnded: 'ended',
      topError: 'error',
      topFocus: 'focus',
      topInput: 'input',
      topKeyDown: 'keydown',
      topKeyPress: 'keypress',
      topKeyUp: 'keyup',
      topLoadedData: 'loadeddata',
      topLoadedMetadata: 'loadedmetadata',
      topLoadStart: 'loadstart',
      topMouseDown: 'mousedown',
      topMouseMove: 'mousemove',
      topMouseOut: 'mouseout',
      topMouseOver: 'mouseover',
      topMouseUp: 'mouseup',
      topPaste: 'paste',
      topPause: 'pause',
      topPlay: 'play',
      topPlaying: 'playing',
      topProgress: 'progress',
      topRateChange: 'ratechange',
      topScroll: 'scroll',
      topSeeked: 'seeked',
      topSeeking: 'seeking',
      topSelectionChange: 'selectionchange',
      topStalled: 'stalled',
      topSuspend: 'suspend',
      topTextInput: 'textInput',
      topTimeUpdate: 'timeupdate',
      topTouchCancel: 'touchcancel',
      topTouchEnd: 'touchend',
      topTouchMove: 'touchmove',
      topTouchStart: 'touchstart',
      topTransitionEnd: getVendorPrefixedEventName('transitionend') || 'transitionend',
      topVolumeChange: 'volumechange',
      topWaiting: 'waiting',
      topWheel: 'wheel'
    };
    var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);
    function getListeningForDocument(mountAt) {
      if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
        mountAt[topListenersIDKey] = reactTopListenersCounter++;
        alreadyListeningTo[mountAt[topListenersIDKey]] = {};
      }
      return alreadyListeningTo[mountAt[topListenersIDKey]];
    }
    var ReactBrowserEventEmitter = _assign({}, ReactEventEmitterMixin, {
      ReactEventListener: null,
      injection: {injectReactEventListener: function(ReactEventListener) {
          ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
          ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
        }},
      setEnabled: function(enabled) {
        if (ReactBrowserEventEmitter.ReactEventListener) {
          ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
        }
      },
      isEnabled: function() {
        return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
      },
      listenTo: function(registrationName, contentDocumentHandle) {
        var mountAt = contentDocumentHandle;
        var isListening = getListeningForDocument(mountAt);
        var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];
        var topLevelTypes = EventConstants.topLevelTypes;
        for (var i = 0; i < dependencies.length; i++) {
          var dependency = dependencies[i];
          if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
            if (dependency === topLevelTypes.topWheel) {
              if (isEventSupported('wheel')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
              } else if (isEventSupported('mousewheel')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
              } else {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
              }
            } else if (dependency === topLevelTypes.topScroll) {
              if (isEventSupported('scroll', true)) {
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
              } else {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
              }
            } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {
              if (isEventSupported('focus', true)) {
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
              } else if (isEventSupported('focusin')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
              }
              isListening[topLevelTypes.topBlur] = true;
              isListening[topLevelTypes.topFocus] = true;
            } else if (topEventMapping.hasOwnProperty(dependency)) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
            }
            isListening[dependency] = true;
          }
        }
      },
      trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
        return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
      },
      trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
        return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
      },
      ensureScrollValueMonitoring: function() {
        if (hasEventPageXY === undefined) {
          hasEventPageXY = document.createEvent && 'pageX' in document.createEvent('MouseEvent');
        }
        if (!hasEventPageXY && !isMonitoringScrollValue) {
          var refresh = ViewportMetrics.refreshScrollValues;
          ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
          isMonitoringScrollValue = true;
        }
      }
    });
    module.exports = ReactBrowserEventEmitter;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/DOMProperty.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    function checkMask(value, bitmask) {
      return (value & bitmask) === bitmask;
    }
    var DOMPropertyInjection = {
      MUST_USE_PROPERTY: 0x1,
      HAS_SIDE_EFFECTS: 0x2,
      HAS_BOOLEAN_VALUE: 0x4,
      HAS_NUMERIC_VALUE: 0x8,
      HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
      HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
      injectDOMPropertyConfig: function(domPropertyConfig) {
        var Injection = DOMPropertyInjection;
        var Properties = domPropertyConfig.Properties || {};
        var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
        var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
        var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
        var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
        if (domPropertyConfig.isCustomAttribute) {
          DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
        }
        for (var propName in Properties) {
          !!DOMProperty.properties.hasOwnProperty(propName) ? "production" !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(false) : void 0;
          var lowerCased = propName.toLowerCase();
          var propConfig = Properties[propName];
          var propertyInfo = {
            attributeName: lowerCased,
            attributeNamespace: null,
            propertyName: propName,
            mutationMethod: null,
            mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
            hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS),
            hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
            hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
            hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
            hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
          };
          !(propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects) ? "production" !== 'production' ? invariant(false, 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(false) : void 0;
          !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? "production" !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(false) : void 0;
          if ("production" !== 'production') {
            DOMProperty.getPossibleStandardName[lowerCased] = propName;
          }
          if (DOMAttributeNames.hasOwnProperty(propName)) {
            var attributeName = DOMAttributeNames[propName];
            propertyInfo.attributeName = attributeName;
            if ("production" !== 'production') {
              DOMProperty.getPossibleStandardName[attributeName] = propName;
            }
          }
          if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
            propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
          }
          if (DOMPropertyNames.hasOwnProperty(propName)) {
            propertyInfo.propertyName = DOMPropertyNames[propName];
          }
          if (DOMMutationMethods.hasOwnProperty(propName)) {
            propertyInfo.mutationMethod = DOMMutationMethods[propName];
          }
          DOMProperty.properties[propName] = propertyInfo;
        }
      }
    };
    var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
    var DOMProperty = {
      ID_ATTRIBUTE_NAME: 'data-reactid',
      ROOT_ATTRIBUTE_NAME: 'data-reactroot',
      ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
      ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\uB7\\u0300-\\u036F\\u203F-\\u2040',
      properties: {},
      getPossibleStandardName: "production" !== 'production' ? {} : null,
      _isCustomAttributeFunctions: [],
      isCustomAttribute: function(attributeName) {
        for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
          var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
          if (isCustomAttributeFn(attributeName)) {
            return true;
          }
        }
        return false;
      },
      injection: DOMPropertyInjection
    };
    module.exports = DOMProperty;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMComponentFlags.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMComponentFlags = {hasCachedChildNodes: 1 << 0};
  module.exports = ReactDOMComponentFlags;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMComponentTree.js", ["npm:react@15.1.0/lib/DOMProperty.js", "npm:react@15.1.0/lib/ReactDOMComponentFlags.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var DOMProperty = $__require('npm:react@15.1.0/lib/DOMProperty.js');
    var ReactDOMComponentFlags = $__require('npm:react@15.1.0/lib/ReactDOMComponentFlags.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
    var Flags = ReactDOMComponentFlags;
    var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);
    function getRenderedNativeOrTextFromComponent(component) {
      var rendered;
      while (rendered = component._renderedComponent) {
        component = rendered;
      }
      return component;
    }
    function precacheNode(inst, node) {
      var nativeInst = getRenderedNativeOrTextFromComponent(inst);
      nativeInst._nativeNode = node;
      node[internalInstanceKey] = nativeInst;
    }
    function uncacheNode(inst) {
      var node = inst._nativeNode;
      if (node) {
        delete node[internalInstanceKey];
        inst._nativeNode = null;
      }
    }
    function precacheChildNodes(inst, node) {
      if (inst._flags & Flags.hasCachedChildNodes) {
        return;
      }
      var children = inst._renderedChildren;
      var childNode = node.firstChild;
      outer: for (var name in children) {
        if (!children.hasOwnProperty(name)) {
          continue;
        }
        var childInst = children[name];
        var childID = getRenderedNativeOrTextFromComponent(childInst)._domID;
        if (childID == null) {
          continue;
        }
        for (; childNode !== null; childNode = childNode.nextSibling) {
          if (childNode.nodeType === 1 && childNode.getAttribute(ATTR_NAME) === String(childID) || childNode.nodeType === 8 && childNode.nodeValue === ' react-text: ' + childID + ' ' || childNode.nodeType === 8 && childNode.nodeValue === ' react-empty: ' + childID + ' ') {
            precacheNode(childInst, childNode);
            continue outer;
          }
        }
        !false ? "production" !== 'production' ? invariant(false, 'Unable to find element with ID %s.', childID) : invariant(false) : void 0;
      }
      inst._flags |= Flags.hasCachedChildNodes;
    }
    function getClosestInstanceFromNode(node) {
      if (node[internalInstanceKey]) {
        return node[internalInstanceKey];
      }
      var parents = [];
      while (!node[internalInstanceKey]) {
        parents.push(node);
        if (node.parentNode) {
          node = node.parentNode;
        } else {
          return null;
        }
      }
      var closest;
      var inst;
      for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
        closest = inst;
        if (parents.length) {
          precacheChildNodes(inst, node);
        }
      }
      return closest;
    }
    function getInstanceFromNode(node) {
      var inst = getClosestInstanceFromNode(node);
      if (inst != null && inst._nativeNode === node) {
        return inst;
      } else {
        return null;
      }
    }
    function getNodeFromInstance(inst) {
      !(inst._nativeNode !== undefined) ? "production" !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : invariant(false) : void 0;
      if (inst._nativeNode) {
        return inst._nativeNode;
      }
      var parents = [];
      while (!inst._nativeNode) {
        parents.push(inst);
        !inst._nativeParent ? "production" !== 'production' ? invariant(false, 'React DOM tree root should always have a node reference.') : invariant(false) : void 0;
        inst = inst._nativeParent;
      }
      for (; parents.length; inst = parents.pop()) {
        precacheChildNodes(inst, inst._nativeNode);
      }
      return inst._nativeNode;
    }
    var ReactDOMComponentTree = {
      getClosestInstanceFromNode: getClosestInstanceFromNode,
      getInstanceFromNode: getInstanceFromNode,
      getNodeFromInstance: getNodeFromInstance,
      precacheChildNodes: precacheChildNodes,
      precacheNode: precacheNode,
      uncacheNode: uncacheNode
    };
    module.exports = ReactDOMComponentTree;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/validateDOMNesting.js", ["npm:object-assign@4.1.0.js", "npm:fbjs@0.8.3/lib/emptyFunction.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var validateDOMNesting = emptyFunction;
    if ("production" !== 'production') {
      var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];
      var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template', 'foreignObject', 'desc', 'title'];
      var buttonScopeTags = inScopeTags.concat(['button']);
      var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];
      var emptyAncestorInfo = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      var updatedAncestorInfo = function(oldInfo, tag, instance) {
        var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
        var info = {
          tag: tag,
          instance: instance
        };
        if (inScopeTags.indexOf(tag) !== -1) {
          ancestorInfo.aTagInScope = null;
          ancestorInfo.buttonTagInScope = null;
          ancestorInfo.nobrTagInScope = null;
        }
        if (buttonScopeTags.indexOf(tag) !== -1) {
          ancestorInfo.pTagInButtonScope = null;
        }
        if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
          ancestorInfo.listItemTagAutoclosing = null;
          ancestorInfo.dlItemTagAutoclosing = null;
        }
        ancestorInfo.current = info;
        if (tag === 'form') {
          ancestorInfo.formTag = info;
        }
        if (tag === 'a') {
          ancestorInfo.aTagInScope = info;
        }
        if (tag === 'button') {
          ancestorInfo.buttonTagInScope = info;
        }
        if (tag === 'nobr') {
          ancestorInfo.nobrTagInScope = info;
        }
        if (tag === 'p') {
          ancestorInfo.pTagInButtonScope = info;
        }
        if (tag === 'li') {
          ancestorInfo.listItemTagAutoclosing = info;
        }
        if (tag === 'dd' || tag === 'dt') {
          ancestorInfo.dlItemTagAutoclosing = info;
        }
        return ancestorInfo;
      };
      var isTagValidWithParent = function(tag, parentTag) {
        switch (parentTag) {
          case 'select':
            return tag === 'option' || tag === 'optgroup' || tag === '#text';
          case 'optgroup':
            return tag === 'option' || tag === '#text';
          case 'option':
            return tag === '#text';
          case 'tr':
            return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
          case 'tbody':
          case 'thead':
          case 'tfoot':
            return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
          case 'colgroup':
            return tag === 'col' || tag === 'template';
          case 'table':
            return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
          case 'head':
            return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
          case 'html':
            return tag === 'head' || tag === 'body';
          case '#document':
            return tag === 'html';
        }
        switch (tag) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';
          case 'rp':
          case 'rt':
            return impliedEndTags.indexOf(parentTag) === -1;
          case 'body':
          case 'caption':
          case 'col':
          case 'colgroup':
          case 'frame':
          case 'head':
          case 'html':
          case 'tbody':
          case 'td':
          case 'tfoot':
          case 'th':
          case 'thead':
          case 'tr':
            return parentTag == null;
        }
        return true;
      };
      var findInvalidAncestorForTag = function(tag, ancestorInfo) {
        switch (tag) {
          case 'address':
          case 'article':
          case 'aside':
          case 'blockquote':
          case 'center':
          case 'details':
          case 'dialog':
          case 'dir':
          case 'div':
          case 'dl':
          case 'fieldset':
          case 'figcaption':
          case 'figure':
          case 'footer':
          case 'header':
          case 'hgroup':
          case 'main':
          case 'menu':
          case 'nav':
          case 'ol':
          case 'p':
          case 'section':
          case 'summary':
          case 'ul':
          case 'pre':
          case 'listing':
          case 'table':
          case 'hr':
          case 'xmp':
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return ancestorInfo.pTagInButtonScope;
          case 'form':
            return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
          case 'li':
            return ancestorInfo.listItemTagAutoclosing;
          case 'dd':
          case 'dt':
            return ancestorInfo.dlItemTagAutoclosing;
          case 'button':
            return ancestorInfo.buttonTagInScope;
          case 'a':
            return ancestorInfo.aTagInScope;
          case 'nobr':
            return ancestorInfo.nobrTagInScope;
        }
        return null;
      };
      var findOwnerStack = function(instance) {
        if (!instance) {
          return [];
        }
        var stack = [];
        do {
          stack.push(instance);
        } while (instance = instance._currentElement._owner);
        stack.reverse();
        return stack;
      };
      var didWarn = {};
      validateDOMNesting = function(childTag, childInstance, ancestorInfo) {
        ancestorInfo = ancestorInfo || emptyAncestorInfo;
        var parentInfo = ancestorInfo.current;
        var parentTag = parentInfo && parentInfo.tag;
        var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
        var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
        var problematic = invalidParent || invalidAncestor;
        if (problematic) {
          var ancestorTag = problematic.tag;
          var ancestorInstance = problematic.instance;
          var childOwner = childInstance && childInstance._currentElement._owner;
          var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;
          var childOwners = findOwnerStack(childOwner);
          var ancestorOwners = findOwnerStack(ancestorOwner);
          var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
          var i;
          var deepestCommon = -1;
          for (i = 0; i < minStackLen; i++) {
            if (childOwners[i] === ancestorOwners[i]) {
              deepestCommon = i;
            } else {
              break;
            }
          }
          var UNKNOWN = '(unknown)';
          var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function(inst) {
            return inst.getName() || UNKNOWN;
          });
          var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function(inst) {
            return inst.getName() || UNKNOWN;
          });
          var ownerInfo = [].concat(deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag, invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');
          var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
          if (didWarn[warnKey]) {
            return;
          }
          didWarn[warnKey] = true;
          var tagDisplayName = childTag;
          if (childTag !== '#text') {
            tagDisplayName = '<' + childTag + '>';
          }
          if (invalidParent) {
            var info = '';
            if (ancestorTag === 'table' && childTag === 'tr') {
              info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
            }
            "production" !== 'production' ? warning(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>. ' + 'See %s.%s', tagDisplayName, ancestorTag, ownerInfo, info) : void 0;
          } else {
            "production" !== 'production' ? warning(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>. See %s.', tagDisplayName, ancestorTag, ownerInfo) : void 0;
          }
        }
      };
      validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;
      validateDOMNesting.isTagValidInContext = function(tag, ancestorInfo) {
        ancestorInfo = ancestorInfo || emptyAncestorInfo;
        var parentInfo = ancestorInfo.current;
        var parentTag = parentInfo && parentInfo.tag;
        return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
      };
    }
    module.exports = validateDOMNesting;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMContainerInfo.js", ["npm:react@15.1.0/lib/validateDOMNesting.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var validateDOMNesting = $__require('npm:react@15.1.0/lib/validateDOMNesting.js');
    var DOC_NODE_TYPE = 9;
    function ReactDOMContainerInfo(topLevelWrapper, node) {
      var info = {
        _topLevelWrapper: topLevelWrapper,
        _idCounter: 1,
        _ownerDocument: node ? node.nodeType === DOC_NODE_TYPE ? node : node.ownerDocument : null,
        _node: node,
        _tag: node ? node.nodeName.toLowerCase() : null,
        _namespaceURI: node ? node.namespaceURI : null
      };
      if ("production" !== 'production') {
        info._ancestorInfo = node ? validateDOMNesting.updatedAncestorInfo(null, info._tag, null) : null;
      }
      return info;
    }
    module.exports = ReactDOMContainerInfo;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMFeatureFlags.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactDOMFeatureFlags = {useCreateElement: true};
  module.exports = ReactDOMFeatureFlags;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/adler32.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var MOD = 65521;
  function adler32(data) {
    var a = 1;
    var b = 0;
    var i = 0;
    var l = data.length;
    var m = l & ~0x3;
    while (i < m) {
      var n = Math.min(i + 4096, m);
      for (; i < n; i += 4) {
        b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
      }
      a %= MOD;
      b %= MOD;
    }
    for (; i < l; i++) {
      b += a += data.charCodeAt(i);
    }
    a %= MOD;
    b %= MOD;
    return a | b << 16;
  }
  module.exports = adler32;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactMarkupChecksum.js", ["npm:react@15.1.0/lib/adler32.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var adler32 = $__require('npm:react@15.1.0/lib/adler32.js');
  var TAG_END = /\/?>/;
  var COMMENT_START = /^<\!\-\-/;
  var ReactMarkupChecksum = {
    CHECKSUM_ATTR_NAME: 'data-react-checksum',
    addChecksumToMarkup: function(markup) {
      var checksum = adler32(markup);
      if (COMMENT_START.test(markup)) {
        return markup;
      } else {
        return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
      }
    },
    canReuseMarkup: function(markup, element) {
      var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
      existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
      var markupChecksum = adler32(markup);
      return markupChecksum === existingChecksum;
    }
  };
  module.exports = ReactMarkupChecksum;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactComponentEnvironment.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var injected = false;
    var ReactComponentEnvironment = {
      unmountIDFromEnvironment: null,
      replaceNodeWithMarkup: null,
      processChildrenUpdates: null,
      injection: {injectEnvironment: function(environment) {
          !!injected ? "production" !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(false) : void 0;
          ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
          ReactComponentEnvironment.replaceNodeWithMarkup = environment.replaceNodeWithMarkup;
          ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
          injected = true;
        }}
    };
    module.exports = ReactComponentEnvironment;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactErrorUtils.js", ["github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var caughtError = null;
    function invokeGuardedCallback(name, func, a, b) {
      try {
        return func(a, b);
      } catch (x) {
        if (caughtError === null) {
          caughtError = x;
        }
        return undefined;
      }
    }
    var ReactErrorUtils = {
      invokeGuardedCallback: invokeGuardedCallback,
      invokeGuardedCallbackWithCatch: invokeGuardedCallback,
      rethrowCaughtError: function() {
        if (caughtError) {
          var error = caughtError;
          caughtError = null;
          throw error;
        }
      }
    };
    if ("production" !== 'production') {
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
        var fakeNode = document.createElement('react');
        ReactErrorUtils.invokeGuardedCallback = function(name, func, a, b) {
          var boundFunc = func.bind(null, a, b);
          var evtType = 'react-' + name;
          fakeNode.addEventListener(evtType, boundFunc, false);
          var evt = document.createEvent('Event');
          evt.initEvent(evtType, false, false);
          fakeNode.dispatchEvent(evt);
          fakeNode.removeEventListener(evtType, boundFunc, false);
        };
      }
    }
    module.exports = ReactErrorUtils;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactNodeTypes.js", ["npm:react@15.1.0/lib/ReactElement.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var ReactNodeTypes = {
      NATIVE: 0,
      COMPOSITE: 1,
      EMPTY: 2,
      getType: function(node) {
        if (node === null || node === false) {
          return ReactNodeTypes.EMPTY;
        } else if (ReactElement.isValidElement(node)) {
          if (typeof node.type === 'function') {
            return ReactNodeTypes.COMPOSITE;
          } else {
            return ReactNodeTypes.NATIVE;
          }
        }
        !false ? "production" !== 'production' ? invariant(false, 'Unexpected node: %s', node) : invariant(false) : void 0;
      }
    };
    module.exports = ReactNodeTypes;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactInstanceMap.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactInstanceMap = {
    remove: function(key) {
      key._reactInternalInstance = undefined;
    },
    get: function(key) {
      return key._reactInternalInstance;
    },
    has: function(key) {
      return key._reactInternalInstance !== undefined;
    },
    set: function(key, value) {
      key._reactInternalInstance = value;
    }
  };
  module.exports = ReactInstanceMap;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/CallbackQueue.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/PooledClass.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var PooledClass = $__require('npm:react@15.1.0/lib/PooledClass.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    function CallbackQueue() {
      this._callbacks = null;
      this._contexts = null;
    }
    _assign(CallbackQueue.prototype, {
      enqueue: function(callback, context) {
        this._callbacks = this._callbacks || [];
        this._contexts = this._contexts || [];
        this._callbacks.push(callback);
        this._contexts.push(context);
      },
      notifyAll: function() {
        var callbacks = this._callbacks;
        var contexts = this._contexts;
        if (callbacks) {
          !(callbacks.length === contexts.length) ? "production" !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : invariant(false) : void 0;
          this._callbacks = null;
          this._contexts = null;
          for (var i = 0; i < callbacks.length; i++) {
            callbacks[i].call(contexts[i]);
          }
          callbacks.length = 0;
          contexts.length = 0;
        }
      },
      checkpoint: function() {
        return this._callbacks ? this._callbacks.length : 0;
      },
      rollback: function(len) {
        if (this._callbacks) {
          this._callbacks.length = len;
          this._contexts.length = len;
        }
      },
      reset: function() {
        this._callbacks = null;
        this._contexts = null;
      },
      destructor: function() {
        this.reset();
      }
    });
    PooledClass.addPoolingTo(CallbackQueue);
    module.exports = CallbackQueue;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactFeatureFlags.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactFeatureFlags = {logTopLevelRenders: false};
  module.exports = ReactFeatureFlags;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactOwner.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var ReactOwner = {
      isValidOwner: function(object) {
        return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
      },
      addComponentAsRefTo: function(component, ref, owner) {
        !ReactOwner.isValidOwner(owner) ? "production" !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might ' + 'be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : void 0;
        owner.attachRef(ref, component);
      },
      removeComponentAsRefFrom: function(component, ref, owner) {
        !ReactOwner.isValidOwner(owner) ? "production" !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might ' + 'be removing a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : void 0;
        var ownerPublicInstance = owner.getPublicInstance();
        if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
          owner.detachRef(ref);
        }
      }
    };
    module.exports = ReactOwner;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactRef.js", ["npm:react@15.1.0/lib/ReactOwner.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactOwner = $__require('npm:react@15.1.0/lib/ReactOwner.js');
    var ReactRef = {};
    function attachRef(ref, component, owner) {
      if (typeof ref === 'function') {
        ref(component.getPublicInstance());
      } else {
        ReactOwner.addComponentAsRefTo(component, ref, owner);
      }
    }
    function detachRef(ref, component, owner) {
      if (typeof ref === 'function') {
        ref(null);
      } else {
        ReactOwner.removeComponentAsRefFrom(component, ref, owner);
      }
    }
    ReactRef.attachRefs = function(instance, element) {
      if (element === null || element === false) {
        return;
      }
      var ref = element.ref;
      if (ref != null) {
        attachRef(ref, instance, element._owner);
      }
    };
    ReactRef.shouldUpdateRefs = function(prevElement, nextElement) {
      var prevEmpty = prevElement === null || prevElement === false;
      var nextEmpty = nextElement === null || nextElement === false;
      return (prevEmpty || nextEmpty || nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref);
    };
    ReactRef.detachRefs = function(instance, element) {
      if (element === null || element === false) {
        return;
      }
      var ref = element.ref;
      if (ref != null) {
        detachRef(ref, instance, element._owner);
      }
    };
    module.exports = ReactRef;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactReconciler.js", ["npm:react@15.1.0/lib/ReactRef.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactRef = $__require('npm:react@15.1.0/lib/ReactRef.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    function attachRefs() {
      ReactRef.attachRefs(this, this._currentElement);
    }
    var ReactReconciler = {
      mountComponent: function(internalInstance, transaction, nativeParent, nativeContainerInfo, context) {
        if ("production" !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onBeginReconcilerTimer(internalInstance._debugID, 'mountComponent');
          }
        }
        var markup = internalInstance.mountComponent(transaction, nativeParent, nativeContainerInfo, context);
        if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
          transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
        }
        if ("production" !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onEndReconcilerTimer(internalInstance._debugID, 'mountComponent');
            ReactInstrumentation.debugTool.onMountComponent(internalInstance._debugID);
          }
        }
        return markup;
      },
      getNativeNode: function(internalInstance) {
        return internalInstance.getNativeNode();
      },
      unmountComponent: function(internalInstance, safely) {
        if ("production" !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onBeginReconcilerTimer(internalInstance._debugID, 'unmountComponent');
          }
        }
        ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
        internalInstance.unmountComponent(safely);
        if ("production" !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onEndReconcilerTimer(internalInstance._debugID, 'unmountComponent');
            ReactInstrumentation.debugTool.onUnmountComponent(internalInstance._debugID);
          }
        }
      },
      receiveComponent: function(internalInstance, nextElement, transaction, context) {
        var prevElement = internalInstance._currentElement;
        if (nextElement === prevElement && context === internalInstance._context) {
          return;
        }
        if ("production" !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onBeginReconcilerTimer(internalInstance._debugID, 'receiveComponent');
          }
        }
        var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);
        if (refsChanged) {
          ReactRef.detachRefs(internalInstance, prevElement);
        }
        internalInstance.receiveComponent(nextElement, transaction, context);
        if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
          transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
        }
        if ("production" !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onEndReconcilerTimer(internalInstance._debugID, 'receiveComponent');
            ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
          }
        }
      },
      performUpdateIfNecessary: function(internalInstance, transaction, updateBatchNumber) {
        if (internalInstance._updateBatchNumber !== updateBatchNumber) {
          !(internalInstance._updateBatchNumber == null || internalInstance._updateBatchNumber === updateBatchNumber + 1) ? "production" !== 'production' ? invariant(false, 'performUpdateIfNecessary: Unexpected batch number (current %s, ' + 'pending %s)', updateBatchNumber, internalInstance._updateBatchNumber) : invariant(false) : void 0;
          return;
        }
        if ("production" !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onBeginReconcilerTimer(internalInstance._debugID, 'performUpdateIfNecessary');
          }
        }
        internalInstance.performUpdateIfNecessary(transaction);
        if ("production" !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onEndReconcilerTimer(internalInstance._debugID, 'performUpdateIfNecessary');
            ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
          }
        }
      }
    };
    module.exports = ReactReconciler;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/Transaction.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var Mixin = {
      reinitializeTransaction: function() {
        this.transactionWrappers = this.getTransactionWrappers();
        if (this.wrapperInitData) {
          this.wrapperInitData.length = 0;
        } else {
          this.wrapperInitData = [];
        }
        this._isInTransaction = false;
      },
      _isInTransaction: false,
      getTransactionWrappers: null,
      isInTransaction: function() {
        return !!this._isInTransaction;
      },
      perform: function(method, scope, a, b, c, d, e, f) {
        !!this.isInTransaction() ? "production" !== 'production' ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.') : invariant(false) : void 0;
        var errorThrown;
        var ret;
        try {
          this._isInTransaction = true;
          errorThrown = true;
          this.initializeAll(0);
          ret = method.call(scope, a, b, c, d, e, f);
          errorThrown = false;
        } finally {
          try {
            if (errorThrown) {
              try {
                this.closeAll(0);
              } catch (err) {}
            } else {
              this.closeAll(0);
            }
          } finally {
            this._isInTransaction = false;
          }
        }
        return ret;
      },
      initializeAll: function(startIndex) {
        var transactionWrappers = this.transactionWrappers;
        for (var i = startIndex; i < transactionWrappers.length; i++) {
          var wrapper = transactionWrappers[i];
          try {
            this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
            this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
          } finally {
            if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
              try {
                this.initializeAll(i + 1);
              } catch (err) {}
            }
          }
        }
      },
      closeAll: function(startIndex) {
        !this.isInTransaction() ? "production" !== 'production' ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : invariant(false) : void 0;
        var transactionWrappers = this.transactionWrappers;
        for (var i = startIndex; i < transactionWrappers.length; i++) {
          var wrapper = transactionWrappers[i];
          var initData = this.wrapperInitData[i];
          var errorThrown;
          try {
            errorThrown = true;
            if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
              wrapper.close.call(this, initData);
            }
            errorThrown = false;
          } finally {
            if (errorThrown) {
              try {
                this.closeAll(i + 1);
              } catch (e) {}
            }
          }
        }
        this.wrapperInitData.length = 0;
      }
    };
    var Transaction = {
      Mixin: Mixin,
      OBSERVED_ERROR: {}
    };
    module.exports = Transaction;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactUpdates.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/CallbackQueue.js", "npm:react@15.1.0/lib/PooledClass.js", "npm:react@15.1.0/lib/ReactFeatureFlags.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:react@15.1.0/lib/ReactReconciler.js", "npm:react@15.1.0/lib/Transaction.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var CallbackQueue = $__require('npm:react@15.1.0/lib/CallbackQueue.js');
    var PooledClass = $__require('npm:react@15.1.0/lib/PooledClass.js');
    var ReactFeatureFlags = $__require('npm:react@15.1.0/lib/ReactFeatureFlags.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var ReactReconciler = $__require('npm:react@15.1.0/lib/ReactReconciler.js');
    var Transaction = $__require('npm:react@15.1.0/lib/Transaction.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var dirtyComponents = [];
    var updateBatchNumber = 0;
    var asapCallbackQueue = CallbackQueue.getPooled();
    var asapEnqueued = false;
    var batchingStrategy = null;
    function ensureInjected() {
      !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? "production" !== 'production' ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(false) : void 0;
    }
    var NESTED_UPDATES = {
      initialize: function() {
        this.dirtyComponentsLength = dirtyComponents.length;
      },
      close: function() {
        if (this.dirtyComponentsLength !== dirtyComponents.length) {
          dirtyComponents.splice(0, this.dirtyComponentsLength);
          flushBatchedUpdates();
        } else {
          dirtyComponents.length = 0;
        }
      }
    };
    var UPDATE_QUEUEING = {
      initialize: function() {
        this.callbackQueue.reset();
      },
      close: function() {
        this.callbackQueue.notifyAll();
      }
    };
    var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
    function ReactUpdatesFlushTransaction() {
      this.reinitializeTransaction();
      this.dirtyComponentsLength = null;
      this.callbackQueue = CallbackQueue.getPooled();
      this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(true);
    }
    _assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
      getTransactionWrappers: function() {
        return TRANSACTION_WRAPPERS;
      },
      destructor: function() {
        this.dirtyComponentsLength = null;
        CallbackQueue.release(this.callbackQueue);
        this.callbackQueue = null;
        ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
        this.reconcileTransaction = null;
      },
      perform: function(method, scope, a) {
        return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
      }
    });
    PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
    function batchedUpdates(callback, a, b, c, d, e) {
      ensureInjected();
      batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
    }
    function mountOrderComparator(c1, c2) {
      return c1._mountOrder - c2._mountOrder;
    }
    function runBatchedUpdates(transaction) {
      var len = transaction.dirtyComponentsLength;
      !(len === dirtyComponents.length) ? "production" !== 'production' ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(false) : void 0;
      dirtyComponents.sort(mountOrderComparator);
      updateBatchNumber++;
      for (var i = 0; i < len; i++) {
        var component = dirtyComponents[i];
        var callbacks = component._pendingCallbacks;
        component._pendingCallbacks = null;
        var markerName;
        if (ReactFeatureFlags.logTopLevelRenders) {
          var namedComponent = component;
          if (component._currentElement.props === component._renderedComponent._currentElement) {
            namedComponent = component._renderedComponent;
          }
          markerName = 'React update: ' + namedComponent.getName();
          console.time(markerName);
        }
        ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction, updateBatchNumber);
        if (markerName) {
          console.timeEnd(markerName);
        }
        if (callbacks) {
          for (var j = 0; j < callbacks.length; j++) {
            transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
          }
        }
      }
    }
    var flushBatchedUpdates = function() {
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onBeginFlush();
      }
      while (dirtyComponents.length || asapEnqueued) {
        if (dirtyComponents.length) {
          var transaction = ReactUpdatesFlushTransaction.getPooled();
          transaction.perform(runBatchedUpdates, null, transaction);
          ReactUpdatesFlushTransaction.release(transaction);
        }
        if (asapEnqueued) {
          asapEnqueued = false;
          var queue = asapCallbackQueue;
          asapCallbackQueue = CallbackQueue.getPooled();
          queue.notifyAll();
          CallbackQueue.release(queue);
        }
      }
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onEndFlush();
      }
    };
    function enqueueUpdate(component) {
      ensureInjected();
      if (!batchingStrategy.isBatchingUpdates) {
        batchingStrategy.batchedUpdates(enqueueUpdate, component);
        return;
      }
      dirtyComponents.push(component);
      if (component._updateBatchNumber == null) {
        component._updateBatchNumber = updateBatchNumber + 1;
      }
    }
    function asap(callback, context) {
      !batchingStrategy.isBatchingUpdates ? "production" !== 'production' ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(false) : void 0;
      asapCallbackQueue.enqueue(callback, context);
      asapEnqueued = true;
    }
    var ReactUpdatesInjection = {
      injectReconcileTransaction: function(ReconcileTransaction) {
        !ReconcileTransaction ? "production" !== 'production' ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : invariant(false) : void 0;
        ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
      },
      injectBatchingStrategy: function(_batchingStrategy) {
        !_batchingStrategy ? "production" !== 'production' ? invariant(false, 'ReactUpdates: must provide a batching strategy') : invariant(false) : void 0;
        !(typeof _batchingStrategy.batchedUpdates === 'function') ? "production" !== 'production' ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : invariant(false) : void 0;
        !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? "production" !== 'production' ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(false) : void 0;
        batchingStrategy = _batchingStrategy;
      }
    };
    var ReactUpdates = {
      ReactReconcileTransaction: null,
      batchedUpdates: batchedUpdates,
      enqueueUpdate: enqueueUpdate,
      flushBatchedUpdates: flushBatchedUpdates,
      injection: ReactUpdatesInjection,
      asap: asap
    };
    module.exports = ReactUpdates;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactUpdateQueue.js", ["npm:react@15.1.0/lib/ReactCurrentOwner.js", "npm:react@15.1.0/lib/ReactInstanceMap.js", "npm:react@15.1.0/lib/ReactUpdates.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactCurrentOwner = $__require('npm:react@15.1.0/lib/ReactCurrentOwner.js');
    var ReactInstanceMap = $__require('npm:react@15.1.0/lib/ReactInstanceMap.js');
    var ReactUpdates = $__require('npm:react@15.1.0/lib/ReactUpdates.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    function enqueueUpdate(internalInstance) {
      ReactUpdates.enqueueUpdate(internalInstance);
    }
    function formatUnexpectedArgument(arg) {
      var type = typeof arg;
      if (type !== 'object') {
        return type;
      }
      var displayName = arg.constructor && arg.constructor.name || type;
      var keys = Object.keys(arg);
      if (keys.length > 0 && keys.length < 20) {
        return displayName + ' (keys: ' + keys.join(', ') + ')';
      }
      return displayName;
    }
    function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
      var internalInstance = ReactInstanceMap.get(publicInstance);
      if (!internalInstance) {
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor.displayName) : void 0;
        }
        return null;
      }
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition (such as ' + 'within `render` or another component\'s constructor). Render methods ' + 'should be a pure function of props and state; constructor ' + 'side-effects are an anti-pattern, but can be moved to ' + '`componentWillMount`.', callerName) : void 0;
      }
      return internalInstance;
    }
    var ReactUpdateQueue = {
      isMounted: function(publicInstance) {
        if ("production" !== 'production') {
          var owner = ReactCurrentOwner.current;
          if (owner !== null) {
            "production" !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
            owner._warnedAboutRefsInRender = true;
          }
        }
        var internalInstance = ReactInstanceMap.get(publicInstance);
        if (internalInstance) {
          return !!internalInstance._renderedComponent;
        } else {
          return false;
        }
      },
      enqueueCallback: function(publicInstance, callback, callerName) {
        ReactUpdateQueue.validateCallback(callback, callerName);
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);
        if (!internalInstance) {
          return null;
        }
        if (internalInstance._pendingCallbacks) {
          internalInstance._pendingCallbacks.push(callback);
        } else {
          internalInstance._pendingCallbacks = [callback];
        }
        enqueueUpdate(internalInstance);
      },
      enqueueCallbackInternal: function(internalInstance, callback) {
        if (internalInstance._pendingCallbacks) {
          internalInstance._pendingCallbacks.push(callback);
        } else {
          internalInstance._pendingCallbacks = [callback];
        }
        enqueueUpdate(internalInstance);
      },
      enqueueForceUpdate: function(publicInstance) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');
        if (!internalInstance) {
          return;
        }
        internalInstance._pendingForceUpdate = true;
        enqueueUpdate(internalInstance);
      },
      enqueueReplaceState: function(publicInstance, completeState) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');
        if (!internalInstance) {
          return;
        }
        internalInstance._pendingStateQueue = [completeState];
        internalInstance._pendingReplaceState = true;
        enqueueUpdate(internalInstance);
      },
      enqueueSetState: function(publicInstance, partialState) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
        if (!internalInstance) {
          return;
        }
        var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
        queue.push(partialState);
        enqueueUpdate(internalInstance);
      },
      enqueueElementInternal: function(internalInstance, newElement) {
        internalInstance._pendingElement = newElement;
        enqueueUpdate(internalInstance);
      },
      validateCallback: function(callback, callerName) {
        !(!callback || typeof callback === 'function') ? "production" !== 'production' ? invariant(false, '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, formatUnexpectedArgument(callback)) : invariant(false) : void 0;
      }
    };
    module.exports = ReactUpdateQueue;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactCompositeComponent.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/ReactComponentEnvironment.js", "npm:react@15.1.0/lib/ReactCurrentOwner.js", "npm:react@15.1.0/lib/ReactElement.js", "npm:react@15.1.0/lib/ReactErrorUtils.js", "npm:react@15.1.0/lib/ReactInstanceMap.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:react@15.1.0/lib/ReactNodeTypes.js", "npm:react@15.1.0/lib/ReactPropTypeLocations.js", "npm:react@15.1.0/lib/ReactPropTypeLocationNames.js", "npm:react@15.1.0/lib/ReactReconciler.js", "npm:react@15.1.0/lib/ReactUpdateQueue.js", "npm:fbjs@0.8.3/lib/emptyObject.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:react@15.1.0/lib/shouldUpdateReactComponent.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var ReactComponentEnvironment = $__require('npm:react@15.1.0/lib/ReactComponentEnvironment.js');
    var ReactCurrentOwner = $__require('npm:react@15.1.0/lib/ReactCurrentOwner.js');
    var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
    var ReactErrorUtils = $__require('npm:react@15.1.0/lib/ReactErrorUtils.js');
    var ReactInstanceMap = $__require('npm:react@15.1.0/lib/ReactInstanceMap.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var ReactNodeTypes = $__require('npm:react@15.1.0/lib/ReactNodeTypes.js');
    var ReactPropTypeLocations = $__require('npm:react@15.1.0/lib/ReactPropTypeLocations.js');
    var ReactPropTypeLocationNames = $__require('npm:react@15.1.0/lib/ReactPropTypeLocationNames.js');
    var ReactReconciler = $__require('npm:react@15.1.0/lib/ReactReconciler.js');
    var ReactUpdateQueue = $__require('npm:react@15.1.0/lib/ReactUpdateQueue.js');
    var emptyObject = $__require('npm:fbjs@0.8.3/lib/emptyObject.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var shouldUpdateReactComponent = $__require('npm:react@15.1.0/lib/shouldUpdateReactComponent.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    function getDeclarationErrorAddendum(component) {
      var owner = component._currentElement._owner || null;
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    function StatelessComponent(Component) {}
    StatelessComponent.prototype.render = function() {
      var Component = ReactInstanceMap.get(this)._currentElement.type;
      var element = Component(this.props, this.context, this.updater);
      warnIfInvalidElement(Component, element);
      return element;
    };
    function warnIfInvalidElement(Component, element) {
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(element === null || element === false || ReactElement.isValidElement(element), '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : void 0;
      }
    }
    function invokeComponentDidMountWithTimer() {
      var publicInstance = this._instance;
      if (this._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeginLifeCycleTimer(this._debugID, 'componentDidMount');
      }
      publicInstance.componentDidMount();
      if (this._debugID !== 0) {
        ReactInstrumentation.debugTool.onEndLifeCycleTimer(this._debugID, 'componentDidMount');
      }
    }
    function invokeComponentDidUpdateWithTimer(prevProps, prevState, prevContext) {
      var publicInstance = this._instance;
      if (this._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeginLifeCycleTimer(this._debugID, 'componentDidUpdate');
      }
      publicInstance.componentDidUpdate(prevProps, prevState, prevContext);
      if (this._debugID !== 0) {
        ReactInstrumentation.debugTool.onEndLifeCycleTimer(this._debugID, 'componentDidUpdate');
      }
    }
    function shouldConstruct(Component) {
      return Component.prototype && Component.prototype.isReactComponent;
    }
    var nextMountID = 1;
    var ReactCompositeComponentMixin = {
      construct: function(element) {
        this._currentElement = element;
        this._rootNodeID = null;
        this._instance = null;
        this._nativeParent = null;
        this._nativeContainerInfo = null;
        this._updateBatchNumber = null;
        this._pendingElement = null;
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        this._renderedNodeType = null;
        this._renderedComponent = null;
        this._context = null;
        this._mountOrder = 0;
        this._topLevelWrapper = null;
        this._pendingCallbacks = null;
        this._calledComponentWillUnmount = false;
      },
      mountComponent: function(transaction, nativeParent, nativeContainerInfo, context) {
        this._context = context;
        this._mountOrder = nextMountID++;
        this._nativeParent = nativeParent;
        this._nativeContainerInfo = nativeContainerInfo;
        var publicProps = this._processProps(this._currentElement.props);
        var publicContext = this._processContext(context);
        var Component = this._currentElement.type;
        var inst = this._constructComponent(publicProps, publicContext);
        var renderedElement;
        if (!shouldConstruct(Component) && (inst == null || inst.render == null)) {
          renderedElement = inst;
          warnIfInvalidElement(Component, renderedElement);
          !(inst === null || inst === false || ReactElement.isValidElement(inst)) ? "production" !== 'production' ? invariant(false, '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : invariant(false) : void 0;
          inst = new StatelessComponent(Component);
        }
        if ("production" !== 'production') {
          if (inst.render == null) {
            "production" !== 'production' ? warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', Component.displayName || Component.name || 'Component') : void 0;
          }
          var propsMutated = inst.props !== publicProps;
          var componentName = Component.displayName || Component.name || 'Component';
          "production" !== 'production' ? warning(inst.props === undefined || !propsMutated, '%s(...): When calling super() in `%s`, make sure to pass ' + 'up the same props that your component\'s constructor was passed.', componentName, componentName) : void 0;
        }
        inst.props = publicProps;
        inst.context = publicContext;
        inst.refs = emptyObject;
        inst.updater = ReactUpdateQueue;
        this._instance = inst;
        ReactInstanceMap.set(inst, this);
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : void 0;
          "production" !== 'production' ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : void 0;
          "production" !== 'production' ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : void 0;
          "production" !== 'production' ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : void 0;
          "production" !== 'production' ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : void 0;
          "production" !== 'production' ? warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : void 0;
          "production" !== 'production' ? warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : void 0;
        }
        var initialState = inst.state;
        if (initialState === undefined) {
          inst.state = initialState = null;
        }
        !(typeof initialState === 'object' && !Array.isArray(initialState)) ? "production" !== 'production' ? invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : invariant(false) : void 0;
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        var markup;
        if (inst.unstable_handleError) {
          markup = this.performInitialMountWithErrorHandling(renderedElement, nativeParent, nativeContainerInfo, transaction, context);
        } else {
          markup = this.performInitialMount(renderedElement, nativeParent, nativeContainerInfo, transaction, context);
        }
        if (inst.componentDidMount) {
          if ("production" !== 'production') {
            transaction.getReactMountReady().enqueue(invokeComponentDidMountWithTimer, this);
          } else {
            transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
          }
        }
        return markup;
      },
      _constructComponent: function(publicProps, publicContext) {
        if ("production" !== 'production') {
          ReactCurrentOwner.current = this;
          try {
            return this._constructComponentWithoutOwner(publicProps, publicContext);
          } finally {
            ReactCurrentOwner.current = null;
          }
        } else {
          return this._constructComponentWithoutOwner(publicProps, publicContext);
        }
      },
      _constructComponentWithoutOwner: function(publicProps, publicContext) {
        var Component = this._currentElement.type;
        var instanceOrElement;
        if (shouldConstruct(Component)) {
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onBeginLifeCycleTimer(this._debugID, 'ctor');
            }
          }
          instanceOrElement = new Component(publicProps, publicContext, ReactUpdateQueue);
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onEndLifeCycleTimer(this._debugID, 'ctor');
            }
          }
        } else {
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onBeginLifeCycleTimer(this._debugID, 'render');
            }
          }
          instanceOrElement = Component(publicProps, publicContext, ReactUpdateQueue);
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onEndLifeCycleTimer(this._debugID, 'render');
            }
          }
        }
        return instanceOrElement;
      },
      performInitialMountWithErrorHandling: function(renderedElement, nativeParent, nativeContainerInfo, transaction, context) {
        var markup;
        var checkpoint = transaction.checkpoint();
        try {
          markup = this.performInitialMount(renderedElement, nativeParent, nativeContainerInfo, transaction, context);
        } catch (e) {
          transaction.rollback(checkpoint);
          this._instance.unstable_handleError(e);
          if (this._pendingStateQueue) {
            this._instance.state = this._processPendingState(this._instance.props, this._instance.context);
          }
          checkpoint = transaction.checkpoint();
          this._renderedComponent.unmountComponent(true);
          transaction.rollback(checkpoint);
          markup = this.performInitialMount(renderedElement, nativeParent, nativeContainerInfo, transaction, context);
        }
        return markup;
      },
      performInitialMount: function(renderedElement, nativeParent, nativeContainerInfo, transaction, context) {
        var inst = this._instance;
        if (inst.componentWillMount) {
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onBeginLifeCycleTimer(this._debugID, 'componentWillMount');
            }
          }
          inst.componentWillMount();
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onEndLifeCycleTimer(this._debugID, 'componentWillMount');
            }
          }
          if (this._pendingStateQueue) {
            inst.state = this._processPendingState(inst.props, inst.context);
          }
        }
        if (renderedElement === undefined) {
          renderedElement = this._renderValidatedComponent();
        }
        this._renderedNodeType = ReactNodeTypes.getType(renderedElement);
        this._renderedComponent = this._instantiateReactComponent(renderedElement);
        var markup = ReactReconciler.mountComponent(this._renderedComponent, transaction, nativeParent, nativeContainerInfo, this._processChildContext(context));
        if ("production" !== 'production') {
          if (this._debugID !== 0) {
            ReactInstrumentation.debugTool.onSetChildren(this._debugID, this._renderedComponent._debugID !== 0 ? [this._renderedComponent._debugID] : []);
          }
        }
        return markup;
      },
      getNativeNode: function() {
        return ReactReconciler.getNativeNode(this._renderedComponent);
      },
      unmountComponent: function(safely) {
        if (!this._renderedComponent) {
          return;
        }
        var inst = this._instance;
        if (inst.componentWillUnmount && !inst._calledComponentWillUnmount) {
          inst._calledComponentWillUnmount = true;
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onBeginLifeCycleTimer(this._debugID, 'componentWillUnmount');
            }
          }
          if (safely) {
            var name = this.getName() + '.componentWillUnmount()';
            ReactErrorUtils.invokeGuardedCallback(name, inst.componentWillUnmount.bind(inst));
          } else {
            inst.componentWillUnmount();
          }
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onEndLifeCycleTimer(this._debugID, 'componentWillUnmount');
            }
          }
        }
        if (this._renderedComponent) {
          ReactReconciler.unmountComponent(this._renderedComponent, safely);
          this._renderedNodeType = null;
          this._renderedComponent = null;
          this._instance = null;
        }
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        this._pendingCallbacks = null;
        this._pendingElement = null;
        this._context = null;
        this._rootNodeID = null;
        this._topLevelWrapper = null;
        ReactInstanceMap.remove(inst);
      },
      _maskContext: function(context) {
        var Component = this._currentElement.type;
        var contextTypes = Component.contextTypes;
        if (!contextTypes) {
          return emptyObject;
        }
        var maskedContext = {};
        for (var contextName in contextTypes) {
          maskedContext[contextName] = context[contextName];
        }
        return maskedContext;
      },
      _processContext: function(context) {
        var maskedContext = this._maskContext(context);
        if ("production" !== 'production') {
          var Component = this._currentElement.type;
          if (Component.contextTypes) {
            this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
          }
        }
        return maskedContext;
      },
      _processChildContext: function(currentContext) {
        var Component = this._currentElement.type;
        var inst = this._instance;
        if ("production" !== 'production') {
          ReactInstrumentation.debugTool.onBeginProcessingChildContext();
        }
        var childContext = inst.getChildContext && inst.getChildContext();
        if ("production" !== 'production') {
          ReactInstrumentation.debugTool.onEndProcessingChildContext();
        }
        if (childContext) {
          !(typeof Component.childContextTypes === 'object') ? "production" !== 'production' ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', this.getName() || 'ReactCompositeComponent') : invariant(false) : void 0;
          if ("production" !== 'production') {
            this._checkPropTypes(Component.childContextTypes, childContext, ReactPropTypeLocations.childContext);
          }
          for (var name in childContext) {
            !(name in Component.childContextTypes) ? "production" !== 'production' ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : invariant(false) : void 0;
          }
          return _assign({}, currentContext, childContext);
        }
        return currentContext;
      },
      _processProps: function(newProps) {
        if ("production" !== 'production') {
          var Component = this._currentElement.type;
          if (Component.propTypes) {
            this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
          }
        }
        return newProps;
      },
      _checkPropTypes: function(propTypes, props, location) {
        var componentName = this.getName();
        for (var propName in propTypes) {
          if (propTypes.hasOwnProperty(propName)) {
            var error;
            try {
              !(typeof propTypes[propName] === 'function') ? "production" !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : void 0;
              error = propTypes[propName](props, propName, componentName, location);
            } catch (ex) {
              error = ex;
            }
            if (error instanceof Error) {
              var addendum = getDeclarationErrorAddendum(this);
              if (location === ReactPropTypeLocations.prop) {
                "production" !== 'production' ? warning(false, 'Failed Composite propType: %s%s', error.message, addendum) : void 0;
              } else {
                "production" !== 'production' ? warning(false, 'Failed Context Types: %s%s', error.message, addendum) : void 0;
              }
            }
          }
        }
      },
      receiveComponent: function(nextElement, transaction, nextContext) {
        var prevElement = this._currentElement;
        var prevContext = this._context;
        this._pendingElement = null;
        this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
      },
      performUpdateIfNecessary: function(transaction) {
        if (this._pendingElement != null) {
          ReactReconciler.receiveComponent(this, this._pendingElement, transaction, this._context);
        } else if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
          this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
        } else {
          this._updateBatchNumber = null;
        }
      },
      updateComponent: function(transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
        var inst = this._instance;
        var willReceive = false;
        var nextContext;
        var nextProps;
        if (this._context === nextUnmaskedContext) {
          nextContext = inst.context;
        } else {
          nextContext = this._processContext(nextUnmaskedContext);
          willReceive = true;
        }
        if (prevParentElement === nextParentElement) {
          nextProps = nextParentElement.props;
        } else {
          nextProps = this._processProps(nextParentElement.props);
          willReceive = true;
        }
        if (willReceive && inst.componentWillReceiveProps) {
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onBeginLifeCycleTimer(this._debugID, 'componentWillReceiveProps');
            }
          }
          inst.componentWillReceiveProps(nextProps, nextContext);
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onEndLifeCycleTimer(this._debugID, 'componentWillReceiveProps');
            }
          }
        }
        var nextState = this._processPendingState(nextProps, nextContext);
        var shouldUpdate = true;
        if (!this._pendingForceUpdate && inst.shouldComponentUpdate) {
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onBeginLifeCycleTimer(this._debugID, 'shouldComponentUpdate');
            }
          }
          shouldUpdate = inst.shouldComponentUpdate(nextProps, nextState, nextContext);
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onEndLifeCycleTimer(this._debugID, 'shouldComponentUpdate');
            }
          }
        }
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(shouldUpdate !== undefined, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : void 0;
        }
        this._updateBatchNumber = null;
        if (shouldUpdate) {
          this._pendingForceUpdate = false;
          this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
        } else {
          this._currentElement = nextParentElement;
          this._context = nextUnmaskedContext;
          inst.props = nextProps;
          inst.state = nextState;
          inst.context = nextContext;
        }
      },
      _processPendingState: function(props, context) {
        var inst = this._instance;
        var queue = this._pendingStateQueue;
        var replace = this._pendingReplaceState;
        this._pendingReplaceState = false;
        this._pendingStateQueue = null;
        if (!queue) {
          return inst.state;
        }
        if (replace && queue.length === 1) {
          return queue[0];
        }
        var nextState = _assign({}, replace ? queue[0] : inst.state);
        for (var i = replace ? 1 : 0; i < queue.length; i++) {
          var partial = queue[i];
          _assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
        }
        return nextState;
      },
      _performComponentUpdate: function(nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
        var inst = this._instance;
        var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
        var prevProps;
        var prevState;
        var prevContext;
        if (hasComponentDidUpdate) {
          prevProps = inst.props;
          prevState = inst.state;
          prevContext = inst.context;
        }
        if (inst.componentWillUpdate) {
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onBeginLifeCycleTimer(this._debugID, 'componentWillUpdate');
            }
          }
          inst.componentWillUpdate(nextProps, nextState, nextContext);
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onEndLifeCycleTimer(this._debugID, 'componentWillUpdate');
            }
          }
        }
        this._currentElement = nextElement;
        this._context = unmaskedContext;
        inst.props = nextProps;
        inst.state = nextState;
        inst.context = nextContext;
        this._updateRenderedComponent(transaction, unmaskedContext);
        if (hasComponentDidUpdate) {
          if ("production" !== 'production') {
            transaction.getReactMountReady().enqueue(invokeComponentDidUpdateWithTimer.bind(this, prevProps, prevState, prevContext), this);
          } else {
            transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
          }
        }
      },
      _updateRenderedComponent: function(transaction, context) {
        var prevComponentInstance = this._renderedComponent;
        var prevRenderedElement = prevComponentInstance._currentElement;
        var nextRenderedElement = this._renderValidatedComponent();
        if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
          ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
        } else {
          var oldNativeNode = ReactReconciler.getNativeNode(prevComponentInstance);
          ReactReconciler.unmountComponent(prevComponentInstance, false);
          this._renderedNodeType = ReactNodeTypes.getType(nextRenderedElement);
          this._renderedComponent = this._instantiateReactComponent(nextRenderedElement);
          var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, transaction, this._nativeParent, this._nativeContainerInfo, this._processChildContext(context));
          if ("production" !== 'production') {
            if (this._debugID !== 0) {
              ReactInstrumentation.debugTool.onSetChildren(this._debugID, this._renderedComponent._debugID !== 0 ? [this._renderedComponent._debugID] : []);
            }
          }
          this._replaceNodeWithMarkup(oldNativeNode, nextMarkup, prevComponentInstance);
        }
      },
      _replaceNodeWithMarkup: function(oldNativeNode, nextMarkup, prevInstance) {
        ReactComponentEnvironment.replaceNodeWithMarkup(oldNativeNode, nextMarkup, prevInstance);
      },
      _renderValidatedComponentWithoutOwnerOrContext: function() {
        var inst = this._instance;
        if ("production" !== 'production') {
          if (this._debugID !== 0) {
            ReactInstrumentation.debugTool.onBeginLifeCycleTimer(this._debugID, 'render');
          }
        }
        var renderedComponent = inst.render();
        if ("production" !== 'production') {
          if (this._debugID !== 0) {
            ReactInstrumentation.debugTool.onEndLifeCycleTimer(this._debugID, 'render');
          }
        }
        if ("production" !== 'production') {
          if (renderedComponent === undefined && inst.render._isMockFunction) {
            renderedComponent = null;
          }
        }
        return renderedComponent;
      },
      _renderValidatedComponent: function() {
        var renderedComponent;
        ReactCurrentOwner.current = this;
        try {
          renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
        } finally {
          ReactCurrentOwner.current = null;
        }
        !(renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)) ? "production" !== 'production' ? invariant(false, '%s.render(): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : invariant(false) : void 0;
        return renderedComponent;
      },
      attachRef: function(ref, component) {
        var inst = this.getPublicInstance();
        !(inst != null) ? "production" !== 'production' ? invariant(false, 'Stateless function components cannot have refs.') : invariant(false) : void 0;
        var publicComponentInstance = component.getPublicInstance();
        if ("production" !== 'production') {
          var componentName = component && component.getName ? component.getName() : 'a component';
          "production" !== 'production' ? warning(publicComponentInstance != null, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : void 0;
        }
        var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
        refs[ref] = publicComponentInstance;
      },
      detachRef: function(ref) {
        var refs = this.getPublicInstance().refs;
        delete refs[ref];
      },
      getName: function() {
        var type = this._currentElement.type;
        var constructor = this._instance && this._instance.constructor;
        return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
      },
      getPublicInstance: function() {
        var inst = this._instance;
        if (inst instanceof StatelessComponent) {
          return null;
        }
        return inst;
      },
      _instantiateReactComponent: null
    };
    var ReactCompositeComponent = {Mixin: ReactCompositeComponentMixin};
    module.exports = ReactCompositeComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactEmptyComponent.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var emptyComponentFactory;
  var ReactEmptyComponentInjection = {injectEmptyComponentFactory: function(factory) {
      emptyComponentFactory = factory;
    }};
  var ReactEmptyComponent = {create: function(instantiate) {
      return emptyComponentFactory(instantiate);
    }};
  ReactEmptyComponent.injection = ReactEmptyComponentInjection;
  module.exports = ReactEmptyComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactNativeComponent.js", ["npm:object-assign@4.1.0.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var autoGenerateWrapperClass = null;
    var genericComponentClass = null;
    var tagToComponentClass = {};
    var textComponentClass = null;
    var ReactNativeComponentInjection = {
      injectGenericComponentClass: function(componentClass) {
        genericComponentClass = componentClass;
      },
      injectTextComponentClass: function(componentClass) {
        textComponentClass = componentClass;
      },
      injectComponentClasses: function(componentClasses) {
        _assign(tagToComponentClass, componentClasses);
      }
    };
    function getComponentClassForElement(element) {
      if (typeof element.type === 'function') {
        return element.type;
      }
      var tag = element.type;
      var componentClass = tagToComponentClass[tag];
      if (componentClass == null) {
        tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
      }
      return componentClass;
    }
    function createInternalComponent(element) {
      !genericComponentClass ? "production" !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : invariant(false) : void 0;
      return new genericComponentClass(element);
    }
    function createInstanceForText(text) {
      return new textComponentClass(text);
    }
    function isTextComponent(component) {
      return component instanceof textComponentClass;
    }
    var ReactNativeComponent = {
      getComponentClassForElement: getComponentClassForElement,
      createInternalComponent: createInternalComponent,
      createInstanceForText: createInstanceForText,
      isTextComponent: isTextComponent,
      injection: ReactNativeComponentInjection
    };
    module.exports = ReactNativeComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/instantiateReactComponent.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/ReactCompositeComponent.js", "npm:react@15.1.0/lib/ReactEmptyComponent.js", "npm:react@15.1.0/lib/ReactNativeComponent.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var ReactCompositeComponent = $__require('npm:react@15.1.0/lib/ReactCompositeComponent.js');
    var ReactEmptyComponent = $__require('npm:react@15.1.0/lib/ReactEmptyComponent.js');
    var ReactNativeComponent = $__require('npm:react@15.1.0/lib/ReactNativeComponent.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var ReactCompositeComponentWrapper = function(element) {
      this.construct(element);
    };
    _assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {_instantiateReactComponent: instantiateReactComponent});
    function getDeclarationErrorAddendum(owner) {
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    function getDisplayName(instance) {
      var element = instance._currentElement;
      if (element == null) {
        return '#empty';
      } else if (typeof element === 'string' || typeof element === 'number') {
        return '#text';
      } else if (typeof element.type === 'string') {
        return element.type;
      } else if (instance.getName) {
        return instance.getName() || 'Unknown';
      } else {
        return element.type.displayName || element.type.name || 'Unknown';
      }
    }
    function isInternalComponentType(type) {
      return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
    }
    var nextDebugID = 1;
    function instantiateReactComponent(node) {
      var instance;
      var isEmpty = node === null || node === false;
      if (isEmpty) {
        instance = ReactEmptyComponent.create(instantiateReactComponent);
      } else if (typeof node === 'object') {
        var element = node;
        !(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? "production" !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) ' + 'or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : invariant(false) : void 0;
        if (typeof element.type === 'string') {
          instance = ReactNativeComponent.createInternalComponent(element);
        } else if (isInternalComponentType(element.type)) {
          instance = new element.type(element);
        } else {
          instance = new ReactCompositeComponentWrapper(element);
        }
      } else if (typeof node === 'string' || typeof node === 'number') {
        instance = ReactNativeComponent.createInstanceForText(node);
      } else {
        !false ? "production" !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : invariant(false) : void 0;
      }
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.getNativeNode === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : void 0;
      }
      instance._mountIndex = 0;
      instance._mountImage = null;
      if ("production" !== 'production') {
        instance._isOwnerNecessary = false;
        instance._warnedAboutRefsInRender = false;
      }
      if ("production" !== 'production') {
        var debugID = isEmpty ? 0 : nextDebugID++;
        instance._debugID = debugID;
        if (debugID !== 0) {
          var displayName = getDisplayName(instance);
          ReactInstrumentation.debugTool.onSetDisplayName(debugID, displayName);
          var owner = node && node._owner;
          if (owner) {
            ReactInstrumentation.debugTool.onSetOwner(debugID, owner._debugID);
          }
        }
      }
      if ("production" !== 'production') {
        if (Object.preventExtensions) {
          Object.preventExtensions(instance);
        }
      }
      return instance;
    }
    module.exports = instantiateReactComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/createMicrosoftUnsafeLocalFunction.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var createMicrosoftUnsafeLocalFunction = function(func) {
    if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
      return function(arg0, arg1, arg2, arg3) {
        MSApp.execUnsafeLocalFunction(function() {
          return func(arg0, arg1, arg2, arg3);
        });
      };
    } else {
      return func;
    }
  };
  module.exports = createMicrosoftUnsafeLocalFunction;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/setInnerHTML.js", ["npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:react@15.1.0/lib/createMicrosoftUnsafeLocalFunction.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
    var WHITESPACE_TEST = /^[ \r\n\t\f]/;
    var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
    var createMicrosoftUnsafeLocalFunction = $__require('npm:react@15.1.0/lib/createMicrosoftUnsafeLocalFunction.js');
    var setInnerHTML = createMicrosoftUnsafeLocalFunction(function(node, html) {
      node.innerHTML = html;
    });
    if (ExecutionEnvironment.canUseDOM) {
      var testElement = document.createElement('div');
      testElement.innerHTML = ' ';
      if (testElement.innerHTML === '') {
        setInnerHTML = function(node, html) {
          if (node.parentNode) {
            node.parentNode.replaceChild(node, node);
          }
          if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
            node.innerHTML = String.fromCharCode(0xFEFF) + html;
            var textNode = node.firstChild;
            if (textNode.data.length === 1) {
              node.removeChild(textNode);
            } else {
              textNode.deleteData(0, 1);
            }
          } else {
            node.innerHTML = html;
          }
        };
      }
      testElement = null;
    }
    module.exports = setInnerHTML;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/shouldUpdateReactComponent.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function shouldUpdateReactComponent(prevElement, nextElement) {
    var prevEmpty = prevElement === null || prevElement === false;
    var nextEmpty = nextElement === null || nextElement === false;
    if (prevEmpty || nextEmpty) {
      return prevEmpty === nextEmpty;
    }
    var prevType = typeof prevElement;
    var nextType = typeof nextElement;
    if (prevType === 'string' || prevType === 'number') {
      return nextType === 'string' || nextType === 'number';
    } else {
      return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
    }
  }
  module.exports = shouldUpdateReactComponent;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactMount.js", ["npm:react@15.1.0/lib/DOMLazyTree.js", "npm:react@15.1.0/lib/DOMProperty.js", "npm:react@15.1.0/lib/ReactBrowserEventEmitter.js", "npm:react@15.1.0/lib/ReactCurrentOwner.js", "npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactDOMContainerInfo.js", "npm:react@15.1.0/lib/ReactDOMFeatureFlags.js", "npm:react@15.1.0/lib/ReactElement.js", "npm:react@15.1.0/lib/ReactFeatureFlags.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:react@15.1.0/lib/ReactMarkupChecksum.js", "npm:react@15.1.0/lib/ReactReconciler.js", "npm:react@15.1.0/lib/ReactUpdateQueue.js", "npm:react@15.1.0/lib/ReactUpdates.js", "npm:fbjs@0.8.3/lib/emptyObject.js", "npm:react@15.1.0/lib/instantiateReactComponent.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:react@15.1.0/lib/setInnerHTML.js", "npm:react@15.1.0/lib/shouldUpdateReactComponent.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var DOMLazyTree = $__require('npm:react@15.1.0/lib/DOMLazyTree.js');
    var DOMProperty = $__require('npm:react@15.1.0/lib/DOMProperty.js');
    var ReactBrowserEventEmitter = $__require('npm:react@15.1.0/lib/ReactBrowserEventEmitter.js');
    var ReactCurrentOwner = $__require('npm:react@15.1.0/lib/ReactCurrentOwner.js');
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactDOMContainerInfo = $__require('npm:react@15.1.0/lib/ReactDOMContainerInfo.js');
    var ReactDOMFeatureFlags = $__require('npm:react@15.1.0/lib/ReactDOMFeatureFlags.js');
    var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
    var ReactFeatureFlags = $__require('npm:react@15.1.0/lib/ReactFeatureFlags.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var ReactMarkupChecksum = $__require('npm:react@15.1.0/lib/ReactMarkupChecksum.js');
    var ReactReconciler = $__require('npm:react@15.1.0/lib/ReactReconciler.js');
    var ReactUpdateQueue = $__require('npm:react@15.1.0/lib/ReactUpdateQueue.js');
    var ReactUpdates = $__require('npm:react@15.1.0/lib/ReactUpdates.js');
    var emptyObject = $__require('npm:fbjs@0.8.3/lib/emptyObject.js');
    var instantiateReactComponent = $__require('npm:react@15.1.0/lib/instantiateReactComponent.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var setInnerHTML = $__require('npm:react@15.1.0/lib/setInnerHTML.js');
    var shouldUpdateReactComponent = $__require('npm:react@15.1.0/lib/shouldUpdateReactComponent.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
    var ROOT_ATTR_NAME = DOMProperty.ROOT_ATTRIBUTE_NAME;
    var ELEMENT_NODE_TYPE = 1;
    var DOC_NODE_TYPE = 9;
    var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
    var instancesByReactRootID = {};
    function firstDifferenceIndex(string1, string2) {
      var minLen = Math.min(string1.length, string2.length);
      for (var i = 0; i < minLen; i++) {
        if (string1.charAt(i) !== string2.charAt(i)) {
          return i;
        }
      }
      return string1.length === string2.length ? -1 : minLen;
    }
    function getReactRootElementInContainer(container) {
      if (!container) {
        return null;
      }
      if (container.nodeType === DOC_NODE_TYPE) {
        return container.documentElement;
      } else {
        return container.firstChild;
      }
    }
    function internalGetID(node) {
      return node.getAttribute && node.getAttribute(ATTR_NAME) || '';
    }
    function mountComponentIntoNode(wrapperInstance, container, transaction, shouldReuseMarkup, context) {
      var markerName;
      if (ReactFeatureFlags.logTopLevelRenders) {
        var wrappedElement = wrapperInstance._currentElement.props;
        var type = wrappedElement.type;
        markerName = 'React mount: ' + (typeof type === 'string' ? type : type.displayName || type.name);
        console.time(markerName);
      }
      var markup = ReactReconciler.mountComponent(wrapperInstance, transaction, null, ReactDOMContainerInfo(wrapperInstance, container), context);
      if (markerName) {
        console.timeEnd(markerName);
      }
      wrapperInstance._renderedComponent._topLevelWrapper = wrapperInstance;
      ReactMount._mountImageIntoNode(markup, container, wrapperInstance, shouldReuseMarkup, transaction);
    }
    function batchedMountComponentIntoNode(componentInstance, container, shouldReuseMarkup, context) {
      var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(!shouldReuseMarkup && ReactDOMFeatureFlags.useCreateElement);
      transaction.perform(mountComponentIntoNode, null, componentInstance, container, transaction, shouldReuseMarkup, context);
      ReactUpdates.ReactReconcileTransaction.release(transaction);
    }
    function unmountComponentFromNode(instance, container, safely) {
      ReactReconciler.unmountComponent(instance, safely);
      if (container.nodeType === DOC_NODE_TYPE) {
        container = container.documentElement;
      }
      while (container.lastChild) {
        container.removeChild(container.lastChild);
      }
    }
    function hasNonRootReactChild(container) {
      var rootEl = getReactRootElementInContainer(container);
      if (rootEl) {
        var inst = ReactDOMComponentTree.getInstanceFromNode(rootEl);
        return !!(inst && inst._nativeParent);
      }
    }
    function getNativeRootInstanceInContainer(container) {
      var rootEl = getReactRootElementInContainer(container);
      var prevNativeInstance = rootEl && ReactDOMComponentTree.getInstanceFromNode(rootEl);
      return prevNativeInstance && !prevNativeInstance._nativeParent ? prevNativeInstance : null;
    }
    function getTopLevelWrapperInContainer(container) {
      var root = getNativeRootInstanceInContainer(container);
      return root ? root._nativeContainerInfo._topLevelWrapper : null;
    }
    var topLevelRootCounter = 1;
    var TopLevelWrapper = function() {
      this.rootID = topLevelRootCounter++;
    };
    TopLevelWrapper.prototype.isReactComponent = {};
    if ("production" !== 'production') {
      TopLevelWrapper.displayName = 'TopLevelWrapper';
    }
    TopLevelWrapper.prototype.render = function() {
      return this.props;
    };
    var ReactMount = {
      TopLevelWrapper: TopLevelWrapper,
      _instancesByReactRootID: instancesByReactRootID,
      scrollMonitor: function(container, renderCallback) {
        renderCallback();
      },
      _updateRootComponent: function(prevComponent, nextElement, container, callback) {
        ReactMount.scrollMonitor(container, function() {
          ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
          if (callback) {
            ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
          }
        });
        return prevComponent;
      },
      _renderNewRootComponent: function(nextElement, container, shouldReuseMarkup, context) {
        if ("production" !== 'production') {
          ReactInstrumentation.debugTool.onBeginFlush();
        }
        "production" !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;
        !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? "production" !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : invariant(false) : void 0;
        ReactBrowserEventEmitter.ensureScrollValueMonitoring();
        var componentInstance = instantiateReactComponent(nextElement);
        if ("production" !== 'production') {
          componentInstance._debugID = 0;
        }
        ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);
        var wrapperID = componentInstance._instance.rootID;
        instancesByReactRootID[wrapperID] = componentInstance;
        if ("production" !== 'production') {
          ReactInstrumentation.debugTool.onMountRootComponent(componentInstance._renderedComponent._debugID);
          ReactInstrumentation.debugTool.onEndFlush();
        }
        return componentInstance;
      },
      renderSubtreeIntoContainer: function(parentComponent, nextElement, container, callback) {
        !(parentComponent != null && parentComponent._reactInternalInstance != null) ? "production" !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : invariant(false) : void 0;
        return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
      },
      _renderSubtreeIntoContainer: function(parentComponent, nextElement, container, callback) {
        ReactUpdateQueue.validateCallback(callback, 'ReactDOM.render');
        !ReactElement.isValidElement(nextElement) ? "production" !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing a string like \'div\', pass ' + 'React.createElement(\'div\') or <div />.' : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : invariant(false) : void 0;
        "production" !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : void 0;
        var nextWrappedElement = ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);
        var prevComponent = getTopLevelWrapperInContainer(container);
        if (prevComponent) {
          var prevWrappedElement = prevComponent._currentElement;
          var prevElement = prevWrappedElement.props;
          if (shouldUpdateReactComponent(prevElement, nextElement)) {
            var publicInst = prevComponent._renderedComponent.getPublicInstance();
            var updatedCallback = callback && function() {
              callback.call(publicInst);
            };
            ReactMount._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);
            return publicInst;
          } else {
            ReactMount.unmountComponentAtNode(container);
          }
        }
        var reactRootElement = getReactRootElementInContainer(container);
        var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
        var containerHasNonRootReactChild = hasNonRootReactChild(container);
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : void 0;
          if (!containerHasReactMarkup || reactRootElement.nextSibling) {
            var rootElementSibling = reactRootElement;
            while (rootElementSibling) {
              if (internalGetID(rootElementSibling)) {
                "production" !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : void 0;
                break;
              }
              rootElementSibling = rootElementSibling.nextSibling;
            }
          }
        }
        var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
        var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent != null ? parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context) : emptyObject)._renderedComponent.getPublicInstance();
        if (callback) {
          callback.call(component);
        }
        return component;
      },
      render: function(nextElement, container, callback) {
        return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
      },
      unmountComponentAtNode: function(container) {
        "production" !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;
        !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? "production" !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(false) : void 0;
        var prevComponent = getTopLevelWrapperInContainer(container);
        if (!prevComponent) {
          var containerHasNonRootReactChild = hasNonRootReactChild(container);
          var isContainerReactRoot = container.nodeType === 1 && container.hasAttribute(ROOT_ATTR_NAME);
          if ("production" !== 'production') {
            "production" !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : void 0;
          }
          return false;
        }
        delete instancesByReactRootID[prevComponent._instance.rootID];
        ReactUpdates.batchedUpdates(unmountComponentFromNode, prevComponent, container, false);
        return true;
      },
      _mountImageIntoNode: function(markup, container, instance, shouldReuseMarkup, transaction) {
        !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? "production" !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : invariant(false) : void 0;
        if (shouldReuseMarkup) {
          var rootElement = getReactRootElementInContainer(container);
          if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
            ReactDOMComponentTree.precacheNode(instance, rootElement);
            return;
          } else {
            var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
            rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
            var rootMarkup = rootElement.outerHTML;
            rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);
            var normalizedMarkup = markup;
            if ("production" !== 'production') {
              var normalizer;
              if (container.nodeType === ELEMENT_NODE_TYPE) {
                normalizer = document.createElement('div');
                normalizer.innerHTML = markup;
                normalizedMarkup = normalizer.innerHTML;
              } else {
                normalizer = document.createElement('iframe');
                document.body.appendChild(normalizer);
                normalizer.contentDocument.write(markup);
                normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
                document.body.removeChild(normalizer);
              }
            }
            var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
            var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
            !(container.nodeType !== DOC_NODE_TYPE) ? "production" !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(false) : void 0;
            if ("production" !== 'production') {
              "production" !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : void 0;
            }
          }
        }
        !(container.nodeType !== DOC_NODE_TYPE) ? "production" !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See ReactDOMServer.renderToString() for server rendering.') : invariant(false) : void 0;
        if (transaction.useCreateElement) {
          while (container.lastChild) {
            container.removeChild(container.lastChild);
          }
          DOMLazyTree.insertTreeBefore(container, markup, null);
        } else {
          setInnerHTML(container, markup);
          ReactDOMComponentTree.precacheNode(instance, container.firstChild);
        }
        if ("production" !== 'production') {
          var nativeNode = ReactDOMComponentTree.getInstanceFromNode(container.firstChild);
          if (nativeNode._debugID !== 0) {
            ReactInstrumentation.debugTool.onNativeOperation(nativeNode._debugID, 'mount', markup.toString());
          }
        }
      }
    };
    module.exports = ReactMount;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/renderSubtreeIntoContainer.js", ["npm:react@15.1.0/lib/ReactMount.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactMount = $__require('npm:react@15.1.0/lib/ReactMount.js');
  module.exports = ReactMount.renderSubtreeIntoContainer;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOM.js", ["npm:react@15.1.0/lib/ReactDOMComponentTree.js", "npm:react@15.1.0/lib/ReactDefaultInjection.js", "npm:react@15.1.0/lib/ReactMount.js", "npm:react@15.1.0/lib/ReactReconciler.js", "npm:react@15.1.0/lib/ReactUpdates.js", "npm:react@15.1.0/lib/ReactVersion.js", "npm:react@15.1.0/lib/findDOMNode.js", "npm:react@15.1.0/lib/getNativeComponentFromComposite.js", "npm:react@15.1.0/lib/renderSubtreeIntoContainer.js", "npm:fbjs@0.8.3/lib/warning.js", "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactDOMComponentTree = $__require('npm:react@15.1.0/lib/ReactDOMComponentTree.js');
    var ReactDefaultInjection = $__require('npm:react@15.1.0/lib/ReactDefaultInjection.js');
    var ReactMount = $__require('npm:react@15.1.0/lib/ReactMount.js');
    var ReactReconciler = $__require('npm:react@15.1.0/lib/ReactReconciler.js');
    var ReactUpdates = $__require('npm:react@15.1.0/lib/ReactUpdates.js');
    var ReactVersion = $__require('npm:react@15.1.0/lib/ReactVersion.js');
    var findDOMNode = $__require('npm:react@15.1.0/lib/findDOMNode.js');
    var getNativeComponentFromComposite = $__require('npm:react@15.1.0/lib/getNativeComponentFromComposite.js');
    var renderSubtreeIntoContainer = $__require('npm:react@15.1.0/lib/renderSubtreeIntoContainer.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    ReactDefaultInjection.inject();
    var React = {
      findDOMNode: findDOMNode,
      render: ReactMount.render,
      unmountComponentAtNode: ReactMount.unmountComponentAtNode,
      version: ReactVersion,
      unstable_batchedUpdates: ReactUpdates.batchedUpdates,
      unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        ComponentTree: {
          getClosestInstanceFromNode: ReactDOMComponentTree.getClosestInstanceFromNode,
          getNodeFromInstance: function(inst) {
            if (inst._renderedComponent) {
              inst = getNativeComponentFromComposite(inst);
            }
            if (inst) {
              return ReactDOMComponentTree.getNodeFromInstance(inst);
            } else {
              return null;
            }
          }
        },
        Mount: ReactMount,
        Reconciler: ReactReconciler
      });
    }
    if ("production" !== 'production') {
      var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
      if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
          if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
            var showFileUrlMessage = window.location.protocol.indexOf('http') === -1 && navigator.userAgent.indexOf('Firefox') === -1;
            console.debug('Download the React DevTools ' + (showFileUrlMessage ? 'and use an HTTP server (instead of a file: URL) ' : '') + 'for a better development experience: ' + 'https://fb.me/react-devtools');
          }
        }
        var testFunc = function testFn() {};
        "production" !== 'production' ? warning((testFunc.name || testFunc.toString()).indexOf('testFn') !== -1, 'It looks like you\'re using a minified copy of the development build ' + 'of React. When deploying React apps to production, make sure to use ' + 'the production build which skips development warnings and is faster. ' + 'See https://fb.me/react-minification for more details.') : void 0;
        var ieCompatibilityMode = document.documentMode && document.documentMode < 8;
        "production" !== 'production' ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : void 0;
        var expectedFeatures = [Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim];
        for (var i = 0; i < expectedFeatures.length; i++) {
          if (!expectedFeatures[i]) {
            "production" !== 'production' ? warning(false, 'One or more ES5 shims expected by React are not available: ' + 'https://fb.me/react-warning-polyfills') : void 0;
            break;
          }
        }
      }
    }
    module.exports = React;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-dom@15.1.0/index.js", ["npm:react@15.1.0/lib/ReactDOM.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:react@15.1.0/lib/ReactDOM.js');
  return module.exports;
});

System.registerDynamic("npm:react-dom@15.1.0.js", ["npm:react-dom@15.1.0/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:react-dom@15.1.0/index.js');
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/Router.js", ["npm:history@2.1.2/lib/createHashHistory.js", "npm:history@2.1.2/lib/useQueries.js", "npm:react@15.1.0.js", "npm:react-router@2.4.1/lib/createTransitionManager.js", "npm:react-router@2.4.1/lib/InternalPropTypes.js", "npm:react-router@2.4.1/lib/RouterContext.js", "npm:react-router@2.4.1/lib/RouteUtils.js", "npm:react-router@2.4.1/lib/RouterUtils.js", "npm:react-router@2.4.1/lib/routerWarning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createHashHistory = $__require('npm:history@2.1.2/lib/createHashHistory.js');
    var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
    var _useQueries = $__require('npm:history@2.1.2/lib/useQueries.js');
    var _useQueries2 = _interopRequireDefault(_useQueries);
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    var _createTransitionManager = $__require('npm:react-router@2.4.1/lib/createTransitionManager.js');
    var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
    var _InternalPropTypes = $__require('npm:react-router@2.4.1/lib/InternalPropTypes.js');
    var _RouterContext = $__require('npm:react-router@2.4.1/lib/RouterContext.js');
    var _RouterContext2 = _interopRequireDefault(_RouterContext);
    var _RouteUtils = $__require('npm:react-router@2.4.1/lib/RouteUtils.js');
    var _RouterUtils = $__require('npm:react-router@2.4.1/lib/RouterUtils.js');
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    function isDeprecatedHistory(history) {
      return !history || !history.__v2_compatible__;
    }
    var _React$PropTypes = _react2.default.PropTypes;
    var func = _React$PropTypes.func;
    var object = _React$PropTypes.object;
    var Router = _react2.default.createClass({
      displayName: 'Router',
      propTypes: {
        history: object,
        children: _InternalPropTypes.routes,
        routes: _InternalPropTypes.routes,
        render: func,
        createElement: func,
        onError: func,
        onUpdate: func,
        matchContext: object
      },
      getDefaultProps: function getDefaultProps() {
        return {render: function render(props) {
            return _react2.default.createElement(_RouterContext2.default, props);
          }};
      },
      getInitialState: function getInitialState() {
        return {
          location: null,
          routes: null,
          params: null,
          components: null
        };
      },
      handleError: function handleError(error) {
        if (this.props.onError) {
          this.props.onError.call(this, error);
        } else {
          throw error;
        }
      },
      componentWillMount: function componentWillMount() {
        var _this = this;
        var _props = this.props;
        var parseQueryString = _props.parseQueryString;
        var stringifyQuery = _props.stringifyQuery;
        "production" !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;
        var _createRouterObjects = this.createRouterObjects();
        var history = _createRouterObjects.history;
        var transitionManager = _createRouterObjects.transitionManager;
        var router = _createRouterObjects.router;
        this._unlisten = transitionManager.listen(function(error, state) {
          if (error) {
            _this.handleError(error);
          } else {
            _this.setState(state, _this.props.onUpdate);
          }
        });
        this.history = history;
        this.router = router;
      },
      createRouterObjects: function createRouterObjects() {
        var matchContext = this.props.matchContext;
        if (matchContext) {
          return matchContext;
        }
        var history = this.props.history;
        var _props2 = this.props;
        var routes = _props2.routes;
        var children = _props2.children;
        if (isDeprecatedHistory(history)) {
          history = this.wrapDeprecatedHistory(history);
        }
        var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
        var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
        var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);
        return {
          history: routingHistory,
          transitionManager: transitionManager,
          router: router
        };
      },
      wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
        var _props3 = this.props;
        var parseQueryString = _props3.parseQueryString;
        var stringifyQuery = _props3.stringifyQuery;
        var createHistory = void 0;
        if (history) {
          "production" !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
          createHistory = function createHistory() {
            return history;
          };
        } else {
          "production" !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
          createHistory = _createHashHistory2.default;
        }
        return (0, _useQueries2.default)(createHistory)({
          parseQueryString: parseQueryString,
          stringifyQuery: stringifyQuery
        });
      },
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        "production" !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;
        "production" !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
      },
      componentWillUnmount: function componentWillUnmount() {
        if (this._unlisten)
          this._unlisten();
      },
      render: function render() {
        var _state = this.state;
        var location = _state.location;
        var routes = _state.routes;
        var params = _state.params;
        var components = _state.components;
        var _props4 = this.props;
        var createElement = _props4.createElement;
        var render = _props4.render;
        var props = _objectWithoutProperties(_props4, ['createElement', 'render']);
        if (location == null)
          return null;
        Object.keys(Router.propTypes).forEach(function(propType) {
          return delete props[propType];
        });
        return render(_extends({}, props, {
          history: this.history,
          router: this.router,
          location: location,
          routes: routes,
          params: params,
          components: components,
          createElement: createElement
        }));
      }
    });
    exports.default = Router;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/Link.js", ["npm:react@15.1.0.js", "npm:react-router@2.4.1/lib/routerWarning.js", "npm:react-router@2.4.1/lib/PropTypes.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    var _PropTypes = $__require('npm:react-router@2.4.1/lib/PropTypes.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    var _React$PropTypes = _react2.default.PropTypes;
    var bool = _React$PropTypes.bool;
    var object = _React$PropTypes.object;
    var string = _React$PropTypes.string;
    var func = _React$PropTypes.func;
    var oneOfType = _React$PropTypes.oneOfType;
    function isLeftClickEvent(event) {
      return event.button === 0;
    }
    function isModifiedEvent(event) {
      return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
    }
    function isEmptyObject(object) {
      for (var p in object) {
        if (Object.prototype.hasOwnProperty.call(object, p))
          return false;
      }
      return true;
    }
    function createLocationDescriptor(to, _ref) {
      var query = _ref.query;
      var hash = _ref.hash;
      var state = _ref.state;
      if (query || hash || state) {
        return {
          pathname: to,
          query: query,
          hash: hash,
          state: state
        };
      }
      return to;
    }
    var Link = _react2.default.createClass({
      displayName: 'Link',
      contextTypes: {router: _PropTypes.routerShape},
      propTypes: {
        to: oneOfType([string, object]).isRequired,
        query: object,
        hash: string,
        state: object,
        activeStyle: object,
        activeClassName: string,
        onlyActiveOnIndex: bool.isRequired,
        onClick: func,
        target: string
      },
      getDefaultProps: function getDefaultProps() {
        return {
          onlyActiveOnIndex: false,
          style: {}
        };
      },
      handleClick: function handleClick(event) {
        var allowTransition = true;
        if (this.props.onClick)
          this.props.onClick(event);
        if (isModifiedEvent(event) || !isLeftClickEvent(event))
          return;
        if (event.defaultPrevented === true)
          allowTransition = false;
        if (this.props.target) {
          if (!allowTransition)
            event.preventDefault();
          return;
        }
        event.preventDefault();
        if (allowTransition) {
          var _props = this.props;
          var to = _props.to;
          var query = _props.query;
          var hash = _props.hash;
          var state = _props.state;
          var location = createLocationDescriptor(to, {
            query: query,
            hash: hash,
            state: state
          });
          this.context.router.push(location);
        }
      },
      render: function render() {
        var _props2 = this.props;
        var to = _props2.to;
        var query = _props2.query;
        var hash = _props2.hash;
        var state = _props2.state;
        var activeClassName = _props2.activeClassName;
        var activeStyle = _props2.activeStyle;
        var onlyActiveOnIndex = _props2.onlyActiveOnIndex;
        var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);
        "production" !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;
        var router = this.context.router;
        if (router) {
          var location = createLocationDescriptor(to, {
            query: query,
            hash: hash,
            state: state
          });
          props.href = router.createHref(location);
          if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
            if (router.isActive(location, onlyActiveOnIndex)) {
              if (activeClassName) {
                if (props.className) {
                  props.className += ' ' + activeClassName;
                } else {
                  props.className = activeClassName;
                }
              }
              if (activeStyle)
                props.style = _extends({}, props.style, activeStyle);
            }
          }
        }
        return _react2.default.createElement('a', _extends({}, props, {onClick: this.handleClick}));
      }
    });
    exports.default = Link;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/IndexLink.js", ["npm:react@15.1.0.js", "npm:react-router@2.4.1/lib/Link.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _react = $__require('npm:react@15.1.0.js');
  var _react2 = _interopRequireDefault(_react);
  var _Link = $__require('npm:react-router@2.4.1/lib/Link.js');
  var _Link2 = _interopRequireDefault(_Link);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var IndexLink = _react2.default.createClass({
    displayName: 'IndexLink',
    render: function render() {
      return _react2.default.createElement(_Link2.default, _extends({}, this.props, {onlyActiveOnIndex: true}));
    }
  });
  exports.default = IndexLink;
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:hoist-non-react-statics@1.2.0/index.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
  };
  var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
  module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') {
      var keys = Object.getOwnPropertyNames(sourceComponent);
      if (isGetOwnPropertySymbolsAvailable) {
        keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
      }
      for (var i = 0; i < keys.length; ++i) {
        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
          try {
            targetComponent[keys[i]] = sourceComponent[keys[i]];
          } catch (error) {}
        }
      }
    }
    return targetComponent;
  };
  return module.exports;
});

System.registerDynamic("npm:hoist-non-react-statics@1.2.0.js", ["npm:hoist-non-react-statics@1.2.0/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:hoist-non-react-statics@1.2.0/index.js');
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/PropTypes.js", ["npm:react@15.1.0.js", "npm:react-router@2.4.1/lib/deprecateObjectProperties.js", "npm:react-router@2.4.1/lib/InternalPropTypes.js", "npm:react-router@2.4.1/lib/routerWarning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;
    var _react = $__require('npm:react@15.1.0.js');
    var _deprecateObjectProperties = $__require('npm:react-router@2.4.1/lib/deprecateObjectProperties.js');
    var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
    var _InternalPropTypes = $__require('npm:react-router@2.4.1/lib/InternalPropTypes.js');
    var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var func = _react.PropTypes.func;
    var object = _react.PropTypes.object;
    var shape = _react.PropTypes.shape;
    var string = _react.PropTypes.string;
    var routerShape = exports.routerShape = shape({
      push: func.isRequired,
      replace: func.isRequired,
      go: func.isRequired,
      goBack: func.isRequired,
      goForward: func.isRequired,
      setRouteLeaveHook: func.isRequired,
      isActive: func.isRequired
    });
    var locationShape = exports.locationShape = shape({
      pathname: string.isRequired,
      search: string.isRequired,
      state: object,
      action: string.isRequired,
      key: string
    });
    var falsy = exports.falsy = InternalPropTypes.falsy;
    var history = exports.history = InternalPropTypes.history;
    var location = exports.location = locationShape;
    var component = exports.component = InternalPropTypes.component;
    var components = exports.components = InternalPropTypes.components;
    var route = exports.route = InternalPropTypes.route;
    var routes = exports.routes = InternalPropTypes.routes;
    var router = exports.router = routerShape;
    if ("production" !== 'production') {
      (function() {
        var deprecatePropType = function deprecatePropType(propType, message) {
          return function() {
            "production" !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
            return propType.apply(undefined, arguments);
          };
        };
        var deprecateInternalPropType = function deprecateInternalPropType(propType) {
          return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
        };
        var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
          return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
        };
        exports.falsy = falsy = deprecateInternalPropType(falsy);
        exports.history = history = deprecateInternalPropType(history);
        exports.component = component = deprecateInternalPropType(component);
        exports.components = components = deprecateInternalPropType(components);
        exports.route = route = deprecateInternalPropType(route);
        exports.routes = routes = deprecateInternalPropType(routes);
        exports.location = location = deprecateRenamedPropType(location, 'location');
        exports.router = router = deprecateRenamedPropType(router, 'router');
      })();
    }
    var defaultExport = {
      falsy: falsy,
      history: history,
      location: location,
      component: component,
      components: components,
      route: route,
      router: router
    };
    if ("production" !== 'production') {
      defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
    }
    exports.default = defaultExport;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/withRouter.js", ["npm:react@15.1.0.js", "npm:hoist-non-react-statics@1.2.0.js", "npm:react-router@2.4.1/lib/PropTypes.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  exports.default = withRouter;
  var _react = $__require('npm:react@15.1.0.js');
  var _react2 = _interopRequireDefault(_react);
  var _hoistNonReactStatics = $__require('npm:hoist-non-react-statics@1.2.0.js');
  var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
  var _PropTypes = $__require('npm:react-router@2.4.1/lib/PropTypes.js');
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
  function withRouter(WrappedComponent) {
    var WithRouter = _react2.default.createClass({
      displayName: 'WithRouter',
      contextTypes: {router: _PropTypes.routerShape},
      render: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {router: this.context.router}));
      }
    });
    WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
    WithRouter.WrappedComponent = WrappedComponent;
    return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
  }
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/IndexRedirect.js", ["npm:react@15.1.0.js", "npm:react-router@2.4.1/lib/routerWarning.js", "npm:invariant@2.2.1.js", "npm:react-router@2.4.1/lib/Redirect.js", "npm:react-router@2.4.1/lib/InternalPropTypes.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _Redirect = $__require('npm:react-router@2.4.1/lib/Redirect.js');
    var _Redirect2 = _interopRequireDefault(_Redirect);
    var _InternalPropTypes = $__require('npm:react-router@2.4.1/lib/InternalPropTypes.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _React$PropTypes = _react2.default.PropTypes;
    var string = _React$PropTypes.string;
    var object = _React$PropTypes.object;
    var IndexRedirect = _react2.default.createClass({
      displayName: 'IndexRedirect',
      statics: {createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
          if (parentRoute) {
            parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
          } else {
            "production" !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
          }
        }},
      propTypes: {
        to: string.isRequired,
        query: object,
        state: object,
        onEnter: _InternalPropTypes.falsy,
        children: _InternalPropTypes.falsy
      },
      render: function render() {
        !false ? "production" !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
      }
    });
    exports.default = IndexRedirect;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/IndexRoute.js", ["npm:react@15.1.0.js", "npm:react-router@2.4.1/lib/routerWarning.js", "npm:invariant@2.2.1.js", "npm:react-router@2.4.1/lib/RouteUtils.js", "npm:react-router@2.4.1/lib/InternalPropTypes.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _RouteUtils = $__require('npm:react-router@2.4.1/lib/RouteUtils.js');
    var _InternalPropTypes = $__require('npm:react-router@2.4.1/lib/InternalPropTypes.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var func = _react2.default.PropTypes.func;
    var IndexRoute = _react2.default.createClass({
      displayName: 'IndexRoute',
      statics: {createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
          if (parentRoute) {
            parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
          } else {
            "production" !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
          }
        }},
      propTypes: {
        path: _InternalPropTypes.falsy,
        component: _InternalPropTypes.component,
        components: _InternalPropTypes.components,
        getComponent: func,
        getComponents: func
      },
      render: function render() {
        !false ? "production" !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
      }
    });
    exports.default = IndexRoute;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/Redirect.js", ["npm:react@15.1.0.js", "npm:invariant@2.2.1.js", "npm:react-router@2.4.1/lib/RouteUtils.js", "npm:react-router@2.4.1/lib/PatternUtils.js", "npm:react-router@2.4.1/lib/InternalPropTypes.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _RouteUtils = $__require('npm:react-router@2.4.1/lib/RouteUtils.js');
    var _PatternUtils = $__require('npm:react-router@2.4.1/lib/PatternUtils.js');
    var _InternalPropTypes = $__require('npm:react-router@2.4.1/lib/InternalPropTypes.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _React$PropTypes = _react2.default.PropTypes;
    var string = _React$PropTypes.string;
    var object = _React$PropTypes.object;
    var Redirect = _react2.default.createClass({
      displayName: 'Redirect',
      statics: {
        createRouteFromReactElement: function createRouteFromReactElement(element) {
          var route = (0, _RouteUtils.createRouteFromReactElement)(element);
          if (route.from)
            route.path = route.from;
          route.onEnter = function(nextState, replace) {
            var location = nextState.location;
            var params = nextState.params;
            var pathname = void 0;
            if (route.to.charAt(0) === '/') {
              pathname = (0, _PatternUtils.formatPattern)(route.to, params);
            } else if (!route.to) {
              pathname = location.pathname;
            } else {
              var routeIndex = nextState.routes.indexOf(route);
              var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
              var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
              pathname = (0, _PatternUtils.formatPattern)(pattern, params);
            }
            replace({
              pathname: pathname,
              query: route.query || location.query,
              state: route.state || location.state
            });
          };
          return route;
        },
        getRoutePattern: function getRoutePattern(routes, routeIndex) {
          var parentPattern = '';
          for (var i = routeIndex; i >= 0; i--) {
            var route = routes[i];
            var pattern = route.path || '';
            parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;
            if (pattern.indexOf('/') === 0)
              break;
          }
          return '/' + parentPattern;
        }
      },
      propTypes: {
        path: string,
        from: string,
        to: string.isRequired,
        query: object,
        state: object,
        onEnter: _InternalPropTypes.falsy,
        children: _InternalPropTypes.falsy
      },
      render: function render() {
        !false ? "production" !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
      }
    });
    exports.default = Redirect;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/Route.js", ["npm:react@15.1.0.js", "npm:invariant@2.2.1.js", "npm:react-router@2.4.1/lib/RouteUtils.js", "npm:react-router@2.4.1/lib/InternalPropTypes.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _RouteUtils = $__require('npm:react-router@2.4.1/lib/RouteUtils.js');
    var _InternalPropTypes = $__require('npm:react-router@2.4.1/lib/InternalPropTypes.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _React$PropTypes = _react2.default.PropTypes;
    var string = _React$PropTypes.string;
    var func = _React$PropTypes.func;
    var Route = _react2.default.createClass({
      displayName: 'Route',
      statics: {createRouteFromReactElement: _RouteUtils.createRouteFromReactElement},
      propTypes: {
        path: string,
        component: _InternalPropTypes.component,
        components: _InternalPropTypes.components,
        getComponent: func,
        getComponents: func
      },
      render: function render() {
        !false ? "production" !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
      }
    });
    exports.default = Route;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/InternalPropTypes.js", ["npm:react@15.1.0.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
  exports.falsy = falsy;
  var _react = $__require('npm:react@15.1.0.js');
  var func = _react.PropTypes.func;
  var object = _react.PropTypes.object;
  var arrayOf = _react.PropTypes.arrayOf;
  var oneOfType = _react.PropTypes.oneOfType;
  var element = _react.PropTypes.element;
  var shape = _react.PropTypes.shape;
  var string = _react.PropTypes.string;
  function falsy(props, propName, componentName) {
    if (props[propName])
      return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
  }
  var history = exports.history = shape({
    listen: func.isRequired,
    push: func.isRequired,
    replace: func.isRequired,
    go: func.isRequired,
    goBack: func.isRequired,
    goForward: func.isRequired
  });
  var component = exports.component = oneOfType([func, string]);
  var components = exports.components = oneOfType([component, object]);
  var route = exports.route = oneOfType([object, element]);
  var routes = exports.routes = oneOfType([route, arrayOf(route)]);
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/History.js", ["npm:react-router@2.4.1/lib/routerWarning.js", "npm:react-router@2.4.1/lib/InternalPropTypes.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    var _InternalPropTypes = $__require('npm:react-router@2.4.1/lib/InternalPropTypes.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var History = {
      contextTypes: {history: _InternalPropTypes.history},
      componentWillMount: function componentWillMount() {
        "production" !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
        this.history = this.context.history;
      }
    };
    exports.default = History;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/Lifecycle.js", ["npm:react-router@2.4.1/lib/routerWarning.js", "npm:react@15.1.0.js", "npm:invariant@2.2.1.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var object = _react2.default.PropTypes.object;
    var Lifecycle = {
      contextTypes: {
        history: object.isRequired,
        route: object
      },
      propTypes: {route: object},
      componentDidMount: function componentDidMount() {
        "production" !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
        !this.routerWillLeave ? "production" !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;
        var route = this.props.route || this.context.route;
        !route ? "production" !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;
        this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
      },
      componentWillUnmount: function componentWillUnmount() {
        if (this._unlistenBeforeLeavingRoute)
          this._unlistenBeforeLeavingRoute();
      }
    };
    exports.default = Lifecycle;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/RouteContext.js", ["npm:react-router@2.4.1/lib/routerWarning.js", "npm:react@15.1.0.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var object = _react2.default.PropTypes.object;
    var RouteContext = {
      propTypes: {route: object.isRequired},
      childContextTypes: {route: object.isRequired},
      getChildContext: function getChildContext() {
        return {route: this.props.route};
      },
      componentWillMount: function componentWillMount() {
        "production" !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
      }
    };
    exports.default = RouteContext;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/useRoutes.js", ["npm:history@2.1.2/lib/useQueries.js", "npm:react-router@2.4.1/lib/createTransitionManager.js", "npm:react-router@2.4.1/lib/routerWarning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _useQueries = $__require('npm:history@2.1.2/lib/useQueries.js');
    var _useQueries2 = _interopRequireDefault(_useQueries);
    var _createTransitionManager = $__require('npm:react-router@2.4.1/lib/createTransitionManager.js');
    var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    function useRoutes(createHistory) {
      "production" !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;
      return function() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var routes = _ref.routes;
        var options = _objectWithoutProperties(_ref, ['routes']);
        var history = (0, _useQueries2.default)(createHistory)(options);
        var transitionManager = (0, _createTransitionManager2.default)(history, routes);
        return _extends({}, history, transitionManager);
      };
    }
    exports.default = useRoutes;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/RoutingContext.js", ["npm:react@15.1.0.js", "npm:react-router@2.4.1/lib/RouterContext.js", "npm:react-router@2.4.1/lib/routerWarning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    var _RouterContext = $__require('npm:react-router@2.4.1/lib/RouterContext.js');
    var _RouterContext2 = _interopRequireDefault(_RouterContext);
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var RoutingContext = _react2.default.createClass({
      displayName: 'RoutingContext',
      componentWillMount: function componentWillMount() {
        "production" !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
      },
      render: function render() {
        return _react2.default.createElement(_RouterContext2.default, this.props);
      }
    });
    exports.default = RoutingContext;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/computeChangedRoutes.js", ["npm:react-router@2.4.1/lib/PatternUtils.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _PatternUtils = $__require('npm:react-router@2.4.1/lib/PatternUtils.js');
  function routeParamsChanged(route, prevState, nextState) {
    if (!route.path)
      return false;
    var paramNames = (0, _PatternUtils.getParamNames)(route.path);
    return paramNames.some(function(paramName) {
      return prevState.params[paramName] !== nextState.params[paramName];
    });
  }
  function computeChangedRoutes(prevState, nextState) {
    var prevRoutes = prevState && prevState.routes;
    var nextRoutes = nextState.routes;
    var leaveRoutes = void 0,
        changeRoutes = void 0,
        enterRoutes = void 0;
    if (prevRoutes) {
      (function() {
        var parentIsLeaving = false;
        leaveRoutes = prevRoutes.filter(function(route) {
          if (parentIsLeaving) {
            return true;
          } else {
            var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
            if (isLeaving)
              parentIsLeaving = true;
            return isLeaving;
          }
        });
        leaveRoutes.reverse();
        enterRoutes = [];
        changeRoutes = [];
        nextRoutes.forEach(function(route) {
          var isNew = prevRoutes.indexOf(route) === -1;
          var paramsChanged = leaveRoutes.indexOf(route) !== -1;
          if (isNew || paramsChanged)
            enterRoutes.push(route);
          else
            changeRoutes.push(route);
        });
      })();
    } else {
      leaveRoutes = [];
      changeRoutes = [];
      enterRoutes = nextRoutes;
    }
    return {
      leaveRoutes: leaveRoutes,
      changeRoutes: changeRoutes,
      enterRoutes: enterRoutes
    };
  }
  exports.default = computeChangedRoutes;
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/TransitionUtils.js", ["npm:react-router@2.4.1/lib/AsyncUtils.js", "npm:react-router@2.4.1/lib/routerWarning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    exports.runEnterHooks = runEnterHooks;
    exports.runChangeHooks = runChangeHooks;
    exports.runLeaveHooks = runLeaveHooks;
    var _AsyncUtils = $__require('npm:react-router@2.4.1/lib/AsyncUtils.js');
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function createTransitionHook(hook, route, asyncArity) {
      return function() {
        for (var _len = arguments.length,
            args = Array(_len),
            _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        hook.apply(route, args);
        if (hook.length < asyncArity) {
          var callback = args[args.length - 1];
          callback();
        }
      };
    }
    function getEnterHooks(routes) {
      return routes.reduce(function(hooks, route) {
        if (route.onEnter)
          hooks.push(createTransitionHook(route.onEnter, route, 3));
        return hooks;
      }, []);
    }
    function getChangeHooks(routes) {
      return routes.reduce(function(hooks, route) {
        if (route.onChange)
          hooks.push(createTransitionHook(route.onChange, route, 4));
        return hooks;
      }, []);
    }
    function runTransitionHooks(length, iter, callback) {
      if (!length) {
        callback();
        return;
      }
      var redirectInfo = void 0;
      function replace(location, deprecatedPathname, deprecatedQuery) {
        if (deprecatedPathname) {
          "production" !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
          redirectInfo = {
            pathname: deprecatedPathname,
            query: deprecatedQuery,
            state: location
          };
          return;
        }
        redirectInfo = location;
      }
      (0, _AsyncUtils.loopAsync)(length, function(index, next, done) {
        iter(index, replace, function(error) {
          if (error || redirectInfo) {
            done(error, redirectInfo);
          } else {
            next();
          }
        });
      }, callback);
    }
    function runEnterHooks(routes, nextState, callback) {
      var hooks = getEnterHooks(routes);
      return runTransitionHooks(hooks.length, function(index, replace, next) {
        hooks[index](nextState, replace, next);
      }, callback);
    }
    function runChangeHooks(routes, state, nextState, callback) {
      var hooks = getChangeHooks(routes);
      return runTransitionHooks(hooks.length, function(index, replace, next) {
        hooks[index](state, nextState, replace, next);
      }, callback);
    }
    function runLeaveHooks(routes) {
      for (var i = 0,
          len = routes.length; i < len; ++i) {
        if (routes[i].onLeave)
          routes[i].onLeave.call(routes[i]);
      }
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/isActive.js", ["npm:react-router@2.4.1/lib/PatternUtils.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };
  exports.default = isActive;
  var _PatternUtils = $__require('npm:react-router@2.4.1/lib/PatternUtils.js');
  function deepEqual(a, b) {
    if (a == b)
      return true;
    if (a == null || b == null)
      return false;
    if (Array.isArray(a)) {
      return Array.isArray(b) && a.length === b.length && a.every(function(item, index) {
        return deepEqual(item, b[index]);
      });
    }
    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
      for (var p in a) {
        if (!Object.prototype.hasOwnProperty.call(a, p)) {
          continue;
        }
        if (a[p] === undefined) {
          if (b[p] !== undefined) {
            return false;
          }
        } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
          return false;
        } else if (!deepEqual(a[p], b[p])) {
          return false;
        }
      }
      return true;
    }
    return String(a) === String(b);
  }
  function pathIsActive(pathname, currentPathname) {
    if (currentPathname.charAt(0) !== '/') {
      currentPathname = '/' + currentPathname;
    }
    if (pathname.charAt(pathname.length - 1) !== '/') {
      pathname += '/';
    }
    if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
      currentPathname += '/';
    }
    return currentPathname === pathname;
  }
  function routeIsActive(pathname, routes, params) {
    var remainingPathname = pathname,
        paramNames = [],
        paramValues = [];
    for (var i = 0,
        len = routes.length; i < len; ++i) {
      var route = routes[i];
      var pattern = route.path || '';
      if (pattern.charAt(0) === '/') {
        remainingPathname = pathname;
        paramNames = [];
        paramValues = [];
      }
      if (remainingPathname !== null && pattern) {
        var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
        if (matched) {
          remainingPathname = matched.remainingPathname;
          paramNames = [].concat(paramNames, matched.paramNames);
          paramValues = [].concat(paramValues, matched.paramValues);
        } else {
          remainingPathname = null;
        }
        if (remainingPathname === '') {
          return paramNames.every(function(paramName, index) {
            return String(paramValues[index]) === String(params[paramName]);
          });
        }
      }
    }
    return false;
  }
  function queryIsActive(query, activeQuery) {
    if (activeQuery == null)
      return query == null;
    if (query == null)
      return true;
    return deepEqual(query, activeQuery);
  }
  function isActive(_ref, indexOnly, currentLocation, routes, params) {
    var pathname = _ref.pathname;
    var query = _ref.query;
    if (currentLocation == null)
      return false;
    if (pathname.charAt(0) !== '/') {
      pathname = '/' + pathname;
    }
    if (!pathIsActive(pathname, currentLocation.pathname)) {
      if (indexOnly || !routeIsActive(pathname, routes, params)) {
        return false;
      }
    }
    return queryIsActive(query, currentLocation.query);
  }
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/getComponents.js", ["npm:react-router@2.4.1/lib/AsyncUtils.js", "npm:react-router@2.4.1/lib/deprecateObjectProperties.js", "npm:react-router@2.4.1/lib/routerWarning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _AsyncUtils = $__require('npm:react-router@2.4.1/lib/AsyncUtils.js');
    var _deprecateObjectProperties = $__require('npm:react-router@2.4.1/lib/deprecateObjectProperties.js');
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function getComponentsForRoute(nextState, route, callback) {
      if (route.component || route.components) {
        callback(null, route.component || route.components);
        return;
      }
      var getComponent = route.getComponent || route.getComponents;
      if (!getComponent) {
        callback();
        return;
      }
      var location = nextState.location;
      var nextStateWithLocation = void 0;
      if ("production" !== 'production' && _deprecateObjectProperties.canUseMembrane) {
        nextStateWithLocation = _extends({}, nextState);
        var _loop = function _loop(prop) {
          if (!Object.prototype.hasOwnProperty.call(location, prop)) {
            return 'continue';
          }
          Object.defineProperty(nextStateWithLocation, prop, {get: function get() {
              "production" !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties from the first argument to `getComponent` and `getComponents` is deprecated. That argument is now the router state (`nextState`) rather than the location. To access the location, use `nextState.location`.') : void 0;
              return location[prop];
            }});
        };
        for (var prop in location) {
          var _ret = _loop(prop);
          if (_ret === 'continue')
            continue;
        }
      } else {
        nextStateWithLocation = _extends({}, nextState, location);
      }
      getComponent.call(route, nextStateWithLocation, callback);
    }
    function getComponents(nextState, callback) {
      (0, _AsyncUtils.mapAsync)(nextState.routes, function(route, index, callback) {
        getComponentsForRoute(nextState, route, callback);
      }, callback);
    }
    exports.default = getComponents;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/AsyncUtils.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports.loopAsync = loopAsync;
  exports.mapAsync = mapAsync;
  function loopAsync(turns, work, callback) {
    var currentTurn = 0,
        isDone = false;
    var sync = false,
        hasNext = false,
        doneArgs = void 0;
    function done() {
      isDone = true;
      if (sync) {
        doneArgs = [].concat(Array.prototype.slice.call(arguments));
        return;
      }
      callback.apply(this, arguments);
    }
    function next() {
      if (isDone) {
        return;
      }
      hasNext = true;
      if (sync) {
        return;
      }
      sync = true;
      while (!isDone && currentTurn < turns && hasNext) {
        hasNext = false;
        work.call(this, currentTurn++, next, done);
      }
      sync = false;
      if (isDone) {
        callback.apply(this, doneArgs);
        return;
      }
      if (currentTurn >= turns && hasNext) {
        isDone = true;
        callback();
      }
    }
    next();
  }
  function mapAsync(array, work, callback) {
    var length = array.length;
    var values = [];
    if (length === 0)
      return callback(null, values);
    var isDone = false,
        doneCount = 0;
    function done(index, error, value) {
      if (isDone)
        return;
      if (error) {
        isDone = true;
        callback(error);
      } else {
        values[index] = value;
        isDone = ++doneCount === length;
        if (isDone)
          callback(null, values);
      }
    }
    array.forEach(function(item, index) {
      work(item, index, function(error, value) {
        done(index, error, value);
      });
    });
  }
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/matchRoutes.js", ["npm:react-router@2.4.1/lib/routerWarning.js", "npm:react-router@2.4.1/lib/AsyncUtils.js", "npm:react-router@2.4.1/lib/PatternUtils.js", "npm:react-router@2.4.1/lib/RouteUtils.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    exports.default = matchRoutes;
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    var _AsyncUtils = $__require('npm:react-router@2.4.1/lib/AsyncUtils.js');
    var _PatternUtils = $__require('npm:react-router@2.4.1/lib/PatternUtils.js');
    var _RouteUtils = $__require('npm:react-router@2.4.1/lib/RouteUtils.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function getChildRoutes(route, location, callback) {
      if (route.childRoutes) {
        return [null, route.childRoutes];
      }
      if (!route.getChildRoutes) {
        return [];
      }
      var sync = true,
          result = void 0;
      route.getChildRoutes(location, function(error, childRoutes) {
        childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
        if (sync) {
          result = [error, childRoutes];
          return;
        }
        callback(error, childRoutes);
      });
      sync = false;
      return result;
    }
    function getIndexRoute(route, location, callback) {
      if (route.indexRoute) {
        callback(null, route.indexRoute);
      } else if (route.getIndexRoute) {
        route.getIndexRoute(location, function(error, indexRoute) {
          callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
        });
      } else if (route.childRoutes) {
        (function() {
          var pathless = route.childRoutes.filter(function(childRoute) {
            return !childRoute.path;
          });
          (0, _AsyncUtils.loopAsync)(pathless.length, function(index, next, done) {
            getIndexRoute(pathless[index], location, function(error, indexRoute) {
              if (error || indexRoute) {
                var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
                done(error, routes);
              } else {
                next();
              }
            });
          }, function(err, routes) {
            callback(null, routes);
          });
        })();
      } else {
        callback();
      }
    }
    function assignParams(params, paramNames, paramValues) {
      return paramNames.reduce(function(params, paramName, index) {
        var paramValue = paramValues && paramValues[index];
        if (Array.isArray(params[paramName])) {
          params[paramName].push(paramValue);
        } else if (paramName in params) {
          params[paramName] = [params[paramName], paramValue];
        } else {
          params[paramName] = paramValue;
        }
        return params;
      }, params);
    }
    function createParams(paramNames, paramValues) {
      return assignParams({}, paramNames, paramValues);
    }
    function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
      var pattern = route.path || '';
      if (pattern.charAt(0) === '/') {
        remainingPathname = location.pathname;
        paramNames = [];
        paramValues = [];
      }
      if (remainingPathname !== null && pattern) {
        try {
          var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
          if (matched) {
            remainingPathname = matched.remainingPathname;
            paramNames = [].concat(paramNames, matched.paramNames);
            paramValues = [].concat(paramValues, matched.paramValues);
          } else {
            remainingPathname = null;
          }
        } catch (error) {
          callback(error);
        }
        if (remainingPathname === '') {
          var _ret2 = function() {
            var match = {
              routes: [route],
              params: createParams(paramNames, paramValues)
            };
            getIndexRoute(route, location, function(error, indexRoute) {
              if (error) {
                callback(error);
              } else {
                if (Array.isArray(indexRoute)) {
                  var _match$routes;
                  "production" !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function(route) {
                    return !route.path;
                  }), 'Index routes should not have paths') : void 0;
                  (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
                } else if (indexRoute) {
                  "production" !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
                  match.routes.push(indexRoute);
                }
                callback(null, match);
              }
            });
            return {v: void 0};
          }();
          if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object")
            return _ret2.v;
        }
      }
      if (remainingPathname != null || route.childRoutes) {
        var onChildRoutes = function onChildRoutes(error, childRoutes) {
          if (error) {
            callback(error);
          } else if (childRoutes) {
            matchRoutes(childRoutes, location, function(error, match) {
              if (error) {
                callback(error);
              } else if (match) {
                match.routes.unshift(route);
                callback(null, match);
              } else {
                callback();
              }
            }, remainingPathname, paramNames, paramValues);
          } else {
            callback();
          }
        };
        var result = getChildRoutes(route, location, onChildRoutes);
        if (result) {
          onChildRoutes.apply(undefined, result);
        }
      } else {
        callback();
      }
    }
    function matchRoutes(routes, location, callback, remainingPathname) {
      var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
      var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
      if (remainingPathname === undefined) {
        if (location.pathname.charAt(0) !== '/') {
          location = _extends({}, location, {pathname: '/' + location.pathname});
        }
        remainingPathname = location.pathname;
      }
      (0, _AsyncUtils.loopAsync)(routes.length, function(index, next, done) {
        matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function(error, match) {
          if (error || match) {
            done(error, match);
          } else {
            next();
          }
        });
      }, callback);
    }
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/createTransitionManager.js", ["npm:react-router@2.4.1/lib/routerWarning.js", "npm:history@2.1.2/lib/Actions.js", "npm:react-router@2.4.1/lib/computeChangedRoutes.js", "npm:react-router@2.4.1/lib/TransitionUtils.js", "npm:react-router@2.4.1/lib/isActive.js", "npm:react-router@2.4.1/lib/getComponents.js", "npm:react-router@2.4.1/lib/matchRoutes.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    exports.default = createTransitionManager;
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    var _Actions = $__require('npm:history@2.1.2/lib/Actions.js');
    var _computeChangedRoutes2 = $__require('npm:react-router@2.4.1/lib/computeChangedRoutes.js');
    var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);
    var _TransitionUtils = $__require('npm:react-router@2.4.1/lib/TransitionUtils.js');
    var _isActive2 = $__require('npm:react-router@2.4.1/lib/isActive.js');
    var _isActive3 = _interopRequireDefault(_isActive2);
    var _getComponents = $__require('npm:react-router@2.4.1/lib/getComponents.js');
    var _getComponents2 = _interopRequireDefault(_getComponents);
    var _matchRoutes = $__require('npm:react-router@2.4.1/lib/matchRoutes.js');
    var _matchRoutes2 = _interopRequireDefault(_matchRoutes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function hasAnyProperties(object) {
      for (var p in object) {
        if (Object.prototype.hasOwnProperty.call(object, p))
          return true;
      }
      return false;
    }
    function createTransitionManager(history, routes) {
      var state = {};
      function isActive(location) {
        var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
        var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
        var indexOnly = void 0;
        if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
          "production" !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
          location = {
            pathname: location,
            query: indexOnlyOrDeprecatedQuery
          };
          indexOnly = deprecatedIndexOnly || false;
        } else {
          location = history.createLocation(location);
          indexOnly = indexOnlyOrDeprecatedQuery;
        }
        return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
      }
      function createLocationFromRedirectInfo(location) {
        return history.createLocation(location, _Actions.REPLACE);
      }
      var partialNextState = void 0;
      function match(location, callback) {
        if (partialNextState && partialNextState.location === location) {
          finishMatch(partialNextState, callback);
        } else {
          (0, _matchRoutes2.default)(routes, location, function(error, nextState) {
            if (error) {
              callback(error);
            } else if (nextState) {
              finishMatch(_extends({}, nextState, {location: location}), callback);
            } else {
              callback();
            }
          });
        }
      }
      function finishMatch(nextState, callback) {
        var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);
        var leaveRoutes = _computeChangedRoutes.leaveRoutes;
        var changeRoutes = _computeChangedRoutes.changeRoutes;
        var enterRoutes = _computeChangedRoutes.enterRoutes;
        (0, _TransitionUtils.runLeaveHooks)(leaveRoutes);
        leaveRoutes.filter(function(route) {
          return enterRoutes.indexOf(route) === -1;
        }).forEach(removeListenBeforeHooksForRoute);
        (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function(error, redirectInfo) {
          if (error || redirectInfo)
            return handleErrorOrRedirect(error, redirectInfo);
          (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
        });
        function finishEnterHooks(error, redirectInfo) {
          if (error || redirectInfo)
            return handleErrorOrRedirect(error, redirectInfo);
          (0, _getComponents2.default)(nextState, function(error, components) {
            if (error) {
              callback(error);
            } else {
              callback(null, null, state = _extends({}, nextState, {components: components}));
            }
          });
        }
        function handleErrorOrRedirect(error, redirectInfo) {
          if (error)
            callback(error);
          else
            callback(null, createLocationFromRedirectInfo(redirectInfo));
        }
      }
      var RouteGuid = 1;
      function getRouteID(route) {
        var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
        return route.__id__ || create && (route.__id__ = RouteGuid++);
      }
      var RouteHooks = Object.create(null);
      function getRouteHooksForRoutes(routes) {
        return routes.reduce(function(hooks, route) {
          hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
          return hooks;
        }, []);
      }
      function transitionHook(location, callback) {
        (0, _matchRoutes2.default)(routes, location, function(error, nextState) {
          if (nextState == null) {
            callback();
            return;
          }
          partialNextState = _extends({}, nextState, {location: location});
          var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);
          var result = void 0;
          for (var i = 0,
              len = hooks.length; result == null && i < len; ++i) {
            result = hooks[i](location);
          }
          callback(result);
        });
      }
      function beforeUnloadHook() {
        if (state.routes) {
          var hooks = getRouteHooksForRoutes(state.routes);
          var message = void 0;
          for (var i = 0,
              len = hooks.length; typeof message !== 'string' && i < len; ++i) {
            message = hooks[i]();
          }
          return message;
        }
      }
      var unlistenBefore = void 0,
          unlistenBeforeUnload = void 0;
      function removeListenBeforeHooksForRoute(route) {
        var routeID = getRouteID(route, false);
        if (!routeID) {
          return;
        }
        delete RouteHooks[routeID];
        if (!hasAnyProperties(RouteHooks)) {
          if (unlistenBefore) {
            unlistenBefore();
            unlistenBefore = null;
          }
          if (unlistenBeforeUnload) {
            unlistenBeforeUnload();
            unlistenBeforeUnload = null;
          }
        }
      }
      function listenBeforeLeavingRoute(route, hook) {
        var routeID = getRouteID(route);
        var hooks = RouteHooks[routeID];
        if (!hooks) {
          var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
          RouteHooks[routeID] = [hook];
          if (thereWereNoRouteHooks) {
            unlistenBefore = history.listenBefore(transitionHook);
            if (history.listenBeforeUnload)
              unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
          }
        } else {
          if (hooks.indexOf(hook) === -1) {
            "production" !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;
            hooks.push(hook);
          }
        }
        return function() {
          var hooks = RouteHooks[routeID];
          if (hooks) {
            var newHooks = hooks.filter(function(item) {
              return item !== hook;
            });
            if (newHooks.length === 0) {
              removeListenBeforeHooksForRoute(route);
            } else {
              RouteHooks[routeID] = newHooks;
            }
          }
        };
      }
      function listen(listener) {
        return history.listen(function(location) {
          if (state.location === location) {
            listener(null, state);
          } else {
            match(location, function(error, redirectLocation, nextState) {
              if (error) {
                listener(error);
              } else if (redirectLocation) {
                history.transitionTo(redirectLocation);
              } else if (nextState) {
                listener(null, nextState);
              } else {
                "production" !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
              }
            });
          }
        });
      }
      return {
        isActive: isActive,
        match: match,
        listenBeforeLeavingRoute: listenBeforeLeavingRoute,
        listen: listen
      };
    }
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/RouterUtils.js", ["npm:react-router@2.4.1/lib/deprecateObjectProperties.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    exports.createRouterObject = createRouterObject;
    exports.createRoutingHistory = createRoutingHistory;
    var _deprecateObjectProperties = $__require('npm:react-router@2.4.1/lib/deprecateObjectProperties.js');
    var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function createRouterObject(history, transitionManager) {
      return _extends({}, history, {
        setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
        isActive: transitionManager.isActive
      });
    }
    function createRoutingHistory(history, transitionManager) {
      history = _extends({}, history, transitionManager);
      if ("production" !== 'production') {
        history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
      }
      return history;
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/match.js", ["npm:invariant@2.2.1.js", "npm:react-router@2.4.1/lib/createMemoryHistory.js", "npm:react-router@2.4.1/lib/createTransitionManager.js", "npm:react-router@2.4.1/lib/RouteUtils.js", "npm:react-router@2.4.1/lib/RouterUtils.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _createMemoryHistory = $__require('npm:react-router@2.4.1/lib/createMemoryHistory.js');
    var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
    var _createTransitionManager = $__require('npm:react-router@2.4.1/lib/createTransitionManager.js');
    var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
    var _RouteUtils = $__require('npm:react-router@2.4.1/lib/RouteUtils.js');
    var _RouterUtils = $__require('npm:react-router@2.4.1/lib/RouterUtils.js');
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    function match(_ref, callback) {
      var history = _ref.history;
      var routes = _ref.routes;
      var location = _ref.location;
      var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);
      !(history || location) ? "production" !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;
      history = history ? history : (0, _createMemoryHistory2.default)(options);
      var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));
      var unlisten = void 0;
      if (location) {
        location = history.createLocation(location);
      } else {
        unlisten = history.listen(function(historyLocation) {
          location = historyLocation;
        });
      }
      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
      history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);
      transitionManager.match(location, function(error, redirectLocation, nextState) {
        callback(error, redirectLocation, nextState && _extends({}, nextState, {
          history: history,
          router: router,
          matchContext: {
            history: history,
            transitionManager: transitionManager,
            router: router
          }
        }));
        if (unlisten) {
          unlisten();
        }
      });
    }
    exports.default = match;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/deprecateObjectProperties.js", ["npm:react-router@2.4.1/lib/routerWarning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    exports.canUseMembrane = undefined;
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var canUseMembrane = exports.canUseMembrane = false;
    var deprecateObjectProperties = function deprecateObjectProperties(object) {
      return object;
    };
    if ("production" !== 'production') {
      try {
        if (Object.defineProperty({}, 'x', {get: function get() {
            return true;
          }}).x) {
          exports.canUseMembrane = canUseMembrane = true;
        }
      } catch (e) {}
      if (canUseMembrane) {
        deprecateObjectProperties = function deprecateObjectProperties(object, message) {
          var membrane = {};
          var _loop = function _loop(prop) {
            if (!Object.prototype.hasOwnProperty.call(object, prop)) {
              return 'continue';
            }
            if (typeof object[prop] === 'function') {
              membrane[prop] = function() {
                "production" !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
                return object[prop].apply(object, arguments);
              };
              return 'continue';
            }
            Object.defineProperty(membrane, prop, {get: function get() {
                "production" !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
                return object[prop];
              }});
          };
          for (var prop in object) {
            var _ret = _loop(prop);
            if (_ret === 'continue')
              continue;
          }
          return membrane;
        };
      }
    }
    exports.default = deprecateObjectProperties;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/PatternUtils.js", ["npm:invariant@2.2.1.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    exports.compilePattern = compilePattern;
    exports.matchPattern = matchPattern;
    exports.getParamNames = getParamNames;
    exports.getParams = getParams;
    exports.formatPattern = formatPattern;
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    function _compilePattern(pattern) {
      var regexpSource = '';
      var paramNames = [];
      var tokens = [];
      var match = void 0,
          lastIndex = 0,
          matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
      while (match = matcher.exec(pattern)) {
        if (match.index !== lastIndex) {
          tokens.push(pattern.slice(lastIndex, match.index));
          regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
        }
        if (match[1]) {
          regexpSource += '([^/]+)';
          paramNames.push(match[1]);
        } else if (match[0] === '**') {
          regexpSource += '(.*)';
          paramNames.push('splat');
        } else if (match[0] === '*') {
          regexpSource += '(.*?)';
          paramNames.push('splat');
        } else if (match[0] === '(') {
          regexpSource += '(?:';
        } else if (match[0] === ')') {
          regexpSource += ')?';
        }
        tokens.push(match[0]);
        lastIndex = matcher.lastIndex;
      }
      if (lastIndex !== pattern.length) {
        tokens.push(pattern.slice(lastIndex, pattern.length));
        regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
      }
      return {
        pattern: pattern,
        regexpSource: regexpSource,
        paramNames: paramNames,
        tokens: tokens
      };
    }
    var CompiledPatternsCache = {};
    function compilePattern(pattern) {
      if (!(pattern in CompiledPatternsCache))
        CompiledPatternsCache[pattern] = _compilePattern(pattern);
      return CompiledPatternsCache[pattern];
    }
    function matchPattern(pattern, pathname) {
      if (pattern.charAt(0) !== '/') {
        pattern = '/' + pattern;
      }
      var _compilePattern2 = compilePattern(pattern);
      var regexpSource = _compilePattern2.regexpSource;
      var paramNames = _compilePattern2.paramNames;
      var tokens = _compilePattern2.tokens;
      if (pattern.charAt(pattern.length - 1) !== '/') {
        regexpSource += '/?';
      }
      if (tokens[tokens.length - 1] === '*') {
        regexpSource += '$';
      }
      var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
      if (match == null) {
        return null;
      }
      var matchedPath = match[0];
      var remainingPathname = pathname.substr(matchedPath.length);
      if (remainingPathname) {
        if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
          return null;
        }
        remainingPathname = '/' + remainingPathname;
      }
      return {
        remainingPathname: remainingPathname,
        paramNames: paramNames,
        paramValues: match.slice(1).map(function(v) {
          return v && decodeURIComponent(v);
        })
      };
    }
    function getParamNames(pattern) {
      return compilePattern(pattern).paramNames;
    }
    function getParams(pattern, pathname) {
      var match = matchPattern(pattern, pathname);
      if (!match) {
        return null;
      }
      var paramNames = match.paramNames;
      var paramValues = match.paramValues;
      var params = {};
      paramNames.forEach(function(paramName, index) {
        params[paramName] = paramValues[index];
      });
      return params;
    }
    function formatPattern(pattern, params) {
      params = params || {};
      var _compilePattern3 = compilePattern(pattern);
      var tokens = _compilePattern3.tokens;
      var parenCount = 0,
          pathname = '',
          splatIndex = 0;
      var token = void 0,
          paramName = void 0,
          paramValue = void 0;
      for (var i = 0,
          len = tokens.length; i < len; ++i) {
        token = tokens[i];
        if (token === '*' || token === '**') {
          paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
          !(paramValue != null || parenCount > 0) ? "production" !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;
          if (paramValue != null)
            pathname += encodeURI(paramValue);
        } else if (token === '(') {
          parenCount += 1;
        } else if (token === ')') {
          parenCount -= 1;
        } else if (token.charAt(0) === ':') {
          paramName = token.substring(1);
          paramValue = params[paramName];
          !(paramValue != null || parenCount > 0) ? "production" !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;
          if (paramValue != null)
            pathname += encodeURIComponent(paramValue);
        } else {
          pathname += token;
        }
      }
      return pathname.replace(/\/+/g, '/');
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/getRouteParams.js", ["npm:react-router@2.4.1/lib/PatternUtils.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _PatternUtils = $__require('npm:react-router@2.4.1/lib/PatternUtils.js');
  function getRouteParams(route, params) {
    var routeParams = {};
    if (!route.path)
      return routeParams;
    var paramNames = (0, _PatternUtils.getParamNames)(route.path);
    for (var p in params) {
      if (Object.prototype.hasOwnProperty.call(params, p) && paramNames.indexOf(p) !== -1) {
        routeParams[p] = params[p];
      }
    }
    return routeParams;
  }
  exports.default = getRouteParams;
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/PooledClass.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var oneArgumentPooler = function(copyFieldsFrom) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, copyFieldsFrom);
        return instance;
      } else {
        return new Klass(copyFieldsFrom);
      }
    };
    var twoArgumentPooler = function(a1, a2) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2);
        return instance;
      } else {
        return new Klass(a1, a2);
      }
    };
    var threeArgumentPooler = function(a1, a2, a3) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3);
        return instance;
      } else {
        return new Klass(a1, a2, a3);
      }
    };
    var fourArgumentPooler = function(a1, a2, a3, a4) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3, a4);
        return instance;
      } else {
        return new Klass(a1, a2, a3, a4);
      }
    };
    var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3, a4, a5);
        return instance;
      } else {
        return new Klass(a1, a2, a3, a4, a5);
      }
    };
    var standardReleaser = function(instance) {
      var Klass = this;
      !(instance instanceof Klass) ? "production" !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : void 0;
      instance.destructor();
      if (Klass.instancePool.length < Klass.poolSize) {
        Klass.instancePool.push(instance);
      }
    };
    var DEFAULT_POOL_SIZE = 10;
    var DEFAULT_POOLER = oneArgumentPooler;
    var addPoolingTo = function(CopyConstructor, pooler) {
      var NewKlass = CopyConstructor;
      NewKlass.instancePool = [];
      NewKlass.getPooled = pooler || DEFAULT_POOLER;
      if (!NewKlass.poolSize) {
        NewKlass.poolSize = DEFAULT_POOL_SIZE;
      }
      NewKlass.release = standardReleaser;
      return NewKlass;
    };
    var PooledClass = {
      addPoolingTo: addPoolingTo,
      oneArgumentPooler: oneArgumentPooler,
      twoArgumentPooler: twoArgumentPooler,
      threeArgumentPooler: threeArgumentPooler,
      fourArgumentPooler: fourArgumentPooler,
      fiveArgumentPooler: fiveArgumentPooler
    };
    module.exports = PooledClass;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/KeyEscapeUtils.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function escape(key) {
    var escapeRegex = /[=:]/g;
    var escaperLookup = {
      '=': '=0',
      ':': '=2'
    };
    var escapedString = ('' + key).replace(escapeRegex, function(match) {
      return escaperLookup[match];
    });
    return '$' + escapedString;
  }
  function unescape(key) {
    var unescapeRegex = /(=0|=2)/g;
    var unescaperLookup = {
      '=0': '=',
      '=2': ':'
    };
    var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
    return ('' + keySubstring).replace(unescapeRegex, function(match) {
      return unescaperLookup[match];
    });
  }
  var KeyEscapeUtils = {
    escape: escape,
    unescape: unescape
  };
  module.exports = KeyEscapeUtils;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/traverseAllChildren.js", ["npm:react@15.1.0/lib/ReactCurrentOwner.js", "npm:react@15.1.0/lib/ReactElement.js", "npm:react@15.1.0/lib/getIteratorFn.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:react@15.1.0/lib/KeyEscapeUtils.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactCurrentOwner = $__require('npm:react@15.1.0/lib/ReactCurrentOwner.js');
    var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
    var getIteratorFn = $__require('npm:react@15.1.0/lib/getIteratorFn.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var KeyEscapeUtils = $__require('npm:react@15.1.0/lib/KeyEscapeUtils.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    var didWarnAboutMaps = false;
    function getComponentKey(component, index) {
      if (component && typeof component === 'object' && component.key != null) {
        return KeyEscapeUtils.escape(component.key);
      }
      return index.toString(36);
    }
    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = typeof children;
      if (type === 'undefined' || type === 'boolean') {
        children = null;
      }
      if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
        callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }
      var child;
      var nextName;
      var subtreeCount = 0;
      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);
        if (iteratorFn) {
          var iterator = iteratorFn.call(children);
          var step;
          if (iteratorFn !== children.entries) {
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else {
            if ("production" !== 'production') {
              "production" !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : void 0;
              didWarnAboutMaps = true;
            }
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                child = entry[1];
                nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            }
          }
        } else if (type === 'object') {
          var addendum = '';
          if ("production" !== 'production') {
            addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
            if (children._isReactElement) {
              addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
            }
            if (ReactCurrentOwner.current) {
              var name = ReactCurrentOwner.current.getName();
              if (name) {
                addendum += ' Check the render method of `' + name + '`.';
              }
            }
          }
          var childrenString = String(children);
          !false ? "production" !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : void 0;
        }
      }
      return subtreeCount;
    }
    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }
      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }
    module.exports = traverseAllChildren;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactChildren.js", ["npm:react@15.1.0/lib/PooledClass.js", "npm:react@15.1.0/lib/ReactElement.js", "npm:fbjs@0.8.3/lib/emptyFunction.js", "npm:react@15.1.0/lib/traverseAllChildren.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var PooledClass = $__require('npm:react@15.1.0/lib/PooledClass.js');
  var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
  var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
  var traverseAllChildren = $__require('npm:react@15.1.0/lib/traverseAllChildren.js');
  var twoArgumentPooler = PooledClass.twoArgumentPooler;
  var fourArgumentPooler = PooledClass.fourArgumentPooler;
  var userProvidedKeyEscapeRegex = /\/+/g;
  function escapeUserProvidedKey(text) {
    return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
  }
  function ForEachBookKeeping(forEachFunction, forEachContext) {
    this.func = forEachFunction;
    this.context = forEachContext;
    this.count = 0;
  }
  ForEachBookKeeping.prototype.destructor = function() {
    this.func = null;
    this.context = null;
    this.count = 0;
  };
  PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
  function forEachSingleChild(bookKeeping, child, name) {
    var func = bookKeeping.func;
    var context = bookKeeping.context;
    func.call(context, child, bookKeeping.count++);
  }
  function forEachChildren(children, forEachFunc, forEachContext) {
    if (children == null) {
      return children;
    }
    var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
    traverseAllChildren(children, forEachSingleChild, traverseContext);
    ForEachBookKeeping.release(traverseContext);
  }
  function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
    this.result = mapResult;
    this.keyPrefix = keyPrefix;
    this.func = mapFunction;
    this.context = mapContext;
    this.count = 0;
  }
  MapBookKeeping.prototype.destructor = function() {
    this.result = null;
    this.keyPrefix = null;
    this.func = null;
    this.context = null;
    this.count = 0;
  };
  PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
  function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    var result = bookKeeping.result;
    var keyPrefix = bookKeeping.keyPrefix;
    var func = bookKeeping.func;
    var context = bookKeeping.context;
    var mappedChild = func.call(context, child, bookKeeping.count++);
    if (Array.isArray(mappedChild)) {
      mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
    } else if (mappedChild != null) {
      if (ReactElement.isValidElement(mappedChild)) {
        mappedChild = ReactElement.cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
      }
      result.push(mappedChild);
    }
  }
  function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
    var escapedPrefix = '';
    if (prefix != null) {
      escapedPrefix = escapeUserProvidedKey(prefix) + '/';
    }
    var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
    MapBookKeeping.release(traverseContext);
  }
  function mapChildren(children, func, context) {
    if (children == null) {
      return children;
    }
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
    return result;
  }
  function forEachSingleChildDummy(traverseContext, child, name) {
    return null;
  }
  function countChildren(children, context) {
    return traverseAllChildren(children, forEachSingleChildDummy, null);
  }
  function toArray(children) {
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
    return result;
  }
  var ReactChildren = {
    forEach: forEachChildren,
    map: mapChildren,
    mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
    count: countChildren,
    toArray: toArray
  };
  module.exports = ReactChildren;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: !canUseDOM
  };
  module.exports = ExecutionEnvironment;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/performance.js", ["npm:fbjs@0.8.3/lib/ExecutionEnvironment.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
  var performance;
  if (ExecutionEnvironment.canUseDOM) {
    performance = window.performance || window.msPerformance || window.webkitPerformance;
  }
  module.exports = performance || {};
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/performanceNow.js", ["npm:fbjs@0.8.3/lib/performance.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var performance = $__require('npm:fbjs@0.8.3/lib/performance.js');
  var performanceNow;
  if (performance.now) {
    performanceNow = function performanceNow() {
      return performance.now();
    };
  } else {
    performanceNow = function performanceNow() {
      return Date.now();
    };
  }
  module.exports = performanceNow;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactInvalidSetStateWarningDevTool.js", ["npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    if ("production" !== 'production') {
      var processingChildContext = false;
      var warnInvalidSetState = function() {
        "production" !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
      };
    }
    var ReactInvalidSetStateWarningDevTool = {
      onBeginProcessingChildContext: function() {
        processingChildContext = true;
      },
      onEndProcessingChildContext: function() {
        processingChildContext = false;
      },
      onSetState: function() {
        warnInvalidSetState();
      }
    };
    module.exports = ReactInvalidSetStateWarningDevTool;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactNativeOperationHistoryDevtool.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var history = [];
  var ReactNativeOperationHistoryDevtool = {
    onNativeOperation: function(debugID, type, payload) {
      history.push({
        instanceID: debugID,
        type: type,
        payload: payload
      });
    },
    clearHistory: function() {
      if (ReactNativeOperationHistoryDevtool._preventClearing) {
        return;
      }
      history = [];
    },
    getHistory: function() {
      return history;
    }
  };
  module.exports = ReactNativeOperationHistoryDevtool;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactComponentTreeDevtool.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var tree = {};
    var rootIDs = [];
    function updateTree(id, update) {
      if (!tree[id]) {
        tree[id] = {
          parentID: null,
          ownerID: null,
          text: null,
          childIDs: [],
          displayName: 'Unknown',
          isMounted: false,
          updateCount: 0
        };
      }
      update(tree[id]);
    }
    function purgeDeep(id) {
      var item = tree[id];
      if (item) {
        var childIDs = item.childIDs;
        delete tree[id];
        childIDs.forEach(purgeDeep);
      }
    }
    var ReactComponentTreeDevtool = {
      onSetDisplayName: function(id, displayName) {
        updateTree(id, function(item) {
          return item.displayName = displayName;
        });
      },
      onSetChildren: function(id, nextChildIDs) {
        updateTree(id, function(item) {
          var prevChildIDs = item.childIDs;
          item.childIDs = nextChildIDs;
          nextChildIDs.forEach(function(nextChildID) {
            var nextChild = tree[nextChildID];
            !nextChild ? "production" !== 'production' ? invariant(false, 'Expected devtool events to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
            !(nextChild.displayName != null) ? "production" !== 'production' ? invariant(false, 'Expected onSetDisplayName() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
            !(nextChild.childIDs != null || nextChild.text != null) ? "production" !== 'production' ? invariant(false, 'Expected onSetChildren() or onSetText() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
            !nextChild.isMounted ? "production" !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
            if (prevChildIDs.indexOf(nextChildID) === -1) {
              nextChild.parentID = id;
            }
          });
        });
      },
      onSetOwner: function(id, ownerID) {
        updateTree(id, function(item) {
          return item.ownerID = ownerID;
        });
      },
      onSetText: function(id, text) {
        updateTree(id, function(item) {
          return item.text = text;
        });
      },
      onMountComponent: function(id) {
        updateTree(id, function(item) {
          return item.isMounted = true;
        });
      },
      onMountRootComponent: function(id) {
        rootIDs.push(id);
      },
      onUpdateComponent: function(id) {
        updateTree(id, function(item) {
          return item.updateCount++;
        });
      },
      onUnmountComponent: function(id) {
        updateTree(id, function(item) {
          return item.isMounted = false;
        });
        rootIDs = rootIDs.filter(function(rootID) {
          return rootID !== id;
        });
      },
      purgeUnmountedComponents: function() {
        if (ReactComponentTreeDevtool._preventPurging) {
          return;
        }
        Object.keys(tree).filter(function(id) {
          return !tree[id].isMounted;
        }).forEach(purgeDeep);
      },
      isMounted: function(id) {
        var item = tree[id];
        return item ? item.isMounted : false;
      },
      getChildIDs: function(id) {
        var item = tree[id];
        return item ? item.childIDs : [];
      },
      getDisplayName: function(id) {
        var item = tree[id];
        return item ? item.displayName : 'Unknown';
      },
      getOwnerID: function(id) {
        var item = tree[id];
        return item ? item.ownerID : null;
      },
      getParentID: function(id) {
        var item = tree[id];
        return item ? item.parentID : null;
      },
      getText: function(id) {
        var item = tree[id];
        return item ? item.text : null;
      },
      getUpdateCount: function(id) {
        var item = tree[id];
        return item ? item.updateCount : 0;
      },
      getRootIDs: function() {
        return rootIDs;
      },
      getRegisteredIDs: function() {
        return Object.keys(tree);
      }
    };
    module.exports = ReactComponentTreeDevtool;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDebugTool.js", ["npm:fbjs@0.8.3/lib/ExecutionEnvironment.js", "npm:fbjs@0.8.3/lib/performanceNow.js", "npm:fbjs@0.8.3/lib/warning.js", "npm:react@15.1.0/lib/ReactInvalidSetStateWarningDevTool.js", "npm:react@15.1.0/lib/ReactNativeOperationHistoryDevtool.js", "npm:react@15.1.0/lib/ReactComponentTreeDevtool.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.3/lib/ExecutionEnvironment.js');
    var performanceNow = $__require('npm:fbjs@0.8.3/lib/performanceNow.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var eventHandlers = [];
    var handlerDoesThrowForEvent = {};
    function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
      if ("production" !== 'production') {
        eventHandlers.forEach(function(handler) {
          try {
            if (handler[handlerFunctionName]) {
              handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
            }
          } catch (e) {
            "production" !== 'production' ? warning(!handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by devtool while handling %s: %s', handlerFunctionName, e.message) : void 0;
            handlerDoesThrowForEvent[handlerFunctionName] = true;
          }
        });
      }
    }
    var isProfiling = false;
    var flushHistory = [];
    var currentFlushNesting = 0;
    var currentFlushMeasurements = null;
    var currentFlushStartTime = null;
    var currentTimerDebugID = null;
    var currentTimerStartTime = null;
    var currentTimerType = null;
    function clearHistory() {
      ReactComponentTreeDevtool.purgeUnmountedComponents();
      ReactNativeOperationHistoryDevtool.clearHistory();
    }
    function getTreeSnapshot(registeredIDs) {
      return registeredIDs.reduce(function(tree, id) {
        var ownerID = ReactComponentTreeDevtool.getOwnerID(id);
        var parentID = ReactComponentTreeDevtool.getParentID(id);
        tree[id] = {
          displayName: ReactComponentTreeDevtool.getDisplayName(id),
          text: ReactComponentTreeDevtool.getText(id),
          updateCount: ReactComponentTreeDevtool.getUpdateCount(id),
          childIDs: ReactComponentTreeDevtool.getChildIDs(id),
          ownerID: ownerID || ReactComponentTreeDevtool.getOwnerID(parentID),
          parentID: parentID
        };
        return tree;
      }, {});
    }
    function resetMeasurements() {
      if ("production" !== 'production') {
        var previousStartTime = currentFlushStartTime;
        var previousMeasurements = currentFlushMeasurements || [];
        var previousOperations = ReactNativeOperationHistoryDevtool.getHistory();
        if (!isProfiling || currentFlushNesting === 0) {
          currentFlushStartTime = null;
          currentFlushMeasurements = null;
          clearHistory();
          return;
        }
        if (previousMeasurements.length || previousOperations.length) {
          var registeredIDs = ReactComponentTreeDevtool.getRegisteredIDs();
          flushHistory.push({
            duration: performanceNow() - previousStartTime,
            measurements: previousMeasurements || [],
            operations: previousOperations || [],
            treeSnapshot: getTreeSnapshot(registeredIDs)
          });
        }
        clearHistory();
        currentFlushStartTime = performanceNow();
        currentFlushMeasurements = [];
      }
    }
    function checkDebugID(debugID) {
      "production" !== 'production' ? warning(debugID, 'ReactDebugTool: debugID may not be empty.') : void 0;
    }
    var ReactDebugTool = {
      addDevtool: function(devtool) {
        eventHandlers.push(devtool);
      },
      removeDevtool: function(devtool) {
        for (var i = 0; i < eventHandlers.length; i++) {
          if (eventHandlers[i] === devtool) {
            eventHandlers.splice(i, 1);
            i--;
          }
        }
      },
      beginProfiling: function() {
        if ("production" !== 'production') {
          if (isProfiling) {
            return;
          }
          isProfiling = true;
          flushHistory.length = 0;
          resetMeasurements();
        }
      },
      endProfiling: function() {
        if ("production" !== 'production') {
          if (!isProfiling) {
            return;
          }
          isProfiling = false;
          resetMeasurements();
        }
      },
      getFlushHistory: function() {
        if ("production" !== 'production') {
          return flushHistory;
        }
      },
      onBeginFlush: function() {
        if ("production" !== 'production') {
          currentFlushNesting++;
          resetMeasurements();
        }
        emitEvent('onBeginFlush');
      },
      onEndFlush: function() {
        if ("production" !== 'production') {
          resetMeasurements();
          currentFlushNesting--;
        }
        emitEvent('onEndFlush');
      },
      onBeginLifeCycleTimer: function(debugID, timerType) {
        checkDebugID(debugID);
        emitEvent('onBeginLifeCycleTimer', debugID, timerType);
        if ("production" !== 'production') {
          if (isProfiling && currentFlushNesting > 0) {
            "production" !== 'production' ? warning(!currentTimerType, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
            currentTimerStartTime = performanceNow();
            currentTimerDebugID = debugID;
            currentTimerType = timerType;
          }
        }
      },
      onEndLifeCycleTimer: function(debugID, timerType) {
        checkDebugID(debugID);
        if ("production" !== 'production') {
          if (isProfiling && currentFlushNesting > 0) {
            "production" !== 'production' ? warning(currentTimerType === timerType, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
            currentFlushMeasurements.push({
              timerType: timerType,
              instanceID: debugID,
              duration: performanceNow() - currentTimerStartTime
            });
            currentTimerStartTime = null;
            currentTimerDebugID = null;
            currentTimerType = null;
          }
        }
        emitEvent('onEndLifeCycleTimer', debugID, timerType);
      },
      onBeginReconcilerTimer: function(debugID, timerType) {
        checkDebugID(debugID);
        emitEvent('onBeginReconcilerTimer', debugID, timerType);
      },
      onEndReconcilerTimer: function(debugID, timerType) {
        checkDebugID(debugID);
        emitEvent('onEndReconcilerTimer', debugID, timerType);
      },
      onBeginProcessingChildContext: function() {
        emitEvent('onBeginProcessingChildContext');
      },
      onEndProcessingChildContext: function() {
        emitEvent('onEndProcessingChildContext');
      },
      onNativeOperation: function(debugID, type, payload) {
        checkDebugID(debugID);
        emitEvent('onNativeOperation', debugID, type, payload);
      },
      onSetState: function() {
        emitEvent('onSetState');
      },
      onSetDisplayName: function(debugID, displayName) {
        checkDebugID(debugID);
        emitEvent('onSetDisplayName', debugID, displayName);
      },
      onSetChildren: function(debugID, childDebugIDs) {
        checkDebugID(debugID);
        emitEvent('onSetChildren', debugID, childDebugIDs);
      },
      onSetOwner: function(debugID, ownerDebugID) {
        checkDebugID(debugID);
        emitEvent('onSetOwner', debugID, ownerDebugID);
      },
      onSetText: function(debugID, text) {
        checkDebugID(debugID);
        emitEvent('onSetText', debugID, text);
      },
      onMountRootComponent: function(debugID) {
        checkDebugID(debugID);
        emitEvent('onMountRootComponent', debugID);
      },
      onMountComponent: function(debugID) {
        checkDebugID(debugID);
        emitEvent('onMountComponent', debugID);
      },
      onUpdateComponent: function(debugID) {
        checkDebugID(debugID);
        emitEvent('onUpdateComponent', debugID);
      },
      onUnmountComponent: function(debugID) {
        checkDebugID(debugID);
        emitEvent('onUnmountComponent', debugID);
      }
    };
    if ("production" !== 'production') {
      var ReactInvalidSetStateWarningDevTool = $__require('npm:react@15.1.0/lib/ReactInvalidSetStateWarningDevTool.js');
      var ReactNativeOperationHistoryDevtool = $__require('npm:react@15.1.0/lib/ReactNativeOperationHistoryDevtool.js');
      var ReactComponentTreeDevtool = $__require('npm:react@15.1.0/lib/ReactComponentTreeDevtool.js');
      ReactDebugTool.addDevtool(ReactInvalidSetStateWarningDevTool);
      ReactDebugTool.addDevtool(ReactComponentTreeDevtool);
      ReactDebugTool.addDevtool(ReactNativeOperationHistoryDevtool);
      var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
      if (/[?&]react_perf\b/.test(url)) {
        ReactDebugTool.beginProfiling();
      }
    }
    module.exports = ReactDebugTool;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactInstrumentation.js", ["npm:react@15.1.0/lib/ReactDebugTool.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactDebugTool = $__require('npm:react@15.1.0/lib/ReactDebugTool.js');
  module.exports = {debugTool: ReactDebugTool};
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactComponent.js", ["npm:react@15.1.0/lib/ReactNoopUpdateQueue.js", "npm:react@15.1.0/lib/ReactInstrumentation.js", "npm:react@15.1.0/lib/canDefineProperty.js", "npm:fbjs@0.8.3/lib/emptyObject.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactNoopUpdateQueue = $__require('npm:react@15.1.0/lib/ReactNoopUpdateQueue.js');
    var ReactInstrumentation = $__require('npm:react@15.1.0/lib/ReactInstrumentation.js');
    var canDefineProperty = $__require('npm:react@15.1.0/lib/canDefineProperty.js');
    var emptyObject = $__require('npm:fbjs@0.8.3/lib/emptyObject.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    function ReactComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    ReactComponent.prototype.isReactComponent = {};
    ReactComponent.prototype.setState = function(partialState, callback) {
      !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? "production" !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : void 0;
      if ("production" !== 'production') {
        ReactInstrumentation.debugTool.onSetState();
        "production" !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : void 0;
      }
      this.updater.enqueueSetState(this, partialState);
      if (callback) {
        this.updater.enqueueCallback(this, callback, 'setState');
      }
    };
    ReactComponent.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this);
      if (callback) {
        this.updater.enqueueCallback(this, callback, 'forceUpdate');
      }
    };
    if ("production" !== 'production') {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };
      var defineDeprecationWarning = function(methodName, info) {
        if (canDefineProperty) {
          Object.defineProperty(ReactComponent.prototype, methodName, {get: function() {
              "production" !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
              return undefined;
            }});
        }
      };
      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }
    module.exports = ReactComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactNoopUpdateQueue.js", ["npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    function warnTDZ(publicInstance, callerName) {
      if ("production" !== 'production') {
        "production" !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : void 0;
      }
    }
    var ReactNoopUpdateQueue = {
      isMounted: function(publicInstance) {
        return false;
      },
      enqueueCallback: function(publicInstance, callback) {},
      enqueueForceUpdate: function(publicInstance) {
        warnTDZ(publicInstance, 'forceUpdate');
      },
      enqueueReplaceState: function(publicInstance, completeState) {
        warnTDZ(publicInstance, 'replaceState');
      },
      enqueueSetState: function(publicInstance, partialState) {
        warnTDZ(publicInstance, 'setState');
      }
    };
    module.exports = ReactNoopUpdateQueue;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/emptyObject.js", ["github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var emptyObject = {};
    if ("production" !== 'production') {
      Object.freeze(emptyObject);
    }
    module.exports = emptyObject;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/keyOf.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var keyOf = function keyOf(oneKeyObj) {
    var key;
    for (key in oneKeyObj) {
      if (!oneKeyObj.hasOwnProperty(key)) {
        continue;
      }
      return key;
    }
    return null;
  };
  module.exports = keyOf;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactClass.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/ReactComponent.js", "npm:react@15.1.0/lib/ReactElement.js", "npm:react@15.1.0/lib/ReactPropTypeLocations.js", "npm:react@15.1.0/lib/ReactPropTypeLocationNames.js", "npm:react@15.1.0/lib/ReactNoopUpdateQueue.js", "npm:fbjs@0.8.3/lib/emptyObject.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/keyMirror.js", "npm:fbjs@0.8.3/lib/keyOf.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var ReactComponent = $__require('npm:react@15.1.0/lib/ReactComponent.js');
    var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
    var ReactPropTypeLocations = $__require('npm:react@15.1.0/lib/ReactPropTypeLocations.js');
    var ReactPropTypeLocationNames = $__require('npm:react@15.1.0/lib/ReactPropTypeLocationNames.js');
    var ReactNoopUpdateQueue = $__require('npm:react@15.1.0/lib/ReactNoopUpdateQueue.js');
    var emptyObject = $__require('npm:fbjs@0.8.3/lib/emptyObject.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var keyMirror = $__require('npm:fbjs@0.8.3/lib/keyMirror.js');
    var keyOf = $__require('npm:fbjs@0.8.3/lib/keyOf.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var MIXINS_KEY = keyOf({mixins: null});
    var SpecPolicy = keyMirror({
      DEFINE_ONCE: null,
      DEFINE_MANY: null,
      OVERRIDE_BASE: null,
      DEFINE_MANY_MERGED: null
    });
    var injectedMixins = [];
    var ReactClassInterface = {
      mixins: SpecPolicy.DEFINE_MANY,
      statics: SpecPolicy.DEFINE_MANY,
      propTypes: SpecPolicy.DEFINE_MANY,
      contextTypes: SpecPolicy.DEFINE_MANY,
      childContextTypes: SpecPolicy.DEFINE_MANY,
      getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
      getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
      getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
      render: SpecPolicy.DEFINE_ONCE,
      componentWillMount: SpecPolicy.DEFINE_MANY,
      componentDidMount: SpecPolicy.DEFINE_MANY,
      componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
      shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
      componentWillUpdate: SpecPolicy.DEFINE_MANY,
      componentDidUpdate: SpecPolicy.DEFINE_MANY,
      componentWillUnmount: SpecPolicy.DEFINE_MANY,
      updateComponent: SpecPolicy.OVERRIDE_BASE
    };
    var RESERVED_SPEC_KEYS = {
      displayName: function(Constructor, displayName) {
        Constructor.displayName = displayName;
      },
      mixins: function(Constructor, mixins) {
        if (mixins) {
          for (var i = 0; i < mixins.length; i++) {
            mixSpecIntoComponent(Constructor, mixins[i]);
          }
        }
      },
      childContextTypes: function(Constructor, childContextTypes) {
        if ("production" !== 'production') {
          validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
        }
        Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
      },
      contextTypes: function(Constructor, contextTypes) {
        if ("production" !== 'production') {
          validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
        }
        Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
      },
      getDefaultProps: function(Constructor, getDefaultProps) {
        if (Constructor.getDefaultProps) {
          Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
        } else {
          Constructor.getDefaultProps = getDefaultProps;
        }
      },
      propTypes: function(Constructor, propTypes) {
        if ("production" !== 'production') {
          validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
        }
        Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
      },
      statics: function(Constructor, statics) {
        mixStaticSpecIntoComponent(Constructor, statics);
      },
      autobind: function() {}
    };
    function validateTypeDef(Constructor, typeDef, location) {
      for (var propName in typeDef) {
        if (typeDef.hasOwnProperty(propName)) {
          "production" !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
        }
      }
    }
    function validateMethodOverride(isAlreadyDefined, name) {
      var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
      if (ReactClassMixin.hasOwnProperty(name)) {
        !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? "production" !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : void 0;
      }
      if (isAlreadyDefined) {
        !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? "production" !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : void 0;
      }
    }
    function mixSpecIntoComponent(Constructor, spec) {
      if (!spec) {
        return;
      }
      !(typeof spec !== 'function') ? "production" !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.') : invariant(false) : void 0;
      !!ReactElement.isValidElement(spec) ? "production" !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : void 0;
      var proto = Constructor.prototype;
      var autoBindPairs = proto.__reactAutoBindPairs;
      if (spec.hasOwnProperty(MIXINS_KEY)) {
        RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
      }
      for (var name in spec) {
        if (!spec.hasOwnProperty(name)) {
          continue;
        }
        if (name === MIXINS_KEY) {
          continue;
        }
        var property = spec[name];
        var isAlreadyDefined = proto.hasOwnProperty(name);
        validateMethodOverride(isAlreadyDefined, name);
        if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
          RESERVED_SPEC_KEYS[name](Constructor, property);
        } else {
          var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
          var isFunction = typeof property === 'function';
          var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
          if (shouldAutoBind) {
            autoBindPairs.push(name, property);
            proto[name] = property;
          } else {
            if (isAlreadyDefined) {
              var specPolicy = ReactClassInterface[name];
              !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? "production" !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : void 0;
              if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
                proto[name] = createMergedResultFunction(proto[name], property);
              } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
                proto[name] = createChainedFunction(proto[name], property);
              }
            } else {
              proto[name] = property;
              if ("production" !== 'production') {
                if (typeof property === 'function' && spec.displayName) {
                  proto[name].displayName = spec.displayName + '_' + name;
                }
              }
            }
          }
        }
      }
    }
    function mixStaticSpecIntoComponent(Constructor, statics) {
      if (!statics) {
        return;
      }
      for (var name in statics) {
        var property = statics[name];
        if (!statics.hasOwnProperty(name)) {
          continue;
        }
        var isReserved = name in RESERVED_SPEC_KEYS;
        !!isReserved ? "production" !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : void 0;
        var isInherited = name in Constructor;
        !!isInherited ? "production" !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : void 0;
        Constructor[name] = property;
      }
    }
    function mergeIntoWithNoDuplicateKeys(one, two) {
      !(one && two && typeof one === 'object' && typeof two === 'object') ? "production" !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : void 0;
      for (var key in two) {
        if (two.hasOwnProperty(key)) {
          !(one[key] === undefined) ? "production" !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : void 0;
          one[key] = two[key];
        }
      }
      return one;
    }
    function createMergedResultFunction(one, two) {
      return function mergedResult() {
        var a = one.apply(this, arguments);
        var b = two.apply(this, arguments);
        if (a == null) {
          return b;
        } else if (b == null) {
          return a;
        }
        var c = {};
        mergeIntoWithNoDuplicateKeys(c, a);
        mergeIntoWithNoDuplicateKeys(c, b);
        return c;
      };
    }
    function createChainedFunction(one, two) {
      return function chainedFunction() {
        one.apply(this, arguments);
        two.apply(this, arguments);
      };
    }
    function bindAutoBindMethod(component, method) {
      var boundMethod = method.bind(component);
      if ("production" !== 'production') {
        boundMethod.__reactBoundContext = component;
        boundMethod.__reactBoundMethod = method;
        boundMethod.__reactBoundArguments = null;
        var componentName = component.constructor.displayName;
        var _bind = boundMethod.bind;
        boundMethod.bind = function(newThis) {
          for (var _len = arguments.length,
              args = Array(_len > 1 ? _len - 1 : 0),
              _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (newThis !== component && newThis !== null) {
            "production" !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
          } else if (!args.length) {
            "production" !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
            return boundMethod;
          }
          var reboundMethod = _bind.apply(boundMethod, arguments);
          reboundMethod.__reactBoundContext = component;
          reboundMethod.__reactBoundMethod = method;
          reboundMethod.__reactBoundArguments = args;
          return reboundMethod;
        };
      }
      return boundMethod;
    }
    function bindAutoBindMethods(component) {
      var pairs = component.__reactAutoBindPairs;
      for (var i = 0; i < pairs.length; i += 2) {
        var autoBindKey = pairs[i];
        var method = pairs[i + 1];
        component[autoBindKey] = bindAutoBindMethod(component, method);
      }
    }
    var ReactClassMixin = {
      replaceState: function(newState, callback) {
        this.updater.enqueueReplaceState(this, newState);
        if (callback) {
          this.updater.enqueueCallback(this, callback, 'replaceState');
        }
      },
      isMounted: function() {
        return this.updater.isMounted(this);
      }
    };
    var ReactClassComponent = function() {};
    _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
    var ReactClass = {
      createClass: function(spec) {
        var Constructor = function(props, context, updater) {
          if ("production" !== 'production') {
            "production" !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
          }
          if (this.__reactAutoBindPairs.length) {
            bindAutoBindMethods(this);
          }
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
          this.state = null;
          var initialState = this.getInitialState ? this.getInitialState() : null;
          if ("production" !== 'production') {
            if (initialState === undefined && this.getInitialState._isMockFunction) {
              initialState = null;
            }
          }
          !(typeof initialState === 'object' && !Array.isArray(initialState)) ? "production" !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : void 0;
          this.state = initialState;
        };
        Constructor.prototype = new ReactClassComponent();
        Constructor.prototype.constructor = Constructor;
        Constructor.prototype.__reactAutoBindPairs = [];
        injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
        mixSpecIntoComponent(Constructor, spec);
        if (Constructor.getDefaultProps) {
          Constructor.defaultProps = Constructor.getDefaultProps();
        }
        if ("production" !== 'production') {
          if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps.isReactClassApproved = {};
          }
          if (Constructor.prototype.getInitialState) {
            Constructor.prototype.getInitialState.isReactClassApproved = {};
          }
        }
        !Constructor.prototype.render ? "production" !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : void 0;
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
          "production" !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
        }
        for (var methodName in ReactClassInterface) {
          if (!Constructor.prototype[methodName]) {
            Constructor.prototype[methodName] = null;
          }
        }
        return Constructor;
      },
      injection: {injectMixin: function(mixin) {
          injectedMixins.push(mixin);
        }}
    };
    module.exports = ReactClass;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/mapObject.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function mapObject(object, callback, context) {
    if (!object) {
      return null;
    }
    var result = {};
    for (var name in object) {
      if (hasOwnProperty.call(object, name)) {
        result[name] = callback.call(context, object[name], name, object);
      }
    }
    return result;
  }
  module.exports = mapObject;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactDOMFactories.js", ["npm:react@15.1.0/lib/ReactElement.js", "npm:react@15.1.0/lib/ReactElementValidator.js", "npm:fbjs@0.8.3/lib/mapObject.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
    var ReactElementValidator = $__require('npm:react@15.1.0/lib/ReactElementValidator.js');
    var mapObject = $__require('npm:fbjs@0.8.3/lib/mapObject.js');
    function createDOMFactory(tag) {
      if ("production" !== 'production') {
        return ReactElementValidator.createFactory(tag);
      }
      return ReactElement.createFactory(tag);
    }
    var ReactDOMFactories = mapObject({
      a: 'a',
      abbr: 'abbr',
      address: 'address',
      area: 'area',
      article: 'article',
      aside: 'aside',
      audio: 'audio',
      b: 'b',
      base: 'base',
      bdi: 'bdi',
      bdo: 'bdo',
      big: 'big',
      blockquote: 'blockquote',
      body: 'body',
      br: 'br',
      button: 'button',
      canvas: 'canvas',
      caption: 'caption',
      cite: 'cite',
      code: 'code',
      col: 'col',
      colgroup: 'colgroup',
      data: 'data',
      datalist: 'datalist',
      dd: 'dd',
      del: 'del',
      details: 'details',
      dfn: 'dfn',
      dialog: 'dialog',
      div: 'div',
      dl: 'dl',
      dt: 'dt',
      em: 'em',
      embed: 'embed',
      fieldset: 'fieldset',
      figcaption: 'figcaption',
      figure: 'figure',
      footer: 'footer',
      form: 'form',
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      head: 'head',
      header: 'header',
      hgroup: 'hgroup',
      hr: 'hr',
      html: 'html',
      i: 'i',
      iframe: 'iframe',
      img: 'img',
      input: 'input',
      ins: 'ins',
      kbd: 'kbd',
      keygen: 'keygen',
      label: 'label',
      legend: 'legend',
      li: 'li',
      link: 'link',
      main: 'main',
      map: 'map',
      mark: 'mark',
      menu: 'menu',
      menuitem: 'menuitem',
      meta: 'meta',
      meter: 'meter',
      nav: 'nav',
      noscript: 'noscript',
      object: 'object',
      ol: 'ol',
      optgroup: 'optgroup',
      option: 'option',
      output: 'output',
      p: 'p',
      param: 'param',
      picture: 'picture',
      pre: 'pre',
      progress: 'progress',
      q: 'q',
      rp: 'rp',
      rt: 'rt',
      ruby: 'ruby',
      s: 's',
      samp: 'samp',
      script: 'script',
      section: 'section',
      select: 'select',
      small: 'small',
      source: 'source',
      span: 'span',
      strong: 'strong',
      style: 'style',
      sub: 'sub',
      summary: 'summary',
      sup: 'sup',
      table: 'table',
      tbody: 'tbody',
      td: 'td',
      textarea: 'textarea',
      tfoot: 'tfoot',
      th: 'th',
      thead: 'thead',
      time: 'time',
      title: 'title',
      tr: 'tr',
      track: 'track',
      u: 'u',
      ul: 'ul',
      'var': 'var',
      video: 'video',
      wbr: 'wbr',
      circle: 'circle',
      clipPath: 'clipPath',
      defs: 'defs',
      ellipse: 'ellipse',
      g: 'g',
      image: 'image',
      line: 'line',
      linearGradient: 'linearGradient',
      mask: 'mask',
      path: 'path',
      pattern: 'pattern',
      polygon: 'polygon',
      polyline: 'polyline',
      radialGradient: 'radialGradient',
      rect: 'rect',
      stop: 'stop',
      svg: 'svg',
      text: 'text',
      tspan: 'tspan'
    }, createDOMFactory);
    module.exports = ReactDOMFactories;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/keyMirror.js", ["npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var keyMirror = function keyMirror(obj) {
      var ret = {};
      var key;
      !(obj instanceof Object && !Array.isArray(obj)) ? "production" !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
      for (key in obj) {
        if (!obj.hasOwnProperty(key)) {
          continue;
        }
        ret[key] = key;
      }
      return ret;
    };
    module.exports = keyMirror;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactPropTypeLocations.js", ["npm:fbjs@0.8.3/lib/keyMirror.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var keyMirror = $__require('npm:fbjs@0.8.3/lib/keyMirror.js');
  var ReactPropTypeLocations = keyMirror({
    prop: null,
    context: null,
    childContext: null
  });
  module.exports = ReactPropTypeLocations;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactElementValidator.js", ["npm:react@15.1.0/lib/ReactElement.js", "npm:react@15.1.0/lib/ReactPropTypeLocations.js", "npm:react@15.1.0/lib/ReactPropTypeLocationNames.js", "npm:react@15.1.0/lib/ReactCurrentOwner.js", "npm:react@15.1.0/lib/canDefineProperty.js", "npm:react@15.1.0/lib/getIteratorFn.js", "npm:fbjs@0.8.3/lib/invariant.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
    var ReactPropTypeLocations = $__require('npm:react@15.1.0/lib/ReactPropTypeLocations.js');
    var ReactPropTypeLocationNames = $__require('npm:react@15.1.0/lib/ReactPropTypeLocationNames.js');
    var ReactCurrentOwner = $__require('npm:react@15.1.0/lib/ReactCurrentOwner.js');
    var canDefineProperty = $__require('npm:react@15.1.0/lib/canDefineProperty.js');
    var getIteratorFn = $__require('npm:react@15.1.0/lib/getIteratorFn.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = ReactCurrentOwner.current.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    var ownerHasKeyUseWarning = {};
    var loggedTypeFailures = {};
    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }
      element._store.validated = true;
      var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
      if (addenda === null) {
        return;
      }
      "production" !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : void 0;
    }
    function getAddendaForKeyUse(messageType, element, parentType) {
      var addendum = getDeclarationErrorAddendum();
      if (!addendum) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
        if (parentName) {
          addendum = ' Check the top-level render call using <' + parentName + '>.';
        }
      }
      var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
      if (memoizer[addendum]) {
        return null;
      }
      memoizer[addendum] = true;
      var addenda = {
        parentOrOwner: addendum,
        url: ' See https://fb.me/react-warning-keys for more information.',
        childOwner: null
      };
      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
      }
      return addenda;
    }
    function validateChildKeys(node, parentType) {
      if (typeof node !== 'object') {
        return;
      }
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];
          if (ReactElement.isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (ReactElement.isValidElement(node)) {
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);
        if (iteratorFn) {
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;
            while (!(step = iterator.next()).done) {
              if (ReactElement.isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    function checkPropTypes(componentName, propTypes, props, location) {
      for (var propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
          var error;
          try {
            !(typeof propTypes[propName] === 'function') ? "production" !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : void 0;
            error = propTypes[propName](props, propName, componentName, location);
          } catch (ex) {
            error = ex;
          }
          "production" !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : void 0;
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var addendum = getDeclarationErrorAddendum();
            "production" !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : void 0;
          }
        }
      }
    }
    function validatePropTypes(element) {
      var componentClass = element.type;
      if (typeof componentClass !== 'function') {
        return;
      }
      var name = componentClass.displayName || componentClass.name;
      if (componentClass.propTypes) {
        checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
      }
      if (typeof componentClass.getDefaultProps === 'function') {
        "production" !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
      }
    }
    var ReactElementValidator = {
      createElement: function(type, props, children) {
        var validType = typeof type === 'string' || typeof type === 'function';
        "production" !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
        var element = ReactElement.createElement.apply(this, arguments);
        if (element == null) {
          return element;
        }
        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }
        validatePropTypes(element);
        return element;
      },
      createFactory: function(type) {
        var validatedFactory = ReactElementValidator.createElement.bind(null, type);
        validatedFactory.type = type;
        if ("production" !== 'production') {
          if (canDefineProperty) {
            Object.defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get: function() {
                "production" !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
                Object.defineProperty(this, 'type', {value: type});
                return type;
              }
            });
          }
        }
        return validatedFactory;
      },
      cloneElement: function(element, props, children) {
        var newElement = ReactElement.cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }
    };
    module.exports = ReactElementValidator;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactPropTypeLocationNames.js", ["github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactPropTypeLocationNames = {};
    if ("production" !== 'production') {
      ReactPropTypeLocationNames = {
        prop: 'prop',
        context: 'context',
        childContext: 'child context'
      };
    }
    module.exports = ReactPropTypeLocationNames;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/getIteratorFn.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  module.exports = getIteratorFn;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactPropTypes.js", ["npm:react@15.1.0/lib/ReactElement.js", "npm:react@15.1.0/lib/ReactPropTypeLocationNames.js", "npm:fbjs@0.8.3/lib/emptyFunction.js", "npm:react@15.1.0/lib/getIteratorFn.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
  var ReactPropTypeLocationNames = $__require('npm:react@15.1.0/lib/ReactPropTypeLocationNames.js');
  var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
  var getIteratorFn = $__require('npm:react@15.1.0/lib/getIteratorFn.js');
  var ANONYMOUS = '<<anonymous>>';
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];
        var preciseType = getPreciseType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      return createChainableTypeChecker(function() {
        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
      });
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      return createChainableTypeChecker(function() {
        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
      });
    }
    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName) == null) {
          return null;
        }
      }
      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    return propType;
  }
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  module.exports = ReactPropTypes;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactVersion.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = '15.1.0';
  return module.exports;
});

System.registerDynamic("npm:object-assign@4.1.0/index.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String('abc');
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }
  module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (Object.getOwnPropertySymbols) {
        symbols = Object.getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return module.exports;
});

System.registerDynamic("npm:object-assign@4.1.0.js", ["npm:object-assign@4.1.0/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:object-assign@4.1.0/index.js');
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactCurrentOwner.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReactCurrentOwner = {current: null};
  module.exports = ReactCurrentOwner;
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/canDefineProperty.js", ["github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var canDefineProperty = false;
    if ("production" !== 'production') {
      try {
        Object.defineProperty({}, 'x', {get: function() {}});
        canDefineProperty = true;
      } catch (x) {}
    }
    module.exports = canDefineProperty;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/ReactElement.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/ReactCurrentOwner.js", "npm:fbjs@0.8.3/lib/warning.js", "npm:react@15.1.0/lib/canDefineProperty.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var ReactCurrentOwner = $__require('npm:react@15.1.0/lib/ReactCurrentOwner.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var canDefineProperty = $__require('npm:react@15.1.0/lib/canDefineProperty.js');
    var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown,
        specialPropRefWarningShown;
    var ReactElement = function(type, key, ref, self, source, owner, props) {
      var element = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        ref: ref,
        props: props,
        _owner: owner
      };
      if ("production" !== 'production') {
        element._store = {};
        if (canDefineProperty) {
          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
        } else {
          element._store.validated = false;
          element._self = self;
          element._source = source;
        }
        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    ReactElement.createElement = function(type, config, children) {
      var propName;
      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;
      if (config != null) {
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(config.__proto__ == null || config.__proto__ === Object.prototype, 'React.createElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
          ref = !config.hasOwnProperty('ref') || Object.getOwnPropertyDescriptor(config, 'ref').get ? null : config.ref;
          key = !config.hasOwnProperty('key') || Object.getOwnPropertyDescriptor(config, 'key').get ? null : '' + config.key;
        } else {
          ref = config.ref === undefined ? null : config.ref;
          key = config.key === undefined ? null : '' + config.key;
        }
        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source;
        for (propName in config) {
          if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }
      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }
      if ("production" !== 'production') {
        if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
          if (!props.hasOwnProperty('key')) {
            Object.defineProperty(props, 'key', {
              get: function() {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  "production" !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
                }
                return undefined;
              },
              configurable: true
            });
          }
          if (!props.hasOwnProperty('ref')) {
            Object.defineProperty(props, 'ref', {
              get: function() {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  "production" !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
                }
                return undefined;
              },
              configurable: true
            });
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    };
    ReactElement.createFactory = function(type) {
      var factory = ReactElement.createElement.bind(null, type);
      factory.type = type;
      return factory;
    };
    ReactElement.cloneAndReplaceKey = function(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    };
    ReactElement.cloneElement = function(element, config, children) {
      var propName;
      var props = _assign({}, element.props);
      var key = element.key;
      var ref = element.ref;
      var self = element._self;
      var source = element._source;
      var owner = element._owner;
      if (config != null) {
        if ("production" !== 'production') {
          "production" !== 'production' ? warning(config.__proto__ == null || config.__proto__ === Object.prototype, 'React.cloneElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
        }
        if (config.ref !== undefined) {
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }
        if (config.key !== undefined) {
          key = '' + config.key;
        }
        var defaultProps;
        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }
        for (propName in config) {
          if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      }
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }
      return ReactElement(element.type, key, ref, self, source, owner, props);
    };
    ReactElement.isValidElement = function(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    module.exports = ReactElement;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/invariant.js", ["github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    function invariant(condition, format, a, b, c, d, e, f) {
      if ("production" !== 'production') {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      }
      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function() {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }
        error.framesToPop = 1;
        throw error;
      }
    }
    module.exports = invariant;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/onlyChild.js", ["npm:react@15.1.0/lib/ReactElement.js", "npm:fbjs@0.8.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
    var invariant = $__require('npm:fbjs@0.8.3/lib/invariant.js');
    function onlyChild(children) {
      !ReactElement.isValidElement(children) ? "production" !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : void 0;
      return children;
    }
    module.exports = onlyChild;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/emptyFunction.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function makeEmptyFunction(arg) {
    return function() {
      return arg;
    };
  }
  var emptyFunction = function emptyFunction() {};
  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function() {
    return this;
  };
  emptyFunction.thatReturnsArgument = function(arg) {
    return arg;
  };
  module.exports = emptyFunction;
  return module.exports;
});

System.registerDynamic("npm:fbjs@0.8.3/lib/warning.js", ["npm:fbjs@0.8.3/lib/emptyFunction.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var emptyFunction = $__require('npm:fbjs@0.8.3/lib/emptyFunction.js');
    var warning = emptyFunction;
    if ("production" !== 'production') {
      warning = function warning(condition, format) {
        for (var _len = arguments.length,
            args = Array(_len > 2 ? _len - 2 : 0),
            _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (format.indexOf('Failed Composite propType: ') === 0) {
          return;
        }
        if (!condition) {
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
          });
          if (typeof console !== 'undefined') {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {}
        }
      };
    }
    module.exports = warning;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/lib/React.js", ["npm:object-assign@4.1.0.js", "npm:react@15.1.0/lib/ReactChildren.js", "npm:react@15.1.0/lib/ReactComponent.js", "npm:react@15.1.0/lib/ReactClass.js", "npm:react@15.1.0/lib/ReactDOMFactories.js", "npm:react@15.1.0/lib/ReactElement.js", "npm:react@15.1.0/lib/ReactElementValidator.js", "npm:react@15.1.0/lib/ReactPropTypes.js", "npm:react@15.1.0/lib/ReactVersion.js", "npm:react@15.1.0/lib/onlyChild.js", "npm:fbjs@0.8.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var _assign = $__require('npm:object-assign@4.1.0.js');
    var ReactChildren = $__require('npm:react@15.1.0/lib/ReactChildren.js');
    var ReactComponent = $__require('npm:react@15.1.0/lib/ReactComponent.js');
    var ReactClass = $__require('npm:react@15.1.0/lib/ReactClass.js');
    var ReactDOMFactories = $__require('npm:react@15.1.0/lib/ReactDOMFactories.js');
    var ReactElement = $__require('npm:react@15.1.0/lib/ReactElement.js');
    var ReactElementValidator = $__require('npm:react@15.1.0/lib/ReactElementValidator.js');
    var ReactPropTypes = $__require('npm:react@15.1.0/lib/ReactPropTypes.js');
    var ReactVersion = $__require('npm:react@15.1.0/lib/ReactVersion.js');
    var onlyChild = $__require('npm:react@15.1.0/lib/onlyChild.js');
    var warning = $__require('npm:fbjs@0.8.3/lib/warning.js');
    var createElement = ReactElement.createElement;
    var createFactory = ReactElement.createFactory;
    var cloneElement = ReactElement.cloneElement;
    if ("production" !== 'production') {
      createElement = ReactElementValidator.createElement;
      createFactory = ReactElementValidator.createFactory;
      cloneElement = ReactElementValidator.cloneElement;
    }
    var __spread = _assign;
    if ("production" !== 'production') {
      var warned = false;
      __spread = function() {
        "production" !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
        warned = true;
        return _assign.apply(null, arguments);
      };
    }
    var React = {
      Children: {
        map: ReactChildren.map,
        forEach: ReactChildren.forEach,
        count: ReactChildren.count,
        toArray: ReactChildren.toArray,
        only: onlyChild
      },
      Component: ReactComponent,
      createElement: createElement,
      cloneElement: cloneElement,
      isValidElement: ReactElement.isValidElement,
      PropTypes: ReactPropTypes,
      createClass: ReactClass.createClass,
      createFactory: createFactory,
      createMixin: function(mixin) {
        return mixin;
      },
      DOM: ReactDOMFactories,
      version: ReactVersion,
      __spread: __spread
    };
    module.exports = React;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0/react.js", ["npm:react@15.1.0/lib/React.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:react@15.1.0/lib/React.js');
  return module.exports;
});

System.registerDynamic("npm:react@15.1.0.js", ["npm:react@15.1.0/react.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:react@15.1.0/react.js');
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/RouteUtils.js", ["npm:react@15.1.0.js", "npm:react-router@2.4.1/lib/routerWarning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    exports.isReactChildren = isReactChildren;
    exports.createRouteFromReactElement = createRouteFromReactElement;
    exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
    exports.createRoutes = createRoutes;
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function isValidChild(object) {
      return object == null || _react2.default.isValidElement(object);
    }
    function isReactChildren(object) {
      return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
    }
    function checkPropTypes(componentName, propTypes, props) {
      componentName = componentName || 'UnknownComponent';
      for (var propName in propTypes) {
        if (Object.prototype.hasOwnProperty.call(propTypes, propName)) {
          var error = propTypes[propName](props, propName, componentName);
          if (error instanceof Error)
            "production" !== 'production' ? (0, _routerWarning2.default)(false, error.message) : void 0;
        }
      }
    }
    function createRoute(defaultProps, props) {
      return _extends({}, defaultProps, props);
    }
    function createRouteFromReactElement(element) {
      var type = element.type;
      var route = createRoute(type.defaultProps, element.props);
      if (type.propTypes)
        checkPropTypes(type.displayName || type.name, type.propTypes, route);
      if (route.children) {
        var childRoutes = createRoutesFromReactChildren(route.children, route);
        if (childRoutes.length)
          route.childRoutes = childRoutes;
        delete route.children;
      }
      return route;
    }
    function createRoutesFromReactChildren(children, parentRoute) {
      var routes = [];
      _react2.default.Children.forEach(children, function(element) {
        if (_react2.default.isValidElement(element)) {
          if (element.type.createRouteFromReactElement) {
            var route = element.type.createRouteFromReactElement(element, parentRoute);
            if (route)
              routes.push(route);
          } else {
            routes.push(createRouteFromReactElement(element));
          }
        }
      });
      return routes;
    }
    function createRoutes(routes) {
      if (isReactChildren(routes)) {
        routes = createRoutesFromReactChildren(routes);
      } else if (routes && !Array.isArray(routes)) {
        routes = [routes];
      }
      return routes;
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/routerWarning.js", ["npm:warning@2.1.0.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports.default = routerWarning;
  exports._resetWarned = _resetWarned;
  var _warning = $__require('npm:warning@2.1.0.js');
  var _warning2 = _interopRequireDefault(_warning);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var warned = {};
  function routerWarning(falseToWarn, message) {
    if (message.indexOf('deprecated') !== -1) {
      if (warned[message]) {
        return;
      }
      warned[message] = true;
    }
    message = '[react-router] ' + message;
    for (var _len = arguments.length,
        args = Array(_len > 2 ? _len - 2 : 0),
        _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
  }
  function _resetWarned() {
    warned = {};
  }
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/RouterContext.js", ["npm:invariant@2.2.1.js", "npm:react@15.1.0.js", "npm:react-router@2.4.1/lib/deprecateObjectProperties.js", "npm:react-router@2.4.1/lib/getRouteParams.js", "npm:react-router@2.4.1/lib/RouteUtils.js", "npm:react-router@2.4.1/lib/routerWarning.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _react = $__require('npm:react@15.1.0.js');
    var _react2 = _interopRequireDefault(_react);
    var _deprecateObjectProperties = $__require('npm:react-router@2.4.1/lib/deprecateObjectProperties.js');
    var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
    var _getRouteParams = $__require('npm:react-router@2.4.1/lib/getRouteParams.js');
    var _getRouteParams2 = _interopRequireDefault(_getRouteParams);
    var _RouteUtils = $__require('npm:react-router@2.4.1/lib/RouteUtils.js');
    var _routerWarning = $__require('npm:react-router@2.4.1/lib/routerWarning.js');
    var _routerWarning2 = _interopRequireDefault(_routerWarning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _React$PropTypes = _react2.default.PropTypes;
    var array = _React$PropTypes.array;
    var func = _React$PropTypes.func;
    var object = _React$PropTypes.object;
    var RouterContext = _react2.default.createClass({
      displayName: 'RouterContext',
      propTypes: {
        history: object,
        router: object.isRequired,
        location: object.isRequired,
        routes: array.isRequired,
        params: object.isRequired,
        components: array.isRequired,
        createElement: func.isRequired
      },
      getDefaultProps: function getDefaultProps() {
        return {createElement: _react2.default.createElement};
      },
      childContextTypes: {
        history: object,
        location: object.isRequired,
        router: object.isRequired
      },
      getChildContext: function getChildContext() {
        var _props = this.props;
        var router = _props.router;
        var history = _props.history;
        var location = _props.location;
        if (!router) {
          "production" !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;
          router = _extends({}, history, {setRouteLeaveHook: history.listenBeforeLeavingRoute});
          delete router.listenBeforeLeavingRoute;
        }
        if ("production" !== 'production') {
          location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
        }
        return {
          history: history,
          location: location,
          router: router
        };
      },
      createElement: function createElement(component, props) {
        return component == null ? null : this.props.createElement(component, props);
      },
      render: function render() {
        var _this = this;
        var _props2 = this.props;
        var history = _props2.history;
        var location = _props2.location;
        var routes = _props2.routes;
        var params = _props2.params;
        var components = _props2.components;
        var element = null;
        if (components) {
          element = components.reduceRight(function(element, components, index) {
            if (components == null)
              return element;
            var route = routes[index];
            var routeParams = (0, _getRouteParams2.default)(route, params);
            var props = {
              history: history,
              location: location,
              params: params,
              route: route,
              routeParams: routeParams,
              routes: routes
            };
            if ((0, _RouteUtils.isReactChildren)(element)) {
              props.children = element;
            } else if (element) {
              for (var prop in element) {
                if (Object.prototype.hasOwnProperty.call(element, prop))
                  props[prop] = element[prop];
              }
            }
            if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
              var elements = {};
              for (var key in components) {
                if (Object.prototype.hasOwnProperty.call(components, key)) {
                  elements[key] = _this.createElement(components[key], _extends({key: key}, props));
                }
              }
              return elements;
            }
            return _this.createElement(components, props);
          }, element);
        }
        !(element === null || element === false || _react2.default.isValidElement(element)) ? "production" !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;
        return element;
      }
    });
    exports.default = RouterContext;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/applyRouterMiddleware.js", ["npm:react@15.1.0.js", "npm:react-router@2.4.1/lib/RouterContext.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _react = $__require('npm:react@15.1.0.js');
  var _react2 = _interopRequireDefault(_react);
  var _RouterContext = $__require('npm:react-router@2.4.1/lib/RouterContext.js');
  var _RouterContext2 = _interopRequireDefault(_RouterContext);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  exports.default = function() {
    for (var _len = arguments.length,
        middlewares = Array(_len),
        _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }
    var withContext = middlewares.map(function(m) {
      return m.renderRouterContext;
    }).filter(function(f) {
      return f;
    });
    var withComponent = middlewares.map(function(m) {
      return m.renderRouteComponent;
    }).filter(function(f) {
      return f;
    });
    var makeCreateElement = function makeCreateElement() {
      var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
      return function(Component, props) {
        return withComponent.reduceRight(function(previous, renderRouteComponent) {
          return renderRouteComponent(previous, props);
        }, baseCreateElement(Component, props));
      };
    };
    return function(renderProps) {
      return withContext.reduceRight(function(previous, renderRouterContext) {
        return renderRouterContext(previous, renderProps);
      }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {createElement: makeCreateElement(renderProps.createElement)})));
    };
  };
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/createBrowserHistory.js", ["npm:invariant@2.2.1.js", "npm:history@2.1.2/lib/Actions.js", "npm:history@2.1.2/lib/PathUtils.js", "npm:history@2.1.2/lib/ExecutionEnvironment.js", "npm:history@2.1.2/lib/DOMUtils.js", "npm:history@2.1.2/lib/DOMStateStorage.js", "npm:history@2.1.2/lib/createDOMHistory.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _Actions = $__require('npm:history@2.1.2/lib/Actions.js');
    var _PathUtils = $__require('npm:history@2.1.2/lib/PathUtils.js');
    var _ExecutionEnvironment = $__require('npm:history@2.1.2/lib/ExecutionEnvironment.js');
    var _DOMUtils = $__require('npm:history@2.1.2/lib/DOMUtils.js');
    var _DOMStateStorage = $__require('npm:history@2.1.2/lib/DOMStateStorage.js');
    var _createDOMHistory = $__require('npm:history@2.1.2/lib/createDOMHistory.js');
    var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
    function createBrowserHistory() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      !_ExecutionEnvironment.canUseDOM ? "production" !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;
      var forceRefresh = options.forceRefresh;
      var isSupported = _DOMUtils.supportsHistory();
      var useRefresh = !isSupported || forceRefresh;
      function getCurrentLocation(historyState) {
        try {
          historyState = historyState || window.history.state || {};
        } catch (e) {
          historyState = {};
        }
        var path = _DOMUtils.getWindowPath();
        var _historyState = historyState;
        var key = _historyState.key;
        var state = undefined;
        if (key) {
          state = _DOMStateStorage.readState(key);
        } else {
          state = null;
          key = history.createKey();
          if (isSupported)
            window.history.replaceState(_extends({}, historyState, {key: key}), null);
        }
        var location = _PathUtils.parsePath(path);
        return history.createLocation(_extends({}, location, {state: state}), undefined, key);
      }
      function startPopStateListener(_ref) {
        var transitionTo = _ref.transitionTo;
        function popStateListener(event) {
          if (event.state === undefined)
            return;
          transitionTo(getCurrentLocation(event.state));
        }
        _DOMUtils.addEventListener(window, 'popstate', popStateListener);
        return function() {
          _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
        };
      }
      function finishTransition(location) {
        var basename = location.basename;
        var pathname = location.pathname;
        var search = location.search;
        var hash = location.hash;
        var state = location.state;
        var action = location.action;
        var key = location.key;
        if (action === _Actions.POP)
          return;
        _DOMStateStorage.saveState(key, state);
        var path = (basename || '') + pathname + search + hash;
        var historyState = {key: key};
        if (action === _Actions.PUSH) {
          if (useRefresh) {
            window.location.href = path;
            return false;
          } else {
            window.history.pushState(historyState, null, path);
          }
        } else {
          if (useRefresh) {
            window.location.replace(path);
            return false;
          } else {
            window.history.replaceState(historyState, null, path);
          }
        }
      }
      var history = _createDOMHistory2['default'](_extends({}, options, {
        getCurrentLocation: getCurrentLocation,
        finishTransition: finishTransition,
        saveState: _DOMStateStorage.saveState
      }));
      var listenerCount = 0,
          stopPopStateListener = undefined;
      function listenBefore(listener) {
        if (++listenerCount === 1)
          stopPopStateListener = startPopStateListener(history);
        var unlisten = history.listenBefore(listener);
        return function() {
          unlisten();
          if (--listenerCount === 0)
            stopPopStateListener();
        };
      }
      function listen(listener) {
        if (++listenerCount === 1)
          stopPopStateListener = startPopStateListener(history);
        var unlisten = history.listen(listener);
        return function() {
          unlisten();
          if (--listenerCount === 0)
            stopPopStateListener();
        };
      }
      function registerTransitionHook(hook) {
        if (++listenerCount === 1)
          stopPopStateListener = startPopStateListener(history);
        history.registerTransitionHook(hook);
      }
      function unregisterTransitionHook(hook) {
        history.unregisterTransitionHook(hook);
        if (--listenerCount === 0)
          stopPopStateListener();
      }
      return _extends({}, history, {
        listenBefore: listenBefore,
        listen: listen,
        registerTransitionHook: registerTransitionHook,
        unregisterTransitionHook: unregisterTransitionHook
      });
    }
    exports['default'] = createBrowserHistory;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/browserHistory.js", ["npm:history@2.1.2/lib/createBrowserHistory.js", "npm:react-router@2.4.1/lib/createRouterHistory.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _createBrowserHistory = $__require('npm:history@2.1.2/lib/createBrowserHistory.js');
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  var _createRouterHistory = $__require('npm:react-router@2.4.1/lib/createRouterHistory.js');
  var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/DOMStateStorage.js", ["npm:warning@2.1.0.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    exports.saveState = saveState;
    exports.readState = readState;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _warning = $__require('npm:warning@2.1.0.js');
    var _warning2 = _interopRequireDefault(_warning);
    var KeyPrefix = '@@History/';
    var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];
    var SecurityError = 'SecurityError';
    function createKey(key) {
      return KeyPrefix + key;
    }
    function saveState(key, state) {
      try {
        if (state == null) {
          window.sessionStorage.removeItem(createKey(key));
        } else {
          window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
        }
      } catch (error) {
        if (error.name === SecurityError) {
          "production" !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;
          return;
        }
        if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
          "production" !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;
          return;
        }
        throw error;
      }
    }
    function readState(key) {
      var json = undefined;
      try {
        json = window.sessionStorage.getItem(createKey(key));
      } catch (error) {
        if (error.name === SecurityError) {
          "production" !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;
          return null;
        }
      }
      if (json) {
        try {
          return JSON.parse(json);
        } catch (error) {}
      }
      return null;
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/DOMUtils.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports.addEventListener = addEventListener;
  exports.removeEventListener = removeEventListener;
  exports.getHashPath = getHashPath;
  exports.replaceHashPath = replaceHashPath;
  exports.getWindowPath = getWindowPath;
  exports.go = go;
  exports.getUserConfirmation = getUserConfirmation;
  exports.supportsHistory = supportsHistory;
  exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;
  function addEventListener(node, event, listener) {
    if (node.addEventListener) {
      node.addEventListener(event, listener, false);
    } else {
      node.attachEvent('on' + event, listener);
    }
  }
  function removeEventListener(node, event, listener) {
    if (node.removeEventListener) {
      node.removeEventListener(event, listener, false);
    } else {
      node.detachEvent('on' + event, listener);
    }
  }
  function getHashPath() {
    return window.location.href.split('#')[1] || '';
  }
  function replaceHashPath(path) {
    window.location.replace(window.location.pathname + window.location.search + '#' + path);
  }
  function getWindowPath() {
    return window.location.pathname + window.location.search + window.location.hash;
  }
  function go(n) {
    if (n)
      window.history.go(n);
  }
  function getUserConfirmation(message, callback) {
    callback(window.confirm(message));
  }
  function supportsHistory() {
    var ua = navigator.userAgent;
    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
      return false;
    }
    return window.history && 'pushState' in window.history;
  }
  function supportsGoWithoutReloadUsingHash() {
    var ua = navigator.userAgent;
    return ua.indexOf('Firefox') === -1;
  }
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/createDOMHistory.js", ["npm:invariant@2.2.1.js", "npm:history@2.1.2/lib/ExecutionEnvironment.js", "npm:history@2.1.2/lib/DOMUtils.js", "npm:history@2.1.2/lib/createHistory.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _ExecutionEnvironment = $__require('npm:history@2.1.2/lib/ExecutionEnvironment.js');
    var _DOMUtils = $__require('npm:history@2.1.2/lib/DOMUtils.js');
    var _createHistory = $__require('npm:history@2.1.2/lib/createHistory.js');
    var _createHistory2 = _interopRequireDefault(_createHistory);
    function createDOMHistory(options) {
      var history = _createHistory2['default'](_extends({getUserConfirmation: _DOMUtils.getUserConfirmation}, options, {go: _DOMUtils.go}));
      function listen(listener) {
        !_ExecutionEnvironment.canUseDOM ? "production" !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;
        return history.listen(listener);
      }
      return _extends({}, history, {listen: listen});
    }
    exports['default'] = createDOMHistory;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/createHashHistory.js", ["npm:warning@2.1.0.js", "npm:invariant@2.2.1.js", "npm:history@2.1.2/lib/Actions.js", "npm:history@2.1.2/lib/PathUtils.js", "npm:history@2.1.2/lib/ExecutionEnvironment.js", "npm:history@2.1.2/lib/DOMUtils.js", "npm:history@2.1.2/lib/DOMStateStorage.js", "npm:history@2.1.2/lib/createDOMHistory.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _warning = $__require('npm:warning@2.1.0.js');
    var _warning2 = _interopRequireDefault(_warning);
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _Actions = $__require('npm:history@2.1.2/lib/Actions.js');
    var _PathUtils = $__require('npm:history@2.1.2/lib/PathUtils.js');
    var _ExecutionEnvironment = $__require('npm:history@2.1.2/lib/ExecutionEnvironment.js');
    var _DOMUtils = $__require('npm:history@2.1.2/lib/DOMUtils.js');
    var _DOMStateStorage = $__require('npm:history@2.1.2/lib/DOMStateStorage.js');
    var _createDOMHistory = $__require('npm:history@2.1.2/lib/createDOMHistory.js');
    var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
    function isAbsolutePath(path) {
      return typeof path === 'string' && path.charAt(0) === '/';
    }
    function ensureSlash() {
      var path = _DOMUtils.getHashPath();
      if (isAbsolutePath(path))
        return true;
      _DOMUtils.replaceHashPath('/' + path);
      return false;
    }
    function addQueryStringValueToPath(path, key, value) {
      return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
    }
    function stripQueryStringValueFromPath(path, key) {
      return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
    }
    function getQueryStringValueFromPath(path, key) {
      var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
      return match && match[1];
    }
    var DefaultQueryKey = '_k';
    function createHashHistory() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      !_ExecutionEnvironment.canUseDOM ? "production" !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;
      var queryKey = options.queryKey;
      if (queryKey === undefined || !!queryKey)
        queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;
      function getCurrentLocation() {
        var path = _DOMUtils.getHashPath();
        var key = undefined,
            state = undefined;
        if (queryKey) {
          key = getQueryStringValueFromPath(path, queryKey);
          path = stripQueryStringValueFromPath(path, queryKey);
          if (key) {
            state = _DOMStateStorage.readState(key);
          } else {
            state = null;
            key = history.createKey();
            _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
          }
        } else {
          key = state = null;
        }
        var location = _PathUtils.parsePath(path);
        return history.createLocation(_extends({}, location, {state: state}), undefined, key);
      }
      function startHashChangeListener(_ref) {
        var transitionTo = _ref.transitionTo;
        function hashChangeListener() {
          if (!ensureSlash())
            return;
          transitionTo(getCurrentLocation());
        }
        ensureSlash();
        _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);
        return function() {
          _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
        };
      }
      function finishTransition(location) {
        var basename = location.basename;
        var pathname = location.pathname;
        var search = location.search;
        var state = location.state;
        var action = location.action;
        var key = location.key;
        if (action === _Actions.POP)
          return;
        var path = (basename || '') + pathname + search;
        if (queryKey) {
          path = addQueryStringValueToPath(path, queryKey, key);
          _DOMStateStorage.saveState(key, state);
        } else {
          location.key = location.state = null;
        }
        var currentHash = _DOMUtils.getHashPath();
        if (action === _Actions.PUSH) {
          if (currentHash !== path) {
            window.location.hash = path;
          } else {
            "production" !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
          }
        } else if (currentHash !== path) {
          _DOMUtils.replaceHashPath(path);
        }
      }
      var history = _createDOMHistory2['default'](_extends({}, options, {
        getCurrentLocation: getCurrentLocation,
        finishTransition: finishTransition,
        saveState: _DOMStateStorage.saveState
      }));
      var listenerCount = 0,
          stopHashChangeListener = undefined;
      function listenBefore(listener) {
        if (++listenerCount === 1)
          stopHashChangeListener = startHashChangeListener(history);
        var unlisten = history.listenBefore(listener);
        return function() {
          unlisten();
          if (--listenerCount === 0)
            stopHashChangeListener();
        };
      }
      function listen(listener) {
        if (++listenerCount === 1)
          stopHashChangeListener = startHashChangeListener(history);
        var unlisten = history.listen(listener);
        return function() {
          unlisten();
          if (--listenerCount === 0)
            stopHashChangeListener();
        };
      }
      function push(location) {
        "production" !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
        history.push(location);
      }
      function replace(location) {
        "production" !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
        history.replace(location);
      }
      var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();
      function go(n) {
        "production" !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
        history.go(n);
      }
      function createHref(path) {
        return '#' + history.createHref(path);
      }
      function registerTransitionHook(hook) {
        if (++listenerCount === 1)
          stopHashChangeListener = startHashChangeListener(history);
        history.registerTransitionHook(hook);
      }
      function unregisterTransitionHook(hook) {
        history.unregisterTransitionHook(hook);
        if (--listenerCount === 0)
          stopHashChangeListener();
      }
      function pushState(state, path) {
        "production" !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
        history.pushState(state, path);
      }
      function replaceState(state, path) {
        "production" !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
        history.replaceState(state, path);
      }
      return _extends({}, history, {
        listenBefore: listenBefore,
        listen: listen,
        push: push,
        replace: replace,
        go: go,
        createHref: createHref,
        registerTransitionHook: registerTransitionHook,
        unregisterTransitionHook: unregisterTransitionHook,
        pushState: pushState,
        replaceState: replaceState
      });
    }
    exports['default'] = createHashHistory;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/useRouterHistory.js", ["npm:history@2.1.2/lib/useQueries.js", "npm:history@2.1.2/lib/useBasename.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports.default = useRouterHistory;
  var _useQueries = $__require('npm:history@2.1.2/lib/useQueries.js');
  var _useQueries2 = _interopRequireDefault(_useQueries);
  var _useBasename = $__require('npm:history@2.1.2/lib/useBasename.js');
  var _useBasename2 = _interopRequireDefault(_useBasename);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function useRouterHistory(createHistory) {
    return function(options) {
      var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
      history.__v2_compatible__ = true;
      return history;
    };
  }
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/createRouterHistory.js", ["npm:react-router@2.4.1/lib/useRouterHistory.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports.default = function(createHistory) {
    var history = void 0;
    if (canUseDOM)
      history = (0, _useRouterHistory2.default)(createHistory)();
    return history;
  };
  var _useRouterHistory = $__require('npm:react-router@2.4.1/lib/useRouterHistory.js');
  var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/hashHistory.js", ["npm:history@2.1.2/lib/createHashHistory.js", "npm:react-router@2.4.1/lib/createRouterHistory.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _createHashHistory = $__require('npm:history@2.1.2/lib/createHashHistory.js');
  var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
  var _createRouterHistory = $__require('npm:react-router@2.4.1/lib/createRouterHistory.js');
  var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:strict-uri-encode@1.1.0/index.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  };
  return module.exports;
});

System.registerDynamic("npm:strict-uri-encode@1.1.0.js", ["npm:strict-uri-encode@1.1.0/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:strict-uri-encode@1.1.0/index.js');
  return module.exports;
});

System.registerDynamic("npm:query-string@3.0.3/index.js", ["npm:strict-uri-encode@1.1.0.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var strictUriEncode = $__require('npm:strict-uri-encode@1.1.0.js');
  exports.extract = function(str) {
    return str.split('?')[1] || '';
  };
  exports.parse = function(str) {
    if (typeof str !== 'string') {
      return {};
    }
    str = str.trim().replace(/^(\?|#|&)/, '');
    if (!str) {
      return {};
    }
    return str.split('&').reduce(function(ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts.shift();
      var val = parts.length > 0 ? parts.join('=') : undefined;
      key = decodeURIComponent(key);
      val = val === undefined ? null : decodeURIComponent(val);
      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});
  };
  exports.stringify = function(obj) {
    return obj ? Object.keys(obj).sort().map(function(key) {
      var val = obj[key];
      if (val === undefined) {
        return '';
      }
      if (val === null) {
        return key;
      }
      if (Array.isArray(val)) {
        return val.slice().sort().map(function(val2) {
          return strictUriEncode(key) + '=' + strictUriEncode(val2);
        }).join('&');
      }
      return strictUriEncode(key) + '=' + strictUriEncode(val);
    }).filter(function(x) {
      return x.length > 0;
    }).join('&') : '';
  };
  return module.exports;
});

System.registerDynamic("npm:query-string@3.0.3.js", ["npm:query-string@3.0.3/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:query-string@3.0.3/index.js');
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/useQueries.js", ["npm:warning@2.1.0.js", "npm:query-string@3.0.3.js", "npm:history@2.1.2/lib/runTransitionHook.js", "npm:history@2.1.2/lib/PathUtils.js", "npm:history@2.1.2/lib/deprecate.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _warning = $__require('npm:warning@2.1.0.js');
    var _warning2 = _interopRequireDefault(_warning);
    var _queryString = $__require('npm:query-string@3.0.3.js');
    var _runTransitionHook = $__require('npm:history@2.1.2/lib/runTransitionHook.js');
    var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
    var _PathUtils = $__require('npm:history@2.1.2/lib/PathUtils.js');
    var _deprecate = $__require('npm:history@2.1.2/lib/deprecate.js');
    var _deprecate2 = _interopRequireDefault(_deprecate);
    var SEARCH_BASE_KEY = '$searchBase';
    function defaultStringifyQuery(query) {
      return _queryString.stringify(query).replace(/%20/g, '+');
    }
    var defaultParseQueryString = _queryString.parse;
    function isNestedObject(object) {
      for (var p in object) {
        if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null)
          return true;
      }
      return false;
    }
    function useQueries(createHistory) {
      return function() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var history = createHistory(options);
        var stringifyQuery = options.stringifyQuery;
        var parseQueryString = options.parseQueryString;
        if (typeof stringifyQuery !== 'function')
          stringifyQuery = defaultStringifyQuery;
        if (typeof parseQueryString !== 'function')
          parseQueryString = defaultParseQueryString;
        function addQuery(location) {
          if (location.query == null) {
            var search = location.search;
            location.query = parseQueryString(search.substring(1));
            location[SEARCH_BASE_KEY] = {
              search: search,
              searchBase: ''
            };
          }
          return location;
        }
        function appendQuery(location, query) {
          var _extends2;
          var searchBaseSpec = location[SEARCH_BASE_KEY];
          var queryString = query ? stringifyQuery(query) : '';
          if (!searchBaseSpec && !queryString) {
            return location;
          }
          "production" !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;
          if (typeof location === 'string')
            location = _PathUtils.parsePath(location);
          var searchBase = undefined;
          if (searchBaseSpec && location.search === searchBaseSpec.search) {
            searchBase = searchBaseSpec.searchBase;
          } else {
            searchBase = location.search || '';
          }
          var search = searchBase;
          if (queryString) {
            search += (search ? '&' : '?') + queryString;
          }
          return _extends({}, location, (_extends2 = {search: search}, _extends2[SEARCH_BASE_KEY] = {
            search: search,
            searchBase: searchBase
          }, _extends2));
        }
        function listenBefore(hook) {
          return history.listenBefore(function(location, callback) {
            _runTransitionHook2['default'](hook, addQuery(location), callback);
          });
        }
        function listen(listener) {
          return history.listen(function(location) {
            listener(addQuery(location));
          });
        }
        function push(location) {
          history.push(appendQuery(location, location.query));
        }
        function replace(location) {
          history.replace(appendQuery(location, location.query));
        }
        function createPath(location, query) {
          "production" !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;
          return history.createPath(appendQuery(location, query || location.query));
        }
        function createHref(location, query) {
          "production" !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;
          return history.createHref(appendQuery(location, query || location.query));
        }
        function createLocation(location) {
          for (var _len = arguments.length,
              args = Array(_len > 1 ? _len - 1 : 0),
              _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
          if (location.query) {
            fullLocation.query = location.query;
          }
          return addQuery(fullLocation);
        }
        function pushState(state, path, query) {
          if (typeof path === 'string')
            path = _PathUtils.parsePath(path);
          push(_extends({state: state}, path, {query: query}));
        }
        function replaceState(state, path, query) {
          if (typeof path === 'string')
            path = _PathUtils.parsePath(path);
          replace(_extends({state: state}, path, {query: query}));
        }
        return _extends({}, history, {
          listenBefore: listenBefore,
          listen: listen,
          push: push,
          replace: replace,
          createPath: createPath,
          createHref: createHref,
          createLocation: createLocation,
          pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
          replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
        });
      };
    }
    exports['default'] = useQueries;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/ExecutionEnvironment.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  exports.canUseDOM = canUseDOM;
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/useBasename.js", ["npm:warning@2.1.0.js", "npm:history@2.1.2/lib/ExecutionEnvironment.js", "npm:history@2.1.2/lib/PathUtils.js", "npm:history@2.1.2/lib/runTransitionHook.js", "npm:history@2.1.2/lib/deprecate.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _warning = $__require('npm:warning@2.1.0.js');
    var _warning2 = _interopRequireDefault(_warning);
    var _ExecutionEnvironment = $__require('npm:history@2.1.2/lib/ExecutionEnvironment.js');
    var _PathUtils = $__require('npm:history@2.1.2/lib/PathUtils.js');
    var _runTransitionHook = $__require('npm:history@2.1.2/lib/runTransitionHook.js');
    var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
    var _deprecate = $__require('npm:history@2.1.2/lib/deprecate.js');
    var _deprecate2 = _interopRequireDefault(_deprecate);
    function useBasename(createHistory) {
      return function() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var history = createHistory(options);
        var basename = options.basename;
        var checkedBaseHref = false;
        function checkBaseHref() {
          if (checkedBaseHref) {
            return;
          }
          if (basename == null && _ExecutionEnvironment.canUseDOM) {
            var base = document.getElementsByTagName('base')[0];
            var baseHref = base && base.getAttribute('href');
            if (baseHref != null) {
              basename = baseHref;
              "production" !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
            }
          }
          checkedBaseHref = true;
        }
        function addBasename(location) {
          checkBaseHref();
          if (basename && location.basename == null) {
            if (location.pathname.indexOf(basename) === 0) {
              location.pathname = location.pathname.substring(basename.length);
              location.basename = basename;
              if (location.pathname === '')
                location.pathname = '/';
            } else {
              location.basename = '';
            }
          }
          return location;
        }
        function prependBasename(location) {
          checkBaseHref();
          if (!basename)
            return location;
          if (typeof location === 'string')
            location = _PathUtils.parsePath(location);
          var pname = location.pathname;
          var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
          var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
          var pathname = normalizedBasename + normalizedPathname;
          return _extends({}, location, {pathname: pathname});
        }
        function listenBefore(hook) {
          return history.listenBefore(function(location, callback) {
            _runTransitionHook2['default'](hook, addBasename(location), callback);
          });
        }
        function listen(listener) {
          return history.listen(function(location) {
            listener(addBasename(location));
          });
        }
        function push(location) {
          history.push(prependBasename(location));
        }
        function replace(location) {
          history.replace(prependBasename(location));
        }
        function createPath(location) {
          return history.createPath(prependBasename(location));
        }
        function createHref(location) {
          return history.createHref(prependBasename(location));
        }
        function createLocation(location) {
          for (var _len = arguments.length,
              args = Array(_len > 1 ? _len - 1 : 0),
              _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
        }
        function pushState(state, path) {
          if (typeof path === 'string')
            path = _PathUtils.parsePath(path);
          push(_extends({state: state}, path));
        }
        function replaceState(state, path) {
          if (typeof path === 'string')
            path = _PathUtils.parsePath(path);
          replace(_extends({state: state}, path));
        }
        return _extends({}, history, {
          listenBefore: listenBefore,
          listen: listen,
          push: push,
          replace: replace,
          createPath: createPath,
          createHref: createHref,
          createLocation: createLocation,
          pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
          replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
        });
      };
    }
    exports['default'] = useBasename;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:invariant@2.2.1/browser.js", ["github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var invariant = function(condition, format, a, b, c, d, e, f) {
      if ("production" !== 'production') {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      }
      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function() {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:invariant@2.2.1.js", ["npm:invariant@2.2.1/browser.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:invariant@2.2.1/browser.js');
  return module.exports;
});

System.registerDynamic("npm:deep-equal@1.0.1/lib/keys.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;
  exports.shim = shim;
  function shim(obj) {
    var keys = [];
    for (var key in obj)
      keys.push(key);
    return keys;
  }
  return module.exports;
});

System.registerDynamic("npm:deep-equal@1.0.1/lib/is_arguments.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var supportsArgumentsClass = (function() {
    return Object.prototype.toString.call(arguments);
  })() == '[object Arguments]';
  exports = module.exports = supportsArgumentsClass ? supported : unsupported;
  exports.supported = supported;
  function supported(object) {
    return Object.prototype.toString.call(object) == '[object Arguments]';
  }
  ;
  exports.unsupported = unsupported;
  function unsupported(object) {
    return object && typeof object == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
  }
  ;
  return module.exports;
});

System.registerDynamic("npm:deep-equal@1.0.1/index.js", ["npm:deep-equal@1.0.1/lib/keys.js", "npm:deep-equal@1.0.1/lib/is_arguments.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var pSlice = Array.prototype.slice;
  var objectKeys = $__require('npm:deep-equal@1.0.1/lib/keys.js');
  var isArguments = $__require('npm:deep-equal@1.0.1/lib/is_arguments.js');
  var deepEqual = module.exports = function(actual, expected, opts) {
    if (!opts)
      opts = {};
    if (actual === expected) {
      return true;
    } else if (actual instanceof Date && expected instanceof Date) {
      return actual.getTime() === expected.getTime();
    } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
      return opts.strict ? actual === expected : actual == expected;
    } else {
      return objEquiv(actual, expected, opts);
    }
  };
  function isUndefinedOrNull(value) {
    return value === null || value === undefined;
  }
  function isBuffer(x) {
    if (!x || typeof x !== 'object' || typeof x.length !== 'number')
      return false;
    if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
      return false;
    }
    if (x.length > 0 && typeof x[0] !== 'number')
      return false;
    return true;
  }
  function objEquiv(a, b, opts) {
    var i,
        key;
    if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
      return false;
    if (a.prototype !== b.prototype)
      return false;
    if (isArguments(a)) {
      if (!isArguments(b)) {
        return false;
      }
      a = pSlice.call(a);
      b = pSlice.call(b);
      return deepEqual(a, b, opts);
    }
    if (isBuffer(a)) {
      if (!isBuffer(b)) {
        return false;
      }
      if (a.length !== b.length)
        return false;
      for (i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
          return false;
      }
      return true;
    }
    try {
      var ka = objectKeys(a),
          kb = objectKeys(b);
    } catch (e) {
      return false;
    }
    if (ka.length != kb.length)
      return false;
    ka.sort();
    kb.sort();
    for (i = ka.length - 1; i >= 0; i--) {
      if (ka[i] != kb[i])
        return false;
    }
    for (i = ka.length - 1; i >= 0; i--) {
      key = ka[i];
      if (!deepEqual(a[key], b[key], opts))
        return false;
    }
    return typeof a === typeof b;
  }
  return module.exports;
});

System.registerDynamic("npm:deep-equal@1.0.1.js", ["npm:deep-equal@1.0.1/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:deep-equal@1.0.1/index.js');
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/AsyncUtils.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var _slice = Array.prototype.slice;
  exports.loopAsync = loopAsync;
  function loopAsync(turns, work, callback) {
    var currentTurn = 0,
        isDone = false;
    var sync = false,
        hasNext = false,
        doneArgs = undefined;
    function done() {
      isDone = true;
      if (sync) {
        doneArgs = [].concat(_slice.call(arguments));
        return;
      }
      callback.apply(this, arguments);
    }
    function next() {
      if (isDone) {
        return;
      }
      hasNext = true;
      if (sync) {
        return;
      }
      sync = true;
      while (!isDone && currentTurn < turns && hasNext) {
        hasNext = false;
        work.call(this, currentTurn++, next, done);
      }
      sync = false;
      if (isDone) {
        callback.apply(this, doneArgs);
        return;
      }
      if (currentTurn >= turns && hasNext) {
        isDone = true;
        callback();
      }
    }
    next();
  }
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/Actions.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  var PUSH = 'PUSH';
  exports.PUSH = PUSH;
  var REPLACE = 'REPLACE';
  exports.REPLACE = REPLACE;
  var POP = 'POP';
  exports.POP = POP;
  exports['default'] = {
    PUSH: PUSH,
    REPLACE: REPLACE,
    POP: POP
  };
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/PathUtils.js", ["npm:warning@2.1.0.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    exports.extractPath = extractPath;
    exports.parsePath = parsePath;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _warning = $__require('npm:warning@2.1.0.js');
    var _warning2 = _interopRequireDefault(_warning);
    function extractPath(string) {
      var match = string.match(/^https?:\/\/[^\/]*/);
      if (match == null)
        return string;
      return string.substring(match[0].length);
    }
    function parsePath(path) {
      var pathname = extractPath(path);
      var search = '';
      var hash = '';
      "production" !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;
      var hashIndex = pathname.indexOf('#');
      if (hashIndex !== -1) {
        hash = pathname.substring(hashIndex);
        pathname = pathname.substring(0, hashIndex);
      }
      var searchIndex = pathname.indexOf('?');
      if (searchIndex !== -1) {
        search = pathname.substring(searchIndex);
        pathname = pathname.substring(0, searchIndex);
      }
      if (pathname === '')
        pathname = '/';
      return {
        pathname: pathname,
        search: search,
        hash: hash
      };
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/createLocation.js", ["npm:warning@2.1.0.js", "npm:history@2.1.2/lib/Actions.js", "npm:history@2.1.2/lib/PathUtils.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _warning = $__require('npm:warning@2.1.0.js');
    var _warning2 = _interopRequireDefault(_warning);
    var _Actions = $__require('npm:history@2.1.2/lib/Actions.js');
    var _PathUtils = $__require('npm:history@2.1.2/lib/PathUtils.js');
    function createLocation() {
      var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
      var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
      var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
      var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
      if (typeof location === 'string')
        location = _PathUtils.parsePath(location);
      if (typeof action === 'object') {
        "production" !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;
        location = _extends({}, location, {state: action});
        action = key || _Actions.POP;
        key = _fourthArg;
      }
      var pathname = location.pathname || '/';
      var search = location.search || '';
      var hash = location.hash || '';
      var state = location.state || null;
      return {
        pathname: pathname,
        search: search,
        hash: hash,
        state: state,
        action: action,
        key: key
      };
    }
    exports['default'] = createLocation;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/runTransitionHook.js", ["npm:warning@2.1.0.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _warning = $__require('npm:warning@2.1.0.js');
    var _warning2 = _interopRequireDefault(_warning);
    function runTransitionHook(hook, location, callback) {
      var result = hook(location, callback);
      if (hook.length < 2) {
        callback(result);
      } else {
        "production" !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
      }
    }
    exports['default'] = runTransitionHook;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:warning@2.1.0/browser.js", ["github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var warning = function() {};
    if ("production" !== 'production') {
      warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (format.length < 10 || (/^[s\W]*$/).test(format)) {
          throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
        }
        if (!condition) {
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
          });
          if (typeof console !== 'undefined') {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {}
        }
      };
    }
    module.exports = warning;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:warning@2.1.0.js", ["npm:warning@2.1.0/browser.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:warning@2.1.0/browser.js');
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/deprecate.js", ["npm:warning@2.1.0.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _warning = $__require('npm:warning@2.1.0.js');
    var _warning2 = _interopRequireDefault(_warning);
    function deprecate(fn, message) {
      return function() {
        "production" !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
        return fn.apply(this, arguments);
      };
    }
    exports['default'] = deprecate;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/createHistory.js", ["npm:warning@2.1.0.js", "npm:deep-equal@1.0.1.js", "npm:history@2.1.2/lib/PathUtils.js", "npm:history@2.1.2/lib/AsyncUtils.js", "npm:history@2.1.2/lib/Actions.js", "npm:history@2.1.2/lib/createLocation.js", "npm:history@2.1.2/lib/runTransitionHook.js", "npm:history@2.1.2/lib/deprecate.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _warning = $__require('npm:warning@2.1.0.js');
    var _warning2 = _interopRequireDefault(_warning);
    var _deepEqual = $__require('npm:deep-equal@1.0.1.js');
    var _deepEqual2 = _interopRequireDefault(_deepEqual);
    var _PathUtils = $__require('npm:history@2.1.2/lib/PathUtils.js');
    var _AsyncUtils = $__require('npm:history@2.1.2/lib/AsyncUtils.js');
    var _Actions = $__require('npm:history@2.1.2/lib/Actions.js');
    var _createLocation2 = $__require('npm:history@2.1.2/lib/createLocation.js');
    var _createLocation3 = _interopRequireDefault(_createLocation2);
    var _runTransitionHook = $__require('npm:history@2.1.2/lib/runTransitionHook.js');
    var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
    var _deprecate = $__require('npm:history@2.1.2/lib/deprecate.js');
    var _deprecate2 = _interopRequireDefault(_deprecate);
    function createRandomKey(length) {
      return Math.random().toString(36).substr(2, length);
    }
    function locationsAreEqual(a, b) {
      return a.pathname === b.pathname && a.search === b.search && a.key === b.key && _deepEqual2['default'](a.state, b.state);
    }
    var DefaultKeyLength = 6;
    function createHistory() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var getCurrentLocation = options.getCurrentLocation;
      var finishTransition = options.finishTransition;
      var saveState = options.saveState;
      var go = options.go;
      var getUserConfirmation = options.getUserConfirmation;
      var keyLength = options.keyLength;
      if (typeof keyLength !== 'number')
        keyLength = DefaultKeyLength;
      var transitionHooks = [];
      function listenBefore(hook) {
        transitionHooks.push(hook);
        return function() {
          transitionHooks = transitionHooks.filter(function(item) {
            return item !== hook;
          });
        };
      }
      var allKeys = [];
      var changeListeners = [];
      var location = undefined;
      function getCurrent() {
        if (pendingLocation && pendingLocation.action === _Actions.POP) {
          return allKeys.indexOf(pendingLocation.key);
        } else if (location) {
          return allKeys.indexOf(location.key);
        } else {
          return -1;
        }
      }
      function updateLocation(newLocation) {
        var current = getCurrent();
        location = newLocation;
        if (location.action === _Actions.PUSH) {
          allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
        } else if (location.action === _Actions.REPLACE) {
          allKeys[current] = location.key;
        }
        changeListeners.forEach(function(listener) {
          listener(location);
        });
      }
      function listen(listener) {
        changeListeners.push(listener);
        if (location) {
          listener(location);
        } else {
          var _location = getCurrentLocation();
          allKeys = [_location.key];
          updateLocation(_location);
        }
        return function() {
          changeListeners = changeListeners.filter(function(item) {
            return item !== listener;
          });
        };
      }
      function confirmTransitionTo(location, callback) {
        _AsyncUtils.loopAsync(transitionHooks.length, function(index, next, done) {
          _runTransitionHook2['default'](transitionHooks[index], location, function(result) {
            if (result != null) {
              done(result);
            } else {
              next();
            }
          });
        }, function(message) {
          if (getUserConfirmation && typeof message === 'string') {
            getUserConfirmation(message, function(ok) {
              callback(ok !== false);
            });
          } else {
            callback(message !== false);
          }
        });
      }
      var pendingLocation = undefined;
      function transitionTo(nextLocation) {
        if (location && locationsAreEqual(location, nextLocation))
          return;
        pendingLocation = nextLocation;
        confirmTransitionTo(nextLocation, function(ok) {
          if (pendingLocation !== nextLocation)
            return;
          if (ok) {
            if (nextLocation.action === _Actions.PUSH) {
              var prevPath = createPath(location);
              var nextPath = createPath(nextLocation);
              if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state))
                nextLocation.action = _Actions.REPLACE;
            }
            if (finishTransition(nextLocation) !== false)
              updateLocation(nextLocation);
          } else if (location && nextLocation.action === _Actions.POP) {
            var prevIndex = allKeys.indexOf(location.key);
            var nextIndex = allKeys.indexOf(nextLocation.key);
            if (prevIndex !== -1 && nextIndex !== -1)
              go(prevIndex - nextIndex);
          }
        });
      }
      function push(location) {
        transitionTo(createLocation(location, _Actions.PUSH, createKey()));
      }
      function replace(location) {
        transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
      }
      function goBack() {
        go(-1);
      }
      function goForward() {
        go(1);
      }
      function createKey() {
        return createRandomKey(keyLength);
      }
      function createPath(location) {
        if (location == null || typeof location === 'string')
          return location;
        var pathname = location.pathname;
        var search = location.search;
        var hash = location.hash;
        var result = pathname;
        if (search)
          result += search;
        if (hash)
          result += hash;
        return result;
      }
      function createHref(location) {
        return createPath(location);
      }
      function createLocation(location, action) {
        var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
        if (typeof action === 'object') {
          "production" !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;
          if (typeof location === 'string')
            location = _PathUtils.parsePath(location);
          location = _extends({}, location, {state: action});
          action = key;
          key = arguments[3] || createKey();
        }
        return _createLocation3['default'](location, action, key);
      }
      function setState(state) {
        if (location) {
          updateLocationState(location, state);
          updateLocation(location);
        } else {
          updateLocationState(getCurrentLocation(), state);
        }
      }
      function updateLocationState(location, state) {
        location.state = _extends({}, location.state, state);
        saveState(location.key, location.state);
      }
      function registerTransitionHook(hook) {
        if (transitionHooks.indexOf(hook) === -1)
          transitionHooks.push(hook);
      }
      function unregisterTransitionHook(hook) {
        transitionHooks = transitionHooks.filter(function(item) {
          return item !== hook;
        });
      }
      function pushState(state, path) {
        if (typeof path === 'string')
          path = _PathUtils.parsePath(path);
        push(_extends({state: state}, path));
      }
      function replaceState(state, path) {
        if (typeof path === 'string')
          path = _PathUtils.parsePath(path);
        replace(_extends({state: state}, path));
      }
      return {
        listenBefore: listenBefore,
        listen: listen,
        transitionTo: transitionTo,
        push: push,
        replace: replace,
        go: go,
        goBack: goBack,
        goForward: goForward,
        createKey: createKey,
        createPath: createPath,
        createHref: createHref,
        createLocation: createLocation,
        setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
        registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
        unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
        pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
        replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
      };
    }
    exports['default'] = createHistory;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:process@0.11.5/browser.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  (function() {
    try {
      cachedSetTimeout = setTimeout;
    } catch (e) {
      cachedSetTimeout = function() {
        throw new Error('setTimeout is not defined');
      };
    }
    try {
      cachedClearTimeout = clearTimeout;
    } catch (e) {
      cachedClearTimeout = function() {
        throw new Error('clearTimeout is not defined');
      };
    }
  }());
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      cachedSetTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

System.registerDynamic("npm:process@0.11.5.js", ["npm:process@0.11.5/browser.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:process@0.11.5/browser.js');
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.2/index.js", ["npm:process@0.11.5.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = System._nodeRequire ? process : $__require('npm:process@0.11.5.js');
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.2.js", ["github:jspm/nodelibs-process@0.1.2/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('github:jspm/nodelibs-process@0.1.2/index.js');
  return module.exports;
});

System.registerDynamic("npm:history@2.1.2/lib/createMemoryHistory.js", ["npm:warning@2.1.0.js", "npm:invariant@2.2.1.js", "npm:history@2.1.2/lib/PathUtils.js", "npm:history@2.1.2/lib/Actions.js", "npm:history@2.1.2/lib/createHistory.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    exports.__esModule = true;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _warning = $__require('npm:warning@2.1.0.js');
    var _warning2 = _interopRequireDefault(_warning);
    var _invariant = $__require('npm:invariant@2.2.1.js');
    var _invariant2 = _interopRequireDefault(_invariant);
    var _PathUtils = $__require('npm:history@2.1.2/lib/PathUtils.js');
    var _Actions = $__require('npm:history@2.1.2/lib/Actions.js');
    var _createHistory = $__require('npm:history@2.1.2/lib/createHistory.js');
    var _createHistory2 = _interopRequireDefault(_createHistory);
    function createStateStorage(entries) {
      return entries.filter(function(entry) {
        return entry.state;
      }).reduce(function(memo, entry) {
        memo[entry.key] = entry.state;
        return memo;
      }, {});
    }
    function createMemoryHistory() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      if (Array.isArray(options)) {
        options = {entries: options};
      } else if (typeof options === 'string') {
        options = {entries: [options]};
      }
      var history = _createHistory2['default'](_extends({}, options, {
        getCurrentLocation: getCurrentLocation,
        finishTransition: finishTransition,
        saveState: saveState,
        go: go
      }));
      var _options = options;
      var entries = _options.entries;
      var current = _options.current;
      if (typeof entries === 'string') {
        entries = [entries];
      } else if (!Array.isArray(entries)) {
        entries = ['/'];
      }
      entries = entries.map(function(entry) {
        var key = history.createKey();
        if (typeof entry === 'string')
          return {
            pathname: entry,
            key: key
          };
        if (typeof entry === 'object' && entry)
          return _extends({}, entry, {key: key});
        !false ? "production" !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
      });
      if (current == null) {
        current = entries.length - 1;
      } else {
        !(current >= 0 && current < entries.length) ? "production" !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
      }
      var storage = createStateStorage(entries);
      function saveState(key, state) {
        storage[key] = state;
      }
      function readState(key) {
        return storage[key];
      }
      function getCurrentLocation() {
        var entry = entries[current];
        var basename = entry.basename;
        var pathname = entry.pathname;
        var search = entry.search;
        var path = (basename || '') + pathname + (search || '');
        var key = undefined,
            state = undefined;
        if (entry.key) {
          key = entry.key;
          state = readState(key);
        } else {
          key = history.createKey();
          state = null;
          entry.key = key;
        }
        var location = _PathUtils.parsePath(path);
        return history.createLocation(_extends({}, location, {state: state}), undefined, key);
      }
      function canGo(n) {
        var index = current + n;
        return index >= 0 && index < entries.length;
      }
      function go(n) {
        if (n) {
          if (!canGo(n)) {
            "production" !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
            return;
          }
          current += n;
          var currentLocation = getCurrentLocation();
          history.transitionTo(_extends({}, currentLocation, {action: _Actions.POP}));
        }
      }
      function finishTransition(location) {
        switch (location.action) {
          case _Actions.PUSH:
            current += 1;
            if (current < entries.length)
              entries.splice(current);
            entries.push(location);
            saveState(location.key, location.state);
            break;
          case _Actions.REPLACE:
            entries[current] = location;
            saveState(location.key, location.state);
            break;
        }
      }
      return history;
    }
    exports['default'] = createMemoryHistory;
    module.exports = exports['default'];
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/createMemoryHistory.js", ["npm:history@2.1.2/lib/useQueries.js", "npm:history@2.1.2/lib/useBasename.js", "npm:history@2.1.2/lib/createMemoryHistory.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports.default = createMemoryHistory;
  var _useQueries = $__require('npm:history@2.1.2/lib/useQueries.js');
  var _useQueries2 = _interopRequireDefault(_useQueries);
  var _useBasename = $__require('npm:history@2.1.2/lib/useBasename.js');
  var _useBasename2 = _interopRequireDefault(_useBasename);
  var _createMemoryHistory = $__require('npm:history@2.1.2/lib/createMemoryHistory.js');
  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function createMemoryHistory(options) {
    var memoryHistory = (0, _createMemoryHistory2.default)(options);
    var createHistory = function createHistory() {
      return memoryHistory;
    };
    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
    history.__v2_compatible__ = true;
    return history;
  }
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1/lib/index.js", ["npm:react-router@2.4.1/lib/RouteUtils.js", "npm:react-router@2.4.1/lib/PropTypes.js", "npm:react-router@2.4.1/lib/PatternUtils.js", "npm:react-router@2.4.1/lib/Router.js", "npm:react-router@2.4.1/lib/Link.js", "npm:react-router@2.4.1/lib/IndexLink.js", "npm:react-router@2.4.1/lib/withRouter.js", "npm:react-router@2.4.1/lib/IndexRedirect.js", "npm:react-router@2.4.1/lib/IndexRoute.js", "npm:react-router@2.4.1/lib/Redirect.js", "npm:react-router@2.4.1/lib/Route.js", "npm:react-router@2.4.1/lib/History.js", "npm:react-router@2.4.1/lib/Lifecycle.js", "npm:react-router@2.4.1/lib/RouteContext.js", "npm:react-router@2.4.1/lib/useRoutes.js", "npm:react-router@2.4.1/lib/RouterContext.js", "npm:react-router@2.4.1/lib/RoutingContext.js", "npm:react-router@2.4.1/lib/match.js", "npm:react-router@2.4.1/lib/useRouterHistory.js", "npm:react-router@2.4.1/lib/applyRouterMiddleware.js", "npm:react-router@2.4.1/lib/browserHistory.js", "npm:react-router@2.4.1/lib/hashHistory.js", "npm:react-router@2.4.1/lib/createMemoryHistory.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.__esModule = true;
  exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;
  var _RouteUtils = $__require('npm:react-router@2.4.1/lib/RouteUtils.js');
  Object.defineProperty(exports, 'createRoutes', {
    enumerable: true,
    get: function get() {
      return _RouteUtils.createRoutes;
    }
  });
  var _PropTypes2 = $__require('npm:react-router@2.4.1/lib/PropTypes.js');
  Object.defineProperty(exports, 'locationShape', {
    enumerable: true,
    get: function get() {
      return _PropTypes2.locationShape;
    }
  });
  Object.defineProperty(exports, 'routerShape', {
    enumerable: true,
    get: function get() {
      return _PropTypes2.routerShape;
    }
  });
  var _PatternUtils = $__require('npm:react-router@2.4.1/lib/PatternUtils.js');
  Object.defineProperty(exports, 'formatPattern', {
    enumerable: true,
    get: function get() {
      return _PatternUtils.formatPattern;
    }
  });
  var _Router2 = $__require('npm:react-router@2.4.1/lib/Router.js');
  var _Router3 = _interopRequireDefault(_Router2);
  var _Link2 = $__require('npm:react-router@2.4.1/lib/Link.js');
  var _Link3 = _interopRequireDefault(_Link2);
  var _IndexLink2 = $__require('npm:react-router@2.4.1/lib/IndexLink.js');
  var _IndexLink3 = _interopRequireDefault(_IndexLink2);
  var _withRouter2 = $__require('npm:react-router@2.4.1/lib/withRouter.js');
  var _withRouter3 = _interopRequireDefault(_withRouter2);
  var _IndexRedirect2 = $__require('npm:react-router@2.4.1/lib/IndexRedirect.js');
  var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);
  var _IndexRoute2 = $__require('npm:react-router@2.4.1/lib/IndexRoute.js');
  var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);
  var _Redirect2 = $__require('npm:react-router@2.4.1/lib/Redirect.js');
  var _Redirect3 = _interopRequireDefault(_Redirect2);
  var _Route2 = $__require('npm:react-router@2.4.1/lib/Route.js');
  var _Route3 = _interopRequireDefault(_Route2);
  var _History2 = $__require('npm:react-router@2.4.1/lib/History.js');
  var _History3 = _interopRequireDefault(_History2);
  var _Lifecycle2 = $__require('npm:react-router@2.4.1/lib/Lifecycle.js');
  var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);
  var _RouteContext2 = $__require('npm:react-router@2.4.1/lib/RouteContext.js');
  var _RouteContext3 = _interopRequireDefault(_RouteContext2);
  var _useRoutes2 = $__require('npm:react-router@2.4.1/lib/useRoutes.js');
  var _useRoutes3 = _interopRequireDefault(_useRoutes2);
  var _RouterContext2 = $__require('npm:react-router@2.4.1/lib/RouterContext.js');
  var _RouterContext3 = _interopRequireDefault(_RouterContext2);
  var _RoutingContext2 = $__require('npm:react-router@2.4.1/lib/RoutingContext.js');
  var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);
  var _PropTypes3 = _interopRequireDefault(_PropTypes2);
  var _match2 = $__require('npm:react-router@2.4.1/lib/match.js');
  var _match3 = _interopRequireDefault(_match2);
  var _useRouterHistory2 = $__require('npm:react-router@2.4.1/lib/useRouterHistory.js');
  var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);
  var _applyRouterMiddleware2 = $__require('npm:react-router@2.4.1/lib/applyRouterMiddleware.js');
  var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);
  var _browserHistory2 = $__require('npm:react-router@2.4.1/lib/browserHistory.js');
  var _browserHistory3 = _interopRequireDefault(_browserHistory2);
  var _hashHistory2 = $__require('npm:react-router@2.4.1/lib/hashHistory.js');
  var _hashHistory3 = _interopRequireDefault(_hashHistory2);
  var _createMemoryHistory2 = $__require('npm:react-router@2.4.1/lib/createMemoryHistory.js');
  var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  exports.Router = _Router3.default;
  exports.Link = _Link3.default;
  exports.IndexLink = _IndexLink3.default;
  exports.withRouter = _withRouter3.default;
  exports.IndexRedirect = _IndexRedirect3.default;
  exports.IndexRoute = _IndexRoute3.default;
  exports.Redirect = _Redirect3.default;
  exports.Route = _Route3.default;
  exports.History = _History3.default;
  exports.Lifecycle = _Lifecycle3.default;
  exports.RouteContext = _RouteContext3.default;
  exports.useRoutes = _useRoutes3.default;
  exports.RouterContext = _RouterContext3.default;
  exports.RoutingContext = _RoutingContext3.default;
  exports.PropTypes = _PropTypes3.default;
  exports.match = _match3.default;
  exports.useRouterHistory = _useRouterHistory3.default;
  exports.applyRouterMiddleware = _applyRouterMiddleware3.default;
  exports.browserHistory = _browserHistory3.default;
  exports.hashHistory = _hashHistory3.default;
  exports.createMemoryHistory = _createMemoryHistory3.default;
  return module.exports;
});

System.registerDynamic("npm:react-router@2.4.1.js", ["npm:react-router@2.4.1/lib/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:react-router@2.4.1/lib/index.js');
  return module.exports;
});

//# sourceMappingURL=dependency-bundle.js.map