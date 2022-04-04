import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { getResults, results, searchTerm, isLoading } = useResultContext();
  const { section } = useParams();

  useEffect(() => {
    if (searchTerm) {
      if (section == "videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`/${section}/q=${searchTerm}&num=40`);
      }
    }
  }, [section, searchTerm]);

  if (isLoading) return <Loading />;

  switch (section) {
    case "search":
      return (
        <div className="flex flex-wrap justify-between space-y-5 sm:px-56">
          {results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm dark:text-slate-200">{link.length > 30 ? `${link.substring(0, 30)}...` : link}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );

    case "images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} className="sm:p-3 p-5" key={index} target="_blank" rel="noreferrer">
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2 dark:text-slate-200">{title}</p>
            </a>
          ))}
        </div>
      );

    case "news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.map(({ links, source, title }, i) => (
            <div key={i} className="md:w-2/5 w-full">
              <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                <p className="text-lg  dark:text-blue-300 text-blue-700">{title}</p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer" className="dark:text-slate-200">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );

    case "videos":
      return (
        <div className="flex flex-wrap">
          {results.map((video, index) => (
            <div className="p-2" key={index}>
              {video?.additional_links?.[0]?.href && (
                <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
              )}
            </div>
          ))}
        </div>
      );

    default:
      return "Error!";
  }
};

export default Results;
