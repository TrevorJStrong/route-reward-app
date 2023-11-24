
import React from 'react';

import { NavigationProp } from '@react-navigation/native';

import CustomButton from '../../components/Container/Button';
import { HomeStackNavigatorParamsList } from '../../navigation/HomeNavigator';
import MainContainer from '../../components/Container/Container';

type HomeScreenProps = {
  navigation: NavigationProp<HomeStackNavigatorParamsList>;
};

const HomeScreen = ({ navigation}: HomeScreenProps) => {
  return (
    <MainContainer>
      <CustomButton 
        onPress={() => navigation.navigate('Profile')} 
        title="Go to Profile" 
        style={{backgroundColor: 'red'}}
      />
    </MainContainer>
  );
};

export default HomeScreen;
