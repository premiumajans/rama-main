import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"/>

                <meta
                    name="description"
                    content="RAMA GROUP"
                />
                <meta name="author" content="Taleh Maharramov, Elgiz Ismayilov"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
                />
                <meta property="og:site_name" content="RAMA GROUP" />
                <meta property="og:locale" content="az_AZE" />

                <script defer src="/libs/popper/js/popper.min.js"></script>
                <script defer src="/libs/jquery/js/jquery.min.js"></script>
                <script defer src="/libs/bootstrap/js/bootstrap.min.js"></script>
                <script defer src="/libs/slick/js/slick.min.js"></script>
                <script defer src="/libs/countdown/js/jquery.countdown.min.js"></script>
                <script defer src="/libs/mmenu/js/jquery.mmenu.all.min.js"></script>
                <script defer src="/libs/slider/js/tmpl.js"></script>
                <script defer src="/libs/slider/js/jquery.dependClass-0.1.js"></script>
                <script defer src="/libs/slider/js/draggable-0.1.js"></script>
                <script defer src="/libs/slider/js/jquery.slider.js"></script>
                <script defer src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

                <script defer src="/assets/js/app.js"></script>

                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>

            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
