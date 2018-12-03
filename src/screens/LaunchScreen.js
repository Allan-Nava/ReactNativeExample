import React, { Component } from 'react';

type Props = {};
class LaunchScreen extends Component<Props> {

    render() {
        const { animated } = this.state;
    
        const {
            containerStyle,
            welcomeViewStyle,
            imageStyle,
        } = styles;
    
        return (
          <View style={containerStyle}>
            <View style={welcomeViewStyle}>
              <Animated.View style={{ transform: [{ scale: animated }] }}>
                <Image style={imageStyle} source={imgAppIcon} />
              </Animated.View>
            </View>
          </View>
        );
    }
}