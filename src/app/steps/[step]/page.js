export default function StepDetails({params}){
    const {step} = params;
    const StepDetails = {
        1:{
            title: "Step 1",
            description: "Pehle Node.js install karo, phir `npx create-next-app` se project shuru karo. App Router seekho aur `page.js` bano."
        }
    }
    const currentStep = StepDetails[step]||{title: "Step not found", description: "Bhai ne yeh step nahi banaya hai. Kuch aur try karo!"};
    return(
        <div className="min-h-screen bg-gray-50">
            <section className="pt-24 pb-12 px-4 max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">{currentStep.title}</h1>
                <p className="text-lg text-gray-600 leading-relaxed">{currentStep.description}</p>
            </section>
        </div>
    )
}