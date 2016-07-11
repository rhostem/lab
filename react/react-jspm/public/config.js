System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dependency-bundle.js": [
      "npm:react-router@2.4.1.js",
      "npm:react-router@2.4.1/lib/index.js",
      "npm:react-router@2.4.1/lib/createMemoryHistory.js",
      "npm:history@2.1.2/lib/createMemoryHistory.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.5.js",
      "npm:process@0.11.5/browser.js",
      "npm:history@2.1.2/lib/createHistory.js",
      "npm:history@2.1.2/lib/deprecate.js",
      "npm:warning@2.1.0.js",
      "npm:warning@2.1.0/browser.js",
      "npm:history@2.1.2/lib/runTransitionHook.js",
      "npm:history@2.1.2/lib/createLocation.js",
      "npm:history@2.1.2/lib/PathUtils.js",
      "npm:history@2.1.2/lib/Actions.js",
      "npm:history@2.1.2/lib/AsyncUtils.js",
      "npm:deep-equal@1.0.1.js",
      "npm:deep-equal@1.0.1/index.js",
      "npm:deep-equal@1.0.1/lib/is_arguments.js",
      "npm:deep-equal@1.0.1/lib/keys.js",
      "npm:invariant@2.2.1.js",
      "npm:invariant@2.2.1/browser.js",
      "npm:history@2.1.2/lib/useBasename.js",
      "npm:history@2.1.2/lib/ExecutionEnvironment.js",
      "npm:history@2.1.2/lib/useQueries.js",
      "npm:query-string@3.0.3.js",
      "npm:query-string@3.0.3/index.js",
      "npm:strict-uri-encode@1.1.0.js",
      "npm:strict-uri-encode@1.1.0/index.js",
      "npm:react-router@2.4.1/lib/hashHistory.js",
      "npm:react-router@2.4.1/lib/createRouterHistory.js",
      "npm:react-router@2.4.1/lib/useRouterHistory.js",
      "npm:history@2.1.2/lib/createHashHistory.js",
      "npm:history@2.1.2/lib/createDOMHistory.js",
      "npm:history@2.1.2/lib/DOMUtils.js",
      "npm:history@2.1.2/lib/DOMStateStorage.js",
      "npm:react-router@2.4.1/lib/browserHistory.js",
      "npm:history@2.1.2/lib/createBrowserHistory.js",
      "npm:react-router@2.4.1/lib/applyRouterMiddleware.js",
      "npm:react-router@2.4.1/lib/RouterContext.js",
      "npm:react-router@2.4.1/lib/routerWarning.js",
      "npm:react-router@2.4.1/lib/RouteUtils.js",
      "npm:react@15.1.0.js",
      "npm:react@15.1.0/react.js",
      "npm:react@15.1.0/lib/React.js",
      "npm:fbjs@0.8.3/lib/warning.js",
      "npm:fbjs@0.8.3/lib/emptyFunction.js",
      "npm:react@15.1.0/lib/onlyChild.js",
      "npm:fbjs@0.8.3/lib/invariant.js",
      "npm:react@15.1.0/lib/ReactElement.js",
      "npm:react@15.1.0/lib/canDefineProperty.js",
      "npm:react@15.1.0/lib/ReactCurrentOwner.js",
      "npm:object-assign@4.1.0.js",
      "npm:object-assign@4.1.0/index.js",
      "npm:react@15.1.0/lib/ReactVersion.js",
      "npm:react@15.1.0/lib/ReactPropTypes.js",
      "npm:react@15.1.0/lib/getIteratorFn.js",
      "npm:react@15.1.0/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.1.0/lib/ReactElementValidator.js",
      "npm:react@15.1.0/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.8.3/lib/keyMirror.js",
      "npm:react@15.1.0/lib/ReactDOMFactories.js",
      "npm:fbjs@0.8.3/lib/mapObject.js",
      "npm:react@15.1.0/lib/ReactClass.js",
      "npm:fbjs@0.8.3/lib/keyOf.js",
      "npm:fbjs@0.8.3/lib/emptyObject.js",
      "npm:react@15.1.0/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.1.0/lib/ReactComponent.js",
      "npm:react@15.1.0/lib/ReactInstrumentation.js",
      "npm:react@15.1.0/lib/ReactDebugTool.js",
      "npm:react@15.1.0/lib/ReactComponentTreeDevtool.js",
      "npm:react@15.1.0/lib/ReactNativeOperationHistoryDevtool.js",
      "npm:react@15.1.0/lib/ReactInvalidSetStateWarningDevTool.js",
      "npm:fbjs@0.8.3/lib/performanceNow.js",
      "npm:fbjs@0.8.3/lib/performance.js",
      "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js",
      "npm:react@15.1.0/lib/ReactChildren.js",
      "npm:react@15.1.0/lib/traverseAllChildren.js",
      "npm:react@15.1.0/lib/KeyEscapeUtils.js",
      "npm:react@15.1.0/lib/PooledClass.js",
      "npm:react-router@2.4.1/lib/getRouteParams.js",
      "npm:react-router@2.4.1/lib/PatternUtils.js",
      "npm:react-router@2.4.1/lib/deprecateObjectProperties.js",
      "npm:react-router@2.4.1/lib/match.js",
      "npm:react-router@2.4.1/lib/RouterUtils.js",
      "npm:react-router@2.4.1/lib/createTransitionManager.js",
      "npm:react-router@2.4.1/lib/matchRoutes.js",
      "npm:react-router@2.4.1/lib/AsyncUtils.js",
      "npm:react-router@2.4.1/lib/getComponents.js",
      "npm:react-router@2.4.1/lib/isActive.js",
      "npm:react-router@2.4.1/lib/TransitionUtils.js",
      "npm:react-router@2.4.1/lib/computeChangedRoutes.js",
      "npm:react-router@2.4.1/lib/RoutingContext.js",
      "npm:react-router@2.4.1/lib/useRoutes.js",
      "npm:react-router@2.4.1/lib/RouteContext.js",
      "npm:react-router@2.4.1/lib/Lifecycle.js",
      "npm:react-router@2.4.1/lib/History.js",
      "npm:react-router@2.4.1/lib/InternalPropTypes.js",
      "npm:react-router@2.4.1/lib/Route.js",
      "npm:react-router@2.4.1/lib/Redirect.js",
      "npm:react-router@2.4.1/lib/IndexRoute.js",
      "npm:react-router@2.4.1/lib/IndexRedirect.js",
      "npm:react-router@2.4.1/lib/withRouter.js",
      "npm:react-router@2.4.1/lib/PropTypes.js",
      "npm:hoist-non-react-statics@1.2.0.js",
      "npm:hoist-non-react-statics@1.2.0/index.js",
      "npm:react-router@2.4.1/lib/IndexLink.js",
      "npm:react-router@2.4.1/lib/Link.js",
      "npm:react-router@2.4.1/lib/Router.js",
      "npm:react-dom@15.1.0.js",
      "npm:react-dom@15.1.0/index.js",
      "npm:react@15.1.0/lib/ReactDOM.js",
      "npm:react@15.1.0/lib/renderSubtreeIntoContainer.js",
      "npm:react@15.1.0/lib/ReactMount.js",
      "npm:react@15.1.0/lib/shouldUpdateReactComponent.js",
      "npm:react@15.1.0/lib/setInnerHTML.js",
      "npm:react@15.1.0/lib/createMicrosoftUnsafeLocalFunction.js",
      "npm:react@15.1.0/lib/instantiateReactComponent.js",
      "npm:react@15.1.0/lib/ReactNativeComponent.js",
      "npm:react@15.1.0/lib/ReactEmptyComponent.js",
      "npm:react@15.1.0/lib/ReactCompositeComponent.js",
      "npm:react@15.1.0/lib/ReactUpdateQueue.js",
      "npm:react@15.1.0/lib/ReactUpdates.js",
      "npm:react@15.1.0/lib/Transaction.js",
      "npm:react@15.1.0/lib/ReactReconciler.js",
      "npm:react@15.1.0/lib/ReactRef.js",
      "npm:react@15.1.0/lib/ReactOwner.js",
      "npm:react@15.1.0/lib/ReactFeatureFlags.js",
      "npm:react@15.1.0/lib/CallbackQueue.js",
      "npm:react@15.1.0/lib/ReactInstanceMap.js",
      "npm:react@15.1.0/lib/ReactNodeTypes.js",
      "npm:react@15.1.0/lib/ReactErrorUtils.js",
      "npm:react@15.1.0/lib/ReactComponentEnvironment.js",
      "npm:react@15.1.0/lib/ReactMarkupChecksum.js",
      "npm:react@15.1.0/lib/adler32.js",
      "npm:react@15.1.0/lib/ReactDOMFeatureFlags.js",
      "npm:react@15.1.0/lib/ReactDOMContainerInfo.js",
      "npm:react@15.1.0/lib/validateDOMNesting.js",
      "npm:react@15.1.0/lib/ReactDOMComponentTree.js",
      "npm:react@15.1.0/lib/ReactDOMComponentFlags.js",
      "npm:react@15.1.0/lib/DOMProperty.js",
      "npm:react@15.1.0/lib/ReactBrowserEventEmitter.js",
      "npm:react@15.1.0/lib/isEventSupported.js",
      "npm:react@15.1.0/lib/getVendorPrefixedEventName.js",
      "npm:react@15.1.0/lib/ViewportMetrics.js",
      "npm:react@15.1.0/lib/ReactEventEmitterMixin.js",
      "npm:react@15.1.0/lib/EventPluginHub.js",
      "npm:react@15.1.0/lib/forEachAccumulated.js",
      "npm:react@15.1.0/lib/accumulateInto.js",
      "npm:react@15.1.0/lib/EventPluginUtils.js",
      "npm:react@15.1.0/lib/EventConstants.js",
      "npm:react@15.1.0/lib/EventPluginRegistry.js",
      "npm:react@15.1.0/lib/DOMLazyTree.js",
      "npm:react@15.1.0/lib/setTextContent.js",
      "npm:react@15.1.0/lib/escapeTextContentForBrowser.js",
      "npm:react@15.1.0/lib/DOMNamespaces.js",
      "npm:react@15.1.0/lib/getNativeComponentFromComposite.js",
      "npm:react@15.1.0/lib/findDOMNode.js",
      "npm:react@15.1.0/lib/ReactDefaultInjection.js",
      "npm:react@15.1.0/lib/SimpleEventPlugin.js",
      "npm:react@15.1.0/lib/getEventCharCode.js",
      "npm:react@15.1.0/lib/SyntheticWheelEvent.js",
      "npm:react@15.1.0/lib/SyntheticMouseEvent.js",
      "npm:react@15.1.0/lib/getEventModifierState.js",
      "npm:react@15.1.0/lib/SyntheticUIEvent.js",
      "npm:react@15.1.0/lib/getEventTarget.js",
      "npm:react@15.1.0/lib/SyntheticEvent.js",
      "npm:react@15.1.0/lib/SyntheticTransitionEvent.js",
      "npm:react@15.1.0/lib/SyntheticTouchEvent.js",
      "npm:react@15.1.0/lib/SyntheticDragEvent.js",
      "npm:react@15.1.0/lib/SyntheticKeyboardEvent.js",
      "npm:react@15.1.0/lib/getEventKey.js",
      "npm:react@15.1.0/lib/SyntheticFocusEvent.js",
      "npm:react@15.1.0/lib/SyntheticClipboardEvent.js",
      "npm:react@15.1.0/lib/SyntheticAnimationEvent.js",
      "npm:react@15.1.0/lib/EventPropagators.js",
      "npm:fbjs@0.8.3/lib/EventListener.js",
      "npm:react@15.1.0/lib/SelectEventPlugin.js",
      "npm:fbjs@0.8.3/lib/shallowEqual.js",
      "npm:react@15.1.0/lib/isTextInputElement.js",
      "npm:fbjs@0.8.3/lib/getActiveElement.js",
      "npm:react@15.1.0/lib/ReactInputSelection.js",
      "npm:fbjs@0.8.3/lib/focusNode.js",
      "npm:fbjs@0.8.3/lib/containsNode.js",
      "npm:fbjs@0.8.3/lib/isTextNode.js",
      "npm:fbjs@0.8.3/lib/isNode.js",
      "npm:react@15.1.0/lib/ReactDOMSelection.js",
      "npm:react@15.1.0/lib/getTextContentAccessor.js",
      "npm:react@15.1.0/lib/getNodeForCharacterOffset.js",
      "npm:react@15.1.0/lib/SVGDOMPropertyConfig.js",
      "npm:react@15.1.0/lib/ReactReconcileTransaction.js",
      "npm:react@15.1.0/lib/ReactInjection.js",
      "npm:react@15.1.0/lib/ReactEventListener.js",
      "npm:fbjs@0.8.3/lib/getUnboundedScrollPosition.js",
      "npm:react@15.1.0/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@15.1.0/lib/ReactDOMTextComponent.js",
      "npm:react@15.1.0/lib/DOMChildrenOperations.js",
      "npm:react@15.1.0/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@15.1.0/lib/Danger.js",
      "npm:fbjs@0.8.3/lib/getMarkupWrap.js",
      "npm:fbjs@0.8.3/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.8.3/lib/createArrayFromMixed.js",
      "npm:react@15.1.0/lib/ReactDOMTreeTraversal.js",
      "npm:react@15.1.0/lib/ReactDOMEmptyComponent.js",
      "npm:react@15.1.0/lib/ReactDOMComponent.js",
      "npm:react@15.1.0/lib/ReactServerRenderingTransaction.js",
      "npm:react@15.1.0/lib/ReactMultiChild.js",
      "npm:react@15.1.0/lib/flattenChildren.js",
      "npm:react@15.1.0/lib/ReactChildReconciler.js",
      "npm:react@15.1.0/lib/ReactDOMTextarea.js",
      "npm:react@15.1.0/lib/LinkedValueUtils.js",
      "npm:react@15.1.0/lib/DOMPropertyOperations.js",
      "npm:react@15.1.0/lib/quoteAttributeValueForBrowser.js",
      "npm:react@15.1.0/lib/ReactDOMInstrumentation.js",
      "npm:react@15.1.0/lib/ReactDOMDebugTool.js",
      "npm:react@15.1.0/lib/ReactDOMUnknownPropertyDevtool.js",
      "npm:react@15.1.0/lib/DisabledInputUtils.js",
      "npm:react@15.1.0/lib/ReactDOMSelect.js",
      "npm:react@15.1.0/lib/ReactDOMOption.js",
      "npm:react@15.1.0/lib/ReactDOMInput.js",
      "npm:react@15.1.0/lib/ReactDOMButton.js",
      "npm:react@15.1.0/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@15.1.0/lib/ReactDOMIDOperations.js",
      "npm:react@15.1.0/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.8.3/lib/memoizeStringOnly.js",
      "npm:fbjs@0.8.3/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.3/lib/hyphenate.js",
      "npm:react@15.1.0/lib/dangerousStyleValue.js",
      "npm:react@15.1.0/lib/CSSProperty.js",
      "npm:fbjs@0.8.3/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.3/lib/camelize.js",
      "npm:react@15.1.0/lib/AutoFocusUtils.js",
      "npm:react@15.1.0/lib/HTMLDOMPropertyConfig.js",
      "npm:react@15.1.0/lib/EnterLeaveEventPlugin.js",
      "npm:react@15.1.0/lib/DefaultEventPluginOrder.js",
      "npm:react@15.1.0/lib/ChangeEventPlugin.js",
      "npm:react@15.1.0/lib/BeforeInputEventPlugin.js",
      "npm:react@15.1.0/lib/SyntheticInputEvent.js",
      "npm:react@15.1.0/lib/SyntheticCompositionEvent.js",
      "npm:react@15.1.0/lib/FallbackCompositionState.js",
      "npm:babel-runtime@5.8.38/core-js/set.js",
      "npm:core-js@1.2.6/library/fn/set.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:core-js@1.2.6/library/modules/es7.set.to-json.js",
      "npm:core-js@1.2.6/library/modules/$.collection-to-json.js",
      "npm:core-js@1.2.6/library/modules/$.classof.js",
      "npm:core-js@1.2.6/library/modules/$.wks.js",
      "npm:core-js@1.2.6/library/modules/$.global.js",
      "npm:core-js@1.2.6/library/modules/$.uid.js",
      "npm:core-js@1.2.6/library/modules/$.shared.js",
      "npm:core-js@1.2.6/library/modules/$.cof.js",
      "npm:core-js@1.2.6/library/modules/$.for-of.js",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.6/library/modules/$.iterators.js",
      "npm:core-js@1.2.6/library/modules/$.to-length.js",
      "npm:core-js@1.2.6/library/modules/$.to-integer.js",
      "npm:core-js@1.2.6/library/modules/$.an-object.js",
      "npm:core-js@1.2.6/library/modules/$.is-object.js",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter.js",
      "npm:core-js@1.2.6/library/modules/$.iter-call.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js",
      "npm:core-js@1.2.6/library/modules/$.a-function.js",
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:core-js@1.2.6/library/modules/es6.set.js",
      "npm:core-js@1.2.6/library/modules/$.collection.js",
      "npm:core-js@1.2.6/library/modules/$.descriptors.js",
      "npm:core-js@1.2.6/library/modules/$.fails.js",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.6/library/modules/$.has.js",
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:core-js@1.2.6/library/modules/$.strict-new.js",
      "npm:core-js@1.2.6/library/modules/$.redefine-all.js",
      "npm:core-js@1.2.6/library/modules/$.redefine.js",
      "npm:core-js@1.2.6/library/modules/$.hide.js",
      "npm:core-js@1.2.6/library/modules/$.property-desc.js",
      "npm:core-js@1.2.6/library/modules/$.collection-strong.js",
      "npm:core-js@1.2.6/library/modules/$.set-species.js",
      "npm:core-js@1.2.6/library/modules/$.iter-step.js",
      "npm:core-js@1.2.6/library/modules/$.iter-define.js",
      "npm:core-js@1.2.6/library/modules/$.iter-create.js",
      "npm:core-js@1.2.6/library/modules/$.library.js",
      "npm:core-js@1.2.6/library/modules/$.defined.js",
      "npm:core-js@1.2.6/library/modules/web.dom.iterable.js",
      "npm:core-js@1.2.6/library/modules/es6.array.iterator.js",
      "npm:core-js@1.2.6/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/library/modules/$.iobject.js",
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator.js",
      "npm:core-js@1.2.6/library/modules/$.string-at.js",
      "npm:core-js@1.2.6/library/modules/es6.object.to-string.js",
      "github:capaj/systemjs-hot-reloader@0.6.0.js",
      "github:capaj/systemjs-hot-reloader@0.6.0/hot-reloader.js",
      "npm:debug@2.2.0.js",
      "npm:debug@2.2.0/browser.js",
      "npm:debug@2.2.0/debug.js",
      "npm:ms@0.7.1.js",
      "npm:ms@0.7.1/index.js",
      "npm:weakee@1.0.0.js",
      "npm:weakee@1.0.0/weakee.js",
      "npm:babel-runtime@5.8.38/core-js/weak-map.js",
      "npm:core-js@1.2.6/library/fn/weak-map.js",
      "npm:core-js@1.2.6/library/modules/es6.weak-map.js",
      "npm:core-js@1.2.6/library/modules/$.collection-weak.js",
      "npm:core-js@1.2.6/library/modules/$.array-methods.js",
      "npm:core-js@1.2.6/library/modules/$.array-species-create.js",
      "npm:core-js@1.2.6/library/modules/$.is-array.js",
      "npm:core-js@1.2.6/library/modules/$.to-object.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.6/library/fn/object/define-property.js",
      "github:socketio/socket.io-client@1.4.6.js",
      "github:socketio/socket.io-client@1.4.6/socket.io.js",
      "npm:babel-runtime@5.8.38/core-js/promise.js",
      "npm:core-js@1.2.6/library/fn/promise.js",
      "npm:core-js@1.2.6/library/modules/es6.promise.js",
      "npm:core-js@1.2.6/library/modules/$.iter-detect.js",
      "npm:core-js@1.2.6/library/modules/$.microtask.js",
      "npm:core-js@1.2.6/library/modules/$.task.js",
      "npm:core-js@1.2.6/library/modules/$.dom-create.js",
      "npm:core-js@1.2.6/library/modules/$.html.js",
      "npm:core-js@1.2.6/library/modules/$.invoke.js",
      "npm:core-js@1.2.6/library/modules/$.species-constructor.js",
      "npm:core-js@1.2.6/library/modules/$.same-value.js",
      "npm:core-js@1.2.6/library/modules/$.set-proto.js",
      "npm:babel-runtime@5.8.38/core-js/object/keys.js",
      "npm:core-js@1.2.6/library/fn/object/keys.js",
      "npm:core-js@1.2.6/library/modules/es6.object.keys.js",
      "npm:core-js@1.2.6/library/modules/$.object-sap.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of.js",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:core-js@1.2.6/library/fn/object/create.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.6",
    "history": "npm:history@3.0.0",
    "react": "npm:react@15.1.0",
    "react-dom": "npm:react-dom@15.1.0",
    "react-router": "npm:react-router@2.4.1",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
    "github:capaj/systemjs-hot-reloader@0.6.0": {
      "debug": "npm:debug@2.2.0",
      "socket.io-client": "github:socketio/socket.io-client@1.4.6",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:asap@2.0.4": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:fbjs@0.8.3": {
      "core-js": "npm:core-js@1.2.6",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:history@2.1.2": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:history@3.0.0": {
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@4.2.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.5.3",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:node-fetch@1.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.3": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:query-string@4.2.2": {
      "object-assign": "npm:object-assign@4.1.0",
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:react-dom@15.1.0": {
      "react": "npm:react@15.1.0"
    },
    "npm:react-router@2.4.1": {
      "history": "npm:history@2.1.2",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.1.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@15.1.0": {
      "fbjs": "npm:fbjs@0.8.3",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
