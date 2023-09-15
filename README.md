# Project features

1. Course Items with basic features
   - Implement the structure with diffrent courses in card style.
   - The Card Contains basic  info about the course like Course name,short description,course credit and cost with selection button.

2. Cart design with Cart Items
   - Developed a cart with cart items and some other features.
   - When the user select a course,this will show in cart as Course name.
   - Here will show the Total credit our,remaining,cridit hour and total cost of the selected courses.
3. Cart validation and Notifications
   - When a user select a course this will add to cart but if the user select the same course again there will show a notification about the duplication and the course will not be added to cart.
   - There will be validation for credit limitation.If the credit cross the remaining credit hour it will show  a toast as warning and also prevent to add courses to cart.
## How the state works in this project

- There are 4 jsx file as App,Home,Card,Cart
- In App.jsx we import Home.jsx file and at Home component we create the header file and import Card and Cart component.
- In Card.jsx we create the cards as courses features with tailwindCSS and daisyUI.
- In Cart.jsx we create the cart section with the demanded features.
- In Home.jsx we fetch the json files and pass it to Card.jsx file.At Card state we access the courses and and after separatin the individual course we pass it to course card dynamically.As a result the card of courses dynamically shown in webpage.
- In Home.jsx we add eventhandler as handleCourses which will trigger from Card.jsx select button.After getting the targetted information we store the info at useState and then pass it to desired state.
- From Home.jsx we pass the props to Card.jsx or Cart.jsx where neeeded.
- And after receiving props we do the job to display it or mange it as described.
- In 'courses' state first we set an empty array and after fetching data we update the courses.
- In 'cartCourses' state first we set an empty array and after clicking the course we update the 'cartCourses' with the selected courses.
- In 'creditHour' state first we set 0,and after clicking on targeted course we take the clicked item credit hour by event handling and update the 'creditHour'.
- In 'remaining' state we first set it to 20 hr as primary value and after clicking on a course we calculate the remaining value and set it to 'remaining'.
- In this eventHandler we control the validation using condition,storing data to a state and then show it to as desired places.

