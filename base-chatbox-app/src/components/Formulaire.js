import React, { Component } from 'react';

class Formulaire extends Component {

    state = {
        message:'',
        test: {
            toto:'1',
            titi:'2'
        },
        length: this.props.length,
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            message: this.state.message,
            pseudo: pseudo
        }
        addMessage(message)
        // Reset
        this.setState({ message:'', length })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createMessage()
    }

    handleChange = (e) => {
        const message = e.target.value
        const length = this.props.length - message.length
        this.setState({ message: message, length:length })
    }

    handleKeyUp = (e) => {
        if(e.key === 'Enter') {
            this.createMessage()
        }
    }

    onClick = () => {
        const copie = {...this.state.test}
        console.log(copie.toto);
        /*this.setState({test:copie})*/
    }

    render() {
        return(
            <form className="form" onSubmit={ this.handleSubmit } onKeyUp={this.handleKeyUp}>
                <textarea required maxLength={this.props.length} value={this.state.message} onChange={ this.handleChange }/>
                <div className="info">
                    {this.state.length}
                </div>
                <button type="submit">Envoyer !</button>
            </form>
        )
    }
}

export default Formulaire