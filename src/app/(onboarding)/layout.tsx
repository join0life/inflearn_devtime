import BrandSection from "@/components/brand-section";
import IconButton from "@/components/common/card/icon-button";
import Logo from "@/assets/logo-vertical-white.svg";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <BrandSection />
      <IconButton icon={Logo} label="수정" />
      <section className="w-1/2">{children}</section>
    </div>
  );
}
