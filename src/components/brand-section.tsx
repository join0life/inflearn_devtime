import Logo from "@/assets/logo-vertical-white.svg";

export default function BrandSection() {
  return (
    <section className="bg-primary-500 flex-col-center h-screen w-1/2">
      <div className="h-50 w-66">
        <Logo
          width={264}
          height={200}
          className="h-full w-full object-contain"
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
      <p className="font-title-s text-center text-white">
        개발자를 위한 타이머
      </p>
    </section>
  );
}
