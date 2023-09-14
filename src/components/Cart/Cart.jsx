

const Cart = () => {
    return (
        <div className="w-1/4">
            <div className="card w-[310px] bg-base-100 ">
                <div className=" p-4 ">
                    <h2 className="font-bold text-lg mt-4 mb-4 text-[#2F80ED] border-b-2">Credit Hour Remaining: 20 hr</h2>
                    <h2 className="font-bold text-lg mt-4 mb-4  ">Course Name</h2>
                    <ol class="list-decimal ml-5">
                        {/* <li></li> */}
                        
                    </ol>
                    <p className="border-y-2 mb-3">Total Credit Hour :</p>
                    <p>Total Price :  USD</p>



                </div>
            </div>
        </div>
    );
};

export default Cart;