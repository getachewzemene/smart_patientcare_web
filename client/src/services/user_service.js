import axios from "axios";
import user from "./auth_header";
import { BASE_URL } from "./api_endpoint";
const accessToken = user.accessToken;
const doctorId = user.id;
const getAllDoctors = () => {
  return axios.get(BASE_URL + "all");
};
const addDoctor = async (
  id,
  firstName,
  lastName,
  email,
  password,
  phone,
  gender,
  DOB,
  address,
  specialization,
  file
) => {
  const data = new FormData();
  data.append("id", id);
  data.append("firstName", firstName);
  data.append("lastName", lastName);
  data.append("email", email);
  data.append("password", password);
  data.append("phone", phone);
  data.append("gender", gender);
  data.append("DOB", DOB);
  data.append("address", address);
  data.append("specialization", specialization);
  data.append("file", file);
  console.log(file);

  // console.log(accessToken);
  return await axios
    .post(BASE_URL + "/admin/add-doctor", data, {
      headers: {
        "x-access-token": accessToken,
        "content-type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response.data;
    });
};
const getDoctorById = async (id) => {
  return await axios
    .get(BASE_URL + "/doctor/doctor-by-id", {
      params: { id: id },
    })
    .then((response) => {
      const data = response.data;
      return data;
    });
};
const getAppointmentByDoctorId = async (id) => {
  console.log("from axios" + id);
  return await axios
    .get(BASE_URL + "/appointment/by-doctorId", {
      params: { id: id },
    })
    .then((response) => {
      console.log(response.data);
      const data = response.data;
      return data;
    });
};

const getAllAppointment = async () => {
  return await axios.get(BASE_URL + "/appointment/all", {}).then((response) => {
    // console.log(response.data);

    return response.data;
  });
};
const getAllDcotor = async () => {
  return await axios
    .get(BASE_URL + "/doctor/all", {
      params: { role: "doctor" },
    })
    .then((response) => {
      // response.data.map((data) => console.log("from axios" + data.id));

      return response.data;
    });
};
const getAllPatient = async () => {
  return await axios.get(BASE_URL + "/patient/all").then((response) => {
    // console.log(response.data);

    return response.data;
  });
};

const addPrescription = async (
  id,
  diseaseName,
  medicineName,
  description,
  dosage
) => {
  return await axios
    .post(
      BASE_URL + "/doctor/add-prescription",
      { id, diseaseName, medicineName, description, dosage, doctorId },
      {
        headers: {
          "x-access-token": accessToken,
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      const data = response.data;
      return data;
    });
};
const addDisease = async (
  id,
  diseaseName,
  diseaseCategory,
  precuation,
  symptoms
) => {
  // console.log("from axios", symptoms);
  return await axios
    .post(
      BASE_URL + "/admin/add-disease",
      { id, diseaseName, diseaseCategory, precuation, symptoms },
      {
        headers: {
          "x-access-token": accessToken,
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      const data = response.data;
      return data;
    });
};
const predictDisease = async (symptoms) => {
  return await axios
    .get(BASE_URL + "/predict-disease", {
      params: { symptoms: symptoms },
    })
    .then((response) => {
      const data = response.data;
      console.log(data);
      return data;
    });
};

const updateAppointment = async (data) => {
  // console.log(accessToken);
  console.log("from axios" + data);
  return await axios
    .put(
      BASE_URL + "/appointment/update",
      { data },
      {
        headers: {
          "x-access-token": accessToken,
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      return response.data;
    });
};
export {
  getAllDoctors,
  addDoctor,
  getDoctorById,
  addPrescription,
  addDisease,
  getAppointmentByDoctorId,
  updateAppointment,
  getAllAppointment,
  getAllDcotor,
  getAllPatient,
  predictDisease,
};
