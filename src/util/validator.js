import Util from '@/util'

const validateName = (self, el, msg = '') => {
  if (!el.length) {
    self.$parent.snackbar = {
      show: true,
      color: 'orange',
      text: msg != '' ? msg : 'This field is required'
    }
    return false
  }
  return false
}

const validatePhone = phone => {
  if (!phone.length) {
    return { valid: false, error: 'This field is required.' }
  }

  if (
    !phone.match(/^[+][(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,7}$/gm)
  ) {
    return {
      valid: false,
      error: 'Please, enter a valid international phone number.'
    }
  }

  return { valid: true, error: null }
}

const validateEmail = (self, el) => {
  if (!el.length) {
    self.$parent.snackbar = {
      show: true,
      color: 'orange',
      text: 'Email is required'
    }
    return false
  }
  if (checkEmail(el) === false) {
    self.$parent.snackbar = {
      show: true,
      color: 'orange',
      text: 'Please, enter a valid email.'
    }
    return false
  }
  return true
}

const checkEmail = email => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const validatePassword = (self, password) => {
  const passwordLength = 2
  if (!password.length) {
    self.$parent.snackbar = {
      show: true,
      color: 'orange',
      text: 'Password is required.'
    }
    return false
  }
  if (password.length < passwordLength) {
    self.$parent.snackbar = {
      show: true,
      color: 'orange',
      text: `Password is too short, Minimum of ${passwordLength} characters.`
    }
    return false
  }
  return true
}

export { validateName, validatePhone, validateEmail, validatePassword }
