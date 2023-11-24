
import React from 'react';

import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import * as Haptics from 'expo-haptics';

type ButtonProps = {
    onPress: () => void;
    title: string;
    style: ViewStyle;
};

const CustomButton = ({ onPress, title, style}: ButtonProps) => {
    const handlePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
    };

    return (
        <TouchableOpacity onPress={handlePress} style={style}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;