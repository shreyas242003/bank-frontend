import { Link } from "react-router-dom";

const Article = ({ articles }) => {
  return (
    <>
      {articles?.map((article, index) => {
        // Splitting content to use as URL slug
        const contentSlug = article.content
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, ""); // Remove special characters

        return (
          <div
            key={index}
            className="col-span-1 bg-white shadow-md overflow-hidden border-b-4 border-blue-50 drop-shadow-lg"
          >
            <div className="flex flex-col">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${article.image}`}
                className="h-50 w-full bg-cover bg-center"
                alt={article.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-700 mb-4">{article.content}</p>
                <Link
                  to={`/articles/${contentSlug}`}
                  className="text-blue-50 bottom-0"
                  style={{
                    transition: "color 0.3s ease",
                  }}
                  target="_blank"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Article;
