/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/client.js":
/*!**************************!*\
  !*** ./public/client.js ***!
  \**************************/
/***/ (() => {

eval("function Utils() {\r\n   this.ready = function (fn) {\r\n      if (typeof fn !== 'function') {\r\n         return;\r\n      }\r\n\r\n      if (document.readyState === 'complete') {\r\n         return fn();\r\n      }\r\n\r\n      document.addEventListener('DOMContentLoaded', fn, false);\r\n   };\r\n\r\n   this.ajax = function (options, cb) {\r\n      const xmlhttp = new XMLHttpRequest();\r\n\r\n      xmlhttp.onreadystatechange = function () {\r\n         if (xmlhttp.readyState === 4){\r\n           if(Math.floor(xmlhttp.status/100) === 2) {\r\n             var results = xmlhttp.responseText;\r\n             var type = xmlhttp.getResponseHeader('Content-Type');\r\n             if(type.match('application/json')) {\r\n               results = JSON.parse(results);\r\n             }\r\n             cb(null, results);\r\n           } else {\r\n             cb(xmlhttp);\r\n           }\r\n         }\r\n      };\r\n\r\n      const method = options.method || 'get';\r\n      let url = options.url || '/';\r\n\r\n      if(url.charAt(url.length - 1) === '/')\r\n        url = url.slice(0,url.length-1);\r\n\r\n      if (options.data) {\r\n        let query;\r\n        let contentType = \"application/x-www-form-urlencoded\";\r\n        if(options.type && options.type === 'json') {\r\n          query = JSON.stringify(options.data);\r\n          contentType = \"application/json\";\r\n        } else {\r\n          query = [];\r\n          for (let key in params) {\r\n            query.push(key + '=' + encodeURIComponent(params[key]));\r\n            query.push('&');\r\n          }\r\n          query.pop();\r\n          query = query.join('');\r\n        }\r\n\r\n        switch(method.toLowerCase()){\r\n          case 'get':\r\n            url += ('?' + query);\r\n            xmlhttp.open(method, url, true);\r\n            xmlhttp.send();\r\n            break;\r\n          case 'put':\r\n          case 'patch':\r\n          case 'delete':\r\n          case 'post':\r\n            xmlhttp.open(method, url, true);\r\n            xmlhttp.setRequestHeader(\"Content-type\", contentType);\r\n            xmlhttp.send(query);\r\n            break;\r\n          default:\r\n            return;\r\n        }\r\n      } else {\r\n        xmlhttp.open(method, url, true);\r\n        xmlhttp.send();\r\n      }\r\n\r\n   };\r\n}\r\n\r\nconst utils = new Utils();\r\n\r\nutils.ready(function() {\r\n\r\n  const form = document.getElementById('f1');\r\n  const input = document.getElementById('i1');\r\n  const div = document.getElementById('tn');\r\n  form.addEventListener('submit', function(e){\r\n    e.preventDefault();\r\n    if(input.value) {\r\n      const options = {\r\n        method: 'put',\r\n        url: '/travellers',\r\n        type: 'json',\r\n        data: {surname: input.value}\r\n      };\r\n      div.innerHTML = '<p>Loading...</p>';\r\n      utils.ajax(options, function(err, res) {\r\n        if(err) return console.log(err);\r\n        div.innerHTML = '<p>first name: <span id=\"name\">' + res.name + '</span><p>' +\r\n          '<p>last name: <span id=\"surname\">' + res.surname + '</span><p>' +\r\n          '<p>dates: <span id=\"dates\">' + res.dates + '</span><p>';\r\n      });\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://automated-testing-app/./public/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/client.js"]();
/******/ 	
/******/ })()
;