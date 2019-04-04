import React from 'react';

import './SocialLinks.css';

const SocialLinks = () => (
  <nav aria-label="Social Media" className="social-wrapper">
    <a
      href="https://github.com/Coding-Coach/find-a-mentor"
      className="social-link"
      aria-label="GitHub"
      target="blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
      >
        <path
          fill="#9B9B9B"
          d="M1253.32321,77.2255727 C1252.20542,75.3103802 1250.68922,73.7941197 1248.7742,72.676449 C1246.85889,71.5587213 1244.76795,71 1242.49989,71 C1240.23211,71 1238.14048,71.5588923 1236.22557,72.676449 C1234.31038,73.7940627 1232.79423,75.3103802 1231.67645,77.2255727 C1230.55884,79.1407082 1230,81.2320509 1230,83.4995439 C1230,86.2233175 1230.79467,88.6726045 1232.38441,90.8480319 C1233.97398,93.0236304 1236.02747,94.5290597 1238.54471,95.3644908 C1238.83773,95.4188751 1239.05464,95.3806237 1239.19567,95.2507057 C1239.33676,95.1206168 1239.40722,94.957692 1239.40722,94.7626156 C1239.40722,94.7300648 1239.40443,94.4372221 1239.39901,93.8837454 C1239.39343,93.3302687 1239.39081,92.8474231 1239.39081,92.4354366 L1239.01644,92.5001961 C1238.77776,92.5439201 1238.47665,92.5624473 1238.11312,92.5572027 C1237.74976,92.5521291 1237.37254,92.5140487 1236.98199,92.4432465 C1236.59127,92.3730715 1236.22785,92.2103177 1235.89146,91.9553274 C1235.55523,91.700337 1235.31655,91.3665636 1235.17545,90.9545202 L1235.0127,90.579987 C1234.90422,90.3306403 1234.73343,90.0536455 1234.5001,89.7500285 C1234.26677,89.4461265 1234.03082,89.2401048 1233.79213,89.1316213 L1233.67818,89.0500449 C1233.60224,88.9958317 1233.53178,88.9304452 1233.46663,88.8545694 C1233.40152,88.7786937 1233.35278,88.7027609 1233.32023,88.6267142 C1233.28763,88.5506104 1233.31465,88.4881882 1233.40158,88.4392196 C1233.48852,88.390251 1233.64563,88.3664792 1233.8736,88.3664792 L1234.19899,88.4151058 C1234.41601,88.4586018 1234.68446,88.5885198 1235.00466,88.8056578 C1235.3247,89.0226248 1235.58778,89.3046932 1235.79398,89.6517492 C1236.04366,90.0967424 1236.34449,90.4358175 1236.6973,90.6691453 C1237.04983,90.9024732 1237.40527,91.0189376 1237.76327,91.0189376 C1238.12127,91.0189376 1238.43047,90.9918025 1238.69099,90.9378172 C1238.95123,90.883547 1239.19539,90.8019706 1239.42336,90.6935441 C1239.52101,89.9662544 1239.78689,89.4075331 1240.22076,89.0169811 C1239.60236,88.9519936 1239.04637,88.8541134 1238.55252,88.7239674 C1238.05896,88.5936504 1237.54892,88.382156 1237.02275,88.0889143 C1236.4963,87.7960716 1236.05957,87.4324267 1235.71246,86.9986068 C1235.36529,86.5645588 1235.08037,85.9947212 1234.8581,85.289607 C1234.63572,84.5842078 1234.5245,83.7704961 1234.5245,82.848244 C1234.5245,81.5350978 1234.95319,80.4176552 1235.81039,79.495289 C1235.40884,78.5080493 1235.44675,77.4013239 1235.92424,76.1752268 C1236.23891,76.0774605 1236.70557,76.150828 1237.32398,76.3948731 C1237.9425,76.6390322 1238.39536,76.8481892 1238.68301,77.0216032 C1238.97067,77.1949602 1239.20114,77.3418661 1239.37479,77.4610098 C1240.38409,77.1789983 1241.42565,77.0379641 1242.49977,77.0379641 C1243.57389,77.0379641 1244.61568,77.1789983 1245.62504,77.4610098 L1246.24351,77.0705718 C1246.66644,76.8100519 1247.16587,76.5713084 1247.74061,76.3542844 C1248.3157,76.1373744 1248.75544,76.0776315 1249.0594,76.1753978 C1249.54749,77.4015519 1249.59099,78.5082203 1249.18932,79.49546 C1250.04647,80.4178262 1250.47533,81.5355539 1250.47533,82.848415 C1250.47533,83.7706672 1250.36371,84.5869441 1250.14167,85.297759 C1249.91935,86.0086878 1249.63198,86.5779553 1249.27945,87.0067587 C1248.92652,87.4355051 1248.487,87.7962996 1247.96083,88.0890853 C1247.43455,88.382099 1246.92434,88.5935934 1246.43077,88.7239104 C1245.93698,88.8542274 1245.381,88.9521647 1244.76259,89.0172661 C1245.32661,89.5053563 1245.60868,90.2758 1245.60868,91.3282552 L1245.60868,94.7621595 C1245.60868,94.957236 1245.67652,95.1201037 1245.81231,95.2502497 C1245.94793,95.3801676 1246.1621,95.418419 1246.45512,95.3639778 C1248.9727,94.5286606 1251.02619,93.0231743 1252.6157,90.8475759 C1254.20504,88.6721484 1255,86.2228615 1255,83.4990879 C1254.99943,81.2318799 1254.44031,79.1407082 1253.32321,77.2255727 Z"
          transform="translate(-1230 -71)"
        />
      </svg>
    </a>
    <a
      href="https://www.facebook.com/codingcoachio/"
      className="social-link"
      aria-label="Facebook"
      target="blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
      >
        <path
          fill="#9B9B9B"
          d="M1302.63111,71 L1284.36882,71 C1282.50831,71 1281,72.508239 1281,74.3688 L1281,92.6310777 C1281,94.4916387 1282.50825,95.9998777 1284.36882,95.9998777 L1293.3757,95.9998777 L1293.39105,87.066274 L1291.07009,87.066274 C1290.76846,87.066274 1290.52365,86.8223823 1290.52249,86.5207589 L1290.51136,83.6410878 C1290.51019,83.3378132 1290.75574,83.091353 1291.05902,83.091353 L1293.37576,83.091353 L1293.37576,80.3088594 C1293.37576,77.0798018 1295.34788,75.3215554 1298.22843,75.3215554 L1300.59215,75.3215554 C1300.89457,75.3215554 1301.1398,75.5667314 1301.1398,75.8692109 L1301.1398,78.2973644 C1301.1398,78.5997216 1300.89475,78.8448364 1300.59245,78.8450199 L1299.14187,78.8456926 C1297.57534,78.8456926 1297.272,79.5900883 1297.272,80.6825249 L1297.272,83.0914141 L1300.71421,83.0914141 C1301.0422,83.0914141 1301.29667,83.3778095 1301.25802,83.7035285 L1300.9167,86.5831996 C1300.88405,86.8587703 1300.65037,87.0663963 1300.3729,87.0663963 L1297.28735,87.0663963 L1297.272,96 L1302.63124,96 C1304.49175,96 1306,94.491761 1306,92.6312612 L1306,74.3688 C1305.99994,72.508239 1304.49169,71 1302.63111,71 Z"
          transform="translate(-1281 -71)"
        />
      </svg>
    </a>
    <a
      href="https://twitter.com/codingcoach_io"
      className="social-link"
      aria-label="Twitter"
      target="blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="21"
        viewBox="0 0 25 21"
      >
        <path
          fill="#9B9B9B"
          d="M1355.60239,75.4108071 C1355.04693,75.6562674 1354.47032,75.8499143 1353.87865,75.9901079 C1354.5306,75.3727216 1355.02078,74.6005028 1355.29732,73.7385675 L1355.29732,73.7385675 C1355.37626,73.4924998 1355.10807,73.279719 1354.8851,73.4114694 L1354.8851,73.4114694 C1354.062,73.8980164 1353.17538,74.2630178 1352.24982,74.496451 C1352.19612,74.5099966 1352.14071,74.5168605 1352.08512,74.5168605 C1351.91653,74.5168605 1351.75263,74.454478 1351.62371,74.3412541 C1350.63896,73.4763423 1349.37243,73 1348.0575,73 C1347.48851,73 1346.91403,73.0883803 1346.34997,73.2627111 C1344.60234,73.8028937 1343.25389,75.2395134 1342.83081,77.0119781 C1342.67209,77.6768043 1342.62912,78.3422378 1342.703,78.9897523 C1342.71147,79.0641618 1342.67618,79.1160966 1342.65442,79.1404544 C1342.6162,79.1831563 1342.56201,79.2076355 1342.50575,79.2076355 C1342.49948,79.2076355 1342.49301,79.2073318 1342.48661,79.2067244 C1338.66111,78.8525351 1335.21144,77.0158657 1332.77303,74.0351121 L1332.77303,74.0351121 C1332.64869,73.8830738 1332.41024,73.9017217 1332.31113,74.0711324 L1332.31113,74.0711324 C1331.83363,74.8875109 1331.58128,75.8212439 1331.58128,76.7713773 C1331.58128,78.2274953 1332.16832,79.599728 1333.18799,80.6000955 C1332.75919,80.4987771 1332.34417,80.3392066 1331.95864,80.1258184 L1331.95864,80.1258184 C1331.77213,80.0225562 1331.54264,80.1552785 1331.54002,80.3678771 L1331.54002,80.3678771 C1331.51332,82.5310372 1332.78418,84.455844 1334.68798,85.322578 C1334.64964,85.3234892 1334.6113,85.3239144 1334.5729,85.3239144 C1334.27112,85.3239144 1333.96557,85.2948795 1333.66483,85.2375994 L1333.66483,85.2375994 C1333.45478,85.1976308 1333.27833,85.3961979 1333.34354,85.5991384 L1333.34354,85.5991384 C1333.96148,87.5216977 1335.62256,88.9388191 1337.61035,89.2605719 C1335.9606,90.3642015 1334.03944,90.9463571 1332.03989,90.9463571 L1331.41653,90.9459927 C1331.22447,90.9459927 1331.06203,91.0707577 1331.01308,91.2561436 C1330.96487,91.4387354 1331.05368,91.6313497 1331.21746,91.7262902 C1333.47063,93.0330425 1336.0407,93.7236842 1338.65093,93.7236842 C1340.93574,93.7236842 1343.07298,93.2718211 1345.00335,92.3807294 C1346.77298,91.5638041 1348.33678,90.3960305 1349.65129,88.909845 C1350.87582,87.525403 1351.83339,85.9272084 1352.49728,84.1597246 C1353.13015,82.4749112 1353.46466,80.6771776 1353.46466,78.9608389 L1353.46466,78.8790796 C1353.4646,78.6034911 1353.58968,78.3441816 1353.80789,78.167664 C1354.63593,77.4976748 1355.357,76.7089948 1355.95098,75.8235521 L1355.95098,75.8235521 C1356.10781,75.5897544 1355.86046,75.2967328 1355.60239,75.4108071 L1355.60239,75.4108071 Z"
          transform="translate(-1331 -73)"
        />
      </svg>
    </a>
    <a
      href="https://coding-coach.slack.com/join/shared_invite/enQtNDYxNTcwMjk4MDcwLThiZjY1MTM2YTU1YzM2MGI1N2Y1NDI3ZGM1MGRhNjdiZjU0MzE1YjMxZjdlZmVlNDdhNmFhN2RhNGIxZmE1YTI"
      className="social-link"
      aria-label="Slack"
      target="blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
      >
        <path
          fill="#9B9B9B"
          d="M5.2016129 15.6451613C5.2016129 17.0766129 4.03225806 18.2459677 2.60080645 18.2459677 1.16935484 18.2459677-3.68594044e-14 17.0766129-3.68594044e-14 15.6451613-3.68594044e-14 14.2137097 1.16935484 13.0443548 2.60080645 13.0443548L5.2016129 13.0443548 5.2016129 15.6451613zM6.51209677 15.6451613C6.51209677 14.2137097 7.68145161 13.0443548 9.11290323 13.0443548 10.5443548 13.0443548 11.7137097 14.2137097 11.7137097 15.6451613L11.7137097 22.1572581C11.7137097 23.5887097 10.5443548 24.7580645 9.11290323 24.7580645 7.68145161 24.7580645 6.51209677 23.5887097 6.51209677 22.1572581L6.51209677 15.6451613zM9.11290323 5.2016129C7.68145161 5.2016129 6.51209677 4.03225806 6.51209677 2.60080645 6.51209677 1.16935484 7.68145161 5.77315973e-15 9.11290323 5.77315973e-15 10.5443548 5.77315973e-15 11.7137097 1.16935484 11.7137097 2.60080645L11.7137097 5.2016129 9.11290323 5.2016129zM9.11290323 6.51209677C10.5443548 6.51209677 11.7137097 7.68145161 11.7137097 9.11290323 11.7137097 10.5443548 10.5443548 11.7137097 9.11290323 11.7137097L2.60080645 11.7137097C1.16935484 11.7137097 2.88657986e-14 10.5443548 2.88657986e-14 9.11290323 2.88657986e-14 7.68145161 1.16935484 6.51209677 2.60080645 6.51209677L9.11290323 6.51209677zM19.5564516 9.11290323C19.5564516 7.68145161 20.7258065 6.51209677 22.1572581 6.51209677 23.5887097 6.51209677 24.7580645 7.68145161 24.7580645 9.11290323 24.7580645 10.5443548 23.5887097 11.7137097 22.1572581 11.7137097L19.5564516 11.7137097 19.5564516 9.11290323zM18.2459677 9.11290323C18.2459677 10.5443548 17.0766129 11.7137097 15.6451613 11.7137097 14.2137097 11.7137097 13.0443548 10.5443548 13.0443548 9.11290323L13.0443548 2.60080645C13.0443548 1.16935484 14.2137097 4.4408921e-16 15.6451613 4.4408921e-16 17.0766129 4.4408921e-16 18.2459677 1.16935484 18.2459677 2.60080645L18.2459677 9.11290323zM15.6451613 19.5564516C17.0766129 19.5564516 18.2459677 20.7258065 18.2459677 22.1572581 18.2459677 23.5887097 17.0766129 24.7580645 15.6451613 24.7580645 14.2137097 24.7580645 13.0443548 23.5887097 13.0443548 22.1572581L13.0443548 19.5564516 15.6451613 19.5564516zM15.6451613 18.2459677C14.2137097 18.2459677 13.0443548 17.0766129 13.0443548 15.6451613 13.0443548 14.2137097 14.2137097 13.0443548 15.6451613 13.0443548L22.1572581 13.0443548C23.5887097 13.0443548 24.7580645 14.2137097 24.7580645 15.6451613 24.7580645 17.0766129 23.5887097 18.2459677 22.1572581 18.2459677L15.6451613 18.2459677z"
        />
      </svg>
    </a>
    <a
      href="https://www.patreon.com/codingcoach_io"
      className="social-link"
      aria-label="Patreon"
      target="blank"
    >
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="25" height="25" viewBox="0 0 100 96"
    >
      <g id="Alpha-Iteration-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Patreon_Mark_Black" fill="#9B9B9B">
              <path d="M64.1102,0.1004 C44.259,0.1004 28.1086,16.2486 28.1086,36.0986 C28.1086,55.8884 44.259,71.989 64.1102,71.989 C83.9,71.989 100,55.8884 100,36.0986 C100,16.2486 83.9,0.1004 64.1102,0.1004" id="Path"></path>
              <polygon id="Path" points="0.012 95.988 17.59 95.988 17.59 0.1 0.012 0.1"></polygon>
          </g>
      </g>
    </svg>
    </a>
  </nav>
);

export default SocialLinks;
