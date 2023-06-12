import PageTitle from "../../Components/PageTitle/PageTitle";
import {useForm} from "react-hook-form";
import {useTranslation} from "next-i18next";
import  * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import Swal from "sweetalert2"
import Head from "next/head";
import store from "@/Store/store";
import {observer} from "mobx-react-lite";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
const Contact = () => {
    const {settings} = store
    const {t} = useTranslation('common')

    let schema = yup.object().shape({
        name: yup
            .string()
            .required(`${t('name-required')}`)
            .min(3, `${t('name-min-3')}`),
        email: yup
            .string()
            .email(`${t('email-valid')}`)
            .required(`${t('email-required')}`)
            .min(3, `${t('email-min-3')}`),
        message: yup
            .string()
            .required(`${t('message-required')}`)
            .min(3,`${t('message-min-3')}`),
        phone: yup
            .string()
            .required(`${t('phone-required')}`)
            .min(3,`${t('phone-min-3')}`),
    });

    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
        reset
    } = useForm({resolver: yupResolver(schema), mode: "onChange"});

    const onSubmit = async (data: any) => {
        fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/contact', {
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-type':'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                Swal.fire(`${t(res.message)}`, "", "success").then(() => {
                    reset()
                })
            })
            .catch(er =>  Swal.fire(`${t('something-went-wrong')}`, "", "error"))
    };

    return <>
        <Head>
            <title>{t('contact-us')}</title>
        </Head>
        <div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
                <div id="primary" className="content-area">
                    <PageTitle pageTitle={t('contact-us')} currentAddress={t('contact-us')}/>

                    <div data-aos="fade-zoom-in"
                         data-aos-easing="ease-in-back"
                         data-aos-delay="300"
                         data-aos-offset="0"
                         data-aos-duration="700" id="content" className="site-content" role="main">

                        <section className="section section-padding contact-background m-b-0">
                            <div className="section-container small">
                                <div className="block block-contact-form">
                                    <div className="block-widget-wrap">
                                        <div className="block-title">
                                            <h2>{t('send-message')}</h2>

                                        </div>
                                        <div className="block-content">
                                            <form onSubmit={handleSubmit(onSubmit)} method="post" className="contact-form"
                                                  noValidate={false}>
                                                <div className="contact-us-form">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-6">
                                                            <label className="required">{t('full-name')}</label><br/>
                                                            <span className="form-control-wrap">
															        	<input {...register('name')} type="text" name="name"
                                                                               size={40}  className={`form-control ${
                                                                            errors.name ? "is-invalid" : ""
                                                                        }`}
                                                                               aria-required={true}/>
                                                                {errors.name ? (
                                                                    <div className="fv-plugins-message-container invalid-feedback">
                                                                        <div>{errors.name.message as string}</div>
                                                                    </div>
                                                                ) : (
                                                                    ""
                                                                )}
															        </span>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6">
                                                            <label className="required">{t('phone')}</label><br/>
                                                            <span className="form-control-wrap">
															        	<input {...register('phone')} type="text" name="phone"
                                                                               size={40}  className={`form-control ${
                                                                            errors.phone ? "is-invalid" : ""
                                                                        }`}
                                                                               aria-required={true}/>
                                                                {errors.phone ? (
                                                                    <div className="fv-plugins-message-container invalid-feedback">
                                                                        <div>{errors.phone.message as string}</div>
                                                                    </div>
                                                                ) : (
                                                                    ""
                                                                )}
															        </span>
                                                        </div>
                                                        <div className="col-sm-12 col-md-12">
                                                            <label className="required">{t('email')}</label><br/>
                                                            <span className="form-control-wrap">
														        		<input {...register('email')} type="email" name="email"
                                                                               size={40} className={`form-control ${
                                                                            errors.email ? "is-invalid" : ""
                                                                        }`}
                                                                               aria-required={true}/>
                                                                {errors.email ? (
                                                                    <div className="fv-plugins-message-container invalid-feedback">
                                                                        <div>{errors.email.message as string}</div>
                                                                    </div>
                                                                ) : (
                                                                    ""
                                                                )}
														        	</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <label className="required">{t('message')}</label><br/>
                                                            <span className="form-control-wrap">
																		<textarea  {...register('message')} name="message" cols={40} rows={10}
                                                                                   className={`form-control ${
                                                                                       errors.message ? "is-invalid" : ""
                                                                                   }`}
                                                                                   aria-required={true}></textarea>
                                                                {errors.message ? (
                                                                    <div className="fv-plugins-message-container invalid-feedback">
                                                                        <div>{errors.message.message as string}</div>
                                                                    </div>
                                                                ) : (
                                                                    ""
                                                                )}
																	</span>
                                                        </div>
                                                    </div>
                                                    <div className="form-button">
                                                        <input type="submit" value={`${t('send-message')}`} className="button"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="page-contact">
                            <section className="section section-padding">
                                <div className="section-container small">
                                    <div className="block block-contact-map">
                                        <div className="block-widget-wrap">
                                            <iframe
                                                src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                                                aria-label="London Eye, London, United Kingdom"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="block block-contact-info">
                                <div className="block-widget-wrap my-4">
                                    <div className="info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink" className="svg-icon2 plant"
                                             x="0" y="0" viewBox="0 0 512 512"
                                             xmlSpace="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m320.174 28.058a8.291 8.291 0 0 0 -7.563-4.906h-113.222a8.293 8.293 0 0 0 -7.564 4.907l-66.425 148.875a8.283 8.283 0 0 0 7.564 11.655h77.336v67.765a20.094 20.094 0 1 0 12 0v-67.765h27.7v288.259h-48.441a6 6 0 0 0 0 12h108.882a6 6 0 0 0 0-12h-48.441v-288.259h117.04a8.284 8.284 0 0 0 7.564-11.657zm-103.874 255.567a8.094 8.094 0 1 1 8.094-8.093 8.1 8.1 0 0 1 -8.094 8.093zm-77.61-107.036 63.11-141.437h108.4l63.11 141.437z" ></path></g></svg>
                                    </div>
                                    <div className="info-title">
                                        <h2>{t('help')}</h2>
                                    </div>
                                    <div className="info-items">
                                        <div className="row">
                                            <div className="col-md-12 sm-m-b-30 ">
                                                <div className="info-item my-4">
                                                    <div className="item-tilte">
                                                        <h2>{t('phone')}</h2>
                                                    </div>
                                                    <div className="item-content">
                                                        {settings.find(item => item.name === 'phone' )?.link}
                                                    </div>
                                                </div>

                                                <div className="info-item my-4">
                                                    <div className="item-tilte">
                                                        <h2>{t('email')}</h2>
                                                    </div>
                                                    <div className="item-content">
                                                        {settings.find(item => item.name === 'email' )?.link}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

};

export default observer(Contact);


export async function  getServerSideProps(context:any) {
    return {
        props:{
            ...(await serverSideTranslations(context.locale, ["common"]))
        }
    }
}