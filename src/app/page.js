import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
   <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="pt-24 pb-12 text-center bg-gradient-to-br from-blue-600 to-purple-600 text-white dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Bhai ki Guidance
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Next.js seekhna hai? Bhai ke sath modern ui banayein!
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <Card title="Step 1" description="Setup aur basics seekho, hath ganda karo!" step="1"/>
          <Card title="Step 2" description="Components banao, code reuse kro." step="2"/>
          <Card title="Step 3" description="Modern UI ke sath website tyar!" step="3"/>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Bhai se baat kro</h2>
          <p className="text-lg text-gray-600  dark:text-gray-300 mb-4">Kuch puchna hai? Seedha bhai se baat karo!</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Contact bhai</button>
        </div>
      </section>
   </div>
  );
}
