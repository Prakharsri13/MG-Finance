// node modules
import PropTypes from "prop-types";
const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
    return (
        <div className={'flex items-center gap-3 ring-2 ring-inset ring-gray-200/10 rounded-2xl p-3 hover:bg-gray-100 transition-colors group ' + classes}>
            <figure className="bg-gray-200/50 rounded-lg overflow-hidden w-16 h-16 p-3 group-hover:bg-gray-300 transition-colors reveal-up">
                <img
                    src={imgSrc}
                    width={100}  // Adjusted size for the image
                    height={100} // Adjusted size for the image
                    alt={label}
                    className="w-full h-full object-cover" // Ensures the image fills the container
                />
            </figure>
            <div>
                <h3 className="text-gray-900">{label}</h3>
                <p className="text-gray-600 text-sm">
                    {desc}
                </p>
            </div>
        </div>
    );
};


SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
};

export default SkillCard;
