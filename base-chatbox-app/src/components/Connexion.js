import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Connexion extends Component {

    state = {
        pseudo:'toto',
        goToChat: false
    }

    onChange = (e) => {
        let text = e.target.value;
        this.setState( {pseudo:text} )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({goToChat:true})
    }

    render() {

        if(this.state.goToChat) {
            const texte = document.querySelector('input').value
            return(
                <Redirect push to={`/pseudo/${texte}`}/>
            )
        }
        return(
            <div className="connexionBox">
                <form action="#" className="connexion" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Pseudo"
                        required
                        value={this.state.pseudo}
                        onChange={this.onChange}
                    />
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
}

export default Connexion

