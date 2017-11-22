/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('video_play', {
          width: window.innerWidth,
          height: window.innerHeight,
          playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          showinfo: 0,
          },
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
      }
      async function onPlayerStateChange(event) {
        if(event.data === YT.PlayerState.ENDED){
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            await sleep(500);
            video_area.style.display="";
        }

      }

      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

var video_area = document.getElementById('video_area');
var input = document.getElementById("link_input_field");
input.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        var valUrl = validateYouTubeUrl(input.value);
        if (valUrl != null) {
            video_area.style.display = "block";
            player.loadVideoById(getYoutubeID(input.value));
            video_area.scrollIntoView({ behavior: 'smooth' });

            return;
        }
        else {
            alert(false);
        }
    }
});

function validateYouTubeUrl(url) {
    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            // Do anything for being valid
            // if need to change the url to embed url then use below line
            return 'https://www.youtube.com/embed/' + match[2] + '?vq=hd1080&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0"';
        }
        else {
            return null;
            // Do anything for not being valid
        }
    }
}
function getYoutubeID(url) {
    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        return match[2];
    }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(0);


let area = document.getElementById('playlist_area');
let button = document.getElementById('playlist_button');
let button_arrows = document.getElementById('playlist_button_arrows');
let nav_button = document.getElementById('nav_playlist_button');
let playlist_window = document.getElementById('playlist_area_window');

nav_button.addEventListener('click',function() {
    openPlaylist();
});

button.addEventListener('click', function () {
    openPlaylist();
});

let active = false;
function arrowAnimation() {
    if (active) {
        button_arrows.style.transform = "";
        button_arrows.style.color = "";
    } else {
        button_arrows.style.transform = "rotateY(180deg)";
        button_arrows.style.color = "rgb(230, 230, 230)";
    }
    return;
}


async function playlistAnimation(){
    if(active){
        playlist_window.style.opacity="";
        await sleep(500);
        playlist_window.style.display = "";
    }else{
        playlist_window.style.display = "block";
        await sleep(1);
        playlist_window.style.opacity="1";
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openPlaylist() {
    arrowAnimation();
    playlistAnimation();
    active = !active;
}

/***/ })
/******/ ]);