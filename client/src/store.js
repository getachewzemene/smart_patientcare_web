import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth_slice";
import doctorReducer from "./slices/doctor_slice";
import messageReducer from "./slices/message_slice";
const reducer = {
  auth: authReducer,
  doctor: doctorReducer,
  message: messageReducer,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
