import Link from "next/link";
import {useTranslation} from "next-i18next";
import Head from "next/head";

const Page500 = () => {
    const {t} = useTranslation('common')
    return <>
        <Head>
            <title>RAMA GROUP</title>
        </Head>
        <div className="page-404">
            <div className="content-page-404">
                <div className="title-error">
                    500
                </div>
                <div className="sub-title">
                </div>
                <Link className="button" href="/">
                    {t('back')}
                </Link>
            </div>
        </div>
    </>
};

export default Page500;