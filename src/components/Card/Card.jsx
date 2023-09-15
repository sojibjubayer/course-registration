import dollar_sign from '../../assets/dollar-sign.svg'
import frame from '../../assets/frame.svg'

const Card = ({ courses, handleCourses }) => {

    return (
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-y-3 mb-20" >
            {
                courses.map(course =>
                    <div key={course.id} className="card w-[300px] bg-base-100 ">
                        <figure className="pt-5">
                            <img src={course.image} />
                        </figure>
                        <div className=" p-4 ">
                            <h2 className="font-semibold text-base mt-3 mb-4">{course.course_name}</h2>
                            <p className="font-normal text-[#1c1b1b99] text-sm">{course.course_details}</p>
                            <div className="flex  text-[#1c1b1b99] font-medium text-base mt-4 ">
                                <img className='mr-0px w-5 inline' src={dollar_sign} alt="" />
                                <p className="">Price : {course.price}</p>
                                <img className='ml-6 w-5 inline' src={frame} alt="" />
                                <p className='ml-1'>Credit : {course.credit}hr</p>
                            </div>
                            <button onClick={() => handleCourses(course)} className=" ml-1 p-2 rounded-xl btn-primary w-64 items-center mx-auto mt-5 text-white font-semibold text-base ">Select</button>

                        </div>
                    </div>
                )
            }
        </div>



    );
};

export default Card;