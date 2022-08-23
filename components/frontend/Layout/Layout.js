import Footer from "../footers/FiveColumnWithInputForm";
import AnimationRevealPage from "../helpers/AnimationRevealPage";

export default function Layout({ children }) {
  return (
    <>
      <AnimationRevealPage>
        <main>{children}</main>
        <Footer />
      </AnimationRevealPage>
    </>
  );
}
