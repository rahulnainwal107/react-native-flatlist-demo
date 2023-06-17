import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import {useState, useRef} from 'react';
import FlatListItem from './FlatListItem';

export default function App() {
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
    {
      id: '1',
      name: 'GeeksforGeeks View 1',
    },
    {
      id: '2',
      name: 'GeeksforGeeks View 2',
    },
    {
      id: '3',
      name: 'GeeksforGeeks View 3',
    },
    {
      id: '4',
      name: 'GeeksforGeeks View 4',
    },
  ]);

  const totalPages = Math.ceil(items.length / 12);
  const snapToInterval = Dimensions.get('window').width;
  const [currentSnapIndex, setCurrentSnapIndex] = useState(0);

  const onScroll = event => {
    setCurrentSnapIndex(event.nativeEvent?.contentOffset?.x / snapToInterval);
  };

  return (
    <View>
      <FlatList
        data={Array(totalPages).fill(0)}
        renderItem={({item, index}) => {
          const firstIndex = 12 * index,
            lastIndex = firstIndex + 12;
          return (
            <FlatListItem
              index={index}
              data={items.slice(firstIndex, lastIndex)}
            />
          );
        }}
        onMomentumScrollEnd={onScroll}
        keyExtractor={item => item.id}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={snapToInterval}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        overScrollMode="never"
        //pagingEnabled
      />
      {totalPages > 1 ? (
        <View style={styles.dotContainer}>
          {Array(totalPages)
            .fill(0)
            .map((item, index) => (
              <View
                key={index}
                style={[
                  styles.dotStyle,
                  {
                    backgroundColor:
                      currentSnapIndex === index ? 'white' : 'gray',
                  },
                ]}
              />
            ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotContainer: {
    height: 20,
    backgroundColor: 'black',
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 10,
    bottom: 10,
    // left: 0,
    // right: 0,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dotStyle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
