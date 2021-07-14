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
  },
  details: {
    fontSize: 15,
  },
  site: {
    marginTop: 20,
    marginBottom: 20,
  },
  year: {
    fontSize: 10,
  },
});

export default styles;
