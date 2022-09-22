import { SpinnerDotted } from 'spinners-react';
import { useState, useEffect } from 'react';
import { getAllNews } from '../service/api';
import { Link } from 'react-router-dom';

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
    <div className='bg-[#261F1F]'>
      <div className='container mx-auto'>
        <h5 className=' halant text-6xl text-center text-white my-20 underline'>
          LATEST NEWS
        </h5>
        {isLoading && (
          <div className='mx-auto'>
            <SpinnerDotted size='10%' color='#DC3D4B' className='mx-auto' />
          </div>
        )}
        <div className='flex flex-wrap gap-8 bg-[#281D1D] halant text-white'>
          {news &&
            !isLoading &&
            news.slice(0, 3).map((news, index) => {
              const { title, image, date, description, link } = news;

              return (
                <div
                  className={`flex flex-col lg:flex-row shadow-lg w-[100%] py-5
				      ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  key={index}
                >
                  <div>
                    <img
                      className='min-w-[500px] max-w-[500px] max-h-[250px]'
                      src={image}
                      alt={title}
                    />
                  </div>
                  <div
                    className={`p-3 ${index % 2 !== 0 ? 'lg:text-right' : ''}`}
                  >
                    <div className='mb-2'>
                      <h3 className='font-bold text-xl uppercase underline tracking-wide'>
                        <a href={link} target='_blank' rel='noreferrer'>
                          {title}
                        </a>
                      </h3>
                    </div>
                    <div className='mb-2'>
                      <p>
                        <span className='nunito text-xs px-2'>{date}</span>
                      </p>
                    </div>
                    <div className='mb-2'>
                      <p>
                        <span className='nunito text-sm px-2'>
                          {description}
                        </span>
                      </p>
                    </div>
                    <button className='bg-[#DC3D4B] hover:bg-gray-800 hover:border-white hover:border text-white py-1 px-4 rounded mt-4'>
                      <Link to='/news'>See More</Link>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AllNews;
