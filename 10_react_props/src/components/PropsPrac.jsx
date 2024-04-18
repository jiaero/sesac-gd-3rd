export default function PropsPrac(props) {
  const textStyle = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <span>
      내가 좋아하는 음식은 <span style={textStyle}>{props.food}</span>입니다.
    </span>
  );
}

PropsPrac.defaultProps = {
  food: "수프카레",
};
