import dynamic from "next/dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Sidebar = dynamic(() => import("./_components/sidebar"), {
    ssr: false,
  });
  const Bottombar = dynamic(() => import("./_components/bottombar"), {
    ssr: false,
  });
  return (
    <main className=" flex flex-col md:flex-row h-[100vh]">
      <Sidebar />
      <div className=" h-full w-full bg-secondary/45">
        {children}
      </div>
      <Bottombar />
    </main>
  );
}
