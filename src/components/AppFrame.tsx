import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";
import VideoOverlays from "./VideoOverlays";

type AppFrameProps = {
  slideData: {
    author: {
      avatar: string;
    };
    stats: {
      likes: number;
      comments: number;
    };
    isLiked: boolean;
    authorName: string;
    slideTitle: string;
    slideDescription: string;
  };
};

const AppFrame = ({ slideData }: AppFrameProps) => {
  return (
    <div id="app-frame" className="relative w-full h-full overflow-hidden z-50">
      <TopBar />
      <div id="webyx-container" className="fixed top-0 left-0 w-full h-full opacity-100 transition-opacity duration-500 ease-linear overflow-hidden">
        <div className="relative w-full h-full">
          <div className="w-full h-full overflow-hidden relative">
            <div className="relative w-full h-full overflow-hidden bg-black text-white">
              <video
                crossOrigin="anonymous"
                playsInline
                webkit-playsinline="true"
                muted
                autoPlay
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></video>
              <VideoOverlays />
              <Sidebar
                author={slideData.author}
                stats={slideData.stats}
                isLiked={slideData.isLiked}
              />
              <BottomBar
                authorName={slideData.authorName}
                slideTitle={slideData.slideTitle}
                slideDescription={slideData.slideDescription}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFrame;
