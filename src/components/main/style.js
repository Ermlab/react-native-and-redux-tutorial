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
    fontWeight: '500',
    // flex: 1,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 25,
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
  },
});
