import { SpinnerDotted } from "spinners-react";
import { useState, useEffect } from "react";
import { getAllNews } from "../service/api";
import Footer from "./Footer";
import NaviBar from "./NaviBar";

const AllNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewsList = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const result = await getAllNews();
      setNews(result.data);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    getNewsList();
  }, []);

  return (
    <div className="bg-[#291D24]">
      <NaviBar title="News" />
      <div className="container mx-auto">
        <h5 className="text-4xl halant text-7xl text-left text-white my-20">
          LATEST NEWS
        </h5>
        {isLoading && (
          <div className="mx-auto">
            <SpinnerDotted
              size="20%"
              color="#DC3D4B"
              className="mx-auto mb-10"
            />
          </div>
        )}
        <div className="flex flex-wrap gap-8 bg-[#281D1D] halant text-white mb-40">
          {news &&
            !isLoading &&
            news.map((news, index) => {
              const { title, image, date, description, link } = news;

              return (
                <div className="flex shadow-lg w-[100%] h-[250px]" key={index}>
                  <div>
                    <img
                      className="min-w-[500px] max-w-[500px] max-h-[250px]"
                      src={image}
                      alt={title}
                    />
                  </div>
                  <div className="p-3">
                    <div className="mb-2">
                      <h3 className="font-bold text-xl uppercase underline tracking-wide">
                        <a href={link} target="_blank" rel="noreferrer">
                          {title}
                        </a>
                      </h3>
                    </div>
                    <div className="mb-2">
                      <p>
                        <span className="nunito text-xs px-2">{date}</span>
                      </p>
                    </div>
                    <div className="mb-2">
                      <p>
                        <span className="nunito text-sm px-2">
                          {description}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer title="News" />
    </div>
  );
};

export default AllNews;
