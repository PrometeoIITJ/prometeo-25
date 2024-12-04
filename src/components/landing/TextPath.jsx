import { Text } from "@react-three/drei";
//import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";

export const TextPath = ({ title, subtitle, opacity, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="none"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={2.5}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
          fillOpacity={opacity}
        >
          {title}
          {/* <meshStandardMaterial
            color={"white"}
            // onBeforeCompile={fadeOnBeforeCompileFlat}
          /> */}
        </Text>
      )}

      <Text
        color="white"
        anchorX={"left"}
        anchorY="top"
        fontSize={0.2}
        maxWidth={2.5}
        font={"./fonts/Inter-Regular.ttf"}
        fillOpacity={opacity}
      >
        {subtitle}
        {/* <meshStandardMaterial
          color={"white"}
        //   onBeforeCompile={fadeOnBeforeCompileFlat}
        /> */}
      </Text>
    </group>
  );
};