export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-6 min-h-screen gap-4 p-4">
      <div className="bg-purple-600 col-span-4 flex items-center justify-center text-center font-semibold row-span-1">
        Header
      </div>

      <div className="bg-blue-500 flex items-center justify-center text-center font-semibold col-span-1 row-span-4">
        Sidebar
      </div>

      <div className="bg-purple-800 flex items-center justify-center text-center font-semibold col-span-3 row-span-2">
        Content One
      </div>

      <div className="grid grid-cols-2 col-span-3 row-span-2 gap-4">
        <div className="bg-blue-400 font-semibold flex items-center justify-center text-center">
          Content Two
        </div>
        <div className="bg-purple-700 font-semibold flex items-center justify-center text-center">
          Content Three
        </div>
      </div>
      <div className="bg-purple-600 col-span-4 font-semibold flex items-center justify-center text-center row-span-1">
        Footer
      </div>
    </div>
  );
}
