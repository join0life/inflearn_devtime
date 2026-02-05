import BrandSection from "@/components/sign-up/brand-section";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <BrandSection />
      <div className="flex-1 flex-row-center">{children}</div>
    </div>
  );
}
