import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  label: string;
  position?: "left" | "right";
  bgColor?: string;
  bottomOffset?: number; //nueva propiedad
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = "right",
  bgColor = "blue",
  bottomOffset = 20, // valor por defecto
}: Props) {

  return (
    <Pressable
      style={({ pressed }) => [
        styles.floattingButton,
        position === "right" ? styles.positionRight : styles.positionLeft,
        { backgroundColor: bgColor },
        { bottom: bottomOffset }, // posiciona dinámicamente
        pressed && { opacity: 0.7 }
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floattingButton: {
    position: "absolute",
    bottom: 20,
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 3,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
