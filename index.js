const vm = require('vm');

const sandbox = {
    lib: require('./lib'),
    yeah: 'yeah!' + new Date()
}

const code = `
(function script() {
    var result = lib('hello');
    console.log('value from lib: ' + result)
})()
`;

try {
    const fn = vm.runInNewContext(code, sandbox);
    console.log(util.inspect(fn()))
} catch (e) {
    console.error(e);
}

