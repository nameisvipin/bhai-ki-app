import Link from "next/link";

export default function Card({title,description, step}){
    return(
        <Link href={`/steps/${step}`}>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
            </div>



        </Link>
        
    )
}