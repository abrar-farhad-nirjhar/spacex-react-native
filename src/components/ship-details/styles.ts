import {StyleSheet} from 'react-native';
import variables from '../../utils/variables';

const styles = StyleSheet.create({
  scroll: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    backgroundColor: variables.backgrounColor,
    borderColor: variables.borderColor,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
  },
});

export default styles;
