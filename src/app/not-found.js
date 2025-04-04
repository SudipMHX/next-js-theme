import FuzzyText from "@/components/ui/FuzzyText";

const PageNotFound = () => {
  const hoverIntensity = 0.5;
  const enableHover = true; 
  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center gap-5'>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}>
        404
      </FuzzyText>
      <h2 className='text-2xl md:text-4xl'>Page Not Found</h2>
    </main>
  );
};

export default PageNotFound;
