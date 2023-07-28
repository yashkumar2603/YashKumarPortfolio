import { lazy, Suspense } from 'react';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from '../styles';

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Languages and Tools I use </p>
      <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
      {technologies.map((technology) =>(
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        </Suspense>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "")