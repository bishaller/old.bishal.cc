/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react";
const SvgSprite = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="svgSprite"
  >
    <symbol id="icon-about" viewBox="0 0 40 40">
      <g fill="none" fillRule="evenodd">
        <path d="m0 0h40v40h-40z" />
        <path
          d="m22.9333333 31.119913c.8 0 1.5333334.3005592 2.1.8682821 1.2333334 1.2690276 2.9 1.9035415 4.9333334 1.9035415.5666666 0 1 .434141 1 1.0018639s-.4333334 1.0018639-1 1.0018639c-3.2333334 0-5.2333334-1.3358185-6.3666667-2.4712643-.2333333-.2337683-.5-.3005592-.6666667-.2671638-.2666666 0-.5666666.1335819-.7666666.3339547-2.4333334 2.5046598-5.7333334 4.241224-9.2666667 4.8423423h-.1333333c-.4666667 0-.9-.3339546-1-.8348866-.1-.5343274.2666666-1.0686548.8-1.1688412 3.1333333-.5343275 6.0333333-2.0705188 8.1666666-4.2746195.5194445-.5510251 1.2349537-.8775586 1.9924769-.9281542zm-2.8-12.5566946c1.6.0667909 2.8666667 1.4694004 2.8666667 3.1391736 0 7.0798385-5.7666667 12.8572539-12.8666667 12.8572539h-.79999997c-.56666666 0-1-.4341411-1-1.001864s.43333334-1.0018639 1-1.0018639h.79999997c6 0 10.8666667-4.8757378 10.8666667-10.8869214 0-.6011184-.4333333-1.1354458-.9666667-1.1354458h-.0333333c-.3333333 0-.5666667.1669773-.7.2671637-.0666667.0667909-.2.2337683-.2666667.434141-.0333333.1001864-.0333333.2003728-.0333333.3005592 0 .5677229-.4333333 1.001864-1 1.001864s-1-.4341411-1-1.001864c0-.3005592.0333333-.5677229.1333333-.8348866.2-.6345138.5333334-1.0686548.8-1.3024231.3333334-.3339546 1.0666667-.8682821 2.2-.8348866zm5.8666667 4.3748058c.5666667 0 1 .4341411 1 1.001864v2.9388008c0 1.6697733 1.3333333 3.0055918 3 3.0055918h2c.5666667 0 1 .4341411 1 1.001864s-.4333333 1.0018639-1 1.0018639h-2c-2.7666667 0-5-2.2374961-5-5.0093197v-2.9388008c0-.5677229.4333333-1.001864 1-1.001864zm-8.3666667 1.2022368c.5.2337682.7.8348866.4666667 1.3358185-1.5333333 3.1391737-4.6333333 5.0761106-8.1 5.0761106h-2.66666667c-.56666666 0-1-.434141-1-1.0018639s.43333334-1.0018639 1-1.0018639h2.66666667c2.7 0 5.1-1.5027959 6.3-3.9406648.2333333-.500932.8333333-.7013048 1.3333333-.4675365zm12.0666667-7.8145387c.8666667 1.6029823 1.3 3.4063373 1.3 5.2096924v5.3432743c0 .5677229-.4333333 1.001864-1 1.001864s-1-.4341411-1-1.001864v-5.3432743c0-1.4694004-.3666667-2.9388008-1.0666667-4.241224-.2666666-.5009319-.0666666-1.1020503.4-1.369214.5-.2671637 1.1-.0667909 1.3666667.4007456zm5 9.4509164c.2.2003728.3.434141.3.7013048 0 .2671637-.1.5343274-.3.7013047-.1666667.2671637-.4333333.3673501-.7.3673501-.0666667 0-.1333333 0-.2-.0333954-.0666667 0-.1333333-.0333955-.2-.066791-.0666667-.0333954-.1-.0667909-.1666667-.1001864-.0666666-.0333954-.1-.0667909-.1666666-.1335818-.2-.2003728-.3-.4341411-.3-.7013048s.1-.5343274.3-.7013047c.0333333-.0333955.1-.1001864.1666666-.1335819.0666667-.0333955.1-.0667909.1666667-.1001864.0666667-.0333954.1333333-.0333954.2-.0667909.3333333-.0667909.6666667.0333955.9.2671637zm-16.9666667-9.8850575c.3.4675365.1333334 1.1020504-.3333333 1.3692141-1.5.9016775-2.4 2.5046598-2.4 4.2746194 0 2.7718236-2.2333333 5.0093197-5 5.0093197h-3.33333333c-.56666667 0-1-.434141-1-1.0018639s.43333333-1.001864 1-1.001864h3.33333333c1.6666667 0 3-1.3358186 3-3.0055918 0-2.4712643 1.2666667-4.7087605 3.3666667-5.9777881.4666666-.3005592 1.1-.1335819 1.3666666.3339546zm2.2666667-9.38412547c3.5152107 0 6.8552319 1.2091112 9.5143106 3.40379149.0231957.01996279.0468056.03948777.0703483.05907785.0503716.04144603.1000169.08349083.1494153.12588353.0597698.0511486.1190355.1025817.1778519.1544331.0145464.0135325.0294964.0268295.0444226.0401591 3.1887649 2.833007 5.0436513 6.9006903 5.0436513 11.2446139v1.001864c0 .5677229-.4333333 1.0018639-1 1.0018639s-1-.434141-1-1.0018639v-1.001864c0-2.9153338-.9619968-5.6951346-2.684116-7.9349013-.042791-.0346246-.08087-.0724798-.115884-.1134056-.5131161-.659958-1.0810439-1.2606669-1.6947818-1.7982187-.3905492-.3356795-.8038583-.6498737-1.2385515-.9402094-.0477273-.030739-.0916194-.0649711-.1316405-.1021603-2.0873787-1.38552415-4.5557642-2.1353358-7.1350262-2.1353358-1 0-2.0333333.13358186-3 .36735011-.5333333.13358185-1.0666667-.20037279-1.2-.73470022s.2-1.06865486.7333333-1.20223672c1.1333334-.30055918 2.3-.43414104 3.4666667-.43414104zm-8.1666667 9.15035727c.4666667.2671637.6333334.9016775.3666667 1.369214-.8 1.3692141-1.2 2.9388009-1.2 4.5083877 0 .5677229-.4333333 1.001864-1 1.001864-.56666667 0-1-.4341411-1-1.001864 0-1.9369369.5-3.8404784 1.4666667-5.5102516.2666666-.4675365.9-.6345138 1.3666666-.3673501zm1.9333334-6.71248837c.2666666.46753651.1333333 1.10205037-.3666667 1.36921407-1.4.8348866-2.6333333 1.9035414-3.63333333 3.1725691-.02838542.0455013-.06063835.0861592-.09610011.1223037-1.00223223 1.303659-1.75791852 2.7828151-2.20389989 4.386084-.33333334 1.1688413-.5 2.3376825-.5 3.5733147.03333333.5343274-.4.9684685-.96666667.9684685s-1-.4341411-1-1.001864c0-1.4026095.2-2.7718235.56666667-4.1076421.53969359-1.8654134 1.42891019-3.6432832 2.63228068-5.1741517.00005777-.0008479.00055477-.0014968.00105265-.0021453l.05228029-.0652817c.1985062-.24941.40541722-.4921378.6205779-.7274841 1.02087426-1.1255625 2.19658621-2.09179582 3.52714181-2.88073527.4666667-.26716372 1.1-.13358186 1.3666667.3673501zm7.2 5.67722897c2.6333333.3673501 4.8666666 2.304287 5.6666666 4.9425287.1666667.5343275-.1333333 1.1020503-.6666666 1.2690277-.0666667-.0333955-.1666667 0-.2666667 0-.4333333 0-.8333333-.2671637-.9666667-.7013048-.6-1.870146-2.1666666-3.2727555-4.0666666-3.5399192-.5333334-.0667909-.9333334-.6011184-.8333334-1.1354458.0666667-.5343274.6-.935073 1.1333334-.8348866zm-.9666667-4.1076421c2.3666667 0 4.6.7347002 6.5 2.1039142.4333333.3339547.5333333.9684685.2333333 1.4026095-.2333333.2671637-.5333333.4341411-.8333333.4341411-.2 0-.4-.066791-.6-.2003728-1.5333333-1.1354458-3.3666667-1.7365642-5.3-1.7365642-1.6333333 0-3.2666667.4341411-4.6333333 1.3024231-.4666667.3005592-1.1.1335819-1.3666667-.3339546-.3-.4675365-.1333333-1.1020503.3333333-1.369214 1.7-1.0686549 3.6666667-1.6029823 5.6666667-1.6029823zm0-8.0149115c3.3333333 0 6.6333333.86828208 9.5 2.5380553.4666667.26716371.6333333.90167754.3666667 1.36921404-.2666667.4675365-.9.63451382-1.3666667.36735011-2.5666667-1.46940044-5.5-2.27089158-8.5-2.27089158s-5.9333333.80149114-8.5 2.27089158c-.1666667.10018639-.3333333.13358185-.5.13358185-.3333333 0-.6666667-.16697732-.8666667-.50093196-.26666663-.4675365-.1-1.10205033.3666667-1.36921404 2.8666667-1.66977322 6.1666667-2.5380553 9.5-2.5380553z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </symbol>
    <symbol id="icon-work" viewBox="0 0 40 40">
      <g fill="none" fillRule="evenodd" transform="translate(.5)">
        <path d="m0 0h40v40h-40z" />
        <path
          d="m6.19765494 29.2328179c.50251256.2680412.70351759.871134.43551089 1.3402062l-.68376951 1.340087c-.02389335.0625396-.05396305.1218405-.08933601.177231l.03608709-.0765964c-.13400335.3350516-.50251256.5360825-.87102177.5360825-.12122014 0-.22489525-.0175473-.33641946-.0526419l.13541443.0191367c-.16750418-.0335051-.30150753-.0335051-.46901172-.0335051-1.30653267 0-2.34505863 1.0386598-2.34505863 2.3453608 0 .5695876-.43551089 1.0051546-1.00502512 1.0051546-.56951424 0-1.00502513-.435567-1.00502513-1.0051546 0-2.4123711 1.94304858-4.3556701 4.35510888-4.3556701l.08889112.0018247.41362144-.8059484c.2680067-.5025773.87102178-.7036083 1.3400335-.435567zm26.49916246 4.5902062-1.641541-3.25c-.2345059-.5025774-.0335009-1.1056701.4355109-1.3402062.5025125-.2345361 1.1055276-.0335052 1.3400335.435567l1.641541 3.25c.3015075.6365979.2680067 1.3737113-.1005025 1.9432989-.3350084.6030928-.9715243.9716495-1.6750419.9716495l-22.6089664-.0007777c-.0013652.0002621-.0027315.0005213-.0040989.0007777h-.20100503l-.01774707-.001-3.1648325.001c-.56951423 0-1.00502512-.435567-1.00502512-1.0051546s.43551089-1.0051546 1.00502512-1.0051546l1.9748325-.0006908-1.90783082-11.0560103c-.10050251-.6030928.06700167-1.1726804.43551089-1.6417526.36850921-.4690721.93802345-.7036082 1.54103852-.7036082h20.40201001c.6030151 0 1.1725294.2680412 1.5410386.7036082.3685092.4690722.5360134 1.0386598.4355109 1.6417526l-1.9382781 11.0560103zm7.0016751.2680412c.201005.2010309.3015075.435567.3015075.7036082 0 .2680413-.1005025.5360825-.3015075.7036083-.1340034.2345361-.4020101.3350515-.6700168.3350515s-.5360134-.1005154-.7035176-.3015464c-.0335008-.0335051-.1005025-.1005154-.1340033-.1675257-.0335009-.0670103-.0670017-.1005155-.1005025-.1675258-.0335009-.0670103-.0335009-.1340206-.0670017-.2010309 0-.0670103-.0335009-.1340207-.0335009-.201031 0-.2680412.1005026-.5360824.3015076-.7036082.3685092-.3685567 1.0385259-.3685567 1.4070352 0zm-10.5862647-11.6597938h-20.36850921l1.99628141 11.3910618h16.4zm-10.1842546 4.0206185c.9251001 0 1.6750419.7500385 1.6750419 1.6752578s-.7499418 1.6752577-1.6750419 1.6752577-1.6750419-.7500384-1.6750419-1.6752577.7499418-1.6752578 1.6750419-1.6752578zm0-23.11855667c4.2546064 0 7.7051926 3.45103093 7.7051926 7.70618557 0 4.2551546-3.4505862 7.7061856-7.7051926 7.7061856s-7.7051926-3.451031-7.7051926-7.7061856c0-4.25515464 3.4505862-7.70618557 7.7051926-7.70618557zm0 2.01030928c-3.1490787 0-5.6951424 2.54639175-5.6951424 5.69587629 0 3.1494845 2.5460637 5.6958763 5.6951424 5.6958763s5.6951424-2.5463918 5.6951424-5.6958763c0-3.14948454-2.5460637-5.69587629-5.6951424-5.69587629z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </symbol>
    <symbol id="icon-writings" viewBox="0 0 40 40">
      <g fill="none" fillRule="evenodd">
        <path d="m.5 0h40v40h-40z" />
        <path
          d="m18.0387798 0c-.2520883 0-.5000441.09983703-.6818783.29925186-.3967291.39882966-.3967291 1.03069947 0 1.39629332l2.0830864 2.09346616c-.8926406.36559385-2.2486484.83102507-3.8355651.96396828-2.2150712.19941483-5.1240311-.29912224-6.21503632-.49853706-.562033-.09970742-.92583068-.16630898-1.2894991.19928487-.09918229.09970742-.19810638.23252101-.23116715.36546423l-4.8932514 14.29139594c-.16530382.5317729.09931157 1.0970411.6282838 1.2632202.0991823.0332358.23142536.066212.33060765.066212.39672918 0 .79307089-.2658864.92531395-.6647161l4.62850707-13.49360702c1.3554914.23265063 4.1000512.66484605 6.3151225.46543122 1.7191598-.16617902 3.4712514-.66484604 5.1573504-1.46250535l2.1818812 2.19343348c-.7603976 1.4623754-1.2231191 3.02497737-1.3553621 4.68676757-.2314254 2.3929779.1979771 5.4504124.4294025 6.879552l-17.4556964 6.0486568 9.55469-9.6046283c.3967292-.3988297.3967292-1.0306995 0-1.3962933-.3967292-.3988297-1.0252712-.3988297-1.3889396 0l-12.53015883 12.5964998c-.26448611.2326507-.39647097.5316433-.39647097.8640013 0 .5650087.46285071 1.0635458.99182295.9970742.13224305 0 .23142535-.0329766.33060764-.0662124l22.28308441-7.7773079c.1322431-.0332358.2643572-.1326836.3635395-.232391.3636684-.3655939.3304787-.6984711.1982357-1.3631872-.1983646-1.1964889-.6613443-4.3536308-.4629797-6.7133729.0991823-1.196489.3972449-2.3262468.8600956-3.38979252l2.1153732 2.12657232c.1653039.0997074.3967292.199934.6612153.199934.2644862 0 .4964273-.099837.6947918-.2992519.3967292-.3655938.3967292-.9969445 0-1.36253833l-9.2905909-9.37288641c-.1983646-.19941483-.4543274-.29925186-.7064157-.29925186zm-2.4421058 28.1744838c-.1170685-.0057764-.2359454-.0027254-.3557907.009738-.9587622.0997075-1.751962.7311877-2.0495089 1.6617903l-.6941471 2.2265396c0 .0332358-.033319.0668605-.0994405.0668605s-.0994405-.0336247-.0994405-.0668605l-.2970305-.5647494c-.3636684-.6979519-1.0250126-1.1300174-1.7854102-1.1632532-.76039759-.0332358-1.48799295.3654643-1.9177829 1.0301804l-.95889111 1.1301469c-.36366842.4320655-.29728868 1.0632865.0994405 1.3956446.19836459.166179.42991921.2330395.6282838.2330395.26448611 0 .56164553-.1328136.76001012-.3654642l.99182294-1.1632532c.03306076-.0332358.06637973-.099837.0994405-.1330728.06612153-.0997075.13224305-.1330729.16530385-.1330729 0 0 .0328025-.0002592.0658633.0662124l.2976758.5653975c.3967292.7644235 1.190575 1.2297248 2.0501549 1.1632532s1.5869167-.6316099 1.8183421-1.462505l.6941471-2.2265397c.0661215-.2326506.2314254-.2661457.3306076-.2661457.0991823 0 .2642276-.0001296.3964707.1992852l.9918229 1.8948297c.4959115.9306026 1.3558789 1.5287174 2.3807626 1.6948965 1.0248837.166179 2.049251-.1664383 2.7765878-.9308618.3967292-.3988297.3967292-1.0300507 0-1.3956446-.2975469-.3988296-.9257014-.3988296-1.3224306 0-.2975469.2991223-.6608278.4319359-1.0906177.3654643-.3967292-.0664716-.7275954-.2991223-.92596-.6647161l-.9918229-1.8941816c-.4049944-.7561146-1.1389821-1.2325166-1.9584629-1.2729579zm-12.29059752 3.9980346c-.54776868 0-.99182294.4464053-.99182294.9970741 0 .5506689.44405426.9970742.99182294.9970742.54776869 0 .99182295-.4464053.99182295-.9970742 0-.5506688-.44405426-.9970741-.99182295-.9970741z"
          fill="currentColor"
          fillRule="nonzero"
          transform="translate(6.333333 2.5)"
        />
      </g>
    </symbol>
    <symbol id="icon-arrow" viewBox="0 0 18 12">
      <path
        fill="currentColor"
        d="m90.0432114 4.00074026c-.4062335-.0155959-.7831712.21639329-.9491804.58679574-.1679617.37040296-.0956991.80318903.1855394 1.0995112l3.0721405 3.31412948h-13.3371037c-.3613133-.00584859-.6952842.18325211-.8769173.49517018-.1835865.30996821-.1835865.69596704 0 1.00593574.1816331.3119181.515604.5010183.8769173.4951697h13.3371037l-3.0721405 3.3141295c-.2499898.2612316-.3378767.6355333-.2324125.9805926.1054647.3450592.3886562.6062908.7402044.6842703.3535011.0779796.7206737-.0409396.9608984-.3080193l5.2517393-5.6691109-5.2517393-5.6691109c-.1796802-.19884752-.4355293-.31971602-.7050493-.32946334z"
        transform="translate(-78 -4)"
      />
    </symbol>
    <symbol id="button-line">
        <path
          id="line"
          d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
    </symbol>
  </svg>
);

export default SvgSprite;
