const baseUrlCourse = "https://url-education-p.onrender.com/Courses";
const baseUrlTeachers = "https://edu-data.onrender.com/Teachers";
const baseUrlStudents = "https://edu-data.onrender.com/Students";
export default {
  courses: {
    get: `${baseUrlCourse}`,
    getById: (id) => `${baseUrlCourse}/${id}`,
    edit: (id) => `${baseUrlCourse}/${id}`,
    add: `${baseUrlCourse}`,
    delete: (id) => `${baseUrlCourse}/${id}`,
  },
  teachers: {
    get: `${baseUrlTeachers}`,
    getById: (id) => `${baseUrlTeachers}/${id}`,
    edit: (id) => `${baseUrlTeachers}/${id}`,
    add: `${baseUrlTeachers}`,
    delete: (id) => `${baseUrlTeachers}/${id}`,
  },
  students: {
    get: `${baseUrlStudents}`,
    getById: (id) => `${baseUrlStudents}/${id}`,
    edit: (id) => `${baseUrlStudents}/${id}`,
    add: `${baseUrlStudents}`,
    delete: (id) => `${baseUrlStudents}/${id}`,
  },
};
