import Content from "./Content";

 
export default function Navbar() {
  return (
    <>
      <div className="w-full h-[90px] bg-slate-200 text-slate-100 mx-auto flex items-center justify-between text-xl font-serif cursor-pointer px-7">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center pl-20">
           <h1 className="text-4xl font-bold mt-2 font-[cursive] text-black">Nashik City...🏙</h1>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex gap-16 mt-[10px] mr-[50px]">
            <li className="hover:text-rose-800">🏠</li>
            <li className="hover:text-rose-800">📞</li>
            <li className="hover:text-rose-800">🚂</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
