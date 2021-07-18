import {StyleSheet} from 'react-native';
import variables from 'utils/variables';

const styles = StyleSheet.create({
  container: {
    borderColor: variables.borderColor,
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: variables.backgrounColor,
    padding: 20,
    borderRadius: 25,
  },
  mission: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'RobotoMono-Thin',
  },
  details: {
    fontSize: 15,
    fontFamily: 'RobotoMono-Thin',
  },
  site: {
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'RobotoMono-Thin',
  },
  year: {
    fontSize: 10,
    fontFamily: 'RobotoMono-Thin',
  },
});

export default styles;
