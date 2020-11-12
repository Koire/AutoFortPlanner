// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"rawData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TowerData = void 0;
var TowerData = {
  "LightningTower": [{
    "material": {
      "type": "wood",
      "amount": 12
    },
    "time": 990,
    "levelRequired": 1,
    "HP": 6991,
    "XP": 28,
    "AP": 863,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 208
    },
    "time": 3510,
    "levelRequired": 1,
    "HP": 8643,
    "XP": 98,
    "AP": 1197,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 463
    },
    "time": 7200,
    "levelRequired": 1,
    "HP": 10261,
    "XP": 225,
    "AP": 1687,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 10800,
    "levelRequired": 1,
    "HP": 11982,
    "XP": 383,
    "AP": 2293,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1463
    },
    "time": 16200,
    "levelRequired": 1,
    "HP": 14255,
    "XP": 428,
    "AP": 3118,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 21600,
    "levelRequired": 7,
    "HP": 16884,
    "XP": 600,
    "AP": 4226,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 2698
    },
    "time": 28800,
    "levelRequired": 12,
    "HP": 19892,
    "XP": 750,
    "AP": 5707,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 36000,
    "levelRequired": 12,
    "HP": 23314,
    "XP": 750,
    "AP": 7677,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 5703
    },
    "time": 43200,
    "levelRequired": 17,
    "HP": 27185,
    "XP": 924,
    "AP": 9083,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 57600,
    "levelRequired": 17,
    "HP": 30537,
    "XP": 1264,
    "AP": 10202,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 12869
    },
    "time": 72000,
    "levelRequired": 21,
    "HP": 34165,
    "XP": 1298,
    "AP": 11413,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 86400,
    "levelRequired": 21,
    "HP": 38072,
    "XP": 1667,
    "AP": 12716,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 26927
    },
    "time": 129600,
    "levelRequired": 25,
    "HP": 42382,
    "XP": 2058,
    "AP": 14154,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 172800,
    "levelRequired": 28,
    "HP": 47181,
    "XP": 2118,
    "AP": 15754,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 51677
    },
    "time": 216000,
    "levelRequired": 31,
    "HP": 52525,
    "XP": 2546,
    "AP": 17536,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 259200,
    "levelRequired": 31,
    "HP": 58473,
    "XP": 3000,
    "AP": 19520,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 77039
    },
    "time": 302400,
    "levelRequired": 34,
    "HP": 65095,
    "XP": 3097,
    "AP": 21730,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 345600,
    "levelRequired": 37,
    "HP": 72467,
    "XP": 4000,
    "AP": 24191,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "wood",
      "amount": 129598
    },
    "time": 388800,
    "levelRequired": 42,
    "HP": 85121,
    "XP": 5334,
    "AP": 28413,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 99983,
    "XP": 7000,
    "AP": 33371,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "wood",
      "amount": 187199
    },
    "time": 518400,
    "levelRequired": 50,
    "HP": 117442,
    "XP": 9143,
    "AP": 39195,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 137949,
    "XP": 12000,
    "AP": 46036,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "wood",
      "amount": 251999
    },
    "time": 691200,
    "levelRequired": 61,
    "HP": 162037,
    "XP": 16000,
    "AP": 54071,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 190332,
    "XP": 17600,
    "AP": 63510,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "wood",
      "amount": 299904
    },
    "time": 864000,
    "levelRequired": 67,
    "HP": 223569,
    "XP": 19200,
    "AP": 74598,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 277082,
    "XP": 20800,
    "AP": 92446,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "wood",
      "amount": 381696
    },
    "time": 1080000,
    "levelRequired": 79,
    "HP": 343405,
    "XP": 24000,
    "AP": 114568,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 401654,
    "XP": 25600,
    "AP": 133999,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 463488
    },
    "time": 1224000,
    "levelRequired": 91,
    "HP": 443347,
    "XP": 27200,
    "AP": 147905,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 489370,
    "XP": 30400,
    "AP": 163255,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 545280
    },
    "time": 1370990,
    "levelRequired": 100,
    "HP": 540170,
    "XP": 32000,
    "AP": 180197,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 596246,
    "XP": 33600,
    "AP": 198898,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 627072
    },
    "time": 1566720,
    "levelRequired": 112,
    "HP": 658141,
    "XP": 33600,
    "AP": 219544,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 726462,
    "XP": 33600,
    "AP": 242332,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 708864
    },
    "time": 1762560,
    "levelRequired": 124,
    "HP": 801875,
    "XP": 33600,
    "AP": 267481,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 885119,
    "XP": 33600,
    "AP": 295245,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 790656
    },
    "time": 1762560,
    "levelRequired": 136,
    "HP": 977004,
    "XP": 33600,
    "AP": 325891,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1078427,
    "XP": 33600,
    "AP": 359716,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 872448
    },
    "time": 1762560,
    "levelRequired": 145,
    "HP": 1190380,
    "XP": 33600,
    "AP": 397056,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1313954,
    "XP": 33600,
    "AP": 438270,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 954240
    },
    "time": 2290604,
    "levelRequired": 157,
    "HP": 1450357,
    "XP": 35349,
    "AP": 483762,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1600920,
    "XP": 42345,
    "AP": 533976,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1036032
    },
    "time": 3197201,
    "levelRequired": 169,
    "HP": 1767114,
    "XP": 49340,
    "AP": 589403,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 1950560,
    "XP": 56335,
    "AP": 650585,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1117824
    },
    "time": 4103799,
    "levelRequired": 181,
    "HP": 2153050,
    "XP": 63331,
    "AP": 718118,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2376560,
    "XP": 70326,
    "AP": 792663,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1199616
    },
    "time": 4314507,
    "levelRequired": 193,
    "HP": 2623276,
    "XP": 77321,
    "AP": 874945,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 2895603,
    "XP": 84317,
    "AP": 965770,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1281408
    },
    "time": 4602106,
    "levelRequired": 202,
    "HP": 3196202,
    "XP": 91312,
    "AP": 1066024,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3528005,
    "XP": 98307,
    "AP": 1176687,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1342752
    },
    "time": 5000000,
    "levelRequired": 211,
    "HP": 3894256,
    "XP": 101805,
    "AP": 1298839,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4298527,
    "XP": 105303,
    "AP": 1433670,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1383648
    },
    "time": 5000000,
    "levelRequired": 217,
    "HP": 4744767,
    "XP": 106000,
    "AP": 1582498,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5237333,
    "XP": 106000,
    "AP": 1746779,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 1424544
    },
    "time": 5000000,
    "levelRequired": 223,
    "HP": 5781033,
    "XP": 106000,
    "AP": 1928116,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 6381176,
    "XP": 106000,
    "AP": 2128275,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1465440
    },
    "time": 5000000,
    "levelRequired": 229,
    "HP": 7043622,
    "XP": 106000,
    "AP": 2349216,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 7774837,
    "XP": 106000,
    "AP": 2593089,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1506336
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 8581963,
    "XP": 106000,
    "AP": 2862281,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 9472878,
    "XP": 106000,
    "AP": 3159420,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "wood",
      "amount": 1751712
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9952442,
    "XP": 106000,
    "AP": 3319363,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10456283,
    "XP": 106000,
    "AP": 3487405,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1792608
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10985630,
    "XP": 106000,
    "AP": 3663951,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11541775,
    "XP": 106000,
    "AP": 3849437,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1833504
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12126077,
    "XP": 106000,
    "AP": 4044310,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12739958,
    "XP": 106000,
    "AP": 4249052,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1874400
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13384916,
    "XP": 106000,
    "AP": 4464159,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14062526,
    "XP": 106000,
    "AP": 4690156,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1915296
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14774440,
    "XP": 106000,
    "AP": 4927594,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15522394,
    "XP": 106000,
    "AP": 5177050,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1956192
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16308213,
    "XP": 106000,
    "AP": 5439138,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 17133815,
    "XP": 106000,
    "AP": 5714492,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1997088
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18001213,
    "XP": 106000,
    "AP": 6003786,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18912522,
    "XP": 106000,
    "AP": 6307726,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2037984
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 19869968,
    "XP": 106000,
    "AP": 6627052,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 21293401,
    "XP": 106000,
    "AP": 7101794,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2089104
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 23380283,
    "XP": 106000,
    "AP": 7797809,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 25036291,
    "XP": 106000,
    "AP": 8350120,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2130000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 26800048,
    "XP": 106000,
    "AP": 8938368,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 29395176,
    "XP": 106000,
    "AP": 9803893,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 31444818,
    "XP": 106000,
    "AP": 10487487,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 33626651,
    "XP": 106000,
    "AP": 11215171,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 35948805,
    "XP": 106000,
    "AP": 11989654,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 38419897,
    "XP": 106000,
    "AP": 12813809,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 41049054,
    "XP": 106000,
    "AP": 13690682,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 43127160,
    "XP": 106000,
    "AP": 14383769,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 45310470,
    "XP": 106000,
    "AP": 15111944,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 47604312,
    "XP": 106000,
    "AP": 15876983,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 50014279,
    "XP": 106000,
    "AP": 16680751,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 52546250,
    "XP": 106000,
    "AP": 17525212,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 55206403,
    "XP": 106000,
    "AP": 18412421,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 58001226,
    "XP": 106000,
    "AP": 19344546,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 60937537,
    "XP": 106000,
    "AP": 20323860,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 64022498,
    "XP": 106000,
    "AP": 21352751,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 67263636,
    "XP": 106000,
    "AP": 22433731,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 70668857,
    "XP": 106000,
    "AP": 23569435,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 74246466,
    "XP": 106000,
    "AP": 24762636,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 78005191,
    "XP": 106000,
    "AP": 26016242,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 81954202,
    "XP": 106000,
    "AP": 27333311,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 86103131,
    "XP": 106000,
    "AP": 28717057,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 90462100,
    "XP": 106000,
    "AP": 30170855,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 95041742,
    "XP": 106000,
    "AP": 31698252,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 99853229,
    "XP": 106000,
    "AP": 33302974,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 104908297,
    "XP": 106000,
    "AP": 34988933,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 110219278,
    "XP": 106000,
    "AP": 36760246,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 115799126,
    "XP": 106000,
    "AP": 38621230,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 121661456,
    "XP": 106000,
    "AP": 40576428,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 127820567,
    "XP": 106000,
    "AP": 42630606,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 134291482,
    "XP": 106000,
    "AP": 44788777,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 141089986,
    "XP": 106000,
    "AP": 47056205,
    "requiredBuilder": 54
  }],
  "CrystalHowitzer": [{
    "material": {
      "type": "electrumBar",
      "amount": 75
    },
    "time": 60,
    "levelRequired": 1,
    "HP": 5942,
    "XP": 1,
    "AP": 13400,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 208
    },
    "time": 450,
    "levelRequired": 1,
    "HP": 7346,
    "XP": 13,
    "AP": 18599,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 150
    },
    "time": 1920,
    "levelRequired": 1,
    "HP": 8721,
    "XP": 60,
    "AP": 26214,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 3952,
    "levelRequired": 1,
    "HP": 10184,
    "XP": 140,
    "AP": 35625,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 225
    },
    "time": 9094,
    "levelRequired": 1,
    "HP": 12116,
    "XP": 240,
    "AP": 48435,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 14580,
    "levelRequired": 7,
    "HP": 14351,
    "XP": 405,
    "AP": 65652,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 300
    },
    "time": 23040,
    "levelRequired": 7,
    "HP": 16908,
    "XP": 600,
    "AP": 88654,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 28800,
    "levelRequired": 12,
    "HP": 19816,
    "XP": 600,
    "AP": 119252,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 450
    },
    "time": 35100,
    "levelRequired": 12,
    "HP": 23107,
    "XP": 750,
    "AP": 141097,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 41559,
    "levelRequired": 17,
    "HP": 25956,
    "XP": 912,
    "AP": 158478,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 600
    },
    "time": 51896,
    "levelRequired": 17,
    "HP": 29040,
    "XP": 936,
    "AP": 177289,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 66355,
    "levelRequired": 21,
    "HP": 32361,
    "XP": 1280,
    "AP": 197524,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 750
    },
    "time": 103561,
    "levelRequired": 21,
    "HP": 36024,
    "XP": 1644,
    "AP": 219856,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 137915,
    "levelRequired": 28,
    "HP": 40103,
    "XP": 1691,
    "AP": 244719,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 900
    },
    "time": 177093,
    "levelRequired": 28,
    "HP": 44646,
    "XP": 2087,
    "AP": 272398,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 219927,
    "levelRequired": 31,
    "HP": 49702,
    "XP": 2546,
    "AP": 303213,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1050
    },
    "time": 297600,
    "levelRequired": 31,
    "HP": 55330,
    "XP": 3048,
    "AP": 337548,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 345600,
    "levelRequired": 37,
    "HP": 61596,
    "XP": 4000,
    "AP": 375772,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1200
    },
    "time": 388800,
    "levelRequired": 37,
    "HP": 72352,
    "XP": 5334,
    "AP": 441352,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 84985,
    "XP": 7000,
    "AP": 518361,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1350
    },
    "time": 518400,
    "levelRequired": 46,
    "HP": 99825,
    "XP": 9143,
    "AP": 608842,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 117256,
    "XP": 12000,
    "AP": 715101,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1500
    },
    "time": 691200,
    "levelRequired": 56,
    "HP": 137731,
    "XP": 16000,
    "AP": 839921,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 161782,
    "XP": 17600,
    "AP": 986536,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1650
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 190033,
    "XP": 19200,
    "AP": 1158768,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 235519,
    "XP": 20800,
    "AP": 1436010,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1800
    },
    "time": 1080000,
    "levelRequired": 73,
    "HP": 291894,
    "XP": 24000,
    "AP": 1779651,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 341405,
    "XP": 25600,
    "AP": 2081471,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1950
    },
    "time": 1224000,
    "levelRequired": 85,
    "HP": 376844,
    "XP": 27200,
    "AP": 2297479,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 415964,
    "XP": 30400,
    "AP": 2535926,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2100
    },
    "time": 1370990,
    "levelRequired": 94,
    "HP": 459144,
    "XP": 32000,
    "AP": 2799103,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 506809,
    "XP": 33600,
    "AP": 3089593,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2250
    },
    "time": 1566720,
    "levelRequired": 106,
    "HP": 559419,
    "XP": 33600,
    "AP": 3410297,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 617492,
    "XP": 33600,
    "AP": 3764266,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2400
    },
    "time": 1762560,
    "levelRequired": 118,
    "HP": 681593,
    "XP": 33600,
    "AP": 4154927,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 752351,
    "XP": 33600,
    "AP": 4586198,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2550
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 830453,
    "XP": 33600,
    "AP": 5062239,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 916662,
    "XP": 33600,
    "AP": 5587656,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2700
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1011823,
    "XP": 33600,
    "AP": 6167681,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1116860,
    "XP": 33600,
    "AP": 6807871,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2850
    },
    "time": 2290604,
    "levelRequired": 151,
    "HP": 1232803,
    "XP": 35349,
    "AP": 7514531,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1360782,
    "XP": 42345,
    "AP": 7702393,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3000
    },
    "time": 3197201,
    "levelRequired": 163,
    "HP": 1502046,
    "XP": 49340,
    "AP": 7894954,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 1657976,
    "XP": 56335,
    "AP": 8092330,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3150
    },
    "time": 4103799,
    "levelRequired": 175,
    "HP": 1830092,
    "XP": 63331,
    "AP": 8294638,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2020076,
    "XP": 70326,
    "AP": 8502004,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3300
    },
    "time": 4314507,
    "levelRequired": 187,
    "HP": 2229784,
    "XP": 77321,
    "AP": 8714553,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 2461262,
    "XP": 84317,
    "AP": 8932415,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3450
    },
    "time": 4602106,
    "levelRequired": 196,
    "HP": 2716771,
    "XP": 91312,
    "AP": 9155727,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 2998804,
    "XP": 98307,
    "AP": 9384621,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3600
    },
    "time": 5000000,
    "levelRequired": 208,
    "HP": 3310117,
    "XP": 101805,
    "AP": 9910318,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 3653747,
    "XP": 105303,
    "AP": 10436015,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3750
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4033051,
    "XP": 106000,
    "AP": 10961712,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 4451733,
    "XP": 106000,
    "AP": 11487409,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3900
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 4913878,
    "XP": 106000,
    "AP": 12013106,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 5423999,
    "XP": 106000,
    "AP": 12546276,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4050
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 5987078,
    "XP": 106000,
    "AP": 13848731,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 6608611,
    "XP": 106000,
    "AP": 15286371,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4200
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 7294668,
    "XP": 106000,
    "AP": 16873269,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 8051946,
    "XP": 106000,
    "AP": 18624917,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4350
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 8459575,
    "XP": 106000,
    "AP": 19567793,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 8887840,
    "XP": 106000,
    "AP": 20558402,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4500
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9337785,
    "XP": 106000,
    "AP": 21599152,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9810508,
    "XP": 106000,
    "AP": 22692597,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4650
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10307165,
    "XP": 106000,
    "AP": 23841387,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10828964,
    "XP": 106000,
    "AP": 25048347,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4800
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11377178,
    "XP": 106000,
    "AP": 26316411,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11953147,
    "XP": 106000,
    "AP": 27648674,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4950
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12558274,
    "XP": 106000,
    "AP": 29048381,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13194034,
    "XP": 106000,
    "AP": 30518938,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5100
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13861981,
    "XP": 106000,
    "AP": 32063956,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 14563742,
    "XP": 106000,
    "AP": 33687178,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5250
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 15301031,
    "XP": 106000,
    "AP": 35392579,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 16075643,
    "XP": 106000,
    "AP": 37184323,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5400
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 16889472,
    "XP": 106000,
    "AP": 39066762,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 18099390,
    "XP": 106000,
    "AP": 41865384,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5550
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 19873239,
    "XP": 106000,
    "AP": 45968421,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 21280846,
    "XP": 106000,
    "AP": 49224326,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5700
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 22780040,
    "XP": 106000,
    "AP": 52692069,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 24985898,
    "XP": 106000,
    "AP": 57794375,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5850
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 26728094,
    "XP": 106000,
    "AP": 61824197,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 28582652,
    "XP": 106000,
    "AP": 66113924,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6000
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 30556483,
    "XP": 106000,
    "AP": 70679535,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 32656912,
    "XP": 106000,
    "AP": 75537961,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6150
    },
    "time": 5000000,
    "levelRequired": 380,
    "HP": 34891696,
    "XP": 106000,
    "AP": 80707169,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 36658086,
    "XP": 106000,
    "AP": 84792946,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6300
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 38513899,
    "XP": 106000,
    "AP": 89085571,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 40463665,
    "XP": 106000,
    "AP": 93595510,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6450
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 42512137,
    "XP": 106000,
    "AP": 98333760,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 44664312,
    "XP": 106000,
    "AP": 103311888,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6600
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 46925442,
    "XP": 106000,
    "AP": 108542028,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 49301041,
    "XP": 106000,
    "AP": 114036947,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6750
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 51796906,
    "XP": 106000,
    "AP": 119810045,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 54419123,
    "XP": 106000,
    "AP": 125875402,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6900
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 57174090,
    "XP": 106000,
    "AP": 132247829,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 60068527,
    "XP": 106000,
    "AP": 138942852,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7050
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 63109495,
    "XP": 106000,
    "AP": 145976821,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 66304412,
    "XP": 106000,
    "AP": 153366884,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 69661070,
    "XP": 106000,
    "AP": 161131066,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 73187660,
    "XP": 106000,
    "AP": 169288309,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7350
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 76892784,
    "XP": 106000,
    "AP": 177858506,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 80785481,
    "XP": 106000,
    "AP": 186862584,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7500
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 84875244,
    "XP": 106000,
    "AP": 196322489,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 89172052,
    "XP": 106000,
    "AP": 206261290,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7650
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 93686386,
    "XP": 106000,
    "AP": 216703255,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160673
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 98429257,
    "XP": 106000,
    "AP": 227673838,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7800
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 103412237,
    "XP": 106000,
    "AP": 239199820,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160673
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 108647482,
    "XP": 106000,
    "AP": 251309284,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7950
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 114147758,
    "XP": 106000,
    "AP": 264031800,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160673
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 119926487,
    "XP": 106000,
    "AP": 277398389,
    "requiredBuilder": 54
  }],
  "Trebuchet": [{
    "material": {
      "type": "wood",
      "amount": 12
    },
    "time": 990,
    "levelRequired": 1,
    "HP": 6991,
    "XP": 28,
    "AP": 880,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 208
    },
    "time": 3510,
    "levelRequired": 1,
    "HP": 8643,
    "XP": 98,
    "AP": 1222,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 463
    },
    "time": 7200,
    "levelRequired": 1,
    "HP": 10261,
    "XP": 225,
    "AP": 1722,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 10800,
    "levelRequired": 1,
    "HP": 11982,
    "XP": 383,
    "AP": 2340,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1463
    },
    "time": 16200,
    "levelRequired": 1,
    "HP": 14255,
    "XP": 428,
    "AP": 3182,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 21600,
    "levelRequired": 7,
    "HP": 16884,
    "XP": 600,
    "AP": 4313,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 2698
    },
    "time": 28800,
    "levelRequired": 12,
    "HP": 19892,
    "XP": 750,
    "AP": 5824,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 36000,
    "levelRequired": 12,
    "HP": 23314,
    "XP": 750,
    "AP": 7834,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 5703
    },
    "time": 43200,
    "levelRequired": 17,
    "HP": 27185,
    "XP": 924,
    "AP": 9269,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 57600,
    "levelRequired": 17,
    "HP": 30537,
    "XP": 1264,
    "AP": 10411,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 12869
    },
    "time": 72000,
    "levelRequired": 21,
    "HP": 34165,
    "XP": 1298,
    "AP": 11646,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 86400,
    "levelRequired": 21,
    "HP": 38072,
    "XP": 1667,
    "AP": 12975,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 26927
    },
    "time": 129600,
    "levelRequired": 25,
    "HP": 42382,
    "XP": 2058,
    "AP": 14442,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 172800,
    "levelRequired": 28,
    "HP": 47181,
    "XP": 2118,
    "AP": 16076,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 51677
    },
    "time": 216000,
    "levelRequired": 31,
    "HP": 52525,
    "XP": 2546,
    "AP": 17894,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 259200,
    "levelRequired": 31,
    "HP": 58473,
    "XP": 3000,
    "AP": 19918,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 77039
    },
    "time": 302400,
    "levelRequired": 34,
    "HP": 65095,
    "XP": 3097,
    "AP": 22174,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 345600,
    "levelRequired": 37,
    "HP": 72467,
    "XP": 4000,
    "AP": 24685,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "wood",
      "amount": 129598
    },
    "time": 388800,
    "levelRequired": 42,
    "HP": 85121,
    "XP": 5334,
    "AP": 28993,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 99983,
    "XP": 7000,
    "AP": 34052,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "wood",
      "amount": 187199
    },
    "time": 518400,
    "levelRequired": 50,
    "HP": 117442,
    "XP": 9143,
    "AP": 39995,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 137949,
    "XP": 12000,
    "AP": 46976,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "wood",
      "amount": 251999
    },
    "time": 691200,
    "levelRequired": 61,
    "HP": 162037,
    "XP": 16000,
    "AP": 55175,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 190332,
    "XP": 17600,
    "AP": 64806,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "wood",
      "amount": 299904
    },
    "time": 864000,
    "levelRequired": 67,
    "HP": 223569,
    "XP": 19200,
    "AP": 76120,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 277082,
    "XP": 20800,
    "AP": 94332,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "wood",
      "amount": 381696
    },
    "time": 1080000,
    "levelRequired": 79,
    "HP": 343405,
    "XP": 24000,
    "AP": 116906,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 401654,
    "XP": 25600,
    "AP": 136733,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 463488
    },
    "time": 1224000,
    "levelRequired": 91,
    "HP": 443347,
    "XP": 27200,
    "AP": 150923,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 489370,
    "XP": 30400,
    "AP": 166587,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 545280
    },
    "time": 1370990,
    "levelRequired": 100,
    "HP": 540170,
    "XP": 32000,
    "AP": 183875,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 596246,
    "XP": 33600,
    "AP": 202958,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 627072
    },
    "time": 1566720,
    "levelRequired": 112,
    "HP": 658141,
    "XP": 33600,
    "AP": 224025,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 726462,
    "XP": 33600,
    "AP": 247277,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 708864
    },
    "time": 1762560,
    "levelRequired": 124,
    "HP": 801875,
    "XP": 33600,
    "AP": 272940,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 885119,
    "XP": 33600,
    "AP": 301270,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 790656
    },
    "time": 1762560,
    "levelRequired": 136,
    "HP": 977004,
    "XP": 33600,
    "AP": 332542,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1078427,
    "XP": 33600,
    "AP": 367057,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 872448
    },
    "time": 1762560,
    "levelRequired": 145,
    "HP": 1190380,
    "XP": 33600,
    "AP": 405159,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1313954,
    "XP": 33600,
    "AP": 447214,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 954240
    },
    "time": 2290604,
    "levelRequired": 157,
    "HP": 1450357,
    "XP": 35349,
    "AP": 493635,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1600920,
    "XP": 42345,
    "AP": 544874,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1036032
    },
    "time": 3197201,
    "levelRequired": 169,
    "HP": 1767114,
    "XP": 49340,
    "AP": 601431,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 1950560,
    "XP": 56335,
    "AP": 663863,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1117824
    },
    "time": 4103799,
    "levelRequired": 181,
    "HP": 2153050,
    "XP": 63331,
    "AP": 732773,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2376560,
    "XP": 70326,
    "AP": 808840,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1199616
    },
    "time": 4314507,
    "levelRequired": 193,
    "HP": 2623276,
    "XP": 77321,
    "AP": 892801,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 2895603,
    "XP": 84317,
    "AP": 985479,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1281408
    },
    "time": 4602106,
    "levelRequired": 202,
    "HP": 3196202,
    "XP": 91312,
    "AP": 1087779,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3528005,
    "XP": 98307,
    "AP": 1200701,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1342752
    },
    "time": 5000000,
    "levelRequired": 211,
    "HP": 3894256,
    "XP": 101805,
    "AP": 1325346,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4298527,
    "XP": 105303,
    "AP": 1462928,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1383648
    },
    "time": 5000000,
    "levelRequired": 217,
    "HP": 4744767,
    "XP": 106000,
    "AP": 1614794,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5237333,
    "XP": 106000,
    "AP": 1782427,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 1424544
    },
    "time": 5000000,
    "levelRequired": 223,
    "HP": 5781033,
    "XP": 106000,
    "AP": 1967465,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 6381176,
    "XP": 106000,
    "AP": 2171710,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1465440
    },
    "time": 5000000,
    "levelRequired": 229,
    "HP": 7043622,
    "XP": 106000,
    "AP": 2397159,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 7774837,
    "XP": 106000,
    "AP": 2646009,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1506336
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 8581963,
    "XP": 106000,
    "AP": 2920694,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 9472878,
    "XP": 106000,
    "AP": 3223898,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "wood",
      "amount": 1751712
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9952442,
    "XP": 106000,
    "AP": 3387106,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10456283,
    "XP": 106000,
    "AP": 3558576,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1792608
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10985630,
    "XP": 106000,
    "AP": 3738726,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11541775,
    "XP": 106000,
    "AP": 3927997,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1833504
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12126077,
    "XP": 106000,
    "AP": 4126847,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12739958,
    "XP": 106000,
    "AP": 4335767,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1874400
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13384916,
    "XP": 106000,
    "AP": 4555264,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14062526,
    "XP": 106000,
    "AP": 4785873,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1915296
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14774440,
    "XP": 106000,
    "AP": 5028157,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15522394,
    "XP": 106000,
    "AP": 5282704,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1956192
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16308213,
    "XP": 106000,
    "AP": 5550141,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 17133815,
    "XP": 106000,
    "AP": 5831114,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1997088
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18001213,
    "XP": 106000,
    "AP": 6126312,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18912522,
    "XP": 106000,
    "AP": 6436455,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2037984
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 19869968,
    "XP": 106000,
    "AP": 6762298,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 21293401,
    "XP": 106000,
    "AP": 7246728,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2089104
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 23380283,
    "XP": 106000,
    "AP": 7956947,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 25036291,
    "XP": 106000,
    "AP": 8520531,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2130000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 26800048,
    "XP": 106000,
    "AP": 9120784,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 29395176,
    "XP": 106000,
    "AP": 10003972,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 31444818,
    "XP": 106000,
    "AP": 10701518,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 33626651,
    "XP": 106000,
    "AP": 11444052,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 35948805,
    "XP": 106000,
    "AP": 12234341,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 38419897,
    "XP": 106000,
    "AP": 13075315,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 41049054,
    "XP": 106000,
    "AP": 13970083,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 43127160,
    "XP": 106000,
    "AP": 14677315,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 45310470,
    "XP": 106000,
    "AP": 15420352,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 47604312,
    "XP": 106000,
    "AP": 16201003,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 50014279,
    "XP": 106000,
    "AP": 17021174,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 52546250,
    "XP": 106000,
    "AP": 17882869,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 55206403,
    "XP": 106000,
    "AP": 18788185,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 58001226,
    "XP": 106000,
    "AP": 19739333,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 60937537,
    "XP": 106000,
    "AP": 20738633,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 64022498,
    "XP": 106000,
    "AP": 21788521,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 67263636,
    "XP": 106000,
    "AP": 22891562,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 70668857,
    "XP": 106000,
    "AP": 24050444,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 74246466,
    "XP": 106000,
    "AP": 25267996,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 78005191,
    "XP": 106000,
    "AP": 26547186,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 81954202,
    "XP": 106000,
    "AP": 27891134,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 86103131,
    "XP": 106000,
    "AP": 29303120,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 90462100,
    "XP": 106000,
    "AP": 30786587,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 95041742,
    "XP": 106000,
    "AP": 32345155,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 99853229,
    "XP": 106000,
    "AP": 33982627,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 104908297,
    "XP": 106000,
    "AP": 35702993,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 110219278,
    "XP": 106000,
    "AP": 37510454,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 115799126,
    "XP": 106000,
    "AP": 39409418,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 121661456,
    "XP": 106000,
    "AP": 41404519,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 127820567,
    "XP": 106000,
    "AP": 43500618,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 134291482,
    "XP": 106000,
    "AP": 45702834,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 141089986,
    "XP": 106000,
    "AP": 48016536,
    "requiredBuilder": 54
  }],
  "FlakTower": [{
    "material": {
      "type": "elementalEmber",
      "amount": 100
    },
    "time": 60,
    "levelRequired": 1,
    "HP": 8389,
    "XP": 1,
    "AP": 3521,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 208
    },
    "time": 450,
    "levelRequired": 1,
    "HP": 10371,
    "XP": 13,
    "AP": 4887,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 200
    },
    "time": 1920,
    "levelRequired": 1,
    "HP": 12313,
    "XP": 60,
    "AP": 6888,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 3952,
    "levelRequired": 1,
    "HP": 14378,
    "XP": 140,
    "AP": 9361,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 300
    },
    "time": 9094,
    "levelRequired": 1,
    "HP": 17106,
    "XP": 240,
    "AP": 12727,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 14580,
    "levelRequired": 7,
    "HP": 20260,
    "XP": 405,
    "AP": 17251,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 400
    },
    "time": 23040,
    "levelRequired": 7,
    "HP": 23870,
    "XP": 600,
    "AP": 23295,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 28800,
    "levelRequired": 12,
    "HP": 27976,
    "XP": 600,
    "AP": 31335,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 600
    },
    "time": 35100,
    "levelRequired": 12,
    "HP": 32622,
    "XP": 750,
    "AP": 37075,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 41559,
    "levelRequired": 17,
    "HP": 36644,
    "XP": 912,
    "AP": 41642,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 800
    },
    "time": 51896,
    "levelRequired": 17,
    "HP": 40998,
    "XP": 936,
    "AP": 46585,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 66355,
    "levelRequired": 21,
    "HP": 45686,
    "XP": 1280,
    "AP": 51902,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 1000
    },
    "time": 103561,
    "levelRequired": 21,
    "HP": 50858,
    "XP": 1644,
    "AP": 57770,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 137915,
    "levelRequired": 28,
    "HP": 56617,
    "XP": 1691,
    "AP": 64303,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 1200
    },
    "time": 177093,
    "levelRequired": 28,
    "HP": 63030,
    "XP": 2087,
    "AP": 71576,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 219927,
    "levelRequired": 31,
    "HP": 70167,
    "XP": 2546,
    "AP": 79673,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 1400
    },
    "time": 297600,
    "levelRequired": 31,
    "HP": 78114,
    "XP": 3048,
    "AP": 88695,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 345600,
    "levelRequired": 37,
    "HP": 86960,
    "XP": 4000,
    "AP": 98739,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 1600
    },
    "time": 388800,
    "levelRequired": 37,
    "HP": 102145,
    "XP": 5334,
    "AP": 115971,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 119979,
    "XP": 7000,
    "AP": 136206,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 1800
    },
    "time": 518400,
    "levelRequired": 46,
    "HP": 140930,
    "XP": 9143,
    "AP": 159981,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 165538,
    "XP": 12000,
    "AP": 187902,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 2000
    },
    "time": 691200,
    "levelRequired": 56,
    "HP": 194444,
    "XP": 16000,
    "AP": 220700,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 228398,
    "XP": 17600,
    "AP": 259225,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 2200
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 268282,
    "XP": 19200,
    "AP": 304481,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 332498,
    "XP": 20800,
    "AP": 377330,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 2400
    },
    "time": 1080000,
    "levelRequired": 73,
    "HP": 412086,
    "XP": 24000,
    "AP": 467626,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 481984,
    "XP": 25600,
    "AP": 546933,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 2600
    },
    "time": 1224000,
    "levelRequired": 85,
    "HP": 532016,
    "XP": 27200,
    "AP": 603692,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 587244,
    "XP": 30400,
    "AP": 666347,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 2800
    },
    "time": 1370990,
    "levelRequired": 94,
    "HP": 648204,
    "XP": 32000,
    "AP": 735500,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 715495,
    "XP": 33600,
    "AP": 811830,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 3000
    },
    "time": 1566720,
    "levelRequired": 106,
    "HP": 789769,
    "XP": 33600,
    "AP": 896099,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 871754,
    "XP": 33600,
    "AP": 989109,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 3200
    },
    "time": 1762560,
    "levelRequired": 118,
    "HP": 962250,
    "XP": 33600,
    "AP": 1091760,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 1062142,
    "XP": 33600,
    "AP": 1205082,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 3400
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 1172404,
    "XP": 33600,
    "AP": 1330168,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1294112,
    "XP": 33600,
    "AP": 1468228,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 3600
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1428456,
    "XP": 33600,
    "AP": 1620637,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1576744,
    "XP": 33600,
    "AP": 1788855,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 3800
    },
    "time": 2290604,
    "levelRequired": 151,
    "HP": 1740428,
    "XP": 35349,
    "AP": 1974539,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1921104,
    "XP": 42345,
    "AP": 2023902,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 4000
    },
    "time": 3197201,
    "levelRequired": 163,
    "HP": 2120536,
    "XP": 49340,
    "AP": 2074500,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 2340672,
    "XP": 56335,
    "AP": 2126363,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 4200
    },
    "time": 4103799,
    "levelRequired": 175,
    "HP": 2583660,
    "XP": 63331,
    "AP": 2179522,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2851872,
    "XP": 70326,
    "AP": 2234010,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 4400
    },
    "time": 4314507,
    "levelRequired": 187,
    "HP": 3147931,
    "XP": 77321,
    "AP": 2289860,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 3474723,
    "XP": 84317,
    "AP": 2347106,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 4600
    },
    "time": 4602106,
    "levelRequired": 196,
    "HP": 3835442,
    "XP": 91312,
    "AP": 2405784,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 4233606,
    "XP": 98307,
    "AP": 2465929,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 4800
    },
    "time": 5000000,
    "levelRequired": 208,
    "HP": 4673107,
    "XP": 101805,
    "AP": 2604063,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 5158232,
    "XP": 105303,
    "AP": 2742196,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 5000
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 5693720,
    "XP": 106000,
    "AP": 2880330,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 6284799,
    "XP": 106000,
    "AP": 3018463,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 5200
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 6937239,
    "XP": 106000,
    "AP": 3156597,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 7657411,
    "XP": 106000,
    "AP": 3296694,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 5400
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 8452346,
    "XP": 106000,
    "AP": 3638931,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 9329804,
    "XP": 106000,
    "AP": 4016689,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 5600
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 10298355,
    "XP": 106000,
    "AP": 4433667,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 11367453,
    "XP": 106000,
    "AP": 4893935,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 5800
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11942930,
    "XP": 106000,
    "AP": 5141687,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12547539,
    "XP": 106000,
    "AP": 5401983,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 6000
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13182756,
    "XP": 106000,
    "AP": 5675453,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13850130,
    "XP": 106000,
    "AP": 5962770,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 6200
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14551292,
    "XP": 106000,
    "AP": 6264629,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15287949,
    "XP": 106000,
    "AP": 6581773,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 6400
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16061899,
    "XP": 106000,
    "AP": 6914973,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16875031,
    "XP": 106000,
    "AP": 7265042,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 6600
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 17729328,
    "XP": 106000,
    "AP": 7632833,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 18626872,
    "XP": 106000,
    "AP": 8019241,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 6900
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 19569855,
    "XP": 106000,
    "AP": 8425214,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 20560578,
    "XP": 106000,
    "AP": 8851736,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 21601455,
    "XP": 106000,
    "AP": 9299852,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 22695026,
    "XP": 106000,
    "AP": 9770655,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 7500
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 23843961,
    "XP": 106000,
    "AP": 10265290,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 25552080,
    "XP": 106000,
    "AP": 11000664,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 7800
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 28056339,
    "XP": 106000,
    "AP": 12078789,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 30043548,
    "XP": 106000,
    "AP": 12934320,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 8100
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 32160056,
    "XP": 106000,
    "AP": 13845514,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 35274210,
    "XP": 106000,
    "AP": 15186210,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 8400
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 37733781,
    "XP": 106000,
    "AP": 16245097,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 40351980,
    "XP": 106000,
    "AP": 17372278,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 8700
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 43138565,
    "XP": 106000,
    "AP": 18571950,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 46103877,
    "XP": 106000,
    "AP": 19848563,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 9000
    },
    "time": 5000000,
    "levelRequired": 380,
    "HP": 49258865,
    "XP": 106000,
    "AP": 21206839,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 51752592,
    "XP": 106000,
    "AP": 22280429,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 9300
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 54372564,
    "XP": 106000,
    "AP": 23408371,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 57125174,
    "XP": 106000,
    "AP": 24593414,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 9600
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 60017135,
    "XP": 106000,
    "AP": 25838450,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 63055500,
    "XP": 106000,
    "AP": 27146516,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 9900
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 66247684,
    "XP": 106000,
    "AP": 28520803,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 69601471,
    "XP": 106000,
    "AP": 29964664,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 10200
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 73125044,
    "XP": 106000,
    "AP": 31481618,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 76826998,
    "XP": 106000,
    "AP": 33075368,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 10500
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 80716363,
    "XP": 106000,
    "AP": 34749805,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 84802627,
    "XP": 106000,
    "AP": 36509008,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 10800
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 89095759,
    "XP": 106000,
    "AP": 38357273,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 93606229,
    "XP": 106000,
    "AP": 40299107,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 11100
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 98345041,
    "XP": 106000,
    "AP": 42339244,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 103323756,
    "XP": 106000,
    "AP": 44482664,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 11400
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 108554519,
    "XP": 106000,
    "AP": 46734593,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 114050090,
    "XP": 106000,
    "AP": 49100528,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 11700
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 119823874,
    "XP": 106000,
    "AP": 51586240,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 125889956,
    "XP": 106000,
    "AP": 54197786,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 12000
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 132263132,
    "XP": 106000,
    "AP": 56941546,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 138958951,
    "XP": 106000,
    "AP": 59824206,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 12300
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 145993747,
    "XP": 106000,
    "AP": 62852806,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 153384679,
    "XP": 106000,
    "AP": 66034722,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "elementalEmber",
      "amount": 12600
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 161149777,
    "XP": 106000,
    "AP": 69377725,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 169307982,
    "XP": 106000,
    "AP": 72889967,
    "requiredBuilder": 54
  }],
  "Storage": [{
    "material": {
      "type": "wood",
      "amount": 67
    },
    "time": 6048,
    "levelRequired": 0,
    "HP": 100,
    "XP": 33,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 750
    },
    "time": 25920,
    "levelRequired": 7,
    "HP": 100,
    "XP": 36,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1584
    },
    "time": 32400,
    "levelRequired": 12,
    "HP": 100,
    "XP": 45,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 3360
    },
    "time": 55296,
    "levelRequired": 17,
    "HP": 100,
    "XP": 76,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 9216
    },
    "time": 73014,
    "levelRequired": 21,
    "HP": 100,
    "XP": 101,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 17280
    },
    "time": 108322,
    "levelRequired": 25,
    "HP": 100,
    "XP": 150,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 30996
    },
    "time": 129600,
    "levelRequired": 28,
    "HP": 100,
    "XP": 180,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 41904
    },
    "time": 169967,
    "levelRequired": 31,
    "HP": 100,
    "XP": 236,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 60480
    },
    "time": 222171,
    "levelRequired": 34,
    "HP": 100,
    "XP": 308,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 73440
    },
    "time": 290304,
    "levelRequired": 37,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 377018,
    "levelRequired": 40,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 105840
    },
    "time": 414720,
    "levelRequired": 42,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 118800
    },
    "time": 518399,
    "levelRequired": 44,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 131760
    },
    "time": 647999,
    "levelRequired": 46,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 144720
    },
    "time": 691199,
    "levelRequired": 48,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 157680
    },
    "time": 760319,
    "levelRequired": 50,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 170640
    },
    "time": 829439,
    "levelRequired": 52,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 183600
    },
    "time": 829439,
    "levelRequired": 54,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 196560
    },
    "time": 898559,
    "levelRequired": 56,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 209520
    },
    "time": 967679,
    "levelRequired": 58,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 222480
    },
    "time": 1036800,
    "levelRequired": 61,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 241920
    },
    "time": 1105920,
    "levelRequired": 64,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 261360
    },
    "time": 1175040,
    "levelRequired": 67,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 280800
    },
    "time": 1175040,
    "levelRequired": 70,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 300240
    },
    "time": 1175040,
    "levelRequired": 73,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 319680
    },
    "time": 1175040,
    "levelRequired": 76,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 339120
    },
    "time": 1175040,
    "levelRequired": 79,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 358560
    },
    "time": 1175040,
    "levelRequired": 82,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 378000
    },
    "time": 1175040,
    "levelRequired": 85,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 397440
    },
    "time": 1175040,
    "levelRequired": 88,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 416880
    },
    "time": 1175040,
    "levelRequired": 91,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 436320
    },
    "time": 1175040,
    "levelRequired": 94,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 455760
    },
    "time": 1175040,
    "levelRequired": 97,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 475200
    },
    "time": 1175040,
    "levelRequired": 100,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 494640
    },
    "time": 1175040,
    "levelRequired": 103,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 514080
    },
    "time": 1175040,
    "levelRequired": 106,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 533520
    },
    "time": 1175040,
    "levelRequired": 109,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 552960
    },
    "time": 1175040,
    "levelRequired": 112,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 572400
    },
    "time": 1175040,
    "levelRequired": 115,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 591840
    },
    "time": 1175040,
    "levelRequired": 118,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 611280
    },
    "time": 1175040,
    "levelRequired": 121,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 630720
    },
    "time": 1175040,
    "levelRequired": 124,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 650160
    },
    "time": 1175040,
    "levelRequired": 127,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 669600
    },
    "time": 1175040,
    "levelRequired": 130,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 689040
    },
    "time": 1175040,
    "levelRequired": 133,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 708480
    },
    "time": 1175040,
    "levelRequired": 136,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 727920
    },
    "time": 1175040,
    "levelRequired": 139,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 747360
    },
    "time": 1175040,
    "levelRequired": 142,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 766800
    },
    "time": 1175040,
    "levelRequired": 145,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 786240
    },
    "time": 1175040,
    "levelRequired": 148,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 805680
    },
    "time": 1175040,
    "levelRequired": 151,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 825120
    },
    "time": 1175040,
    "levelRequired": 154,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 844560
    },
    "time": 1175040,
    "levelRequired": 157,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 864000
    },
    "time": 3642463,
    "levelRequired": 160,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 883440
    },
    "time": 3642463,
    "levelRequired": 163,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 902880
    },
    "time": 3642463,
    "levelRequired": 166,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 922320
    },
    "time": 3642463,
    "levelRequired": 169,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 941760
    },
    "time": 3642463,
    "levelRequired": 172,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 961200
    },
    "time": 3642463,
    "levelRequired": 175,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 980640
    },
    "time": 3642463,
    "levelRequired": 178,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1000080
    },
    "time": 3642463,
    "levelRequired": 181,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1019520
    },
    "time": 3642463,
    "levelRequired": 184,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1038960
    },
    "time": 3642463,
    "levelRequired": 187,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1058400
    },
    "time": 3642463,
    "levelRequired": 190,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1077840
    },
    "time": 3642463,
    "levelRequired": 193,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1097280
    },
    "time": 3642463,
    "levelRequired": 196,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1116720
    },
    "time": 3642463,
    "levelRequired": 199,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1136160
    },
    "time": 3642463,
    "levelRequired": 202,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1155600
    },
    "time": 3642463,
    "levelRequired": 205,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1175040
    },
    "time": 3642463,
    "levelRequired": 208,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1194480
    },
    "time": 3642463,
    "levelRequired": 211,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1213920
    },
    "time": 3642463,
    "levelRequired": 214,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1233360
    },
    "time": 3642463,
    "levelRequired": 217,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1252800
    },
    "time": 3642463,
    "levelRequired": 220,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1272240
    },
    "time": 3642463,
    "levelRequired": 223,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1291680
    },
    "time": 3642463,
    "levelRequired": 226,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1311120
    },
    "time": 3642463,
    "levelRequired": 229,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1330560
    },
    "time": 3642463,
    "levelRequired": 232,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1350000
    },
    "time": 3642463,
    "levelRequired": 239,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1395360
    },
    "time": 3642463,
    "levelRequired": 246,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1440720
    },
    "time": 3642463,
    "levelRequired": 253,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1486080
    },
    "time": 3642463,
    "levelRequired": 260,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1531440
    },
    "time": 3642463,
    "levelRequired": 267,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1576800
    },
    "time": 3642463,
    "levelRequired": 274,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1622160
    },
    "time": 3642463,
    "levelRequired": 281,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1667520
    },
    "time": 3642463,
    "levelRequired": 288,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1712880
    },
    "time": 3642463,
    "levelRequired": 296,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1764720
    },
    "time": 3642463,
    "levelRequired": 310,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1816560
    },
    "time": 3642463,
    "levelRequired": 325,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1868400
    },
    "time": 3642463,
    "levelRequired": 340,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1920240
    },
    "time": 3642463,
    "levelRequired": 355,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1972080
    },
    "time": 3642463,
    "levelRequired": 370,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2023920
    },
    "time": 3642463,
    "levelRequired": 380,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2075760
    },
    "time": 3642463,
    "levelRequired": 390,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2127600
    },
    "time": 3642463,
    "levelRequired": 400,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2179440
    },
    "time": 3642463,
    "levelRequired": 410,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2231280
    },
    "time": 3642463,
    "levelRequired": 418,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2283120
    },
    "time": 3642463,
    "levelRequired": 426,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2334960
    },
    "time": 3642463,
    "levelRequired": 434,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2386800
    },
    "time": 3642463,
    "levelRequired": 442,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }],
  "Incubator": [{
    "material": {
      "type": "wood",
      "amount": 3
    },
    "time": 2,
    "levelRequired": 0,
    "HP": 100,
    "XP": 1,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1980
    },
    "time": 43200,
    "levelRequired": 7,
    "HP": 100,
    "XP": 60,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 10368
    },
    "time": 92160,
    "levelRequired": 14,
    "HP": 100,
    "XP": 128,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 41904
    },
    "time": 219429,
    "levelRequired": 28,
    "HP": 100,
    "XP": 305,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 105840
    },
    "time": 628364,
    "levelRequired": 40,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 231168
    },
    "time": 1728000,
    "levelRequired": 63,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 305472
    },
    "time": 1958400,
    "levelRequired": 90,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 305472
    },
    "time": 1958400,
    "levelRequired": 108,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 305472
    },
    "time": 1958400,
    "levelRequired": 108,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 305472
    },
    "time": 1958400,
    "levelRequired": 130,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 862752
    },
    "time": 4559777,
    "levelRequired": 182,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1636752
    },
    "time": 5000000,
    "levelRequired": 280,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1933968
    },
    "time": 5000000,
    "levelRequired": 360,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2280720
    },
    "time": 5000000,
    "levelRequired": 400,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2577936
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2330256
    },
    "time": 5000000,
    "levelRequired": 468,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2330256
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }],
  "IceTurret": [{
    "material": {
      "type": "iceShard",
      "amount": 100
    },
    "time": 990,
    "levelRequired": 0,
    "HP": 6991,
    "XP": 28,
    "AP": 88,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 145
    },
    "time": 3510,
    "levelRequired": 1,
    "HP": 8643,
    "XP": 98,
    "AP": 122,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "iceShard",
      "amount": 200
    },
    "time": 7200,
    "levelRequired": 1,
    "HP": 10261,
    "XP": 225,
    "AP": 172,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 10800,
    "levelRequired": 1,
    "HP": 11982,
    "XP": 383,
    "AP": 234,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "iceShard",
      "amount": 300
    },
    "time": 16200,
    "levelRequired": 1,
    "HP": 14255,
    "XP": 428,
    "AP": 318,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 21600,
    "levelRequired": 7,
    "HP": 16884,
    "XP": 600,
    "AP": 431,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "iceShard",
      "amount": 400
    },
    "time": 28800,
    "levelRequired": 7,
    "HP": 19892,
    "XP": 750,
    "AP": 582,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 36000,
    "levelRequired": 12,
    "HP": 23314,
    "XP": 750,
    "AP": 783,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "iceShard",
      "amount": 500
    },
    "time": 43200,
    "levelRequired": 12,
    "HP": 27185,
    "XP": 924,
    "AP": 927,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 57600,
    "levelRequired": 17,
    "HP": 30537,
    "XP": 1264,
    "AP": 1041,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "iceShard",
      "amount": 600
    },
    "time": 72000,
    "levelRequired": 17,
    "HP": 34165,
    "XP": 1298,
    "AP": 1165,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 86400,
    "levelRequired": 21,
    "HP": 38072,
    "XP": 1667,
    "AP": 1298,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "iceShard",
      "amount": 700
    },
    "time": 129600,
    "levelRequired": 21,
    "HP": 42382,
    "XP": 2058,
    "AP": 1444,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 172800,
    "levelRequired": 28,
    "HP": 47181,
    "XP": 2118,
    "AP": 1608,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "iceShard",
      "amount": 800
    },
    "time": 216000,
    "levelRequired": 28,
    "HP": 52525,
    "XP": 2546,
    "AP": 1789,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 259200,
    "levelRequired": 31,
    "HP": 58473,
    "XP": 3000,
    "AP": 1992,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "iceShard",
      "amount": 900
    },
    "time": 302400,
    "levelRequired": 31,
    "HP": 65095,
    "XP": 3097,
    "AP": 2217,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 345600,
    "levelRequired": 37,
    "HP": 72467,
    "XP": 4000,
    "AP": 2468,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "iceShard",
      "amount": 1000
    },
    "time": 388800,
    "levelRequired": 37,
    "HP": 85121,
    "XP": 5334,
    "AP": 2899,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 99983,
    "XP": 7000,
    "AP": 3405,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "iceShard",
      "amount": 1100
    },
    "time": 518400,
    "levelRequired": 46,
    "HP": 117442,
    "XP": 9143,
    "AP": 4000,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 137949,
    "XP": 12000,
    "AP": 4698,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "iceShard",
      "amount": 1200
    },
    "time": 691200,
    "levelRequired": 56,
    "HP": 162037,
    "XP": 16000,
    "AP": 5517,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 190332,
    "XP": 17600,
    "AP": 6481,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "iceShard",
      "amount": 1300
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 223569,
    "XP": 19200,
    "AP": 7612,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 277082,
    "XP": 20800,
    "AP": 9433,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "iceShard",
      "amount": 1400
    },
    "time": 1080000,
    "levelRequired": 73,
    "HP": 343405,
    "XP": 24000,
    "AP": 11691,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 401654,
    "XP": 25600,
    "AP": 13673,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "iceShard",
      "amount": 1500
    },
    "time": 1224000,
    "levelRequired": 85,
    "HP": 443347,
    "XP": 27200,
    "AP": 15092,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 489370,
    "XP": 30400,
    "AP": 16659,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "iceShard",
      "amount": 1600
    },
    "time": 1370990,
    "levelRequired": 94,
    "HP": 540170,
    "XP": 32000,
    "AP": 18387,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 596246,
    "XP": 33600,
    "AP": 20296,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "iceShard",
      "amount": 1700
    },
    "time": 1566720,
    "levelRequired": 106,
    "HP": 658141,
    "XP": 33600,
    "AP": 22402,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 726462,
    "XP": 33600,
    "AP": 24728,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "iceShard",
      "amount": 1800
    },
    "time": 1762560,
    "levelRequired": 118,
    "HP": 801875,
    "XP": 33600,
    "AP": 27294,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 885119,
    "XP": 33600,
    "AP": 30127,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "iceShard",
      "amount": 1900
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 977004,
    "XP": 33600,
    "AP": 33254,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1078427,
    "XP": 33600,
    "AP": 36706,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "iceShard",
      "amount": 2000
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1190380,
    "XP": 33600,
    "AP": 40516,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1313954,
    "XP": 33600,
    "AP": 44721,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "iceShard",
      "amount": 2100
    },
    "time": 2290604,
    "levelRequired": 151,
    "HP": 1450357,
    "XP": 35349,
    "AP": 49363,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1600920,
    "XP": 42345,
    "AP": 54487,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "iceShard",
      "amount": 2200
    },
    "time": 3197201,
    "levelRequired": 163,
    "HP": 1767114,
    "XP": 49340,
    "AP": 60143,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 1950560,
    "XP": 56335,
    "AP": 66386,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "iceShard",
      "amount": 2300
    },
    "time": 4103799,
    "levelRequired": 175,
    "HP": 2153050,
    "XP": 63331,
    "AP": 73277,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2376560,
    "XP": 70326,
    "AP": 80884,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "iceShard",
      "amount": 2400
    },
    "time": 4314507,
    "levelRequired": 187,
    "HP": 2623276,
    "XP": 77321,
    "AP": 89280,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 2895603,
    "XP": 84317,
    "AP": 98548,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "iceShard",
      "amount": 2500
    },
    "time": 4602106,
    "levelRequired": 196,
    "HP": 3196202,
    "XP": 91312,
    "AP": 108778,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3528005,
    "XP": 98307,
    "AP": 120070,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "iceShard",
      "amount": 2600
    },
    "time": 5000000,
    "levelRequired": 208,
    "HP": 3894256,
    "XP": 101805,
    "AP": 135405,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4298527,
    "XP": 105303,
    "AP": 150740,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "iceShard",
      "amount": 2700
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4744767,
    "XP": 106000,
    "AP": 166076,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5237333,
    "XP": 106000,
    "AP": 181411,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "iceShard",
      "amount": 2800
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5781033,
    "XP": 106000,
    "AP": 196746,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 6381176,
    "XP": 106000,
    "AP": 214453,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "iceShard",
      "amount": 2900
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 7043622,
    "XP": 106000,
    "AP": 233754,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 7774837,
    "XP": 106000,
    "AP": 254792,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "iceShard",
      "amount": 3000
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 8581963,
    "XP": 106000,
    "AP": 277723,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 9472878,
    "XP": 106000,
    "AP": 305495,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "iceShard",
      "amount": 3500
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9952442,
    "XP": 106000,
    "AP": 321775,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10456283,
    "XP": 106000,
    "AP": 338065,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "iceShard",
      "amount": 4000
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10985630,
    "XP": 106000,
    "AP": 355179,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11541775,
    "XP": 106000,
    "AP": 373160,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "iceShard",
      "amount": 4500
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12126077,
    "XP": 106000,
    "AP": 392051,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12739958,
    "XP": 106000,
    "AP": 411898,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "iceShard",
      "amount": 5000
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13384916,
    "XP": 106000,
    "AP": 432750,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14062526,
    "XP": 106000,
    "AP": 454658,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "iceShard",
      "amount": 5500
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14774440,
    "XP": 106000,
    "AP": 477675,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15522394,
    "XP": 106000,
    "AP": 501857,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "iceShard",
      "amount": 6000
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16308213,
    "XP": 106000,
    "AP": 527263,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 17133815,
    "XP": 106000,
    "AP": 553955,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "iceShard",
      "amount": 7000
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18001213,
    "XP": 106000,
    "AP": 581999,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18912522,
    "XP": 106000,
    "AP": 611464,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "iceShard",
      "amount": 8000
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 19869968,
    "XP": 106000,
    "AP": 642419,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 21293401,
    "XP": 106000,
    "AP": 688440,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "iceShard",
      "amount": 10000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 23380283,
    "XP": 106000,
    "AP": 755910,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 25036291,
    "XP": 106000,
    "AP": 809451,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "iceShard",
      "amount": 12000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 26800048,
    "XP": 106000,
    "AP": 866474,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 29395176,
    "XP": 106000,
    "AP": 950377,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "iceShard",
      "amount": 14000
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 31444818,
    "XP": 106000,
    "AP": 1016645,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 33626651,
    "XP": 106000,
    "AP": 1087185,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "iceShard",
      "amount": 17000
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 35948805,
    "XP": 106000,
    "AP": 1162263,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 38419897,
    "XP": 106000,
    "AP": 1242155,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 41049054,
    "XP": 106000,
    "AP": 1327158,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 43127160,
    "XP": 106000,
    "AP": 1394345,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 45310470,
    "XP": 106000,
    "AP": 1464933,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 47604312,
    "XP": 106000,
    "AP": 1539096,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 50014279,
    "XP": 106000,
    "AP": 1617011,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 52546250,
    "XP": 106000,
    "AP": 1698872,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 55206403,
    "XP": 106000,
    "AP": 1784877,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 58001226,
    "XP": 106000,
    "AP": 1875236,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 60937537,
    "XP": 106000,
    "AP": 1970170,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 64022498,
    "XP": 106000,
    "AP": 2069909,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 67263636,
    "XP": 106000,
    "AP": 2174698,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 70668857,
    "XP": 106000,
    "AP": 2284793,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 74246466,
    "XP": 106000,
    "AP": 2400459,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 78005191,
    "XP": 106000,
    "AP": 2521982,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 81954202,
    "XP": 106000,
    "AP": 2649658,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 86103131,
    "XP": 106000,
    "AP": 2783797,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 90462100,
    "XP": 106000,
    "AP": 2924726,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 95041742,
    "XP": 106000,
    "AP": 3072790,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 99853229,
    "XP": 106000,
    "AP": 3228350,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 104908297,
    "XP": 106000,
    "AP": 3391784,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 110219278,
    "XP": 106000,
    "AP": 3563493,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 115799126,
    "XP": 106000,
    "AP": 3743895,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "iceShard",
      "amount": 20500
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 121661456,
    "XP": 106000,
    "AP": 3933430,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 127820567,
    "XP": 106000,
    "AP": 4132558,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "iceShard",
      "amount": 21000
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 134291482,
    "XP": 106000,
    "AP": 4341769,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 141089986,
    "XP": 106000,
    "AP": 4561571,
    "requiredBuilder": 54
  }],
  "Breeding": [{
    "material": {
      "type": "wood",
      "amount": 1
    },
    "time": 2,
    "levelRequired": 0,
    "HP": 100,
    "XP": 1,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 3
    },
    "time": 2,
    "levelRequired": 0,
    "HP": 100,
    "XP": 1,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1848
    },
    "time": 43200,
    "levelRequired": 5,
    "HP": 100,
    "XP": 60,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 9792
    },
    "time": 92160,
    "levelRequired": 14,
    "HP": 100,
    "XP": 128,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 41904
    },
    "time": 219429,
    "levelRequired": 28,
    "HP": 100,
    "XP": 305,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 105840
    },
    "time": 628364,
    "levelRequired": 40,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 231168
    },
    "time": 1728000,
    "levelRequired": 63,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 305472
    },
    "time": 1958400,
    "levelRequired": 90,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 305472
    },
    "time": 1958400,
    "levelRequired": 108,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 305472
    },
    "time": 1958400,
    "levelRequired": 108,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 305472
    },
    "time": 2671033,
    "levelRequired": 130,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 974208
    },
    "time": 5000000,
    "levelRequired": 182,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1636752
    },
    "time": 5000000,
    "levelRequired": 280,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1933968
    },
    "time": 5000000,
    "levelRequired": 360,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2280720
    },
    "time": 5000000,
    "levelRequired": 400,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2577936
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2330256
    },
    "time": 5000000,
    "levelRequired": 468,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2330256
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }],
  "Den": [{
    "material": {
      "type": "wood",
      "amount": 3
    },
    "time": 3,
    "levelRequired": 0,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 720
    },
    "time": 3,
    "levelRequired": 2,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1716
    },
    "time": 3,
    "levelRequired": 4,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 3888
    },
    "time": 3,
    "levelRequired": 7,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 8112
    },
    "time": 3,
    "levelRequired": 10,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 17136
    },
    "time": 3,
    "levelRequired": 13,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 27405
    },
    "time": 3,
    "levelRequired": 17,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 39168
    },
    "time": 3,
    "levelRequired": 21,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 57600
    },
    "time": 3,
    "levelRequired": 25,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 69120
    },
    "time": 3,
    "levelRequired": 31,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 76800
    },
    "time": 3,
    "levelRequired": 37,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 88320
    },
    "time": 3,
    "levelRequired": 43,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 99840
    },
    "time": 3,
    "levelRequired": 49,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 111360
    },
    "time": 3,
    "levelRequired": 56,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 122880
    },
    "time": 3,
    "levelRequired": 63,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 134400
    },
    "time": 3,
    "levelRequired": 70,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 145920
    },
    "time": 3,
    "levelRequired": 77,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 157440
    },
    "time": 3,
    "levelRequired": 84,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 174720
    },
    "time": 3,
    "levelRequired": 90,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 192000
    },
    "time": 3,
    "levelRequired": 96,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 209280
    },
    "time": 3,
    "levelRequired": 102,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 226560
    },
    "time": 3,
    "levelRequired": 108,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 243840
    },
    "time": 3,
    "levelRequired": 114,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 261120
    },
    "time": 3,
    "levelRequired": 120,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 278400
    },
    "time": 3,
    "levelRequired": 126,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 295680
    },
    "time": 3,
    "levelRequired": 132,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 410880
    },
    "time": 3,
    "levelRequired": 137,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 428160
    },
    "time": 3,
    "levelRequired": 142,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 445440
    },
    "time": 3,
    "levelRequired": 146,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 462720
    },
    "time": 3,
    "levelRequired": 150,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 480000
    },
    "time": 3,
    "levelRequired": 154,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 497280
    },
    "time": 3,
    "levelRequired": 158,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 514560
    },
    "time": 3,
    "levelRequired": 162,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 531840
    },
    "time": 3,
    "levelRequired": 166,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 549120
    },
    "time": 3,
    "levelRequired": 170,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 566400
    },
    "time": 3,
    "levelRequired": 174,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 583680
    },
    "time": 3,
    "levelRequired": 178,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 600960
    },
    "time": 3,
    "levelRequired": 182,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 618240
    },
    "time": 3,
    "levelRequired": 186,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 635520
    },
    "time": 3,
    "levelRequired": 190,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 734400
    },
    "time": 3,
    "levelRequired": 196,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 753840
    },
    "time": 3,
    "levelRequired": 202,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 773280
    },
    "time": 3,
    "levelRequired": 208,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 792720
    },
    "time": 3,
    "levelRequired": 214,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 812160
    },
    "time": 3,
    "levelRequired": 220,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 831600
    },
    "time": 3,
    "levelRequired": 226,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 851040
    },
    "time": 3,
    "levelRequired": 232,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 870480
    },
    "time": 3,
    "levelRequired": 235,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 889920
    },
    "time": 3,
    "levelRequired": 238,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 909360
    },
    "time": 3,
    "levelRequired": 241,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 928800
    },
    "time": 3,
    "levelRequired": 244,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 948240
    },
    "time": 3,
    "levelRequired": 247,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 967680
    },
    "time": 3,
    "levelRequired": 250,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 987120
    },
    "time": 3,
    "levelRequired": 253,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1006560
    },
    "time": 3,
    "levelRequired": 256,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1026000
    },
    "time": 3,
    "levelRequired": 259,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1045440
    },
    "time": 3,
    "levelRequired": 262,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1064880
    },
    "time": 3,
    "levelRequired": 265,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1084320
    },
    "time": 3,
    "levelRequired": 268,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1103760
    },
    "time": 3,
    "levelRequired": 271,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1185120
    },
    "time": 3,
    "levelRequired": 273,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1307280
    },
    "time": 3,
    "levelRequired": 275,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1433040
    },
    "time": 3,
    "levelRequired": 280,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1443120
    },
    "time": 3,
    "levelRequired": 285,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1453200
    },
    "time": 3,
    "levelRequired": 290,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1463280
    },
    "time": 3,
    "levelRequired": 295,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1473360
    },
    "time": 3,
    "levelRequired": 300,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1483440
    },
    "time": 3,
    "levelRequired": 305,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1493520
    },
    "time": 3,
    "levelRequired": 310,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1503600
    },
    "time": 3,
    "levelRequired": 314,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1513680
    },
    "time": 3,
    "levelRequired": 318,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1523760
    },
    "time": 3,
    "levelRequired": 322,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1538880
    },
    "time": 3,
    "levelRequired": 327,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1554000
    },
    "time": 3,
    "levelRequired": 331,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1569120
    },
    "time": 3,
    "levelRequired": 335,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1584240
    },
    "time": 3,
    "levelRequired": 339,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1599360
    },
    "time": 3,
    "levelRequired": 343,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1614480
    },
    "time": 3,
    "levelRequired": 347,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1629600
    },
    "time": 3,
    "levelRequired": 351,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1644720
    },
    "time": 3,
    "levelRequired": 355,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1649760
    },
    "time": 3,
    "levelRequired": 361,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1654800
    },
    "time": 3,
    "levelRequired": 367,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1659840
    },
    "time": 3,
    "levelRequired": 373,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1664880
    },
    "time": 3,
    "levelRequired": 379,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1674960
    },
    "time": 3,
    "levelRequired": 385,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1690080
    },
    "time": 3,
    "levelRequired": 387,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1695120
    },
    "time": 3,
    "levelRequired": 389,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1705200
    },
    "time": 3,
    "levelRequired": 391,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1715280
    },
    "time": 3,
    "levelRequired": 393,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1795920
    },
    "time": 3,
    "levelRequired": 395,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1806000
    },
    "time": 3,
    "levelRequired": 400,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1816080
    },
    "time": 3,
    "levelRequired": 405,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1826160
    },
    "time": 3,
    "levelRequired": 410,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1836240
    },
    "time": 3,
    "levelRequired": 414,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1846320
    },
    "time": 3,
    "levelRequired": 418,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2068080
    },
    "time": 3,
    "levelRequired": 421,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2078160
    },
    "time": 3,
    "levelRequired": 424,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2098320
    },
    "time": 3,
    "levelRequired": 426,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2118480
    },
    "time": 3,
    "levelRequired": 428,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2138640
    },
    "time": 3,
    "levelRequired": 430,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2158800
    },
    "time": 3,
    "levelRequired": 436,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2178960
    },
    "time": 3,
    "levelRequired": 442,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2199120
    },
    "time": 3,
    "levelRequired": 447,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2219280
    },
    "time": 3,
    "levelRequired": 452,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2239440
    },
    "time": 3,
    "levelRequired": 457,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 459,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 461,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 463,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 465,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 467,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 469,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 471,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 473,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 475,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 477,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 478,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 482,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 486,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 490,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 494,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 494,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 495,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 495,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 496,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2340240
    },
    "time": 3,
    "levelRequired": 497,
    "HP": 100,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }],
  "Sheep": [{
    "material": {
      "type": "wood",
      "amount": 28
    },
    "time": 60,
    "levelRequired": 1,
    "HP": 6482,
    "XP": 2,
    "AP": 0,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 144
    },
    "time": 60,
    "levelRequired": 1,
    "HP": 8986,
    "XP": 2,
    "AP": 0,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 966
    },
    "time": 300,
    "levelRequired": 1,
    "HP": 14919,
    "XP": 9,
    "AP": 0,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 2304
    },
    "time": 2100,
    "levelRequired": 7,
    "HP": 21620,
    "XP": 16,
    "AP": 0,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 5376
    },
    "time": 10500,
    "levelRequired": 17,
    "HP": 27062,
    "XP": 24,
    "AP": 0,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 8295
    },
    "time": 18900,
    "levelRequired": 17,
    "HP": 33538,
    "XP": 26,
    "AP": 0,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 12365
    },
    "time": 24000,
    "levelRequired": 21,
    "HP": 41564,
    "XP": 34,
    "AP": 0,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 21504
    },
    "time": 30052,
    "levelRequired": 25,
    "HP": 51511,
    "XP": 42,
    "AP": 0,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 26112
    },
    "time": 48137,
    "levelRequired": 25,
    "HP": 60506,
    "XP": 67,
    "AP": 0,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 30720
    },
    "time": 47265,
    "levelRequired": 25,
    "HP": 71070,
    "XP": 66,
    "AP": 0,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "wood",
      "amount": 35328
    },
    "time": 58320,
    "levelRequired": 28,
    "HP": 79120,
    "XP": 81,
    "AP": 0,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 39936
    },
    "time": 56347,
    "levelRequired": 28,
    "HP": 88081,
    "XP": 79,
    "AP": 0,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "wood",
      "amount": 44544
    },
    "time": 54830,
    "levelRequired": 28,
    "HP": 98057,
    "XP": 77,
    "AP": 0,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 49152
    },
    "time": 53627,
    "levelRequired": 31,
    "HP": 109163,
    "XP": 75,
    "AP": 0,
    "requiredBuilder": 12
  }, {
    "material": {
      "type": "wood",
      "amount": 53760
    },
    "time": 52650,
    "levelRequired": 31,
    "HP": 121527,
    "XP": 74,
    "AP": 0,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "wood",
      "amount": 58368
    },
    "time": 51840,
    "levelRequired": 31,
    "HP": 135293,
    "XP": 72,
    "AP": 0,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 62976
    },
    "time": 51157,
    "levelRequired": 31,
    "HP": 150616,
    "XP": 72,
    "AP": 0,
    "requiredBuilder": 15
  }, {
    "material": {
      "type": "wood",
      "amount": 67584
    },
    "time": 50575,
    "levelRequired": 34,
    "HP": 167676,
    "XP": 71,
    "AP": 0,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "wood",
      "amount": 72192
    },
    "time": 50072,
    "levelRequired": 34,
    "HP": 186669,
    "XP": 70,
    "AP": 0,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 79104
    },
    "time": 74451,
    "levelRequired": 34,
    "HP": 219265,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 18
  }, {
    "material": {
      "type": "wood",
      "amount": 86016
    },
    "time": 71720,
    "levelRequired": 37,
    "HP": 257553,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "wood",
      "amount": 92928
    },
    "time": 69428,
    "levelRequired": 37,
    "HP": 293894,
    "XP": 97,
    "AP": 0,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 99840
    },
    "time": 67477,
    "levelRequired": 40,
    "HP": 316490,
    "XP": 94,
    "AP": 0,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 109056
    },
    "time": 87729,
    "levelRequired": 40,
    "HP": 349343,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 118272
    },
    "time": 83966,
    "levelRequired": 42,
    "HP": 385607,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 127488
    },
    "time": 80789,
    "levelRequired": 42,
    "HP": 425637,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 136704
    },
    "time": 78072,
    "levelRequired": 44,
    "HP": 469822,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 145920
    },
    "time": 75721,
    "levelRequired": 44,
    "HP": 518593,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 148224
    },
    "time": 73561,
    "levelRequired": 46,
    "HP": 572428,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 150528
    },
    "time": 71401,
    "levelRequired": 46,
    "HP": 631852,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 152832
    },
    "time": 69241,
    "levelRequired": 46,
    "HP": 697446,
    "XP": 97,
    "AP": 0,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 155136
    },
    "time": 67081,
    "levelRequired": 46,
    "HP": 769848,
    "XP": 94,
    "AP": 0,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 192000
    },
    "time": 64921,
    "levelRequired": 52,
    "HP": 849766,
    "XP": 91,
    "AP": 0,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 201216
    },
    "time": 62761,
    "levelRequired": 52,
    "HP": 937980,
    "XP": 88,
    "AP": 0,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 210432
    },
    "time": 60601,
    "levelRequired": 54,
    "HP": 1035354,
    "XP": 85,
    "AP": 0,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 260832
    },
    "time": 64327,
    "levelRequired": 61,
    "HP": 1245670,
    "XP": 90,
    "AP": 0,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 271776
    },
    "time": 63440,
    "levelRequired": 64,
    "HP": 1455985,
    "XP": 89,
    "AP": 0,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 282720
    },
    "time": 62625,
    "levelRequired": 64,
    "HP": 1666301,
    "XP": 87,
    "AP": 0,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 293664
    },
    "time": 61873,
    "levelRequired": 67,
    "HP": 1876617,
    "XP": 86,
    "AP": 0,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 336672
    },
    "time": 61177,
    "levelRequired": 73,
    "HP": 2086933,
    "XP": 85,
    "AP": 0,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 348768
    },
    "time": 60531,
    "levelRequired": 73,
    "HP": 2297248,
    "XP": 85,
    "AP": 0,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 360864
    },
    "time": 59930,
    "levelRequired": 76,
    "HP": 2548107,
    "XP": 84,
    "AP": 0,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 379008
    },
    "time": 89054,
    "levelRequired": 79,
    "HP": 2798965,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 472800
    },
    "time": 86859,
    "levelRequired": 91,
    "HP": 3104612,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 494400
    },
    "time": 84864,
    "levelRequired": 94,
    "HP": 3410259,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 516000
    },
    "time": 83044,
    "levelRequired": 97,
    "HP": 3782661,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 537600
    },
    "time": 81376,
    "levelRequired": 100,
    "HP": 4155063,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 559200
    },
    "time": 79842,
    "levelRequired": 103,
    "HP": 4871574,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 580800
    },
    "time": 78427,
    "levelRequired": 106,
    "HP": 5588085,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 602400
    },
    "time": 77117,
    "levelRequired": 109,
    "HP": 5878141,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 624000
    },
    "time": 77000,
    "levelRequired": 112,
    "HP": 6168197,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 645600
    },
    "time": 77000,
    "levelRequired": 115,
    "HP": 6328281,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 667200
    },
    "time": 77000,
    "levelRequired": 118,
    "HP": 6488365,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 688800
    },
    "time": 77000,
    "levelRequired": 121,
    "HP": 6648449,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 710400
    },
    "time": 77000,
    "levelRequired": 124,
    "HP": 6808533,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 732000
    },
    "time": 77000,
    "levelRequired": 127,
    "HP": 6985235,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 753600
    },
    "time": 77000,
    "levelRequired": 130,
    "HP": 7161938,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 775200
    },
    "time": 77000,
    "levelRequired": 133,
    "HP": 7338640,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 796800
    },
    "time": 77000,
    "levelRequired": 136,
    "HP": 7515343,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 818400
    },
    "time": 77000,
    "levelRequired": 139,
    "HP": 7740803,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 840000
    },
    "time": 77000,
    "levelRequired": 142,
    "HP": 8957197,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 861600
    },
    "time": 77000,
    "levelRequired": 145,
    "HP": 10456283,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 883200
    },
    "time": 77000,
    "levelRequired": 148,
    "HP": 12084193,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 904800
    },
    "time": 77000,
    "levelRequired": 151,
    "HP": 13850130,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 926400
    },
    "time": 77000,
    "levelRequired": 154,
    "HP": 15763900,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 948000
    },
    "time": 77000,
    "levelRequired": 157,
    "HP": 16561945,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 969600
    },
    "time": 77000,
    "levelRequired": 160,
    "HP": 17400390,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 991200
    },
    "time": 77000,
    "levelRequired": 163,
    "HP": 18281283,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1012800
    },
    "time": 77000,
    "levelRequired": 166,
    "HP": 19206772,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1034400
    },
    "time": 77000,
    "levelRequired": 169,
    "HP": 20179112,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1167600
    },
    "time": 77000,
    "levelRequired": 187,
    "HP": 21200676,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1300800
    },
    "time": 77000,
    "levelRequired": 205,
    "HP": 22273959,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1434000
    },
    "time": 77000,
    "levelRequired": 223,
    "HP": 23401576,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 1599600
    },
    "time": 77000,
    "levelRequired": 246,
    "HP": 24586278,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 1725600
    },
    "time": 77000,
    "levelRequired": 267,
    "HP": 25830958,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 1851600
    },
    "time": 77000,
    "levelRequired": 281,
    "HP": 27681420,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 1977600
    },
    "time": 77000,
    "levelRequired": 310,
    "HP": 30394367,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2103600
    },
    "time": 77000,
    "levelRequired": 340,
    "HP": 32547177,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2229600
    },
    "time": 77000,
    "levelRequired": 370,
    "HP": 34840062,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 390,
    "HP": 38213728,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 418,
    "HP": 40878262,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 434,
    "HP": 43714645,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 442,
    "HP": 46733446,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 442,
    "HP": 49945866,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 442,
    "HP": 53363770,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 450,
    "HP": 56065308,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 455,
    "HP": 58903611,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 460,
    "HP": 61885605,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 465,
    "HP": 65018562,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 470,
    "HP": 68310125,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 472,
    "HP": 71768324,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 474,
    "HP": 75401593,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 476,
    "HP": 79218798,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 478,
    "HP": 83229247,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 480,
    "HP": 87442726,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 482,
    "HP": 91869513,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 484,
    "HP": 96520405,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 486,
    "HP": 101406748,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 488,
    "HP": 106540462,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 490,
    "HP": 111934070,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2355601
    },
    "time": 77000,
    "levelRequired": 492,
    "HP": 117600729,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2355602
    },
    "time": 77000,
    "levelRequired": 494,
    "HP": 123554265,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2355603
    },
    "time": 77000,
    "levelRequired": 496,
    "HP": 129809197,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2355604
    },
    "time": 77000,
    "levelRequired": 498,
    "HP": 136380786,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2355605
    },
    "time": 77000,
    "levelRequired": 500,
    "HP": 143285060,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2355606
    },
    "time": 77000,
    "levelRequired": 501,
    "HP": 150538864,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2355607
    },
    "time": 77000,
    "levelRequired": 502,
    "HP": 158159893,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2355608
    },
    "time": 77000,
    "levelRequired": 503,
    "HP": 166166736,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2355609
    },
    "time": 77000,
    "levelRequired": 504,
    "HP": 174578926,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2355610
    },
    "time": 77000,
    "levelRequired": 505,
    "HP": 183416981,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 54
  }],
  "Storm": [{
    "material": {
      "type": "wood",
      "amount": 12
    },
    "time": 600,
    "levelRequired": 1,
    "HP": 6991,
    "XP": 28,
    "AP": 50,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 145
    },
    "time": 900,
    "levelRequired": 1,
    "HP": 8643,
    "XP": 98,
    "AP": 69,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 463
    },
    "time": 2700,
    "levelRequired": 1,
    "HP": 10261,
    "XP": 225,
    "AP": 98,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 8640,
    "levelRequired": 1,
    "HP": 11982,
    "XP": 383,
    "AP": 133,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1463
    },
    "time": 16200,
    "levelRequired": 1,
    "HP": 14255,
    "XP": 428,
    "AP": 180,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 21600,
    "levelRequired": 7,
    "HP": 16884,
    "XP": 600,
    "AP": 244,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 2698
    },
    "time": 28800,
    "levelRequired": 12,
    "HP": 19892,
    "XP": 750,
    "AP": 330,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 36000,
    "levelRequired": 12,
    "HP": 23314,
    "XP": 750,
    "AP": 444,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 5703
    },
    "time": 43200,
    "levelRequired": 17,
    "HP": 27185,
    "XP": 924,
    "AP": 525,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 57600,
    "levelRequired": 17,
    "HP": 30537,
    "XP": 1264,
    "AP": 590,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 12869
    },
    "time": 72000,
    "levelRequired": 21,
    "HP": 34165,
    "XP": 1298,
    "AP": 660,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 86400,
    "levelRequired": 21,
    "HP": 38072,
    "XP": 1667,
    "AP": 735,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 26927
    },
    "time": 129600,
    "levelRequired": 25,
    "HP": 42382,
    "XP": 2058,
    "AP": 818,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 172800,
    "levelRequired": 28,
    "HP": 47181,
    "XP": 2118,
    "AP": 911,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 51677
    },
    "time": 216000,
    "levelRequired": 31,
    "HP": 52525,
    "XP": 2546,
    "AP": 1014,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 259200,
    "levelRequired": 31,
    "HP": 58473,
    "XP": 3000,
    "AP": 1129,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 77039
    },
    "time": 302400,
    "levelRequired": 34,
    "HP": 65095,
    "XP": 3097,
    "AP": 1257,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 345600,
    "levelRequired": 37,
    "HP": 72467,
    "XP": 4000,
    "AP": 1399,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "wood",
      "amount": 129598
    },
    "time": 388800,
    "levelRequired": 42,
    "HP": 85121,
    "XP": 5334,
    "AP": 1643,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 99983,
    "XP": 7000,
    "AP": 1930,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "wood",
      "amount": 187199
    },
    "time": 518400,
    "levelRequired": 50,
    "HP": 117442,
    "XP": 9143,
    "AP": 2266,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 137949,
    "XP": 12000,
    "AP": 2662,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "wood",
      "amount": 251999
    },
    "time": 691200,
    "levelRequired": 61,
    "HP": 162037,
    "XP": 16000,
    "AP": 3127,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 190332,
    "XP": 17600,
    "AP": 3672,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "wood",
      "amount": 299904
    },
    "time": 864000,
    "levelRequired": 67,
    "HP": 223569,
    "XP": 19200,
    "AP": 4313,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 277082,
    "XP": 20800,
    "AP": 5346,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "wood",
      "amount": 381696
    },
    "time": 1080000,
    "levelRequired": 79,
    "HP": 343405,
    "XP": 24000,
    "AP": 6625,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 401654,
    "XP": 25600,
    "AP": 7748,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 463488
    },
    "time": 1224000,
    "levelRequired": 91,
    "HP": 443347,
    "XP": 27200,
    "AP": 8552,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 489370,
    "XP": 30400,
    "AP": 9440,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 545280
    },
    "time": 1370990,
    "levelRequired": 100,
    "HP": 540170,
    "XP": 32000,
    "AP": 10420,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 596246,
    "XP": 33600,
    "AP": 11501,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 627072
    },
    "time": 1566720,
    "levelRequired": 112,
    "HP": 658141,
    "XP": 33600,
    "AP": 12695,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 726462,
    "XP": 33600,
    "AP": 14012,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 708864
    },
    "time": 1762560,
    "levelRequired": 124,
    "HP": 801875,
    "XP": 33600,
    "AP": 15467,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 885119,
    "XP": 33600,
    "AP": 17072,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 790656
    },
    "time": 1762560,
    "levelRequired": 136,
    "HP": 977004,
    "XP": 33600,
    "AP": 18844,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1078427,
    "XP": 33600,
    "AP": 20800,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 872448
    },
    "time": 1762560,
    "levelRequired": 145,
    "HP": 1190380,
    "XP": 33600,
    "AP": 22959,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1313954,
    "XP": 33600,
    "AP": 25342,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 954240
    },
    "time": 2290604,
    "levelRequired": 157,
    "HP": 1450357,
    "XP": 35349,
    "AP": 27973,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1600920,
    "XP": 42345,
    "AP": 30876,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1036032
    },
    "time": 3197201,
    "levelRequired": 169,
    "HP": 1767114,
    "XP": 49340,
    "AP": 34081,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 1950560,
    "XP": 56335,
    "AP": 37619,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1117824
    },
    "time": 4103799,
    "levelRequired": 181,
    "HP": 2153050,
    "XP": 63331,
    "AP": 41524,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2376560,
    "XP": 70326,
    "AP": 45834,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1199616
    },
    "time": 4314507,
    "levelRequired": 193,
    "HP": 2623276,
    "XP": 77321,
    "AP": 50592,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 2895603,
    "XP": 84317,
    "AP": 55844,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1281408
    },
    "time": 4602106,
    "levelRequired": 202,
    "HP": 3196202,
    "XP": 91312,
    "AP": 61641,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3528005,
    "XP": 98307,
    "AP": 68040,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1342752
    },
    "time": 5000000,
    "levelRequired": 211,
    "HP": 3894256,
    "XP": 101805,
    "AP": 75103,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4298527,
    "XP": 105303,
    "AP": 82899,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1383648
    },
    "time": 5000000,
    "levelRequired": 217,
    "HP": 4744767,
    "XP": 106000,
    "AP": 91505,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5237333,
    "XP": 106000,
    "AP": 101004,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 1424544
    },
    "time": 5000000,
    "levelRequired": 223,
    "HP": 5781033,
    "XP": 106000,
    "AP": 111490,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 6381176,
    "XP": 106000,
    "AP": 123064,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1465440
    },
    "time": 5000000,
    "levelRequired": 229,
    "HP": 7043622,
    "XP": 106000,
    "AP": 135839,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 7774837,
    "XP": 106000,
    "AP": 149940,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1506336
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 8581963,
    "XP": 106000,
    "AP": 165506,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 9472878,
    "XP": 106000,
    "AP": 182688,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "wood",
      "amount": 1751712
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9952442,
    "XP": 106000,
    "AP": 191936,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10456283,
    "XP": 106000,
    "AP": 201653,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1792608
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10985630,
    "XP": 106000,
    "AP": 211861,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11541775,
    "XP": 106000,
    "AP": 222586,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1833504
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12126077,
    "XP": 106000,
    "AP": 233855,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12739958,
    "XP": 106000,
    "AP": 245693,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1874400
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13384916,
    "XP": 106000,
    "AP": 258132,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14062526,
    "XP": 106000,
    "AP": 271199,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1915296
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14774440,
    "XP": 106000,
    "AP": 284929,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15522394,
    "XP": 106000,
    "AP": 299353,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1956192
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16308213,
    "XP": 106000,
    "AP": 314508,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 17133815,
    "XP": 106000,
    "AP": 330430,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1997088
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18001213,
    "XP": 106000,
    "AP": 347158,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18912522,
    "XP": 106000,
    "AP": 364732,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2037984
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 19869968,
    "XP": 106000,
    "AP": 383197,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 21293401,
    "XP": 106000,
    "AP": 410648,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2089104
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 23380283,
    "XP": 106000,
    "AP": 450894,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 25036291,
    "XP": 106000,
    "AP": 482830,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2130000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 26800048,
    "XP": 106000,
    "AP": 516845,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 29395176,
    "XP": 106000,
    "AP": 566892,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 31444818,
    "XP": 106000,
    "AP": 606420,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 33626651,
    "XP": 106000,
    "AP": 648496,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 35948805,
    "XP": 106000,
    "AP": 693280,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 38419897,
    "XP": 106000,
    "AP": 740935,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 41049054,
    "XP": 106000,
    "AP": 791638,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 43127160,
    "XP": 106000,
    "AP": 831714,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 45310470,
    "XP": 106000,
    "AP": 873820,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 47604312,
    "XP": 106000,
    "AP": 918056,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 50014279,
    "XP": 106000,
    "AP": 964534,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 52546250,
    "XP": 106000,
    "AP": 1013363,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 55206403,
    "XP": 106000,
    "AP": 1064664,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 58001226,
    "XP": 106000,
    "AP": 1118562,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 60937537,
    "XP": 106000,
    "AP": 1175189,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 64022498,
    "XP": 106000,
    "AP": 1234682,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 67263636,
    "XP": 106000,
    "AP": 1297188,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 70668857,
    "XP": 106000,
    "AP": 1362858,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 74246466,
    "XP": 106000,
    "AP": 1431853,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 78005191,
    "XP": 106000,
    "AP": 1504340,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 81954202,
    "XP": 106000,
    "AP": 1580497,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 86103131,
    "XP": 106000,
    "AP": 1660510,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 90462100,
    "XP": 106000,
    "AP": 1744573,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 95041742,
    "XP": 106000,
    "AP": 1832892,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 99853229,
    "XP": 106000,
    "AP": 1925682,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 104908297,
    "XP": 106000,
    "AP": 2023170,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 110219278,
    "XP": 106000,
    "AP": 2125592,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 115799126,
    "XP": 106000,
    "AP": 2233200,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 121661456,
    "XP": 106000,
    "AP": 2346256,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 127820567,
    "XP": 106000,
    "AP": 2465035,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 134291482,
    "XP": 106000,
    "AP": 2589827,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 141089986,
    "XP": 106000,
    "AP": 2720938,
    "requiredBuilder": 54
  }],
  "DragonPerch03": [{
    "material": {
      "type": "wood",
      "amount": 0
    },
    "time": 3,
    "levelRequired": 0,
    "HP": 1000,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 100
    },
    "time": 1500,
    "levelRequired": 1,
    "HP": 6600,
    "XP": 28,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 208
    },
    "time": 13500,
    "levelRequired": 1,
    "HP": 7840,
    "XP": 98,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 200
    },
    "time": 32400,
    "levelRequired": 1,
    "HP": 8976,
    "XP": 225,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 55440,
    "levelRequired": 1,
    "HP": 10275,
    "XP": 383,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 300
    },
    "time": 95040,
    "levelRequired": 1,
    "HP": 11763,
    "XP": 428,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 116640,
    "levelRequired": 7,
    "HP": 13467,
    "XP": 600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 400
    },
    "time": 151200,
    "levelRequired": 7,
    "HP": 15402,
    "XP": 750,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 151200,
    "levelRequired": 12,
    "HP": 17544,
    "XP": 750,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 500
    },
    "time": 162000,
    "levelRequired": 12,
    "HP": 19904,
    "XP": 924,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 164050,
    "levelRequired": 17,
    "HP": 22492,
    "XP": 1264,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 600
    },
    "time": 168311,
    "levelRequired": 17,
    "HP": 25316,
    "XP": 1298,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 184320,
    "levelRequired": 21,
    "HP": 28381,
    "XP": 1667,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 700
    },
    "time": 207123,
    "levelRequired": 21,
    "HP": 31689,
    "XP": 2058,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 212957,
    "levelRequired": 28,
    "HP": 35277,
    "XP": 2118,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 800
    },
    "time": 247930,
    "levelRequired": 28,
    "HP": 39272,
    "XP": 2546,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 307898,
    "levelRequired": 31,
    "HP": 46129,
    "XP": 3000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 900
    },
    "time": 416640,
    "levelRequired": 31,
    "HP": 54182,
    "XP": 3097,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 483840,
    "levelRequired": 37,
    "HP": 63642,
    "XP": 4000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1000
    },
    "time": 544320,
    "levelRequired": 37,
    "HP": 74755,
    "XP": 5334,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 604800,
    "levelRequired": 46,
    "HP": 87807,
    "XP": 7000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1100
    },
    "time": 725760,
    "levelRequired": 46,
    "HP": 103140,
    "XP": 9143,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 846720,
    "levelRequired": 56,
    "HP": 121149,
    "XP": 12000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1200
    },
    "time": 967680,
    "levelRequired": 56,
    "HP": 142304,
    "XP": 16000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 1209600,
    "levelRequired": 64,
    "HP": 167154,
    "XP": 17600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1300
    },
    "time": 1209600,
    "levelRequired": 64,
    "HP": 196342,
    "XP": 19200,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 1310400,
    "levelRequired": 73,
    "HP": 243339,
    "XP": 20800,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1400
    },
    "time": 1512000,
    "levelRequired": 73,
    "HP": 301585,
    "XP": 24000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1612800,
    "levelRequired": 85,
    "HP": 352741,
    "XP": 25600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1600
    },
    "time": 1713600,
    "levelRequired": 85,
    "HP": 389356,
    "XP": 27200,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1915200,
    "levelRequired": 94,
    "HP": 429775,
    "XP": 30400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1800
    },
    "time": 2257920,
    "levelRequired": 94,
    "HP": 474388,
    "XP": 32000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 2540160,
    "levelRequired": 106,
    "HP": 523635,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2000
    },
    "time": 2709504,
    "levelRequired": 106,
    "HP": 577993,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 2782080,
    "levelRequired": 118,
    "HP": 637994,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2200
    },
    "time": 2854656,
    "levelRequired": 118,
    "HP": 704223,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 2927232,
    "levelRequired": 130,
    "HP": 777330,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2400
    },
    "time": 2999808,
    "levelRequired": 130,
    "HP": 858025,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 3072384,
    "levelRequired": 142,
    "HP": 947096,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2600
    },
    "time": 3144960,
    "levelRequired": 142,
    "HP": 1045416,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 3217536,
    "levelRequired": 151,
    "HP": 1153941,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2800
    },
    "time": 3308651,
    "levelRequired": 151,
    "HP": 1273732,
    "XP": 35349,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 3506098,
    "levelRequired": 163,
    "HP": 1405960,
    "XP": 42345,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3000
    },
    "time": 3907691,
    "levelRequired": 163,
    "HP": 1551915,
    "XP": 49340,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 4258917,
    "levelRequired": 175,
    "HP": 1713021,
    "XP": 56335,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3200
    },
    "time": 4331787,
    "levelRequired": 175,
    "HP": 1890852,
    "XP": 56335,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4354559,
    "levelRequired": 187,
    "HP": 2087143,
    "XP": 70326,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3400
    },
    "time": 4370178,
    "levelRequired": 187,
    "HP": 2303814,
    "XP": 77321,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4370955,
    "levelRequired": 196,
    "HP": 2542977,
    "XP": 84317,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3600
    },
    "time": 4602106,
    "levelRequired": 196,
    "HP": 2806969,
    "XP": 91312,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3098365,
    "XP": 98307,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3800
    },
    "time": 5000000,
    "levelRequired": 208,
    "HP": 3255219,
    "XP": 101805,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 3420014,
    "XP": 105303,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4000
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 3593151,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 3775053,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4200
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 3966164,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 4166950,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4400
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 4377901,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 4599531,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4600
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 4832382,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 5077020,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4800
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 5604078,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1608576
    },
    "time": 5000000,
    "levelRequired": 274,
    "HP": 6185851,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5000
    },
    "time": 5000000,
    "levelRequired": 274,
    "HP": 6828019,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1690368
    },
    "time": 5000000,
    "levelRequired": 281,
    "HP": 7536853,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5200
    },
    "time": 5000000,
    "levelRequired": 281,
    "HP": 8319272,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 9182918,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5400
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 10136220,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 11188488,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5600
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 12349994,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 296,
    "HP": 13632079,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5601
    },
    "time": 5000000,
    "levelRequired": 296,
    "HP": 14322201,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 304,
    "HP": 15047262,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5602
    },
    "time": 5000000,
    "levelRequired": 304,
    "HP": 15809028,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 304,
    "HP": 16609358,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5603
    },
    "time": 5000000,
    "levelRequired": 312,
    "HP": 17450206,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 18333621,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 6400
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 19743303,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 20742806,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 6600
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 21792909,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 23468577,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 6800
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 24656672,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 25904914,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7000
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 27216349,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 28594176,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 30041755,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 390,
    "HP": 31562617,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 395,
    "HP": 33160473,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 400,
    "HP": 34839222,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 405,
    "HP": 36602956,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 410,
    "HP": 38455980,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 415,
    "HP": 40402813,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 420,
    "HP": 42448204,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 425,
    "HP": 44597144,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 46854873,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 49226900,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 450,
    "HP": 51719011,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 455,
    "HP": 54337285,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 57088108,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 465,
    "HP": 59978192,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 63014587,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 66204698,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 69556310,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 73077597,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 76777149,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 80663991,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 84747604,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7500
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 89037951,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 93545497,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7800
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 98281237,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 103256722,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }],
  "Archer": [{
    "material": {
      "type": "wood",
      "amount": 5
    },
    "time": 60,
    "levelRequired": 1,
    "HP": 5500,
    "XP": 1,
    "AP": 289,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 9
    },
    "time": 120,
    "levelRequired": 1,
    "HP": 6534,
    "XP": 13,
    "AP": 343,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 46
    },
    "time": 600,
    "levelRequired": 1,
    "HP": 7854,
    "XP": 60,
    "AP": 436,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 187
    },
    "time": 2400,
    "levelRequired": 1,
    "HP": 9419,
    "XP": 140,
    "AP": 604,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 543
    },
    "time": 9094,
    "levelRequired": 1,
    "HP": 10979,
    "XP": 240,
    "AP": 836,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1008
    },
    "time": 14580,
    "levelRequired": 1,
    "HP": 13072,
    "XP": 405,
    "AP": 1137,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1637
    },
    "time": 23040,
    "levelRequired": 7,
    "HP": 15525,
    "XP": 600,
    "AP": 1544,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 2396
    },
    "time": 28800,
    "levelRequired": 7,
    "HP": 18339,
    "XP": 600,
    "AP": 2089,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3938
    },
    "time": 35100,
    "levelRequired": 12,
    "HP": 21549,
    "XP": 750,
    "AP": 2816,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 5356
    },
    "time": 41559,
    "levelRequired": 17,
    "HP": 25191,
    "XP": 912,
    "AP": 3639,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 7336
    },
    "time": 51896,
    "levelRequired": 17,
    "HP": 28826,
    "XP": 936,
    "AP": 4095,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 11306
    },
    "time": 66355,
    "levelRequired": 17,
    "HP": 32316,
    "XP": 1280,
    "AP": 4590,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 18051
    },
    "time": 103561,
    "levelRequired": 21,
    "HP": 36083,
    "XP": 1644,
    "AP": 5125,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 26433
    },
    "time": 137915,
    "levelRequired": 25,
    "HP": 40169,
    "XP": 1691,
    "AP": 5704,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 36694
    },
    "time": 177093,
    "levelRequired": 28,
    "HP": 44718,
    "XP": 2087,
    "AP": 6349,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 66748
    },
    "time": 219927,
    "levelRequired": 31,
    "HP": 52525,
    "XP": 2546,
    "AP": 7456,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 103025
    },
    "time": 297600,
    "levelRequired": 40,
    "HP": 61695,
    "XP": 3048,
    "AP": 8756,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 118279
    },
    "time": 345600,
    "levelRequired": 42,
    "HP": 72467,
    "XP": 4000,
    "AP": 10285,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "wood",
      "amount": 129598
    },
    "time": 388800,
    "levelRequired": 42,
    "HP": 85121,
    "XP": 5334,
    "AP": 12080,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 99983,
    "XP": 7000,
    "AP": 14188,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "wood",
      "amount": 187199
    },
    "time": 518400,
    "levelRequired": 50,
    "HP": 117442,
    "XP": 9143,
    "AP": 16665,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 137949,
    "XP": 12000,
    "AP": 19573,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "wood",
      "amount": 251999
    },
    "time": 691200,
    "levelRequired": 61,
    "HP": 162037,
    "XP": 16000,
    "AP": 22990,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 190332,
    "XP": 17600,
    "AP": 27003,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "wood",
      "amount": 299904
    },
    "time": 864000,
    "levelRequired": 67,
    "HP": 223569,
    "XP": 19200,
    "AP": 31717,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 277082,
    "XP": 20800,
    "AP": 39305,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "wood",
      "amount": 381696
    },
    "time": 1080000,
    "levelRequired": 79,
    "HP": 343405,
    "XP": 24000,
    "AP": 48711,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 401654,
    "XP": 25600,
    "AP": 56972,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 463488
    },
    "time": 1224000,
    "levelRequired": 91,
    "HP": 443347,
    "XP": 27200,
    "AP": 62885,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 489370,
    "XP": 30400,
    "AP": 69411,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 545280
    },
    "time": 1370990,
    "levelRequired": 100,
    "HP": 540170,
    "XP": 32000,
    "AP": 76615,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 596246,
    "XP": 33600,
    "AP": 84566,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 627072
    },
    "time": 1566720,
    "levelRequired": 112,
    "HP": 658141,
    "XP": 33600,
    "AP": 93344,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 726462,
    "XP": 33600,
    "AP": 103032,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 708864
    },
    "time": 1762560,
    "levelRequired": 124,
    "HP": 801875,
    "XP": 33600,
    "AP": 113725,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 885119,
    "XP": 33600,
    "AP": 125529,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 790656
    },
    "time": 1762560,
    "levelRequired": 136,
    "HP": 977004,
    "XP": 33600,
    "AP": 138559,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1078427,
    "XP": 33600,
    "AP": 152940,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 872448
    },
    "time": 1762560,
    "levelRequired": 145,
    "HP": 1190380,
    "XP": 33600,
    "AP": 168816,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1313954,
    "XP": 33600,
    "AP": 186339,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 954240
    },
    "time": 2290604,
    "levelRequired": 157,
    "HP": 1450357,
    "XP": 35349,
    "AP": 205681,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1600920,
    "XP": 42345,
    "AP": 227031,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1036032
    },
    "time": 3197201,
    "levelRequired": 169,
    "HP": 1767114,
    "XP": 49340,
    "AP": 250596,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 1950560,
    "XP": 56335,
    "AP": 276609,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1117824
    },
    "time": 4103799,
    "levelRequired": 181,
    "HP": 2153050,
    "XP": 63331,
    "AP": 305322,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2376560,
    "XP": 70326,
    "AP": 337017,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1199616
    },
    "time": 4314507,
    "levelRequired": 193,
    "HP": 2623276,
    "XP": 77321,
    "AP": 372001,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 2895603,
    "XP": 84317,
    "AP": 410616,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1281408
    },
    "time": 4602106,
    "levelRequired": 202,
    "HP": 3196202,
    "XP": 91312,
    "AP": 453241,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3528005,
    "XP": 98307,
    "AP": 500292,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1352976
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 3894256,
    "XP": 101805,
    "AP": 552227,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1373424
    },
    "time": 5000000,
    "levelRequired": 217,
    "HP": 4298527,
    "XP": 105303,
    "AP": 609553,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 4863386,
    "XP": 106000,
    "AP": 689652,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1424544
    },
    "time": 5000000,
    "levelRequired": 223,
    "HP": 5502472,
    "XP": 106000,
    "AP": 780276,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 1455216
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 6225538,
    "XP": 106000,
    "AP": 882809,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1475664
    },
    "time": 5000000,
    "levelRequired": 229,
    "HP": 6381176,
    "XP": 106000,
    "AP": 904879,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1496112
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 7043622,
    "XP": 106000,
    "AP": 998816,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1516560
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 7774837,
    "XP": 106000,
    "AP": 1102504,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1537008
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 8581963,
    "XP": 106000,
    "AP": 1216956,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "wood",
      "amount": 1557456
    },
    "time": 5000000,
    "levelRequired": 246,
    "HP": 9472878,
    "XP": 106000,
    "AP": 1343291,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "wood",
      "amount": 1751712
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9952442,
    "XP": 106000,
    "AP": 1411294,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10456283,
    "XP": 106000,
    "AP": 1482740,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1792608
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10985630,
    "XP": 106000,
    "AP": 1557802,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11541775,
    "XP": 106000,
    "AP": 1636665,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1833504
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12126077,
    "XP": 106000,
    "AP": 1719520,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12739958,
    "XP": 106000,
    "AP": 1806570,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1874400
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13384916,
    "XP": 106000,
    "AP": 1898027,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14062526,
    "XP": 106000,
    "AP": 1994114,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1915296
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14774440,
    "XP": 106000,
    "AP": 2095065,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15522394,
    "XP": 106000,
    "AP": 2201127,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1956192
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16308213,
    "XP": 106000,
    "AP": 2312559,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 17133815,
    "XP": 106000,
    "AP": 2429631,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1997088
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18001213,
    "XP": 106000,
    "AP": 2552630,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18912522,
    "XP": 106000,
    "AP": 2681856,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2037984
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 19869968,
    "XP": 106000,
    "AP": 2817624,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 21293401,
    "XP": 106000,
    "AP": 3019470,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2089104
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 23380283,
    "XP": 106000,
    "AP": 3315395,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 25036291,
    "XP": 106000,
    "AP": 3550221,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2130000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 26800048,
    "XP": 106000,
    "AP": 3800327,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 29395176,
    "XP": 106000,
    "AP": 4168321,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 31444818,
    "XP": 106000,
    "AP": 4458965,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 33626651,
    "XP": 106000,
    "AP": 4768356,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 35948805,
    "XP": 106000,
    "AP": 5097642,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 38419897,
    "XP": 106000,
    "AP": 5448048,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 41049054,
    "XP": 106000,
    "AP": 5820868,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 43127160,
    "XP": 106000,
    "AP": 6115548,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 45310470,
    "XP": 106000,
    "AP": 6425147,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 47604312,
    "XP": 106000,
    "AP": 6750418,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 50014279,
    "XP": 106000,
    "AP": 7092156,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 52546250,
    "XP": 106000,
    "AP": 7451195,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 55206403,
    "XP": 106000,
    "AP": 7828410,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 58001226,
    "XP": 106000,
    "AP": 8224722,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 60937537,
    "XP": 106000,
    "AP": 8641097,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 64022498,
    "XP": 106000,
    "AP": 9078551,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 67263636,
    "XP": 106000,
    "AP": 9538151,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 70668857,
    "XP": 106000,
    "AP": 10021019,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 74246466,
    "XP": 106000,
    "AP": 10528332,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 78005191,
    "XP": 106000,
    "AP": 11061328,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 81954202,
    "XP": 106000,
    "AP": 11621306,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 86103131,
    "XP": 106000,
    "AP": 12209633,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 90462100,
    "XP": 106000,
    "AP": 12827744,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 95041742,
    "XP": 106000,
    "AP": 13477148,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 99853229,
    "XP": 106000,
    "AP": 14159428,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 104908297,
    "XP": 106000,
    "AP": 14876246,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 110219278,
    "XP": 106000,
    "AP": 15629356,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 115799126,
    "XP": 106000,
    "AP": 16420591,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 121661456,
    "XP": 106000,
    "AP": 17251883,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 127820567,
    "XP": 106000,
    "AP": 18125257,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 134291482,
    "XP": 106000,
    "AP": 19042848,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 141089986,
    "XP": 106000,
    "AP": 20006890,
    "requiredBuilder": 54
  }],
  "FireTurret": [{
    "material": {
      "type": "fireShard",
      "amount": 100
    },
    "time": 990,
    "levelRequired": 0,
    "HP": 6991,
    "XP": 28,
    "AP": 4001,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 145
    },
    "time": 3510,
    "levelRequired": 1,
    "HP": 8643,
    "XP": 98,
    "AP": 5553,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 200
    },
    "time": 7200,
    "levelRequired": 1,
    "HP": 10261,
    "XP": 225,
    "AP": 7827,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 10800,
    "levelRequired": 1,
    "HP": 11982,
    "XP": 383,
    "AP": 10637,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 300
    },
    "time": 16200,
    "levelRequired": 1,
    "HP": 14255,
    "XP": 428,
    "AP": 14463,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 21600,
    "levelRequired": 7,
    "HP": 16884,
    "XP": 600,
    "AP": 19603,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 400
    },
    "time": 28800,
    "levelRequired": 7,
    "HP": 19892,
    "XP": 750,
    "AP": 26472,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 36000,
    "levelRequired": 12,
    "HP": 23314,
    "XP": 750,
    "AP": 35608,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 500
    },
    "time": 43200,
    "levelRequired": 12,
    "HP": 27185,
    "XP": 924,
    "AP": 42131,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 57600,
    "levelRequired": 17,
    "HP": 30537,
    "XP": 1264,
    "AP": 47321,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 600
    },
    "time": 72000,
    "levelRequired": 17,
    "HP": 34165,
    "XP": 1298,
    "AP": 52937,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 86400,
    "levelRequired": 21,
    "HP": 38072,
    "XP": 1667,
    "AP": 58979,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 700
    },
    "time": 129600,
    "levelRequired": 21,
    "HP": 42382,
    "XP": 2058,
    "AP": 65648,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 172800,
    "levelRequired": 28,
    "HP": 47181,
    "XP": 2118,
    "AP": 73072,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 800
    },
    "time": 216000,
    "levelRequired": 28,
    "HP": 52525,
    "XP": 2546,
    "AP": 81336,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 259200,
    "levelRequired": 31,
    "HP": 58473,
    "XP": 3000,
    "AP": 90537,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 900
    },
    "time": 302400,
    "levelRequired": 31,
    "HP": 65095,
    "XP": 3097,
    "AP": 100790,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 345600,
    "levelRequired": 37,
    "HP": 72467,
    "XP": 4000,
    "AP": 112203,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 1000
    },
    "time": 388800,
    "levelRequired": 37,
    "HP": 85121,
    "XP": 5334,
    "AP": 131785,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 99983,
    "XP": 7000,
    "AP": 154780,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 1100
    },
    "time": 518400,
    "levelRequired": 46,
    "HP": 117442,
    "XP": 9143,
    "AP": 181797,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 137949,
    "XP": 12000,
    "AP": 213525,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 1200
    },
    "time": 691200,
    "levelRequired": 56,
    "HP": 162037,
    "XP": 16000,
    "AP": 250795,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 190332,
    "XP": 17600,
    "AP": 294574,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 1300
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 223569,
    "XP": 19200,
    "AP": 346001,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 277082,
    "XP": 20800,
    "AP": 428784,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 1400
    },
    "time": 1080000,
    "levelRequired": 73,
    "HP": 343405,
    "XP": 24000,
    "AP": 531393,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 401654,
    "XP": 25600,
    "AP": 621515,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 1500
    },
    "time": 1224000,
    "levelRequired": 85,
    "HP": 443347,
    "XP": 27200,
    "AP": 686014,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 489370,
    "XP": 30400,
    "AP": 757213,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 1600
    },
    "time": 1370990,
    "levelRequired": 94,
    "HP": 540170,
    "XP": 32000,
    "AP": 835795,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 596246,
    "XP": 33600,
    "AP": 922534,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 1700
    },
    "time": 1566720,
    "levelRequired": 106,
    "HP": 658141,
    "XP": 33600,
    "AP": 1018294,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 726462,
    "XP": 33600,
    "AP": 1123987,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 1800
    },
    "time": 1762560,
    "levelRequired": 118,
    "HP": 801875,
    "XP": 33600,
    "AP": 1240636,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 885119,
    "XP": 33600,
    "AP": 1369411,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 1900
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 977004,
    "XP": 33600,
    "AP": 1511555,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1078427,
    "XP": 33600,
    "AP": 1668441,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 2000
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1190380,
    "XP": 33600,
    "AP": 1841633,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1313954,
    "XP": 33600,
    "AP": 2032790,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 2100
    },
    "time": 2290604,
    "levelRequired": 151,
    "HP": 1450357,
    "XP": 35349,
    "AP": 2243794,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1600920,
    "XP": 42345,
    "AP": 2476699,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 2200
    },
    "time": 3197201,
    "levelRequired": 163,
    "HP": 1767114,
    "XP": 49340,
    "AP": 2733779,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 1950560,
    "XP": 56335,
    "AP": 3017558,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 2300
    },
    "time": 4103799,
    "levelRequired": 175,
    "HP": 2153050,
    "XP": 63331,
    "AP": 3330788,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2376560,
    "XP": 70326,
    "AP": 3424050,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 2400
    },
    "time": 4314507,
    "levelRequired": 187,
    "HP": 2623276,
    "XP": 77321,
    "AP": 3519923,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 2895603,
    "XP": 84317,
    "AP": 3618481,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 2500
    },
    "time": 4602106,
    "levelRequired": 196,
    "HP": 3196202,
    "XP": 91312,
    "AP": 3719799,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3528005,
    "XP": 98307,
    "AP": 3823953,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 2600
    },
    "time": 5000000,
    "levelRequired": 208,
    "HP": 3894256,
    "XP": 101805,
    "AP": 4067193,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4298527,
    "XP": 105303,
    "AP": 4310433,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 2700
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4744767,
    "XP": 106000,
    "AP": 4553673,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5237333,
    "XP": 106000,
    "AP": 4796913,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 2800
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5781033,
    "XP": 106000,
    "AP": 5040153,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 6381176,
    "XP": 106000,
    "AP": 5334923,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 2900
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 7043622,
    "XP": 106000,
    "AP": 5629692,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 7774837,
    "XP": 106000,
    "AP": 6214112,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 3000
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 8581963,
    "XP": 106000,
    "AP": 6859207,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 9472878,
    "XP": 106000,
    "AP": 7571275,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 3500
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9952442,
    "XP": 106000,
    "AP": 7954566,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10456283,
    "XP": 106000,
    "AP": 8357262,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 4000
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10985630,
    "XP": 106000,
    "AP": 8780341,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11541775,
    "XP": 106000,
    "AP": 9224840,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 4500
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12126077,
    "XP": 106000,
    "AP": 9691839,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12739958,
    "XP": 106000,
    "AP": 10182484,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 5000
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13384916,
    "XP": 106000,
    "AP": 10697968,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14062526,
    "XP": 106000,
    "AP": 11239551,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 5500
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14774440,
    "XP": 106000,
    "AP": 11808550,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15522394,
    "XP": 106000,
    "AP": 12406351,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 6000
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16308213,
    "XP": 106000,
    "AP": 13034421,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 17133815,
    "XP": 106000,
    "AP": 13694283,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 7000
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18001213,
    "XP": 106000,
    "AP": 14387551,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18912522,
    "XP": 106000,
    "AP": 15115918,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 8000
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 19869968,
    "XP": 106000,
    "AP": 15881155,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 21293401,
    "XP": 106000,
    "AP": 17018832,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 10000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 23380283,
    "XP": 106000,
    "AP": 18686770,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 25036291,
    "XP": 106000,
    "AP": 20010339,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 12000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 26800048,
    "XP": 106000,
    "AP": 21420022,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 29395176,
    "XP": 106000,
    "AP": 23494176,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 14000
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 31444818,
    "XP": 106000,
    "AP": 25132353,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 33626651,
    "XP": 106000,
    "AP": 26876183,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 17000
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 35948805,
    "XP": 106000,
    "AP": 28732164,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 38419897,
    "XP": 106000,
    "AP": 30707179,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 41049054,
    "XP": 106000,
    "AP": 32808529,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 43127160,
    "XP": 106000,
    "AP": 34469452,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 45310470,
    "XP": 106000,
    "AP": 36214460,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 47604312,
    "XP": 106000,
    "AP": 38047811,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 50014279,
    "XP": 106000,
    "AP": 39973972,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 52546250,
    "XP": 106000,
    "AP": 41997647,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 55206403,
    "XP": 106000,
    "AP": 44123767,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 58001226,
    "XP": 106000,
    "AP": 46357524,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 60937537,
    "XP": 106000,
    "AP": 48704365,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 64022498,
    "XP": 106000,
    "AP": 51170012,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 67263636,
    "XP": 106000,
    "AP": 53760488,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 70668857,
    "XP": 106000,
    "AP": 56482104,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 74246466,
    "XP": 106000,
    "AP": 59341505,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 78005191,
    "XP": 106000,
    "AP": 62345664,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 81954202,
    "XP": 106000,
    "AP": 65501905,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 86103131,
    "XP": 106000,
    "AP": 68817934,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 90462100,
    "XP": 106000,
    "AP": 72301831,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 95041742,
    "XP": 106000,
    "AP": 75962107,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 99853229,
    "XP": 106000,
    "AP": 79807684,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 104908297,
    "XP": 106000,
    "AP": 83847937,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20000
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 110219278,
    "XP": 106000,
    "AP": 88092734,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 115799126,
    "XP": 106000,
    "AP": 92552420,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 20500
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 121661456,
    "XP": 106000,
    "AP": 97237885,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 127820567,
    "XP": 106000,
    "AP": 102160542,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "fireShard",
      "amount": 21000
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 134291482,
    "XP": 106000,
    "AP": 107332412,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 141089986,
    "XP": 106000,
    "AP": 112766107,
    "requiredBuilder": 0
  }],
  "DragonPerch08": [{
    "material": {
      "type": "wood",
      "amount": 0
    },
    "time": 3,
    "levelRequired": 0,
    "HP": 1000,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3000
    },
    "time": 49500,
    "levelRequired": 1,
    "HP": 8389,
    "XP": 28,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 208
    },
    "time": 105300,
    "levelRequired": 1,
    "HP": 9603,
    "XP": 98,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 200
    },
    "time": 121500,
    "levelRequired": 1,
    "HP": 10994,
    "XP": 225,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 151470,
    "levelRequired": 1,
    "HP": 12586,
    "XP": 383,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 300
    },
    "time": 169290,
    "levelRequired": 1,
    "HP": 14409,
    "XP": 428,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 172800,
    "levelRequired": 7,
    "HP": 16446,
    "XP": 600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 400
    },
    "time": 189000,
    "levelRequired": 7,
    "HP": 18696,
    "XP": 750,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 189000,
    "levelRequired": 12,
    "HP": 21169,
    "XP": 750,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 500
    },
    "time": 199384,
    "levelRequired": 12,
    "HP": 23875,
    "XP": 924,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 227368,
    "levelRequired": 17,
    "HP": 26818,
    "XP": 1264,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 600
    },
    "time": 233513,
    "levelRequired": 17,
    "HP": 30004,
    "XP": 1298,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 240000,
    "levelRequired": 21,
    "HP": 33435,
    "XP": 1667,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 700
    },
    "time": 259200,
    "levelRequired": 21,
    "HP": 37221,
    "XP": 2058,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 266823,
    "levelRequired": 28,
    "HP": 41436,
    "XP": 2118,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 800
    },
    "time": 302400,
    "levelRequired": 28,
    "HP": 46129,
    "XP": 2546,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 362880,
    "levelRequired": 31,
    "HP": 51352,
    "XP": 3000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 900
    },
    "time": 423360,
    "levelRequired": 31,
    "HP": 57168,
    "XP": 3097,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 483840,
    "levelRequired": 37,
    "HP": 63642,
    "XP": 4000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1000
    },
    "time": 544320,
    "levelRequired": 37,
    "HP": 74755,
    "XP": 5334,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 604800,
    "levelRequired": 46,
    "HP": 87807,
    "XP": 7000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1100
    },
    "time": 725760,
    "levelRequired": 46,
    "HP": 103140,
    "XP": 9143,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 846720,
    "levelRequired": 56,
    "HP": 121149,
    "XP": 12000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1200
    },
    "time": 967680,
    "levelRequired": 56,
    "HP": 142304,
    "XP": 16000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 1209600,
    "levelRequired": 64,
    "HP": 167154,
    "XP": 17600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1300
    },
    "time": 1209600,
    "levelRequired": 64,
    "HP": 196342,
    "XP": 19200,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 1310400,
    "levelRequired": 73,
    "HP": 243339,
    "XP": 20800,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1400
    },
    "time": 1512000,
    "levelRequired": 73,
    "HP": 301585,
    "XP": 24000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1612800,
    "levelRequired": 85,
    "HP": 352741,
    "XP": 25600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1600
    },
    "time": 1713600,
    "levelRequired": 85,
    "HP": 389356,
    "XP": 27200,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1915200,
    "levelRequired": 94,
    "HP": 429775,
    "XP": 30400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1800
    },
    "time": 2257920,
    "levelRequired": 94,
    "HP": 474388,
    "XP": 32000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 2540160,
    "levelRequired": 106,
    "HP": 523635,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2000
    },
    "time": 2709504,
    "levelRequired": 106,
    "HP": 577993,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 2782080,
    "levelRequired": 118,
    "HP": 637994,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2200
    },
    "time": 2854656,
    "levelRequired": 118,
    "HP": 704223,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 2927232,
    "levelRequired": 130,
    "HP": 777330,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2400
    },
    "time": 2999808,
    "levelRequired": 130,
    "HP": 858025,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 3072384,
    "levelRequired": 142,
    "HP": 947096,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2600
    },
    "time": 3144960,
    "levelRequired": 142,
    "HP": 1045416,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 3217536,
    "levelRequired": 151,
    "HP": 1153941,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2800
    },
    "time": 3308651,
    "levelRequired": 151,
    "HP": 1273732,
    "XP": 35349,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 3506098,
    "levelRequired": 163,
    "HP": 1405960,
    "XP": 42345,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3000
    },
    "time": 3907691,
    "levelRequired": 163,
    "HP": 1551915,
    "XP": 49340,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 4258917,
    "levelRequired": 175,
    "HP": 1713021,
    "XP": 56335,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3200
    },
    "time": 4331787,
    "levelRequired": 175,
    "HP": 1890852,
    "XP": 56335,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4354559,
    "levelRequired": 187,
    "HP": 2087143,
    "XP": 70326,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3400
    },
    "time": 4370178,
    "levelRequired": 187,
    "HP": 2303814,
    "XP": 77321,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4370955,
    "levelRequired": 196,
    "HP": 2542977,
    "XP": 84317,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3600
    },
    "time": 4602106,
    "levelRequired": 196,
    "HP": 2806969,
    "XP": 91312,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3098365,
    "XP": 98307,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3800
    },
    "time": 5000000,
    "levelRequired": 208,
    "HP": 3255219,
    "XP": 101805,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 3420014,
    "XP": 105303,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4000
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 3593151,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 3775053,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4200
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 3966164,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 4166950,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4400
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 4377901,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 4599531,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4600
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 4832382,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 5077020,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4800
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 5604078,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1608576
    },
    "time": 5000000,
    "levelRequired": 274,
    "HP": 6185851,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5000
    },
    "time": 5000000,
    "levelRequired": 274,
    "HP": 6828019,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1690368
    },
    "time": 5000000,
    "levelRequired": 281,
    "HP": 7536853,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5200
    },
    "time": 5000000,
    "levelRequired": 281,
    "HP": 8319272,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 9182918,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5400
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 10136220,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 11188488,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5600
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 12349994,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 296,
    "HP": 13632079,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5601
    },
    "time": 5000000,
    "levelRequired": 296,
    "HP": 14322201,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 304,
    "HP": 15047262,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5602
    },
    "time": 5000000,
    "levelRequired": 304,
    "HP": 15809028,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 304,
    "HP": 16609358,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5603
    },
    "time": 5000000,
    "levelRequired": 312,
    "HP": 17450206,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 18333621,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 6400
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 19743303,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 20742806,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 6600
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 21792909,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 23468577,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 6800
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 24656672,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 25904914,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7000
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 27216349,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 28594176,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 30041755,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 390,
    "HP": 31562617,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 395,
    "HP": 33160473,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 400,
    "HP": 34839222,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 405,
    "HP": 36602956,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 410,
    "HP": 38455980,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 415,
    "HP": 40402813,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 420,
    "HP": 42448204,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 425,
    "HP": 44597144,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 46854873,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 49226900,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 450,
    "HP": 51719011,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 455,
    "HP": 54337285,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 57088108,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 465,
    "HP": 59978192,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 63014587,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 66204698,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 69556310,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 73077597,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 76777149,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 80663991,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 84747604,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7500
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 89037951,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 93545497,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7800
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 98281237,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 103256722,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }],
  "DrakulPylon": [{
    "material": {
      "type": "electrumBar",
      "amount": 75
    },
    "time": 60,
    "levelRequired": 1,
    "HP": 7340,
    "XP": 1,
    "AP": 178,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 208
    },
    "time": 450,
    "levelRequired": 1,
    "HP": 9075,
    "XP": 13,
    "AP": 247,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 150
    },
    "time": 1920,
    "levelRequired": 1,
    "HP": 10774,
    "XP": 60,
    "AP": 348,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 3952,
    "levelRequired": 1,
    "HP": 12581,
    "XP": 140,
    "AP": 473,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 225
    },
    "time": 9094,
    "levelRequired": 1,
    "HP": 14967,
    "XP": 240,
    "AP": 643,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 14580,
    "levelRequired": 7,
    "HP": 17728,
    "XP": 405,
    "AP": 872,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 300
    },
    "time": 23040,
    "levelRequired": 7,
    "HP": 20886,
    "XP": 600,
    "AP": 1177,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 28800,
    "levelRequired": 12,
    "HP": 24479,
    "XP": 600,
    "AP": 1583,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 450
    },
    "time": 35100,
    "levelRequired": 12,
    "HP": 28544,
    "XP": 750,
    "AP": 1873,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 41559,
    "levelRequired": 17,
    "HP": 32063,
    "XP": 912,
    "AP": 2104,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 600
    },
    "time": 51896,
    "levelRequired": 17,
    "HP": 35873,
    "XP": 936,
    "AP": 2354,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 66355,
    "levelRequired": 21,
    "HP": 39975,
    "XP": 1280,
    "AP": 2622,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 750
    },
    "time": 103561,
    "levelRequired": 21,
    "HP": 44501,
    "XP": 1644,
    "AP": 2919,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 137915,
    "levelRequired": 28,
    "HP": 49540,
    "XP": 1691,
    "AP": 3249,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 900
    },
    "time": 177093,
    "levelRequired": 28,
    "HP": 55151,
    "XP": 2087,
    "AP": 3616,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 219927,
    "levelRequired": 31,
    "HP": 61396,
    "XP": 2546,
    "AP": 4025,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1050
    },
    "time": 297600,
    "levelRequired": 31,
    "HP": 68349,
    "XP": 3048,
    "AP": 4481,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 345600,
    "levelRequired": 37,
    "HP": 76090,
    "XP": 4000,
    "AP": 4989,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1200
    },
    "time": 388800,
    "levelRequired": 37,
    "HP": 89377,
    "XP": 5334,
    "AP": 5859,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 104982,
    "XP": 7000,
    "AP": 6882,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1350
    },
    "time": 518400,
    "levelRequired": 46,
    "HP": 123314,
    "XP": 9143,
    "AP": 8083,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 144846,
    "XP": 12000,
    "AP": 9494,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1500
    },
    "time": 691200,
    "levelRequired": 56,
    "HP": 170138,
    "XP": 16000,
    "AP": 11151,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 199848,
    "XP": 17600,
    "AP": 13097,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1650
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 234747,
    "XP": 19200,
    "AP": 15384,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 290936,
    "XP": 20800,
    "AP": 19064,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1800
    },
    "time": 1080000,
    "levelRequired": 73,
    "HP": 360575,
    "XP": 24000,
    "AP": 23626,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 421736,
    "XP": 25600,
    "AP": 27633,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 1950
    },
    "time": 1224000,
    "levelRequired": 85,
    "HP": 465514,
    "XP": 27200,
    "AP": 30501,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 513838,
    "XP": 30400,
    "AP": 33666,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2100
    },
    "time": 1370990,
    "levelRequired": 94,
    "HP": 567178,
    "XP": 32000,
    "AP": 37160,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 626058,
    "XP": 33600,
    "AP": 41017,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2250
    },
    "time": 1566720,
    "levelRequired": 106,
    "HP": 691048,
    "XP": 33600,
    "AP": 45275,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 762785,
    "XP": 33600,
    "AP": 49974,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2400
    },
    "time": 1762560,
    "levelRequired": 118,
    "HP": 841968,
    "XP": 33600,
    "AP": 55160,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 929374,
    "XP": 33600,
    "AP": 60886,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2550
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 1025854,
    "XP": 33600,
    "AP": 67205,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1132348,
    "XP": 33600,
    "AP": 74181,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2700
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1249899,
    "XP": 33600,
    "AP": 81881,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1379651,
    "XP": 33600,
    "AP": 90380,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 2850
    },
    "time": 2290604,
    "levelRequired": 151,
    "HP": 1522874,
    "XP": 35349,
    "AP": 99762,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1680966,
    "XP": 42345,
    "AP": 110117,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3000
    },
    "time": 3197201,
    "levelRequired": 163,
    "HP": 1855469,
    "XP": 49340,
    "AP": 121547,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 2048088,
    "XP": 56335,
    "AP": 134164,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3150
    },
    "time": 4103799,
    "levelRequired": 175,
    "HP": 2260702,
    "XP": 63331,
    "AP": 137786,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2495388,
    "XP": 70326,
    "AP": 141507,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3300
    },
    "time": 4314507,
    "levelRequired": 187,
    "HP": 2754439,
    "XP": 77321,
    "AP": 145327,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 3040383,
    "XP": 84317,
    "AP": 149251,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3450
    },
    "time": 4602106,
    "levelRequired": 196,
    "HP": 3356012,
    "XP": 91312,
    "AP": 153281,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3704405,
    "XP": 98307,
    "AP": 157419,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3600
    },
    "time": 5000000,
    "levelRequired": 208,
    "HP": 4088968,
    "XP": 101805,
    "AP": 167031,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4513453,
    "XP": 105303,
    "AP": 176642,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3750
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4982005,
    "XP": 106000,
    "AP": 186254,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5499199,
    "XP": 106000,
    "AP": 195865,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 3900
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 6070084,
    "XP": 106000,
    "AP": 205477,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 6700234,
    "XP": 106000,
    "AP": 217171,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4050
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 7395803,
    "XP": 106000,
    "AP": 239716,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 8163578,
    "XP": 106000,
    "AP": 264601,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4200
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 9011061,
    "XP": 106000,
    "AP": 292069,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 9946521,
    "XP": 106000,
    "AP": 322390,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4350
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10450064,
    "XP": 106000,
    "AP": 338711,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10979097,
    "XP": 106000,
    "AP": 355858,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4500
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11534911,
    "XP": 106000,
    "AP": 373873,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12118863,
    "XP": 106000,
    "AP": 392800,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4650
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12732380,
    "XP": 106000,
    "AP": 412685,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13376955,
    "XP": 106000,
    "AP": 433577,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4800
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14054161,
    "XP": 106000,
    "AP": 455526,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14765652,
    "XP": 106000,
    "AP": 478587,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 4950
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15513162,
    "XP": 106000,
    "AP": 502816,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16298513,
    "XP": 106000,
    "AP": 528270,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5100
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 17123623,
    "XP": 106000,
    "AP": 555014,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 17990505,
    "XP": 106000,
    "AP": 583111,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5250
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18901273,
    "XP": 106000,
    "AP": 612631,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 19858148,
    "XP": 106000,
    "AP": 643646,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5400
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 20863466,
    "XP": 106000,
    "AP": 676230,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 22358071,
    "XP": 106000,
    "AP": 724673,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5550
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 24549297,
    "XP": 106000,
    "AP": 795695,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 26288105,
    "XP": 106000,
    "AP": 852053,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5700
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 28140049,
    "XP": 106000,
    "AP": 912078,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 30864934,
    "XP": 106000,
    "AP": 1000397,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 5850
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 33017058,
    "XP": 106000,
    "AP": 1070152,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 35307983,
    "XP": 106000,
    "AP": 1144405,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6000
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 37746245,
    "XP": 106000,
    "AP": 1223435,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 40340891,
    "XP": 106000,
    "AP": 1307532,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6150
    },
    "time": 5000000,
    "levelRequired": 380,
    "HP": 43101506,
    "XP": 106000,
    "AP": 1397009,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 45283518,
    "XP": 106000,
    "AP": 1467732,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6300
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 47575993,
    "XP": 106000,
    "AP": 1542035,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 49984528,
    "XP": 106000,
    "AP": 1620101,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6450
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 52514993,
    "XP": 106000,
    "AP": 1702117,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 55173563,
    "XP": 106000,
    "AP": 1788287,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6600
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 57966722,
    "XP": 106000,
    "AP": 1878818,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 60901286,
    "XP": 106000,
    "AP": 1973933,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6750
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 63984414,
    "XP": 106000,
    "AP": 2073863,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 67223623,
    "XP": 106000,
    "AP": 2178852,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 6900
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 70626817,
    "XP": 106000,
    "AP": 2289156,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 74202299,
    "XP": 106000,
    "AP": 2405045,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7050
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 77958788,
    "XP": 106000,
    "AP": 2526799,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 81905450,
    "XP": 106000,
    "AP": 2654718,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 86051911,
    "XP": 106000,
    "AP": 2789113,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 90408287,
    "XP": 106000,
    "AP": 2930312,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7350
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 94985204,
    "XP": 106000,
    "AP": 3078659,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 99793829,
    "XP": 106000,
    "AP": 3234516,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7500
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 104845890,
    "XP": 106000,
    "AP": 3398263,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 110153712,
    "XP": 106000,
    "AP": 3570299,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7650
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 115730240,
    "XP": 106000,
    "AP": 3751045,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160673
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 121589082,
    "XP": 106000,
    "AP": 3940942,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7800
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 127744529,
    "XP": 106000,
    "AP": 4140452,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160673
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 134211594,
    "XP": 106000,
    "AP": 4350061,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "electrumBar",
      "amount": 7950
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 141006055,
    "XP": 106000,
    "AP": 4570283,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160673
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 148144484,
    "XP": 106000,
    "AP": 4801654,
    "requiredBuilder": 54
  }],
  "CannonTower": [{
    "material": {
      "type": "wood",
      "amount": 5
    },
    "time": 60,
    "levelRequired": 1,
    "HP": 5500,
    "XP": 1,
    "AP": 517,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 9
    },
    "time": 60,
    "levelRequired": 1,
    "HP": 6534,
    "XP": 13,
    "AP": 614,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 46
    },
    "time": 600,
    "levelRequired": 1,
    "HP": 7854,
    "XP": 60,
    "AP": 782,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 187
    },
    "time": 2400,
    "levelRequired": 1,
    "HP": 9419,
    "XP": 140,
    "AP": 1082,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 543
    },
    "time": 9094,
    "levelRequired": 1,
    "HP": 10979,
    "XP": 240,
    "AP": 1498,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1008
    },
    "time": 14580,
    "levelRequired": 1,
    "HP": 13072,
    "XP": 405,
    "AP": 2036,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1637
    },
    "time": 23040,
    "levelRequired": 7,
    "HP": 15525,
    "XP": 600,
    "AP": 2766,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 2396
    },
    "time": 28800,
    "levelRequired": 7,
    "HP": 18339,
    "XP": 600,
    "AP": 3742,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3938
    },
    "time": 35100,
    "levelRequired": 12,
    "HP": 21549,
    "XP": 750,
    "AP": 5043,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 5356
    },
    "time": 41559,
    "levelRequired": 17,
    "HP": 25191,
    "XP": 912,
    "AP": 6517,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 7336
    },
    "time": 51896,
    "levelRequired": 17,
    "HP": 28826,
    "XP": 936,
    "AP": 7334,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 11306
    },
    "time": 66355,
    "levelRequired": 17,
    "HP": 32316,
    "XP": 1280,
    "AP": 8221,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 18051
    },
    "time": 103561,
    "levelRequired": 21,
    "HP": 36083,
    "XP": 1644,
    "AP": 9178,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 26433
    },
    "time": 137915,
    "levelRequired": 25,
    "HP": 40169,
    "XP": 1691,
    "AP": 10216,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 36694
    },
    "time": 177093,
    "levelRequired": 28,
    "HP": 44718,
    "XP": 2087,
    "AP": 11372,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 66748
    },
    "time": 219927,
    "levelRequired": 31,
    "HP": 52525,
    "XP": 2546,
    "AP": 13354,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 103025
    },
    "time": 297600,
    "levelRequired": 40,
    "HP": 61695,
    "XP": 3048,
    "AP": 15683,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 118279
    },
    "time": 345600,
    "levelRequired": 42,
    "HP": 72467,
    "XP": 4000,
    "AP": 18421,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "wood",
      "amount": 129598
    },
    "time": 388800,
    "levelRequired": 42,
    "HP": 85121,
    "XP": 5334,
    "AP": 21636,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 99983,
    "XP": 7000,
    "AP": 25412,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "wood",
      "amount": 187199
    },
    "time": 518400,
    "levelRequired": 50,
    "HP": 117442,
    "XP": 9143,
    "AP": 29847,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 137949,
    "XP": 12000,
    "AP": 35056,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "wood",
      "amount": 251999
    },
    "time": 691200,
    "levelRequired": 61,
    "HP": 162037,
    "XP": 16000,
    "AP": 41175,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 190332,
    "XP": 17600,
    "AP": 48363,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "wood",
      "amount": 299904
    },
    "time": 864000,
    "levelRequired": 67,
    "HP": 223569,
    "XP": 19200,
    "AP": 56806,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 277082,
    "XP": 20800,
    "AP": 70397,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "wood",
      "amount": 381696
    },
    "time": 1080000,
    "levelRequired": 79,
    "HP": 343405,
    "XP": 24000,
    "AP": 87244,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 401654,
    "XP": 25600,
    "AP": 102040,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 463488
    },
    "time": 1224000,
    "levelRequired": 91,
    "HP": 443347,
    "XP": 27200,
    "AP": 112629,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 489370,
    "XP": 30400,
    "AP": 124319,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 545280
    },
    "time": 1370990,
    "levelRequired": 100,
    "HP": 540170,
    "XP": 32000,
    "AP": 137220,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 596246,
    "XP": 33600,
    "AP": 151461,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 627072
    },
    "time": 1566720,
    "levelRequired": 112,
    "HP": 658141,
    "XP": 33600,
    "AP": 167183,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 726462,
    "XP": 33600,
    "AP": 184535,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 708864
    },
    "time": 1762560,
    "levelRequired": 124,
    "HP": 801875,
    "XP": 33600,
    "AP": 203687,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 885119,
    "XP": 33600,
    "AP": 224829,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 790656
    },
    "time": 1762560,
    "levelRequired": 136,
    "HP": 977004,
    "XP": 33600,
    "AP": 248166,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1078427,
    "XP": 33600,
    "AP": 273923,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 872448
    },
    "time": 1762560,
    "levelRequired": 145,
    "HP": 1190380,
    "XP": 33600,
    "AP": 302358,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1313954,
    "XP": 33600,
    "AP": 333742,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 954240
    },
    "time": 2290604,
    "levelRequired": 157,
    "HP": 1450357,
    "XP": 35349,
    "AP": 368384,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1600920,
    "XP": 42345,
    "AP": 406622,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1036032
    },
    "time": 3197201,
    "levelRequired": 169,
    "HP": 1767114,
    "XP": 49340,
    "AP": 448829,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 1950560,
    "XP": 56335,
    "AP": 495420,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1117824
    },
    "time": 4103799,
    "levelRequired": 181,
    "HP": 2153050,
    "XP": 63331,
    "AP": 546846,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2376560,
    "XP": 70326,
    "AP": 603612,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1199616
    },
    "time": 4314507,
    "levelRequired": 193,
    "HP": 2623276,
    "XP": 77321,
    "AP": 666270,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 2895603,
    "XP": 84317,
    "AP": 735432,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1281408
    },
    "time": 4602106,
    "levelRequired": 202,
    "HP": 3196202,
    "XP": 91312,
    "AP": 811776,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3528005,
    "XP": 98307,
    "AP": 896045,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1342752
    },
    "time": 5000000,
    "levelRequired": 211,
    "HP": 3894256,
    "XP": 101805,
    "AP": 989064,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4298527,
    "XP": 105303,
    "AP": 1091737,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1383648
    },
    "time": 5000000,
    "levelRequired": 217,
    "HP": 4744767,
    "XP": 106000,
    "AP": 1205070,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5237333,
    "XP": 106000,
    "AP": 1330170,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 1424544
    },
    "time": 5000000,
    "levelRequired": 223,
    "HP": 5781033,
    "XP": 106000,
    "AP": 1468257,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 6381176,
    "XP": 106000,
    "AP": 1620679,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1465440
    },
    "time": 5000000,
    "levelRequired": 229,
    "HP": 7043622,
    "XP": 106000,
    "AP": 1788925,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 7774837,
    "XP": 106000,
    "AP": 1974633,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1506336
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 8581963,
    "XP": 106000,
    "AP": 2179623,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 9472878,
    "XP": 106000,
    "AP": 2405894,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "wood",
      "amount": 1751712
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9952442,
    "XP": 106000,
    "AP": 2527691,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10456283,
    "XP": 106000,
    "AP": 2655654,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1792608
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10985630,
    "XP": 106000,
    "AP": 2790094,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11541775,
    "XP": 106000,
    "AP": 2931341,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1833504
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12126077,
    "XP": 106000,
    "AP": 3079737,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12739958,
    "XP": 106000,
    "AP": 3235647,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1874400
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13384916,
    "XP": 106000,
    "AP": 3399451,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14062526,
    "XP": 106000,
    "AP": 3571547,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1915296
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14774440,
    "XP": 106000,
    "AP": 3752356,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15522394,
    "XP": 106000,
    "AP": 3942317,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1956192
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16308213,
    "XP": 106000,
    "AP": 4141896,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 17133815,
    "XP": 106000,
    "AP": 4351578,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1997088
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18001213,
    "XP": 106000,
    "AP": 4571875,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18912522,
    "XP": 106000,
    "AP": 4803325,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2037984
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 19869968,
    "XP": 106000,
    "AP": 5046491,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 21293401,
    "XP": 106000,
    "AP": 5408006,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2089104
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 23380283,
    "XP": 106000,
    "AP": 5938020,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 25036291,
    "XP": 106000,
    "AP": 6358605,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2130000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 26800048,
    "XP": 106000,
    "AP": 6806555,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 29395176,
    "XP": 106000,
    "AP": 7465651,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 31444818,
    "XP": 106000,
    "AP": 7986207,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 33626651,
    "XP": 106000,
    "AP": 8540337,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 35948805,
    "XP": 106000,
    "AP": 9130105,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 38419897,
    "XP": 106000,
    "AP": 9757697,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 41049054,
    "XP": 106000,
    "AP": 10425436,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 43127160,
    "XP": 106000,
    "AP": 10953220,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 45310470,
    "XP": 106000,
    "AP": 11507725,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 47604312,
    "XP": 106000,
    "AP": 12090301,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 50014279,
    "XP": 106000,
    "AP": 12702370,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 52546250,
    "XP": 106000,
    "AP": 13345424,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 55206403,
    "XP": 106000,
    "AP": 14021034,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 58001226,
    "XP": 106000,
    "AP": 14730846,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 60937537,
    "XP": 106000,
    "AP": 15476592,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 64022498,
    "XP": 106000,
    "AP": 16260091,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 67263636,
    "XP": 106000,
    "AP": 17083256,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 70668857,
    "XP": 106000,
    "AP": 17948093,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 74246466,
    "XP": 106000,
    "AP": 18856714,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 78005191,
    "XP": 106000,
    "AP": 19811333,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 81954202,
    "XP": 106000,
    "AP": 20814280,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 86103131,
    "XP": 106000,
    "AP": 21868000,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 90462100,
    "XP": 106000,
    "AP": 22975064,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 95041742,
    "XP": 106000,
    "AP": 24138175,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 99853229,
    "XP": 106000,
    "AP": 25360169,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 104908297,
    "XP": 106000,
    "AP": 26644025,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 110219278,
    "XP": 106000,
    "AP": 27992876,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 115799126,
    "XP": 106000,
    "AP": 29410013,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 121661456,
    "XP": 106000,
    "AP": 30898895,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 127820567,
    "XP": 106000,
    "AP": 32463148,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 134291482,
    "XP": 106000,
    "AP": 34106592,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 141089986,
    "XP": 106000,
    "AP": 35833236,
    "requiredBuilder": 54
  }],
  "Ballista": [{
    "material": {
      "type": "wood",
      "amount": 12
    },
    "time": 990,
    "levelRequired": 1,
    "HP": 6991,
    "XP": 28,
    "AP": 101,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 208
    },
    "time": 3510,
    "levelRequired": 1,
    "HP": 8643,
    "XP": 98,
    "AP": 140,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 463
    },
    "time": 7200,
    "levelRequired": 1,
    "HP": 10261,
    "XP": 225,
    "AP": 198,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 10800,
    "levelRequired": 1,
    "HP": 11982,
    "XP": 383,
    "AP": 269,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1463
    },
    "time": 16200,
    "levelRequired": 1,
    "HP": 14255,
    "XP": 428,
    "AP": 366,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 21600,
    "levelRequired": 7,
    "HP": 16884,
    "XP": 600,
    "AP": 496,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 2698
    },
    "time": 28800,
    "levelRequired": 12,
    "HP": 19892,
    "XP": 750,
    "AP": 670,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 36000,
    "levelRequired": 12,
    "HP": 23314,
    "XP": 750,
    "AP": 901,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 5703
    },
    "time": 43200,
    "levelRequired": 17,
    "HP": 27185,
    "XP": 924,
    "AP": 1066,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 57600,
    "levelRequired": 17,
    "HP": 30537,
    "XP": 1264,
    "AP": 1197,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 12869
    },
    "time": 72000,
    "levelRequired": 21,
    "HP": 34165,
    "XP": 1298,
    "AP": 1339,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 86400,
    "levelRequired": 21,
    "HP": 38072,
    "XP": 1667,
    "AP": 1492,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 26927
    },
    "time": 129600,
    "levelRequired": 25,
    "HP": 42382,
    "XP": 2058,
    "AP": 1661,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 172800,
    "levelRequired": 28,
    "HP": 47181,
    "XP": 2118,
    "AP": 1849,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 51677
    },
    "time": 216000,
    "levelRequired": 31,
    "HP": 52525,
    "XP": 2546,
    "AP": 2058,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 259200,
    "levelRequired": 31,
    "HP": 58473,
    "XP": 3000,
    "AP": 2291,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 77039
    },
    "time": 302400,
    "levelRequired": 34,
    "HP": 65095,
    "XP": 3097,
    "AP": 2550,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 345600,
    "levelRequired": 37,
    "HP": 72467,
    "XP": 4000,
    "AP": 2839,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "wood",
      "amount": 129598
    },
    "time": 388800,
    "levelRequired": 42,
    "HP": 85121,
    "XP": 5334,
    "AP": 3334,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 99983,
    "XP": 7000,
    "AP": 3916,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "wood",
      "amount": 187199
    },
    "time": 518400,
    "levelRequired": 50,
    "HP": 117442,
    "XP": 9143,
    "AP": 4599,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 137949,
    "XP": 12000,
    "AP": 5402,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "wood",
      "amount": 251999
    },
    "time": 691200,
    "levelRequired": 61,
    "HP": 162037,
    "XP": 16000,
    "AP": 6345,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 190332,
    "XP": 17600,
    "AP": 7453,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "wood",
      "amount": 299904
    },
    "time": 864000,
    "levelRequired": 67,
    "HP": 223569,
    "XP": 19200,
    "AP": 8754,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 277082,
    "XP": 20800,
    "AP": 10848,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "wood",
      "amount": 381696
    },
    "time": 1080000,
    "levelRequired": 79,
    "HP": 343405,
    "XP": 24000,
    "AP": 13444,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 401654,
    "XP": 25600,
    "AP": 15724,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 463488
    },
    "time": 1224000,
    "levelRequired": 91,
    "HP": 443347,
    "XP": 27200,
    "AP": 17356,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 489370,
    "XP": 30400,
    "AP": 19157,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 545280
    },
    "time": 1370990,
    "levelRequired": 100,
    "HP": 540170,
    "XP": 32000,
    "AP": 21146,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 596246,
    "XP": 33600,
    "AP": 23340,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 627072
    },
    "time": 1566720,
    "levelRequired": 112,
    "HP": 658141,
    "XP": 33600,
    "AP": 25763,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 726462,
    "XP": 33600,
    "AP": 28437,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 708864
    },
    "time": 1762560,
    "levelRequired": 124,
    "HP": 801875,
    "XP": 33600,
    "AP": 31388,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 885119,
    "XP": 33600,
    "AP": 34646,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 790656
    },
    "time": 1762560,
    "levelRequired": 136,
    "HP": 977004,
    "XP": 33600,
    "AP": 38242,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1078427,
    "XP": 33600,
    "AP": 42212,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 872448
    },
    "time": 1762560,
    "levelRequired": 145,
    "HP": 1190380,
    "XP": 33600,
    "AP": 46593,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1313954,
    "XP": 33600,
    "AP": 51430,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 954240
    },
    "time": 2290604,
    "levelRequired": 157,
    "HP": 1450357,
    "XP": 35349,
    "AP": 56768,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1600920,
    "XP": 42345,
    "AP": 62660,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1036032
    },
    "time": 3197201,
    "levelRequired": 169,
    "HP": 1767114,
    "XP": 49340,
    "AP": 69165,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 1950560,
    "XP": 56335,
    "AP": 76344,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1117824
    },
    "time": 4103799,
    "levelRequired": 181,
    "HP": 2153050,
    "XP": 63331,
    "AP": 84269,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2376560,
    "XP": 70326,
    "AP": 93017,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1199616
    },
    "time": 4314507,
    "levelRequired": 193,
    "HP": 2623276,
    "XP": 77321,
    "AP": 102672,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 2895603,
    "XP": 84317,
    "AP": 113330,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1281408
    },
    "time": 4602106,
    "levelRequired": 202,
    "HP": 3196202,
    "XP": 91312,
    "AP": 125095,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3528005,
    "XP": 98307,
    "AP": 138081,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1342752
    },
    "time": 5000000,
    "levelRequired": 211,
    "HP": 3894256,
    "XP": 101805,
    "AP": 152415,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4298527,
    "XP": 105303,
    "AP": 168237,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1383648
    },
    "time": 5000000,
    "levelRequired": 217,
    "HP": 4863386,
    "XP": 106000,
    "AP": 190344,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5502472,
    "XP": 106000,
    "AP": 215356,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 1424544
    },
    "time": 5000000,
    "levelRequired": 223,
    "HP": 6225538,
    "XP": 106000,
    "AP": 243655,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1455216
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 6381176,
    "XP": 106000,
    "AP": 249747,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1475664
    },
    "time": 5000000,
    "levelRequired": 229,
    "HP": 7043622,
    "XP": 106000,
    "AP": 275673,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1506336
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 7774837,
    "XP": 106000,
    "AP": 304291,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1537008
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 8581963,
    "XP": 106000,
    "AP": 335880,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "wood",
      "amount": 1557456
    },
    "time": 5000000,
    "levelRequired": 246,
    "HP": 9472878,
    "XP": 106000,
    "AP": 370748,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "wood",
      "amount": 1751712
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9952442,
    "XP": 106000,
    "AP": 389517,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10456283,
    "XP": 106000,
    "AP": 409236,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1792608
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10985630,
    "XP": 106000,
    "AP": 429953,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11541775,
    "XP": 106000,
    "AP": 451720,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1833504
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12126077,
    "XP": 106000,
    "AP": 474587,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12739958,
    "XP": 106000,
    "AP": 498613,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1874400
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13384916,
    "XP": 106000,
    "AP": 523855,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14062526,
    "XP": 106000,
    "AP": 550375,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1915296
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14774440,
    "XP": 106000,
    "AP": 578238,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15522394,
    "XP": 106000,
    "AP": 607511,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1956192
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16308213,
    "XP": 106000,
    "AP": 638266,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 17133815,
    "XP": 106000,
    "AP": 670578,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1997088
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18001213,
    "XP": 106000,
    "AP": 704526,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18912522,
    "XP": 106000,
    "AP": 740192,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2037984
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 19869968,
    "XP": 106000,
    "AP": 777664,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 21293401,
    "XP": 106000,
    "AP": 833374,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2089104
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 23380283,
    "XP": 106000,
    "AP": 915049,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 25036291,
    "XP": 106000,
    "AP": 979861,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2130000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 26800048,
    "XP": 106000,
    "AP": 1048891,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 29395176,
    "XP": 106000,
    "AP": 1150457,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 31444818,
    "XP": 106000,
    "AP": 1230675,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 33626651,
    "XP": 106000,
    "AP": 1316066,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 35948805,
    "XP": 106000,
    "AP": 1406949,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 38419897,
    "XP": 106000,
    "AP": 1503661,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 41049054,
    "XP": 106000,
    "AP": 1606560,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 43127160,
    "XP": 106000,
    "AP": 1687891,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 45310470,
    "XP": 106000,
    "AP": 1773341,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 47604312,
    "XP": 106000,
    "AP": 1863115,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 50014279,
    "XP": 106000,
    "AP": 1957435,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 52546250,
    "XP": 106000,
    "AP": 2056530,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 55206403,
    "XP": 106000,
    "AP": 2160641,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 58001226,
    "XP": 106000,
    "AP": 2270023,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 60937537,
    "XP": 106000,
    "AP": 2384942,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 64022498,
    "XP": 106000,
    "AP": 2505680,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 67263636,
    "XP": 106000,
    "AP": 2632530,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 70668857,
    "XP": 106000,
    "AP": 2765801,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 74246466,
    "XP": 106000,
    "AP": 2905819,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 78005191,
    "XP": 106000,
    "AP": 3052926,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 81954202,
    "XP": 106000,
    "AP": 3207480,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 86103131,
    "XP": 106000,
    "AP": 3369859,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 90462100,
    "XP": 106000,
    "AP": 3540457,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 95041742,
    "XP": 106000,
    "AP": 3719693,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 99853229,
    "XP": 106000,
    "AP": 3908002,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 104908297,
    "XP": 106000,
    "AP": 4105844,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 110219278,
    "XP": 106000,
    "AP": 4313702,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 115799126,
    "XP": 106000,
    "AP": 4532083,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 121661456,
    "XP": 106000,
    "AP": 4761520,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 127820567,
    "XP": 106000,
    "AP": 5002571,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 134291482,
    "XP": 106000,
    "AP": 5255826,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 141089986,
    "XP": 106000,
    "AP": 5521902,
    "requiredBuilder": 54
  }],
  "DragonPerch06": [{
    "material": {
      "type": "wood",
      "amount": 0
    },
    "time": 3,
    "levelRequired": 0,
    "HP": 1000,
    "XP": 0,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2000
    },
    "time": 1500,
    "levelRequired": 1,
    "HP": 6600,
    "XP": 28,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 208
    },
    "time": 13500,
    "levelRequired": 1,
    "HP": 7840,
    "XP": 98,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 200
    },
    "time": 32400,
    "levelRequired": 1,
    "HP": 8976,
    "XP": 225,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 55440,
    "levelRequired": 1,
    "HP": 10275,
    "XP": 383,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 300
    },
    "time": 95040,
    "levelRequired": 1,
    "HP": 11763,
    "XP": 428,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 116640,
    "levelRequired": 7,
    "HP": 13467,
    "XP": 600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 400
    },
    "time": 151200,
    "levelRequired": 7,
    "HP": 15402,
    "XP": 750,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 151200,
    "levelRequired": 12,
    "HP": 17544,
    "XP": 750,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 500
    },
    "time": 162000,
    "levelRequired": 12,
    "HP": 19904,
    "XP": 924,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 164050,
    "levelRequired": 17,
    "HP": 22492,
    "XP": 1264,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 600
    },
    "time": 168311,
    "levelRequired": 17,
    "HP": 25316,
    "XP": 1298,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 184320,
    "levelRequired": 21,
    "HP": 28381,
    "XP": 1667,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 700
    },
    "time": 207123,
    "levelRequired": 21,
    "HP": 31689,
    "XP": 2058,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 212957,
    "levelRequired": 28,
    "HP": 35277,
    "XP": 2118,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 800
    },
    "time": 247930,
    "levelRequired": 28,
    "HP": 39272,
    "XP": 2546,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 307898,
    "levelRequired": 31,
    "HP": 46129,
    "XP": 3000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 900
    },
    "time": 416640,
    "levelRequired": 31,
    "HP": 54182,
    "XP": 3097,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 483840,
    "levelRequired": 37,
    "HP": 63642,
    "XP": 4000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1000
    },
    "time": 544320,
    "levelRequired": 37,
    "HP": 74755,
    "XP": 5334,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 604800,
    "levelRequired": 46,
    "HP": 87807,
    "XP": 7000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1100
    },
    "time": 725760,
    "levelRequired": 46,
    "HP": 103140,
    "XP": 9143,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 846720,
    "levelRequired": 56,
    "HP": 121149,
    "XP": 12000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1200
    },
    "time": 967680,
    "levelRequired": 56,
    "HP": 142304,
    "XP": 16000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 1209600,
    "levelRequired": 64,
    "HP": 167154,
    "XP": 17600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1300
    },
    "time": 1209600,
    "levelRequired": 64,
    "HP": 196342,
    "XP": 19200,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 1310400,
    "levelRequired": 73,
    "HP": 243339,
    "XP": 20800,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1400
    },
    "time": 1512000,
    "levelRequired": 73,
    "HP": 301585,
    "XP": 24000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1612800,
    "levelRequired": 85,
    "HP": 352741,
    "XP": 25600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1600
    },
    "time": 1713600,
    "levelRequired": 85,
    "HP": 389356,
    "XP": 27200,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1915200,
    "levelRequired": 94,
    "HP": 429775,
    "XP": 30400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 1800
    },
    "time": 2257920,
    "levelRequired": 94,
    "HP": 474388,
    "XP": 32000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 2540160,
    "levelRequired": 106,
    "HP": 523635,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2000
    },
    "time": 2709504,
    "levelRequired": 106,
    "HP": 577993,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 2782080,
    "levelRequired": 118,
    "HP": 637994,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2200
    },
    "time": 2854656,
    "levelRequired": 118,
    "HP": 704223,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 2927232,
    "levelRequired": 130,
    "HP": 777330,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2400
    },
    "time": 2999808,
    "levelRequired": 130,
    "HP": 858025,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 3072384,
    "levelRequired": 142,
    "HP": 947096,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2600
    },
    "time": 3144960,
    "levelRequired": 142,
    "HP": 1045416,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 3217536,
    "levelRequired": 151,
    "HP": 1153941,
    "XP": 33600,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 2800
    },
    "time": 3308651,
    "levelRequired": 151,
    "HP": 1273732,
    "XP": 35349,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 3506098,
    "levelRequired": 163,
    "HP": 1405960,
    "XP": 42345,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3000
    },
    "time": 3907691,
    "levelRequired": 163,
    "HP": 1551915,
    "XP": 49340,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 4258917,
    "levelRequired": 175,
    "HP": 1713021,
    "XP": 56335,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3200
    },
    "time": 4331787,
    "levelRequired": 175,
    "HP": 1890852,
    "XP": 56335,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4354559,
    "levelRequired": 187,
    "HP": 2087143,
    "XP": 70326,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3400
    },
    "time": 4370178,
    "levelRequired": 187,
    "HP": 2303814,
    "XP": 77321,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4370955,
    "levelRequired": 196,
    "HP": 2542977,
    "XP": 84317,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3600
    },
    "time": 4602106,
    "levelRequired": 196,
    "HP": 2806969,
    "XP": 91312,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3098365,
    "XP": 98307,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 3800
    },
    "time": 5000000,
    "levelRequired": 208,
    "HP": 3255219,
    "XP": 101805,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 3420014,
    "XP": 105303,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4000
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 3593151,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 3775053,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4200
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 3966164,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 4166950,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4400
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 4377901,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 4599531,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4600
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 4832382,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 5077020,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 4800
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 5604078,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1608576
    },
    "time": 5000000,
    "levelRequired": 274,
    "HP": 6185851,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5000
    },
    "time": 5000000,
    "levelRequired": 274,
    "HP": 6828019,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1690368
    },
    "time": 5000000,
    "levelRequired": 281,
    "HP": 7536853,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5200
    },
    "time": 5000000,
    "levelRequired": 281,
    "HP": 8319272,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 9182918,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5400
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 10136220,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 11188488,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5600
    },
    "time": 5000000,
    "levelRequired": 288,
    "HP": 12349994,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 296,
    "HP": 13632079,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5601
    },
    "time": 5000000,
    "levelRequired": 296,
    "HP": 14322201,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 304,
    "HP": 15047262,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5602
    },
    "time": 5000000,
    "levelRequired": 304,
    "HP": 15809028,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 304,
    "HP": 16609358,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 5603
    },
    "time": 5000000,
    "levelRequired": 312,
    "HP": 17450206,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 18333621,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 6400
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 19743303,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 20742806,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 6600
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 21792909,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 23468577,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 6800
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 24656672,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 25904914,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7000
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 27216349,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 28594176,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 30041755,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 390,
    "HP": 31562617,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 395,
    "HP": 33160473,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 400,
    "HP": 34839222,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 405,
    "HP": 36602956,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 410,
    "HP": 38455980,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 415,
    "HP": 40402813,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 420,
    "HP": 42448204,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 425,
    "HP": 44597144,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 46854873,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 49226900,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 450,
    "HP": 51719011,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 455,
    "HP": 54337285,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 57088108,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 465,
    "HP": 59978192,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 63014587,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 66204698,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 69556310,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 73077597,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 76777149,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7200
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 80663991,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 84747604,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7500
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 89037951,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 93545497,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "blackPearl",
      "amount": 7800
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 98281237,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 103256722,
    "XP": 106000,
    "AP": 0,
    "requiredBuilder": 0
  }],
  "LumberMill": [{
    "material": {
      "type": "food",
      "amount": 28
    },
    "time": 3,
    "levelRequired": 1,
    "HP": 6482,
    "XP": 17,
    "AP": 0,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "food",
      "amount": 144
    },
    "time": 900,
    "levelRequired": 1,
    "HP": 8986,
    "XP": 2,
    "AP": 0,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "food",
      "amount": 966
    },
    "time": 5832,
    "levelRequired": 1,
    "HP": 14919,
    "XP": 9,
    "AP": 0,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "food",
      "amount": 2304
    },
    "time": 11108,
    "levelRequired": 7,
    "HP": 21620,
    "XP": 16,
    "AP": 0,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "food",
      "amount": 5376
    },
    "time": 17280,
    "levelRequired": 17,
    "HP": 27062,
    "XP": 24,
    "AP": 0,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "food",
      "amount": 8295
    },
    "time": 18514,
    "levelRequired": 17,
    "HP": 33538,
    "XP": 26,
    "AP": 0,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "food",
      "amount": 12365
    },
    "time": 24000,
    "levelRequired": 21,
    "HP": 41564,
    "XP": 34,
    "AP": 0,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "food",
      "amount": 21504
    },
    "time": 30052,
    "levelRequired": 25,
    "HP": 51511,
    "XP": 42,
    "AP": 0,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "food",
      "amount": 26112
    },
    "time": 48137,
    "levelRequired": 25,
    "HP": 60506,
    "XP": 67,
    "AP": 0,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "food",
      "amount": 30720
    },
    "time": 47265,
    "levelRequired": 25,
    "HP": 71070,
    "XP": 66,
    "AP": 0,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "food",
      "amount": 35328
    },
    "time": 58320,
    "levelRequired": 28,
    "HP": 79120,
    "XP": 81,
    "AP": 0,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "food",
      "amount": 39936
    },
    "time": 56347,
    "levelRequired": 28,
    "HP": 88081,
    "XP": 79,
    "AP": 0,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "food",
      "amount": 44544
    },
    "time": 54830,
    "levelRequired": 28,
    "HP": 98057,
    "XP": 77,
    "AP": 0,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "food",
      "amount": 49152
    },
    "time": 53627,
    "levelRequired": 31,
    "HP": 109163,
    "XP": 75,
    "AP": 0,
    "requiredBuilder": 12
  }, {
    "material": {
      "type": "food",
      "amount": 53760
    },
    "time": 52650,
    "levelRequired": 31,
    "HP": 121527,
    "XP": 74,
    "AP": 0,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "food",
      "amount": 58368
    },
    "time": 51840,
    "levelRequired": 31,
    "HP": 135293,
    "XP": 72,
    "AP": 0,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "food",
      "amount": 62976
    },
    "time": 51157,
    "levelRequired": 31,
    "HP": 150616,
    "XP": 72,
    "AP": 0,
    "requiredBuilder": 15
  }, {
    "material": {
      "type": "food",
      "amount": 67584
    },
    "time": 50575,
    "levelRequired": 34,
    "HP": 167676,
    "XP": 71,
    "AP": 0,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "food",
      "amount": 72192
    },
    "time": 50072,
    "levelRequired": 34,
    "HP": 186669,
    "XP": 70,
    "AP": 0,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "food",
      "amount": 79104
    },
    "time": 74451,
    "levelRequired": 34,
    "HP": 219265,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 18
  }, {
    "material": {
      "type": "food",
      "amount": 86016
    },
    "time": 71720,
    "levelRequired": 37,
    "HP": 257553,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "food",
      "amount": 92928
    },
    "time": 69428,
    "levelRequired": 37,
    "HP": 293894,
    "XP": 97,
    "AP": 0,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "food",
      "amount": 99840
    },
    "time": 67477,
    "levelRequired": 40,
    "HP": 316490,
    "XP": 94,
    "AP": 0,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "food",
      "amount": 109056
    },
    "time": 87729,
    "levelRequired": 40,
    "HP": 349343,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "food",
      "amount": 118272
    },
    "time": 83966,
    "levelRequired": 42,
    "HP": 385607,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "food",
      "amount": 127488
    },
    "time": 80789,
    "levelRequired": 42,
    "HP": 425637,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "food",
      "amount": 136704
    },
    "time": 78072,
    "levelRequired": 44,
    "HP": 469822,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "food",
      "amount": 145920
    },
    "time": 75721,
    "levelRequired": 44,
    "HP": 518593,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "food",
      "amount": 148224
    },
    "time": 73561,
    "levelRequired": 46,
    "HP": 572428,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "food",
      "amount": 150528
    },
    "time": 71401,
    "levelRequired": 46,
    "HP": 631852,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "food",
      "amount": 152832
    },
    "time": 69241,
    "levelRequired": 46,
    "HP": 697446,
    "XP": 97,
    "AP": 0,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "food",
      "amount": 155136
    },
    "time": 67081,
    "levelRequired": 46,
    "HP": 769848,
    "XP": 94,
    "AP": 0,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "food",
      "amount": 192000
    },
    "time": 64921,
    "levelRequired": 52,
    "HP": 849766,
    "XP": 91,
    "AP": 0,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "food",
      "amount": 201216
    },
    "time": 62761,
    "levelRequired": 52,
    "HP": 937980,
    "XP": 88,
    "AP": 0,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "food",
      "amount": 210432
    },
    "time": 60601,
    "levelRequired": 54,
    "HP": 1035354,
    "XP": 85,
    "AP": 0,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "food",
      "amount": 260832
    },
    "time": 64327,
    "levelRequired": 61,
    "HP": 1245670,
    "XP": 90,
    "AP": 0,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "food",
      "amount": 271776
    },
    "time": 63440,
    "levelRequired": 64,
    "HP": 1455985,
    "XP": 89,
    "AP": 0,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "food",
      "amount": 282720
    },
    "time": 62625,
    "levelRequired": 64,
    "HP": 1666301,
    "XP": 87,
    "AP": 0,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "food",
      "amount": 293664
    },
    "time": 61873,
    "levelRequired": 67,
    "HP": 1876617,
    "XP": 86,
    "AP": 0,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "food",
      "amount": 336672
    },
    "time": 61177,
    "levelRequired": 73,
    "HP": 2086933,
    "XP": 85,
    "AP": 0,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "food",
      "amount": 348768
    },
    "time": 60531,
    "levelRequired": 73,
    "HP": 2297248,
    "XP": 85,
    "AP": 0,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "food",
      "amount": 360864
    },
    "time": 59930,
    "levelRequired": 76,
    "HP": 2548107,
    "XP": 84,
    "AP": 0,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "food",
      "amount": 379008
    },
    "time": 89054,
    "levelRequired": 79,
    "HP": 2798965,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "food",
      "amount": 472800
    },
    "time": 86859,
    "levelRequired": 91,
    "HP": 3104612,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "food",
      "amount": 494400
    },
    "time": 84864,
    "levelRequired": 94,
    "HP": 3410259,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "food",
      "amount": 516000
    },
    "time": 83044,
    "levelRequired": 97,
    "HP": 3782661,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "food",
      "amount": 537600
    },
    "time": 81376,
    "levelRequired": 100,
    "HP": 4155063,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "food",
      "amount": 559200
    },
    "time": 79842,
    "levelRequired": 103,
    "HP": 4871574,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "food",
      "amount": 580800
    },
    "time": 78427,
    "levelRequired": 106,
    "HP": 5588085,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "food",
      "amount": 602400
    },
    "time": 77117,
    "levelRequired": 109,
    "HP": 5878141,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "food",
      "amount": 624000
    },
    "time": 77000,
    "levelRequired": 112,
    "HP": 6168197,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "food",
      "amount": 645600
    },
    "time": 77000,
    "levelRequired": 115,
    "HP": 6328281,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "food",
      "amount": 667200
    },
    "time": 77000,
    "levelRequired": 118,
    "HP": 6488365,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "food",
      "amount": 688800
    },
    "time": 77000,
    "levelRequired": 121,
    "HP": 6648449,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "food",
      "amount": 710400
    },
    "time": 77000,
    "levelRequired": 124,
    "HP": 6808533,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "food",
      "amount": 732000
    },
    "time": 77000,
    "levelRequired": 127,
    "HP": 6985235,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "food",
      "amount": 753600
    },
    "time": 77000,
    "levelRequired": 130,
    "HP": 7161938,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "food",
      "amount": 775200
    },
    "time": 77000,
    "levelRequired": 133,
    "HP": 7338640,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "food",
      "amount": 796800
    },
    "time": 77000,
    "levelRequired": 136,
    "HP": 7515343,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "food",
      "amount": 818400
    },
    "time": 77000,
    "levelRequired": 139,
    "HP": 7740803,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "food",
      "amount": 840000
    },
    "time": 77000,
    "levelRequired": 142,
    "HP": 8957197,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "food",
      "amount": 861600
    },
    "time": 77000,
    "levelRequired": 145,
    "HP": 10456283,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "food",
      "amount": 883200
    },
    "time": 77000,
    "levelRequired": 148,
    "HP": 12084193,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "food",
      "amount": 904800
    },
    "time": 77000,
    "levelRequired": 151,
    "HP": 13850130,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "food",
      "amount": 926400
    },
    "time": 77000,
    "levelRequired": 154,
    "HP": 15763900,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "food",
      "amount": 948000
    },
    "time": 77000,
    "levelRequired": 157,
    "HP": 16561945,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "food",
      "amount": 969600
    },
    "time": 77000,
    "levelRequired": 160,
    "HP": 17400390,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "food",
      "amount": 991200
    },
    "time": 77000,
    "levelRequired": 163,
    "HP": 18281283,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "food",
      "amount": 1012800
    },
    "time": 77000,
    "levelRequired": 166,
    "HP": 19206772,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "food",
      "amount": 1034400
    },
    "time": 77000,
    "levelRequired": 169,
    "HP": 20179112,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "food",
      "amount": 1167600
    },
    "time": 77000,
    "levelRequired": 187,
    "HP": 21200676,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "food",
      "amount": 1300800
    },
    "time": 77000,
    "levelRequired": 205,
    "HP": 22273959,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "food",
      "amount": 1434000
    },
    "time": 77000,
    "levelRequired": 223,
    "HP": 23401576,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "food",
      "amount": 1599600
    },
    "time": 77000,
    "levelRequired": 246,
    "HP": 24586278,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "food",
      "amount": 1725600
    },
    "time": 77000,
    "levelRequired": 267,
    "HP": 25830958,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "food",
      "amount": 1851600
    },
    "time": 77000,
    "levelRequired": 281,
    "HP": 27681420,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "food",
      "amount": 1977600
    },
    "time": 77000,
    "levelRequired": 310,
    "HP": 30394367,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "food",
      "amount": 2103600
    },
    "time": 77000,
    "levelRequired": 340,
    "HP": 32547177,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "food",
      "amount": 2229600
    },
    "time": 77000,
    "levelRequired": 370,
    "HP": 34840062,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 390,
    "HP": 38213728,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 418,
    "HP": 40878262,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 434,
    "HP": 43714645,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 442,
    "HP": 46733446,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 442,
    "HP": 49945866,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 442,
    "HP": 53363770,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 450,
    "HP": 56065308,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 455,
    "HP": 58903611,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 460,
    "HP": 61885605,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 465,
    "HP": 65018562,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 470,
    "HP": 68310125,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 472,
    "HP": 71768324,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 474,
    "HP": 75401593,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 476,
    "HP": 79218798,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 478,
    "HP": 83229247,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 480,
    "HP": 87442726,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 482,
    "HP": 91869513,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 484,
    "HP": 96520405,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 486,
    "HP": 101406748,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 488,
    "HP": 106540462,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "food",
      "amount": 2355600
    },
    "time": 77000,
    "levelRequired": 490,
    "HP": 111934070,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "food",
      "amount": 2355601
    },
    "time": 77000,
    "levelRequired": 492,
    "HP": 117600729,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "food",
      "amount": 2355602
    },
    "time": 77000,
    "levelRequired": 494,
    "HP": 123554265,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "food",
      "amount": 2355603
    },
    "time": 77000,
    "levelRequired": 496,
    "HP": 129809197,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "food",
      "amount": 2355604
    },
    "time": 77000,
    "levelRequired": 498,
    "HP": 136380786,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "food",
      "amount": 2355605
    },
    "time": 77000,
    "levelRequired": 500,
    "HP": 143285060,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "food",
      "amount": 2355606
    },
    "time": 77000,
    "levelRequired": 501,
    "HP": 150538864,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "food",
      "amount": 2355607
    },
    "time": 77000,
    "levelRequired": 502,
    "HP": 158159893,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "food",
      "amount": 2355608
    },
    "time": 77000,
    "levelRequired": 503,
    "HP": 166166736,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "food",
      "amount": 2355609
    },
    "time": 77000,
    "levelRequired": 504,
    "HP": 174578926,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "food",
      "amount": 2355610
    },
    "time": 77000,
    "levelRequired": 505,
    "HP": 183416981,
    "XP": 100,
    "AP": 0,
    "requiredBuilder": 54
  }],
  "Research": [{
    "material": {
      "type": "wood",
      "amount": 1
    },
    "time": 2,
    "levelRequired": 0,
    "HP": 100,
    "XP": 1,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 3
    },
    "time": 2,
    "levelRequired": 0,
    "HP": 100,
    "XP": 1,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 1584
    },
    "time": 43200,
    "levelRequired": 5,
    "HP": 100,
    "XP": 60,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 6912
    },
    "time": 92160,
    "levelRequired": 14,
    "HP": 100,
    "XP": 128,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 27936
    },
    "time": 219429,
    "levelRequired": 28,
    "HP": 100,
    "XP": 305,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 70560
    },
    "time": 628364,
    "levelRequired": 40,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 140560
    },
    "time": 1256728,
    "levelRequired": 65,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 239040
    },
    "time": 1256728,
    "levelRequired": 100,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 239040
    },
    "time": 1256728,
    "levelRequired": 100,
    "HP": 130,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 239040
    },
    "time": 1256728,
    "levelRequired": 100,
    "HP": 130,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 239040
    },
    "time": 1256728,
    "levelRequired": 100,
    "HP": 130,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }],
  "MageTower": [{
    "material": {
      "type": "wood",
      "amount": 12
    },
    "time": 990,
    "levelRequired": 1,
    "HP": 6991,
    "XP": 28,
    "AP": 440,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 208
    },
    "time": 3510,
    "levelRequired": 1,
    "HP": 8643,
    "XP": 98,
    "AP": 611,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 463
    },
    "time": 7200,
    "levelRequired": 1,
    "HP": 10261,
    "XP": 225,
    "AP": 861,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 861
    },
    "time": 10800,
    "levelRequired": 1,
    "HP": 11982,
    "XP": 383,
    "AP": 1170,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1463
    },
    "time": 16200,
    "levelRequired": 1,
    "HP": 14255,
    "XP": 428,
    "AP": 1591,
    "requiredBuilder": 1
  }, {
    "material": {
      "type": "wood",
      "amount": 1894
    },
    "time": 21600,
    "levelRequired": 7,
    "HP": 16884,
    "XP": 600,
    "AP": 2156,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 2698
    },
    "time": 28800,
    "levelRequired": 12,
    "HP": 19892,
    "XP": 750,
    "AP": 2912,
    "requiredBuilder": 2
  }, {
    "material": {
      "type": "wood",
      "amount": 3714
    },
    "time": 36000,
    "levelRequired": 12,
    "HP": 23314,
    "XP": 750,
    "AP": 3917,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 5703
    },
    "time": 43200,
    "levelRequired": 17,
    "HP": 27185,
    "XP": 924,
    "AP": 4634,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 8712
    },
    "time": 57600,
    "levelRequired": 17,
    "HP": 30537,
    "XP": 1264,
    "AP": 5205,
    "requiredBuilder": 3
  }, {
    "material": {
      "type": "wood",
      "amount": 12869
    },
    "time": 72000,
    "levelRequired": 21,
    "HP": 34165,
    "XP": 1298,
    "AP": 5823,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 17819
    },
    "time": 86400,
    "levelRequired": 21,
    "HP": 38072,
    "XP": 1667,
    "AP": 6488,
    "requiredBuilder": 4
  }, {
    "material": {
      "type": "wood",
      "amount": 26927
    },
    "time": 129600,
    "levelRequired": 25,
    "HP": 42382,
    "XP": 2058,
    "AP": 7221,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 38115
    },
    "time": 172800,
    "levelRequired": 28,
    "HP": 47181,
    "XP": 2118,
    "AP": 8038,
    "requiredBuilder": 5
  }, {
    "material": {
      "type": "wood",
      "amount": 51677
    },
    "time": 216000,
    "levelRequired": 31,
    "HP": 52525,
    "XP": 2546,
    "AP": 8947,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 57617
    },
    "time": 259200,
    "levelRequired": 31,
    "HP": 58473,
    "XP": 3000,
    "AP": 9959,
    "requiredBuilder": 6
  }, {
    "material": {
      "type": "wood",
      "amount": 77039
    },
    "time": 302400,
    "levelRequired": 34,
    "HP": 65095,
    "XP": 3097,
    "AP": 11087,
    "requiredBuilder": 7
  }, {
    "material": {
      "type": "wood",
      "amount": 86400
    },
    "time": 345600,
    "levelRequired": 37,
    "HP": 72467,
    "XP": 4000,
    "AP": 12342,
    "requiredBuilder": 8
  }, {
    "material": {
      "type": "wood",
      "amount": 129598
    },
    "time": 388800,
    "levelRequired": 42,
    "HP": 85121,
    "XP": 5334,
    "AP": 14496,
    "requiredBuilder": 9
  }, {
    "material": {
      "type": "wood",
      "amount": 154799
    },
    "time": 432000,
    "levelRequired": 46,
    "HP": 99983,
    "XP": 7000,
    "AP": 17026,
    "requiredBuilder": 10
  }, {
    "material": {
      "type": "wood",
      "amount": 187199
    },
    "time": 518400,
    "levelRequired": 50,
    "HP": 117442,
    "XP": 9143,
    "AP": 19998,
    "requiredBuilder": 11
  }, {
    "material": {
      "type": "wood",
      "amount": 219599
    },
    "time": 604800,
    "levelRequired": 56,
    "HP": 137949,
    "XP": 12000,
    "AP": 23488,
    "requiredBuilder": 13
  }, {
    "material": {
      "type": "wood",
      "amount": 251999
    },
    "time": 691200,
    "levelRequired": 61,
    "HP": 162037,
    "XP": 16000,
    "AP": 27587,
    "requiredBuilder": 14
  }, {
    "material": {
      "type": "wood",
      "amount": 269232
    },
    "time": 864000,
    "levelRequired": 64,
    "HP": 190332,
    "XP": 17600,
    "AP": 32403,
    "requiredBuilder": 16
  }, {
    "material": {
      "type": "wood",
      "amount": 299904
    },
    "time": 864000,
    "levelRequired": 67,
    "HP": 223569,
    "XP": 19200,
    "AP": 38060,
    "requiredBuilder": 17
  }, {
    "material": {
      "type": "wood",
      "amount": 340800
    },
    "time": 936000,
    "levelRequired": 73,
    "HP": 277082,
    "XP": 20800,
    "AP": 47166,
    "requiredBuilder": 19
  }, {
    "material": {
      "type": "wood",
      "amount": 381696
    },
    "time": 1080000,
    "levelRequired": 79,
    "HP": 343405,
    "XP": 24000,
    "AP": 58453,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 422592
    },
    "time": 1152000,
    "levelRequired": 85,
    "HP": 401654,
    "XP": 25600,
    "AP": 68367,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 463488
    },
    "time": 1224000,
    "levelRequired": 91,
    "HP": 443347,
    "XP": 27200,
    "AP": 75461,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 504384
    },
    "time": 1224000,
    "levelRequired": 94,
    "HP": 489370,
    "XP": 30400,
    "AP": 83293,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 545280
    },
    "time": 1370990,
    "levelRequired": 100,
    "HP": 540170,
    "XP": 32000,
    "AP": 91937,
    "requiredBuilder": 20
  }, {
    "material": {
      "type": "wood",
      "amount": 586176
    },
    "time": 1468800,
    "levelRequired": 106,
    "HP": 596246,
    "XP": 33600,
    "AP": 101479,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 627072
    },
    "time": 1566720,
    "levelRequired": 112,
    "HP": 658141,
    "XP": 33600,
    "AP": 112012,
    "requiredBuilder": 21
  }, {
    "material": {
      "type": "wood",
      "amount": 667968
    },
    "time": 1664640,
    "levelRequired": 118,
    "HP": 726462,
    "XP": 33600,
    "AP": 123639,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 708864
    },
    "time": 1762560,
    "levelRequired": 124,
    "HP": 801875,
    "XP": 33600,
    "AP": 136470,
    "requiredBuilder": 22
  }, {
    "material": {
      "type": "wood",
      "amount": 749760
    },
    "time": 1762560,
    "levelRequired": 130,
    "HP": 885119,
    "XP": 33600,
    "AP": 150635,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 790656
    },
    "time": 1762560,
    "levelRequired": 136,
    "HP": 977004,
    "XP": 33600,
    "AP": 166271,
    "requiredBuilder": 23
  }, {
    "material": {
      "type": "wood",
      "amount": 831552
    },
    "time": 1762560,
    "levelRequired": 142,
    "HP": 1078427,
    "XP": 33600,
    "AP": 183529,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 872448
    },
    "time": 1762560,
    "levelRequired": 145,
    "HP": 1190380,
    "XP": 33600,
    "AP": 202580,
    "requiredBuilder": 24
  }, {
    "material": {
      "type": "wood",
      "amount": 913344
    },
    "time": 1762560,
    "levelRequired": 151,
    "HP": 1313954,
    "XP": 33600,
    "AP": 223607,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 954240
    },
    "time": 2290604,
    "levelRequired": 157,
    "HP": 1450357,
    "XP": 35349,
    "AP": 246817,
    "requiredBuilder": 25
  }, {
    "material": {
      "type": "wood",
      "amount": 995136
    },
    "time": 2743903,
    "levelRequired": 163,
    "HP": 1600920,
    "XP": 42345,
    "AP": 272437,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1036032
    },
    "time": 3197201,
    "levelRequired": 169,
    "HP": 1767114,
    "XP": 49340,
    "AP": 300716,
    "requiredBuilder": 26
  }, {
    "material": {
      "type": "wood",
      "amount": 1076928
    },
    "time": 3650500,
    "levelRequired": 175,
    "HP": 1950560,
    "XP": 56335,
    "AP": 331931,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1117824
    },
    "time": 4103799,
    "levelRequired": 181,
    "HP": 2153050,
    "XP": 63331,
    "AP": 366387,
    "requiredBuilder": 27
  }, {
    "material": {
      "type": "wood",
      "amount": 1158720
    },
    "time": 4177339,
    "levelRequired": 187,
    "HP": 2376560,
    "XP": 70326,
    "AP": 404420,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1199616
    },
    "time": 4314507,
    "levelRequired": 193,
    "HP": 2623276,
    "XP": 77321,
    "AP": 446401,
    "requiredBuilder": 28
  }, {
    "material": {
      "type": "wood",
      "amount": 1240512
    },
    "time": 4553079,
    "levelRequired": 196,
    "HP": 2895603,
    "XP": 84317,
    "AP": 492740,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1281408
    },
    "time": 4602106,
    "levelRequired": 202,
    "HP": 3196202,
    "XP": 91312,
    "AP": 543890,
    "requiredBuilder": 29
  }, {
    "material": {
      "type": "wood",
      "amount": 1322304
    },
    "time": 4777719,
    "levelRequired": 208,
    "HP": 3528005,
    "XP": 98307,
    "AP": 600350,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1342752
    },
    "time": 5000000,
    "levelRequired": 211,
    "HP": 3894256,
    "XP": 101805,
    "AP": 662673,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1363200
    },
    "time": 5000000,
    "levelRequired": 214,
    "HP": 4298527,
    "XP": 105303,
    "AP": 731464,
    "requiredBuilder": 30
  }, {
    "material": {
      "type": "wood",
      "amount": 1383648
    },
    "time": 5000000,
    "levelRequired": 217,
    "HP": 4744767,
    "XP": 106000,
    "AP": 807397,
    "requiredBuilder": 31
  }, {
    "material": {
      "type": "wood",
      "amount": 1404096
    },
    "time": 5000000,
    "levelRequired": 220,
    "HP": 5237333,
    "XP": 106000,
    "AP": 891214,
    "requiredBuilder": 32
  }, {
    "material": {
      "type": "wood",
      "amount": 1424544
    },
    "time": 5000000,
    "levelRequired": 223,
    "HP": 5781033,
    "XP": 106000,
    "AP": 983732,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1444992
    },
    "time": 5000000,
    "levelRequired": 226,
    "HP": 6381176,
    "XP": 106000,
    "AP": 1085855,
    "requiredBuilder": 33
  }, {
    "material": {
      "type": "wood",
      "amount": 1465440
    },
    "time": 5000000,
    "levelRequired": 229,
    "HP": 7043622,
    "XP": 106000,
    "AP": 1198580,
    "requiredBuilder": 34
  }, {
    "material": {
      "type": "wood",
      "amount": 1485888
    },
    "time": 5000000,
    "levelRequired": 232,
    "HP": 7774837,
    "XP": 106000,
    "AP": 1323004,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1506336
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 8581963,
    "XP": 106000,
    "AP": 1460347,
    "requiredBuilder": 35
  }, {
    "material": {
      "type": "wood",
      "amount": 1526784
    },
    "time": 5000000,
    "levelRequired": 239,
    "HP": 9472878,
    "XP": 106000,
    "AP": 1611949,
    "requiredBuilder": 36
  }, {
    "material": {
      "type": "wood",
      "amount": 1751712
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 9952442,
    "XP": 106000,
    "AP": 1693553,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1772160
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10456283,
    "XP": 106000,
    "AP": 1779288,
    "requiredBuilder": 37
  }, {
    "material": {
      "type": "wood",
      "amount": 1792608
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 10985630,
    "XP": 106000,
    "AP": 1869363,
    "requiredBuilder": 38
  }, {
    "material": {
      "type": "wood",
      "amount": 1813056
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 11541775,
    "XP": 106000,
    "AP": 1963998,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1833504
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12126077,
    "XP": 106000,
    "AP": 2063424,
    "requiredBuilder": 39
  }, {
    "material": {
      "type": "wood",
      "amount": 1853952
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 12739958,
    "XP": 106000,
    "AP": 2167884,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1874400
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 13384916,
    "XP": 106000,
    "AP": 2277632,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1894848
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14062526,
    "XP": 106000,
    "AP": 2392937,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1915296
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 14774440,
    "XP": 106000,
    "AP": 2514078,
    "requiredBuilder": 40
  }, {
    "material": {
      "type": "wood",
      "amount": 1935744
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 15522394,
    "XP": 106000,
    "AP": 2641352,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1956192
    },
    "time": 5000000,
    "levelRequired": 300,
    "HP": 16308213,
    "XP": 106000,
    "AP": 2775070,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1976640
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 17133815,
    "XP": 106000,
    "AP": 2915557,
    "requiredBuilder": 41
  }, {
    "material": {
      "type": "wood",
      "amount": 1997088
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18001213,
    "XP": 106000,
    "AP": 3063156,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2017536
    },
    "time": 5000000,
    "levelRequired": 310,
    "HP": 18912522,
    "XP": 106000,
    "AP": 3218228,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2037984
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 19869968,
    "XP": 106000,
    "AP": 3381149,
    "requiredBuilder": 42
  }, {
    "material": {
      "type": "wood",
      "amount": 2058432
    },
    "time": 5000000,
    "levelRequired": 325,
    "HP": 21293401,
    "XP": 106000,
    "AP": 3623364,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2089104
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 23380283,
    "XP": 106000,
    "AP": 3978473,
    "requiredBuilder": 43
  }, {
    "material": {
      "type": "wood",
      "amount": 2109552
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 25036291,
    "XP": 106000,
    "AP": 4260265,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2130000
    },
    "time": 5000000,
    "levelRequired": 340,
    "HP": 26800048,
    "XP": 106000,
    "AP": 4560392,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 29395176,
    "XP": 106000,
    "AP": 5001986,
    "requiredBuilder": 44
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 355,
    "HP": 31444818,
    "XP": 106000,
    "AP": 5350759,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 365,
    "HP": 33626651,
    "XP": 106000,
    "AP": 5722026,
    "requiredBuilder": 45
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 370,
    "HP": 35948805,
    "XP": 106000,
    "AP": 6117171,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 375,
    "HP": 38419897,
    "XP": 106000,
    "AP": 6537658,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 385,
    "HP": 41049054,
    "XP": 106000,
    "AP": 6985042,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 43127160,
    "XP": 106000,
    "AP": 7338658,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 430,
    "HP": 45310470,
    "XP": 106000,
    "AP": 7710175,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 47604312,
    "XP": 106000,
    "AP": 8100502,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 435,
    "HP": 50014279,
    "XP": 106000,
    "AP": 8510587,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 440,
    "HP": 52546250,
    "XP": 106000,
    "AP": 8941434,
    "requiredBuilder": 46
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 444,
    "HP": 55206403,
    "XP": 106000,
    "AP": 9394092,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 448,
    "HP": 58001226,
    "XP": 106000,
    "AP": 9869666,
    "requiredBuilder": 47
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 452,
    "HP": 60937537,
    "XP": 106000,
    "AP": 10369316,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 456,
    "HP": 64022498,
    "XP": 106000,
    "AP": 10894261,
    "requiredBuilder": 48
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 460,
    "HP": 67263636,
    "XP": 106000,
    "AP": 11445781,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 463,
    "HP": 70668857,
    "XP": 106000,
    "AP": 12025222,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 466,
    "HP": 74246466,
    "XP": 106000,
    "AP": 12633998,
    "requiredBuilder": 49
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 469,
    "HP": 78005191,
    "XP": 106000,
    "AP": 13273592,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 472,
    "HP": 81954202,
    "XP": 106000,
    "AP": 13945567,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 475,
    "HP": 86103131,
    "XP": 106000,
    "AP": 14651560,
    "requiredBuilder": 50
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 478,
    "HP": 90462100,
    "XP": 106000,
    "AP": 15393293,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 481,
    "HP": 95041742,
    "XP": 106000,
    "AP": 16172578,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 485,
    "HP": 99853229,
    "XP": 106000,
    "AP": 16991314,
    "requiredBuilder": 51
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 487,
    "HP": 104908297,
    "XP": 106000,
    "AP": 17851496,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 490,
    "HP": 110219278,
    "XP": 106000,
    "AP": 18755227,
    "requiredBuilder": 52
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 491,
    "HP": 115799126,
    "XP": 106000,
    "AP": 19704709,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 493,
    "HP": 121661456,
    "XP": 106000,
    "AP": 20702260,
    "requiredBuilder": 53
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 494,
    "HP": 127820567,
    "XP": 106000,
    "AP": 21750308,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 495,
    "HP": 134291482,
    "XP": 106000,
    "AP": 22851416,
    "requiredBuilder": 54
  }, {
    "material": {
      "type": "wood",
      "amount": 2160672
    },
    "time": 5000000,
    "levelRequired": 496,
    "HP": 141089986,
    "XP": 106000,
    "AP": 24008268,
    "requiredBuilder": 54
  }],
  "Forge": [{
    "material": {
      "type": "wood",
      "amount": 1
    },
    "time": 2,
    "levelRequired": 0,
    "HP": 100,
    "XP": 1,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 3
    },
    "time": 2,
    "levelRequired": 0,
    "HP": 100,
    "XP": 1,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 792
    },
    "time": 43200,
    "levelRequired": 8,
    "HP": 100,
    "XP": 60,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 3456
    },
    "time": 92160,
    "levelRequired": 14,
    "HP": 100,
    "XP": 128,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 13968
    },
    "time": 219429,
    "levelRequired": 28,
    "HP": 100,
    "XP": 305,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 35280
    },
    "time": 628364,
    "levelRequired": 40,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 106560
    },
    "time": 1958400,
    "levelRequired": 55,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }, {
    "material": {
      "type": "wood",
      "amount": 106560
    },
    "time": 1958400,
    "levelRequired": 55,
    "HP": 100,
    "XP": 400,
    "AP": 0,
    "requiredBuilder": 0
  }]
};
exports.TowerData = TowerData;
},{}],"lib/MaterializeHelpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAnObserver = exports.AutoInitM = void 0;

