import { Route, Routes } from 'react-router-dom';
import Author from './components/Author';
import Header from './components/Header';
import LogIn from './components/LogIn';
import NewPost from './components/NewPost';
import Posts from './components/Posts';
import ProtectRoutes from './components/ProtectRoutes';

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route element={<ProtectRoutes />}>
               <Route path="/" element={<Posts/>} />
               <Route path="/new-post" element={<NewPost/>} />
               <Route path="/author/:id" element={<Author/>} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
