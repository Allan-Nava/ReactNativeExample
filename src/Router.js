import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ActionConst, Lightbox, Modal, Scene, Stack, Router } from 'react-native-router-flux';

import { addProduct, logout }   from './actions';
import LaunchScreen             from './screens/LaunchScreen';
import CameraScreen             from './screens/CameraScreen';
import GalleryScreen            from './screens/GalleryScreen';

import { LoadingLightbox }      from './components';

type Props = {};
class RouterComponent extends Component<Props> {
    render() {
        const { sceneStyle, navigationBarStyle, navigationBarTitleStyle } = styles;
        return (
            <Router sceneStyle={sceneStyle}>
                <Stack key='root'>
                    {/* LAUNCH SCREEN */}
                    <Stack hideNavBar>
                        <Scene component={LaunchScreen} />
                    </Stack>
                </Stack>
            </Router>
        );
    }
}
const styles = StyleSheet.create({
    sceneStyle: {
        backgroundColor: colors.white
    },
    navigationBarStyle: {
        backgroundColor : colors.grayUltraLight,
        shadowColor     : colors.black,
        shadowOffset    : { width: 0, height: 1 },
        shadowOpacity   : 0.18,
        shadowRadius    : 1,
        elevation       : 3
    },
    navigationBarTitleStyle: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: 22
    }
});
  
export default connect(null, { addProduct, logout })(RouterComponent);
  