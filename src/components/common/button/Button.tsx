import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Button = ({ styles }: { styles?: string }) => {
  return (
    <Link to='/products' className={`w-fit flex items-center gap-1 h-11 px-6 bg-transparent text-secondary border border-main rounded-2xl mx-auto cursor-pointer transition duration-300 hover:bg-main hover:text-white mt-5 ${styles}`}> 
      See All 
      <FaArrowRight />
    </Link>
  )
}

export default Button;
