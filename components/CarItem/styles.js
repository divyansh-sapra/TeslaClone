import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
      },
      title: {
        fontSize: 40,
        fontWeight: '600',
      },
      subtitle: {
        fontSize: 16,
        color: '#5e5c62'
      },
      subtitleCTA: {
          textDecorationLine: 'underline'
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      bottonContainer: {
          position: 'absolute',
          bottom: 50,
          width: '100%'
      }
});

export default styles;