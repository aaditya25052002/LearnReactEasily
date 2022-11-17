import React from 'react'; // to use jsx
import ReactDom from 'react-dom'; // to use react dom manipulations
// import "./index.css";
import Heading from './Heading';
import App from './App';
import Learnhook, { Learnhook2 } from './Learnhook';
import Reactform from './Reactform';
import Reactformeasy, { Reactformeasy1 } from './Reactformeasy';
import ToDoList from './ToDoList';
import Learn from './Learn';
import CryptoPrice from './CryptoPrice';
import LearnBootstrap from './LearnBootstrap';
import Parent from './Parent';
import {BrowserRouter} from 'react-router-dom';
import New from './LearnReactRouting/New.jsx';


// ReactDom.render(kya dikhana hai, //jsx expresion
// kaha dikhana hai, function);
// babel is used to convert es6 expression into normal js
ReactDom.render(<h1>Hello world!!</h1>, //jsx expresion
document.getElementById("root"));
//  how to use multiple jsx in render method
//  for that we have div,array of elements,React.Fragment method but react fragment is fastest and most optimised so we gonna use that one
ReactDom.render(
 <React.Fragment>
  <h2>Hello now we gonna learn how to use the react fragment method in our jsx method</h2>
  <p>pretty simple already done bitch go to the code</p>
 </React.Fragment>,
 document.getElementById("root")
);
// react.fragment can reaplaced by <> </>
//new challenge to add 5 best series you have watched till date
ReactDom.render(
  <>
   <h2>Best series i have watched till date are :-</h2>
   <ol>
    <li>Naruto</li>
    <li>Peaky Blinders</li>
    <li>Deathnote</li>
    <li>Dark</li>
    <li>The Office</li>
   </ol>
  </>,
  document.getElementById("root")
 );

 // lec 10

 // Javascript in jsx expression in React.js
 // we can simply use javascript inside our jsx expression by using {}
 const filname = "Aditya";
 ReactDom.render(
  <>
    <p>new task on hand boiss</p>
    <h3>hello my name is {filname}</h3>
    <p>i have been using {2 + 3}</p>
  </>,
  document.getElementById("root")
 );


 // lec 12 
 // new challenge in hand 
 // add time and date to your page in react

 const currdate = new Date().toLocaleDateString();
 const currTime = new Date().toLocaleTimeString();
 ReactDom.render(
  <>
  <p>Current date is {currdate}</p>
  <p>Current time is {currTime}</p>
  </>, 
  document.getElementById("root")
 );

 // jsx attributes follow camelCase convention so mind it do not fuck it up with your normal html attributes
 // also jsx attributes dosn't use class so as if you are wondering if how to make a class in ract 
 //just use the syntax className // again we can see the camel case convention of react jsx attritubes

 // lec 16
 // how to use inline css in jsx

 // to use the inline css we have to use the css as an object property in jsx syntax
// style = {object} as we passing a javascript object and object can be made by {key : 'value'}
 ReactDom.render(
  <>
  <h1 style = {{
    color : "green",
    textTransform : "capitalize",
    textAlign : "center",
  }}>Hello my name is Aditya Tiwari</h1>
  </>,
  document.getElementById("root")
 );
 // lec 17
 // miniproject (index(mini_project).js.txt)

 //lec 18 
 // components in react js
 // components are used to implement DRY code 
 // points to remember in react
 // 1. name of the file must be capitilaized
 // 2. use import export funciton
 // 3. function name should be same as the filename
 // let us create a component heading.jsx to simplify our learn

 ReactDom.render(
  <Heading />, document.getElementById("root")
 );

 // lec 19
 // import export in reactjs

 // if you are exporting as defualt then you can use any name to import the content but u have to use the imported name only in index.js
 // but the problem is that u can only export one default function at a time so to deal with that just use the same name to import and export as that of an element and also export and import using the curly braces as {elem1, elem2 , elem3 , elem4, elem5}
 // also if there are many elements to import then u can just import it as import * as q from Component where the q represent the object and if you want to access the element of Component then just use the q.elem and get it


 // lec 21
 // props

 ReactDom.render(
  <>
  <App />
  </>
  ,document.getElementById("root")
 );

 // just in case let us understand about the javascript maps
 // as we have created the netflix app we see that we have to add many cards and write data and all which is much tedious so as to do that we have map funciton in js. so just create an array of the things you need in the card and then use the map function to create new array and access those items. Booom magiccc!!!!
 
 //lec 28
 //object destructring let{x,y,z} = props

 // lec 30
 // hooks
 // hooks are used to avoid the class complexities used to change the state of the variable 

 ReactDom.render(
  <Learnhook2 />, document.getElementById("root")
 );

 // lec 32
 // reactforms
 ReactDom.render(
  <Reactform />,document.getElementById("root")
 )

 //easy way to do that
 ReactDom.render(
  <Reactformeasy1 />, document.getElementById("root")
 )

 // react project -> to do list
 ReactDom.render(
  <CryptoPrice />,document.getElementById("root")
 )

 // lect 50 using bootstrap in React
 // npm i bootstrap
 // LearnBootstrap.jsx

// ReactDom.render(
//   <LearnBootstrap />,document.getElementById("root")
// )

// lec 51 Context Apis
// why context apis are used?
// context apis are generally used to reduce the complexity between multilevel hierarchy of function where you have to pass the props at each level instead of we can use the context api to pass the prop at the defined locatin without using props at each level of children
ReactDom.render(
  <Parent />, document.getElementById("root")
);
// lec 61 learn react client side routing with help of folder LearnReactRouting
// npm i react-router-dom
// import the {BrowserRouter} on the index page
// import router and switch on the other page where you are handling the routing 
// rest in the folder

ReactDom.render(
  <>
  <BrowserRouter>
  <New />
  </BrowserRouter>
  </>,document.getElementById("root")
)