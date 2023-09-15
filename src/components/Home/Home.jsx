import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [courses, setCourses] = useState([])
    const [cartCourses, setCartCourses] = useState([])
    const [creditHour, setCreditHour] = useState(0)
    const [remaining, setRemaining] = useState(20)


    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])




    const handleCourses = course => {

        const newcartCourses = [...cartCourses, course]
        let count = creditHour + course.credit;
        let countRemaining = 20 - count;
        const isExist = cartCourses.find(cartCourse => cartCourse.id === course.id)
        if (isExist) {
            toast.warning("You have already selected this course!");
            return;
        }

        if (countRemaining < 0) {
            toast.warning("Sorry! Remaining credit hour crossed the limit.");
            return;
        }

        setRemaining(countRemaining)
        setCartCourses(newcartCourses)
        setCreditHour(count)

    }

    return (
        <div className='w-[95%] mx-auto'>
            <h3 className='text-3xl font-bold text-center p-10'>Course Registration</h3>
            <div className='flex lg:flex-row flex-col'>
                <Card handleCourses={handleCourses} courses={courses}></Card>
                <Cart cartCourses={cartCourses} remaining={remaining} creditHour={creditHour}></Cart>
                <ToastContainer />  
            </div>
            <p className='text-xs  text-center p-10'>Developed by Jubayer Sojib</p>
        </div>
    );
};
export default Home;