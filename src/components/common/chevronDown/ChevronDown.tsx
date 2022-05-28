import { FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

import './chevronDown.scss';

type ChevronDownProps = {
  color: string;
  size: number;
  blinking?: boolean;
  navigateTo: string;
}
const ChevronDown = ({ navigateTo, color, size, blinking }: ChevronDownProps) => {
  return (
    <div className={blinking ? "chevron-container blinking" : "chevron-container"} onClick={() => console.log('clicked')}>
      <Link to={navigateTo} spy={true} smooth={true} duration={800}>
        <FaChevronDown size={size} color={color} />
      </Link>
    </div>
  )
}

export default ChevronDown