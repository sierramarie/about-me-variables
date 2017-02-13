var firstName = 'Sierra';
var lastName = 'Roberts';
var fullName = firstName + ' ' + lastName;
var eMail = 'sierramroberts.96@gmail.com';
var cityBorn = true;
var collegeYears = 0;
var pets = 2;
var hoursOfSleep = 6.12;
var favoriteMusic = 'anything';
var movies = ['The Lion King', 'Natural Born Killers', 'Bones'];
var jobTitle;
var lifeWithout = null;

console.log(firstName, lastName, fullName, eMail, cityBorn, collegeYears, pets, hoursOfSleep, favoriteMusic, movies, jobTitle, lifeWithout);

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