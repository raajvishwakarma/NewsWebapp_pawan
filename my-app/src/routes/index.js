import React from 'react'
import { Route, Routes } from 'react-router-dom'

function index() {
    <Routes>
        <Route path="/" >
            <Route index element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Route>
    </Routes>
}

export default index