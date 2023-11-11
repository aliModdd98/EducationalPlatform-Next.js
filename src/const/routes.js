export default {
  courses: {
    get: `/Courses`,
    add: `/Courses/Add`,
    getById: (id) => `/Courses/${id}`,
    edit: (id) => `/Courses/Edite/${id}`,
  },
  teachers: {
    get: `/Teachers`,
    add: `/Teachers/Add`,
    getById: (id) => `/Teachers/${id}`,
    edit: (id) => `/Teachers/Edite/${id}`,
  },
  students: {
    get: `/Students`,
    add: `/Students/Add`,
    getById: (id) => `/Students/${id}`,
    edit: (id) => `/Students/Edite/${id}`,
  },
};