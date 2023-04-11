import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./authentication/RequireAuth";
import RequiredManager from "./authentication/RequiredManager";
import Header from "./layout/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Application from "./pages/application/Application";
import ApplicationDetails from "./pages/application/ApplicationDetails";
import ApplicationFrom from "./pages/application/ApplicationFrom";
import NoticeAll from "./pages/notification/NoticeAll";
import NoticeDetails from "./pages/notification/NoticeDetails";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/profile/UpdateProfile";
import ProjectDetails from "./pages/project/ProjectDetails";
import Projects from "./pages/project/Projects";
import Requisition from "./pages/requisition/Requisition";
import RequisitionFrom from "./pages/requisition/RequisitionFrom";
import RequisitonDetails from "./pages/requisition/RequisitonDetails";
import PaymentFrom from "./pages/payment/PaymentFrom";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route element={<RequiredManager />}>
            <Route element={<Dashboard />}>
              <Route path="/" element={<Projects />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/noticeAll" element={<NoticeAll />} />
              <Route path="/projectDetails/:id" element={<ProjectDetails />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/paymentFrom" element={<PaymentFrom />} />
              <Route path="/noticeAll" element={<NoticeAll />} />
              <Route path="/noticeDetails/:id" element={<NoticeDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/updateProfile" element={<UpdateProfile />} />
              <Route path="/requisition" element={<Requisition />} /> 
              <Route path="/requisitionFrom" element={<RequisitionFrom />} /> 
              <Route
                path="/requisitonDetails/:id"
                element={<RequisitonDetails />}
              />
              <Route path="/application" element={<Application />} />
              <Route path="/applicationFrom" element={<ApplicationFrom />} />
              <Route
                path="/applicationDetails/:id"
                element={<ApplicationDetails />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
