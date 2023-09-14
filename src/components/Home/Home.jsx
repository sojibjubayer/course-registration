import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const [courses,setCourses]=useState([])

    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
        
    },[])
    return (
        <div className='w-[95%] mx-auto'>
            <h3 className='text-3xl font-bold text-center p-10'>Course Registration</h3>
            <div className='flex'>
            <Card courses={courses}></Card>
            <Cart></Cart>
            </div>
            
        </div>
    );
};

export default Home;