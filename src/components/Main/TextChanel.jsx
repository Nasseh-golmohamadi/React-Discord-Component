import TextCha from "./TextCha";

const textChanelArray = [
  "بحث-آزاد",
  "نکات و ترفند ها",
  "تمرین",
  "پروژه",
  "پرسش و پاسخ",
];

export default function TextChanel() {
  return (
    <ul>
      {textChanelArray.map((text) => {
        return <TextCha key={text} text={text} />;
      })}
    </ul>
  );
}
