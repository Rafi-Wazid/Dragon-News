import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = (props = {}) => {

 const {news} = props || {} ;

  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-2xl p-4 border border-gray-200">
      {/* Author Section */}
      <div className="flex items-center gap-3 mb-4 bg-base-300 rounded-full">
        <img
          src={news.author.img}
          alt="author"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-base">{news.author.name}</h2>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg mb-3 leading-tight">{news.title}</h3>

      {/* Thumbnail */}
      <figure className="w-full mb-3">
        <img
          src={news.thumbnail_url}
          alt="thumbnail"
          className="w-full h-56 object-cover rounded-xl"
        />
      </figure>

      {/* Details */}
      <p className="text-sm text-gray-700 mb-4 line-clamp-3">{news.details}</p>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-2">
        {/* Rating */}
        <div className="flex items-center gap-1 text-warning">
          <FaStar />
          <span className="font-semibold text-gray-800 ml-1">
            {news.rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
