

const Cart = ({ cartCourse}) => {
    // console.log(cartCourse)
    const {course_name}=cartCourse;

    return (
        <div className="">

           
                    <ol className="list-decimal ml-5">
                   {course_name}
                       
                    </ol>
                   

        


        </div>
    );
};

export default Cart;