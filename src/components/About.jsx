const aboutItems = [
    {
        label: ' Trusted Clients',
        number: 1300
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
                    <p className="text-gray-700 mb-4 md:mb-8 md:text-xl md:max-w-[80ch] leading-relaxed">
                        <strong>Welcome!</strong> At <strong>MG Financial Services</strong>, we don’t just offer financial solutions — we build an unbreakable bond of trust with our clients. Rooted in transparency, integrity, and excellence, we are dedicated to empowering individuals and businesses to achieve their financial aspirations with confidence.

                        Our services include  financial planning, investment management, loan solutions, insurance, etc.], thoughtfully designed to meet the unique needs of each client. By understanding your goals, we provide personalized strategies to help you secure a prosperous future.


                        At <strong>MG Financial Services</strong>, we believe that your financial success is the foundation of a better tomorrow, and we are committed to making that vision a reality.
                    </p>

                    <p className="text-gray-700 mb-4 md:mb-8 md:text-xl md:max-w-[80ch] leading-relaxed">
                        <strong>Our Values </strong>
                    </p>



                    <p className="text-gray-700 mb-4 md:mb-8 md:text-xl md:max-w-[80ch] leading-relaxed">
                        Unwavering Trust: Transparency and honesty in every interaction.
                        Your Partner at Every Step: Supporting you through every stage of your financial journey.
                        Expertise You Can Rely On: A team of seasoned professionals deeply committed to your success.
                        At MG Financial Services, we believe that trust is the foundation of every meaningful relationship. That’s why we go beyond transactions to build lasting bonds that ensure not only your present needs but also your future aspirations are met with care and precision.

                        Let us be your trusted partner in shaping a brighter financial future. MG Financial Services — An Unbreakable Bond of Trust.
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
