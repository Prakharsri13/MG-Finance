const aboutItems = [
    {
        label: 'Projects Done',
        number: 50
    },
    {
        label: 'Year of Experiences',
        number: 10
    }
];

const About = () => {
    return (
        <section id="about" className="section bg-white">
            <div className="container">
                <div className="bg-gray-100 p-11 rounded-2xl md:p-15 shadow-lg m-4 reveal-up" style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}>
                    <p className="text-gray-700 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! MG Financial Services is a trusted financial advisory firm offering a wide range of services, including wealth management, investment strategies, tax planning, and retirement solutions. With years of expertise, we provide personalized financial guidance to individuals and businesses, helping them achieve their financial goals with confidence and security. At MG Financial Services, we are committed to securing your financial future with integrity and tailored solutions.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold text-gray-800 md:text-4xl">{number}</span>
                                        <span className="text-blue-500 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-gray-600">{label}</p>
                                </div>
                            ))
                        }
                        <img
                            src="/images/logo.jpg"
                            alt="Logo"
                            width={50}
                            height={50}
                            className="ml-auto md:w-[50px] md:h-[50px] bg-gray-500 rounded-md p-1 shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
