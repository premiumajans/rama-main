import Link from "next/link";
import {useTranslation} from "next-i18next";

const Page500 = () => {
    const {t} = useTranslation('common')
    return <div className="page-404">
        <div className="content-page-404">
            <div className="title-error">
                500
            </div>
            <div className="sub-title">
            </div>
            <div className="sub-error">
                {t('result-not-fount')}
            </div>
            <Link className="button" href="/">
                {t('back')}
            </Link>
        </div>
    </div>
};

export default Page500;