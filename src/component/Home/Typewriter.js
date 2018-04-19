import React, { Component } from 'react';
import { Icon, Message } from 'semantic-ui-react';

class Typewriter extends Component {
    constructor(props) {
        super(props);
        this.words = [
            "Welcome to my website.".split(""),
            "Hellow World!".split(""),
            "歡迎來到我的個人網站！".split(""),
            "人生如戲,戲如人生！ 每個人背後都有著不同的故事".split(""),
            "如果有任何問題與建議,歡迎Facebook聯絡！".split("")
        ];
        this.state = {
            wordRow: 0,
            wordLength: 0,
            message: "",
        };
    }

    componentDidMount() {
        this.messageStart = setInterval(
            () => {
                if (this.waitting) {
                    return;
                }
                if (this.state.wordLength >= this.words[this.state.wordRow].length) {
                    this.waitting = true;
                    setTimeout(() => {
                        this.waitting = false;
                        this.setState({
                            wordRow: parseInt(Math.random() * this.words.length),
                            wordLength: 0,
                            message: "",
                        });
                    }, 3000);
                    return;
                }
                this.WriteMessage()
            },
            80
        );
    }

    WriteMessage() {
        this.setState({
            wordLength: this.state.wordLength + 1,
            message: this.state.message + this.words[this.state.wordRow][this.state.wordLength],
        });
    }

    render() {
        return (
            <Message icon>
                <Icon name='comment' />
                <Message.Content>
                    <Message.Header>
                        < div ref="CBHMessage" >{this.state.message}</div>
                    </Message.Header>
                </Message.Content>
            </Message>
        );
    }
}

export default Typewriter;
