
export default function Home() {
  return (
    <div className="grid grid-cols-[200px,1fr,1fr,200px] grid-rows-4 min-h-screen gap-4 p-4">
      <div className="bg-yellow-400 font-semibold text-sm text-center flex items-center justify-center col-span-1 row-span-4">
        Navbar
      </div>

      <div className="bg-yellow-400 font-semibold text-sm text-center flex items-center justify-center col-span-3">
        Header
      </div>

      <div className="bg-yellow-400 font-semibold text-sm text-center flex items-center justify-center col-span-2 row-span-2">
        Articles
      </div>

      <div className="bg-yellow-400 font-semibold text-sm text-center flex items-center justify-center col-span-1 row-span-3">
        Ads
      </div>

      <div className="bg-yellow-400 font-semibold text-sm text-center flex items-center justify-center col-span-2">
        Footer
      </div>
    </div>
  );
}
