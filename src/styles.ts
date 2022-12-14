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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  appButton: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.alternative,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  appButtonText: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.text,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  introductionContainer: {
    heigth: 200,
    width: '100%',
    paddingTop: '50%',
    paddingHorizontal: '10%',
    marginHorizontal: '50%',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  homeTitleContainer: {
    heigth: 200,
    width: '100%',
    paddingTop: '10%',
    paddingHorizontal: '10%',
    marginHorizontal: '50%',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  introductionText: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: '300',
    textAlign: 'center',
  },
  homeTitle: {
    fontSize: 40,
    color: Colors.white,
    fontWeight: '300',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  homeSubtitle: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '300',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  bottomContainer: {
    marginHorizontal: 30,
    marginVertical: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  verticalStrip: {
    backgroundColor: 'red',
    height: 30,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 2,
  },
  horizontalStrip: {
    backgroundColor: 'red',
    height: '100%',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 2,
  },
  giftCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    width: '90%',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  listContainer: {
    width: '100%',
    height: '100%',
    marginHorizontal: 30,
    marginVertical: 5,
  },
  buttonsLayer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: '90%',
  },
  cardText: {
    fontSize: 18,
    color: Colors.primary,
    paddingLeft: 10,
  },
  appModal: {
    margin: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  row:{
    flexDirection: 'row'
  },
  addButton:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 10
  },
  addButtonText:{
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.white,
  }
});
