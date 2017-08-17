'use strict'

import http from './http'

export default {
  getAllTeachers: (config) => http.get('/teachers', config),

  createOneTeacher: (data, config) => http.post('/teachers', data, config),

  updateTeacher: (urlParams, data, config) => http.put(`/teachers/${urlParams.teacherId}`, data, config),

  getAllHomeworksByTeacherId: (urlParams, config) => http.get(`/teachers/${urlParams.teacherId}/homeworks`, config),

  createOneHomework: (data, config) => http.post('/teachers/homeworks', data, config),

  signIn: (data, config) => http.post('/user/token', data, config),

  signUp: (data, config) => http.post('/user', data, config),

  getInfo: (config) => http.get('/user', config)
}
