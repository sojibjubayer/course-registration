

const Cart = ({ cartCourses }) => {
    
    console.log(cartCourses)

    return (
        <div className="">

           
                    <ol className="list-decimal  ml-5">
                        {
                            cartCourses.map(courseName=><li>{courseName.course_name}</li>)
                        }
                       
                    </ol>
                   

        


        </div>
    );
};

export default Cart;