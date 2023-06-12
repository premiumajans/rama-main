/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
        defaultLocale: 'az',
        locales: ['az', 'en', 'ru'],
        localeDetection: false,
        localeSubpaths: {
            en: 'en',
            az: 'az',
            ru:'ru'
        },
    },
}