var AutoInitM = function AutoInitM() {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(function () {
      return M.AutoInit();
    }, 1);
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      return M.AutoInit();
    });
  }
};

exports.AutoInitM = AutoInitM;

var makeAnObserver = function makeAnObserver(element, fn) {
  var observer = new MutationObserver(function () {
    if (document.contains(element)) {
      fn();
      observer.disconnect();
    }
  });
  observer.observe(document, {
    attributes: false,
    childList: true,
    characterData: false,
    subtree: true
  });
  return observer;
};

exports.makeAnObserver = makeAnObserver;
},{}],"lib/h.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.h = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var h = function h() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var elem = document.createElement(element);
  Object.entries(options).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (key.substring(0, 2) === "on" && typeof value === "function") {
      elem.addEventListener(key.substring(2).toLowerCase(), value);
    } else {
      elem.setAttribute(key, value);
    }
  });
  var ch = Array.isArray(children) ? children : children === null ? [] : [children];
  ch.map(function (child) {
    return typeof child === "string" ? elem.textContent = child : elem.appendChild(child);
  });
  return elem;
};

exports.h = h;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _rawData = require("./rawData.js");

var _MaterializeHelpers = require("./lib/MaterializeHelpers.js");

var _h = require("./lib/h.js");

var _MaterializeHelpers2 = require("./lib/MaterializeHelpers");

