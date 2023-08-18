const Showcase = () => {
	return (
		<div className="relative bg-[#f6f8fc] isolate px-2 pt-3 lg:px-2">
			<div
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true">
				<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0bbf64] to-[#c3f4db] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
					clipPath:
						'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
				}} />
			</div>
			<div className="mx-auto animate-fade-up animate-once animate-delay-300 max-w-2xl pt-24 pb-10 lg:mt-20 sm:pt-48 lg:py-10">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Revolutionize Your HR Management
					</h1>
					<p className="mt-6 leading-8 text-gray-800 sm:text-xl">
						Get efficient HR management. Tailored software for your needs. Streamlined processes, accurate reporting, and local compliance. Focus on growth, let us handle HR.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded bg-primary2 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Get started
						</a>
						<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
							Watch a demo <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Showcase