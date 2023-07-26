import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Languages and Tools I use </p>
      <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
      {technologies.map((technology) =>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "")