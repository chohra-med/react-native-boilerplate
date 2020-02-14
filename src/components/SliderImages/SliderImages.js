import React, {PureComponent} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {TouchableHighlight, Dimensions, View, StyleSheet, ActivityIndicator} from 'react-native';
import theme from '../../theme';
import {Image} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

export default class SliderImages extends PureComponent {
    state = {
        index: 0,
    };

    renderImage = ({item, index}) => {
        const {
            heightComponent,
            widthComponent,
        } = this.props;
        return (
            <TouchableHighlight key={index} onPress={this.props.onPress}>
                <Image style={{
                    height: height * heightComponent,
                    width: width * widthComponent,
                    borderRadius: 10,
                    padding: 2,
                }}
                       PlaceholderContent={<ActivityIndicator color={theme.PRIMARY_COLOR}/>}
                       resizeMode={'stretch'}
                       source={{uri: item}}/>
            </TouchableHighlight>
        );
    };

    render() {
        const {
            images,
            heightComponent,
            widthComponent,
        } = this.props;
        return (
            <View style={[styles.imageContainer, {
                height: height * (heightComponent + 0.01),
                width: width * (widthComponent + 0.01),

            }]}
            >
                <Carousel
                    layout={'default'}
                    enableMomentum={true}
                    firstItem={0}
                    ref={c => {
                        this.slider1Ref = c;
                    }}
                    renderItem={this.renderImage.bind(this)}
                    data={images}
                    windowSize={1}
                    sliderWidth={width * (widthComponent - 0.005)}
                    itemWidth={width * (widthComponent - 0.005)}
                    loop={true}
                    inactiveSlideScale={0}
                    inactiveSlideOpacity={0}
                    onSnapToItem={index => {
                        this.setState({index});
                    }}

                />
                <Pagination
                    dotsLength={(images && images.length) || 0}
                    activeDotIndex={this.state.index}
                    containerStyle={[styles.paginationContainer, {
                        marginTop: height * (heightComponent - 0.03),

                    }]}
                    dotColor={theme.WHITE}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={theme.WHITE}
                    inactiveDotOpacity={1}
                    inactiveDotScale={0.6}
                    carouselRef={this.slider1Ref}
                    tappableDots={!!this.slider1Ref}
                />
            </View>
        );
    }
};
const styles = StyleSheet.create({

    imageContainer: {
        marginTop: 10,
        borderWidth: 3,
        backgroundColor: theme.GREY_WHITE,
        borderRadius: 10,
        borderColor: theme.GREY_WHITE,

    },
    paginationContainer: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        paddingVertical: -3,
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: -40,

    },


});
