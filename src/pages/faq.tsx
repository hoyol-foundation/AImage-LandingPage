import { useTranslation } from "react-i18next";

import mainArtFAQs from "../assets/mainArtFAQs.jfif"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function FAQ() {
    const { t } = useTranslation();
    const sections = t("app.pages.faq.sectionsQuestions", { returnObjects: true }) as any;

    const faqSectionClass = 'w-full md:w-[70%] px-5 flex flex-col items-start justify-center mt-5';
    const faqSectionTitleClass = 'text-2xl font-bold';
    const faqSectionDescriptionClass = 'text-muted-foreground font-[Roboto] mb-3';

    return (
        <>
            <main
                className="w-full pt-[70px] pb-[20px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{ backgroundImage: `url(${mainArtFAQs})` }}
            >
                <div className="w-full md:w-[70%] px-5 flex flex-col items-start justify-center">
                    <h1 className="text-[clamp(3.5rem,5vw,3rem)] drop-shadow-lg drop-shadow-black/70 leading-16 font-bold text-white">
                        {t("app.pages.faq.mainPage.title")}
                    </h1>
                    <p className="text-white text-2xl font-[Roboto] line-clamp-2 mt-5">
                        {t("app.pages.faq.mainPage.description")}
                    </p>
                </div>
            </main>

            <section className={faqSectionClass}>
                <h4 className={faqSectionTitleClass}>{t("app.pages.faq.sectionsQuestions.section1.title")}</h4>
                <p className={faqSectionDescriptionClass}>{t("app.pages.faq.sectionsQuestions.section1.description")}</p>

                <Accordion type="single" collapsible className="w-full">
                    {sections.section1?.questions && Object.entries(sections.section1.questions).map(([qKey, question]: [string, any]) => (
                        <AccordionItem key={qKey} value={qKey}>
                            <AccordionTrigger>
                                {question.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {question.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <section className={faqSectionClass}>
                <h4 className={faqSectionTitleClass}>{t("app.pages.faq.sectionsQuestions.section2.title")}</h4>
                <p className={faqSectionDescriptionClass}>{t("app.pages.faq.sectionsQuestions.section2.description")}</p>

                <Accordion type="single" collapsible className="w-full">
                    {sections.section2?.questions && Object.entries(sections.section2.questions).map(([qKey, question]: [string, any]) => (
                        <AccordionItem key={qKey} value={qKey}>
                            <AccordionTrigger>
                                {question.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {question.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <section className={faqSectionClass}>
                <h4 className={faqSectionTitleClass}>{t("app.pages.faq.sectionsQuestions.section3.title")}</h4>
                <p className={faqSectionDescriptionClass}>{t("app.pages.faq.sectionsQuestions.section3.description")}</p>

                <Accordion type="single" collapsible className="w-full">
                    {sections.section3?.questions && Object.entries(sections.section3.questions).map(([qKey, question]: [string, any]) => (
                        <AccordionItem key={qKey} value={qKey}>
                            <AccordionTrigger>
                                {question.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {question.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <section className={faqSectionClass}>
                <h4 className={faqSectionTitleClass}>{t("app.pages.faq.sectionsQuestions.section4.title")}</h4>
                <p className={faqSectionDescriptionClass}>{t("app.pages.faq.sectionsQuestions.section4.description")}</p>

                <Accordion type="single" collapsible className="w-full">
                    {sections.section4?.questions && Object.entries(sections.section4.questions).map(([qKey, question]: [string, any]) => (
                        <AccordionItem key={qKey} value={qKey}>
                            <AccordionTrigger>
                                {question.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {question.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <section className={faqSectionClass}>
                <h4 className={faqSectionTitleClass}>{t("app.pages.faq.sectionsQuestions.section5.title")}</h4>
                <p className={faqSectionDescriptionClass}>{t("app.pages.faq.sectionsQuestions.section5.description")}</p>

                <Accordion type="single" collapsible className="w-full">
                    {sections.section5?.questions && Object.entries(sections.section5.questions).map(([qKey, question]: [string, any]) => (
                        <AccordionItem key={qKey} value={qKey}>
                            <AccordionTrigger>
                                {question.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {question.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <section className={faqSectionClass}>
                <p className={faqSectionDescriptionClass}>{t("app.pages.faq.finalPage")}</p>
            </section>
            <div className="h-[100px]"></div>
        </>
    );
}