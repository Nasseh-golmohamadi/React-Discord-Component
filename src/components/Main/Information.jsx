export function Information() {
  const informationArray = [
    { text: "قوانین", clasValue: "flex" },
    { text: "لینک", clasValue: "flex opc" },
    { text: "ویدئوها", clasValue: "flex opc" },
  ];

  return (
    <ul>
      {informationArray.map(({ text, clasValue }) => {
        return (
          <li key={text} className={clasValue}>
            <i className="fa-solid fa-hashtag"></i>
            <a href="#">{text}</a>
            <i className="fa-solid fa-user-plus"></i>
          </li>
        );
      })}
    </ul>
  );
}
