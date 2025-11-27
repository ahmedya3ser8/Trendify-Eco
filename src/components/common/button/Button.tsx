import { FaArrowRight } from 'react-icons/fa6';

const Button = ({ styles }: { styles: string }) => {
  return (
    <button className={`flex items-center gap-1 h-11 px-6 bg-transparent text-secondary border border-main rounded-2xl mx-auto cursor-pointer transition duration-300 hover:bg-main hover:text-white mt-5 ${styles}`}> 
      See All 
      <FaArrowRight />
    </button>
  )
}

export default Button;
