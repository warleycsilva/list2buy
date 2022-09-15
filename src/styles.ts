import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./config/colors";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: Colors.alternative,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "400",
    textAlign: 'center',
  },
  bottomContainer: {
    marginHorizontal: 30,
    marginVertical: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
});
