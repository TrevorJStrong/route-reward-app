
import React from 'react';

import { Text, View } from 'react-native';
import MainContainer from '../../../components/Container/Container';

type RegisterScreenProps = {
  // Define your prop types here
};

const RegisterScreen: React.FC<RegisterScreenProps> = (props) => {
  // Component logic goes here

  return (
    // JSX code for the HomeScreen component
    <MainContainer>
      {/* Content of the HomeScreen */}
      <Text>RegisterScreen</Text>
    </MainContainer>
  );
};

export default RegisterScreen;
