import {StyleSheet} from 'react-native';
import variables from 'utils/variables';

const styles = StyleSheet.create({
  container: {
    borderColor: variables.borderColor,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: variables.backgrounColor,
  },
  imageContainer: {
    borderColor: variables.borderColor,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    height: 300,
  },
  name: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'RobotoMono-Thin',
  },
});
export default styles;
