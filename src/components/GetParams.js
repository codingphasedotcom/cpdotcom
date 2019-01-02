function getUrlVars() {
  if (typeof window !== 'undefined') {
    var vars = {}
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function(m, key, value) {
        vars[key] = value
      }
    )

    return vars
  } else {
    return '0'
  }
}
function getUrlParam(parameter, defaultvalue) {
  var urlparameter = defaultvalue
  if (typeof window !== 'undefined') {
    if (window.location.href.indexOf(parameter) > -1) {
      urlparameter = getUrlVars()[parameter]
    }
    return urlparameter
  } else {
    return '0'
  }
}
export { getUrlVars, getUrlParam }
