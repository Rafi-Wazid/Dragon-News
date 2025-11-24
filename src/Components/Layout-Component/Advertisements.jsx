
import BgImage from '../../assets/bg.png'


const Advertisements = () => {
    return (
        // Outer Container: Set dimensions and relative positioning
    <div className="relative w-full h-96 mx-auto rounded-none overflow-hidden shadow-xl">
      
      {/* 2. Image: Takes up 100% of the container space */}
      <img
        src={BgImage} 
        alt="Create an Amazing Newspaper"
        className="w-full h-full object-cover"
      />
      
      {/* 3. Text Overlay Container: Absolute position to cover the entire parent */}
      <div className="absolute inset-0  bg-opacity-50 text-white flex flex-col items-center justify-center p-6">
        
        {/* Text Content */}
        <h3 className="text-2xl font-bold text-center mb-2">
          Create an Amazing Newspaper
        </h3>
        <p className="text-sm text-center mb-6">
          Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </p>

        {/* Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-none">
          Learn More
        </button>
      </div>

    </div>
    );
};

export default Advertisements;