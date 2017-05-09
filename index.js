import polyfill from 'es6-promise'
import fetch from 'isomorphic-fetch'

/**
 * Simple request module using fetch
 * unimorphic isorequest nodularified for REPL and BROWSER
 */

let req = {
  encodeForm: (form = {}) => {
    return Object.keys(form).map((key) => {
      return [key, form[key]].map(encodeURIComponent).join('=')
    }).join('&')
  },
  call: (url, form, method) => {
    return fetch(`${url}?${form}`, {method: method})
      .then(function (response) {
        return response.json()
      })
  }
  /**
   * Simple GET request to url, returns a promise
   * @param {String} url
   * @param {Object} form Form data appended to url as form encoded query strings
   * @returns {Promise} Response body (parsed as JSON if application/json content-type detected)
   */
  get: (url, form = {}) => {
    form = req.encodeForm(form)
    return call(url, form, 'GET')
  },
  /**
   * Simple PUT request to url, returns a promise
   * @param {String} url
   * @param {Object} form Form data appended to url as form encoded query strings
   * @returns {Promise} Response body (parsed as JSON if application/json content-type detected)
   */
  put: (url, form = {}) => {
    form = req.encodeForm(form)
    return call(url, form, 'PUT')

  },
  /**
   * Simple PUT request to url, returns a promise
   * @param {String} url
   * @param {Object} form Form data appended to url as form encoded query strings
   * @returns {Promise} Response body (parsed as JSON if application/json content-type detected)
   */
  delete: (url, form = {}) => {
    form = req.encodeForm(form)
    return call(url, form, 'DELETE')
  },
  /**
   * Simple POST request to url, returns a promise
   * @param {String} url
   * @param {Object} form Form data appended to url as form encoded query strings
   * @returns {Promise} Response body (parsed as JSON if application/json content-type detected)
   */
  post: (url, form = {}) => {
    form = req.encodeForm(form)
    return call(url, form, 'POST')
  }
}

export default req
