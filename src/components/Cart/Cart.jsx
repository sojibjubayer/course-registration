

const Cart = ({ cartCourses, remaining, creditHour }) => {

    return (

        <div className='w-1/4'>
            <div className="card w-[300px] bg-base-100 ">
                <div className=" p-4 ">
                    <h2 className="font-bold text-lg mt-4 mb-4 text-[#2F80ED] border-b-2">Credit Hour Remaining: {remaining} hr</h2>
                    <h2 className="font-bold text-lg mt-4 mb-4  ">Course Name</h2>

                    <ol className="list-decimal  ml-5">
                        {
                            cartCourses.map(courseName => <li key={courseName.id}>{courseName.course_name}</li>)
                        }
                    </ol>
                    <p className="border-y-2 mb-3 mt-4 p-3">Total Credit Hour :{creditHour}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;