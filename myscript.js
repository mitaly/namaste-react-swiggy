import React from 'react';
import ReactDOM from 'react-dom/client';

import Body from './src/Body';
import Footer from './src/Footer';
import Header from './src/Header';
const root = ReactDOM.createRoot(document.getElementById("root"));

// const InputBox = ({placeholder}) => {
//     return (
//         <div>
//             <input placeholder={placeholder}></input>
//         </div>
//     )
// }

// const App = () => {
//     const [showPan, setShowPan] = useState(true);
//     function toggleShowPan() {
//         setShowPan(!showPan)
//     }
//     return (
//         <>
//         {showPan ? "PAN" : "Adhar"} 
//         {/* {showPan ? <input placeholder = "Enter your PAN"></input> : }
//          */}
//         {/* {showPan ? <InputBox placeholder="Enter your PAN"/> : <input placeholder = "Enter your Adhar"></input>} */}
//         {showPan ? <InputBox placeholder="Enter your PAN"/> : <InputBox placeholder="Enter your Adhar"/>}
//         <button onClick={toggleShowPan}>Toggle show pan</button>
//         </>
//     )
// }



const App = () => {

    return (
        <>
            <Header />
            <hr></hr>
            <Body />
            <hr></hr>
            <Footer />
        </>
    )
}

root.render(<App />)
console.log("logging")