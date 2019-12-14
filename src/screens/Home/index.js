import React from 'react';
import { StatusBar } from 'react-native';

import { 
    Container, 
    Content, 
    Card, 
    CardContent, 
    CardImage, 
    CardTitle
} from './styles';
 
import Header from '../../components/Header';

export default function Screen() {
    return (
        <Container>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor="#f2f2f2"
            />
            <Header />

            <Content>
                <Card style={{backgroundColor: '#ffa500'}}>
                    <CardContent style={{flexDirection: 'row'}}>
                        <CardImage /*source={require('../../assets/images/Categorias/01.png')} style={{left: -30, top: -15}}*/ />
                        <CardTitle>
                            EDIT COURSES
                        </CardTitle>
                    </CardContent>
                </Card>
            </Content>
            <Content>
                <Card style={{backgroundColor: '#ffd700'}}>
                    <CardContent style={{flexDirection: 'row-reverse'}}>
                        <CardImage />
                        <CardTitle>
                            BOX FIGHTS
                        </CardTitle>
                    </CardContent>
                </Card>
            </Content>
            <Content>
                <Card style={{backgroundColor: '#d3191c'}}>
                    <CardContent style={{flexDirection: 'row'}}>
                        <CardImage />
                        <CardTitle>
                            DEATHRUNS
                        </CardTitle>
                    </CardContent>
                </Card>
            </Content>
            <Content>
                <Card style={{backgroundColor: '#008b8b'}}>
                    <CardContent style={{flexDirection: 'row-reverse'}}>
                        <CardImage />
                        <CardTitle>
                            OTHERS
                        </CardTitle>
                    </CardContent>
                </Card>
            </Content>

        </Container>
    );
}

Screen.navigationOptions = () => {
    return {
        header: null
    };
}