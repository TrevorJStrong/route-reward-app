
import React from 'react';

import { NavigationProp } from '@react-navigation/native';

import { HomeStackNavigatorParamsList } from '../../navigation/HomeNavigator';
import MainContainer from '../../components/Container/Container';

type ProfileScreenProps = {
  navigation: NavigationProp<HomeStackNavigatorParamsList>;
};

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  return (
    <MainContainer>
    </MainContainer>
  );
};

export default ProfileScreen;
