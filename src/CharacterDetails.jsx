import { useParams } from "react-router-dom";
import { characters } from "./data";

export default function CharacterDetails() {
const { id } = useParams() ; //חילוץ ה-ID מהכתובת URL
const characterId = Number(id); // המרת ה-ID למספר

const character = characters.find((char) => char.id === characterId); //חיפוש הדמות לפי ה-ID

  // טיפול בשגיאה – אם הדמות לא קיימת
  if (!character) {
    return <p>דמות לא נמצאה</p>;
  }

 // צבע לפי צד
  const textColor = character.side === "Dark" ? "red" : "blue";
  return (
    <div>
        <h2 style={{ color: textColor }}>
            {character.name}
        </h2>
        <p>Role: {character.role}</p>
        <p>Side: {character.side}</p>
    </div>
  )
}
