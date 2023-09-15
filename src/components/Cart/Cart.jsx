

const Cart = ({ cartCourses }) => {

    return (
        <div className="">

           
                    <ol className="list-decimal  ml-5">
                        {
                            cartCourses.map(courseName=><li key={courseName.id}>{courseName.course_name}</li>)
                        }
                    </ol>
        </div>
    );
};

export default Cart;