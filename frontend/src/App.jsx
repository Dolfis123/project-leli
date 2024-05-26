import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/public/Beranda";
import About from "./pages/public/About";
import Dashboard from "./pages/admin/Dashboard";
import SejarahAdmin from "./pages/admin/SejarahAdmin";
import VisiMisi from "./pages/admin/VisiMisi";
import BerandaAdmin from "./pages/admin/BerandaAdmin";
import PendaftaranAdmin from "./pages/admin/PendaftaranAdmin";
import Pendaftaran from "./pages/public/Pendaftaran";
import Pelayanan from "./pages/public/Pelayanan";
import PelayananAdmin from "./pages/admin/PelayananAdmin";
import Contact from "./pages/public/Contact";
import Berita from "./pages/public/Berita";
import BeritaAdmin from "./pages/admin/BeritaAdmin";
import BeritaDetail from "./pages/public/BeritaDetail";
import Login from "./pages/admin/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Part Umum Start */}
          <Route path="/" element={<Beranda />} />
          <Route path="/about" element={<About />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/pelayanan" element={<Pelayanan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/berita/:hashed_id" element={<BeritaDetail />} />
          <Route path="/login" element={<Login />} />

          {/* Part Umum End */}
          {/* Part Dashboard Start */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sejarah-admin" element={<SejarahAdmin />} />
          <Route path="/visi-misi-admin" element={<VisiMisi />} />
          <Route path="/beranda-admin" element={<BerandaAdmin />} />
          <Route path="/pendaftaran-admin" element={<PendaftaranAdmin />} />
          <Route path="/pelayanan-admin" element={<PelayananAdmin />} />
          <Route path="/berita-admin" element={<BeritaAdmin />} />

          {/* Part Dashboard End */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
