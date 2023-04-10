import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useFetch from './util/useFetch';
import useScrollTop from './util/useScrollTop';
/* 자신이 판단했을 때 굳이 dynamic import를 사용하지 않아도 된다면, static import로 가져와도 무방합니다. */
import Navbar from './component/Navbar';
import Footer from './component/Footer';

/* react.lazy()와 suspense를 사용해 보세요. */
const Home = React.lazy(() => import("./Home"));
const CreateBlog = React.lazy(() => import('./blogComponent/CreateBlog'));
const BlogDetails = React.lazy(() => import('./blogComponent/BlogDetail'));
const NotFound = React.lazy(() => import('./component/NotFound'));
const Loading = React.lazy(() => import('./component/Loading'));


function App() {
  
    const [blogs, isPending, error] = useFetch("http://localhost:3003/blogs/");

    //advanced
    useScrollTop();

    return (
        <BrowserRouter>
            { error && <div>{ error }</div> }
                <div className="app">
                    <Navbar />
                    <Suspense fallback={<Loading/>}>
                        <div className="content">
                            <Routes>
                                <Route exact path="/" element={<Home blogs={blogs} isPending={isPending} />} />
                                <Route path="/create" element={<CreateBlog blogs={blogs} />} />
                                <Route path="/blogs/:id" element={<BlogDetails />} />
                                {/* 이렇게 path에 *(와일드카드)를 넣으면 매치되는 URL이 없을 때 해당 컴포넌트를 보여줍니다. */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                    </Suspense>
                    <Footer/>
                </div>
        </BrowserRouter>
    )
}

export default App;
