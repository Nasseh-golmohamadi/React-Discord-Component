export default function TextCha({ text }) {
  return (
    <li className="flex opc">
      <i className="fa-solid fa-hashtag"></i>
      <a href="#">{text}</a>
      <i className="fa-solid fa-user-plus"></i>
    </li>
  );
}
