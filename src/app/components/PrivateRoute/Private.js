import React, { useState, useEffect, useCallback } from "react";
import Card from "../Card/Card"

const Content = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [items, setItems] = useState([]);

    const contentAPI = useCallback(async () => {
        setLoading(true);
        const res = await fetch('https://academy-video-api.herokuapp.com/content/items', {
            method: "GET",
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        if(!res.ok) return setError("Error: you done something wrong")
            setItems( await res.json())
         setLoading(false)
    }, [setError ,setLoading,setItems])

    useEffect(() => {
        contentAPI()  ;
    }, [contentAPI]);

  
// class Content extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isLoading: false,
//             items: []
//         }
//     }
//     async componentDidMount () {
//         this.setState({ isLoading: true})

//         const response = await fetch('https://academy-video-api.herokuapp.com/content/items',{
//             method: "GET",
//             headers: {
//                 authorization: localStorage.getItem("token")
//             }
//         })

//         if(response.ok){
//             const json = await response.json();
//             this.setState({items: json})
//         }
        
        
//         this.setState({isLoading: false})

//     }
//     render(){


         return  <React.Fragment>
             <div className="container movies-container">
                <div className="columns is-multiline"> 
                    {error ? (<h3>{error}</h3>) : !loading && items ? (
                    items.map((movie) => {
                    return (
                        <Card
                            key={movie.id}
                            title={movie.title}
                            description={movie.description.substring(0, 55)}
                            image={movie.image}
                        />
                    );
                })
                ) : (
                <h3 className="has-text-white has-text-centered">
                    Loading movies...
                 </h3>
                )
            }
            </div>
        </div>
     </React.Fragment>
    }
export default Content