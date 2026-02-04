import Logo from "./src/assets/logo-vertical-white.svg";

export default function BrandSection() {
  return (
    <section className="bg-primary-500 flex flex-col items-stretch">
      <Logo />
      <p className="font-title-s text-center text-white">
        개발자를 위한 타이머
      </p>
    </section>
  );
}
