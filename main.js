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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../hap-nodejs-community-types/types.js":
/*!**********************************************!*\
  !*** ../hap-nodejs-community-types/types.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__(/*! util */ "util").inherits;
var Service, Characteristic;

module.exports = function(homebridge, options) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  UUID = homebridge.hap.uuid;

  var CommunityTypes = {};

  if (!options) options = {};


  // Characteristics

  CommunityTypes.Timestamp = function() {
    Characteristic.call(this, "Timestamp", CommunityTypes.Timestamp.UUID);
    this.setProps({
      format:   Characteristic.Formats.STRING,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Timestamp.UUID = 'FF000001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.Timestamp, Characteristic);

  CommunityTypes.AudioDataURL = function() {
    Characteristic.call(this, "Audio URL", CommunityTypes.AudioDataURL.UUID);
    this.setProps({
      format:   Characteristic.Formats.STRING,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
  };
  CommunityTypes.AudioDataURL.UUID = 'FF000002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.AudioDataURL, Characteristic);

  CommunityTypes.VideoDataURL = function() {
    Characteristic.call(this, "Video URL", CommunityTypes.VideoDataURL.UUID);
    this.setProps({
      format:   Characteristic.Formats.STRING,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
  };
  CommunityTypes.VideoDataURL.UUID = 'FF000003-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.VideoDataURL, Characteristic);

  CommunityTypes.AudioVolume = function() {
    Characteristic.call(this, 'Audio Volume', CommunityTypes.AudioVolume.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      unit: Characteristic.Units.PERCENTAGE,
      maxValue: 100,
      minValue: 0,
      minStep: 1,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.AudioVolume.UUID = '00001001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.AudioVolume, Characteristic);

  CommunityTypes.Muting = function() {
    Characteristic.call(this, 'Muting', CommunityTypes.Muting.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Muting.UUID = '00001002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.Muting, Characteristic);

  CommunityTypes.PlaybackState = function() {
    Characteristic.call(this, 'Playback State', CommunityTypes.PlaybackState.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.PlaybackState.UUID = '00002001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.PlaybackState, Characteristic);
  CommunityTypes.PlaybackState.PLAYING = 0;
  CommunityTypes.PlaybackState.PAUSED = 1;
  CommunityTypes.PlaybackState.STOPPED = 2;

  CommunityTypes.SkipForward = function() {
    Characteristic.call(this, 'Skip Forward', CommunityTypes.SkipForward.UUID);
    this.setProps({
      format:   Characteristic.Formats.BOOL,
      perms: [ Characteristic.Perms.WRITE ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.SkipForward.UUID = '00002002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.SkipForward, Characteristic);

  CommunityTypes.SkipBackward = function() {
    Characteristic.call(this, 'Skip Backward', CommunityTypes.SkipBackward.UUID);
    this.setProps({
      format:   Characteristic.Formats.BOOL,
      perms: [ Characteristic.Perms.WRITE ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.SkipBackward.UUID = '00002003-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.SkipBackward, Characteristic);

  CommunityTypes.ShuffleMode = function() {
    Characteristic.call(this, 'Shuffle Mode', CommunityTypes.ShuffleMode.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.ShuffleMode.UUID = '00002004-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.ShuffleMode, Characteristic);
  //NOTE: If GROUP or SET is not supported, accessories should coerce to ALBUM.
  // If ALBUM is not supported, coerce to ITEM.
  // In general, it is recommended for apps to only assume OFF, ITEM, and ALBUM
  // are supported unless it is known that the accessory supports other settings.
  CommunityTypes.ShuffleMode.OFF = 0;
  //NOTE: INDIVIDUAL is deprecated.
  CommunityTypes.ShuffleMode.ITEM = CommunityTypes.ShuffleMode.INDIVIDUAL = 1;
  CommunityTypes.ShuffleMode.GROUP = 2; // e.g. iTunes "Groupings"
  CommunityTypes.ShuffleMode.ALBUM = 3; // e.g. album or season
  CommunityTypes.ShuffleMode.SET = 4; // e.g. T.V. Series or album box set

  CommunityTypes.RepeatMode = function() {
    Characteristic.call(this, 'Repeat Mode', CommunityTypes.RepeatMode.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.RepeatMode.UUID = '00002005-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.RepeatMode, Characteristic);
  CommunityTypes.RepeatMode.OFF = 0;
  CommunityTypes.RepeatMode.ONE = 1;
  CommunityTypes.RepeatMode.ALL = 2;

  CommunityTypes.PlaybackSpeed = function() {
    Characteristic.call(this, 'Playback Speed', CommunityTypes.PlaybackSpeed.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.PlaybackSpeed.UUID = '00002006-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.PlaybackSpeed, Characteristic);

  CommunityTypes.MediaCurrentPosition = function() {
    Characteristic.call(this, 'Media Current Position', CommunityTypes.MediaCurrentPosition.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT, // In seconds
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaCurrentPosition.UUID = '00002007-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaCurrentPosition, Characteristic);

  CommunityTypes.MediaItemName = function() {
    Characteristic.call(this, 'Media Name', CommunityTypes.MediaItemName.UUID);
    this.setProps({
      format:   Characteristic.Formats.STRING,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaItemName.UUID = '00003001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaItemName, Characteristic);

  CommunityTypes.MediaItemAlbumName = function() {
    Characteristic.call(this, 'Media Album Name', CommunityTypes.MediaItemAlbumName.UUID);
    this.setProps({
      format:   Characteristic.Formats.STRING,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaItemAlbumName.UUID = '00003002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaItemAlbumName, Characteristic);

  CommunityTypes.MediaItemArtist = function() {
    Characteristic.call(this, 'Media Artist', CommunityTypes.MediaItemArtist.UUID);
    this.setProps({
      format:   Characteristic.Formats.STRING,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaItemArtist.UUID = '00003003-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaItemArtist, Characteristic);

  CommunityTypes.MediaItemDuration = function() {
    Characteristic.call(this, 'Media Duration', CommunityTypes.MediaItemDuration.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT, // In seconds
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaItemDuration.UUID = '00003005-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaItemDuration, Characteristic);

  CommunityTypes.StillImage = function() {
    Characteristic.call(this, 'Still Image', CommunityTypes.StillImage.UUID);
    this.setProps({
      format:   Characteristic.Formats.DATA,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.StillImage.UUID = '00004001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.StillImage, Characteristic);

  // Also known as MIME type...
  CommunityTypes.MediaTypeIdentifier = function() {
    Characteristic.call(this, 'Media Type Identifier', CommunityTypes.MediaTypeIdentifier.UUID);
    this.setProps({
      format:   Characteristic.Formats.STRING,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaTypeIdentifier.UUID = '00004002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaTypeIdentifier, Characteristic);

  CommunityTypes.MediaWidth = function() {
    Characteristic.call(this, 'Media Width', CommunityTypes.MediaWidth.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT32,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaWidth.UUID = '00004003-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaWidth, Characteristic);

  CommunityTypes.MediaHeight = function() {
    Characteristic.call(this, 'Media Width', CommunityTypes.MediaHeight.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT32,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaHeight.UUID = '00004004-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaHeight, Characteristic);
  

// courtesy of https://gist.github.com/gomfunkel/b1a046d729757120907c

  CommunityTypes.Volts = function() {
    Characteristic.call(this, 'Volts', CommunityTypes.Volts.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT16,
      unit:     "V",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Volts.UUID = 'E863F10A-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.Volts, Characteristic);

  CommunityTypes.Amperes = function() {
    Characteristic.call(this, 'Amps', CommunityTypes.Amperes.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT16,
      unit:     "A",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Amperes.UUID = 'E863F126-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.Amperes, Characteristic);

  CommunityTypes.Watts = function() {
    Characteristic.call(this, 'Consumption', CommunityTypes.Watts.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT16,
      unit:     "W",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Watts.UUID = 'E863F10D-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.Watts, Characteristic);

  CommunityTypes.VoltAmperes = function() {
    Characteristic.call(this, 'Apparent Power', CommunityTypes.VoltAmperes.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT16,
      unit:     "VA",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.VoltAmperes.UUID = 'E863F110-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.VoltAmperes, Characteristic);

  CommunityTypes.KilowattHours = function() {
    Characteristic.call(this, 'Total Consumption', CommunityTypes.KilowattHours.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT32,
      unit:     "kWh",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.KilowattHours.UUID = 'E863F10C-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.KilowattHours, Characteristic);

  CommunityTypes.KilowattVoltAmpereHour = function() {
    Characteristic.call(this, 'Apparent Energy', CommunityTypes.KilowattVoltAmpereHour.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT32,
      unit:     "kVAh",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.KilowattVoltAmpereHour.UUID = 'E863F127-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.KilowattVoltAmpereHour, Characteristic);

  CommunityTypes.BatteryLevel = function() {
    Characteristic.call(this, 'Battery Level', CommunityTypes.BatteryLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT16,
      unit: Characteristic.Units.PERCENTAGE,
      maxValue: 100,
      minValue: 0,
      minStep: 1,
      perms: [ Characteristic.Perms.READ ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.BatteryLevel.UUID = 'E863F11B-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.BatteryLevel, Characteristic);

  CommunityTypes.EveAirQuality = function () {
    Characteristic.call(this, 'Eve Air Quality', CommunityTypes.EveAirQuality.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT16,
      unit: "ppm",
      maxValue: 5000,
      minValue: 0,
      minStep: 1,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ],
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.EveAirQuality.UUID = 'E863F10B-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.EveAirQuality, Characteristic);


// courtesy of https://github.com/ebaauw/homebridge-lib
// i should probably submit a PR for everything here that isn't in that repo...

  CommunityTypes.EveOpenDuration = function () {
    Characteristic.call(this, 'Eve Open Duration', CommunityTypes.EveOpenDuration.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT32,
      unit: Characteristic.Units.SECONDS, // since last reset
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY, Characteristic.Perms.WRITE]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.EveOpenDuration.UUID = 'E863F118-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.EveOpenDuration, Characteristic);

  CommunityTypes.EveClosedDuration = function () {
    Characteristic.call(this, 'Eve Closed Duration', CommunityTypes.EveClosedDuration.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT32,
      unit: Characteristic.Units.SECONDS, // since last reset
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY, Characteristic.Perms.WRITE]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.EveClosedDuration.UUID = 'E863F119-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.EveClosedDuration, Characteristic);

  CommunityTypes.EveLastActivation = function () {
    Characteristic.call(this, 'Eve Last Activation', CommunityTypes.EveLastActivation.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT32,
      unit: Characteristic.Units.SECONDS, // since last reset
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.EveLastActivation.UUID = 'E863F11A-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.EveLastActivation, Characteristic);

  CommunityTypes.EveTimesOpened = function () {
    Characteristic.call(this, 'Eve Times Opened', CommunityTypes.EveTimesOpened.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT32,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.EveTimesOpened.UUID = 'E863F129-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.EveTimesOpened, Characteristic);

  CommunityTypes.EveResetTotal = function () {
    Characteristic.call(this, 'Eve Reset Total', CommunityTypes.EveResetTotal.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT32,
      unit: Characteristic.Units.SECONDS, // since 2001/01/01
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY, Characteristic.Perms.WRITE]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.EveResetTotal.UUID = 'E863F112-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.EveResetTotal, Characteristic);


// courtesy of https://github.com/robi-van-kinobi/homebridge-cubesensors

  CommunityTypes.AtmosphericPressureLevel = function () {
    Characteristic.call(this, 'Barometric Pressure', CommunityTypes.AtmosphericPressureLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      unit:     "mbar",
      minValue: 800,
      maxValue: 1200,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.AtmosphericPressureLevel.UUID = '28FDA6BC-9C2A-4DEA-AAFD-B49DB6D155AB';
  inherits(CommunityTypes.AtmosphericPressureLevel, Characteristic);

  CommunityTypes.NoiseLevel = function () {
    Characteristic.call(this, 'Noise Level', CommunityTypes.NoiseLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      unit:     "dB",
      minValue: 0,
      maxValue: 200,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.NoiseLevel.UUID = '2CD7B6FD-419A-4740-8995-E3BFE43735AB';
  inherits(CommunityTypes.NoiseLevel, Characteristic);


// courtesy of https://github.com/homespun/homebridge-platform-snmp

  CommunityTypes.AirFlow = function () {
    Characteristic.call(this, 'Air Flow', CommunityTypes.AirFlow.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      unit:     "m/s",
      minValue: 0,
      maxValue: 135,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.AirFlow.UUID = '49C8AE5A-A3A5-41AB-BF1F-12D5654F9F41';
  inherits(CommunityTypes.AirFlow, Characteristic);

  CommunityTypes.NitrogenDioxideDetected = function () {
    Characteristic.call(this, 'Nitrogen Dioxide Detected', CommunityTypes.NitrogenDioxideDetected.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.NitrogenDioxideDetected.UUID = 'D737B40A-3AF0-4316-950F-76090B98C5CF';
  inherits(CommunityTypes.NitrogenDioxideDetected, Characteristic);

  CommunityTypes.NitrogenDioxideDetected.NO2_LEVELS_NORMAL = 0;
  CommunityTypes.NitrogenDioxideDetected.NO2_LEVELS_ABNORMAL = 1;

  CommunityTypes.NitrogenDioxideLevel = function () {
    Characteristic.call(this, 'Nitrogen Dioxide Level', CommunityTypes.NitrogenDioxideLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT,
      unit:     "ppm",
      minValue: 0,
      maxValue: 1500,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.NitrogenDioxideLevel.UUID = 'B762A2AF-D9D0-4A79-814A-E9EBAB0ED290';
  inherits(CommunityTypes.NitrogenDioxideLevel, Characteristic);

  CommunityTypes.NitrogenDioxidePeakLevel = function () {
    Characteristic.call(this, 'Nitrogen Dioxide Peak Level', CommunityTypes.NitrogenDioxidePeakLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT,
      unit:     "ppm",
      minValue: 0,
      maxValue: 1500,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.NitrogenDioxidePeakLevel.UUID = 'B6594847-7B88-496C-A1A0-B7860F3D7601';
  inherits(CommunityTypes.NitrogenDioxidePeakLevel, Characteristic);


// courtesy of https://github.com/homespun/homebridge-platform-aqe

  CommunityTypes.OzoneDetected = function () {
    Characteristic.call(this, 'Ozone Detected', CommunityTypes.OzoneDetected.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.OzoneDetected.UUID = '0168FA60-5CF4-4314-AA45-0F84E389A093';
  inherits(CommunityTypes.OzoneDetected, Characteristic);

  CommunityTypes.OzoneDetected.O3_LEVELS_NORMAL = 0;
  CommunityTypes.OzoneDetected.O3_LEVELS_ABNORMAL = 1;

  CommunityTypes.OzoneLevel = function () {
    Characteristic.call(this, 'Ozone Level', CommunityTypes.OzoneLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT,
      unit:     "ppb",
      minValue: 0,
      maxValue: 1500,
      minStep:  0.01,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.OzoneLevel.UUID = '03C17FD9-672E-42F5-8DD4-30C6822C739A';
  inherits(CommunityTypes.OzoneLevel, Characteristic);

  CommunityTypes.OzonePeakLevel = function () {
    Characteristic.call(this, 'Ozone Peak Level', CommunityTypes.OzonePeakLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT,
      unit:     "ppb",
      minValue: 0,
      maxValue: 1500,
      minStep:  0.01,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.OzonePeakLevel.UUID = '550EE1FF-FC66-4BB6-A1C1-4B0A07109AE3';
  inherits(CommunityTypes.OzonePeakLevel, Characteristic);

  CommunityTypes.SodiumDioxideDetected = function () {
    Characteristic.call(this, 'Sodium Dioxide Detected', CommunityTypes.SodiumDioxideDetected.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.SodiumDioxideDetected.UUID = '4D237DAB-1CB6-4D52-B446-4667F58F7D28';
  inherits(CommunityTypes.SodiumDioxideDetected, Characteristic);

  CommunityTypes.SodiumDioxideDetected.SO2_LEVELS_NORMAL = 0;
  CommunityTypes.SodiumDioxideDetected.SO2_LEVELS_ABNORMAL = 1;

  CommunityTypes.SodiumDioxideLevel = function () {
    Characteristic.call(this, 'Sodium Dioxide Level', CommunityTypes.SodiumDioxideLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT,
      unit:     "ppb",
      minValue: 0,
      maxValue: 1500,
      minStep:  0.01,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.SodiumDioxideLevel.UUID = '66C4D315-FBEF-470E-9434-B047679F1141';
  inherits(CommunityTypes.SodiumDioxideLevel, Characteristic);

  CommunityTypes.SodiumDioxidePeakLevel = function () {
    Characteristic.call(this, 'Sodium Dioxide Peak Level', CommunityTypes.SodiumDioxidePeakLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT,
      unit:     "ppb",
      minValue: 0,
      maxValue: 1500,
      minStep:  0.01,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.SodiumDioxidePeakLevel.UUID = '4CD6F648-2F92-43D8-86DF-0E8DE75E033B';
  inherits(CommunityTypes.SodiumDioxidePeakLevel, Characteristic);

  CommunityTypes.VolatileOrganicCompoundDetected = function () {
    Characteristic.call(this, 'Volatile Organic Compound Detected', CommunityTypes.VolatileOrganicCompoundDetected.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.VolatileOrganicCompoundDetected.UUID = '65DBC0F5-C40B-4E04-ADED-DC70031B0B82';
  inherits(CommunityTypes.VolatileOrganicCompoundDetected, Characteristic);

  CommunityTypes.VolatileOrganicCompoundDetected.VOC_LEVELS_NORMAL = 0;
  CommunityTypes.VolatileOrganicCompoundDetected.VOC_LEVELS_ABNORMAL = 1;

  CommunityTypes.VolatileOrganicCompoundLevel = function () {
    Characteristic.call(this, 'Volatile Organic Compound Level', CommunityTypes.VolatileOrganicCompoundLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT,
      unit:     "ppb",
      minValue: 0,
      maxValue: 1500,
      minStep:  0.01,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.VolatileOrganicCompoundLevel.UUID = '35C4C797-193D-4998-879F-A08514E87897';
  inherits(CommunityTypes.VolatileOrganicCompoundLevel, Characteristic);

  CommunityTypes.VolatileOrganicCompoundPeakLevel = function () {
    Characteristic.call(this, 'Volatile Organic Compound Peak Level', CommunityTypes.VolatileOrganicCompoundPeakLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.FLOAT,
      unit:     "ppb",
      minValue: 0,
      maxValue: 1500,
      minStep:  0.01,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.VolatileOrganicCompoundPeakLevel.UUID = 'A62CB784-1916-4BDF-B840-BDB9F8A264E9';
  inherits(CommunityTypes.VolatileOrganicCompoundPeakLevel, Characteristic);

  CommunityTypes.NotificationCode = function() {
    Characteristic.call(this, 'Notification Code', CommunityTypes.NotificationCode.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      maxValue: 255,
      minValue: 0,
      minStep: 1,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY ]
    });
    this.value = 255;
  };
  CommunityTypes.NotificationCode.UUID = '381C47A3-CB06-4177-8E3D-A1B4C22EB031';
  inherits(CommunityTypes.NotificationCode, Characteristic);

  CommunityTypes.NotificationText = function() {
    Characteristic.call(this, 'Notification Text', CommunityTypes.NotificationText.UUID);
    this.setProps({
      format:   Characteristic.Formats.STRING,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.NotificationText.UUID = 'e244ca80-813e-423a-86bd-02f293b857a0';
  inherits(CommunityTypes.NotificationText, Characteristic);

// used by Elgato Eve, number of seconds since the epoch...
  CommunityTypes.LastEventTime = function() {
    Characteristic.call(this, 'Last Event Time', CommunityTypes.LastEventTime.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT32,
      perms: [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.LastEventTime.UUID = 'E863F11A-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.LastEventTime, Characteristic);


// courtesy of https://github.com/SeydX/homebridge-broadband

  CommunityTypes.DownloadSpeed = function() {
    Characteristic.call(this, 'Download Speed', CommunityTypes.DownloadSpeed.UUID);
    this.setProps({
      format: Characteristic.Formats.FLOAT,
      unit: (options.units && options.units.DownloadSpeed) || 'Mbps',
      maxValue: 1024,
      minValue: 0,
      minStep: 1,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.DownloadSpeed.UUID = 'DA70DA1F-DA72-4DB3-81C2-99F158A15A9A';
  inherits(CommunityTypes.DownloadSpeed, Characteristic);

  CommunityTypes.UploadSpeed = function() {
    Characteristic.call(this, 'Upload Speed', CommunityTypes.UploadSpeed.UUID);
    this.setProps({
      format: Characteristic.Formats.FLOAT,
      unit: 'Mbps',
      maxValue: 1024,
      minValue: 0,
      minStep: 1,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.UploadSpeed.UUID = 'AB74289E-D516-4A12-B2AE-1B32A74C035F';
  inherits(CommunityTypes.UploadSpeed, Characteristic);

  CommunityTypes.Ping = function() {
    Characteristic.call(this, 'Ping', CommunityTypes.Ping.UUID);
    this.setProps({
      format: Characteristic.Formats.INT,
      unit: 'ms',
      maxValue: 999,
      minValue: 0,
      minStep: 1,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Ping.UUID = 'CC65A09A-E052-410C-981D-C11BDE2C3F60';
  inherits(CommunityTypes.Ping, Characteristic);

  CommunityTypes.Latency = function() {
    Characteristic.call(this, 'Latency', CommunityTypes.Latency.UUID);
    this.setProps({
      format: Characteristic.Formats.INT,
      unit: 'ms',
      maxValue: 999,
      minValue: 0,
      minStep: 0.001,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Latency.UUID = '60EC80F9-F799-4E8E-B613-098E7EBCBB0B';
  inherits(CommunityTypes.Latency, Characteristic);


  // Services

  CommunityTypes.AudioDeviceService = function(displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.AudioDeviceService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.AudioVolume);

    // Optional Characteristics
    this.addOptionalCharacteristic(CommunityTypes.Muting);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.AudioDeviceService.UUID = '00000001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.AudioDeviceService, Service);

  CommunityTypes.PlaybackDeviceService = function(displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.PlaybackDeviceService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.PlaybackState);

    // Optional Characteristics
    this.addOptionalCharacteristic(CommunityTypes.SkipForward);
    this.addOptionalCharacteristic(CommunityTypes.SkipBackward);
    this.addOptionalCharacteristic(CommunityTypes.ShuffleMode);
    this.addOptionalCharacteristic(CommunityTypes.RepeatMode);
    this.addOptionalCharacteristic(CommunityTypes.PlaybackSpeed);
    this.addOptionalCharacteristic(CommunityTypes.MediaCurrentPosition);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemName);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemAlbumName);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemArtist);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemDuration);
    this.addOptionalCharacteristic(Characteristic.Name);
    // Artwork characteristics...would be better reported in a separate service?
    this.addOptionalCharacteristic(CommunityTypes.StillImage);
    this.addOptionalCharacteristic(CommunityTypes.MediaTypeIdentifier);
    this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
    this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
  };
  CommunityTypes.PlaybackDeviceService.UUID = '00000002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.PlaybackDeviceService, Service);

  // A media information service that has no playback controls, for e.g. DAB radio...
  CommunityTypes.MediaInformationService = function(displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.MediaInformationService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.MediaItemName);

    // Optional Characteristics
    this.addOptionalCharacteristic(CommunityTypes.MediaItemAlbumName);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemArtist);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemDuration);
    this.addOptionalCharacteristic(CommunityTypes.MediaCurrentPosition);
    this.addOptionalCharacteristic(Characteristic.Name);
    // Artwork characteristics...would be better reported in a separate service?
    this.addOptionalCharacteristic(CommunityTypes.StillImage);
    this.addOptionalCharacteristic(CommunityTypes.MediaTypeIdentifier);
    this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
    this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
  };
  CommunityTypes.MediaInformationService.UUID = '00000003-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaInformationService, Service);

  CommunityTypes.StillImageService = function(displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.StillImageService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.StillImage);
    this.addCharacteristic(CommunityTypes.MediaTypeIdentifier);

    // Optional Characteristics
    this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
    this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.StillImageService.UUID = '00000004-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.StillImageService, Service);

  CommunityTypes.SecurityCameraService = function(displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.SecurityCameraService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.StillImageService);
    this.addCharacteristic(CommunityTypes.MediaTypeIdentifier);

    // Optional Characteristics
    this.addOptionalCharacteristic(CommunityTypes.Timestamp);
    this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
    this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
    this.addOptionalCharacteristic(CommunityTypes.VideoDataURL);
    this.addOptionalCharacteristic(CommunityTypes.AudioDataURL);
    this.addOptionalCharacteristic(Characteristic.MotionDetected);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.SecurityCameraService.UUID = '00000005-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.SecurityCameraService, Service);


// courtesy of https://github.com/robi-van-kinobi/homebridge-cubesensors

  CommunityTypes.AtmosphericPressureSensor = function (displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.AtmosphericPressureSensor.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.AtmosphericPressureLevel);

    // Optional Characteristics
    this.addOptionalCharacteristic(Characteristic.StatusActive);
    this.addOptionalCharacteristic(Characteristic.StatusFault);
    this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.AtmosphericPressureSensor.UUID = 'B77831FD-D66A-46A4-B66D-FD7EE8DFE3CE';
  inherits(CommunityTypes.AtmosphericPressureSensor, Service);

  CommunityTypes.NoiseLevelSensor = function (displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.NoiseLevelSensor.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.NoiseLevel);

    // Optional Characteristics
    this.addOptionalCharacteristic(Characteristic.StatusActive);
    this.addOptionalCharacteristic(Characteristic.StatusFault);
    this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.NoiseLevelSensor.UUID = '28FDA6BC-9C2A-4DEA-AAFD-B49DB6D155AB';
  inherits(CommunityTypes.NoiseLevelSensor, Service);


// courtesy of https://github.com/ToddGreenfield/homebridge-nut

  CommunityTypes.InputVoltageAC = function() {
    Characteristic.call(this, 'Input Voltage AC', CommunityTypes.InputVoltageAC.UUID);
    this.setProps({
      format:   Characteristic.Formats.Float,
      unit:     "V",
      minValue: 0,
      maxValue: 65535,
      minStep:  0.01,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.InputVoltageAC.UUID = UUID.generate('CommunityTypes:usagedevice:InputVoltageAC');
  inherits(CommunityTypes.InputVoltageAC, Characteristic);
  
  CommunityTypes.OutputVoltageAC = function() {
    Characteristic.call(this, 'Output Voltage AC', CommunityTypes.OutputVoltageAC.UUID);
    this.setProps({
      format:   Characteristic.Formats.Float,
      unit:     "V",
      minValue: 0,
      maxValue: 65535,
      minStep:  0.01,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.OutputVoltageAC.UUID = UUID.generate('CommunityTypes:usagedevice:OutputVoltageAC');
  inherits(CommunityTypes.OutputVoltageAC, Characteristic);
  
  CommunityTypes.BatteryVoltageDC = function() {
    Characteristic.call(this, 'Battery Voltage DC', CommunityTypes.BatteryVoltageDC.UUID);
    this.setProps({
      format:   Characteristic.Formats.Float,
      unit:     "V",
      minValue: 0,
      maxValue: 65535,
      minStep:  0.01,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.BatteryVoltageDC.UUID = UUID.generate('CommunityTypes:usagedevice:BatteryVoltageDC');
  inherits(CommunityTypes.BatteryVoltageDC, Characteristic);
  
  CommunityTypes.UPSLoadPercent = function() {
    Characteristic.call(this, 'UPS Load', CommunityTypes.UPSLoadPercent.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      unit: Characteristic.Units.PERCENTAGE,
      minValue: 0,
      maxValue: 100,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.UPSLoadPercent.UUID = UUID.generate('CommunityTypes:usagedevice:UPSLoadPercent');
  inherits(CommunityTypes.UPSLoadPercent, Characteristic);


// courtesy of https://github.com/homespun/homebridge-platform-snmp

  CommunityTypes.AirFlowSensor = function (displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.AirFlowSensor.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.AirFlow);

    // Optional Characteristics
    this.addOptionalCharacteristic(Characteristic.StatusActive);
    this.addOptionalCharacteristic(Characteristic.StatusFault);
    this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.AirFlowSensor.UUID = 'AF5C192E-420F-4A13-AB67-B8F3968A4935';
  inherits(CommunityTypes.AirFlowSensor, Service);

  CommunityTypes.NitrogenDioxideSensor = function (displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.NitrogenDioxideSensor.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.NitrogenDioxideDetected);

    // Optional Characteristics
    this.addOptionalCharacteristic(Characteristic.StatusActive);
    this.addOptionalCharacteristic(Characteristic.StatusFault);
    this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
    this.addOptionalCharacteristic(CommunityTypes.NitrogenDioxideLevel);
    this.addOptionalCharacteristic(CommunityTypes.NitrogenDioxidePeakLevel);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.NitrogenDioxideSensor.UUID = '9F6B797D-D43B-4C88-9AA0-57018AB8A91E';
  inherits(CommunityTypes.NitrogenDioxideSensor, Service);


// courtesy of https://github.com/homespun/homebridge-platform-aqe

  CommunityTypes.OzoneSensor = function (displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.OzoneSensor.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.OzoneDetected);

    // Optional Characteristics
    this.addOptionalCharacteristic(Characteristic.StatusActive);
    this.addOptionalCharacteristic(Characteristic.StatusFault);
    this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
    this.addOptionalCharacteristic(CommunityTypes.OzoneLevel);
    this.addOptionalCharacteristic(CommunityTypes.OzonePeakLevel);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.OzoneSensor.UUID = 'B91C2BD6-D071-4F49-A23B-20721AC6CCEB';
  inherits(CommunityTypes.OzoneSensor, Service);

  CommunityTypes.SodiumDioxideSensor = function (displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.SodiumDioxideSensor.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.SodiumDioxideDetected);

    // Optional Characteristics
    this.addOptionalCharacteristic(Characteristic.StatusActive);
    this.addOptionalCharacteristic(Characteristic.StatusFault);
    this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
    this.addOptionalCharacteristic(CommunityTypes.SodiumDioxideLevel);
    this.addOptionalCharacteristic(CommunityTypes.SodiumDioxidePeakLevel);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.SodiumDioxideSensor.UUID = 'FE7CFB1F-12D0-405D-86FD-7E268D65C453';
  inherits(CommunityTypes.SodiumDioxideSensor, Service);

  CommunityTypes.VolatileOrganicCompoundSensor = function (displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.VolatileOrganicCompoundSensor.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.VolatileOrganicCompoundDetected);

    // Optional Characteristics
    this.addOptionalCharacteristic(Characteristic.StatusActive);
    this.addOptionalCharacteristic(Characteristic.StatusFault);
    this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
    this.addOptionalCharacteristic(CommunityTypes.VolatileOrganicCompoundLevel);
    this.addOptionalCharacteristic(CommunityTypes.VolatileOrganicCompoundPeakLevel);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.VolatileOrganicCompoundSensor.UUID = '776E34BC-1660-46EC-A33D-2DFE5B958699';
  inherits(CommunityTypes.VolatileOrganicCompoundSensor, Service);

  CommunityTypes.NotificationService = function (displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.NotificationService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.NotificationCode);
    this.addCharacteristic(CommunityTypes.NotificationText);

    // Optional Characteristics
    this.addOptionalCharacteristic(Characteristic.Name);
    this.addOptionalCharacteristic(CommunityTypes.LastEventTime);
  };
  CommunityTypes.NotificationService.UUID = '074D8CE9-5B4B-48D5-9990-D98850C2F3FE';
  inherits(CommunityTypes.NotificationService, Service);


  return CommunityTypes;
};


/***/ }),

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, description, author, contributors, homepage, license, keywords, repository, engines, dependencies, devDependencies, bugs, readmeFilename, main, scripts, default */
/***/ (function(module) {

module.exports = {"name":"iobroker.yahka","version":"0.11.23","description":"ioBroker HomeKit Adapter","author":{"name":"Jens Weigele","email":"iobroker.yahka@gmail.com"},"contributors":[{"name":"Jens Weigele","email":"iobroker.yahka@gmail.com"}],"homepage":"https://github.com/jensweigele/ioBroker.yahka","license":"MIT","keywords":["ioBroker","iobroker.yahka","Smart Home","home automation","siri","homekit"],"repository":{"type":"git","url":"https://github.com/jensweigele/ioBroker.yahka"},"engines":{"node":">=6.0.0"},"dependencies":{"@iobroker/adapter-core":"^2.2.1","debug":"^4.1.1","dev-null":"^0.1.1","hap-nodejs":"^0.4.53","hap-nodejs-community-types":"^0.3.1","ip":"^1.1.5","macaddress":"0.2.9","util":"^0.12.1"},"devDependencies":{"@types/iobroker":"^2.2.1","@types/jquery":"^3.3.32","@types/node":"^13.7.1","chai":"^4.2.0","grunt":"^1.0.1","grunt-contrib-clean":"^1.1.0","grunt-contrib-compress":"^1.4.3","grunt-contrib-copy":"^1.0.0","grunt-contrib-jshint":"^1.1.0","grunt-exec":"^3.0.0","grunt-http":"^2.2.0","grunt-jscs":"^3.0.1","grunt-replace":"^1.0.1","grunt-ts":"^6.0.0-beta.17","grunt-webpack":"^3.1.3","html-webpack-plugin":"^3.2.0","mocha":"^4.1.0","raw-loader":"^1.0.0","ts-loader":"^5.3.2","typescript":"^2.6.2","webpack":"^4.28.3","webpack-cli":"^3.1.2","webpack-node-externals":"^1.7.2"},"bugs":{"url":"https://github.com/jensweigele/ioBroker.yahka/issues"},"readmeFilename":"README.md","main":"main.js","scripts":{"test":"node node_modules/mocha/bin/mocha --exit"}};

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/**
 *
 * iobroker.yahka adapter
 *
 *
 *  file io-package.json comments:
 *
 *  {
 *      "common": {
 *          "name":         "iobroker.yahka",                  // name has to be set and has to be equal to adapters folder name and main file name excluding extension
 *          "version":      "0.0.0",                    // use "Semantic Versioning"! see http://semver.org/
 *          "title":        "Node.js iobroker.yahka Adapter",  // Adapter title shown in User Interfaces
 *          "authors":  [                               // Array of authord
 *              "name <mail@iobroker.yahka.com>"
 *          ]
 *          "desc":         "iobroker.yahka adapter",          // Adapter description shown in User Interfaces. Can be a language object {de:"...",ru:"..."} or a string
 *          "platform":     "Javascript/Node.js",       // possible values "javascript", "javascript/Node.js" - more coming
 *          "mode":         "daemon",                   // possible values "daemon", "schedule", "subscribe"
 *          "schedule":     "0 0 * * *"                 // cron-style schedule. Only needed if mode=schedule
 *          "loglevel":     "info"                      // Adapters Log Level
 *      },
 *      "native": {                                     // the native object is available via adapter.config in your adapters code - use it for configuration
 *          "test1": true,
 *          "test2": 42
 *      }
 *  }
 *
 */
/* jshint -W097 */ // jshint strict:false
/*jslint node: true */

Object.defineProperty(exports, "__esModule", { value: true });
var debug = __webpack_require__(/*! debug */ "debug");
debug.enable('EventedHTTPServer,HAPServer,Accessory,AccessoryLoader');
// you have to require the utils module and call adapter function
var utils = __webpack_require__(/*! @iobroker/adapter-core */ "@iobroker/adapter-core");
var hkAdapter = __webpack_require__(/*! ./yahka.ioBroker-adapter */ "./yahka.ioBroker-adapter.ts");
__webpack_require__(/*! ./yahka.functions/functions.import */ "./yahka.functions/functions.import.ts");
var yahkaAdapter;
function startAdapter(options) {
    if (options === void 0) { options = {}; }
    var ioAdapter = utils.Adapter({ name: 'yahka', systemConfig: true });
    yahkaAdapter = new hkAdapter.TIOBrokerAdapter(ioAdapter, utils.controllerDir);
    return ioAdapter;
}
// ...
if (module && module.parent) {
    // Export startAdapter in compact mode
    module.exports = startAdapter;
}
else {
    // Otherwise start the adapter immediately
    startAdapter();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./shared/yahka.logger.ts":
/*!********************************!*\
  !*** ./shared/yahka.logger.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var YahkaLogger = /** @class */ (function () {
    function YahkaLogger(adapter, logIdentifier) {
        this.adapter = adapter;
        this.logIdentifier = logIdentifier;
    }
    YahkaLogger.prototype.debug = function (message) {
        return this.adapter.log.debug("[" + this.logIdentifier + "] " + message);
    };
    YahkaLogger.prototype.info = function (message) {
        return this.adapter.log.info("[" + this.logIdentifier + "] " + message);
    };
    YahkaLogger.prototype.warn = function (message) {
        return this.adapter.log.warn("[" + this.logIdentifier + "] " + message);
    };
    YahkaLogger.prototype.error = function (message) {
        return this.adapter.log.error("[" + this.logIdentifier + "] " + message);
    };
    return YahkaLogger;
}());
exports.YahkaLogger = YahkaLogger;


/***/ }),

/***/ "./shared/yahka.utils.ts":
/*!*******************************!*\
  !*** ./shared/yahka.utils.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function propertyExists(object, property) {
    return property in object;
}
exports.propertyExists = propertyExists;


/***/ }),

/***/ "./yahka.community.types.ts":
/*!**********************************!*\
  !*** ./yahka.community.types.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Characteristic_1 = __webpack_require__(/*! hap-nodejs/lib/Characteristic */ "hap-nodejs/lib/Characteristic");
var Service_1 = __webpack_require__(/*! hap-nodejs/lib/Service */ "hap-nodejs/lib/Service");
__webpack_require__(/*! hap-nodejs/lib/gen/HomeKitTypes */ "hap-nodejs/lib/gen/HomeKitTypes");
var HapCommunity = __webpack_require__(/*! ../hap-nodejs-community-types */ "../hap-nodejs-community-types/types.js");
var util_1 = __webpack_require__(/*! util */ "util");
var uuid = __webpack_require__(/*! hap-nodejs/lib/util/uuid */ "hap-nodejs/lib/util/uuid");
var hapTypesImported = false;
function importHAPCommunityTypesAndFixes() {
    if (hapTypesImported)
        return;
    var curTempCharacteristicFunction = Characteristic_1.Characteristic.CurrentTemperature;
    var curTempCharacteristicType = Characteristic_1.Characteristic.CurrentTemperature;
    if (curTempCharacteristicFunction !== undefined) {
        Characteristic_1.Characteristic.CurrentTemperature = function () {
            curTempCharacteristicFunction.call(this);
            this.setProps({ minValue: -99 });
        };
        util_1.inherits(Characteristic_1.Characteristic.CurrentTemperature, curTempCharacteristicFunction);
        Characteristic_1.Characteristic.CurrentTemperature.UUID = curTempCharacteristicType.UUID;
    }
    var fakeBridge = {
        hap: {
            Service: Service_1.Service,
            Characteristic: Characteristic_1.Characteristic,
            uuid: uuid
        }
    };
    var fakeOptions = {};
    var communityTypes = HapCommunity(fakeBridge, fakeOptions);
    for (var type in communityTypes) {
        var typeFct = communityTypes[type];
        if (typeFct.length == 0) { // characteristic
            Characteristic_1.Characteristic["Community: " + type] = typeFct;
        }
        else if (typeFct.length == 2) { // service
            Service_1.Service["Community: " + type] = typeFct;
        }
    }
    hapTypesImported = true;
}
exports.importHAPCommunityTypesAndFixes = importHAPCommunityTypesAndFixes;


/***/ }),

/***/ "./yahka.functions/conversion.base.ts":
/*!********************************************!*\
  !*** ./yahka.functions/conversion.base.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var functions_base_1 = __webpack_require__(/*! ./functions.base */ "./yahka.functions/functions.base.ts");
var TIOBrokerConversionBase = /** @class */ (function (_super) {
    __extends(TIOBrokerConversionBase, _super);
    function TIOBrokerConversionBase(adapter, logIdentifier) {
        if (logIdentifier === void 0) { logIdentifier = ""; }
        return _super.call(this, adapter, logIdentifier) || this;
    }
    TIOBrokerConversionBase.castToNumber = function (value) {
        if (value === undefined)
            return undefined;
        if (typeof value !== 'number')
            return Number(value);
        else
            return value;
    };
    TIOBrokerConversionBase.parameterValueByName = function (parameters, name) {
        var paramArray = undefined;
        if (typeof parameters === 'object') {
            paramArray = parameters;
        }
        else {
            paramArray = JSON.parse(parameters);
        }
        if (paramArray === undefined)
            return undefined;
        return paramArray[name];
    };
    return TIOBrokerConversionBase;
}(functions_base_1.TYahkaFunctionBase));
exports.TIOBrokerConversionBase = TIOBrokerConversionBase;


/***/ }),

/***/ "./yahka.functions/conversion.homekit.homematic.ts":
/*!*********************************************************!*\
  !*** ./yahka.functions/conversion.homekit.homematic.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var conversion_base_1 = __webpack_require__(/*! ./conversion.base */ "./yahka.functions/conversion.base.ts");
var yahka_homekit_bridge_1 = __webpack_require__(/*! ../yahka.homekit-bridge */ "./yahka.homekit-bridge.ts");
var TIoBrokerConversion_HomematicDirection_To_PositionState = /** @class */ (function (_super) {
    __extends(TIoBrokerConversion_HomematicDirection_To_PositionState, _super);
    function TIoBrokerConversion_HomematicDirection_To_PositionState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TIoBrokerConversion_HomematicDirection_To_PositionState.prototype.toHomeKit = function (value) {
        var num = conversion_base_1.TIOBrokerConversionBase.castToNumber(value);
        var result = undefined;
        switch (num) {
            case 0:
                result = yahka_homekit_bridge_1.HAPCharacteristic.PositionState.STOPPED;
                break;
            case 1:
                result = yahka_homekit_bridge_1.HAPCharacteristic.PositionState.INCREASING;
                break;
            case 2:
                result = yahka_homekit_bridge_1.HAPCharacteristic.PositionState.DECREASING;
                break;
            default:
                result = yahka_homekit_bridge_1.HAPCharacteristic.PositionState.STOPPED;
                break;
        }
        this.adapter.log.debug('HomematicDirectionToHomekitPositionState.toHomeKit, from ' + JSON.stringify(value) + '[' + (typeof value) + '] to ' + JSON.stringify(result));
        return result;
    };
    TIoBrokerConversion_HomematicDirection_To_PositionState.prototype.toIOBroker = function (value) {
        var num = conversion_base_1.TIOBrokerConversionBase.castToNumber(value);
        var result = undefined;
        switch (num) {
            case yahka_homekit_bridge_1.HAPCharacteristic.PositionState.STOPPED:
                result = 0;
                break;
            case yahka_homekit_bridge_1.HAPCharacteristic.PositionState.INCREASING:
                result = 1;
                break;
            case yahka_homekit_bridge_1.HAPCharacteristic.PositionState.DECREASING:
                result = 2;
                break;
            default:
                result = 0;
                break;
        }
        this.adapter.log.debug('HomematicDirectionToHomekitPositionState.toIOBroker, from ' + JSON.stringify(value) + '[' + (typeof value) + '] to ' + JSON.stringify(result));
        return result;
    };
    return TIoBrokerConversion_HomematicDirection_To_PositionState;
}(conversion_base_1.TIOBrokerConversionBase));
exports.TIoBrokerConversion_HomematicDirection_To_PositionState = TIoBrokerConversion_HomematicDirection_To_PositionState;
var TIoBrokerConversion_HomematicControlMode_To_CoolingState = /** @class */ (function (_super) {
    __extends(TIoBrokerConversion_HomematicControlMode_To_CoolingState, _super);
    function TIoBrokerConversion_HomematicControlMode_To_CoolingState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TIoBrokerConversion_HomematicControlMode_To_CoolingState.prototype.toHomeKit = function (value) {
        var num = conversion_base_1.TIOBrokerConversionBase.castToNumber(value);
        var result = undefined;
        switch (num) {
            case 0:
                result = yahka_homekit_bridge_1.HAPCharacteristic.TargetHeatingCoolingState.AUTO;
                break;
            case 1:
                result = yahka_homekit_bridge_1.HAPCharacteristic.TargetHeatingCoolingState.HEAT;
                break;
            case 2:
                result = yahka_homekit_bridge_1.HAPCharacteristic.TargetHeatingCoolingState.HEAT;
                break;
            case 3:
                result = yahka_homekit_bridge_1.HAPCharacteristic.TargetHeatingCoolingState.HEAT;
                break;
            default:
                result = yahka_homekit_bridge_1.HAPCharacteristic.TargetHeatingCoolingState.OFF;
                break;
        }
        this.adapter.log.debug('HomematicDirectionToHomekitHeatingCoolingState.toHomeKit, from ' + JSON.stringify(value) + '[' + (typeof value) + '] to ' + JSON.stringify(result));
        return result;
    };
    TIoBrokerConversion_HomematicControlMode_To_CoolingState.prototype.toIOBroker = function (value) {
        var num = conversion_base_1.TIOBrokerConversionBase.castToNumber(value);
        var result = undefined;
        switch (num) {
            case yahka_homekit_bridge_1.HAPCharacteristic.TargetHeatingCoolingState.OFF:
                result = 0;
                break;
            case yahka_homekit_bridge_1.HAPCharacteristic.TargetHeatingCoolingState.HEAT:
                result = 1;
                break;
            case yahka_homekit_bridge_1.HAPCharacteristic.TargetHeatingCoolingState.COOL:
                result = 0;
                break;
            case yahka_homekit_bridge_1.HAPCharacteristic.TargetHeatingCoolingState.AUTO:
                result = 0;
                break;
            default:
                result = 0;
                break;
        }
        this.adapter.log.debug('HomematicDirectionToHomekitHeatingCoolingState.toIOBroker, from ' + JSON.stringify(value) + '[' + (typeof value) + '] to ' + JSON.stringify(result));
        return result;
    };
    return TIoBrokerConversion_HomematicControlMode_To_CoolingState;
}(conversion_base_1.TIOBrokerConversionBase));
exports.TIoBrokerConversion_HomematicControlMode_To_CoolingState = TIoBrokerConversion_HomematicControlMode_To_CoolingState;


/***/ }),

/***/ "./yahka.functions/conversion.inverse.ts":
/*!***********************************************!*\
  !*** ./yahka.functions/conversion.inverse.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var conversion_base_1 = __webpack_require__(/*! ./conversion.base */ "./yahka.functions/conversion.base.ts");
var TIoBrokerConversion_Inverse = /** @class */ (function (_super) {
    __extends(TIoBrokerConversion_Inverse, _super);
    function TIoBrokerConversion_Inverse(adapter, maxValue) {
        var _this = _super.call(this, adapter) || this;
        _this.maxValue = maxValue;
        return _this;
    }
    TIoBrokerConversion_Inverse.create = function (adapter, parameters) {
        var maxValue = conversion_base_1.TIOBrokerConversionBase.castToNumber(parameters);
        return new TIoBrokerConversion_Inverse(adapter, maxValue);
    };
    TIoBrokerConversion_Inverse.prototype.toHomeKit = function (value) {
        var num = conversion_base_1.TIOBrokerConversionBase.castToNumber(value);
        var newValue = this.maxValue - num;
        this.adapter.log.debug('inverse: converting value to homekit: ' + value + ' to ' + newValue);
        return newValue;
    };
    TIoBrokerConversion_Inverse.prototype.toIOBroker = function (value) {
        var num = conversion_base_1.TIOBrokerConversionBase.castToNumber(value);
        var newValue = this.maxValue - num;
        this.adapter.log.debug('inverse: converting value to ioBroker: ' + value + ' to ' + newValue);
        return newValue;
    };
    return TIoBrokerConversion_Inverse;
}(conversion_base_1.TIOBrokerConversionBase));
exports.TIoBrokerConversion_Inverse = TIoBrokerConversion_Inverse;


/***/ }),

/***/ "./yahka.functions/conversion.map.ts":
/*!*******************************************!*\
  !*** ./yahka.functions/conversion.map.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var conversion_base_1 = __webpack_require__(/*! ./conversion.base */ "./yahka.functions/conversion.base.ts");
function isMultiStateParameter(params) {
    return "mappings" in params;
}
exports.isMultiStateParameter = isMultiStateParameter;
var TIoBrokerConversion_Map = /** @class */ (function (_super) {
    __extends(TIoBrokerConversion_Map, _super);
    function TIoBrokerConversion_Map(adapter, parameters) {
        var _this = _super.call(this, adapter, "TIoBrokerConversion_Map") || this;
        _this.parameters = parameters;
        _this.mappingArrayToHomeKit = new Map();
        _this.mappingArrayToIOBroker = new Map();
        _this.jsonReplacer = function (key, value) { return String(value); };
        _this.buildMappingArray();
        return _this;
    }
    TIoBrokerConversion_Map.create = function (adapter, parameters) {
        if (!isMultiStateParameter(parameters)) {
            return undefined;
        }
        return new TIoBrokerConversion_Map(adapter, parameters);
    };
    TIoBrokerConversion_Map.prototype.buildMappingArray = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.parameters.mappings), _c = _b.next(); !_c.done; _c = _b.next()) {
                var mapDef = _c.value;
                var leftStr = JSON.stringify(mapDef.left, this.jsonReplacer);
                var rightStr = JSON.stringify(mapDef.right, this.jsonReplacer);
                this.mappingArrayToHomeKit.set(leftStr, mapDef.right);
                this.mappingArrayToIOBroker.set(rightStr, mapDef.left);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    TIoBrokerConversion_Map.prototype.toHomeKit = function (value) {
        var ioValueStr = JSON.stringify(value, this.jsonReplacer);
        return this.mappingArrayToHomeKit.get(ioValueStr);
    };
    TIoBrokerConversion_Map.prototype.toIOBroker = function (value) {
        var hkValueStr = JSON.stringify(value, this.jsonReplacer);
        return this.mappingArrayToIOBroker.get(hkValueStr);
    };
    return TIoBrokerConversion_Map;
}(conversion_base_1.TIOBrokerConversionBase));
exports.TIoBrokerConversion_Map = TIoBrokerConversion_Map;


/***/ }),

/***/ "./yahka.functions/conversion.passthrough.ts":
/*!***************************************************!*\
  !*** ./yahka.functions/conversion.passthrough.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var conversion_base_1 = __webpack_require__(/*! ./conversion.base */ "./yahka.functions/conversion.base.ts");
var TIoBrokerConversion_Passthrough = /** @class */ (function (_super) {
    __extends(TIoBrokerConversion_Passthrough, _super);
    function TIoBrokerConversion_Passthrough() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TIoBrokerConversion_Passthrough.prototype.toHomeKit = function (value) {
        return value;
    };
    TIoBrokerConversion_Passthrough.prototype.toIOBroker = function (value) {
        return value;
    };
    return TIoBrokerConversion_Passthrough;
}(conversion_base_1.TIOBrokerConversionBase));
exports.TIoBrokerConversion_Passthrough = TIoBrokerConversion_Passthrough;


/***/ }),

/***/ "./yahka.functions/conversion.scale.ts":
/*!*********************************************!*\
  !*** ./yahka.functions/conversion.scale.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var conversion_base_1 = __webpack_require__(/*! ./conversion.base */ "./yahka.functions/conversion.base.ts");
var TIoBrokerConversion_Scale = /** @class */ (function (_super) {
    __extends(TIoBrokerConversion_Scale, _super);
    function TIoBrokerConversion_Scale(adapter, parameters) {
        var _this = _super.call(this, adapter) || this;
        _this.parameters = parameters;
        return _this;
    }
    TIoBrokerConversion_Scale.isScaleParameter = function (parameters) {
        var castedParam = parameters;
        return castedParam["homekit.min"] !== undefined &&
            castedParam["homekit.max"] !== undefined &&
            castedParam["iobroker.min"] !== undefined &&
            castedParam["iobroker.max"] !== undefined;
    };
    TIoBrokerConversion_Scale.create = function (adapter, parameters) {
        var params;
        if (TIoBrokerConversion_Scale.isScaleParameter(parameters)) {
            params = parameters;
        }
        else {
            params = {
                "homekit.min": 0,
                "homekit.max": 1,
                "iobroker.min": 0,
                "iobroker.max": 1
            };
        }
        return new TIoBrokerConversion_Scale(adapter, params);
    };
    TIoBrokerConversion_Scale.prototype.toHomeKit = function (value) {
        var num = conversion_base_1.TIOBrokerConversionBase.castToNumber(value);
        var homeKitMax = this.parameters["homekit.max"];
        var ioBrokerMax = this.parameters["iobroker.max"];
        var homeKitMin = this.parameters["homekit.min"];
        var ioBrokerMin = this.parameters["iobroker.min"];
        var newValue = ((num - ioBrokerMin) / (ioBrokerMax - ioBrokerMin)) * (homeKitMax - homeKitMin) + homeKitMin;
        this.adapter.log.debug('scaleInt: converting value to homekit: ' + value + ' to ' + newValue);
        return newValue;
    };
    TIoBrokerConversion_Scale.prototype.toIOBroker = function (value) {
        var num = conversion_base_1.TIOBrokerConversionBase.castToNumber(value);
        var homeKitMax = this.parameters["homekit.max"];
        var ioBrokerMax = this.parameters["iobroker.max"];
        var homeKitMin = this.parameters["homekit.min"];
        var ioBrokerMin = this.parameters["iobroker.min"];
        var newValue = ((num - homeKitMin) / (homeKitMax - homeKitMin)) * (ioBrokerMax - ioBrokerMin) + ioBrokerMin;
        this.adapter.log.debug('scaleInt: converting value to ioBroker: ' + value + ' to ' + newValue);
        return newValue;
    };
    return TIoBrokerConversion_Scale;
}(conversion_base_1.TIOBrokerConversionBase));
exports.TIoBrokerConversion_Scale = TIoBrokerConversion_Scale;


/***/ }),

/***/ "./yahka.functions/conversion.script.ts":
/*!**********************************************!*\
  !*** ./yahka.functions/conversion.script.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var conversion_base_1 = __webpack_require__(/*! ./conversion.base */ "./yahka.functions/conversion.base.ts");
var TIoBrokerConversion_Script = /** @class */ (function (_super) {
    __extends(TIoBrokerConversion_Script, _super);
    function TIoBrokerConversion_Script(adapter, parameters) {
        var _this = _super.call(this, adapter) || this;
        _this.parameters = parameters;
        _this.toHKFunction = new Function("value", _this.parameters.toHomeKit);
        _this.toIOFunction = new Function("value", _this.parameters.toIOBroker);
        return _this;
    }
    TIoBrokerConversion_Script.isScriptParameter = function (parameters) {
        var castedParam = parameters;
        return castedParam["toHomeKit"] !== undefined &&
            castedParam["toIOBroker"] !== undefined;
    };
    TIoBrokerConversion_Script.create = function (adapter, parameters) {
        var params;
        if (TIoBrokerConversion_Script.isScriptParameter(parameters)) {
            params = parameters;
        }
        else {
            params = {
                toHomeKit: "return value",
                toIOBroker: "return value"
            };
        }
        return new TIoBrokerConversion_Script(adapter, params);
    };
    TIoBrokerConversion_Script.prototype.toHomeKit = function (value) {
        var newValue = this.toHKFunction(value);
        this.adapter.log.debug('script: converting value to homekit: ' + value + ' to ' + newValue);
        return newValue;
    };
    TIoBrokerConversion_Script.prototype.toIOBroker = function (value) {
        var newValue = this.toIOFunction(value);
        this.adapter.log.debug('script: converting value to ioBroker: ' + value + ' to ' + newValue);
        return newValue;
    };
    return TIoBrokerConversion_Script;
}(conversion_base_1.TIOBrokerConversionBase));
exports.TIoBrokerConversion_Script = TIoBrokerConversion_Script;


/***/ }),

/***/ "./yahka.functions/functions.base.ts":
/*!*******************************************!*\
  !*** ./yahka.functions/functions.base.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var yahka_logger_1 = __webpack_require__(/*! ../shared/yahka.logger */ "./shared/yahka.logger.ts");
var TYahkaFunctionBase = /** @class */ (function () {
    function TYahkaFunctionBase(adapter, logIdentifier) {
        if (logIdentifier === void 0) { logIdentifier = ""; }
        this.adapter = adapter;
        this.logIdentifier = logIdentifier;
        this.subscriptionRequests = [];
        this.stateCache = new Map();
        this.log = new yahka_logger_1.YahkaLogger(this.adapter, this.logIdentifier);
    }
    TYahkaFunctionBase.prototype.addSubscriptionRequest = function (stateName) {
        var subscriptionEvent = this.subscriptionEvent.bind(this, stateName);
        this.subscriptionRequests.push({
            subscriptionType: 'state',
            subscriptionIdentifier: stateName,
            subscriptionEvent: subscriptionEvent
        });
    };
    TYahkaFunctionBase.prototype.shouldStateBeFiltered = function (stateName, ioState) {
        return false;
    };
    TYahkaFunctionBase.prototype.readValueFromCache = function (stateName) {
        if (this.stateCache.has(stateName)) {
            return this.stateCache.get(stateName);
        }
        else {
            return undefined;
        }
    };
    TYahkaFunctionBase.prototype.updateCache = function (stateName, ioState) {
        var needUpdate = false;
        if (this.stateCache.has(stateName)) {
            var curVal = this.stateCache.get(stateName);
            needUpdate = curVal.val !== ioState.val;
        }
        else {
            needUpdate = true;
        }
        if (needUpdate)
            this.stateCache.set(stateName, ioState);
        return needUpdate;
    };
    TYahkaFunctionBase.prototype.subscriptionEvent = function (stateName, ioState, callback) {
        this.log.debug('change event from ioBroker via [' + stateName + ']' + JSON.stringify(ioState));
        if (this.shouldStateBeFiltered(stateName, ioState)) {
            this.log.debug('state was filtered - notification is canceled');
            return;
        }
        var cacheChange = this.updateCache(stateName, ioState);
        if (!cacheChange) {
            this.log.debug('state value already in cache - notification is canceled');
            return;
        }
        this.cacheChanged(stateName, callback);
    };
    TYahkaFunctionBase.prototype.cacheChanged = function (stateName, callback) {
    };
    return TYahkaFunctionBase;
}());
exports.TYahkaFunctionBase = TYahkaFunctionBase;


/***/ }),

/***/ "./yahka.functions/functions.factory.ts":
/*!**********************************************!*\
  !*** ./yahka.functions/functions.factory.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.inOutFactory = {};
exports.conversionFactory = {};
exports.functionFactory = {
    createInOutFunction: function (adapter, inOutFunction, inOutParameters) {
        if (!(inOutFunction in exports.inOutFactory))
            return exports.inOutFactory["const"](adapter, inOutParameters);
        return exports.inOutFactory[inOutFunction](adapter, inOutParameters);
    },
    createConversionFunction: function (adapter, conversionFunction, conversionParameters) {
        if (!(conversionFunction in exports.conversionFactory))
            return exports.conversionFactory["passthrough"](adapter, conversionParameters);
        return exports.conversionFactory[conversionFunction](adapter, conversionParameters);
    }
};


/***/ }),

/***/ "./yahka.functions/functions.import.ts":
/*!*********************************************!*\
  !*** ./yahka.functions/functions.import.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var functions_factory_1 = __webpack_require__(/*! ./functions.factory */ "./yahka.functions/functions.factory.ts");
var iofunc_state_1 = __webpack_require__(/*! ./iofunc.state */ "./yahka.functions/iofunc.state.ts");
var iofunc_const_1 = __webpack_require__(/*! ./iofunc.const */ "./yahka.functions/iofunc.const.ts");
var iofunc_homematic_covering_1 = __webpack_require__(/*! ./iofunc.homematic.covering */ "./yahka.functions/iofunc.homematic.covering.ts");
var conversion_passthrough_1 = __webpack_require__(/*! ./conversion.passthrough */ "./yahka.functions/conversion.passthrough.ts");
var conversion_homekit_homematic_1 = __webpack_require__(/*! ./conversion.homekit.homematic */ "./yahka.functions/conversion.homekit.homematic.ts");
var conversion_scale_1 = __webpack_require__(/*! ./conversion.scale */ "./yahka.functions/conversion.scale.ts");
var conversion_inverse_1 = __webpack_require__(/*! ./conversion.inverse */ "./yahka.functions/conversion.inverse.ts");
var conversion_script_1 = __webpack_require__(/*! ./conversion.script */ "./yahka.functions/conversion.script.ts");
var iofunc_multi_state_1 = __webpack_require__(/*! ./iofunc.multi-state */ "./yahka.functions/iofunc.multi-state.ts");
var conversion_map_1 = __webpack_require__(/*! ./conversion.map */ "./yahka.functions/conversion.map.ts");
var iofunc_homematic_dimmer_1 = __webpack_require__(/*! ./iofunc.homematic.dimmer */ "./yahka.functions/iofunc.homematic.dimmer.ts");
functions_factory_1.inOutFactory["ioBroker.State"] = iofunc_state_1.TIoBrokerInOutFunction_State.create;
functions_factory_1.inOutFactory["ioBroker.MultiState"] = iofunc_multi_state_1.TIoBrokerInOutFunction_MultiState.create;
functions_factory_1.inOutFactory["ioBroker.State.Defered"] = iofunc_state_1.TIoBrokerInOutFunction_StateDeferred.create;
functions_factory_1.inOutFactory["ioBroker.State.OnlyACK"] = iofunc_state_1.TIoBrokerInOutFunction_State_OnlyACK.create;
functions_factory_1.inOutFactory["const"] = iofunc_const_1.TIoBrokerInOutFunction_Const.create;
functions_factory_1.inOutFactory["ioBroker.homematic.WindowCovering.TargetPosition"] = iofunc_homematic_covering_1.TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition.create;
functions_factory_1.inOutFactory["ioBroker.homematic.Dimmer.On"] = iofunc_homematic_dimmer_1.TIoBrokerInOutFunction_Homematic_Dimmer_On.create;
functions_factory_1.inOutFactory["ioBroker.homematic.Dimmer.Brightness"] = iofunc_homematic_dimmer_1.TIoBrokerInOutFunction_Homematic_Dimmer_Brightness.create;
functions_factory_1.conversionFactory["passthrough"] = function (adapter, param) { return new conversion_passthrough_1.TIoBrokerConversion_Passthrough(adapter); };
functions_factory_1.conversionFactory["HomematicDirectionToHomekitPositionState"] = function (adapter, param) { return new conversion_homekit_homematic_1.TIoBrokerConversion_HomematicDirection_To_PositionState(adapter); };
functions_factory_1.conversionFactory["HomematicControlModeToHomekitHeathingCoolingState"] = function (adapter, param) { return new conversion_homekit_homematic_1.TIoBrokerConversion_HomematicControlMode_To_CoolingState(adapter); };
functions_factory_1.conversionFactory["level255"] = function (adapter, param) { return new conversion_scale_1.TIoBrokerConversion_Scale(adapter, {
    "homekit.min": 0,
    "homekit.max": 100,
    "iobroker.min": 0,
    "iobroker.max": 255
}); };
functions_factory_1.conversionFactory["scaleInt"] = conversion_scale_1.TIoBrokerConversion_Scale.create;
functions_factory_1.conversionFactory["scaleFloat"] = conversion_scale_1.TIoBrokerConversion_Scale.create;
functions_factory_1.conversionFactory["hue"] = function (adapter, param) { return new conversion_scale_1.TIoBrokerConversion_Scale(adapter, {
    "homekit.min": 0,
    "homekit.max": 360,
    "iobroker.min": 0,
    "iobroker.max": 65535
}); };
functions_factory_1.conversionFactory["inverse"] = conversion_inverse_1.TIoBrokerConversion_Inverse.create;
functions_factory_1.conversionFactory["script"] = function (adapter, param) { return new conversion_script_1.TIoBrokerConversion_Script(adapter, param); };
// 255 -> 65535.0
// 100 - 360
functions_factory_1.conversionFactory["map"] = conversion_map_1.TIoBrokerConversion_Map.create;


/***/ }),

/***/ "./yahka.functions/iofunc.base.ts":
/*!****************************************!*\
  !*** ./yahka.functions/iofunc.base.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var functions_base_1 = __webpack_require__(/*! ./functions.base */ "./yahka.functions/functions.base.ts");
var TIoBrokerInOutFunctionBase = /** @class */ (function (_super) {
    __extends(TIoBrokerInOutFunctionBase, _super);
    function TIoBrokerInOutFunctionBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueForHomeKit = undefined;
        _this.errorForHomeKit = null;
        return _this;
    }
    TIoBrokerInOutFunctionBase.prototype.fromIOBroker = function (callback) {
        this.log.debug('fromIOBroker event - delivering cached value (' + JSON.stringify(this.valueForHomeKit) + ")");
        callback(null, this.valueForHomeKit);
    };
    TIoBrokerInOutFunctionBase.prototype.toIOBroker = function (plainIoValue, callback) {
        this.log.debug('writing state to ioBroker: ' + JSON.stringify(plainIoValue));
        this.updateIOBrokerValue(plainIoValue, callback);
    };
    TIoBrokerInOutFunctionBase.prototype.cacheChanged = function (stateName, callback) {
        try {
            this.valueForHomeKit = this.recalculateHomekitValues(stateName);
            this.errorForHomeKit = null;
        }
        catch (e) {
            this.errorForHomeKit = e;
        }
        if (this.valueForHomeKit != null)
            callback(this.valueForHomeKit);
    };
    TIoBrokerInOutFunctionBase.prototype.recalculateHomekitValues = function (stateName) {
        // noop
    };
    TIoBrokerInOutFunctionBase.prototype.updateIOBrokerValue = function (plainIoValue, callback) {
        // to be filled in derived class
    };
    return TIoBrokerInOutFunctionBase;
}(functions_base_1.TYahkaFunctionBase));
exports.TIoBrokerInOutFunctionBase = TIoBrokerInOutFunctionBase;
var TIoBrokerInOutFunction_StateBase = /** @class */ (function () {
    function TIoBrokerInOutFunction_StateBase(adapter, stateName, deferredTime) {
        if (deferredTime === void 0) { deferredTime = 0; }
        this.adapter = adapter;
        this.stateName = stateName;
        this.deferredTime = deferredTime;
        this.debounceTimer = -1;
        this.subscriptionRequests = [];
        this.addSubscriptionRequest(stateName);
    }
    TIoBrokerInOutFunction_StateBase.prototype.addSubscriptionRequest = function (stateName) {
        var subscriptionEvent = this.subscriptionEvent.bind(this, stateName);
        this.subscriptionRequests.push({
            subscriptionType: 'state',
            subscriptionIdentifier: stateName,
            subscriptionEvent: subscriptionEvent
        });
    };
    TIoBrokerInOutFunction_StateBase.prototype.getValueOnRead = function (ioState) {
        if (ioState)
            return ioState.val;
        else
            return null;
    };
    TIoBrokerInOutFunction_StateBase.prototype.getValueOnNotify = function (ioState) {
        if (ioState)
            return ioState.val;
        else
            return null;
    };
    TIoBrokerInOutFunction_StateBase.prototype.toIOBroker = function (plainIoValue, callback) {
        var _this = this;
        this.adapter.log.debug('writing state to ioBroker [' + this.stateName + ']: ' + JSON.stringify(plainIoValue));
        this.adapter.getForeignState(this.stateName, function (error, ioState) {
            var value = _this.getValueOnRead(ioState);
            var valueChanged = value !== plainIoValue;
            _this.adapter.log.debug('checking value change: ' + JSON.stringify(value) + ' != ' + JSON.stringify(plainIoValue) + ' = ' + valueChanged);
            if (valueChanged) {
                _this.adapter.setForeignState(_this.stateName, plainIoValue, false, function (error) {
                    if (error)
                        _this.adapter.log.error('setForeignState error [' + _this.stateName + '] to [' + JSON.stringify(plainIoValue) + ']: ' + error);
                    callback();
                });
            }
            else {
                callback();
            }
        });
    };
    TIoBrokerInOutFunction_StateBase.prototype.fromIOBroker = function (callback) {
        var _this = this;
        this.adapter.log.debug('reading state from ioBroker [' + this.stateName + ']');
        this.adapter.getForeignState(this.stateName, function (error, ioState) {
            _this.adapter.log.debug('read state from ioBroker [' + _this.stateName + ']: ' + JSON.stringify(ioState));
            if (error)
                _this.adapter.log.error('... with error: ' + error);
            var value = _this.getValueOnRead(ioState);
            callback(error, value);
        });
    };
    TIoBrokerInOutFunction_StateBase.prototype.subscriptionEvent = function (stateName, ioState, callback) {
        this.adapter.log.debug('change event from ioBroker via [' + this.stateName + ']' + JSON.stringify(ioState));
        var newValue = this.getValueOnNotify(ioState);
        if (newValue != null)
            this.executeCallback(callback, newValue);
        else
            this.adapter.log.debug('state was filtered - notification is canceled');
    };
    TIoBrokerInOutFunction_StateBase.prototype.executeCallback = function (callback, plainIOValue) {
        if (this.deferredTime > 0)
            this.setupDeferredChangeEvent(callback, plainIOValue);
        else
            callback(plainIOValue);
    };
    TIoBrokerInOutFunction_StateBase.prototype.setupDeferredChangeEvent = function (callback, plainIOValue) {
        this.cancelDeferredChangeEvent();
        this.debounceTimer = setTimeout(this.deferredChangeEvent.bind(this, callback, plainIOValue), 150);
    };
    TIoBrokerInOutFunction_StateBase.prototype.cancelDeferredChangeEvent = function () {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = -1;
    };
    TIoBrokerInOutFunction_StateBase.prototype.deferredChangeEvent = function (callback, plainIOValue) {
        this.adapter.log.debug('[' + this.stateName + '] firing deferred change event:' + JSON.stringify(plainIOValue));
        callback(plainIOValue);
    };
    return TIoBrokerInOutFunction_StateBase;
}());
exports.TIoBrokerInOutFunction_StateBase = TIoBrokerInOutFunction_StateBase;


/***/ }),

/***/ "./yahka.functions/iofunc.const.ts":
/*!*****************************************!*\
  !*** ./yahka.functions/iofunc.const.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TIoBrokerInOutFunction_Const = /** @class */ (function () {
    function TIoBrokerInOutFunction_Const(adapter, parameters) {
        this.adapter = adapter;
        this.parameters = parameters;
    }
    TIoBrokerInOutFunction_Const.create = function (adapter, parameters) {
        return new TIoBrokerInOutFunction_Const(adapter, parameters);
    };
    TIoBrokerInOutFunction_Const.prototype.toIOBroker = function (ioValue, callback) {
        callback();
    };
    TIoBrokerInOutFunction_Const.prototype.fromIOBroker = function (callback) {
        callback(null, this.parameters);
    };
    return TIoBrokerInOutFunction_Const;
}());
exports.TIoBrokerInOutFunction_Const = TIoBrokerInOutFunction_Const;


/***/ }),

/***/ "./yahka.functions/iofunc.homematic.covering.ts":
/*!******************************************************!*\
  !*** ./yahka.functions/iofunc.homematic.covering.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var iofunc_base_1 = __webpack_require__(/*! ./iofunc.base */ "./yahka.functions/iofunc.base.ts");
var TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition = /** @class */ (function (_super) {
    __extends(TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition, _super);
    function TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition(adapter, stateName, workingItem) {
        var _this = _super.call(this, adapter, stateName, 0) || this;
        _this.adapter = adapter;
        _this.stateName = stateName;
        _this.workingItem = workingItem;
        _this.lastWorkingState = false;
        _this.lastAcknowledgedValue = undefined;
        _this.debounceTimer = -1;
        _this.addSubscriptionRequest(workingItem);
        adapter.getForeignState(workingItem, function (error, ioState) {
            if (ioState)
                _this.lastWorkingState = ioState.val;
            else
                _this.lastWorkingState = undefined;
        });
        return _this;
    }
    TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition.create = function (adapter, parameters) {
        var p;
        if (typeof parameters === 'string')
            p = [parameters];
        else if (parameters instanceof Array)
            p = parameters;
        else
            p = [];
        if (p.length == 0)
            return undefined;
        var stateName = p[0];
        var workingItemName;
        if (p.length >= 2)
            workingItemName = p[1];
        else {
            var pathNames = stateName.split('.');
            pathNames[pathNames.length - 1] = 'WORKING';
            workingItemName = pathNames.join('.');
        }
        return new TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition(adapter, stateName, workingItemName);
    };
    TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition.prototype.subscriptionEvent = function (stateName, ioState, callback) {
        if (!ioState)
            return;
        if (stateName == this.workingItem) {
            this.adapter.log.debug('[' + this.stateName + '] got a working item change event: ' + JSON.stringify(ioState));
            this.lastWorkingState = ioState.val;
            this.setupDeferredChangeEvent(callback);
        }
        else if (stateName == this.stateName) {
            this.adapter.log.debug('[' + this.stateName + '] got a target state change event:' + JSON.stringify(ioState));
            if (ioState.ack) {
                this.lastAcknowledgedValue = ioState.val;
                this.setupDeferredChangeEvent(callback);
            }
        }
    };
    TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition.prototype.setupDeferredChangeEvent = function (callback) {
        this.cancelDeferredChangeEvent();
        this.debounceTimer = setTimeout(this.deferredChangeEvent.bind(this, callback), 150);
    };
    TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition.prototype.cancelDeferredChangeEvent = function () {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = -1;
    };
    TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition.prototype.deferredChangeEvent = function (callback) {
        if (!this.lastWorkingState) { // only fire callback if the covering does not move
            this.adapter.log.debug('[' + this.stateName + '] firing target state change event:' + JSON.stringify(this.lastAcknowledgedValue));
            callback(this.lastAcknowledgedValue);
        }
        else {
            this.adapter.log.debug('[' + this.stateName + '] canceling target state change event - covering is working');
        }
    };
    return TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition;
}(iofunc_base_1.TIoBrokerInOutFunction_StateBase));
exports.TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition = TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition;


/***/ }),

/***/ "./yahka.functions/iofunc.homematic.dimmer.ts":
/*!****************************************************!*\
  !*** ./yahka.functions/iofunc.homematic.dimmer.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var iofunc_base_1 = __webpack_require__(/*! ./iofunc.base */ "./yahka.functions/iofunc.base.ts");
var util_1 = __webpack_require__(/*! util */ "util");
var yahka_utils_1 = __webpack_require__(/*! ../shared/yahka.utils */ "./shared/yahka.utils.ts");
function isHomematic_Dimmer_Parameter(value) {
    if (value === undefined)
        return false;
    if (!util_1.isObject(value))
        return false;
    return yahka_utils_1.propertyExists(value, "levelState");
}
exports.isHomematic_Dimmer_Parameter = isHomematic_Dimmer_Parameter;
var TIoBrokerInOutFunction_Homematic_Dimmer_Base = /** @class */ (function (_super) {
    __extends(TIoBrokerInOutFunction_Homematic_Dimmer_Base, _super);
    function TIoBrokerInOutFunction_Homematic_Dimmer_Base(adapter, functionName, parameters) {
        var _this = _super.call(this, adapter, functionName + "[" + parameters.levelState + "]") || this;
        _this.parameters = parameters;
        _this.lastOnLevel = { val: undefined, ack: false, ts: undefined, lc: undefined, from: undefined };
        _this.addSubscriptionRequest(parameters.levelState);
        return _this;
    }
    TIoBrokerInOutFunction_Homematic_Dimmer_Base.parseParameters = function (parameters) {
        if (!isHomematic_Dimmer_Parameter(parameters)) {
            return undefined;
        }
        ;
        return parameters;
    };
    TIoBrokerInOutFunction_Homematic_Dimmer_Base.prototype.cacheChanged = function (stateName, callback) {
        // save level if we are switching off
        if (stateName === this.parameters.levelState) {
            var cacheValue = this.readValueFromCache(stateName);
            if (cacheValue.val > 0) {
                this.lastOnLevel = cacheValue;
            }
        }
        _super.prototype.cacheChanged.call(this, stateName, callback);
    };
    return TIoBrokerInOutFunction_Homematic_Dimmer_Base;
}(iofunc_base_1.TIoBrokerInOutFunctionBase));
exports.TIoBrokerInOutFunction_Homematic_Dimmer_Base = TIoBrokerInOutFunction_Homematic_Dimmer_Base;
var TIoBrokerInOutFunction_Homematic_Dimmer_On = /** @class */ (function (_super) {
    __extends(TIoBrokerInOutFunction_Homematic_Dimmer_On, _super);
    function TIoBrokerInOutFunction_Homematic_Dimmer_On(adapter, parameters) {
        var _this = _super.call(this, adapter, "Homematic.Dimmer.On", parameters) || this;
        _this.adapter = adapter;
        _this.parameters = parameters;
        return _this;
    }
    TIoBrokerInOutFunction_Homematic_Dimmer_On.create = function (adapter, parameters) {
        var params = TIoBrokerInOutFunction_Homematic_Dimmer_On.parseParameters(parameters);
        if (params === undefined) {
            return undefined;
        }
        return new TIoBrokerInOutFunction_Homematic_Dimmer_On(adapter, params);
    };
    TIoBrokerInOutFunction_Homematic_Dimmer_On.prototype.recalculateHomekitValues = function (stateName) {
        var hkValue = this.stateCache.get(this.parameters.levelState);
        return Boolean(hkValue.val > 0);
    };
    TIoBrokerInOutFunction_Homematic_Dimmer_On.prototype.updateIOBrokerValue = function (plainIoValue, callback) {
        var _this = this;
        setTimeout(function () { return _this.executeIOBrokerValue(plainIoValue, callback); }, 50);
    };
    TIoBrokerInOutFunction_Homematic_Dimmer_On.prototype.executeIOBrokerValue = function (plainIoValue, callback) {
        var _this = this;
        var isSwitchingOn = Boolean(plainIoValue);
        var stateName = this.parameters.levelState;
        var newOnValue = (this.parameters.restoreToPreviousLevel ? this.lastOnLevel.val : this.parameters.defaultSwitchOnLevel) || this.parameters.defaultSwitchOnLevel || 100;
        var newOffValue = 0;
        var newValue = isSwitchingOn ? newOnValue : newOffValue;
        if (isSwitchingOn && this.parameters.restoreToPreviousLevel) {
            this.log.debug('using previous level for switching on: ' + JSON.stringify(this.lastOnLevel.val));
        }
        this.log.debug('writing state to ioBroker [' + stateName + ']: ' + JSON.stringify(newValue));
        this.adapter.getForeignState(stateName, function (error, ioState) {
            var value = ioState.val;
            if (isSwitchingOn && value > 0) {
                _this.log.debug('function should switch on but level is already not equal to 0: ' + JSON.stringify(value));
                callback();
                return;
            }
            var valueChanged = value !== newValue;
            _this.log.debug('checking value change: ' + JSON.stringify(value) + ' != ' + JSON.stringify(newValue) + ' = ' + valueChanged);
            if (valueChanged) {
                _this.adapter.setForeignState(stateName, newValue, false, function (error) {
                    if (error) {
                        _this.log.error('setForeignState error [' + stateName + '] to [' + JSON.stringify(newValue) + ']: ' + error);
                        callback();
                    }
                    callback();
                });
            }
            else {
                callback();
            }
        });
    };
    return TIoBrokerInOutFunction_Homematic_Dimmer_On;
}(TIoBrokerInOutFunction_Homematic_Dimmer_Base));
exports.TIoBrokerInOutFunction_Homematic_Dimmer_On = TIoBrokerInOutFunction_Homematic_Dimmer_On;
var TIoBrokerInOutFunction_Homematic_Dimmer_Brightness = /** @class */ (function (_super) {
    __extends(TIoBrokerInOutFunction_Homematic_Dimmer_Brightness, _super);
    function TIoBrokerInOutFunction_Homematic_Dimmer_Brightness(adapter, parameters) {
        var _this = _super.call(this, adapter, "Homematic.Dimmer.Brightness", parameters) || this;
        _this.adapter = adapter;
        _this.parameters = parameters;
        return _this;
    }
    TIoBrokerInOutFunction_Homematic_Dimmer_Brightness.create = function (adapter, parameters) {
        var params = TIoBrokerInOutFunction_Homematic_Dimmer_On.parseParameters(parameters);
        if (params === undefined) {
            return undefined;
        }
        return new TIoBrokerInOutFunction_Homematic_Dimmer_Brightness(adapter, params);
    };
    TIoBrokerInOutFunction_Homematic_Dimmer_Brightness.prototype.recalculateHomekitValues = function (stateName) {
        var hkValue = this.stateCache.get(this.parameters.levelState);
        return hkValue.val == 0 ? this.lastOnLevel.val : hkValue.val;
    };
    TIoBrokerInOutFunction_Homematic_Dimmer_Brightness.prototype.updateIOBrokerValue = function (plainIoValue, callback) {
        var _this = this;
        var newValue = plainIoValue;
        var stateName = this.parameters.levelState;
        this.log.debug('writing state to ioBroker [' + stateName + ']: ' + JSON.stringify(newValue));
        this.adapter.getForeignState(stateName, function (error, ioState) {
            var value = ioState.val;
            var valueChanged = value !== newValue;
            _this.log.debug('checking value change: ' + JSON.stringify(value) + ' != ' + JSON.stringify(newValue) + ' = ' + valueChanged);
            if (valueChanged) {
                _this.adapter.setForeignState(stateName, newValue, false, function (error) {
                    if (error) {
                        _this.log.error('setForeignState error [' + stateName + '] to [' + JSON.stringify(newValue) + ']: ' + error);
                        callback();
                    }
                    callback();
                });
            }
            else {
                callback();
            }
        });
    };
    return TIoBrokerInOutFunction_Homematic_Dimmer_Brightness;
}(TIoBrokerInOutFunction_Homematic_Dimmer_Base));
exports.TIoBrokerInOutFunction_Homematic_Dimmer_Brightness = TIoBrokerInOutFunction_Homematic_Dimmer_Brightness;


/***/ }),

/***/ "./yahka.functions/iofunc.multi-state.ts":
/*!***********************************************!*\
  !*** ./yahka.functions/iofunc.multi-state.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iofunc_base_1 = __webpack_require__(/*! ./iofunc.base */ "./yahka.functions/iofunc.base.ts");
var util_1 = __webpack_require__(/*! util */ "util");
function isMultiStateParameter(value) {
    if (value === undefined)
        return false;
    if (!util_1.isObject(value))
        return false;
    var propName = "readState";
    return (propName in value);
}
exports.isMultiStateParameter = isMultiStateParameter;
var TIoBrokerInOutFunction_MultiState = /** @class */ (function (_super) {
    __extends(TIoBrokerInOutFunction_MultiState, _super);
    function TIoBrokerInOutFunction_MultiState(adapter, stateProperties) {
        var e_1, _a;
        var _this = _super.call(this, adapter, "TIoBrokerInOutFunctionMultiState") || this;
        _this.adapter = adapter;
        _this.stateProperties = stateProperties;
        try {
            for (var stateProperties_1 = __values(stateProperties), stateProperties_1_1 = stateProperties_1.next(); !stateProperties_1_1.done; stateProperties_1_1 = stateProperties_1.next()) {
                var state = stateProperties_1_1.value;
                _this.addSubscriptionRequest(state.readState);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (stateProperties_1_1 && !stateProperties_1_1.done && (_a = stateProperties_1.return)) _a.call(stateProperties_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return _this;
    }
    TIoBrokerInOutFunction_MultiState.parseParameters = function (parameters) {
        if (Array.isArray(parameters)) {
            return parameters.filter(isMultiStateParameter);
        }
        else if (typeof parameters === "string") {
            return [{ readState: parameters }];
        }
        else {
            return undefined;
        }
    };
    TIoBrokerInOutFunction_MultiState.create = function (adapter, parameters) {
        var stateNames = TIoBrokerInOutFunction_MultiState.parseParameters(parameters);
        if (stateNames === undefined) {
            return undefined;
        }
        return new TIoBrokerInOutFunction_MultiState(adapter, stateNames);
    };
    TIoBrokerInOutFunction_MultiState.prototype.recalculateHomekitValues = function (stateName) {
        var _this = this;
        var hkValues = this.stateProperties.map(function (state) { return _this.stateCache.get(state.readState).val; });
        return hkValues.length === 1 ? hkValues[0] : hkValues;
    };
    TIoBrokerInOutFunction_MultiState.prototype.updateSingleIOBrokerValue = function (state, newValue) {
        var _this = this;
        if (newValue === undefined)
            return Promise.resolve();
        return new Promise(function (resolve, reject) {
            var stateName = state.writeState || state.readState;
            _this.log.debug('writing state to ioBroker [' + stateName + ']: ' + JSON.stringify(newValue));
            _this.adapter.getForeignState(stateName, function (error, ioState) {
                var value = ioState.val;
                var valueChanged = value !== newValue;
                _this.log.debug('checking value change: ' + JSON.stringify(value) + ' != ' + JSON.stringify(newValue) + ' = ' + valueChanged);
                if (valueChanged) {
                    _this.adapter.setForeignState(stateName, newValue, false, function (error) {
                        if (error) {
                            _this.log.error('setForeignState error [' + stateName + '] to [' + JSON.stringify(newValue) + ']: ' + error);
                            reject(error);
                        }
                        resolve();
                    });
                }
                else {
                    resolve();
                }
            });
        });
    };
    TIoBrokerInOutFunction_MultiState.prototype.updateIOBrokerValue = function (plainIoValue, callback) {
        var _this = this;
        var ioValueArray = Array.isArray(plainIoValue) ? plainIoValue : [plainIoValue];
        var promiseArray = this.stateProperties.map(function (state, index) {
            var newValueForThisState = ioValueArray[index];
            return _this.updateSingleIOBrokerValue(state, newValueForThisState);
        });
        Promise.all(promiseArray).then(function () {
            _this.log.debug('wrote all states sucessfully to ioBroker');
            callback();
        }).catch(function (e) {
            _this.log.error('could not write all states to ioBroker: ' + JSON.stringify(e));
            callback();
        });
    };
    return TIoBrokerInOutFunction_MultiState;
}(iofunc_base_1.TIoBrokerInOutFunctionBase));
exports.TIoBrokerInOutFunction_MultiState = TIoBrokerInOutFunction_MultiState;


/***/ }),

/***/ "./yahka.functions/iofunc.state.ts":
/*!*****************************************!*\
  !*** ./yahka.functions/iofunc.state.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var iofunc_base_1 = __webpack_require__(/*! ./iofunc.base */ "./yahka.functions/iofunc.base.ts");
var TIoBrokerInOutFunction_State = /** @class */ (function (_super) {
    __extends(TIoBrokerInOutFunction_State, _super);
    function TIoBrokerInOutFunction_State() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TIoBrokerInOutFunction_State.create = function (adapter, parameters) {
        if (typeof parameters !== "string")
            return undefined;
        var stateName = parameters;
        return new TIoBrokerInOutFunction_State(adapter, stateName);
    };
    return TIoBrokerInOutFunction_State;
}(iofunc_base_1.TIoBrokerInOutFunction_StateBase));
exports.TIoBrokerInOutFunction_State = TIoBrokerInOutFunction_State;
var TIoBrokerInOutFunction_StateDeferred = /** @class */ (function (_super) {
    __extends(TIoBrokerInOutFunction_StateDeferred, _super);
    function TIoBrokerInOutFunction_StateDeferred() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TIoBrokerInOutFunction_StateDeferred.create = function (adapter, parameters) {
        if (typeof parameters !== "string")
            return undefined;
        var stateName = parameters;
        return new TIoBrokerInOutFunction_StateDeferred(adapter, stateName, 250);
    };
    return TIoBrokerInOutFunction_StateDeferred;
}(iofunc_base_1.TIoBrokerInOutFunction_StateBase));
exports.TIoBrokerInOutFunction_StateDeferred = TIoBrokerInOutFunction_StateDeferred;
var TIoBrokerInOutFunction_State_OnlyACK = /** @class */ (function (_super) {
    __extends(TIoBrokerInOutFunction_State_OnlyACK, _super);
    function TIoBrokerInOutFunction_State_OnlyACK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TIoBrokerInOutFunction_State_OnlyACK.create = function (adapter, parameters) {
        if (typeof parameters !== "string")
            return undefined;
        var stateName = parameters;
        return new TIoBrokerInOutFunction_State_OnlyACK(adapter, stateName);
    };
    TIoBrokerInOutFunction_State_OnlyACK.prototype.getValueOnRead = function (ioState) {
        if (ioState)
            if (ioState.ack) {
                this.lastAcknowledgedValue = ioState.val;
                return ioState.val;
            }
            else {
                this.adapter.log.debug("faking CurrentState.Read for [" + this.stateName + ']: ' + JSON.stringify(this.lastAcknowledgedValue));
                return this.lastAcknowledgedValue;
            }
        else
            return null;
    };
    TIoBrokerInOutFunction_State_OnlyACK.prototype.getValueOnNotify = function (ioState) {
        if (ioState)
            if (ioState.ack) {
                this.lastAcknowledgedValue = ioState.val;
                return ioState.val;
            }
            else {
                this.adapter.log.debug("discarding CurrentState.Notify for [" + this.stateName + ']');
                return undefined;
            }
        else
            return null;
    };
    return TIoBrokerInOutFunction_State_OnlyACK;
}(iofunc_base_1.TIoBrokerInOutFunction_StateBase));
exports.TIoBrokerInOutFunction_State_OnlyACK = TIoBrokerInOutFunction_State_OnlyACK;


/***/ }),

/***/ "./yahka.homekit-bridge.ts":
/*!*********************************!*\
  !*** ./yahka.homekit-bridge.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./typings/index.d.ts" />
var debug = __webpack_require__(/*! debug */ "debug");
var util = __webpack_require__(/*! util */ "util");
var HAP = __webpack_require__(/*! hap-nodejs */ "hap-nodejs");
var yahka_community_types_1 = __webpack_require__(/*! ./yahka.community.types */ "./yahka.community.types.ts");
var pjson = __webpack_require__(/*! ../package.json */ "../package.json");
// export let HAPAccessory:any = HAP.Accessory;
exports.HAPService = HAP.Service;
exports.HAPCharacteristic = HAP.Characteristic;
yahka_community_types_1.importHAPCommunityTypesAndFixes();
var THomeKitBridge = /** @class */ (function () {
    function THomeKitBridge(config, FBridgeFactory, FLogger) {
        this.config = config;
        this.FBridgeFactory = FBridgeFactory;
        this.FLogger = FLogger;
        this.init();
    }
    THomeKitBridge.prototype.init = function () {
        var e_1, _a;
        this.bridgeObject = this.setupBridge();
        if (this.config.devices)
            try {
                for (var _b = __values(this.config.devices), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var device = _c.value;
                    if (device.enabled === false) {
                        continue;
                    }
                    var hapDevice = this.createDevice(device);
                    try {
                        this.bridgeObject.addBridgedAccessory(hapDevice);
                    }
                    catch (e) {
                        this.FLogger.warn(e);
                        this.FLogger.warn('Error by adding: ' + JSON.stringify(device));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        this.bridgeObject.publish({
            username: this.config.username,
            port: this.config.port,
            pincode: this.config.pincode,
            category: 2,
            mdns: {
                interface: this.config.interface,
                reuseAddr: true
            }
        });
    };
    THomeKitBridge.prototype.setupBridge = function () {
        var _this = this;
        var hapBridge = new HAP.Bridge(this.config.name, HAP.uuid.generate(this.config.ident));
        var infoService = hapBridge.getService(exports.HAPService.AccessoryInformation);
        infoService.setCharacteristic(exports.HAPCharacteristic.Manufacturer, this.config.manufacturer || 'not configured');
        infoService.setCharacteristic(exports.HAPCharacteristic.Model, this.config.model || 'not configured');
        infoService.setCharacteristic(exports.HAPCharacteristic.SerialNumber, this.config.serial || 'not configured');
        if ((this.config.firmware !== undefined) && (this.config.firmware !== "")) {
            infoService.setCharacteristic(exports.HAPCharacteristic.FirmwareRevision, this.config.firmware);
        }
        else {
            infoService.setCharacteristic(exports.HAPCharacteristic.FirmwareRevision, pjson.version);
        }
        // Listen for bridge identification event
        hapBridge.on('identify', function (paired, callback) {
            _this.FLogger.debug('Node Bridge identify:' + paired);
            callback(); // success
        });
        return hapBridge;
    };
    THomeKitBridge.prototype.createDevice = function (device) {
        var _this = this;
        var e_2, _a;
        var devName = device.name;
        var deviceID = HAP.uuid.generate(this.config.ident + ':' + devName);
        var i = 0;
        while (this.bridgeObject.bridgedAccessories.some(function (a) { return a.UUID == deviceID; })) {
            devName = device.name + '_' + ++i;
            deviceID = HAP.uuid.generate(this.config.ident + ':' + devName);
        }
        this.FLogger.info('adding ' + devName + ' with UUID: ' + deviceID);
        var hapDevice = new HAP.Accessory(devName, deviceID);
        var infoService = hapDevice.getService(exports.HAPService.AccessoryInformation);
        infoService.setCharacteristic(exports.HAPCharacteristic.Manufacturer, device.manufacturer || 'not configured');
        infoService.setCharacteristic(exports.HAPCharacteristic.Model, device.model || 'not configured');
        infoService.setCharacteristic(exports.HAPCharacteristic.SerialNumber, device.serial || 'not configured');
        if ((device.firmware !== undefined) && (device.firmware !== "")) {
            infoService.setCharacteristic(exports.HAPCharacteristic.FirmwareRevision, device.firmware);
        }
        hapDevice.on('identify', function (paired, callback) {
            _this.FLogger.debug('device identify');
            callback(); // success
        });
        try {
            for (var _b = __values(device.services), _c = _b.next(); !_c.done; _c = _b.next()) {
                var serviceConfig = _c.value;
                this.initService(hapDevice, serviceConfig);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return hapDevice;
    };
    THomeKitBridge.prototype.initService = function (hapDevice, serviceConfig) {
        var e_3, _a;
        if (!(serviceConfig.type in HAP.Service)) {
            throw Error('unknown service type: ' + serviceConfig.type);
        }
        var isNew = false;
        var hapService = hapDevice.getService(HAP.Service[serviceConfig.type]);
        if (hapService !== undefined) {
            var existingSubType = hapService.subtype ? hapService.subtype : "";
            if (existingSubType != serviceConfig.subType)
                hapService = undefined;
        }
        if (hapService === undefined) {
            hapService = new HAP.Service[serviceConfig.type](serviceConfig.name, serviceConfig.subType);
            isNew = true;
        }
        try {
            for (var _b = __values(serviceConfig.characteristics), _c = _b.next(); !_c.done; _c = _b.next()) {
                var charactConfig = _c.value;
                this.initCharacteristic(hapService, charactConfig);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (isNew) {
            hapDevice.addService(hapService);
        }
    };
    THomeKitBridge.prototype.initCharacteristic = function (hapService, characteristicConfig) {
        var _this = this;
        var hapCharacteristic = hapService.getCharacteristic(exports.HAPCharacteristic[characteristicConfig.name]);
        if (!hapCharacteristic) {
            this.FLogger.warn("unknown characteristic: " + characteristicConfig.name);
            return;
        }
        if (!characteristicConfig.enabled)
            return;
        if (characteristicConfig.properties !== undefined)
            hapCharacteristic.setProps(characteristicConfig.properties);
        hapCharacteristic.binding = this.FBridgeFactory.CreateBinding(characteristicConfig, function (plainIOValue) {
            _this.FLogger.debug('[' + characteristicConfig.name + '] got a change notify event, ioValue: ' + JSON.stringify(plainIOValue));
            var binding = hapCharacteristic.binding;
            if (!binding) {
                _this.FLogger.error('[' + characteristicConfig.name + '] no binding!');
                return;
            }
            var hkValue = binding.conversion.toHomeKit(plainIOValue);
            _this.FLogger.debug('[' + characteristicConfig.name + '] forwarding value from ioBroker (' + JSON.stringify(plainIOValue) + ') to homekit as (' + JSON.stringify(hkValue) + ')');
            hapCharacteristic.setValue(hkValue, undefined, binding);
        });
        hapCharacteristic.on('set', function (hkValue, callback, context) {
            _this.FLogger.debug('[' + characteristicConfig.name + '] got a set event, hkValue: ' + JSON.stringify(hkValue));
            var binding = hapCharacteristic.binding;
            if (!binding) {
                _this.FLogger.error('[' + characteristicConfig.name + '] no binding!');
                callback();
                return;
            }
            if (context === binding) {
                _this.FLogger.debug('[' + characteristicConfig.name + '] set was initiated from ioBroker - exiting here');
                callback();
                return;
            }
            var ioValue = binding.conversion.toIOBroker(hkValue);
            binding.inOut.toIOBroker(ioValue, function () {
                _this.FLogger.debug('[' + characteristicConfig.name + '] set was accepted by ioBroker (value: ' + JSON.stringify(ioValue) + ')');
                callback();
            });
        });
        hapCharacteristic.on('get', function (hkCallback) {
            _this.FLogger.debug('[' + characteristicConfig.name + '] got a get event');
            var binding = hapCharacteristic.binding;
            if (!binding) {
                _this.FLogger.error('[' + characteristicConfig.name + '] no binding!');
                hkCallback('no binding', null);
                return;
            }
            binding.inOut.fromIOBroker(function (ioBrokerError, ioValue) {
                var hkValue = binding.conversion.toHomeKit(ioValue);
                // check if the value can be converetd to a number
                if ((hkValue !== undefined) && (hkValue !== "")) {
                    var numValue = Number(hkValue);
                    if (!isNaN(numValue)) {
                        hkValue = numValue;
                    }
                }
                _this.FLogger.debug('[' + characteristicConfig.name + '] forwarding value from ioBroker (' + JSON.stringify(ioValue) + ') to homekit as (' + JSON.stringify(hkValue) + ')');
                hkCallback(ioBrokerError, hkValue);
            });
        });
    };
    return THomeKitBridge;
}());
exports.THomeKitBridge = THomeKitBridge;
var hapInited = false;
var originalLogMethod = debug.log;
function initHAP(storagePath, HAPdebugLogMethod) {
    if (hapInited) {
        return;
    }
    HAP.init(storagePath);
    debug.log = function () {
        HAPdebugLogMethod(util.format.apply(this, arguments));
    };
}
exports.initHAP = initHAP;
function deinitHAP() {
    if (!hapInited) {
        return;
    }
    debug.disable();
    debug.log = originalLogMethod;
    hapInited = false;
}
exports.deinitHAP = deinitHAP;


/***/ }),

/***/ "./yahka.homekit-ipcamera.ts":
/*!***********************************!*\
  !*** ./yahka.homekit-ipcamera.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./typings/index.d.ts" />
var child_process_1 = __webpack_require__(/*! child_process */ "child_process");
var HAP = __webpack_require__(/*! hap-nodejs */ "hap-nodejs");
var StreamController_1 = __webpack_require__(/*! hap-nodejs/lib/StreamController */ "hap-nodejs/lib/StreamController");
var ip = __webpack_require__(/*! ip */ "ip");
var hap_nodejs_1 = __webpack_require__(/*! hap-nodejs */ "hap-nodejs");
var HAPService = HAP.Service;
var HAPCharacteristic = HAP.Characteristic;
var THomeKitIPCamera = /** @class */ (function () {
    function THomeKitIPCamera(camConfig, FLogger) {
        this.camConfig = camConfig;
        this.FLogger = FLogger;
        this.streamControllers = [];
        this.pendingSessions = {};
        this.ongoingSessions = {};
        this.init();
    }
    THomeKitIPCamera.prototype.init = function () {
        if (!this.camConfig.enabled) {
            return;
        }
        this.createCameraDevice();
        this.createCameraControlService();
        this.createStreamControllers();
        this.publishCamera();
    };
    THomeKitIPCamera.prototype.createOptionsDictionary = function () {
        var videoResolutions = [];
        var maxFPS = (this.camConfig.maxFPS > 30) ? 30 : this.camConfig.maxFPS;
        if (this.camConfig.maxWidth >= 320) {
            if (this.camConfig.maxHeight >= 240) {
                videoResolutions.push([320, 240, maxFPS]);
                if (maxFPS > 15) {
                    videoResolutions.push([320, 240, 15]);
                }
            }
            if (this.camConfig.maxHeight >= 180) {
                videoResolutions.push([320, 180, maxFPS]);
                if (maxFPS > 15) {
                    videoResolutions.push([320, 180, 15]);
                }
            }
        }
        if (this.camConfig.maxWidth >= 480) {
            if (this.camConfig.maxHeight >= 360) {
                videoResolutions.push([480, 360, maxFPS]);
            }
            if (this.camConfig.maxHeight >= 270) {
                videoResolutions.push([480, 270, maxFPS]);
            }
        }
        if (this.camConfig.maxWidth >= 640) {
            if (this.camConfig.maxHeight >= 480) {
                videoResolutions.push([640, 480, maxFPS]);
            }
            if (this.camConfig.maxHeight >= 360) {
                videoResolutions.push([640, 360, maxFPS]);
            }
        }
        if (this.camConfig.maxWidth >= 1280) {
            if (this.camConfig.maxHeight >= 960) {
                videoResolutions.push([1280, 960, maxFPS]);
            }
            if (this.camConfig.maxHeight >= 720) {
                videoResolutions.push([1280, 720, maxFPS]);
            }
        }
        if (this.camConfig.maxWidth >= 1920) {
            if (this.camConfig.maxHeight >= 1080) {
                videoResolutions.push([1920, 1080, maxFPS]);
            }
        }
        var options = {
            proxy: false,
            srtp: true,
            video: {
                resolutions: videoResolutions,
                codec: {
                    profiles: [0, 1, 2],
                    levels: [0, 1, 2] // Enum, please refer StreamController.VideoCodecParamLevelTypes
                }
            },
            audio: {
                codecs: [
                    {
                        type: "OPUS",
                        samplerate: 24 // 8, 16, 24 KHz
                    },
                    {
                        type: "AAC-eld",
                        samplerate: 16
                    }
                ]
            }
        };
        return options;
    };
    THomeKitIPCamera.prototype.createCameraDevice = function () {
        var _this = this;
        var deviceID = HAP.uuid.generate(this.camConfig.ident + ':' + this.camConfig.name);
        var hapDevice = new HAP.Accessory(this.camConfig.name, deviceID);
        var infoService = hapDevice.getService(HAPService.AccessoryInformation);
        infoService.setCharacteristic(HAPCharacteristic.Manufacturer, this.camConfig.manufacturer || 'not configured');
        infoService.setCharacteristic(HAPCharacteristic.Model, this.camConfig.model || 'not configured');
        infoService.setCharacteristic(HAPCharacteristic.SerialNumber, this.camConfig.serial || 'not configured');
        if ((this.camConfig.firmware !== undefined) && (this.camConfig.firmware !== "")) {
            infoService.setCharacteristic(HAPCharacteristic.FirmwareRevision, this.camConfig.firmware);
        }
        hapDevice.on('identify', function (paired, callback) {
            _this.FLogger.debug('camera identify');
            callback(); // success
        });
        hapDevice.cameraSource = this;
        this._camera = hapDevice;
    };
    THomeKitIPCamera.prototype.createCameraControlService = function () {
        var controlService = new HAP.Service.CameraControl();
        this._camera.services.push(controlService);
    };
    THomeKitIPCamera.prototype.createStreamControllers = function () {
        var options = this.createOptionsDictionary();
        var maxStreams = this.camConfig.numberOfStreams || 2;
        for (var i = 0; i < maxStreams; i++) {
            var streamController = new StreamController_1.StreamController(i, options, this);
            this._camera.services.push(streamController.service);
            this.streamControllers.push(streamController);
        }
    };
    THomeKitIPCamera.prototype.publishCamera = function () {
        this._camera.publish({
            username: this.camConfig.username,
            port: this.camConfig.port,
            pincode: this.camConfig.pincode,
            category: HAP.Accessory.Categories.CAMERA,
            mdns: {
                interface: this.camConfig.interface,
                reuseAddr: true
            }
        }, false);
    };
    THomeKitIPCamera.prototype.handleCloseConnection = function (connectionID) {
        var e_1, _a;
        try {
            for (var _b = __values(this.streamControllers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var controller = _c.value;
                controller.handleCloseConnection(connectionID);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    THomeKitIPCamera.prototype.handleSnapshotRequest = function (request, callback) {
        var params = {
            source: this.camConfig.source,
            width: request.width,
            height: request.height,
        };
        var ffmpegCommand = this.camConfig.ffmpegCommandLine.snapshot.map(function (s) { return s.replace(/\$\{(.*?)\}/g, function (_, word) {
            return params[word];
        }); });
        this.FLogger.debug("Snapshot run: ffmpeg " + ffmpegCommand.join(' '));
        var ffmpeg = child_process_1.spawn('ffmpeg', ffmpegCommand, { env: process.env });
        var imageBuffer = Buffer.alloc(0);
        ffmpeg.stdout.on('data', function (data) {
            imageBuffer = Buffer.concat([imageBuffer, data]);
        });
        ffmpeg.on('close', function (code) {
            callback(undefined, imageBuffer);
        });
    };
    THomeKitIPCamera.prototype.prepareStream = function (request, callback) {
        var sessionInfo = {};
        var sessionID = request["sessionID"];
        var targetAddress = request["targetAddress"];
        sessionInfo["address"] = targetAddress;
        var response = {};
        var videoInfo = request["video"];
        if (videoInfo) {
            var targetPort = videoInfo["port"];
            var srtp_key = videoInfo["srtp_key"];
            var srtp_salt = videoInfo["srtp_salt"];
            var videoResp = {
                port: targetPort,
                ssrc: 1,
                srtp_key: srtp_key,
                srtp_salt: srtp_salt
            };
            response["video"] = videoResp;
            sessionInfo["video_port"] = targetPort;
            sessionInfo["video_srtp"] = Buffer.concat([srtp_key, srtp_salt]);
            sessionInfo["video_ssrc"] = 1;
        }
        var audioInfo = request["audio"];
        if (audioInfo) {
            var targetPort = audioInfo["port"];
            var srtp_key = audioInfo["srtp_key"];
            var srtp_salt = audioInfo["srtp_salt"];
            var audioResp = {
                port: targetPort,
                ssrc: 1,
                srtp_key: srtp_key,
                srtp_salt: srtp_salt
            };
            response["audio"] = audioResp;
            sessionInfo["audio_port"] = targetPort;
            sessionInfo["audio_srtp"] = Buffer.concat([srtp_key, srtp_salt]);
            sessionInfo["audio_ssrc"] = 1;
        }
        var currentAddress = ip.address();
        var addressResp = {
            address: currentAddress
        };
        if (ip.isV4Format(currentAddress)) {
            addressResp["type"] = "v4";
        }
        else {
            addressResp["type"] = "v6";
        }
        response["address"] = addressResp;
        this.pendingSessions[hap_nodejs_1.uuid.unparse(sessionID, 0)] = sessionInfo;
        callback(response);
    };
    THomeKitIPCamera.prototype.handleStreamRequest = function (request) {
        var sessionID = request["sessionID"];
        var requestType = request["type"];
        if (sessionID) {
            var sessionIdentifier = hap_nodejs_1.uuid.unparse(sessionID, 0);
            if (requestType == "start") {
                var sessionInfo = this.pendingSessions[sessionIdentifier];
                if (sessionInfo) {
                    var width = 1280;
                    var height = 720;
                    var fps = 30;
                    var bitrate = 300;
                    var codec = this.camConfig.codec || 'libx264';
                    var videoInfo = request["video"];
                    if (videoInfo) {
                        width = videoInfo["width"];
                        height = videoInfo["height"];
                        var expectedFPS = videoInfo["fps"];
                        if (expectedFPS < fps) {
                            fps = expectedFPS;
                        }
                        bitrate = videoInfo["max_bit_rate"];
                    }
                    var targetAddress = sessionInfo["address"];
                    var targetVideoPort = sessionInfo["video_port"];
                    var videoKey = sessionInfo["video_srtp"];
                    var params_1 = {
                        source: this.camConfig.source,
                        codec: codec,
                        fps: fps,
                        width: width,
                        height: height,
                        bitrate: bitrate,
                        videokey: videoKey.toString('base64'),
                        targetAddress: targetAddress,
                        targetVideoPort: targetVideoPort
                    };
                    var ffmpegCommand = this.camConfig.ffmpegCommandLine.stream.map(function (s) { return s.replace(/\$\{(.*?)\}/g, function (_, word) {
                        return params_1[word];
                    }); });
                    this.FLogger.debug("Stream run: ffmpeg " + ffmpegCommand.join(' '));
                    var ffmpeg = child_process_1.spawn('ffmpeg', ffmpegCommand, { env: process.env });
                    var devnull = __webpack_require__(/*! dev-null */ "dev-null");
                    ffmpeg.stdout.pipe(devnull());
                    ffmpeg.stderr.pipe(devnull());
                    this.ongoingSessions[sessionIdentifier] = ffmpeg;
                }
                delete this.pendingSessions[sessionIdentifier];
            }
            else if (requestType == "stop") {
                var ffmpegProcess = this.ongoingSessions[sessionIdentifier];
                if (ffmpegProcess) {
                    ffmpegProcess.kill('SIGKILL');
                }
                delete this.ongoingSessions[sessionIdentifier];
            }
        }
    };
    return THomeKitIPCamera;
}());
exports.THomeKitIPCamera = THomeKitIPCamera;


/***/ }),

/***/ "./yahka.ioBroker-adapter.ts":
/*!***********************************!*\
  !*** ./yahka.ioBroker-adapter.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yahka_homekit_ipcamera_1 = __webpack_require__(/*! ./yahka.homekit-ipcamera */ "./yahka.homekit-ipcamera.ts");
/// <reference path="./typings/index.d.ts" />
var hkBridge = __webpack_require__(/*! ./yahka.homekit-bridge */ "./yahka.homekit-bridge.ts");
// import * as mac from './node_modules/macaddress';
var functions_factory_1 = __webpack_require__(/*! ./yahka.functions/functions.factory */ "./yahka.functions/functions.factory.ts");
function isSubscriptionRequestor(param) {
    return param["subscriptionRequests"] !== undefined &&
        param["subscriptionRequests"] instanceof Array;
}
function isCustomCharacteristicConfig(config) {
    if (!config)
        return false;
    var myConfig = config;
    return (myConfig.inOutFunction !== undefined) || (myConfig.conversionFunction !== undefined) || (myConfig.inOutParameters !== undefined);
}
var TIOBrokerAdapter = /** @class */ (function () {
    function TIOBrokerAdapter(adapter, controllerPath) {
        this.adapter = adapter;
        this.controllerPath = controllerPath;
        this.stateToEventMap = new Map();
        this.objectToEventMap = new Map();
        this.devices = [];
        this.verboseHAPLogging = false;
        adapter.on('ready', this.adapterReady.bind(this));
        adapter.on('stateChange', this.handleState.bind(this));
        adapter.on('message', this.handleMessage.bind(this));
        adapter.on('unload', this.handleUnload.bind(this));
    }
    TIOBrokerAdapter.prototype.adapterReady = function () {
        hkBridge.initHAP(this.controllerPath + '/' + this.adapter.systemConfig.dataDir + this.adapter.name + '.' + this.adapter.instance + '.hapdata', this.handleHAPLogEvent.bind(this));
        this.adapter.log.info('adapter ready, checking config');
        var config = this.adapter.config;
        this.createHomeKitBridges(config);
        this.createCameraDevices(config);
    };
    TIOBrokerAdapter.prototype.createHomeKitBridges = function (config) {
        var bridgeConfig = config.bridge;
        if (!config.firstTimeInitialized) {
            this.adapter.log.info('first time initialization');
            this.adapter.log.debug('system config:' + JSON.stringify(this.adapter.systemConfig));
            bridgeConfig.ident = "Yahka-" + this.adapter.instance;
            bridgeConfig.name = bridgeConfig.ident;
            bridgeConfig.serial = bridgeConfig.ident;
            var usr = [];
            for (var i = 0; i < 6; i++)
                usr[i] = ('00' + (Math.floor((Math.random() * 256)).toString(16))).substr(-2);
            bridgeConfig.username = usr.join(':');
            bridgeConfig.pincode = '123-45-678';
            bridgeConfig.port = 0;
            bridgeConfig.verboseLogging = false;
            config.firstTimeInitialized = true;
            this.adapter.extendForeignObject('system.adapter.' + this.adapter.name + '.' + this.adapter.instance, { native: config }, undefined);
        }
        this.verboseHAPLogging = bridgeConfig.verboseLogging == true;
        this.adapter.log.debug('creating bridge');
        this.devices.push(new hkBridge.THomeKitBridge(config.bridge, this, this.adapter.log));
    };
    TIOBrokerAdapter.prototype.createCameraDevices = function (config) {
        var e_1, _a;
        var cameraArray = config.cameras;
        if (cameraArray === undefined)
            return;
        try {
            for (var cameraArray_1 = __values(cameraArray), cameraArray_1_1 = cameraArray_1.next(); !cameraArray_1_1.done; cameraArray_1_1 = cameraArray_1.next()) {
                var cameraConfig = cameraArray_1_1.value;
                this.adapter.log.debug('creating camera');
                this.devices.push(new yahka_homekit_ipcamera_1.THomeKitIPCamera(cameraConfig, this.adapter.log));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (cameraArray_1_1 && !cameraArray_1_1.done && (_a = cameraArray_1.return)) _a.call(cameraArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    TIOBrokerAdapter.prototype.handleHAPLogEvent = function (message) {
        if (this.verboseHAPLogging) {
            console.log("HAP debug message", message);
            this.adapter.log.debug("HAP debug message: " + message);
        }
    };
    TIOBrokerAdapter.prototype.handleState = function (id, state) {
        var e_2, _a;
        // Warning, state can be null if it was deleted
        var notifyArray = this.stateToEventMap.get(id);
        if (!notifyArray) {
            //this.adapter.log.debug('nobody subscribed for this state');
            return;
        }
        this.adapter.log.debug('got a stateChange for [' + id + ']');
        // try to convert it to a number
        convertStateValueToNumber(state);
        try {
            for (var notifyArray_1 = __values(notifyArray), notifyArray_1_1 = notifyArray_1.next(); !notifyArray_1_1.done; notifyArray_1_1 = notifyArray_1.next()) {
                var method = notifyArray_1_1.value;
                method(state);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (notifyArray_1_1 && !notifyArray_1_1.done && (_a = notifyArray_1.return)) _a.call(notifyArray_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    TIOBrokerAdapter.prototype.handleMessage = function (obj) {
        if (typeof obj === 'object' && obj.message) {
            if (obj.command === 'send') {
                // Send response in callback if required
                if (obj.callback)
                    this.adapter.sendTo(obj.from, obj.command, 'Message received', obj.callback);
            }
        }
    };
    TIOBrokerAdapter.prototype.handleUnload = function (callback) {
        try {
            this.adapter.log.info('cleaning up ...');
            hkBridge.deinitHAP();
            this.adapter.log.info('cleaned up ...');
            callback();
        }
        catch (e) {
            callback();
        }
    };
    TIOBrokerAdapter.prototype.handleInOutSubscriptionRequest = function (requestor, changeNotify) {
        var e_3, _a;
        if (requestor.subscriptionRequests.length == 0)
            return;
        var _loop_1 = function (subscriptionRequest) {
            var changeInterceptor = function (ioValue) { return subscriptionRequest.subscriptionEvent(ioValue, changeNotify); };
            if (subscriptionRequest.subscriptionType === 'state') {
                var existingArray = this_1.stateToEventMap.get(subscriptionRequest.subscriptionIdentifier);
                if (!existingArray) {
                    existingArray = [changeInterceptor];
                    this_1.stateToEventMap.set(subscriptionRequest.subscriptionIdentifier, existingArray);
                }
                else
                    existingArray.push(changeInterceptor);
                this_1.adapter.subscribeForeignStates(subscriptionRequest.subscriptionIdentifier);
                this_1.adapter.log.debug('added subscription for: [' + subscriptionRequest.subscriptionType + ']' + subscriptionRequest.subscriptionIdentifier);
                this_1.adapter.getForeignState(subscriptionRequest.subscriptionIdentifier, function (_, value) {
                    convertStateValueToNumber(value);
                    changeInterceptor(value);
                });
            }
            else {
                this_1.adapter.log.warn('unknown subscription type: ' + subscriptionRequest.subscriptionType);
            }
        };
        var this_1 = this;
        try {
            for (var _b = __values(requestor.subscriptionRequests), _c = _b.next(); !_c.done; _c = _b.next()) {
                var subscriptionRequest = _c.value;
                _loop_1(subscriptionRequest);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    TIOBrokerAdapter.prototype.CreateBinding = function (characteristicConfig, changeNotify) {
        if (isCustomCharacteristicConfig(characteristicConfig)) {
            var inoutFunc = functions_factory_1.functionFactory.createInOutFunction(this.adapter, characteristicConfig.inOutFunction, characteristicConfig.inOutParameters);
            if (inoutFunc === undefined) {
                this.adapter.log.error('[' + characteristicConfig.name + '] could not create inout-function: ' + characteristicConfig.inOutFunction + ' with params: ' + JSON.stringify(characteristicConfig.inOutParameters));
                return undefined;
            }
            var convFunc = functions_factory_1.functionFactory.createConversionFunction(this.adapter, characteristicConfig.conversionFunction, characteristicConfig.conversionParameters);
            if (convFunc === undefined) {
                this.adapter.log.error('[' + characteristicConfig.name + '] could not create conversion-function: ' + characteristicConfig.conversionFunction + ' with params: ' + JSON.stringify(characteristicConfig.conversionParameters));
                return undefined;
            }
            if (isSubscriptionRequestor(inoutFunc)) {
                this.handleInOutSubscriptionRequest(inoutFunc, changeNotify);
            }
            return {
                conversion: convFunc,
                inOut: inoutFunc
            };
        }
        return null;
    };
    return TIOBrokerAdapter;
}());
exports.TIOBrokerAdapter = TIOBrokerAdapter;
function convertStateValueToNumber(state) {
    if ((state) && (state.val !== "") && (state.val != null)) {
        var numValue = Number(state.val);
        if (!isNaN(numValue)) {
            state.val = numValue;
        }
    }
}


/***/ }),

/***/ "@iobroker/adapter-core":
/*!*****************************************!*\
  !*** external "@iobroker/adapter-core" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@iobroker/adapter-core");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "dev-null":
/*!***************************!*\
  !*** external "dev-null" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dev-null");

/***/ }),

/***/ "hap-nodejs":
/*!*****************************!*\
  !*** external "hap-nodejs" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hap-nodejs");

/***/ }),

/***/ "hap-nodejs/lib/Characteristic":
/*!************************************************!*\
  !*** external "hap-nodejs/lib/Characteristic" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hap-nodejs/lib/Characteristic");

/***/ }),

/***/ "hap-nodejs/lib/Service":
/*!*****************************************!*\
  !*** external "hap-nodejs/lib/Service" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hap-nodejs/lib/Service");

/***/ }),

/***/ "hap-nodejs/lib/StreamController":
/*!**************************************************!*\
  !*** external "hap-nodejs/lib/StreamController" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hap-nodejs/lib/StreamController");

/***/ }),

/***/ "hap-nodejs/lib/gen/HomeKitTypes":
/*!**************************************************!*\
  !*** external "hap-nodejs/lib/gen/HomeKitTypes" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hap-nodejs/lib/gen/HomeKitTypes");

/***/ }),

/***/ "hap-nodejs/lib/util/uuid":
/*!*******************************************!*\
  !*** external "hap-nodejs/lib/util/uuid" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hap-nodejs/lib/util/uuid");

/***/ }),

/***/ "ip":
/*!*********************!*\
  !*** external "ip" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map