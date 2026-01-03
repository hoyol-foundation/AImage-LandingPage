import React from 'react'
import mainArtAbout from "../assets/mainArtAbout.jfif";

import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <>
        <main
            className="w-full pt-[70px] pb-[20px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${mainArtAbout})` }}
        >
            <div className="w-full md:w-[70%] px-5 flex flex-col items-start justify-center">
                <h1 className="text-[clamp(3.5rem,5vw,3rem)] drop-shadow-lg drop-shadow-black/70 leading-16 font-bold text-white">
                    {t("app.pages.about.mainPage.title")}
                </h1>
                <p className="text-white text-2xl font-[Roboto] line-clamp-2 mt-5">
                    {t("app.pages.about.mainPage.description")}
                </p>
            </div>
        </main>
        <div className="w-full md:w-[70%] px-5 py-10 flex flex-col items-start justify-center gap-5">
            <p className="text-2xl font-[Roboto]">{t("app.pages.about.paragraphs.p1")}</p>
            <p className="text-2xl font-[Roboto]">{t("app.pages.about.paragraphs.p2")}</p>
            <p className="text-2xl font-[Roboto]">{t("app.pages.about.paragraphs.p3")}</p>
        </div>
        </>
    )
}

export default About