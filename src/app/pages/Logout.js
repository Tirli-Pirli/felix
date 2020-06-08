// import React, { useState, useCallback } from "react";
// import { useHistory} from 'react-router-dom';


// const Logout = () => {
    
//     const history = useHistory();


//     const logoutAPI = useCallback((e) => {

//         e.preventDefault()
//           fetch ("https://academy-video-api.herokuapp.com/auth/logout", {
//             method: "POST",
//             body: JSON.stringify(),
//             headers: {"Content-Type": "application/json"},
//         })
//         .then((res) => res.json())
//         .then((response) => {
//             console.log(response);
//             localStorage.clear("token", response.token);
//             history.replace('/home')
//         })
//     })

//     return(
//         <React.Fragment>

//         </React.Fragment>
//     )
// }

// export default Logout
    