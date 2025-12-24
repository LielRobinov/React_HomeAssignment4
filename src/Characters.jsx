import { Link } from "react-router-dom";
import {characters} from "./data";

export default function Characters() {
  return (
    <>
    <h1>רשימת דמויות מלחמת הכוכבים</h1>
      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            <Link to={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
