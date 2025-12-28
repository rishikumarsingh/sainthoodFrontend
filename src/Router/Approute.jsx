import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Ourteam from '../pages/videoGallery'
import Testimonial from '../pages/vision-mission'
import Page404 from '../pages/Page404'
import Contact from '../pages/Contact'
import Join from '../pages/School-Policies'
import Aboutus from '../pages/Aboutus/About us'
import Course from '../pages/Admission-Process'
import Gallery from '../pages/Gallery/Gallery'
import Login from '../auth/Login'
import Dashboard from '../pages/Admin/Dashboard'
import UploadBanner from '../pages/Admin/UploadBanner'
import UploadGallery from '../pages/Admin/UploadGallery'
import CreateNotification from '../pages/Admin/CreateNotification'

function Approute() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<Aboutus/>} />
      <Route path='/admission-Process' element={<Course/>} />
      <Route path='/video-gallery' element={<Ourteam/>} />
      <Route path='/vision-mission' element={<Testimonial/>} />
      <Route path='/page404' element={<Page404/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/School-Policies' element={<Join/>} />
      <Route path='/Gallery' element={<Gallery/>} />


      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/upload-banner' element={<UploadBanner/>} />
      <Route path='/upload-gallery' element={<UploadGallery/>} />
      <Route path='/notifications' element={<CreateNotification/>} />


      

    </Routes>
  )
}

export default Approute