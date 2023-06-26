import './styles/App.css'
import React, { useState, useEffect } from'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter.jsx';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/loader/Loader';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import { useFetching } from './hooks/useFetching';


function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  // const [isPostsLoading, setIsPostsLoading] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching( async() => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })


  useEffect(() => {
      fetchPosts()
    }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
    <MyButton
      style={{margin: '15px 0'}}
      onClick={() => setModal(true)}
    >
      Create post
    </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}  
      >
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1>Error {postError}</h1>
      }
      {isPostsLoading 
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
            <Loader />
          </div>
        : <PostList posts={sortedAndSearchedPosts} remove={removePost} title="List of JavaScript" />
      }
      
    </div>
  );
}

export default App;
