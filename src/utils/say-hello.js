function sayHello() {
  // Chrome Log
  if (navigator.userAgent.toLowerCase().includes('chrome')) {
    const args = [
      '\n %c Made with ♥ by Dogstudio %c %c %c http://www.dogstudio.co/ %c %c \n',
      'color: #fff; background: #e43333; padding:5px 0;',
      'background: #131419; padding:5px 0;',
      'background: #131419; padding:5px 0;',
      'color: #fff; background: #1c1c1c; padding:5px 0;',
      'background: #fff; padding:5px 0;',
      'color: #e43333; background: #fff; padding:5px 0;',
    ]

    // Log Message
    window.console.log.apply(console, args)
  } else if (window.console) {
    // Default Message
    window.console.log('Made with love ♥ Dogstudio - http://www.dogstudio.co/')
  }
}

export default sayHello()
