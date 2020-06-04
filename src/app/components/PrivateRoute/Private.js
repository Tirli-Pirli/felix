import React, { Component } from "react";
import Card from "../Card/Card"


class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            items: []
        }
    }
    async componentDidMount () {
        this.setState({ isLoading: true})

        const response = await fetch('https://academy-video-api.herokuapp.com/content/items',{
            method: "GET",
            headers: {
                authorization: localStorage.getItem("token")
            }
        })

        if(response.ok){
            const json = await response.json();
            this.setState({items: json})
        }
        
        
        this.setState({isLoading: false})

    }
    render(){
         return  <React.Fragment>
             <div className="container movies-container">
                <div className="columns is-multiline">
                 {this.state.items.map((movie) => {
                    return (
                        <Card
                            key={movie.id}
                            title={movie.title}
                            description={movie.description.substring(0, 55)}
                            image={movie.image}
                        />
                    );
                })}
                </div>
            </div>
            
            </React.Fragment>
    }

    
}


export default Content