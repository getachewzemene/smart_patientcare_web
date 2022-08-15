import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message_slice";
import { getAllDcotor, getAllPatient } from "../services/user_service";

export const getAllDoctorData = createAsyncThunk(
  "doctor/get-all-doctor",
  async (thunkAPI) => {
    try {
      const doctorData = await getAllDcotor();

      thunkAPI.dispatch(setAllDoctorData(doctorData));
    } catch (error) {
      // console.log(error.response.data);
      const message = error.response.data;
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getAllPatientData = createAsyncThunk(
  "doctor/get-all-patient",
  async (thunkAPI) => {
    try {
      const patientData = await getAllPatient();

      thunkAPI.dispatch(setAllPatientData(patientData));
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
  allDoctorData: [],
  allPatientData: [],
  allDiseaseData: [],
  hasError: false,
};

const adminSlices = createSlice({
  name: "adminStore",
  initialState,
  reducers: {
    setAllDoctorData: (state, action) => {
      console.log("from set doctor" + action.payload);
      return { allDoctorData: action.payload };
    },
    setAllPatientData: (state, action) => {
      return { allPatientData: action.payload };
    },
  },
  extraReducers: {
    [getAllDoctorData.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getAllDoctorData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [getAllDoctorData.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [getAllPatientData.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getAllPatientData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [getAllPatientData.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { reducer, actions } = adminSlices;
export const { setAllDoctorData, setAllPatientData } = actions;
export default reducer;
