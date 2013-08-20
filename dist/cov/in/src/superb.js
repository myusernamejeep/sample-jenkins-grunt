// instrument by jscoverage, do not modifly this file
(function () {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (!BASE._$jscoverage) {
    BASE._$jscoverage = {};
    BASE._$jscoverage_cond = {};
    BASE._$jscoverage_done = function (file, line, express) {
      if (arguments.length === 2) {
        BASE._$jscoverage[file][line] ++;
      } else {
        BASE._$jscoverage_cond[file][line] ++;
        return express;
      }
    };
    BASE._$jscoverage_init = function (base, file, lines) {
      var tmp = [];
      for (var i = 0; i < lines.length; i ++) {
        tmp[lines[i]] = 0;
      }
      base[file] = tmp;
    };
  }
})();
_$jscoverage_init(_$jscoverage, "src\superb.js",[2,4]);
_$jscoverage_init(_$jscoverage_cond, "src\superb.js",[]);
_$jscoverage["src\superb.js"].source = ["// SUPERB!","(function(){","  'use strict';","  console.log('something superb to do');","})();"];
_$jscoverage_done("src\\superb.js", 2);
(function() {
    "use strict";
    _$jscoverage_done("src\\superb.js", 4);
    console.log("something superb to do");
})();