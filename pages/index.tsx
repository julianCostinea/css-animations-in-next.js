import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import BoxReadMore from "@/components/BoxReadMore/BoxReadMore";
import BoxShadowHover from "@/components/BoxShadowHover/BoxShadowHover";
import BoxOverlay from "@/components/BoxOverlay/BoxOverlay";
import BoxOverlayZoom from "@/components/BoxOverlayZoom/BoxOverlayZoom";
import BoxOverlayZoomCenter from "@/components/BoxOverlayZoomCenter/BoxOverlayZoomCenter";
import MultiStepForm from "@/components/MultiStepForm/MultiStepForm";
import FormikForm from "@/components/FormikForm/FormikForm";
import LeetCode from "@/components/Leetcode/LeetCode";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>CSS Animations Demo</h1>
        <div className={styles.grid}>
          <BoxShadowHover />
          <BoxOverlayZoomCenter />
          <BoxOverlay />
          <BoxOverlayZoom />
        </div>
        <BoxReadMore
          mainText="Cillum aute mollit ullamco irure minim do velit deserunt.ugiat eu eu aliquip. Id esse ex minim eiusmod sit laborum sunt qui non qui."
          hiddenText="Labore deserunt nulla in dolor sunt ullamco amet Lorem in reprehenderit consequat qui dolor. Lorem elit elit ad est deserunt nisi sunt ad."
        />
        <MultiStepForm />
        <FormikForm />
        <LeetCode />
      </main>
    </div>
  );
}
