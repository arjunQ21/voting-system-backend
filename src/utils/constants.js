const path = require("path")

module.exports.otpPurpose = {
    verification: 'verification',
    recovery: 'recovery'
}

module.exports.otpMethod = {
    email: 'email',
    sms: 'sms'
}

module.exports.JsendStatus = {
    success: "JSEND_SUCCESS",
    fail: "JSEND_FAIL",
    error: "JSEND_ERROR"
}


module.exports.pathSeparator = path.sep ;


module.exports.ringPattern = {
    tringtring: 'tringtring',
    kirrkirr: 'kirrkirr',
}

module.exports.bellType = {
    bell: 'bell',
    speaker: 'speaker',
}

module.exports.totalPeriods = 20