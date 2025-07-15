import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Upload from '../pages/UploadPrescription';
import ReimbursementWithPrescription from '../pages/ReimbursePres';
import ReimbursementWithoutPrescription from '../pages/ReimburseWithoutPres';
// import Login from '../pages/login';
import Approve from '../pages/Approve';
import Dependent from '../pages/Dependent';
import PresStatus from '../pages/PresStatus';
import ReimburseStatus from '../pages/ReimburseStatus';
import ReImburseReport from '../pages/ReimburseReport';
import HospitalList from '../pages/HospitalList';
import ReportWithoutPres from '../pages/ReportWithoutPres';
import UpdateDependent from '../pages/UpdateDependent';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/reimbursement/with" element={<ReimbursementWithPrescription />} />
      <Route path="/reimbursement/without" element={<ReimbursementWithoutPrescription />} />
      {/* <Route path="/login" element={<Login />}/> */}
      <Route path="/approve" element={<Approve/>}/>
      <Route path="/dependent" element={<Dependent/>}/>
      <Route path="/PresStatus" element={<PresStatus/>}/>
      <Route path="/ReimburseStatus" element={<ReimburseStatus/>}/>
      <Route path="/ReimburseReport" element={<ReImburseReport/>}/>
      <Route path="/HospitalList" element={<HospitalList/>}/>
      <Route path="/reimburs/report/nopres"element={<ReportWithoutPres/>}/>
      <Route path="/update/dependent" element={<UpdateDependent/>}/>
    </Routes>
  );
};

export default AppRoutes;
