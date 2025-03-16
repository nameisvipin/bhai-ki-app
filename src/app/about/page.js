import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
            <section className="pt-20 pb-10 text-center">
                <div className="max-w-4xl mx-auto"> 
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800  dark:text-gray-100 mb-4">About Bhai</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
                        Bhai Next.js seekh aha hai aur modern websites banane ka shauk rakhte hai. yeh site ek chota sa step hai bade sapno ki tarag!
                    </p>
                </div>

            </section>
        </div>
        
    )
}

