import { useTranslation } from "react-i18next";

import mainArtResources from "../assets/mainArtResources.jfif";
import artForResourcesIcons from "../assets/artForResourcesIcons.jfif";

// Icons
import { BsAspectRatio } from "react-icons/bs";
import { LiaRobotSolid } from "react-icons/lia";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdOutlineTranslate } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { PiMagicWand } from "react-icons/pi";

export default function Resources() {
    const { t } = useTranslation();

    const cardListClass = "flex flex-col md:flex-row border-b border-border p-5 items-start gap-5"
    const cardListReverseClass = "flex flex-col-reverse md:flex-row border-b border-border p-5 items-start gap-5"
    const cardItemClass = "flex flex-col items-start justify-center gap-2"
    const iconContainerClass = "flex items-center justify-center bg-primary rounded-2xl text-background p-5"
    const titleClass = "text-2xl font-bold"
    const descriptionClass = "text-lg text-muted-foreground font-[Roboto]"

    return (
        <>
        <main
            className="w-full pt-[70px] pb-[20px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${mainArtResources})` }}
        >
            <div className="w-full md:w-[70%] px-5 flex flex-col items-start justify-center">
                <h1 className="text-[clamp(3.5rem,5vw,3rem)] drop-shadow-lg drop-shadow-black/70 leading-16 font-bold text-white">
                    {t("app.pages.resources.mainPage.title")}
                </h1>
                <p className="text-white text-2xl font-[Roboto] line-clamp-2 mt-5">
                    {t("app.pages.resources.mainPage.description")}
                </p>
            </div>
        </main>

        <div className="w-full md:w-[70%] pt-[40px] pb-[100px] px-5 flex flex-col gap-3">
            <section className={cardListClass}>
                <div className={iconContainerClass} style={{ backgroundImage: `url(${artForResourcesIcons})` }}>
                    <BsAspectRatio className="size-12" />
                </div>
                <div className={cardItemClass}>
                    <h2 className={titleClass}>
                        {t("app.pages.resources.resourcesList.r1.title")}
                    </h2>
                    <p className={descriptionClass}>
                        {t("app.pages.resources.resourcesList.r1.description")}
                    </p>
                </div>
            </section>
            <section className={cardListReverseClass}>
                <div className={cardItemClass}>
                    <h2 className={titleClass}>
                        {t("app.pages.resources.resourcesList.r2.title")}
                    </h2>
                    <p className={descriptionClass}>
                        {t("app.pages.resources.resourcesList.r2.description")}
                    </p>
                </div>
                <div className={iconContainerClass} style={{ backgroundImage: `url(${artForResourcesIcons})` }}>
                    <LiaRobotSolid className="size-12" />
                </div>
            </section>
            <section className={cardListClass}>
                <div className={iconContainerClass} style={{ backgroundImage: `url(${artForResourcesIcons})` }}>
                    <MdOutlineSaveAlt className="size-12" />
                </div>
                <div className={cardItemClass}>
                    <h2 className={titleClass}>
                        {t("app.pages.resources.resourcesList.r3.title")}
                    </h2>
                    <p className={descriptionClass}>
                        {t("app.pages.resources.resourcesList.r3.description")}
                    </p>
                </div>
            </section>
            <section className={cardListReverseClass}>
                <div className={cardItemClass}>
                    <h2 className={titleClass}>
                        {t("app.pages.resources.resourcesList.r4.title")}
                    </h2>
                    <p className={descriptionClass}>
                        {t("app.pages.resources.resourcesList.r4.description")}
                    </p>
                </div>
                <div className={iconContainerClass} style={{ backgroundImage: `url(${artForResourcesIcons})` }}>
                    <MdOutlineTranslate className="size-12" />
                </div>
            </section>
            <section className={cardListClass}>
                <div className={iconContainerClass} style={{ backgroundImage: `url(${artForResourcesIcons})` }}>
                    <TbApi className="size-12" />
                </div>
                <div className={cardItemClass}>
                    <h2 className={titleClass}>
                        {t("app.pages.resources.resourcesList.r5.title")}
                    </h2>
                    <p className={descriptionClass}>
                        {t("app.pages.resources.resourcesList.r5.description")}
                    </p>
                </div>
            </section>
            <section className={cardListReverseClass}>
                <div className={cardItemClass}>
                    <h2 className={titleClass}>
                        {t("app.pages.resources.resourcesList.r6.title")}
                    </h2>
                    <p className={descriptionClass}>
                        {t("app.pages.resources.resourcesList.r6.description")}
                    </p>
                </div>
                <div className={iconContainerClass} style={{ backgroundImage: `url(${artForResourcesIcons})` }}>
                    <PiMagicWand className="size-12" />
                </div>
            </section>
            <p className="text-center text-muted-foreground font-[Roboto]">
                {t("app.pages.resources.finalPage")}
            </p>
        </div>
        </>
    );
}