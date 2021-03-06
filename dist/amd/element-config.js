define(["exports", "aurelia-metadata", "aurelia-binding"], function (exports, _aureliaMetadata, _aureliaBinding) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var _inherits = function (child, parent) {
    if (typeof parent !== "function" && parent !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
    }
    child.prototype = Object.create(parent && parent.prototype, {
      constructor: {
        value: child,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (parent) child.__proto__ = parent;
  };

  var ResourceType = _aureliaMetadata.ResourceType;
  var EventManager = _aureliaBinding.EventManager;
  var ElementConfig = (function (ResourceType) {
    var ElementConfig = function ElementConfig(tagName) {
      this.tagName = tagName;
    };

    _inherits(ElementConfig, ResourceType);

    _prototypeProperties(ElementConfig, null, {
      load: {
        value: function (container, target) {
          var config = target(),
              eventManager = container.get(EventManager);

          eventManager.registerElementConfig(this.tagName, config);
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      register: {
        value: function () {},
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return ElementConfig;
  })(ResourceType);

  exports.ElementConfig = ElementConfig;
});