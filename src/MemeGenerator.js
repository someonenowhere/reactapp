import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'https://picsum.photos/700/300',
            allMemeImages: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data;
                this.setState({
                    allMemeImages: memes
                })
            })
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const random = Math.floor((Math.random() * this.state.allMemeImages.length))
        const randImg = this.state.allMemeImages[random].url
        this.setState({
            randomImage: randImg
        })
    }

    render() {
        return (
            <div className="TodoContainer">
                <section>
                    <h1 className="Text-center">Meme Generator</h1>
                </section>
                <section>
                    <form className="MemeInput" onSubmit={this.handleSubmit}>
                        <label>
                            <input 
                                type="text" 
                                name="topText" 
                                value={this.state.topText} 
                                placeholder="Top Text"
                                onChange={this.handleChange} />
                            <input 
                                type="text" 
                                name="bottomText" 
                                value={this.state.bottomText} 
                                placeholder="Bottom Text"
                                onChange={this.handleChange} />
                            <button>Submit</button>
                        </label>
                    </form>
                </section>
                <section >
                    <div className="MemeInputImage">
                        <img src={this.state.randomImage} alt=""/>
                        <h2 className="Toptext">{this.state.topText}</h2>
                        <h2 className="Bottomtext">{this.state.bottomText}</h2>
                    </div> 
                </section>
            </div>
        )
    }

}

export default MemeGenerator;