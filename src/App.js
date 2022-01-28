import { Route, Routes } from 'react-router-dom';
import Author from './components/Author';
import EditPost from './components/EditPost';
import Header from './components/Header';
import LogIn from './components/LogIn';
import NewPost from './components/NewPost';
import Posts from './components/Posts';
import ProtectRoutes from './components/ProtectRoutes';
import SelectedPost from './components/SelectedPost';

function App() {
   return (
      <div className="App bg-gray-200 min-h-screen">
         <Header />
         <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route element={<ProtectRoutes />}>
               <Route path="/" element={<Posts/>} />
               <Route path="/new-post" element={<NewPost/>} />
               <Route path="/author/:id" element={<Author/>} />
               <Route path="/edit-post/:postid" element={<SelectedPost/>} />
               <Route path="/edit/:cardID" element={<EditPost/>} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
