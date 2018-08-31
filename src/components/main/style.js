import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/constans';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 60,
    fontFamily: 'font',
    paddingVertical: 30,
  },
  text: {
    fontSize: 25,
    fontFamily: 'font',
  },
  button: {
    backgroundColor: COLORS.orange,
    borderRadius: 20,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  typeButton: {
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    padding: 6,
    marginHorizontal: 6,
    marginVertical: 12,
  },
  typeButtonSelected: {
    borderColor: COLORS.grey,
    borderWidth: 2,
  },
  disabled: {
    backgroundColor: COLORS.grey,
  },
  timer: {
    fontSize: 40,
    fontWeight: '500',
    fontFamily: 'font',
  },
  picker: {
    height: 50,
    width: 250,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  icon: {
    fontWeight: '400',
  },
});
