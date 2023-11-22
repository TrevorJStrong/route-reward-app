
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type MainContainerProps = {
    children: React.ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  );
};

export default MainContainer;
