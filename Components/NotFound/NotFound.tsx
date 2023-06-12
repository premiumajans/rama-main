import Link from "next/link";
import {useTranslation} from "next-i18next";

const NotFound = () => {
    const {t} = useTranslation('common')
    return <>
        <div  data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="700" className="page-404">
            <div className="content-page-404" >
                <div className="title-error my-3" style={{fontSize:'8.75pc'}}>
                    {t('result-not-fount')}
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

export default NotFound;