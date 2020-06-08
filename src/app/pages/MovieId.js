// import React, { useState, useEffect, useCallback } from "react";

// const getSingleMovie = () => {
//     const [error, setError] = useState('');
//     const [movie, setMovie] = useState([])


//     const singleMovieApi = useCallback(async () => {
//         setLoading(true);
//         const res = await fetch('https://academy-video-api.herokuapp.com/content/items/:itemId', {
//             method: "GET",
//             headers: {
//                 authorization: localStorage.getItem("token") // ?
//             }
//         })
//         if(!res.ok) return setError("Error: you done something wrong")
//             setMovie( await res.json())
//          setLoading(false)
//     }, [])

//     useEffect(() => {
//         singleMovieApi()  ;
//     }, [singleMovieApi]);

//     return (
//         <React.Fragment>

//         </React.Fragment>
//     )
// }

// export default getSingleMovie