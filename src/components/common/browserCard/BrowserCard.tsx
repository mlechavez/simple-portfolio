import './browserCard.scss'

type BrowserCardProps = {
  img: string;
  link: string;
}
const BrowserCard = ({ img, link }: BrowserCardProps) => {
  return (
    <div className="browser-card">
      <div className="titlebar">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={img} className="browser-content" />
      </a>
    </div>
  )
}

export default BrowserCard