System.register(["aurelia-metadata", "./behavior-instance", "./behaviors", "./content-selector", "./view-engine", "./view-strategy", "./util"], function (_export) {
  "use strict";

  var getAnnotation, Origin, ResourceType, BehaviorInstance, configureBehavior, ContentSelector, ViewEngine, ViewStrategy, hyphenate, _prototypeProperties, _inherits, defaultInstruction, contentSelectorFactoryOptions, hasShadowDOM, UseShadowDOM, CustomElement;
  return {
    setters: [function (_aureliaMetadata) {
      getAnnotation = _aureliaMetadata.getAnnotation;
      Origin = _aureliaMetadata.Origin;
      ResourceType = _aureliaMetadata.ResourceType;
    }, function (_behaviorInstance) {
      BehaviorInstance = _behaviorInstance.BehaviorInstance;
    }, function (_behaviors) {
      configureBehavior = _behaviors.configureBehavior;
    }, function (_contentSelector) {
      ContentSelector = _contentSelector.ContentSelector;
    }, function (_viewEngine) {
      ViewEngine = _viewEngine.ViewEngine;
    }, function (_viewStrategy) {
      ViewStrategy = _viewStrategy.ViewStrategy;
    }, function (_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      _inherits = function (child, parent) {
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

      defaultInstruction = { suppressBind: false };
      contentSelectorFactoryOptions = { suppressBind: true };
      hasShadowDOM = !!HTMLElement.prototype.createShadowRoot;
      UseShadowDOM = function UseShadowDOM() {};

      _export("UseShadowDOM", UseShadowDOM);

      CustomElement = (function (ResourceType) {
        var CustomElement = function CustomElement(tagName) {
          this.name = tagName;
          this.properties = [];
          this.attributes = {};
        };

        _inherits(CustomElement, ResourceType);

        _prototypeProperties(CustomElement, {
          convention: {
            value: function (name) {
              if (name.endsWith("CustomElement")) {
                return new CustomElement(hyphenate(name.substring(0, name.length - 13)));
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          load: {
            value: function (container, target, viewStrategy) {
              var _this = this;
              var annotation, options;

              configureBehavior(this, container, target);

              this.targetShadowDOM = getAnnotation(target, UseShadowDOM) !== null;
              this.usesShadowDOM = this.targetShadowDOM && hasShadowDOM;

              viewStrategy = viewStrategy || ViewStrategy.getDefault(target);
              options = { targetShadowDOM: this.targetShadowDOM };

              if (!viewStrategy.moduleId) {
                viewStrategy.moduleId = Origin.get(target).moduleId;
              }

              return viewStrategy.loadViewFactory(container.get(ViewEngine), options).then(function (viewFactory) {
                _this.viewFactory = viewFactory;
                return _this;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          register: {
            value: function (registry, name) {
              registry.registerElement(name || this.name, this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          compile: {
            value: function (compiler, resources, node, instruction) {
              if (!this.usesShadowDOM && node.hasChildNodes()) {
                var fragment = document.createDocumentFragment(),
                    currentChild = node.firstChild,
                    nextSibling;

                while (currentChild) {
                  nextSibling = currentChild.nextSibling;
                  fragment.appendChild(currentChild);
                  currentChild = nextSibling;
                }

                instruction.contentFactory = compiler.compile(fragment, resources);
              }

              instruction.suppressBind = true;

              return node;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          create: {
            value: function (container) {
              var _this2 = this;
              var instruction = arguments[1] === undefined ? defaultInstruction : arguments[1];
              var element = arguments[2] === undefined ? null : arguments[2];
              return (function () {
                var executionContext = instruction.executionContext || container.get(_this2.target),
                    behaviorInstance = new BehaviorInstance(_this2.taskQueue, _this2.observerLocator, _this2, executionContext, instruction),
                    host;

                if (_this2.viewFactory) {
                  behaviorInstance.view = _this2.viewFactory.create(container, behaviorInstance.executionContext, instruction);
                }

                if (element) {
                  element.elementBehavior = behaviorInstance;
                  element.primaryBehavior = behaviorInstance;

                  if (behaviorInstance.view) {
                    if (_this2.usesShadowDOM) {
                      host = element.createShadowRoot();
                    } else {
                      host = element;

                      if (instruction.contentFactory) {
                        var contentView = instruction.contentFactory.create(container, null, contentSelectorFactoryOptions);

                        ContentSelector.applySelectors(contentView, behaviorInstance.view.contentSelectors, function (contentSelector, group) {
                          return contentSelector.add(group);
                        });

                        behaviorInstance.contentView = contentView;
                      }
                    }

                    if (_this2.childExpression) {
                      behaviorInstance.view.addBinding(_this2.childExpression.createBinding(host, behaviorInstance.executionContext));
                    }

                    behaviorInstance.view.appendNodesTo(host);
                  }
                } else if (behaviorInstance.view) {
                  behaviorInstance.view.owner = behaviorInstance;
                }

                return behaviorInstance;
              })();
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return CustomElement;
      })(ResourceType);
      _export("CustomElement", CustomElement);
    }
  };
});