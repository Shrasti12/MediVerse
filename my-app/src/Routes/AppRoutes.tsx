import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UploadPrescription from '../pages/UploadPrescription';
import ReimbursementWithPrescription from '../pages/ReimbursePres';
import ReimbursementWithoutPrescription from '../pages/ReimburseWithoutPres';
import Approve from '../pages/Approve';
import Dependent from '../pages/Dependent';
import PresStatus from '../pages/PresStatus';
import ReimburseStatus from '../pages/ReimburseStatus';
import ReImburseReport from '../pages/ReimburseReport';
import HospitalList from '../pages/HospitalList';
import ReportWithoutPres from '../pages/ReportWithoutPres';
import UpdateDependent from '../pages/UpdateDependent';
import Login from '../pages/Login';
import Signup from '../pages/signup';
import Layout from '../components/layout';
interface AppRoutesProps {
  empno: string | null;
  employeeData: any;
}


const AppRoutes: React.FC<AppRoutesProps> = ({ empno, employeeData }) => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Internal routes with Sidebar */}
      <Route element={<Layout empno={empno} employeeData={employeeData} />}>
        <Route path="/" element={<Home empno={empno} employeeData={employeeData} />} />   
        <Route path="/upload" element={<UploadPrescription empno={empno} employeeData={employeeData} />} />
        <Route path="/reimbursement/with" element={<ReimbursementWithPrescription empno={empno} employeeData={employeeData} />} />
        <Route path="/reimbursement/without" element={<ReimbursementWithoutPrescription empno={empno} employeeData={employeeData} />} />
        <Route path="/approve" element={<Approve empno={empno} employeeData={employeeData} />} />
        <Route path="/dependent" element={<Dependent empno={empno} employeeData={employeeData} />} />
        <Route path="/PresStatus" element={<PresStatus empno={empno} employeeData={employeeData} />} />
        <Route path="/ReimburseStatus" element={<ReimburseStatus empno={empno} employeeData={employeeData} />} />
        <Route path="/ReimburseReport" element={<ReImburseReport empno={empno} employeeData={employeeData} />} />
        <Route path="/HospitalList" element={<HospitalList empno={empno} employeeData={employeeData} />} />
        <Route path="/reimburs/report/nopres" element={<ReportWithoutPres empno={empno} employeeData={employeeData} />} />
        <Route path="/update/dependent" element={<UpdateDependent empno={empno} employeeData={employeeData} />} />
      </Route>
    </Routes>
  );
};


export default AppRoutes;
