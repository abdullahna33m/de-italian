import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import  Home from './page/Home';
import  Menu from './page/Menu';
import Cart from './page/Cart';


function App() {



  return (
   <div className='h-screen'>
        <Router>
        <div>
        {/* {window.location.pathname !== '/AdminDashBoard' && <Navbar />} */}
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="/admin"></Route> */}
              {/* <Route path = "/About us" element = {<HomeDash/>}> </Route> */}
          </Routes>
        </div>
      <Footer/>
      </Router>
      {/* {window.location.pathname !== '/AdminDashBoard' && <Footer />} */}
    </div>
  );
}

export default App;
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './page/Home';
// import Menu from './page/Menu';
// import Cart from './page/Cart';

// function App() {
//   const location = useLocation();
//   const isAdminPath = location.pathname === '/admin';

//   return (
//     <div className='h-screen'>
//       <Router>
//         <div>
//           {!isAdminPath && <Navbar />}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/menu" element={<Menu />} />
//             <Route path="/cart" element={<Cart />} />
//             {/* <Route path="/admin" element={<Admin />} /> */}
//           </Routes>
//           {!isAdminPath && <Footer />}
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;