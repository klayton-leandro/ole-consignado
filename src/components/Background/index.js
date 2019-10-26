import LinearGradient from "react-native-linear-gradient";

import styled from "styled-components/native";

export default styled(LinearGradient).attrs({
  colors: ["#470000", "#FF4A4A", "#470000"]
})`
  flex: 1;
  opacity: 0.8;
`;
