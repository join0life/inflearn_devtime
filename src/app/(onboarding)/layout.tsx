import BrandSection from "@/components/brand-section";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <BrandSection />
      <section>{children}</section>
    </div>
  );
}
