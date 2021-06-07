"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCountries = exports.fetchDailyData = exports.fetchData = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = 'https://covid19.mathdro.id/api';

var fetchData = function fetchData() {
  var _ref, _ref$data, confirmed, recovered, deaths, lastUpdate;

  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(url));

        case 3:
          _ref = _context.sent;
          _ref$data = _ref.data;
          confirmed = _ref$data.confirmed;
          recovered = _ref$data.recovered;
          deaths = _ref$data.deaths;
          lastUpdate = _ref$data.lastUpdate;
          return _context.abrupt("return", {
            confirmed: confirmed,
            recovered: recovered,
            deaths: deaths,
            lastUpdate: lastUpdate
          });

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

exports.fetchData = fetchData;

var fetchDailyData = function fetchDailyData() {
  var _ref2, data, modifiedData;

  return regeneratorRuntime.async(function fetchDailyData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(url, "/daily")));

        case 3:
          _ref2 = _context2.sent;
          data = _ref2.data;
          modifiedData = data.map(function (dailyData) {
            return {
              confirmed: dailyData.confirmed.total,
              deaths: dailyData.deaths.total,
              date: dailyData.reportDate
            };
          });
          return _context2.abrupt("return", modifiedData);

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.fetchDailyData = fetchDailyData;

var fetchCountries = function fetchCountries() {
  var _ref3, countries;

  return regeneratorRuntime.async(function fetchCountries$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(url, "/countries")));

        case 3:
          _ref3 = _context3.sent;
          countries = _ref3.data.countries;
          return _context3.abrupt("return", countries.map(function (country) {
            return country.name;
          }));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.fetchCountries = fetchCountries;
//# sourceMappingURL=index.dev.js.map
