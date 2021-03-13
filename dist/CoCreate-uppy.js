/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreate"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["uppy"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var uppy = Uppy.Core({\n  autoProceed: false\n});\nuppy.use(Uppy.Dashboard, {\n  target: \"#drag-drop-area\",\n  inline: true,\n  height: 450\n});\nuppy.use(Uppy.Tus, {\n  endpoint: \"https://master.tus.io/files/\"\n});\nuppy.on(\"file-added\", function (file) {\n  // Do something\n  var reader = new FileReader();\n  reader.readAsDataURL(file.data);\n\n  reader.onloadend = function () {\n    var base64data = reader.result;\n    console.log(base64data);\n  };\n});\nuppy.on(\"upload\", function (data) {// Do something\n});\nuppy.on(\"complete\", function (result) {// Do something\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS51cHB5Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsidXBweSIsIlVwcHkiLCJDb3JlIiwiYXV0b1Byb2NlZWQiLCJ1c2UiLCJEYXNoYm9hcmQiLCJ0YXJnZXQiLCJpbmxpbmUiLCJoZWlnaHQiLCJUdXMiLCJlbmRwb2ludCIsIm9uIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwiZGF0YSIsIm9ubG9hZGVuZCIsImJhc2U2NGRhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQUVDLEVBQUFBLFdBQVcsRUFBRTtBQUFmLENBQVYsQ0FBYjtBQUNBSCxJQUFJLENBQUNJLEdBQUwsQ0FBU0gsSUFBSSxDQUFDSSxTQUFkLEVBQXlCO0FBQ3ZCQyxFQUFBQSxNQUFNLEVBQUUsaUJBRGU7QUFFdkJDLEVBQUFBLE1BQU0sRUFBRSxJQUZlO0FBR3ZCQyxFQUFBQSxNQUFNLEVBQUU7QUFIZSxDQUF6QjtBQU1BUixJQUFJLENBQUNJLEdBQUwsQ0FBU0gsSUFBSSxDQUFDUSxHQUFkLEVBQW1CO0FBQUVDLEVBQUFBLFFBQVEsRUFBRTtBQUFaLENBQW5CO0FBQ0FWLElBQUksQ0FBQ1csRUFBTCxDQUFRLFlBQVIsRUFBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLGFBQVAsQ0FBcUJILElBQUksQ0FBQ0ksSUFBMUI7O0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxHQUFtQixZQUFZO0FBQzdCLFFBQUlDLFVBQVUsR0FBR0wsTUFBTSxDQUFDTSxNQUF4QjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBWjtBQUNELEdBSEQ7QUFJRCxDQVJEO0FBVUFsQixJQUFJLENBQUNXLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFVBQUNLLElBQUQsRUFBVSxDQUMxQjtBQUNELENBRkQ7QUFJQWhCLElBQUksQ0FBQ1csRUFBTCxDQUFRLFVBQVIsRUFBb0IsVUFBQ1EsTUFBRCxFQUFZLENBQzlCO0FBQ0QsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVwcHkgPSBVcHB5LkNvcmUoeyBhdXRvUHJvY2VlZDogZmFsc2UgfSk7XG51cHB5LnVzZShVcHB5LkRhc2hib2FyZCwge1xuICB0YXJnZXQ6IFwiI2RyYWctZHJvcC1hcmVhXCIsXG4gIGlubGluZTogdHJ1ZSxcbiAgaGVpZ2h0OiA0NTAsXG59KTtcblxudXBweS51c2UoVXBweS5UdXMsIHsgZW5kcG9pbnQ6IFwiaHR0cHM6Ly9tYXN0ZXIudHVzLmlvL2ZpbGVzL1wiIH0pO1xudXBweS5vbihcImZpbGUtYWRkZWRcIiwgKGZpbGUpID0+IHtcbiAgLy8gRG8gc29tZXRoaW5nXG4gIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlLmRhdGEpO1xuICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICBjb25zb2xlLmxvZyhiYXNlNjRkYXRhKTtcbiAgfTtcbn0pO1xuXG51cHB5Lm9uKFwidXBsb2FkXCIsIChkYXRhKSA9PiB7XG4gIC8vIERvIHNvbWV0aGluZ1xufSk7XG5cbnVwcHkub24oXCJjb21wbGV0ZVwiLCAocmVzdWx0KSA9PiB7XG4gIC8vIERvIHNvbWV0aGluZ1xufSk7XG4iXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});