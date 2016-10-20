module.exports = function(data) {
    console.log('lib is called with args' + data);
    return yeah; // ReferenceError
}
