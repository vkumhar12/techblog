/* eslint-disable react/jsx-no-target-blank */
import dayjs from "dayjs";
import "ldrs/ring";
import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { useGlobalContext } from "./Context";
import HatchComponent from "./Loader";

const ExampleComponent = () => {
    const { hits, isLoading, removePost } = useGlobalContext();

    return (
        isLoading ? (
            <div className="h-screen flex justify-center items-center">
                <HatchComponent />
            </div>
        ) : (
            <div className="flex justify-center items-center">
                <div className="w-2/3">
                    <div className="grid grid-cols-2 gap-5">
                        {hits?.map((data, i) => (
                            <div
                                key={i}
                                className=" flex flex-col gap-4 custom-box-with-shadow  "
                            >
                                <h1 className="text-xl font-semibold h-24">{data?.title}</h1>
                                <div className="flex flex-col">
                                    <p className="italic font-medium text-gray-500">
                                        Author :{" "}
                                        {data?.author.charAt(0).toUpperCase() + data?.author.slice(1)}
                                    </p>
                                    <p>{dayjs(data?.updated_at).format("DD MMM YYYY")}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href={data?.url} target="_blank" className="button2">
                                        Read More{" "}
                                    </a>
                                    <button
                                        className="p-0.5 border-b-2 border-r-2 rounded border-red-700 hover:bg-red-700 hover:text-white  text-red-700  "
                                        onClick={() => removePost(data?.objectID)}
                                    >
                                        <MdDeleteSweep className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    )
        ;
};

export default ExampleComponent;
