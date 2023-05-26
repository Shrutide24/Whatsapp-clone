import { Text, View, Image, StyleSheet } from 'react-native';

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../chatListItem/screans/images/Joseph-Vijay.jpg')}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            SHRUTI Pandey
          </Text>
          <Text style={styles.subTitle}>23:30</Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
          Hello AVINASH
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor:'black',
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});

export default ChatListItem;