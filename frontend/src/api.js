import axios from 'axios';

const API_URL = 'http://localhost:4041/api'; // backend server URL

export const fetchStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/allStudents`);
    return response.data.studentsData;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

export const addStudent = async (studentData) => {
  try {
    const response = await axios.post(`${API_URL}/addStudent`, studentData);
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

export const updateStudent = async (id, studentData) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, studentData);
    return response.data;
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delStudent/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};

// AllTeachers

export const fetchTeachers = async () => {
  try {
    const response = await axios.get(`${API_URL}/allteachers`);
    return response.data.teachersData;
  } catch (error) {
    console.error('Error fetching teachers:', error);
    throw error;
  }
};

export const addTeacher = async (teacherData) => {
  try {
    const response = await axios.post(`${API_URL}/addteacher`, teacherData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding teacher:', error);
    throw error;
  }
};
