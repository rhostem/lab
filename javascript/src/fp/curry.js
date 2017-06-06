function curry(fn,arity = fn.length) {
  return (function nextCurried(prevArgs){
    return function curried(nextArg){
      var args = prevArgs.concat( [nextArg] );

      if (args.length >= arity) {
        return fn( ...args );
      }
      else {
        return nextCurried( args );
      }
    };
  })( [] );
}
