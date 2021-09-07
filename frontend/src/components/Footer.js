import styles from '../styles/footer.module.css'
import { Link } from 'react-router-dom'
import { SocialMediaFooterButton } from '../components/Buttons'

const Footer = () => {
    return (
        <footer>
            <div className={styles.content}>
                <div
                    className={styles.footerLogo}
                    style={{ backgroundImage: `url('https://stopots.com/assets/logo2.svg')` }}>
                </div>
                <div className={styles.navContainer}>
                    <nav className={styles.footerNav}>
                        <Link to='/terms'>
                            <p>TERMS</p>
                        </Link>
                        <Link to="/privacy">
                            <p>PRIVACY</p>
                        </Link>
                        <Link to="/">
                            <p>HOME</p>
                        </Link>
                    </nav>
                    <div className={styles.socialMedia}>
                        <SocialMediaFooterButton icon="instagram" />
                        <SocialMediaFooterButton icon="youtube" />
                        <SocialMediaFooterButton icon="discord" />
                        <SocialMediaFooterButton icon="twitter" />
                    </div>
                </div>
                <svg className={styles.footerHorizon} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 163 48" version="1.1">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-973.000000, -3370.000000)" fill="#FFFFFF">
                            <g transform="translate(973.000000, 3370.000000)">
                                <path d="M17.605487,0.00598965507 L17.4732201,0 L17.3742296,0.0108384235 L17.1597502,0.0193950736 C15.9357915,0.0695940875 14.606131,0.542206395 12.9610433,1.21076599 C11.6571092,1.72758766 10.3308044,2.5481704 8.90718687,3.70674082 C8.78974053,3.80086398 8.66054954,3.89983589 8.52604551,4.00707924 C7.78501499,4.57409992 6.84907946,5.49707725 6.88179666,6.33391763 L6.88291519,6.35473881 C6.92933447,6.69015949 7.07418496,8.04809986 7.10690216,8.36697769 C7.14353423,8.74974517 6.83062361,8.7369102 6.83062361,8.7369102 L5.26019817,8.73006488 C4.96350633,8.74232941 4.35082788,8.91003975 4.01470762,9.4265762 C1.7026924,12.977586 0.439584898,16.4381805 0.0167780496,20.2992263 L0,20.5978533 C0.024607806,21.3220312 0.837783941,22.0279548 1.54190275,21.9991474 C2.18534095,21.9726218 3.07597575,21.3163267 3.171331,20.6086918 C3.171331,20.6086918 4.14725422,16.2000204 5.22384573,13.820416 C5.30438037,13.6464308 5.37121293,13.4852806 5.43357135,13.3426697 C5.8793082,12.3093116 6.04736833,12.1062338 7.31746668,12.0548939 C7.31746668,12.0548939 9.2430275,11.977884 9.27127055,11.9767431 C10.4155335,11.9245476 10.6442743,11.0278107 10.5752046,10.5922772 C10.5707305,10.5628993 10.1786834,7.36784618 10.1786834,7.36784618 C10.1669388,7.06693732 9.7743324,6.56894028 13.8972584,4.51677037 C15.2624324,3.83737235 16.7422564,3.37930635 18.0017286,3.13002261 C18.6227961,2.96944281 19.0237915,2.04618026 18.998904,1.40985072 C18.9723388,0.741005899 18.2514419,0.0584704424 17.605487,0.00598965507 Z" />
                                <path d="M26.9742602,14.000035 C20.359828,14.0149431 14.9856364,18.9608889 15.0000288,25.026293 C15.0146981,31.0954919 20.4115854,36.0148742 27.0260176,35.9999662 C33.6404499,35.9850582 39.0140879,31.0412808 38.9999723,24.9720819 C38.9858566,18.9066778 33.5886925,13.9848559 26.9742602,14.000035 Z" />
                                <path d="M49.0019186,16.0002595 C46.8797268,16.0092714 43.3632125,16.0212872 43.3632125,16.0212872 C42.27865,16.0087707 42.0455924,17.0834342 42.0128731,17.8431835 L42,18.1215497 L42.0455924,33.2304225 C42.0697295,34.1143351 42.7332329,34.8437945 43.6238937,34.9692095 L43.8472964,35 L57.7036288,34.9454282 C59.8049017,34.9344137 61.036969,33.5117926 60.9991541,30.7243762 L60.986281,25.4812299 C60.9447114,20.3912851 56.5970746,15.9609578 49.0019186,16.0002595 Z" />
                                <path d="M129.505417,15 L129.476155,15 C126.412511,15.0069659 123.530405,16.1048965 121.360901,18.0915134 C119.187061,20.082149 117.993792,22.7214156 118.000024,25.5235768 C118.013572,31.2996351 123.170583,35.9997321 129.496205,36 L129.525468,36 C135.866263,35.9855324 141.013791,31.2623944 140.999972,25.4710648 C140.986696,19.6971499 135.830227,15 129.505417,15 Z M129.49756,33.1809599 C124.923907,33.1809599 121.194808,29.7427598 121.184783,25.516343 C121.175028,21.2834962 124.897082,17.8310964 129.482386,17.8206476 L129.503792,17.8206476 C134.077445,17.8206476 137.806273,21.2556327 137.815756,25.4782986 C137.826052,29.7148963 134.103727,33.1699752 129.518423,33.1809599 L129.49756,33.1809599 Z" id="Shape" fillRule="nonzero" />
                                <path d="M129.495814,36 L129.495814,36 C123.170079,35.9997329 118.013536,31.2998029 118.000028,25.5236345 C117.993275,22.721142 119.187049,20.081554 121.361723,18.0906467 C123.531264,16.1048134 126.412639,15.0069435 129.476093,15 L129.505269,15 C135.829923,15 140.986466,19.6972595 140.999973,25.4707573 C141.013481,31.2618808 135.866122,35.9853119 129.52526,35.9997329 L129.495814,35.9997329 L129.495814,36 Z M129.504999,15.0675653 L129.475823,15.0675653 C126.429929,15.0745088 123.565032,16.1659694 121.407648,18.1403192 C119.247292,20.1178737 118.061352,22.740103 118.067835,25.5236345 C118.081613,31.262682 123.207629,35.9321676 129.495814,35.9329688 L129.524989,35.9329688 C135.828032,35.9185477 140.945134,31.2252941 140.931627,25.4712914 C140.918119,19.7346474 135.792373,15.0675653 129.504999,15.0675653 Z M129.497164,33.1897628 C124.918193,33.1897628 121.185048,29.7476696 121.175052,25.516424 C121.165327,21.2785019 124.891719,17.8225218 129.482036,17.8118395 L129.503378,17.8118395 C134.081809,17.8118395 137.815224,21.2512622 137.82495,25.4785019 C137.834945,29.7204298 134.108554,33.1796147 129.518236,33.1900299 L129.497164,33.1900299 L129.497164,33.1897628 Z M129.503378,17.8794048 L129.482577,17.8794048 C124.929539,17.8898201 121.233674,21.3156228 121.243129,25.516424 C121.252854,29.7105487 124.955743,33.1224646 129.497164,33.1224646 L129.517966,33.1224646 C134.070733,33.1120493 137.766328,29.6827748 137.756603,25.4785019 C137.747148,21.2878489 134.044529,17.8794048 129.503378,17.8794048 L129.503378,17.8794048 Z" id="Shape" fillRule="nonzero" />
                                <path d="M89.4795811,15.0000046 C88.6603127,15.0019141 87.9975612,15.7758119 88.0000067,16.7327501 L88.0359567,34.2751608 C88.0379132,35.2280071 88.703844,36.0021777 89.5231124,35.9999954 C90.340669,35.9978131 91.0017086,35.2206419 90.9999967,34.2675228 L90.9635576,16.7248392 C90.9616011,15.7681739 90.2971377,14.9978223 89.4795811,15.0000046 Z" />
                                <path d="M82.8552011,22.4163405 L82.4126727,21.5987958 C81.8378478,20.592919 81.1391474,19.684446 80.3412925,18.8990095 C76.7453764,15.3749331 71.7843868,15.1625873 69.8260156,15.0114899 C68.8575605,14.9367507 67.4927586,15.2510872 67.4927586,15.2510872 C66.6821358,15.4475138 65.9975616,16.059728 66.0000065,16.9428381 L66.03994,34.293943 C66.0421133,35.2366827 66.7818337,36.0024226 67.6888945,35.9999942 C68.5975853,35.9981055 69.3335025,35.2293976 69.3316009,34.2863881 L69.2981872,19.7308545 L69.3114983,19.7249185 C69.3114983,19.7249185 69.1226971,18.620019 70.3280367,18.6175906 L70.3220602,18.6035602 C75.7193301,18.7015036 78.5480884,21.7285776 79.5086656,23.0342208 L79.9444025,23.7057946 C80.2478427,24.2305882 80.7756711,24.5449247 81.3562009,24.5435756 C82.2648917,24.5414171 83.0024388,24.0457637 82.9999939,23.1027542 C82.9994506,22.866125 82.9486509,22.63786 82.8552011,22.4163405 Z" />
                                <path d="M108.606687,26.4457769 C113.448941,24.9816262 116.533004,20.5358821 116.946048,18.28111 C117.006903,17.9403421 117.291353,15.9868068 115.527655,16.0000672 L99.0791363,16.043101 C98.1759465,16.074876 97.471844,16.770923 97.4737715,17.620841 C97.4759744,18.4940273 98.227164,19.2028344 99.1501799,19.2008328 L110.416096,19.2231003 C110.486313,19.2401137 110.578835,19.2486204 110.727531,19.2391129 C112.324084,19.1522947 111.573721,20.2183825 111.573721,20.2183825 L111.579504,20.2183825 C110.78343,21.4113201 109.047268,23.2580215 105.778987,24.2960874 C99.8644709,26.1753143 96.3871901,29.382585 96.0338997,32.555829 C96.0173779,32.7514828 96.0088417,32.9201153 96.0071895,33.016441 L96.01132,33.0414607 L96.0000301,33.165308 C95.9917692,34.1293157 97.6869023,35 98.7751358,35 L98.8337881,34.9964972 L99.5114558,34.9949961 L99.513108,34.9982486 L115.574466,34.9564658 C116.391743,34.8351204 116.986251,34.1788546 116.984324,33.3957391 C116.982121,32.5335615 116.201743,31.8277568 115.336002,31.8307592 L115.336002,31.8230031 L114.267595,31.8250046 L114.265392,31.8179991 L102.046445,31.8735428 C102.006242,31.8677883 100.572979,31.8535271 101.128111,30.9610756 C101.937126,29.82143 103.932405,27.8626405 108.606687,26.4457769 Z" />
                                <path d="M162.979643,25.5373302 L162.979085,25.3190489 L162.968211,25.3190489 C162.898506,24.1898679 162.580931,22.1452005 161.246225,20.6687661 L161.226708,20.6898118 C160.77056,20.0457604 160.280675,19.434087 159.720807,18.8990414 C156.032311,15.3747018 150.939684,15.1628961 148.931072,15.0112594 C147.936804,14.9373297 146.533787,15.2516656 146.533787,15.2516656 C145.703743,15.447822 144.998052,16.0573369 145.000004,16.9417945 L145.041548,34.294216 C145.044057,35.2342558 145.804954,36.0024226 146.737046,35.9999943 C147.668022,35.9981055 148.425295,35.2269708 148.423064,34.2866612 L148.388769,20.0017804 L148.402431,19.9971935 C148.402431,19.9971935 148.207258,18.8920262 149.444378,18.8893281 L149.442426,18.8728693 C154.980885,18.9710824 157.88339,22.000579 158.867342,23.3048707 L159.168745,23.7560034 C159.341892,24.1477766 159.532325,24.8619802 159.535113,26.1543999 L159.554073,34.0173846 C159.556025,34.9371881 160.32919,35.6826904 161.281914,35.6805318 C162.232965,35.6786431 163.001948,34.9296333 162.999996,34.0098297 L162.981037,26.1465753 C162.981037,26.1468451 162.992189,25.9131842 162.979643,25.5373302 Z" />
                                <path d="M19.9442265,8.95266014 C19.6828286,8.14825261 19.152446,7.95380363 18.7482794,8.00860768 L18.5873484,8.05023768 C16.8182571,8.58484065 15.0636496,9.47066381 13.306743,11.3216179 C13.0520123,11.5893146 12.8977484,11.9523914 12.9699375,12.4819883 L13.0377584,13.3195944 C13.0377584,13.3195944 13.1906428,14.1005521 12.6018653,14.1548292 C12.2071246,14.1911896 11.6585798,14.2538981 11.6585798,14.2538981 C11.2167093,14.2855158 10.9208262,14.5553204 10.7539178,14.9025883 C9.59797355,17.2947324 9.03632442,19.5986104 9,21.6946018 L9.00229901,21.8840447 C9.05126801,22.3467173 9.34094378,22.8918595 10.0846748,22.9935632 C10.6083902,23.0649666 11.3243032,22.5332619 11.390055,21.8484747 C11.390055,21.8484747 11.70479,19.4413122 12.2119525,17.8614801 C12.2494265,17.744758 12.2818426,17.6398925 12.3096606,17.5421411 C12.516342,16.8613062 12.6816411,16.4473775 13.4028418,16.3477817 C13.4028418,16.3477817 13.9366729,16.2724261 13.9529959,16.2705817 C15.29585,16.1375238 15.2105566,15.3660514 15.2050389,14.6138131 C15.204809,14.5953695 15.1887159,13.7777879 15.1887159,13.7777879 C15.1036524,12.9509845 15.3832125,12.8234597 15.9117558,12.4329808 C15.988313,12.3789672 16.069928,12.3178396 16.1600494,12.2490711 C17.3801361,11.3121326 19.2805011,10.6760894 19.2805011,10.6760894 C19.8453689,10.4418548 20.1279177,9.51888083 19.9442265,8.95266014 Z" />
                                <path d="M33.104705,44.5869492 L32.2837939,44.2852877 C32.1628081,44.2335661 32.0696042,44.1569949 32.0021658,44.0512401 C31.9367438,43.9544426 31.9038088,43.8267277 31.9038088,43.6675175 C31.9038088,43.4620756 31.9604929,43.2962196 32.0767737,43.1586805 C32.3212099,42.862798 32.7052278,42.8827354 32.9234503,43.1514568 C33.039283,43.2835059 33.1022405,43.4620756 33.123301,43.6900554 L33.1387603,43.8772935 L33.8958178,43.8772935 L33.8958178,43.6672285 C33.8958178,43.1933542 33.7589246,42.7868047 33.4947722,42.4712738 C33.2328603,42.160366 32.907991,42 32.5309186,42 C32.1419716,42 31.8090366,42.160366 31.5473488,42.4660727 C31.2778193,42.7818926 31.1431665,43.1771731 31.1431665,43.6524922 C31.1431665,43.9790031 31.2150859,44.2821093 31.3528753,44.5407176 C31.4953697,44.8010595 31.7010456,44.9963882 31.970351,45.1194799 C32.1336819,45.1914279 32.3061987,45.2578859 32.4887976,45.3226102 L32.7240478,45.3948471 C32.8864824,45.4662172 33.0083645,45.5737058 33.1038088,45.7248254 C33.1941001,45.8695882 33.2375653,46.0244642 33.2375653,46.2015892 C33.2375653,46.4541295 33.1714712,46.6520588 33.0332338,46.8127137 C32.8902913,46.9748134 32.7182226,47.0557188 32.5064974,47.0557188 C32.2958925,47.0557188 32.129873,46.9678786 31.9958925,46.7916205 C31.8637043,46.6058271 31.7982823,46.40732 31.7982823,46.1729834 L31.7982823,45.9637852 L31,45.9637852 L31,46.1729834 C31,46.7078257 31.1575056,47.1597399 31.4631068,47.5096557 C31.7485437,47.8364556 32.1025392,48 32.5174757,48 C32.9160568,48 33.2655713,47.8237419 33.5570575,47.4810498 C33.8510082,47.1337346 34,46.705803 34,46.2013003 C34,45.8580303 33.9222554,45.539032 33.7734877,45.2552853 C33.6211352,44.9663376 33.4029126,44.7458705 33.104705,44.5869492 Z" />
                                <path d="M43.9927717,42 C43.1739328,42 42.4658363,42.2961429 41.8826658,42.8780276 C41.2951312,43.4593345 41,44.179323 41,45.0073675 C41,45.8371455 41.3065873,46.5542447 41.9173069,47.1445081 C42.5051143,47.711369 43.2063918,48 44.0055917,48 C44.8197936,48 45.530345,47.7050128 46.1146065,47.1208167 C46.7010501,46.5340203 47,45.8059421 47,44.9634516 C47,44.143208 46.6980497,43.4341985 46.0998773,42.8569365 C45.5093422,42.2871864 44.799609,42 43.9927717,42 Z M44.0055917,47.0558097 C43.4461517,47.0558097 42.9707233,46.8550104 42.546029,46.4421438 C42.1286994,46.0370781 41.9252171,45.5687389 41.9252171,45.0073675 C41.9252171,44.4370395 42.1240624,43.9594549 42.5288448,43.5509221 C42.9344456,43.1444118 43.41342,42.9470795 43.9927717,42.9470795 C44.5723962,42.9470795 45.05328,43.1432561 45.4651543,43.5448548 C45.8734827,43.94472 46.072328,44.4124813 46.072328,44.9767419 C46.072328,45.5684499 45.8734827,46.051813 45.4651543,46.4502335 C45.0535528,46.8590552 44.577306,47.0558097 44.0055917,47.0558097 Z" id="Shape" fillRule="nonzero" />
                                <path d="M56.8453559,46.1524461 C56.6563729,46.4243066 56.4003221,46.6470532 56.0851608,46.8099961 C55.7648842,46.9691834 55.4338086,47.0552773 55.1033013,47.0552773 C54.5113437,47.0552773 54.0185668,46.8487096 53.5925733,46.4306626 C53.1702742,46.0036595 52.9665135,45.5327427 52.9665135,44.9765986 C52.9665135,44.4305663 53.1702742,43.9657165 53.5948468,43.5560478 C54.0197035,43.1446456 54.5045233,42.9470339 55.0723251,42.9470339 C55.4139156,42.9470339 55.7529484,43.0241718 56.0786245,43.1758475 C56.4003221,43.3281009 56.6518259,43.5401579 56.8294416,43.8004622 L56.8911097,43.8929122 L57.9349216,43.8929122 L57.7982286,43.5912943 C57.5924786,43.1432011 57.226164,42.7601117 56.7052527,42.4521379 C56.1925828,42.1513867 55.6401269,42 55.0569791,42 C54.220054,42 53.4942453,42.292084 52.8977407,42.8733629 C52.3020888,43.4566641 52,44.1644838 52,44.9765986 C52,45.8109592 52.3020888,46.5314908 52.8977407,47.1156587 C53.4902667,47.7038713 54.2348316,48 55.1035855,48 C55.6747975,48 56.2167385,47.843124 56.7112206,47.5299499 C57.1784209,47.2401772 57.5512717,46.8547766 57.8198266,46.3803929 L58,46.0649076 L56.9047506,46.0649076 L56.8453559,46.1524461 Z" />
                                <rect id="Rectangle" x="64" y="42" width="1" height="6" />
                                <path d="M74.5587148,42 L72,47.9973162 L73.0526016,48 L73.8427637,46.1326972 L76.142451,46.1326972 L76.9468297,48 L78,47.9973162 L75.4384419,42 L74.5587148,42 Z M74.2496446,45.1957656 L75.0045493,43.4098703 L75.7523457,45.1957656 L74.2496446,45.1957656 Z" id="Shape" fillRule="nonzero" />
                                <polygon points="83.89158 42 83 42 83 48 86 48 86 47.0614558 83.89158 47.0614558" />
                                <path d="M101.03728,45.9013867 L103.885672,45.9013867 C103.755915,46.1980932 103.548794,46.4422188 103.261322,46.6519646 C102.889427,46.9192026 102.474913,47.0555663 102.034882,47.0555663 C101.456409,47.0555663 100.967516,46.8547766 100.542687,46.4497304 C100.12573,46.0484399 99.9229516,45.568567 99.9229516,44.9765986 C99.9229516,44.6816256 99.9897299,44.4019646 100.126001,44.1237481 C100.264172,43.8487096 100.440619,43.6175847 100.645297,43.438463 C101.035108,43.1085324 101.487083,42.946745 102.021038,42.946745 C102.360087,42.946745 102.697779,43.0270609 103.023255,43.1978043 C103.342216,43.3656587 103.57214,43.5771379 103.718726,43.8521764 L103.774917,43.9561826 L104.788535,43.9561826 L104.669638,43.6640986 C104.466317,43.164869 104.116138,42.7549114 103.620187,42.4521379 C103.131023,42.1513867 102.592996,42 102.021038,42 C101.246844,42 100.582048,42.2447034 100.038592,42.7329545 C99.7161019,43.0238829 99.4647333,43.3460131 99.2912727,43.7007897 C99.0982672,44.0980354 99,44.5308166 99,44.9768875 C99,45.8193374 99.308103,46.5433359 99.9213229,47.1387712 C100.511469,47.7064715 101.219156,48 102.021309,48 C102.844094,48 103.557752,47.705027 104.145727,47.1309707 C104.711985,46.570782 105,45.9262327 105,45.2042565 L105,44.9910439 L101.037823,44.9910439 L101.037823,45.9013867 L101.03728,45.9013867 Z" />
                                <path d="M112.560667,42 L110,47.9973162 L111.054058,48 L111.842896,46.1326972 L114.140901,46.1326972 L114.945374,48 L116,47.9973162 L113.439901,42 L112.560667,42 Z M112.248827,45.1957656 L113.007817,43.4098703 L113.753162,45.1957656 L112.248827,45.1957656 Z" id="Shape" fillRule="nonzero" />
                                <polygon points="128.461026 42 128.379473 42.1931572 127.834951 42.1931572 125.999168 46.4610943 124.166436 42.1931572 123.61165 42.1931572 123.538419 42.0190559 123.538419 42.1931572 123 42.1931572 123 48 123.941193 48 123.941193 44.0112603 125.633842 48 126.364771 48 128.056865 43.9979789 128.056865 48 129 48 129 42.1931572 128.461026 42.1931572" />
                                <polygon points="135 48 138 48 138 47.0614558 135.84434 47.0614558 135.84434 45.449284 137.934211 45.449284 137.934211 44.5125298 135.84434 44.5125298 135.84434 42.9385442 138 42.9385442 138 42 135 42" />
                                <path d="M147.770954,45.2564411 C147.620125,44.9669155 147.40363,44.7458705 147.105334,44.5872381 L146.282384,44.2855767 C146.163379,44.233855 146.0697,44.1572839 146.000448,44.0509511 C145.935007,43.9547315 145.903855,43.8267277 145.903855,43.6672285 C145.903855,43.4620756 145.959435,43.2962196 146.075526,43.1586805 C146.318915,42.862798 146.704392,42.8827354 146.920215,43.1514568 C147.037427,43.2835059 147.102868,43.4620756 147.122815,43.6900554 L147.138054,43.8772935 L147.893545,43.8772935 L147.893545,43.6669396 C147.893545,43.1933542 147.759076,42.7868047 147.494621,42.4712738 C147.230838,42.160366 146.905423,42 146.531152,42 C146.141416,42 145.809054,42.160366 145.544823,42.4660727 C145.275661,42.7818926 145.14164,43.1771731 145.14164,43.6524922 C145.14164,43.9790031 145.212909,44.2821093 145.352084,44.5407176 C145.492828,44.8007705 145.701927,44.9963882 145.967951,45.1194799 C146.135141,45.1914279 146.304348,45.2578859 146.488794,45.3226102 L146.724787,45.3948471 C146.884356,45.4662172 147.008292,45.5737058 147.103092,45.7248254 C147.193635,45.8695882 147.236441,46.0244642 147.236441,46.2015892 C147.236441,46.4541295 147.172344,46.6520588 147.034065,46.8127137 C146.890856,46.9748134 146.717839,47.0557188 146.507396,47.0557188 C146.295159,47.0557188 146.12909,46.9678786 145.99731,46.7916205 C145.862842,46.6055382 145.797176,46.4070311 145.797176,46.1729834 L145.797176,45.9637852 L145,45.9637852 L145,46.1729834 C145,46.7078257 145.155087,47.1591621 145.461452,47.5096557 C145.745406,47.8364556 146.1013,48 146.517705,48 C146.914612,48 147.264007,47.8237419 147.554459,47.4810498 C147.848274,47.1337346 148,46.705803 148,46.2013003 C148.000224,45.8594751 147.922456,45.5404768 147.770954,45.2564411 Z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </footer>
    )
}

export default Footer
