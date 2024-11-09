// node modules
import PropTypes from "prop-types";

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
    return (
        <div className={"relative p-4 rounded-2xl bg-white hover:bg-gray-100/70 active:bg-gray-200 ring-1 ring-inset ring-gray-200/20 transition-colors reveal-up group " + classes}>
            <figure className="img-box aspect-square rounded-lg mb-4 overflow-hidden relative group">
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className="img-cover transition-transform transform group-hover:scale-125 group-hover:translate-x-12 group-hover:-translate-y-12 absolute inset-0 w-full h-full object-cover"
                />
            </figure>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3 text-gray-900">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) => (
                            <span
                                key={key}
                                className="h-8 text-sm text-gray-600 bg-gray-100/70 grid items-center px-3 rounded-lg"
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-500 text-white shrink-0">
                    <span className="material-symbols-rounded" aria-hidden="true">
                        arrow_outward
                    </span>
                </div>
            </div>
            <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
                aria-label={`Link to ${title}`}
            ></a>
        </div>
    );
};

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
};

export default ProjectCard;