var _document$getElementB;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(0, _MaterializeHelpers.AutoInitM)();
var selectedTowers = document.getElementById("selectedTowers");
var timerSettings = document.getElementById("timerSettings");

var addATower = function addATower() {
  var select = (0, _h.h)("select", {}, Object.keys(_rawData.TowerData).sort(function (a, b) {
    return a.localeCompare(b);
  }).map(function (towerName) {
    return (0, _h.h)("option", {
      value: towerName
    }, towerName);
  }));
  (0, _MaterializeHelpers2.makeAnObserver)(select, function () {
    return M.FormSelect.init(select);
  });
  return (0, _h.h)("li", {
    class: "collection-item"
  }, [(0, _h.h)("div", {
    class: "row"
  }, [(0, _h.h)("div", {
    class: "input-field col s5"
  }, [select, (0, _h.h)("label", {}, "Tower Type:")]), (0, _h.h)("div", {
    class: "col s5 input-field"
  }, [(0, _h.h)("input", {
    type: "number"
  }), (0, _h.h)("label", {}, "Level:")]), (0, _h.h)("div", {
    class: "col s2 input-field"
  }, [(0, _h.h)("button", {
    class: "waves-effect waves-light btn btn-flat cyan",
    onClick: function onClick() {
      return selectedTowers.appendChild(addATower());
    }
  }, "+")])])]);
};

