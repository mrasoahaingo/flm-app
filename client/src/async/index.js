import {
    createClientResolver as _createClientResolver,
    createTransitionHook,
    PRE_RESOLVE_HOOK,
    DEFER_RESOLVE_HOOK
} from 'reasync'

const createClientResolver = (history, location, initLocation, customAttributes) => {
  const resolver = _createClientResolver(history, location, initLocation, customAttributes);

  resolver
      .addHooks(PRE_RESOLVE_HOOK)
      .addHooks(createTransitionHook({ executeIfPreviousFailed: true }), DEFER_RESOLVE_HOOK);

  return resolver
}

export default createClientResolver
