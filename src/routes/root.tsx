export const Root = () => {
  return (
    <div className="relative h-screen">
      <div className="bg-white rounded-xl text-center align-middle h-20 w-60 text-xl absolute top-1/4 left-1/2 -translate-x-[50%] z-10 text-black">
        What are you looking for?
      </div>
      <div className="flex flex-row justify-center h-full">
        <div className="relative flex items-center justify-center w-1/2 h-full">
          <img
            src="/ray-smiling-software.jpg"
            className="absolute object-contain w-full h-full duration-100 ease-out blur-md hover:blur-none hover:scale-105"
            alt="Ray Softwaring"
          />
          <a href={`/sse`} className="text-white blur-none">
            A Software Engineer
          </a>
        </div>
        <div className="relative flex items-center justify-center w-1/2 h-full">
          <img
            src="/ray-smiling-fiddle.jpg"
            className="absolute object-contain w-full h-full duration-100 ease-out blur-md hover:blur-none hover:scale-105"
            alt="Ray Fiddling"
          />
          <a href={`/music`} className="text-white blur-none">
            A Musician
          </a>
        </div>
      </div>
    </div>
  );
};
