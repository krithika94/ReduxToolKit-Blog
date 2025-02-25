import './App.css';
import Layout from './components/Layout';
import AddPostsForm from './features/posts/AddPostsForm';
import PostsList from './features/posts/PostsList';
// import fp from './fp';
import { Routes,Route, Navigate } from 'react-router-dom';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';
import UsersList from './features/users/UsersList';
import UserPage from './features/users/UserPage';

function App() {
    return(
        <main>
            {/* <fp /> */}
            {/* <Counter/> */}
            {/* <AddPostsForm />
            <PostsList /> */}
            <Routes>
                <Route path='/' element={<Layout />} >
                <Route index element={<PostsList />} />
                <Route path='post'>
                    <Route index element={<AddPostsForm />} />
                    <Route path=':postId' element={<SinglePostPage />} />
                    <Route path='edit/:postId' element={<EditPostForm />} />
                </Route>
                <Route path='user'>
                    <Route index element={<UsersList />} />
                    <Route path=':userId' element={<UserPage />} />
                </Route>
                <Route path='*' element={<Navigate to ='/' replace />}/>
                </Route>

            </Routes>
        
        </main>
    )
}

export default App;
