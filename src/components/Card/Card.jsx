

const Card = ({ courses,handleCourses }) => {
   
    return (
        <div className="grid grid-cols-3 w-3/4 gap-y-3 mb-20" >
            {
                courses.map(course =>
                    <div key={course.id} className="card w-[310px] bg-base-100 ">
                        <figure className="pt-5">
                            <img src={course.image} />
                        </figure>
                        <div className=" p-4 ">
                            <h2 className="font-semibold text-lg mt-4 mb-4">{course.course_name}</h2>
                            <p className="font-normal text-[#1c1b1b99] text-sm">{course.course_details}</p>
                            <div className="flex justify-between text-[#1c1b1b99] font-medium text-base mt-4 ">
                                <p className="">Price : {course.price}</p>
                                <p>Credit : {course.credit}hr</p>
                            </div>

                            <button onClick={()=>handleCourses(course)}  className="btn btn-primary w-64 items-center mx-auto mt-5 text-white font-semibold text-lg ">Select</button>

                        </div>
                    </div>
                )
            }
        </div>



    );
};

export default Card;