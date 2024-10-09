import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <div>
    <div className="p-4 my-2 rounded border-b leading-8">
      <div className="font-bold">Natural Language Processing</div>
      <div>
      An enum is a special "class" that represents a group of constants (unchangeable variables, like final variables). To create an enum , use the enum keyword (instead of class or interface), and separate the constants with a comma.
      </div>
      <div className="flex gap-4 justify-end">
     <Link className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold traking-widest" href="/edit">Edit</Link>
     <Link className="bg-red-500 px-4 py-2 rounded-md uppercase text-sm font-bold traking-widest" href="/delete">Delete</Link>
    </div>
   
    </div>
   </div>
  );
}
