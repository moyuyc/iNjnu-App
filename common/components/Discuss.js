import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

import Tabs from 'react-native-tabs';
import {Map} from 'immutable'

export default class BottomBar extends Component {
	
  componentDidMount() {
    
  }
	render() {
		const {title, img, name, tip, summary, onPress, onImgPress} = this.props;
		return (
			<TouchableHighlight
        style={styles.item}
        onPress={onPress}
        underlayColor="rgba(238,242,247,0.8)"
      >
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableHighlight
            onPress={onImgPress}
            underlayColor="rgba(238,242,247,0.6)"
          >
            <Image source={{uri: img}} style={styles.img}/>
          </TouchableHighlight>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.tip}>{tip}</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.summary}>{summary+'...'}</Text>
        </View>
      </TouchableHighlight>
		)
	}

	shouldComponentUpdate(newProps) {
		return !Map(newProps).equals(Map(this.props));
	}
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 10,
    marginTop: 15,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    minHeight: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  summary: {
    fontSize: 13.5,
    color: '#aaa',
  },
  title: {
    fontSize: 16.5,
    color: 'black',
    paddingVertical: 4,
    // paddingLeft: 10
  },
  img: {
    borderRadius: 16,
    height: 32,
    width: 32
  },
  name: {
    fontSize: 15,
    color: 'orange',
    marginLeft: 10,
    flex: 1
  },
  tip: {
    textAlign: 'right',
    marginRight: 5,
    color: '#aaa',
    fontSize: 13,
    // alignSelf: 'flex-end'
  }
});