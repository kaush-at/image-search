import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from './SearcBar';
import ImageList from './ImageList';



class App extends React.Component {

    state ={images : []};

    onSearchSubmit = async (term) =>{
        console.log(term);
        
        const response = await unsplash.get("/search/photos", {
          params : {query : term}
        //   headers: {
        //     Authorization:
        //       "Client-ID 5dcc24fc28e97ed99c5574901edd41a7aae79a5f2ebedabcfd95bdc12464b1bb"
        //   }
        });
        // }).then((response)=>{
        //     console.log(response.data.results)
        // });
        //console.log(response.data.results);
        this.setState({ images: response.data.results });
    };

    render(){
        return (
            <div className="ui container" style={{marginTop : '20px'}}>
                <SearchBar onButtonSubmit = {this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div> 
        );
    }
}

export default App;