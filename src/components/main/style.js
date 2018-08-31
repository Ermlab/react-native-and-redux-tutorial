import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    // flex: 1,
    fontFamily: 'font',
  },
  text: {
    fontSize: 25,
    fontFamily: 'font',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  timer: {
    fontSize: 40,
    fontWeight: '500',
    flex: 3,
  },
  picker: {
    height: 50,
    width: 250,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontWeight: '400',
  },
});
