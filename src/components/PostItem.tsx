import Sidebar from './Sidebar';

const PostItem = ({ number }: { number: number }) => {
  return (
    <div className="swiper-slide h-screen flex items-center justify-center text-4xl relative">
      <div className="absolute inset-0 bg-gray-800">
        <video
          className="w-full h-full object-cover"
          src={`/video${number}.mp4`}
          autoPlay
          loop
          muted
        />
      </div>
      <Sidebar />
      <div className="z-10">Slide {number}</div>
    </div>
  );
};

export default PostItem;
