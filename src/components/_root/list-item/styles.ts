import {StyleSheet} from 'react-native';
import variables from 'utils/variables';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: variables.borderColor,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: variables.backgrounColor,
  },
  name: {
    width: 150,
    fontSize: 15,
    fontFamily: 'RobotoMono-Thin',
  },
});
export default styles;
