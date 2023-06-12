import  page_title_styles from './PageTitle.module.scss'
import Link from "next/link";
import {useTranslation} from "next-i18next";
const PageTitle = ({pageTitle,currentAddress}:{pageTitle:string, currentAddress:string }) => {
    const {t} = useTranslation('common')
    return <>
        <div data-aos="fade-right" data-aos-duration="700" id='title' className={`page-title ${page_title_styles.title} section-padding`}>
            <div className="section-container">
                <div className="content-title-heading">
                    <h1 className="text-title-heading">
                        {pageTitle}
                    </h1>
                </div>
                <div className="breadcrumbs">
                    <Link href="/">{t('home')}</Link><span className="delimiter"></span>{currentAddress}
                </div>
            </div>
        </div>
    </>
};

export default PageTitle;