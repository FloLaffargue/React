import React, { Component, createRef } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import './animation.css';

/* Import Firebase */
import base from './base';

/* Animation */
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {

  state = {
      messages: {},
      pseudo: this.props.match.params.pseudo,
      messageBienvenue:''
  }

  messageRef = createRef()

  componentDidMount() {
      base.syncState('/messages', {
          context: this,
          state: 'messages'
      })
      base.syncState('/messageBienvenue', {
          context: this,
          state: 'messageBienvenue'
      })
  }

  componentDidUpdate() {
    const ref = this.messageRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = (message) => {
      const copieMessages  = { ...this.state.messages }
      copieMessages[`message-${Date.now()}`] = message

      Object
          .keys(copieMessages)
          .slice(0,-10)
          .forEach(cleMessage => {
              copieMessages[cleMessage] = null
          })

      this.setState({ messages: copieMessages })
  }

  isUser = pseudo => pseudo === this.state.pseudo

  render () {
    const messages = Object.keys(this.state.messages)
        const result = messages.map( (element) => {
          return <CSSTransition
                    timeout={2000}
                    classNames='toto'
                    key={element}>
                      <Message
                          isUser={this.isUser}
                          message={this.state.messages[element].message}
                          pseudo={this.state.messages[element].pseudo}
                      />
                </CSSTransition>
      })

    return (
        <div className='box'>
            <strong>{this.state.messageBienvenue}</strong>
          <div>
            <div className="messages" ref={this.messageRef}>
                <TransitionGroup className="message">
                { result }
                </TransitionGroup>
            </div>
          </div>
          <Formulaire  addMessage={ this.addMessage } pseudo={this.state.pseudo} length={200}/>
        </div>
    )
  }
}

export default App
