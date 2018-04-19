import React, { Component } from 'react';
import { Header, Segment, Container, Icon, Image, Label, Flag, Divider, Grid, Message } from 'semantic-ui-react';
import Typewriter from './component/Home/Typewriter.js';
import Posts from './component/Home/Posts.js';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
      
    }

    render() {
        return (
            <Container>
                <Segment basic>
                    <Header as='h2' icon textAlign='center'>
                        <Image style={{ width: "135px", marginTop: "20px", marginBottom: "20px" }} circular src='https://scontent.fkhh1-2.fna.fbcdn.net/v/t1.0-9/18193880_1846702875653316_2063440614956040385_n.jpg?_nc_cat=0&oh=dbb6c3ebd2d887446a8015d59df29749&oe=5B4FEBFE' />
                        <Header.Content style={{ marginBottom: "10px" }} >
                            <span>Chen Bo Heng </span>
                        </Header.Content>
                        <Container textAlign='center'>
                            <Label color='orange'>Laravel</Label>
                            <Label color='blue'>Reactjs</Label>
                        </Container>
                        <Container textAlign='center'>
                            <Label color='green'>Web</Label>
                            <Label color='teal'>Front End</Label>
                            <Label color='grey'>Backend End</Label>
                        </Container>
                    </Header>
                    <Typewriter />
                </Segment>
                <Divider horizontal>About</Divider>
                <Segment basic>
                    <Grid columns={3} divided stackable>
                        <Grid.Row>
                            <Grid.Column >
                                <Icon name="point" color="grey" size="large" />
                                <span style={{ marginLeft: "10px" }}><Flag name='tw' />臺灣 澎湖人</span>
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="heart outline" color="grey" size="large" />
                                <span style={{ marginLeft: "10px" }}> 22歲 <small>(1995-07-02)</small> </span>
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="student" color="grey" size="large" />
                                <span style={{ marginLeft: "10px" }}>國立高雄第一科技大學-運籌管理系</span>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Icon name="mail outline" color="grey" size="large" />
                                <span style={{ marginLeft: "10px" }}>chenboheng3@gmail.com </span>
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="github" color="grey" size="large" />
                                <span style={{ marginLeft: "10px" }}>Github </span>
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="facebook" color="grey" size="large" />
                                <span style={{ marginLeft: "10px" }}>Facebook </span>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Divider horizontal>POSTS</Divider>
                <Posts />
            </Container>
        );
    }
}

export default Home;
