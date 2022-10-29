import OnlineS from "./OnlineS";

const onlineArray = [
  { src: "./src/assets/img/moein.jpg", nameF: "Moein" },
  { src: "./src/assets/img/photo_2022-05-26_07-45-46.jpg", nameF: "Nasseh" },
  { nameF: "Roozbeh" },
];

export default function OnlineSec() {
  return (
    <ul>
      {onlineArray.map(
        ({
          src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2aSUcU-KC_ZGl1KIFES1pwRe4YOMv2gPx_g&usqp=CAU",
          nameF,
        }) => {
          return <OnlineS key={nameF} src={src} nameF={nameF} />;
        }
      )}
    </ul>
  );
}
