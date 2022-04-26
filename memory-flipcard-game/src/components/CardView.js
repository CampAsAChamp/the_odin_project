import React, { Component } from "react";
import Cards from "../Data"
import Card from "./Card";
import '../styles/CardView.css';

class CardView extends Component {
    constructor() {
        super();

        this.shuffle(Cards)

        // Declare state as an object 
        this.state = {
            clicked: [],
            unclicked: Cards,
        };

        // Need to bind this function so it knows what context to operate in
        this.handleCardClick = this.handleCardClick.bind(this);
    }


    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    handleCardClick(card) {
        if (this.state.clicked.includes(card)) {
            this.setState({
                clicked: [],
            })
            this.props.updateHighScoreFunction()
        }
        else {
            this.setState({
                clicked: [...this.state.clicked, card],
            })
            this.props.increaseScoreFunction()
        }
        this.shuffle(Cards)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.clicked !== this.state.clicked) {
    //         console.log('pokemons state has changed.')
    //     }
    // }

    render() {
        return (
            <div className="card-view">
                {
                    Cards.map((card, index) => {
                        return <Card name={card.name} img={card.img} key={index} onClick={() => this.handleCardClick(card)} />
                    })
                }
            </div>
        );
    }
}


export default CardView;