import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message_slice";
import {
  addDoctor,
  getDoctorById,
  addPrescription,
} from "../services/user_service";

export const addDoctorData = createAsyncThunk(
  "doctor/add_doctor",
  async (
    {
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
      file,
    },
    thunkAPI
  ) => {
    try {
      const data = await addDoctor(
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
      );
      return { doctorData: data };
    } catch (error) {
      // console.log(error.response.data);
      const message = error.response.data;

      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const addPrescriptionData = createAsyncThunk(
  "doctor/add_prescription",
  async ({ id, diseaseName, medicineName, description, dosage }, thunkAPI) => {
    try {
      const data = await addPrescription(
        id,
        diseaseName,
        medicineName,
        description,
        dosage
      );
      return { prescriptionData: data };
    } catch (error) {
      // console.log(error.response.data);
      const message = error.response.data;

      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getDoctorData = createAsyncThunk(
  "doctor/get_doctor",
  async ({ id }, thunkAPI) => {
    try {
      const doctorData = await getDoctorById(id);
      console.log(doctorData);
      thunkAPI.dispatch(setDoctorData(doctorData));
    } catch (error) {
      // console.log(error.response.data);
      const message = error.response.data;

      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  isLoading: false,
  doctorById: null,
  hasError: false,
};
const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setDoctorData: (state, action) => {
      // console.log(action.payload);
      return { doctorById: action.payload };
    },
  },
  extraReducers: {
    [addDoctorData.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addDoctorData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [addDoctorData.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [getDoctorData.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getDoctorData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [getDoctorData.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [addPrescriptionData.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addPrescriptionData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [addPrescriptionData.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});
const { reducer, actions } = doctorSlice;
export const { setDoctorData } = actions;
export default reducer;
