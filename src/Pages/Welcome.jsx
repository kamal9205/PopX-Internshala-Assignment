import { useNavigate } from "react-router-dom";
import {ArrowRight} from "lucide-react";
function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-80 h-[550px] bg-[#f9f5ff] border border-gray-200 shadow-sm rounded-md flex flex-col p-6">
        
        {/* Circles Section */}
        <div className="flex flex-col items-center mt-6 relative">
          <div className="bg-yellow-500 hover:bg-blue-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center mt-2 ml-5">
            1
          </div>
          <div className="bg-yellow-500 hover:bg-blue-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center mt-2 ml-1">
            2
          </div>
          <div className="bg-yellow-500 hover:bg-blue-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center mt-2 ml-3">
            3
          </div>
          <div className="bg-yellow-500 hover:bg-blue-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center mt-2 ml-10">
            4
          </div>
        </div>

        {/* Text + Buttons Section */}
        <div className="mt-auto">
          <h2 className="text-xl font-bold text-gray-900">Welcome to PopX</h2>
          <p className="text-sm text-gray-600 mt-1 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <button
            onClick={() => navigate("/register")}
            className="group w-full bg-purple-600 text-white py-2 rounded mb-3 flex items-center justify-center gap-2 cursor-pointer transition"
          >
            Create Account
          <ArrowRight className="opacity-0 group-hover:opacity-100 transition duration-300" size={18} />
          </button>

          <button
            onClick={() => navigate("/login")}
            className="group w-full bg-purple-200 text-gray-800 py-2 rounded flex items-center justify-center gap-2 cursor-pointer transition"
          >
            Already Registered? Login
          <ArrowRight className="opacity-0 group-hover:opacity-100 transition duration-300" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
