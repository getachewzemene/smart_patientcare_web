import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth_slice";
import doctorReducer from "./slices/doctor_slice";
import messageReducer from "./slices/message_slice";
import appointmentReducer from "./slices/doctor_appointment_slice";
import AdminReducer from "./slices/admin_slice";
const reducer = {
  auth: authReducer,
  doctor: doctorReducer,
  appointment: appointmentReducer,
  adminStore: AdminReducer,
  message: messageReducer,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
