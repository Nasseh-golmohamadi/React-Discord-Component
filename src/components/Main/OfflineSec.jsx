import OfflineLi from "./OfflineLi";

export default function OfflineSec() {
  const offlineArray = [
    {
      user: "nazaninme",
     
    },
    {
      user: "monire",
    },
    {
      user: "ali tarii",
      imgSrc: "./src/assets/img//photo_2022-05-26_07-45-46.jpg",
    },
    {
      user: "Mahdi",
      imgSrc: "./src/assets/img//photo_2022-05-26_07-45-46.jpg",
    },
    {
      user: "sepehr",
    },
    {
      user: "Roozbeh",
      imgSrc: "./src/assets/img//photo_2022-05-26_07-45-46.jpg",
    },
    {
      user: "rahele",
      imgSrc: "./src/assets/img//photo_2022-05-26_07-45-46.jpg",
    },
    {
      user: "Roozbeht",
    },
  ];
  return (
    <ul>
      {offlineArray.map(
        ({
          user,
          imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2aSUcU-KC_ZGl1KIFES1pwRe4YOMv2gPx_g&usqp=CAU",
        }) => (
          <OfflineLi key={user} user={user} imgSrc={imgSrc} />
        )
      )}
    </ul>
  );
}
