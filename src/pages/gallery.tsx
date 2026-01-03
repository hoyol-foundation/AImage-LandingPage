import { useTranslation } from "react-i18next";

import mainArtGallery from "../assets/mainArtGallery.jfif";

import galleryImagesList from "../galleryImagesList.json";
import { useState } from "react";
import { useEffect } from "react";

export default function Gallery() {
    const { t } = useTranslation();
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        setImages(galleryImagesList.gallery);
    }, []);

    return (
        <>
        <main
            className="w-full pt-[70px] pb-[20px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${mainArtGallery})` }}
        >
            <div className="w-full md:w-[70%] px-5 flex flex-col items-start justify-center">
                <h1 className="text-[clamp(3.5rem,5vw,3rem)] drop-shadow-lg drop-shadow-black/70 leading-16 font-bold text-white">
                    {t("app.pages.gallery.mainPage.title")}
                </h1>
                <p className="text-white text-2xl font-[Roboto] line-clamp-2 mt-5">
                    {t("app.pages.gallery.mainPage.description")}
                </p>
            </div>
        </main>

        <div className="w-full md:w-[70%] px-5 py-10 flex flex-col items-start justify-center mx-auto">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
                {images.map((image, index) => (
                <div key={index} className="break-inside-avoid overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <img
                    src={image}
                    alt={`AI Generated ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
                ))}
            </div>
        </div>
        <p className="w-full md:w-[70%] px-5 mb-10 text-center text-muted-foreground font-[Roboto]">
            {t("app.pages.gallery.finalMessage")}
        </p>
        </>
    );
}