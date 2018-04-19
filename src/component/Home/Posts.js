import React, { Component } from 'react';
import { Segment, Image, Loader } from 'semantic-ui-react';

class Posts extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
       
    }

    render() {
        return (
            <Segment>
                <Loader active />

                <Image src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />
            </Segment>
        );
    }
}

export default Posts;
