import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/wrapper";
import images from "./images.json";
import Nav from "./components/navbar";
import Gamecard from "./components/gamecard";

class App extends Component {
 state = {
   message : "Click a kitten to begin!",
   images,
   unclickedImages : images,
   score: 0,
   topScore: 0
 } 

 clickedCard = id => {
   if(this.state.unclickedImages.find(image=> image.id === id)){
     this.setState({
       score:this.state.score +1,
       unclickedImages : this.state.unclickedImages.filter(image=> image.id !== id),
       message : "You guessed correctly!",
     });
   } else {
     this.setState({
       message: "You guessed incorrectly!",
       unclickedImage : this.state.images,
       score : 0,
       topScore : (this.state.score > this.state.topScore) ? this.state.score : 
       this.state.topScore
     });
   }
   console.log (this.state.unclickedImages);
 }

 shuffleArray = array => {
   let i = array.length -1;
   for (; i > 0; i--){
     const j = Math.floor(Math.random() * (i +1));
     const temp = array[i];
     array[i] = array[j];
     array[j] = temp;
   }
   return array;
 }
 
  render(){
 
  return (
  
    <div className="App">
      <header id="beHeader">
      <Nav 
      message = {this.state.message}
      score = {this.state.score}
      topScore = {this.state.topScore}
       />
       </header>
    <div className="jumbotron jumbotron-fluid" id="jumboShrimp">
      <div className="container">
        <h1 className="display-4">Kitten Clicky Game</h1>
        <p className="lead">Click on a kitten to earn points, but don't click on any more than once</p>
      </div>
    </div>
    <Wrapper>
      {this.shuffleArray(this.state.images).map(image =>
        <Gamecard 
            clickedCard={this.clickedCard}
            image={image.image}
            id={image.id}
            key={image.id}
        />
        )}
    </Wrapper> 
    <footer className="xx-primary text-white p-4 mt-5">
      <div className="container">
        <div className="bottom">Kitten Clicky Game! by <span className="badge badge-warning">Oksana M</span>
        </div>
      </div>
    </footer>
    </div>
  );
}

}

export default App;
