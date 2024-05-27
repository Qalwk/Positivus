import Amazon from "../../../public/amazon.png"
import Dribble from "../../../public/dribble.png"
import Hubspot from "../../../public/hubspot.png"
import Notion from "../../../public/notion.png"
import Netflix from "../../../public/netflix.png"
import Zoom from "../../../public/zoom.png"

interface NavLink {
    label: string;
    src: string; // Добавляем src для изображения
  }

const Logotypes: NavLink[] = [
    {label: "Amazon", src: Amazon},
    {label: "Dribble", src: Dribble},
    {label: "Hubspot", src: Hubspot},
    {label: "Notion", src: Notion},
    {label: "Netflix", src: Netflix},
    {label: "Zoom", src: Zoom},
]

const Logos = () => {
  return (
    <div className="flex justify-center">
        <ul className='flex flex-row justify-between gap-[95px]'>
            {Logotypes.map((link, index) => (
              <li key={index} className="">
                <a href="#">
                    <img src={link.src} alt={link.label} />
                </a>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default Logos
