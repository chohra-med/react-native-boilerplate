import React from 'react';
import styles from './sideBar.style';
import {getActiveRouteState} from '../../utils/navigation';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {sections} from './content';
import {SAMPLE_AVATAR} from '../../assets/images';

export default class Component extends React.PureComponent {
  render() {
    const {navigation} = this.props;
    const activeRouteName = getActiveRouteState(navigation.state).routeName;
    return (
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.avatar}
          source={SAMPLE_AVATAR}
        />
        <Text style={styles.user_name}>Sarah</Text>
        <SectionList
          style={styles.sectionList}
          sections={sections(navigation, activeRouteName)}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{title}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.label}
              style={[
                styles.itemContainer,
                item.isActive ? styles.itemContainerActif : {},
              ]}
              onPress={item.action}>
              <Icon
                name={item.icon.name}
                type={item.icon.type}
                size={24}
                iconStyle={[
                  styles.itemIcon,
                  item.isActive ? styles.itemIconActif : {},
                ]}
              />
              <Text
                style={[
                  styles.itemText,
                  item.isActive ? styles.itemTextActif : {},
                ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
