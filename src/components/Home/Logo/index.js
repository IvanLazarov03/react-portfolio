import './index.scss'
import HeroImg from '../../../assets/images/heroImg.png'

const Logo = () => {
  return (
    <div className="hex">
      <div className="hex-background">
        <img src={HeroImg} />
      </div>
    </div>
  )
}

export default Logo
