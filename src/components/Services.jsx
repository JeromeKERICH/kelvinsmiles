// src/components/Services.jsx
import { Camera, Video, PenTool, Sparkles, Film, Edit2Icon } from "lucide-react"; // or use react-icons if you want
import { IconsManifest } from "react-icons";
import { PiBrandy, PiBrandyLight } from "react-icons/pi";

function Services() {
  return (
    <section className="bg-gray-100 max-w-7xl mx-auto px-[4%] md:px-[10%] py-16">
      <div className="text-center mb-12">
        <h2 className="text-indigo-600 text-2xl sm:text-4xl md:text-4xl font-bold mb-7 text-center">Capture your Story with Purpose and Emotion.</h2>
        
      </div>

      <div className="grid md:grid-cols-3 gap-12 text-center">
        
        {/* Photography */}
        <div className="flex flex-col items-center space-y-4">
          <Camera size={48} className="text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-800">Timeless Photography</h3>
          <p className="text-gray-600">
            From fleeting smiles to bold adventures, we capture real, raw, human moments that live forever. 
          </p>
        </div>

        {/* Videography */}
        <div className="flex flex-col items-center space-y-4">
          <Video size={48} className="text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-800">Cinematic Videography</h3>
          <p className="text-gray-600">
            Your story, in motion. Every heartbeat, every tear, every spark, woven into a film you’ll replay for life.
          </p>
        </div>

        {/* Creative Direction */}
        <div className="flex flex-col items-center space-y-4">
          <Sparkles size={48} className="text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-800">Creative Storytelling</h3>
          <p className="text-gray-600">
            Vision. Emotion. Impact. We craft visuals that aren't just seen, they're felt deep in your soul.
          </p>
        </div>

        {/* Personal Branding Shoots */}
        <div className="flex flex-col items-center space-y-4">
            <PiBrandyLight size={48} className="text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">Personal Branding Shoots</h3>
            <p className="text-gray-600">
                Elevate your brand with visuals that reflect your unique identity, passion, and professionalism.
            </p>
        </div>

        {/* Creative Direction & Storyboarding */}
        <div className="flex flex-col items-center space-y-4">
            <PenTool size={48} className="text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">Creative Direction & Storyboarding</h3>
            <p className="text-gray-600">
                From concept to execution, We help bring your vision to life with detailed planning and artistic direction.
            </p>
        </div>

        

        <div className="flex flex-col items-center space-y-4">
            <Edit2Icon size={48} className="text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">Photo Editing & Video Post-Production</h3>
            <p className="text-gray-600">
                Transforming raw captures into polished masterpieces, ensuring every detail shines with perfection.
            </p>
        </div>

      </div>
    </section>
  );
}

export default Services;
