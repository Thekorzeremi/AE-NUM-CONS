import Image from "next/image";

export default function HeroComponent() {
  return (
    <div className="w-screen h-screen bg-[#47243c] flex flex-col items-center">
      <Image
        src={"/logo/catherine.png"}
        alt="catherine-profile-pic"
        height={24}
        width={24}
      />
      <p className="text-2xl font-bold">Numérologie et conscience</p>
      <div className="flex flex-col items-center justify-start gap-y-4">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
