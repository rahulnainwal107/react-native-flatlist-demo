import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

const FlatListItem = ({data, index: parentIndex}) => {
  console.log('data ', data, parentIndex);

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: parentIndex % 2 === 0 ? 'red' : 'green',
              margin: 1,
            }}></View>
        );
      })}
    </View>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});
