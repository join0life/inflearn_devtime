import logo from "@/assets/logo-vertical-white.svg";
import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="bg-primary-500 flex-col-center w-1/2 gap-9 px-3 py-4">
      <Image
        src={logo}
        alt="devtime의 로고, 타이머 그림"
        width={264}
        height={200}
        className="aria-hidden"
      />
      <p className="font-title-s text-center text-white">
        개발자를 위한 타이머
      </p>
    </section>
  );
}
