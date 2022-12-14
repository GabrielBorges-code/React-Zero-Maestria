import { useCouterContext } from "../hooks/useCouterContext"

const About = () => {
  const { couter } = useCouterContext();

  return (
    <div>
      <h1>Sobre a página.</h1>
      <p>{ couter }</p>
    </div>
  )
}

export default About