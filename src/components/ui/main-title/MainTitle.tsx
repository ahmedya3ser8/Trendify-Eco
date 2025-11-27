
const MainTitle = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="main_title text-center flex flex-col gap-2 mb-8">
      <h2 className="text-3xl font-caveat text-main"> {title} </h2>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary font-medium"> {description} </h3>
    </div>
  )
}

export default MainTitle;
