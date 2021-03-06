;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.squel = factory();
  }
}(this, function() {
"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// append to string if non-empty
function _pad(str, pad) {
  return str.length ? str + pad : str;
} // Extend given object's with other objects' properties, overriding existing ones if necessary


function _extend(dst) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (dst && sources) {
    var _iterator = _createForOfIteratorHelper(sources),
        _step;

    try {
      var _loop = function _loop() {
        var src = _step.value;

        if (_typeof(src) === 'object') {
          Object.getOwnPropertyNames(src).forEach(function (key) {
            dst[key] = src[key];
          });
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return dst;
}

; // get whether object is a plain object

function _isPlainObject(obj) {
  return obj && obj.constructor.prototype === Object.prototype;
}

; // get whether object is an array

function _isArray(obj) {
  return obj && obj.constructor.prototype === Array.prototype;
}

; // clone given item

function _clone(src) {
  if (!src) {
    return src;
  }

  if (typeof src.clone === 'function') {
    return src.clone();
  } else if (_isPlainObject(src) || _isArray(src)) {
    var ret = new src.constructor();
    Object.getOwnPropertyNames(src).forEach(function (key) {
      if (typeof src[key] !== 'function') {
        ret[key] = _clone(src[key]);
      }
    });
    return ret;
  } else {
    return JSON.parse(JSON.stringify(src));
  }
}

;
/**
 * Register a value type handler
 *
 * Note: this will override any existing handler registered for this value type.
 */

function _registerValueHandler(handlers, type, handler) {
  var typeofType = _typeof(type);

  if (typeofType !== 'function' && typeofType !== 'string') {
    throw new Error("type must be a class constructor or string");
  }

  if (typeof handler !== 'function') {
    throw new Error("handler must be a function");
  }

  var _iterator2 = _createForOfIteratorHelper(handlers),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var typeHandler = _step2.value;

      if (typeHandler.type === type) {
        typeHandler.handler = handler;
        return;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  handlers.push({
    type: type,
    handler: handler
  });
}

;
/**
 * Get value type handler for given type
 */

function getValueHandler(value, localHandlers, globalHandlers) {
  return _getValueHandler(value, localHandlers) || _getValueHandler(value, globalHandlers);
}

;

function _getValueHandler(value, handlers) {
  for (var i = 0; i < handlers.length; i++) {
    var typeHandler = handlers[i]; // if type is a string then use `typeof` or else use `instanceof`

    if (_typeof(value) === typeHandler.type || typeof typeHandler.type !== 'string' && value instanceof typeHandler.type) {
      return typeHandler.handler;
    }
  }
}

;
/**
 * Build base squel classes and methods
 */

function _buildSquel() {
  var flavour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var cls = {
    // Get whether obj is a query builder
    isSquelBuilder: function isSquelBuilder(obj) {
      return obj && !!obj._toParamString;
    }
  }; // Get whether nesting should be applied for given item

  var _shouldApplyNesting = function _shouldApplyNesting(obj) {
    return !cls.isSquelBuilder(obj) || !obj.options.rawNesting;
  }; // default query builder options


  cls.DefaultQueryBuilderOptions = {
    // If true then table names will be rendered inside quotes. The quote character used is configurable via the nameQuoteCharacter option.
    autoQuoteTableNames: false,
    // If true then field names will rendered inside quotes. The quote character used is configurable via the nameQuoteCharacter option.
    autoQuoteFieldNames: false,
    // If true then alias names will rendered inside quotes. The quote character used is configurable via the `tableAliasQuoteCharacter` and `fieldAliasQuoteCharacter` options.
    autoQuoteAliasNames: true,
    // If true then table alias names will rendered after AS keyword.
    useAsForTableAliasNames: false,
    // The quote character used for when quoting table and field names
    nameQuoteCharacter: '`',
    // The quote character used for when quoting table alias names
    tableAliasQuoteCharacter: '`',
    // The quote character used for when quoting table alias names
    fieldAliasQuoteCharacter: '"',
    // Custom value handlers where key is the value type and the value is the handler function
    valueHandlers: [],
    // Character used to represent a parameter value
    parameterCharacter: '?',
    // Numbered parameters returned from toParam() as $1, $2, etc.
    numberedParameters: false,
    // Numbered parameters prefix character(s)
    numberedParametersPrefix: '$',
    // Numbered parameters start at this number.
    numberedParametersStartAt: 1,
    // If true then replaces all single quotes within strings. The replacement string used is configurable via the `singleQuoteReplacement` option.
    replaceSingleQuotes: false,
    // The string to replace single quotes with in query strings
    singleQuoteReplacement: '\'\'',
    // String used to join individual blocks in a query when it's stringified
    separator: ' ',
    // Function for formatting string values prior to insertion into query string
    stringFormatter: null,
    // Whether to prevent the addition of brackets () when nesting this query builder's output
    rawNesting: false
  }; // Global custom value handlers for all instances of builder

  cls.globalValueHandlers = [];
  /*
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  # Custom value types
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
   */
  // Register a new value handler

  cls.registerValueHandler = function (type, handler) {
    _registerValueHandler(cls.globalValueHandlers, type, handler);
  };
  /*
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  # Base classes
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  */
  // Base class for cloneable builders


  cls.Cloneable = /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: "clone",

      /**
       * Clone this builder
       */
      value: function clone() {
        var newInstance = new this.constructor();
        return _extend(newInstance, _clone(_extend({}, this)));
      }
    }]);

    return _class;
  }(); // Base class for all builders


  cls.BaseBuilder = /*#__PURE__*/function (_cls$Cloneable) {
    _inherits(_class2, _cls$Cloneable);

    var _super = _createSuper(_class2);

    /**
     * Constructor.
     * this.param  {Object} options Overriding one or more of `cls.DefaultQueryBuilderOptions`.
     */
    function _class2(options) {
      var _this;

      _classCallCheck(this, _class2);

      _this = _super.call(this);
      var defaults = JSON.parse(JSON.stringify(cls.DefaultQueryBuilderOptions)); // for function values, etc we need to manually copy

      ['stringFormatter'].forEach(function (p) {
        defaults[p] = cls.DefaultQueryBuilderOptions[p];
      });
      _this.options = _extend({}, defaults, options);
      return _this;
    }
    /**
     * Register a custom value handler for this builder instance.
     *
     * Note: this will override any globally registered handler for this value type.
     */


    _createClass(_class2, [{
      key: "registerValueHandler",
      value: function registerValueHandler(type, handler) {
        _registerValueHandler(this.options.valueHandlers, type, handler);

        return this;
      }
      /**
       * Sanitize given expression.
       */

    }, {
      key: "_sanitizeExpression",
      value: function _sanitizeExpression(expr) {
        // If it's not a base builder instance
        if (!cls.isSquelBuilder(expr)) {
          // It must then be a string
          if (typeof expr !== "string") {
            throw new Error("expression must be a string or builder instance");
          }
        }

        return expr;
      }
      /**
       * Sanitize the given name.
       *
       * The 'type' parameter is used to construct a meaningful error message in case validation fails.
       */

    }, {
      key: "_sanitizeName",
      value: function _sanitizeName(value, type) {
        if (typeof value !== "string") {
          throw new Error("".concat(type, " must be a string"));
        }

        return value;
      }
    }, {
      key: "_sanitizeField",
      value: function _sanitizeField(item) {
        if (!cls.isSquelBuilder(item)) {
          item = this._sanitizeName(item, "field name");
        }

        return item;
      }
    }, {
      key: "_sanitizeBaseBuilder",
      value: function _sanitizeBaseBuilder(item) {
        if (cls.isSquelBuilder(item)) {
          return item;
        }

        throw new Error("must be a builder instance");
      }
    }, {
      key: "_sanitizeTable",
      value: function _sanitizeTable(item) {
        if (typeof item !== "string") {
          try {
            item = this._sanitizeBaseBuilder(item);
          } catch (e) {
            throw new Error("table name must be a string or a builder");
          }
        } else {
          item = this._sanitizeName(item, 'table');
        }

        return item;
      }
    }, {
      key: "_sanitizeTableAlias",
      value: function _sanitizeTableAlias(item) {
        return this._sanitizeName(item, "table alias");
      }
    }, {
      key: "_sanitizeFieldAlias",
      value: function _sanitizeFieldAlias(item) {
        return this._sanitizeName(item, "field alias");
      } // Sanitize the given limit/offset value.

    }, {
      key: "_sanitizeLimitOffset",
      value: function _sanitizeLimitOffset(value) {
        value = parseInt(value);

        if (0 > value || isNaN(value)) {
          throw new Error("limit/offset must be >= 0");
        }

        return value;
      } // Santize the given field value

    }, {
      key: "_sanitizeValue",
      value: function _sanitizeValue(item) {
        var itemType = _typeof(item);

        if (null === item) {// null is allowed
        } else if ("string" === itemType || "number" === itemType || "boolean" === itemType) {// primitives are allowed
        } else if (cls.isSquelBuilder(item)) {// Builders allowed
        } else {
          var typeIsValid = !!getValueHandler(item, this.options.valueHandlers, cls.globalValueHandlers);

          if (!typeIsValid) {
            throw new Error("field value must be a string, number, boolean, null or one of the registered custom value types");
          }
        }

        return item;
      } // Escape a string value, e.g. escape quotes and other characters within it.

    }, {
      key: "_escapeValue",
      value: function _escapeValue(value) {
        return this.options.replaceSingleQuotes && value ? value.replace(/\'/g, this.options.singleQuoteReplacement) : value;
      }
    }, {
      key: "_formatTableName",
      value: function _formatTableName(item) {
        if (this.options.autoQuoteTableNames) {
          var quoteChar = this.options.nameQuoteCharacter;
          item = "".concat(quoteChar).concat(item).concat(quoteChar);
        }

        return item;
      }
    }, {
      key: "_formatFieldAlias",
      value: function _formatFieldAlias(item) {
        if (this.options.autoQuoteAliasNames) {
          var quoteChar = this.options.fieldAliasQuoteCharacter;
          item = "".concat(quoteChar).concat(item).concat(quoteChar);
        }

        return item;
      }
    }, {
      key: "_formatTableAlias",
      value: function _formatTableAlias(item) {
        if (this.options.autoQuoteAliasNames) {
          var quoteChar = this.options.tableAliasQuoteCharacter;
          item = "".concat(quoteChar).concat(item).concat(quoteChar);
        }

        return this.options.useAsForTableAliasNames ? "AS ".concat(item) : item;
      }
    }, {
      key: "_formatFieldName",
      value: function _formatFieldName(item) {
        var formattingOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (this.options.autoQuoteFieldNames) {
          var quoteChar = this.options.nameQuoteCharacter;

          if (formattingOptions.ignorePeriodsForFieldNameQuotes) {
            // a.b.c -> `a.b.c`
            item = "".concat(quoteChar).concat(item).concat(quoteChar);
          } else {
            // a.b.c -> `a`.`b`.`c`
            item = item.split('.').map(function (v) {
              // treat '*' as special case (#79)
              return '*' === v ? v : "".concat(quoteChar).concat(v).concat(quoteChar);
            }).join('.');
          }
        }

        return item;
      } // Format the given custom value

    }, {
      key: "_formatCustomValue",
      value: function _formatCustomValue(value, asParam, formattingOptions) {
        // user defined custom handlers takes precedence
        var customHandler = getValueHandler(value, this.options.valueHandlers, cls.globalValueHandlers); // use the custom handler if available

        if (customHandler) {
          value = customHandler(value, asParam, formattingOptions); // custom value handler can instruct caller not to process returned value

          if (value && value.rawNesting) {
            return {
              formatted: true,
              rawNesting: true,
              value: value.value
            };
          }
        }

        return {
          formatted: !!customHandler,
          value: value
        };
      }
      /**
       * Format given value for inclusion into parameter values array.
       */

    }, {
      key: "_formatValueForParamArray",
      value: function _formatValueForParamArray(value) {
        var _this2 = this;

        var formattingOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (_isArray(value)) {
          return value.map(function (v) {
            return _this2._formatValueForParamArray(v, formattingOptions);
          });
        } else {
          return this._formatCustomValue(value, true, formattingOptions).value;
        }
      }
      /**
       * Format the given field value for inclusion into the query string
       */

    }, {
      key: "_formatValueForQueryString",
      value: function _formatValueForQueryString(initialValue) {
        var _this3 = this;

        var formattingOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // maybe we have a cusotm value handler
        var _this$_formatCustomVa = this._formatCustomValue(initialValue, false, formattingOptions),
            rawNesting = _this$_formatCustomVa.rawNesting,
            formatted = _this$_formatCustomVa.formatted,
            value = _this$_formatCustomVa.value; // if formatting took place then return it directly


        if (formatted) {
          if (rawNesting) {
            return value;
          } else {
            return this._applyNestingFormatting(value, _shouldApplyNesting(initialValue));
          }
        } // if it's an array then format each element separately


        if (_isArray(value)) {
          value = value.map(function (v) {
            return _this3._formatValueForQueryString(v);
          });
          value = this._applyNestingFormatting(value.join(', '), _shouldApplyNesting(value));
        } else {
          var typeofValue = _typeof(value);

          if (null === value) {
            value = "NULL";
          } else if (typeofValue === "boolean") {
            value = value ? "TRUE" : "FALSE";
          } else if (cls.isSquelBuilder(value)) {
            value = this._applyNestingFormatting(value.toString(), _shouldApplyNesting(value));
          } else if (typeofValue !== "number") {
            // if it's a string and we have custom string formatting turned on then use that
            if ('string' === typeofValue && this.options.stringFormatter) {
              return this.options.stringFormatter(value);
            }

            if (formattingOptions.dontQuote) {
              value = "".concat(value);
            } else {
              var escapedValue = this._escapeValue(value);

              value = "'".concat(escapedValue, "'");
            }
          }
        }

        return value;
      }
    }, {
      key: "_applyNestingFormatting",
      value: function _applyNestingFormatting(str) {
        var nesting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (str && typeof str === 'string' && nesting && !this.options.rawNesting) {
          // apply brackets if they're not already existing
          var alreadyHasBrackets = '(' === str.charAt(0) && ')' === str.charAt(str.length - 1);

          if (alreadyHasBrackets) {
            // check that it's the form "((x)..(y))" rather than "(x)..(y)"
            var idx = 0,
                open = 1;

            while (str.length - 1 > ++idx) {
              var c = str.charAt(idx);

              if ('(' === c) {
                open++;
              } else if (')' === c) {
                open--;

                if (1 > open) {
                  alreadyHasBrackets = false;
                  break;
                }
              }
            }
          }

          if (!alreadyHasBrackets) {
            str = "(".concat(str, ")");
          }
        }

        return str;
      }
      /**
       * Build given string and its corresponding parameter values into
       * output.
       *
       * @param {String} str
       * @param {Array}  values
       * @param {Object} [options] Additional options.
       * @param {Boolean} [options.buildParameterized] Whether to build paramterized string. Default is false.
       * @param {Boolean} [options.nested] Whether this expression is nested within another.
       * @param {Boolean} [options.formattingOptions] Formatting options for values in query string.
       * @return {Object}
       */

    }, {
      key: "_buildString",
      value: function _buildString(str, values) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var nested = options.nested,
            buildParameterized = options.buildParameterized,
            formattingOptions = options.formattingOptions;
        values = values || [];
        str = str || '';
        var formattedStr = '',
            curValue = -1,
            formattedValues = [];
        var paramChar = this.options.parameterCharacter;
        var idx = 0;

        while (str.length > idx) {
          // param char?
          if (str.substr(idx, paramChar.length) === paramChar) {
            var value = values[++curValue];

            if (buildParameterized) {
              if (cls.isSquelBuilder(value)) {
                var ret = value._toParamString({
                  buildParameterized: buildParameterized,
                  nested: true
                });

                formattedStr += ret.text;
                ret.values.forEach(function (value) {
                  return formattedValues.push(value);
                });
              } else {
                value = this._formatValueForParamArray(value, formattingOptions);

                if (_isArray(value)) {
                  // Array(6) -> "(??, ??, ??, ??, ??, ??)"
                  var tmpStr = value.map(function () {
                    return paramChar;
                  }).join(', ');
                  formattedStr += "(".concat(tmpStr, ")");
                  value.forEach(function (val) {
                    return formattedValues.push(val);
                  });
                } else {
                  formattedStr += paramChar;
                  formattedValues.push(value);
                }
              }
            } else {
              formattedStr += this._formatValueForQueryString(value, formattingOptions);
            }

            idx += paramChar.length;
          } else {
            formattedStr += str.charAt(idx);
            idx++;
          }
        }

        return {
          text: this._applyNestingFormatting(formattedStr, !!nested),
          values: formattedValues
        };
      }
      /**
       * Build all given strings and their corresponding parameter values into
       * output.
       *
       * @param {Array} strings
       * @param {Array}  strValues array of value arrays corresponding to each string.
       * @param {Object} [options] Additional options.
       * @param {Boolean} [options.buildParameterized] Whether to build paramterized string. Default is false.
       * @param {Boolean} [options.nested] Whether this expression is nested within another.
       * @return {Object}
       */

    }, {
      key: "_buildManyStrings",
      value: function _buildManyStrings(strings, strValues) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var totalStr = [],
            totalValues = [];

        for (var idx = 0; strings.length > idx; ++idx) {
          var inputString = strings[idx],
              inputValues = strValues[idx];

          var _this$_buildString = this._buildString(inputString, inputValues, {
            buildParameterized: options.buildParameterized,
            nested: false
          }),
              text = _this$_buildString.text,
              values = _this$_buildString.values;

          totalStr.push(text);
          values.forEach(function (value) {
            return totalValues.push(value);
          });
        }

        totalStr = totalStr.join(this.options.separator);
        return {
          text: totalStr.length ? this._applyNestingFormatting(totalStr, !!options.nested) : '',
          values: totalValues
        };
      }
      /**
       * Get parameterized representation of this instance.
       *
       * @param {Object} [options] Options.
       * @param {Boolean} [options.buildParameterized] Whether to build paramterized string. Default is false.
       * @param {Boolean} [options.nested] Whether this expression is nested within another.
       * @return {Object}
       */

    }, {
      key: "_toParamString",
      value: function _toParamString(options) {
        throw new Error('Not yet implemented');
      }
      /**
       * Get the expression string.
       * @return {String}
       */

    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this._toParamString(options).text;
      }
      /**
       * Get the parameterized expression string.
       * @return {Object}
       */

    }, {
      key: "toParam",
      value: function toParam() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this._toParamString(_extend({}, options, {
          buildParameterized: true
        }));
      }
    }]);

    return _class2;
  }(cls.Cloneable);
  /*
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  # cls.Expressions
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  */

  /**
   * An SQL expression builder.
   *
   * SQL expressions are used in WHERE and ON clauses to filter data by various criteria.
   *
   * Expressions can be nested. Nested expression contains can themselves
   * contain nested expressions. When rendered a nested expression will be
   * fully contained within brackets.
   *
   * All the build methods in this object return the object instance for chained method calling purposes.
   */


  cls.Expression = /*#__PURE__*/function (_cls$BaseBuilder) {
    _inherits(_class3, _cls$BaseBuilder);

    var _super2 = _createSuper(_class3);

    // Initialise the expression.
    function _class3(options) {
      var _this4;

      _classCallCheck(this, _class3);

      _this4 = _super2.call(this, options);
      _this4._nodes = [];
      return _this4;
    } // Combine the current expression with the given expression using the intersection operator (AND).


    _createClass(_class3, [{
      key: "and",
      value: function and(expr) {
        expr = this._sanitizeExpression(expr);

        for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }

        this._nodes.push({
          type: 'AND',
          expr: expr,
          para: params
        });

        return this;
      } // Combine the current expression with the given expression using the union operator (OR).

    }, {
      key: "or",
      value: function or(expr) {
        expr = this._sanitizeExpression(expr);

        for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          params[_key3 - 1] = arguments[_key3];
        }

        this._nodes.push({
          type: 'OR',
          expr: expr,
          para: params
        });

        return this;
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var totalStr = [],
            totalValues = [];

        var _iterator3 = _createForOfIteratorHelper(this._nodes),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var node = _step3.value;
            var type = node.type,
                expr = node.expr,
                para = node.para;

            var _ref = cls.isSquelBuilder(expr) ? expr._toParamString({
              buildParameterized: options.buildParameterized,
              nested: true
            }) : this._buildString(expr, para, {
              buildParameterized: options.buildParameterized
            }),
                text = _ref.text,
                values = _ref.values;

            if (totalStr.length) {
              totalStr.push(type);
            }

            totalStr.push(text);
            values.forEach(function (value) {
              return totalValues.push(value);
            });
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        totalStr = totalStr.join(' ');
        return {
          text: this._applyNestingFormatting(totalStr, !!options.nested),
          values: totalValues
        };
      }
    }]);

    return _class3;
  }(cls.BaseBuilder);
  /*
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  # cls.Case
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  */

  /**
   * An SQL CASE expression builder.
   *
   * SQL cases are used to select proper values based on specific criteria.
   */


  cls.Case = /*#__PURE__*/function (_cls$BaseBuilder2) {
    _inherits(_class4, _cls$BaseBuilder2);

    var _super3 = _createSuper(_class4);

    function _class4(fieldName) {
      var _this5;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, _class4);

      _this5 = _super3.call(this, options);

      if (_isPlainObject(fieldName)) {
        options = fieldName;
        fieldName = null;
      }

      if (fieldName) {
        _this5._fieldName = _this5._sanitizeField(fieldName);
      }

      _this5.options = _extend({}, cls.DefaultQueryBuilderOptions, options);
      _this5._cases = [];
      _this5._elseValue = null;
      return _this5;
    }

    _createClass(_class4, [{
      key: "when",
      value: function when(expression) {
        for (var _len4 = arguments.length, values = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          values[_key4 - 1] = arguments[_key4];
        }

        this._cases.unshift({
          expression: expression,
          values: values || []
        });

        return this;
      }
    }, {
      key: "then",
      value: function then(result) {
        if (this._cases.length == 0) {
          throw new Error("when() needs to be called first");
        }

        this._cases[0].result = result;
        return this;
      }
    }, {
      key: "else",
      value: function _else(elseValue) {
        this._elseValue = elseValue;
        return this;
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var totalStr = '',
            totalValues = [];

        var _iterator4 = _createForOfIteratorHelper(this._cases),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _step4$value = _step4.value,
                expression = _step4$value.expression,
                values = _step4$value.values,
                result = _step4$value.result;
            totalStr = _pad(totalStr, ' ');

            var ret = this._buildString(expression, values, {
              buildParameterized: options.buildParameterized,
              nested: true
            });

            totalStr += "WHEN ".concat(ret.text, " THEN ").concat(this._formatValueForQueryString(result));
            ret.values.forEach(function (value) {
              return totalValues.push(value);
            });
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        if (totalStr.length) {
          totalStr += " ELSE ".concat(this._formatValueForQueryString(this._elseValue), " END");

          if (this._fieldName) {
            totalStr = "".concat(this._fieldName, " ").concat(totalStr);
          }

          totalStr = "CASE ".concat(totalStr);
        } else {
          totalStr = this._formatValueForQueryString(this._elseValue);
        }

        return {
          text: totalStr,
          values: totalValues
        };
      }
    }]);

    return _class4;
  }(cls.BaseBuilder);
  /*
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  # Building blocks
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  */

  /*
  # A building block represents a single build-step within a query building process.
  #
  # Query builders consist of one or more building blocks which get run in a particular order. Building blocks can
  # optionally specify methods to expose through the query builder interface. They can access all the input data for
  # the query builder and manipulate it as necessary, as well as append to the final query string output.
  #
  # If you wish to customize how queries get built or add proprietary query phrases and content then it is recommended
  # that you do so using one or more custom building blocks.
  #
  # Original idea posted in https://github.com/hiddentao/export/issues/10#issuecomment-15016427
  */


  cls.Block = /*#__PURE__*/function (_cls$BaseBuilder3) {
    _inherits(_class5, _cls$BaseBuilder3);

    var _super4 = _createSuper(_class5);

    function _class5(options) {
      _classCallCheck(this, _class5);

      return _super4.call(this, options);
    }
    /**
    # Get input methods to expose within the query builder.
    #
    # By default all methods except the following get returned:
    #   methods prefixed with _
    #   constructor and toString()
    #
    # @return Object key -> function pairs
    */


    _createClass(_class5, [{
      key: "exposedMethods",
      value: function exposedMethods() {
        var ret = {};
        var obj = this;

        while (obj) {
          Object.getOwnPropertyNames(obj).forEach(function (prop) {
            if ('constructor' !== prop && typeof obj[prop] === "function" && prop.charAt(0) !== '_' && !cls.Block.prototype[prop]) {
              ret[prop] = obj[prop];
            }
          });
          obj = Object.getPrototypeOf(obj);
        }

        ;
        return ret;
      }
    }]);

    return _class5;
  }(cls.BaseBuilder); // A fixed string which always gets output


  cls.StringBlock = /*#__PURE__*/function (_cls$Block) {
    _inherits(_class6, _cls$Block);

    var _super5 = _createSuper(_class6);

    function _class6(options, str) {
      var _this6;

      _classCallCheck(this, _class6);

      _this6 = _super5.call(this, options);
      _this6._str = str;
      return _this6;
    }

    _createClass(_class6, [{
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return {
          text: this._str,
          values: []
        };
      }
    }]);

    return _class6;
  }(cls.Block); // A function string block


  cls.FunctionBlock = /*#__PURE__*/function (_cls$Block2) {
    _inherits(_class7, _cls$Block2);

    var _super6 = _createSuper(_class7);

    function _class7(options) {
      var _this7;

      _classCallCheck(this, _class7);

      _this7 = _super6.call(this, options);
      _this7._strings = [];
      _this7._values = [];
      return _this7;
    }

    _createClass(_class7, [{
      key: "function",
      value: function _function(str) {
        this._strings.push(str);

        for (var _len5 = arguments.length, values = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          values[_key5 - 1] = arguments[_key5];
        }

        this._values.push(values);
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this._buildManyStrings(this._strings, this._values, options);
      }
    }]);

    return _class7;
  }(cls.Block); // value handler for FunctionValueBlock objects


  cls.registerValueHandler(cls.FunctionBlock, function (value) {
    var asParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return asParam ? value.toParam() : value.toString();
  });
  /*
  # Table specifier base class
  */

  cls.AbstractTableBlock = /*#__PURE__*/function (_cls$Block3) {
    _inherits(_class8, _cls$Block3);

    var _super7 = _createSuper(_class8);

    /**
     * @param {Boolean} [options.singleTable] If true then only allow one table spec.
     * @param {String} [options.prefix] String prefix for output.
     */
    function _class8(options, prefix) {
      var _this8;

      _classCallCheck(this, _class8);

      _this8 = _super7.call(this, options);
      _this8._tables = [];
      return _this8;
    }
    /**
    # Update given table.
    #
    # An alias may also be specified for the table.
    #
    # Concrete subclasses should provide a method which calls this
    */


    _createClass(_class8, [{
      key: "_table",
      value: function _table(table) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        alias = alias ? this._sanitizeTableAlias(alias) : alias;
        table = this._sanitizeTable(table);

        if (this.options.singleTable) {
          this._tables = [];
        }

        this._tables.push({
          table: table,
          alias: alias
        });
      } // get whether a table has been set

    }, {
      key: "_hasTable",
      value: function _hasTable() {
        return 0 < this._tables.length;
      }
      /**
       * @override
       */

    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var totalStr = '',
            totalValues = [];

        if (this._hasTable()) {
          // retrieve the parameterised queries
          var _iterator5 = _createForOfIteratorHelper(this._tables),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _step5$value = _step5.value,
                  table = _step5$value.table,
                  alias = _step5$value.alias;
              totalStr = _pad(totalStr, ', ');
              var tableStr = void 0;

              if (cls.isSquelBuilder(table)) {
                var _table$_toParamString = table._toParamString({
                  buildParameterized: options.buildParameterized,
                  nested: true
                }),
                    text = _table$_toParamString.text,
                    values = _table$_toParamString.values;

                tableStr = text;
                values.forEach(function (value) {
                  return totalValues.push(value);
                });
              } else {
                tableStr = this._formatTableName(table);
              }

              if (alias) {
                tableStr += " ".concat(this._formatTableAlias(alias));
              }

              totalStr += tableStr;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (this.options.prefix) {
            totalStr = "".concat(this.options.prefix, " ").concat(totalStr);
          }
        }

        return {
          text: totalStr,
          values: totalValues
        };
      }
    }]);

    return _class8;
  }(cls.Block); // target table for DELETE queries, DELETE <??> FROM


  cls.TargetTableBlock = /*#__PURE__*/function (_cls$AbstractTableBlo) {
    _inherits(_class9, _cls$AbstractTableBlo);

    var _super8 = _createSuper(_class9);

    function _class9() {
      _classCallCheck(this, _class9);

      return _super8.apply(this, arguments);
    }

    _createClass(_class9, [{
      key: "target",
      value: function target(table) {
        this._table(table);
      }
    }]);

    return _class9;
  }(cls.AbstractTableBlock); // Update Table


  cls.UpdateTableBlock = /*#__PURE__*/function (_cls$AbstractTableBlo2) {
    _inherits(_class10, _cls$AbstractTableBlo2);

    var _super9 = _createSuper(_class10);

    function _class10() {
      _classCallCheck(this, _class10);

      return _super9.apply(this, arguments);
    }

    _createClass(_class10, [{
      key: "table",
      value: function table(_table2) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        this._table(_table2, alias);
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!this._hasTable()) {
          throw new Error("table() needs to be called");
        }

        return _get(_getPrototypeOf(_class10.prototype), "_toParamString", this).call(this, options);
      }
    }]);

    return _class10;
  }(cls.AbstractTableBlock); // FROM table


  cls.FromTableBlock = /*#__PURE__*/function (_cls$AbstractTableBlo3) {
    _inherits(_class11, _cls$AbstractTableBlo3);

    var _super10 = _createSuper(_class11);

    function _class11(options) {
      _classCallCheck(this, _class11);

      return _super10.call(this, _extend({}, options, {
        prefix: 'FROM'
      }));
    }

    _createClass(_class11, [{
      key: "from",
      value: function from(table) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        this._table(table, alias);
      }
    }]);

    return _class11;
  }(cls.AbstractTableBlock); // INTO table


  cls.IntoTableBlock = /*#__PURE__*/function (_cls$AbstractTableBlo4) {
    _inherits(_class12, _cls$AbstractTableBlo4);

    var _super11 = _createSuper(_class12);

    function _class12(options) {
      _classCallCheck(this, _class12);

      return _super11.call(this, _extend({}, options, {
        prefix: 'INTO',
        singleTable: true
      }));
    }

    _createClass(_class12, [{
      key: "into",
      value: function into(table) {
        this._table(table);
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!this._hasTable()) {
          throw new Error("into() needs to be called");
        }

        return _get(_getPrototypeOf(_class12.prototype), "_toParamString", this).call(this, options);
      }
    }]);

    return _class12;
  }(cls.AbstractTableBlock); // (SELECT) Get field


  cls.GetFieldBlock = /*#__PURE__*/function (_cls$Block4) {
    _inherits(_class13, _cls$Block4);

    var _super12 = _createSuper(_class13);

    function _class13(options) {
      var _this9;

      _classCallCheck(this, _class13);

      _this9 = _super12.call(this, options);
      _this9._fields = [];
      return _this9;
    }
    /**
    # Add the given fields to the final result set.
    #
    # The parameter is an Object containing field names (or database functions) as the keys and aliases for the fields
    # as the values. If the value for a key is null then no alias is set for that field.
    #
    # Internally this method simply calls the field() method of this block to add each individual field.
    #
    # options.ignorePeriodsForFieldNameQuotes - whether to ignore period (.) when automatically quoting the field name
    */


    _createClass(_class13, [{
      key: "fields",
      value: function fields(_fields) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (_isArray(_fields)) {
          var _iterator6 = _createForOfIteratorHelper(_fields),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var field = _step6.value;
              this.field(field, null, options);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        } else {
          for (var _field2 in _fields) {
            var alias = _fields[_field2];
            this.field(_field2, alias, options);
          }
        }
      }
      /**
      # Add the given field to the final result set.
      #
      # The 'field' parameter does not necessarily have to be a fieldname. It can use database functions too,
      # e.g. DATE_FORMAT(a.started, "%H")
      #
      # An alias may also be specified for this field.
      #
      # options.ignorePeriodsForFieldNameQuotes - whether to ignore period (.) when automatically quoting the field name
      */

    }, {
      key: "field",
      value: function field(_field) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        alias = alias ? this._sanitizeFieldAlias(alias) : alias;
        _field = this._sanitizeField(_field); // if field-alias combo already present then don't add

        var existingField = this._fields.filter(function (f) {
          return f.name === _field && f.alias === alias;
        });

        if (existingField.length) {
          return this;
        }

        this._fields.push({
          name: _field,
          alias: alias,
          options: options
        });
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var queryBuilder = options.queryBuilder,
            buildParameterized = options.buildParameterized;
        var totalStr = '',
            totalValues = [];

        var _iterator7 = _createForOfIteratorHelper(this._fields),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var field = _step7.value;
            totalStr = _pad(totalStr, ", ");
            var name = field.name,
                alias = field.alias,
                _options = field.options;

            if (typeof name === 'string') {
              totalStr += this._formatFieldName(name, _options);
            } else {
              var ret = name._toParamString({
                nested: true,
                buildParameterized: buildParameterized
              });

              totalStr += ret.text;
              ret.values.forEach(function (value) {
                return totalValues.push(value);
              });
            }

            if (alias) {
              totalStr += " AS ".concat(this._formatFieldAlias(alias));
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        if (!totalStr.length) {
          // if select query and a table is set then all fields wanted
          var fromTableBlock = queryBuilder && queryBuilder.getBlock(cls.FromTableBlock);

          if (fromTableBlock && fromTableBlock._hasTable()) {
            totalStr = "*";
          }
        }

        return {
          text: totalStr,
          values: totalValues
        };
      }
    }]);

    return _class13;
  }(cls.Block); // Base class for setting fields to values (used for INSERT and UPDATE queries)


  cls.AbstractSetFieldBlock = /*#__PURE__*/function (_cls$Block5) {
    _inherits(_class14, _cls$Block5);

    var _super13 = _createSuper(_class14);

    function _class14(options) {
      var _this10;

      _classCallCheck(this, _class14);

      _this10 = _super13.call(this, options);

      _this10._reset();

      return _this10;
    }

    _createClass(_class14, [{
      key: "_reset",
      value: function _reset() {
        this._fields = [];
        this._values = [[]];
        this._valueOptions = [[]];
      } // Update the given field with the given value.
      // This will override any previously set value for the given field.

    }, {
      key: "_set",
      value: function _set(field, value) {
        var valueOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (this._values.length > 1) {
          throw new Error("Cannot set multiple rows of fields this way.");
        }

        if (typeof value !== 'undefined') {
          value = this._sanitizeValue(value);
        }

        field = this._sanitizeField(field); // Explicity overwrite existing fields

        var index = this._fields.indexOf(field); // if field not defined before


        if (-1 === index) {
          this._fields.push(field);

          index = this._fields.length - 1;
        }

        this._values[0][index] = value;
        this._valueOptions[0][index] = valueOptions;
      } // Insert fields based on the key/value pairs in the given object

    }, {
      key: "_setFields",
      value: function _setFields(fields) {
        var valueOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (_typeof(fields) !== 'object') {
          throw new Error("Expected an object but got " + _typeof(fields));
        }

        for (var field in fields) {
          this._set(field, fields[field], valueOptions);
        }
      } // Insert multiple rows for the given fields. Accepts an array of objects.
      // This will override all previously set values for every field.

    }, {
      key: "_setFieldsRows",
      value: function _setFieldsRows(fieldsRows) {
        var valueOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!_isArray(fieldsRows)) {
          throw new Error("Expected an array of objects but got " + _typeof(fieldsRows));
        } // Reset the objects stored fields and values


        this._reset(); // for each row


        for (var i = 0; fieldsRows.length > i; ++i) {
          var fieldRow = fieldsRows[i]; // for each field

          for (var field in fieldRow) {
            var value = fieldRow[field];
            field = this._sanitizeField(field);
            value = this._sanitizeValue(value);

            var index = this._fields.indexOf(field);

            if (0 < i && -1 === index) {
              throw new Error('All fields in subsequent rows must match the fields in the first row');
            } // Add field only if it hasn't been added before


            if (-1 === index) {
              this._fields.push(field);

              index = this._fields.length - 1;
            } // The first value added needs to add the array


            if (!_isArray(this._values[i])) {
              this._values[i] = [];
              this._valueOptions[i] = [];
            }

            this._values[i][index] = value;
            this._valueOptions[i][index] = valueOptions;
          }
        }
      }
    }]);

    return _class14;
  }(cls.Block); // (UPDATE) SET field=value


  cls.SetFieldBlock = /*#__PURE__*/function (_cls$AbstractSetField) {
    _inherits(_class15, _cls$AbstractSetField);

    var _super14 = _createSuper(_class15);

    function _class15() {
      _classCallCheck(this, _class15);

      return _super14.apply(this, arguments);
    }

    _createClass(_class15, [{
      key: "set",
      value: function set(field, value, options) {
        this._set(field, value, options);
      }
    }, {
      key: "setFields",
      value: function setFields(fields, valueOptions) {
        this._setFields(fields, valueOptions);
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var buildParameterized = options.buildParameterized;

        if (0 >= this._fields.length) {
          throw new Error("set() needs to be called");
        }

        var totalStr = '',
            totalValues = [];

        for (var i = 0; i < this._fields.length; ++i) {
          totalStr = _pad(totalStr, ', ');

          var field = this._formatFieldName(this._fields[i]);

          var value = this._values[0][i]; // e.g. field can be an expression such as `count = count + 1`

          if (0 > field.indexOf('=')) {
            field = "".concat(field, " = ").concat(this.options.parameterCharacter);
          }

          var ret = this._buildString(field, [value], {
            buildParameterized: buildParameterized,
            formattingOptions: this._valueOptions[0][i]
          });

          totalStr += ret.text;
          ret.values.forEach(function (value) {
            return totalValues.push(value);
          });
        }

        return {
          text: "SET ".concat(totalStr),
          values: totalValues
        };
      }
    }]);

    return _class15;
  }(cls.AbstractSetFieldBlock); // (INSERT INTO) ... field ... value


  cls.InsertFieldValueBlock = /*#__PURE__*/function (_cls$AbstractSetField2) {
    _inherits(_class16, _cls$AbstractSetField2);

    var _super15 = _createSuper(_class16);

    function _class16() {
      _classCallCheck(this, _class16);

      return _super15.apply(this, arguments);
    }

    _createClass(_class16, [{
      key: "set",
      value: function set(field, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        this._set(field, value, options);
      }
    }, {
      key: "setFields",
      value: function setFields(fields, valueOptions) {
        this._setFields(fields, valueOptions);
      }
    }, {
      key: "setFieldsRows",
      value: function setFieldsRows(fieldsRows, valueOptions) {
        this._setFieldsRows(fieldsRows, valueOptions);
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var _this11 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var buildParameterized = options.buildParameterized;

        var fieldString = this._fields.map(function (f) {
          return _this11._formatFieldName(f);
        }).join(', ');

        var valueStrings = [],
            totalValues = [];

        for (var i = 0; i < this._values.length; ++i) {
          valueStrings[i] = '';

          for (var j = 0; j < this._values[i].length; ++j) {
            var ret = this._buildString(this.options.parameterCharacter, [this._values[i][j]], {
              buildParameterized: buildParameterized,
              formattingOptions: this._valueOptions[i][j]
            });

            ret.values.forEach(function (value) {
              return totalValues.push(value);
            });
            valueStrings[i] = _pad(valueStrings[i], ', ');
            valueStrings[i] += ret.text;
          }
        }

        return {
          text: fieldString.length ? "(".concat(fieldString, ") VALUES (").concat(valueStrings.join('), ('), ")") : '',
          values: totalValues
        };
      }
    }]);

    return _class16;
  }(cls.AbstractSetFieldBlock); // (INSERT INTO) ... field ... (SELECT ... FROM ...)


  cls.InsertFieldsFromQueryBlock = /*#__PURE__*/function (_cls$Block6) {
    _inherits(_class17, _cls$Block6);

    var _super16 = _createSuper(_class17);

    function _class17(options) {
      var _this12;

      _classCallCheck(this, _class17);

      _this12 = _super16.call(this, options);
      _this12._fields = [];
      _this12._query = null;
      return _this12;
    }

    _createClass(_class17, [{
      key: "fromQuery",
      value: function fromQuery(fields, selectQuery) {
        var _this13 = this;

        this._fields = fields.map(function (v) {
          return _this13._sanitizeField(v);
        });
        this._query = this._sanitizeBaseBuilder(selectQuery);
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var totalStr = '',
            totalValues = [];

        if (this._fields.length && this._query) {
          var _this$_query$_toParam = this._query._toParamString({
            buildParameterized: options.buildParameterized,
            nested: true
          }),
              text = _this$_query$_toParam.text,
              values = _this$_query$_toParam.values;

          totalStr = "(".concat(this._fields.join(', '), ") ").concat(this._applyNestingFormatting(text));
          totalValues = values;
        }

        return {
          text: totalStr,
          values: totalValues
        };
      }
    }]);

    return _class17;
  }(cls.Block); // DISTINCT


  cls.DistinctBlock = /*#__PURE__*/function (_cls$Block7) {
    _inherits(_class18, _cls$Block7);

    var _super17 = _createSuper(_class18);

    function _class18() {
      _classCallCheck(this, _class18);

      return _super17.apply(this, arguments);
    }

    _createClass(_class18, [{
      key: "distinct",
      // Add the DISTINCT keyword to the query.
      value: function distinct() {
        this._useDistinct = true;
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        return {
          text: this._useDistinct ? "DISTINCT" : "",
          values: []
        };
      }
    }]);

    return _class18;
  }(cls.Block); // GROUP BY


  cls.GroupByBlock = /*#__PURE__*/function (_cls$Block8) {
    _inherits(_class19, _cls$Block8);

    var _super18 = _createSuper(_class19);

    function _class19(options) {
      var _this14;

      _classCallCheck(this, _class19);

      _this14 = _super18.call(this, options);
      _this14._groups = [];
      return _this14;
    } // Add a GROUP BY transformation for the given field.


    _createClass(_class19, [{
      key: "group",
      value: function group(field) {
        this._groups.push(this._sanitizeField(field));
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return {
          text: this._groups.length ? "GROUP BY ".concat(this._groups.join(', ')) : '',
          values: []
        };
      }
    }]);

    return _class19;
  }(cls.Block);

  cls.AbstractVerbSingleValueBlock = /*#__PURE__*/function (_cls$Block9) {
    _inherits(_class20, _cls$Block9);

    var _super19 = _createSuper(_class20);

    /**
     * @param options.verb The prefix verb string.
     */
    function _class20(options) {
      var _this15;

      _classCallCheck(this, _class20);

      _this15 = _super19.call(this, options);
      _this15._value = null;
      return _this15;
    }

    _createClass(_class20, [{
      key: "_setValue",
      value: function _setValue(value) {
        this._value = null !== value ? this._sanitizeLimitOffset(value) : value;
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var expr = null !== this._value ? "".concat(this.options.verb, " ").concat(this.options.parameterCharacter) : '';
        var values = null !== this._value ? [this._value] : [];
        return this._buildString(expr, values, options);
      }
    }]);

    return _class20;
  }(cls.Block); // OFFSET x


  cls.OffsetBlock = /*#__PURE__*/function (_cls$AbstractVerbSing) {
    _inherits(_class21, _cls$AbstractVerbSing);

    var _super20 = _createSuper(_class21);

    function _class21(options) {
      _classCallCheck(this, _class21);

      return _super20.call(this, _extend({}, options, {
        verb: 'OFFSET'
      }));
    }
    /**
    # Set the OFFSET transformation.
    #
    # Call this will override the previously set offset for this query. Also note that Passing 0 for 'max' will remove
    # the offset.
    */


    _createClass(_class21, [{
      key: "offset",
      value: function offset(start) {
        this._setValue(start);
      }
    }]);

    return _class21;
  }(cls.AbstractVerbSingleValueBlock); // LIMIT


  cls.LimitBlock = /*#__PURE__*/function (_cls$AbstractVerbSing2) {
    _inherits(_class22, _cls$AbstractVerbSing2);

    var _super21 = _createSuper(_class22);

    function _class22(options) {
      _classCallCheck(this, _class22);

      return _super21.call(this, _extend({}, options, {
        verb: 'LIMIT'
      }));
    }
    /**
    # Set the LIMIT transformation.
    #
    # Call this will override the previously set limit for this query. Also note that Passing `null` will remove
    # the limit.
    */


    _createClass(_class22, [{
      key: "limit",
      value: function limit(_limit) {
        this._setValue(_limit);
      }
    }]);

    return _class22;
  }(cls.AbstractVerbSingleValueBlock); // Abstract condition base class


  cls.AbstractConditionBlock = /*#__PURE__*/function (_cls$Block10) {
    _inherits(_class23, _cls$Block10);

    var _super22 = _createSuper(_class23);

    /**
     * @param {String} options.verb The condition verb.
     */
    function _class23(options) {
      var _this16;

      _classCallCheck(this, _class23);

      _this16 = _super22.call(this, options);
      _this16._conditions = [];
      return _this16;
    }
    /**
    # Add a condition.
    #
    # When the final query is constructed all the conditions are combined using the intersection (AND) operator.
    #
    # Concrete subclasses should provide a method which calls this
    */


    _createClass(_class23, [{
      key: "_condition",
      value: function _condition(condition) {
        condition = this._sanitizeExpression(condition);

        for (var _len6 = arguments.length, values = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          values[_key6 - 1] = arguments[_key6];
        }

        this._conditions.push({
          expr: condition,
          values: values || []
        });
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var totalStr = [],
            totalValues = [];

        var _iterator8 = _createForOfIteratorHelper(this._conditions),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _step8$value = _step8.value,
                expr = _step8$value.expr,
                values = _step8$value.values;
            var ret = cls.isSquelBuilder(expr) ? expr._toParamString({
              buildParameterized: options.buildParameterized
            }) : this._buildString(expr, values, {
              buildParameterized: options.buildParameterized
            });

            if (ret.text.length) {
              totalStr.push(ret.text);
            }

            ret.values.forEach(function (value) {
              return totalValues.push(value);
            });
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        if (totalStr.length) {
          totalStr = totalStr.join(') AND (');
        }

        return {
          text: totalStr.length ? "".concat(this.options.verb, " (").concat(totalStr, ")") : '',
          values: totalValues
        };
      }
    }]);

    return _class23;
  }(cls.Block); // WHERE


  cls.WhereBlock = /*#__PURE__*/function (_cls$AbstractConditio) {
    _inherits(_class24, _cls$AbstractConditio);

    var _super23 = _createSuper(_class24);

    function _class24(options) {
      _classCallCheck(this, _class24);

      return _super23.call(this, _extend({}, options, {
        verb: 'WHERE'
      }));
    }

    _createClass(_class24, [{
      key: "where",
      value: function where(condition) {
        for (var _len7 = arguments.length, values = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          values[_key7 - 1] = arguments[_key7];
        }

        this._condition.apply(this, [condition].concat(values));
      }
    }]);

    return _class24;
  }(cls.AbstractConditionBlock); // HAVING


  cls.HavingBlock = /*#__PURE__*/function (_cls$AbstractConditio2) {
    _inherits(_class25, _cls$AbstractConditio2);

    var _super24 = _createSuper(_class25);

    function _class25(options) {
      _classCallCheck(this, _class25);

      return _super24.call(this, _extend({}, options, {
        verb: 'HAVING'
      }));
    }

    _createClass(_class25, [{
      key: "having",
      value: function having(condition) {
        for (var _len8 = arguments.length, values = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
          values[_key8 - 1] = arguments[_key8];
        }

        this._condition.apply(this, [condition].concat(values));
      }
    }]);

    return _class25;
  }(cls.AbstractConditionBlock); // ORDER BY


  cls.OrderByBlock = /*#__PURE__*/function (_cls$Block11) {
    _inherits(_class26, _cls$Block11);

    var _super25 = _createSuper(_class26);

    function _class26(options) {
      var _this17;

      _classCallCheck(this, _class26);

      _this17 = _super25.call(this, options);
      _this17._orders = [];
      return _this17;
    }
    /**
    # Add an ORDER BY transformation for the given field in the given order.
    #
    # To specify descending order pass false for the 'dir' parameter.
    */


    _createClass(_class26, [{
      key: "order",
      value: function order(field, dir) {
        field = this._sanitizeField(field);

        if (!(typeof dir === 'string')) {
          if (dir === undefined) {
            dir = 'ASC'; // Default to asc
          } else if (dir !== null) {
            dir = dir ? 'ASC' : 'DESC'; // Convert truthy to asc
          }
        }

        for (var _len9 = arguments.length, values = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
          values[_key9 - 2] = arguments[_key9];
        }

        this._orders.push({
          field: field,
          dir: dir,
          values: values || []
        });
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var totalStr = '',
            totalValues = [];

        var _iterator9 = _createForOfIteratorHelper(this._orders),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _step9$value = _step9.value,
                field = _step9$value.field,
                dir = _step9$value.dir,
                values = _step9$value.values;
            totalStr = _pad(totalStr, ', ');

            var ret = this._buildString(field, values, {
              buildParameterized: options.buildParameterized
            });

            totalStr += ret.text, _isArray(ret.values) && ret.values.forEach(function (value) {
              return totalValues.push(value);
            });

            if (dir !== null) {
              totalStr += " ".concat(dir);
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        return {
          text: totalStr.length ? "ORDER BY ".concat(totalStr) : '',
          values: totalValues
        };
      }
    }]);

    return _class26;
  }(cls.Block); // JOIN


  cls.JoinBlock = /*#__PURE__*/function (_cls$Block12) {
    _inherits(_class27, _cls$Block12);

    var _super26 = _createSuper(_class27);

    function _class27(options) {
      var _this18;

      _classCallCheck(this, _class27);

      _this18 = _super26.call(this, options);
      _this18._joins = [];
      return _this18;
    }
    /**
    # Add a JOIN with the given table.
    #
    # 'table' is the name of the table to join with.
    #
    # 'alias' is an optional alias for the table name.
    #
    # 'condition' is an optional condition (containing an SQL expression) for the JOIN.
    #
    # 'type' must be either one of INNER, OUTER, LEFT or RIGHT. Default is 'INNER'.
    #
    */


    _createClass(_class27, [{
      key: "join",
      value: function join(table) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'INNER';
        table = this._sanitizeTable(table, true);
        alias = alias ? this._sanitizeTableAlias(alias) : alias;
        condition = condition ? this._sanitizeExpression(condition) : condition;

        this._joins.push({
          type: type,
          table: table,
          alias: alias,
          condition: condition
        });
      }
    }, {
      key: "left_join",
      value: function left_join(table) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.join(table, alias, condition, 'LEFT');
      }
    }, {
      key: "right_join",
      value: function right_join(table) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.join(table, alias, condition, 'RIGHT');
      }
    }, {
      key: "outer_join",
      value: function outer_join(table) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.join(table, alias, condition, 'OUTER');
      }
    }, {
      key: "left_outer_join",
      value: function left_outer_join(table) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.join(table, alias, condition, 'LEFT OUTER');
      }
    }, {
      key: "full_join",
      value: function full_join(table) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.join(table, alias, condition, 'FULL');
      }
    }, {
      key: "cross_join",
      value: function cross_join(table) {
        var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.join(table, alias, condition, 'CROSS');
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var totalStr = "",
            totalValues = [];

        var _iterator10 = _createForOfIteratorHelper(this._joins),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _step10$value = _step10.value,
                type = _step10$value.type,
                table = _step10$value.table,
                alias = _step10$value.alias,
                condition = _step10$value.condition;
            totalStr = _pad(totalStr, this.options.separator);
            var tableStr = void 0;

            if (cls.isSquelBuilder(table)) {
              var ret = table._toParamString({
                buildParameterized: options.buildParameterized,
                nested: true
              });

              ret.values.forEach(function (value) {
                return totalValues.push(value);
              });
              tableStr = ret.text;
            } else {
              tableStr = this._formatTableName(table);
            }

            totalStr += "".concat(type, " JOIN ").concat(tableStr);

            if (alias) {
              totalStr += " ".concat(this._formatTableAlias(alias));
            }

            if (condition) {
              totalStr += ' ON ';

              var _ret = void 0;

              if (cls.isSquelBuilder(condition)) {
                _ret = condition._toParamString({
                  buildParameterized: options.buildParameterized
                });
              } else {
                _ret = this._buildString(condition, [], {
                  buildParameterized: options.buildParameterized
                });
              }

              totalStr += this._applyNestingFormatting(_ret.text);

              _ret.values.forEach(function (value) {
                return totalValues.push(value);
              });
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        return {
          text: totalStr,
          values: totalValues
        };
      }
    }]);

    return _class27;
  }(cls.Block);

  cls.LockBlock = /*#__PURE__*/function (_cls$Block13) {
    _inherits(_class28, _cls$Block13);

    var _super27 = _createSuper(_class28);

    function _class28() {
      _classCallCheck(this, _class28);

      return _super27.apply(this, arguments);
    }

    _createClass(_class28, [{
      key: "locking",
      value: function locking(lock_level) {
        this.lock_level = lock_level;
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        return {
          text: this.lock_level ? this.lock_level : '',
          values: []
        };
      }
    }]);

    return _class28;
  }(cls.Block);

  cls.SetOpBlock = /*#__PURE__*/function (_cls$Block14) {
    _inherits(_class29, _cls$Block14);

    var _super28 = _createSuper(_class29);

    function _class29(options) {
      var _this19;

      _classCallCheck(this, _class29);

      _this19 = _super28.call(this, options);
      _this19._sets = [];
      return _this19;
    }
    /**
     * Add a UNION with the given table/query.
     *
     * 'table' is the name of the table or query to combine with.
     *
     * 'type' of the set operation
     */


    _createClass(_class29, [{
      key: "_add",
      value: function _add(table, type) {
        table = this._sanitizeTable(table);

        this._sets.push({
          type: type,
          table: table
        });
      } // Add a UNION with the given table/query.

    }, {
      key: "union",
      value: function union(table) {
        this._add(table, 'UNION');
      } // Add a UNION ALL with the given table/query.

    }, {
      key: "union_all",
      value: function union_all(table) {
        this._add(table, 'UNION ALL');
      } // Add a INTERSECT with the given table/query.

    }, {
      key: "intersect",
      value: function intersect(table) {
        this._add(table, 'INTERSECT');
      } // Add a INTERSECT ALL with the given table/query.

    }, {
      key: "intersect_all",
      value: function intersect_all(table) {
        this._add(table, 'INTERSECT ALL');
      } // Add a EXCEPT with the given table/query.

    }, {
      key: "except",
      value: function except(table) {
        this._add(table, 'EXCEPT');
      } // Add a EXCEPT ALL with the given table/query.

    }, {
      key: "except_all",
      value: function except_all(table) {
        this._add(table, 'EXCEPT ALL');
      }
    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var totalStr = '',
            totalValues = [];

        var _iterator11 = _createForOfIteratorHelper(this._sets),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _step11$value = _step11.value,
                type = _step11$value.type,
                table = _step11$value.table;
            totalStr = _pad(totalStr, this.options.separator);
            var tableStr = void 0;

            if (table instanceof cls.BaseBuilder) {
              var ret = table._toParamString({
                buildParameterized: options.buildParameterized,
                nested: true
              });

              tableStr = ret.text;
              ret.values.forEach(function (value) {
                return totalValues.push(value);
              });
            } else {
              totalStr = this._formatTableName(table);
            }

            totalStr += "".concat(type, " ").concat(tableStr);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        return {
          text: totalStr,
          values: totalValues
        };
      }
    }]);

    return _class29;
  }(cls.Block);
  /*
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  # Query builders
  # ---------------------------------------------------------------------------------------------------------
  # ---------------------------------------------------------------------------------------------------------
  */

  /**
  # Query builder base class
  #
  # Note that the query builder does not check the final query string for correctness.
  #
  # All the build methods in this object return the object instance for chained method calling purposes.
  */


  cls.QueryBuilder = /*#__PURE__*/function (_cls$BaseBuilder4) {
    _inherits(_class30, _cls$BaseBuilder4);

    var _super29 = _createSuper(_class30);

    /**
    # Constructor
    #
    # blocks - array of cls.BaseBuilderBlock instances to build the query with.
    */
    function _class30(options, blocks) {
      var _this20;

      _classCallCheck(this, _class30);

      _this20 = _super29.call(this, options);
      _this20.blocks = blocks || []; // Copy exposed methods into myself

      var _iterator12 = _createForOfIteratorHelper(_this20.blocks),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var block = _step12.value;
          var exposedMethods = block.exposedMethods();

          for (var methodName in exposedMethods) {
            var methodBody = exposedMethods[methodName];

            if (undefined !== _this20[methodName]) {
              throw new Error("Builder already has a builder method called: ".concat(methodName));
            }

            (function (block, name, body) {
              _this20[name] = function () {
                for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                  args[_key10] = arguments[_key10];
                }

                body.call.apply(body, [block].concat(args));
                return _assertThisInitialized(_this20);
              };
            })(block, methodName, methodBody);
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return _this20;
    }
    /**
    # Register a custom value handler for this query builder and all its contained blocks.
    #
    # Note: This will override any globally registered handler for this value type.
    */


    _createClass(_class30, [{
      key: "registerValueHandler",
      value: function registerValueHandler(type, handler) {
        var _iterator13 = _createForOfIteratorHelper(this.blocks),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var block = _step13.value;
            block.registerValueHandler(type, handler);
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        _get(_getPrototypeOf(_class30.prototype), "registerValueHandler", this).call(this, type, handler);

        return this;
      }
      /**
      # Update query builder options
      #
      # This will update the options for all blocks too. Use this method with caution as it allows you to change the
      # behaviour of your query builder mid-build.
      */

    }, {
      key: "updateOptions",
      value: function updateOptions(options) {
        this.options = _extend({}, this.options, options);

        var _iterator14 = _createForOfIteratorHelper(this.blocks),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var block = _step14.value;
            block.options = _extend({}, block.options, options);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      } // Get the final fully constructed query param obj.

    }, {
      key: "_toParamString",
      value: function _toParamString() {
        var _this21 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        options = _extend({}, this.options, options);
        var blockResults = this.blocks.map(function (b) {
          return b._toParamString({
            buildParameterized: options.buildParameterized,
            queryBuilder: _this21
          });
        });
        var blockTexts = blockResults.map(function (b) {
          return b.text;
        });
        var blockValues = blockResults.map(function (b) {
          return b.values;
        });
        var totalStr = blockTexts.filter(function (v) {
          return 0 < v.length;
        }).join(options.separator);
        var totalValues = [];
        blockValues.forEach(function (block) {
          return block.forEach(function (value) {
            return totalValues.push(value);
          });
        });

        if (!options.nested) {
          if (options.numberedParameters) {
            var i = undefined !== options.numberedParametersStartAt ? options.numberedParametersStartAt : 1; // construct regex for searching

            var regex = options.parameterCharacter.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            totalStr = totalStr.replace(new RegExp(regex, 'g'), function () {
              return "".concat(options.numberedParametersPrefix).concat(i++);
            });
          }
        }

        return {
          text: this._applyNestingFormatting(totalStr, !!options.nested),
          values: totalValues
        };
      } // Deep clone

    }, {
      key: "clone",
      value: function clone() {
        var blockClones = this.blocks.map(function (v) {
          return v.clone();
        });
        return new this.constructor(this.options, blockClones);
      } // Get a specific block

    }, {
      key: "getBlock",
      value: function getBlock(blockType) {
        var filtered = this.blocks.filter(function (b) {
          return b instanceof blockType;
        });
        return filtered[0];
      }
    }]);

    return _class30;
  }(cls.BaseBuilder); // SELECT query builder.


  cls.Select = /*#__PURE__*/function (_cls$QueryBuilder) {
    _inherits(_class31, _cls$QueryBuilder);

    var _super30 = _createSuper(_class31);

    function _class31(options) {
      var blocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, _class31);

      blocks = blocks || [new cls.StringBlock(options, 'SELECT'), new cls.FunctionBlock(options), new cls.DistinctBlock(options), new cls.GetFieldBlock(options), new cls.FromTableBlock(options), new cls.JoinBlock(options), new cls.WhereBlock(options), new cls.GroupByBlock(options), new cls.HavingBlock(options), new cls.OrderByBlock(options), new cls.LimitBlock(options), new cls.OffsetBlock(options), new cls.LockBlock(options), new cls.SetOpBlock(options)];
      return _super30.call(this, options, blocks);
    }

    return _class31;
  }(cls.QueryBuilder); // UPDATE query builder.


  cls.Update = /*#__PURE__*/function (_cls$QueryBuilder2) {
    _inherits(_class32, _cls$QueryBuilder2);

    var _super31 = _createSuper(_class32);

    function _class32(options) {
      var blocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, _class32);

      blocks = blocks || [new cls.StringBlock(options, 'UPDATE'), new cls.UpdateTableBlock(options), new cls.SetFieldBlock(options), new cls.WhereBlock(options), new cls.OrderByBlock(options), new cls.LimitBlock(options)];
      return _super31.call(this, options, blocks);
    }

    return _class32;
  }(cls.QueryBuilder); // DELETE query builder.


  cls.Delete = /*#__PURE__*/function (_cls$QueryBuilder3) {
    _inherits(_class33, _cls$QueryBuilder3);

    var _super32 = _createSuper(_class33);

    function _class33(options) {
      var blocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, _class33);

      blocks = blocks || [new cls.StringBlock(options, 'DELETE'), new cls.TargetTableBlock(options), new cls.FromTableBlock(_extend({}, options, {
        singleTable: true
      })), new cls.JoinBlock(options), new cls.WhereBlock(options), new cls.OrderByBlock(options), new cls.LimitBlock(options)];
      return _super32.call(this, options, blocks);
    }

    return _class33;
  }(cls.QueryBuilder); // An INSERT query builder.


  cls.Insert = /*#__PURE__*/function (_cls$QueryBuilder4) {
    _inherits(_class34, _cls$QueryBuilder4);

    var _super33 = _createSuper(_class34);

    function _class34(options) {
      var blocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, _class34);

      blocks = blocks || [new cls.StringBlock(options, 'INSERT'), new cls.IntoTableBlock(options), new cls.InsertFieldValueBlock(options), new cls.InsertFieldsFromQueryBlock(options)];
      return _super33.call(this, options, blocks);
    }

    return _class34;
  }(cls.QueryBuilder);

  var _squel = {
    VERSION: '5.14.2',
    flavour: flavour,
    expr: function expr(options) {
      return new cls.Expression(options);
    },
    "case": function _case(name, options) {
      return new cls.Case(name, options);
    },
    select: function select(options, blocks) {
      return new cls.Select(options, blocks);
    },
    update: function update(options, blocks) {
      return new cls.Update(options, blocks);
    },
    insert: function insert(options, blocks) {
      return new cls.Insert(options, blocks);
    },
    "delete": function _delete(options, blocks) {
      return new cls.Delete(options, blocks);
    },
    str: function str() {
      var inst = new cls.FunctionBlock();
      inst["function"].apply(inst, arguments);
      return inst;
    },
    rstr: function rstr() {
      var inst = new cls.FunctionBlock({
        rawNesting: true
      });
      inst["function"].apply(inst, arguments);
      return inst;
    },
    registerValueHandler: cls.registerValueHandler
  }; // aliases

  _squel.remove = _squel["delete"]; // classes

  _squel.cls = cls;
  return _squel;
}
/**
# ---------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------
# Exported instance (and for use by flavour definitions further down).
# ---------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------
*/


var squel = _buildSquel();
/**
# ---------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------
# Squel SQL flavours
# ---------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------
*/
// Available flavours


squel.flavours = {}; // Setup Squel for a particular SQL flavour

squel.useFlavour = function () {
  var flavour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!flavour) {
    return squel;
  }

  if (squel.flavours[flavour] instanceof Function) {
    var s = _buildSquel(flavour);

    squel.flavours[flavour].call(null, s); // add in flavour methods

    s.flavours = squel.flavours;
    s.useFlavour = squel.useFlavour;
    return s;
  } else {
    throw new Error("Flavour not available: ".concat(flavour));
  }
};
return squel;
}));
