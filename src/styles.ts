import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from './config/colors';

const {height, width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: Colors.alternative,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: '300',
  },
  bottomContainer: {
    justifyContent: 'center',
    height: height / 3,
  },
});
