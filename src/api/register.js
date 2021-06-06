import http from '@/util/http'


export async function userSave (user) {
    const accountDetails = await http.post(
      '/register?callback_url=' +
        process.env.VUE_APP_URL +
        '/verification',
      user
    )
    return accountDetails
}

export async function isEmailAvailable (input) {
    const accountDetails = await http.post('/123', {
      auth_input: input
    })
    return accountDetails
  }