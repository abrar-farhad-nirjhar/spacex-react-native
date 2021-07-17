import {StyleSheet} from 'react-native';
import variables from 'utils/variables';

const styles = StyleSheet.create({
  description: {
    backgroundColor: variables.backgrounColor,
    padding: 10,
    borderRadius: 10,
    borderColor: variables.borderColor,
  },
  scroll: {
    padding: 20,
  },
  descriptionText: {
    fontSize: 16,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 25,
  },
  social: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  socialHeader: {
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 25,
  },
});

export default styles;
