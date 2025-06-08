import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeOutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel
            vulputate magna. Donec pretium felis rhoncus mi fermentum interdum.
            Integer eleifend fermentum placerat. Etiam et nisl sem. Suspendisse
            luctus ex iaculis tortor auctor viverra. In pellentesque nunc quis
            mauris sagittis, in vestibulum metus pharetra. Aliquam egestas velit
            mauris, ac facilisis mi lobortis nec. Suspendisse in lorem vitae sem
            rhoncus pharetra.
          </p>
          <p>
            Quisque tempor lectus ipsum, at sodales nulla interdum et.
            Vestibulum posuere ante sem, sed scelerisque dolor condimentum sed.
            Pellentesque mattis rutrum ornare. Aenean fringilla, sapien ut
            hendrerit luctus, diam mauris imperdiet sem, a ornare nisi odio ut
            dolor. Nullam non volutpat sapien. Aenean ac lectus quis lacus
            pretium porttitor sed ultrices libero. Maecenas vehicula, dui sed
            iaculis euismod, mi justo viverra magna, non sodales nunc tortor sed
            augue. Nulla sagittis
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel
            vulputate magna. Donec pretium felis rhoncus mi fermentum interdum.
            Integer eleifend fermentum placerat. Etiam et nisl sem. Suspendisse
            luctus ex iaculis tortor auctor viverra. In pellentesque nunc quis
            mauris sagittis,
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