selectedTowers.appendChild(addATower());
var timerMins = [1, 3, 15, 30];
var timerHrs = [1, 3, 12, 24, 48];

var timerField = function timerField(time, modifier) {
  var clone = document.getElementById("timerSelector").content.cloneNode(true);
  var label = clone.querySelector("label");
  label.textContent = "".concat(time, " ").concat(modifier);
  clone.querySelector("input").addEventListener('focus', function (e) {
    return label.classList.add("active");
  });
  clone.querySelector("input").addEventListener('blur', function (_ref) {
    var value = _ref.target.value;

    if (value.length === 0) {
      label.classList.remove("active");
    }
  });
  (0, _MaterializeHelpers2.makeAnObserver)(label, function () {
    M.updateTextFields();
  });
  return clone;
};

timerMins.forEach(function (time) {
  timerSettings.appendChild(timerField(time, "min"));
});
timerHrs.forEach(function (time) {
  timerSettings.appendChild(timerField(time, "hr"));
});
var researchLevels = ["Red", "Blue", "Orange", "Green", "Platinum"];

var researchField = function researchField(researchName) {
  var clone = document.getElementById("researchSelection").content.cloneNode(true);
  clone.querySelector("span").textContent = researchName;
  clone.querySelector("input").value = researchName;
  return clone;
};

(_document$getElementB = document.getElementById("researchLevels")).prepend.apply(_document$getElementB, _toConsumableArray(researchLevels.map(researchField)));
},{"./rawData.js":"rawData.js","./lib/MaterializeHelpers.js":"lib/MaterializeHelpers.js","./lib/h.js":"lib/h.js","./lib/MaterializeHelpers":"lib/MaterializeHelpers.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39577" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/AutoFortPlanner.e31bb0bc.js.map