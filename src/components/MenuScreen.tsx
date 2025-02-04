import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { RootStackParamList } from '../../App';
import colors from '../colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Menu'>;
type RouteName = 'MyBooks' | 'NewBook' | 'Login';

const MenuScreen: React.FC<Props> = ({ navigation }) => {
  const onPressItem = (routeName: RouteName) => {
    navigation.replace(routeName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <TouchableOpacity onPress={() => onPressItem('MyBooks')}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>My Books</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPressItem('NewBook')}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>List new book</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPressItem('Login')}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Sign out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  itemContainer: {
    backgroundColor: colors.white,
    padding: 16,
  },
  itemText: {
    color: colors.black,
    fontSize: 20,
    alignSelf: 'center',
    flex: 1,
  },
});
