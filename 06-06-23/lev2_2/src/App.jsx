import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Blog from './pages/Blog'
import DetailsPets from './pages/DetailsPets'
import DetailsCodingLife from './pages/DetailsCodingLife'
import DetailsHobbys from './pages/DetailsHobbys'
import DetailsPlants from './pages/DetailsPlants'
import DetailsSocialMedia from './pages/DetailsSocialMedia'
import DetailsWork from './pages/DetailsWork'

function App() {

  let blogData = [
    {
      id: 0,
      title: "My Pets",
      published_date: "18.03.21",
      author: "Jane Doe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
      img_url:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",
      path: '/details/pets',
    },
    {
      id: 1,
      title: "My Plants",
      published_date: "5.06.21",
      author: "John Doe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
      img_url:
        "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
        path: '/details/plants',
    },
    {
      id: 2,
      title: "My Work",
      published_date: "20.11.21",
      author: "Frida",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
      img_url:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1972&q=80",
        path: '/details/work',
    },
    {
      id: 3,
      title: "My Hobbys",
      published_date: "02.12.21",
      author: "Pete",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi officiis quisquam reprehenderit odit ipsam natus quia sed neque sunt eligendi laboriosam, culpa, modi dolorum consequuntur quo. Distinctio, quisquam aspernatur?",
      img_url:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        path: '/details/hobbys',
    },
    {
      id: 4,
      title: "Social Media",
      published_date: "15.02.21",
      author: "Ann",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi officiis quisquam reprehenderit odit ipsam natus quia sed neque sunt eligendi laboriosam, culpa, modi dolorum consequuntur quo. Distinctio, quisquam aspernatur?",
      img_url:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        path: '/details/socialmedia',
    },
    {
      id: 5,
      title: "Coding Life",
      published_date: "06.05.21",
      author: "Alex",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi officiis quisquam reprehenderit odit ipsam natus quia sed neque sunt eligendi laboriosam, culpa, modi dolorum consequuntur quo. Distinctio, quisquam aspernatur?",
      img_url:
        "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
        path: '/details/codinglife',
    }
   ];

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blog' element={<Blog blogData={blogData} />} />
      <Route path='/details/pets' element={<DetailsPets blogData={blogData}/>} />
      <Route path='/details/codinglife' element={<DetailsCodingLife blogData={blogData}/>} />
      <Route path='/details/hobbys' element={<DetailsHobbys blogData={blogData}/>} />
      <Route path='/details/plants' element={<DetailsPlants blogData={blogData}/>} />
      <Route path='/details/socialmedia' element={<DetailsSocialMedia blogData={blogData}/>} />
      <Route path='/details/work' element={<DetailsWork blogData={blogData}/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
