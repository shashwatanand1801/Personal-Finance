// class MyApp extends Component {

// constructor(props) {
//     super(props);
//     this.state = {showBody: false};
//     this.handleClick = this.handleClick.bind(this);
// }

// handleClick () {
//   // toggle the showBody state to hide and show the body
//   this.setState({ showBody: !this.state.showBody })
// }

// render() { 
//     return ( 
  
//        <FormControlLabel
//                   control=
//                   {
//                     <Switch
//                       name="sector"
//                       color="primary"
//                       style={{paddingRight: "30px"}}
//                       onClick={this.handleClick}
//                     />
//                   }
//                   label="Sector 1"
//          /> 

//          {this.state.showBody && (
//            <div className="chatBody">
//                 This is my chat body
//            </div>
//          )}
//     );
//   }
// }
// export default MyApp;


import { Switch } from 'antd';
import React, { useState, useEffect  } from 'react';




const onChange = (checked) => {
  console.log(`switch to ${checked}`);

//   if(checked){
//     setvisible("HIDE CHARTS")
//   } else {
//     setvisible("SHOW CHARTS")
//   }

};

function App() {
    
const [visible, setvisible] = useState(true);

useEffect(()=>{},[visible]) 

return (
<div>
<Switch defaultChecked visible onChange={()=>setvisible(!visible)} />
<h5>TOGGLE GRAPHS</h5>
{!visible? (
    <div> Its visible</div>
):null}
</div>
);

}
export default App;