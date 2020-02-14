import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

const getStars = (rating, base) => {
  const stars = [];
  for (let i = 1; i <= base; i++) {
    if (i <= rating) {
      stars.push(
        <Icon key={i} name="star" type="material" color={'#f0ad00'} />,
      );
    } else {
      stars.push(
        <Icon key={i} name="star-border" type="material" color={'#f0ad00'} />,
      );
    }
  }
  return stars;
};

export default props => {
  const {rating, base} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {getStars(rating, base)}
    </View>
  );
};
