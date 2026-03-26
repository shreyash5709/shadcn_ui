import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>Shreyash's Portfolio </div>
      <button className="bg-blue-500 hover:bg-blue-700 
      text-white font-bold py-2 px-4 rounded my-3">Contact Me</button>
    </main>
  );
}
