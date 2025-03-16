import Link from "next/link";

export default function Card({title,description, step}){
    return(
        <Link href={`/steps/${step}`}>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </Link>
        
    )
}