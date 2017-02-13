function avow(description, assertion, context) {
  var log = console.log.bind(console)
  var isBrowser = typeof window != 'undefined'
  var isAssertionGroup = typeof assertion === 'function' || arguments.length === 1
  var isAssertion = !isAssertionGroup
  var isPass = assertion
  var showContext = isAssertion && !isPass && context

  if (isAssertionGroup) {
    log('')
    isBrowser?
    log('%c> ' + description, 'font-weight: bold; color: goldenrod;'):
    log('\x1b[1m\x1b[33m> ' + description + '\x1b[22m\x1b[0m')
    isPass? assertion() : undefined
  }

  else if (isAssertion) {
    isBrowser?
    log('[%c' + (isPass? 'PASSED' : 'FAILED') + '%c] %c ' + description, 'font-weight: bold; color: ' + (isPass? 'green' : 'red') + ';', 'font-weight: normal; color: inherit;', 'color: darkcyan;'):
    log('[\x1b[1m' + (isPass? '\x1b[32mPASSED' : '\x1b[31mFAILED') + '\x1b[22m\x1b[0m]\x1b[36m ' + description + '\x1b[0m')
  }

  if (showContext) {
    isBrowser?
    log('%cFailure Context...', 'color: red;'):
    log('\x1b[31mFailure Context...\x1b[0m')
    console.dir(context)
  }
}

/*
// Example Usage
// Use standard JS expressions, or community libraries to perform comparisons,
// such as LoDash's isEqual to deep compare: https://lodash.com/docs#isEqual
//
// You can also use curly brackets for scoping let variables, and console.time
// to benchmark the time it takes to complete the tests.

console.time('avow')
avow('Numbers', () => {
  {
    let a = 1, b = 2
    avow('1 should equal 1', a === b, [a, b])
  }
})

avow('Math', () => {
  avow('1 added to 1 should equal 2', 1 + 1 === 2)
})

avow('Tests Completed')
console.timeEnd('avow')
*/
