import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css'
import Cart from '../Cart/Cart';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [courses, setCourses] = useState([])
    const [cartCourses, setCartCourses] = useState([])
    const [creditHour,setCreditHour]=useState(0)
    const [remaining,setRemaining]=useState(20)


    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])


  

    const handleCourses = course=> {
       const newcartCourses = [...cartCourses, course]
        let count=creditHour+course.credit;
        let countRemaining=20-count;
        const isExist = cartCourses.find(cartCourse => cartCourse.id === course.id)
        if(isExist){
            toast.warning("You already selected this course!");
            return ;
        }
        if(countRemaining<0){
            toast.warning("Sorry! Credit hour cross the limit.");
            return ;
        }
        setRemaining(countRemaining)
        setCartCourses(newcartCourses)
        setCreditHour(count)

    }




    return (
        <div className='w-[95%] mx-auto'>
            <h3 className='text-3xl font-bold text-center p-10'>Course Registration</h3>
            <div className='flex'>
                <Card handleCourses={handleCourses} courses={courses}></Card>


                <div className='w-1/4'>
                <div className="card w-[310px] bg-base-100 ">
                    <div className=" p-4 ">
                        <h2 className="font-bold text-lg mt-4 mb-4 text-[#2F80ED] border-b-2">Credit Hour Remaining: {remaining} hr</h2>
                        <h2 className="font-bold text-lg mt-4 mb-4  ">Course Name</h2>
                        {
                            cartCourses.map((cartCourse,idx)=><Cart key={idx} cartCourse={cartCourse} ></Cart>)
                        }
                        <p className="border-y-2 mb-3">Total Credit Hour :{creditHour}</p>
                        <p>Total Price :  USD</p>
                        <ToastContainer />

                    </div>
                </div>
                </div>

            </div>

        </div>
    );
};

export default Home;