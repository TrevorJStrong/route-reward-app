
import React from 'react';

import { Text, View } from 'react-native';
import MainContainer from '../../../components/Container/Container';

type LoginScreenProps = {
  // Define your prop types here
};

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  // Component logic goes here

  return (
    // JSX code for the HomeScreen component
    <MainContainer>
      {/* Content of the HomeScreen */}
      <Text>LoginScreen</Text>
    </MainContainer>
  );
};

export default LoginScreen;
