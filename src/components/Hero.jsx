// Components 
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
    return (
        <section id="home" className="pt-40 lg:pt-48 bg-white">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 reveal-up">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg shadow-lg bg-gray-100">
                            <img
                                src="/images/header-small-photo.jpg"
                                width={40}
                                height={40}
                                alt="Prakhar Srivastava"
                                className="img-cover rounded-lg"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-gray-900 text-sm tracking-wide font-bold">
                            <span className="relative w-2 h-2 rounded-full bg-green-500">
                                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 text-gray-800">
                        MG Financial Services एक अटूट रिश्ता विश्वास का
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            href="/public/images/people-1.jpg"
                            label="Download brochure"
                            icon="download"
                        />
                        <ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                {/* Image Container for Side by Side Layout */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-7 p-5 m-7">
                    {/* First Image */}
                    <figure className="bg-gradient-to-t from-gray-200 via-white to-gray-200 rounded-[40px] shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img
                            src="/images/high_Q.png"
                            alt="Prakhar Srivastava"
                            className="w-full"
                        />
                    </figure>
                    {/* Second Image */}
                    <figure className="bg-gradient-to-t from-gray-200 via-white to-gray-200 rounded-[40px] shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img
                            src="/images/photo11.jpg"
                            alt="New Image"
                            className="w-full"
                        />
                    </figure>
                </div>
            </div>
        </section>


    );
}

export default Hero;
