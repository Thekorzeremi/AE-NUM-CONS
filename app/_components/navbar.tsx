import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function NavbarComponent() {
  return (
    <div className="w-screen h-24 bg-[#bdaaa1] flex items-center justify-center fixed">
      <div className="flex w-3/4 justify-between items-center">
        <div className="flex gap-x-4">
          <Image
            src={"/logo/logo-main.png"}
            alt="Logo"
            width={64}
            height={64}
          />
          <div className="flex justify-center items-center gap-x-4">
            <div className="primary font-semibold hover:cursor-pointer">
              Qui suis-je ?
            </div>
            <div className="primary font-semibold hover:cursor-pointer">
              Ma numérologie
            </div>
            <div className="primary font-semibold hover:cursor-pointer">
              Blog
            </div>
          </div>
        </div>
        <div className="flex primary gap-x-3">
          <FaInstagram className="hover:cursor-pointer" size={20} />
          <FaFacebook className="hover:cursor-pointer" size={20} />
          <FaYoutube className="hover:cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
}
