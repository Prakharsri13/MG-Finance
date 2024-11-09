import PropTypes from "prop-types";

const rating = new Array(5).fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL" 1' }
});

const ReviewCard = ({ content }) => {
    return (
        <div className="bg-gray-50 p-6 rounded-xl min-w-[320px] flex flex-col lg:min-w-[220px] space-y-4 shadow-md reveal-up transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="flex items-center gap-1 mb-3">
                {rating.map(({ icon, style }, key) => (
                    <span
                        key={key}
                        className="material-symbols-rounded text-yellow-500 text-[18px]"
                        style={style}
                    >
                        {icon}
                    </span>
                ))}
            </div>

            <p className="text-gray-700 mb-8">
                {content}
            </p>
            <div className="flex items-center gap-2 mt-auto">
                <div className="">
                    <p className="text-xs text-gray-500 tracking-wider">
                        {/* Additional details, e.g., reviewer name, can go here */}
                    </p>
                </div>
            </div>
        </div>
    );
};

ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
};

export default ReviewCard;
