const element = React.createElement("h1",{id:"first",className:"Ankit",style:{backgroundColor:"blue",fontSize:"30px"}}, "Hello Coder Army");
const element2 = React.createElement("h2",{id:"first",className:"Ankit",style:{color:"white",backgroundColor:"black",fontSize:"30px"}}, "maja aa gaya");


const div1 = React.createElement("div",{},[element,element2]);




const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);
// root.render(element2); /////// element2 will replace element in the DOM, only one element will be rendered at a time. To render both elements, we can use React.Fragment or an array of elements.
root.render(div1);