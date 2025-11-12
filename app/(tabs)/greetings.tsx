import { View, Text, PanResponder, Animated } from "react-native";
import React, { useRef } from "react";

const greetings = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View className="flex-1 items-center justify-center">
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), { width: 200, height: 300, backgroundColor: "red" }]}
      >
        <Text>Swipe Me</Text>
      </Animated.View>
    </View>
  );
};

export default greetings;
