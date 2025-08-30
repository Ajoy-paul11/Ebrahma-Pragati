import { useState } from "react";
import { Button } from "./button";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import landVideo from '../../assets/6356445_Rural_Life_Paktia_3840x2160.mp4'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    const video = document.getElementById("farm-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const video = document.getElementById("farm-video") as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section>
        {/* Video Container */}
        <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl group">
          <video
            id="farm-video"
            className="w-full aspect-video md:aspect-[2/3] lg:aspect-[9/12] object-cover"
            muted={isMuted}
            loop
            preload="metadata"
            // poster="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&h=675&fit=crop"
            poster="https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/poster-image.png?updatedAt=1755954159035"
          >
            <source
              // src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              src={landVideo}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay Controls */}
          <div className="absolute inset-0 bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <Button
                onClick={handlePlayPause}
                size="lg"
                className="bg-[#FA8417] hover:bg-white/30 text-white border-white/30 backdrop-blur-sm rounded-full"
              >
                {isPlaying ? (
                  <Pause className="h-20 w-20" />
                ) : (
                  <Play className="h-20 w-20 ml-1" />
                )}
              </Button>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleMuteToggle}
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20"
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </Button>
            </div>
            
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 bg-[#FA8417] rounded-full"
              onClick={() => {
                const video = document.getElementById("farm-video") as HTMLVideoElement;
                if (video && video.requestFullscreen) {
                  video.requestFullscreen();
                }
              }}
            >
              <Maximize className="h-5 w-5" />
            </Button>
          </div>
        </div>
    </section>
  );
};

export default VideoSection;