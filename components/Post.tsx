import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import {
  PinchGestureHandler,
  ScrollView,
  State,

} from "react-native-gesture-handler";
import {
  onGestureEvent,
  pinchActive,
  pinchBegan,
  timing,
  transformOrigin,
  translate,
  vec,
} from "react-native-redash";
import Animated, {
  Value,
  block,
  cond,
  eq,
  set,
  useCode,
} from "react-native-reanimated";


const { width } = Dimensions.get("window");
const SIZE = width;
const styles = StyleSheet.create({
  image: {
    width: SIZE,
    height: SIZE,
    resizeMode: "cover"
  }
});

interface Post {
  user: string;
  picture: {
    uri: string;
  };
  caption: string;
  timestamp: number;
  likes: number;
  avatar: string;
}

interface PostProps {
  post: Post;
  state: Animated.Value<State>;
}

export default ({ post, state }: PostProps) => {
  const origin = vec.createValue(0, 0);
  const pinch = vec.createValue(0, 0);
  const focal = vec.createValue(0, 0);
  const scale = new Value(1);
  const numberOfPointers = new Value(0);

  const gestureHandler = onGestureEvent({ 
    numberOfPointers,
    scale,
    state,
    focalX: focal.x,
    focalY: focal.y,
  })

  const zIndex = cond(eq(state, State.ACTIVE), 3, 0);
  const adjustedFocal = vec.add(
    {
      x: -SIZE / 2,
      y: -SIZE / 2,
    },
    focal
  );

  
  useCode(
    () =>
      block([
        cond(pinchBegan(state), vec.set(origin, adjustedFocal)),
        cond(
          pinchActive(state, numberOfPointers),
          vec.set(pinch, vec.minus(vec.sub(origin, adjustedFocal)))
        ),
        cond(eq(state, State.END), [
          set(pinch.x, timing({ from: pinch.x, to: 0 })),
          set(pinch.y, timing({ from: pinch.y, to: 0 })),
          set(scale, timing({ from: scale, to: 1 })),
        ]),
      ]),
    [adjustedFocal, numberOfPointers, origin, pinch, scale, state]
  );

  return (
    <>
      <PostHeader avatar={post.avatar} username={post.user} />
      <PinchGestureHandler {...gestureHandler}>
        <Animated.View style={{ width: SIZE, height: SIZE, zIndex}}>
        <Animated.Image
              style={[
                styles.image,
               {
                  transform: [
                    ...translate(pinch),
                    ...transformOrigin(origin, { scale }),
                  ],
                },
              ]}
              source={{ uri: post.picture.uri }}
            />
        </Animated.View>
      </PinchGestureHandler>
     
      <PostFooter likes={post.likes} caption={post.caption} />
    </>
  );
};
