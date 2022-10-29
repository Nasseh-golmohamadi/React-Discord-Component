export default function OfflineLi({ user, imgSrc }) {
  return (
    <li>
      <a href="#">
        <img src={imgSrc} alt="" />
        <p>{user}</p>
      </a>
    </li>
  );
}
