export default function OnlineS({ src, nameF }) {
  return (
    <li>
      <a href="#">
        <img src={src} alt="" />
        <p>{nameF}</p>
      </a>
    </li>
  );
}
