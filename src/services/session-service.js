import http from './http-common';

class SessionService {
  login(username, password) {
    return http.post('/login', {
      username: username,
      password: password
    })
  }
  profile(token) {
    return http.get('/user/current', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}

export default new SessionService()