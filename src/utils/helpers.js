
//waiting n milliseconds
module.exports.wait = function (duration) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, duration)
    });
}