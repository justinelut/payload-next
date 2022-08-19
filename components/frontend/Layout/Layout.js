import Header from "../headers/light";
import Footer from "../footers/FiveColumnWithInputForm";
import AnimationRevealPage from "../helpers/AnimationRevealPage";

export default function Layout({ children }) {
  return (
    <>
      <AnimationRevealPage>
        <Header />
        <main>{children}</main>
        <Footer />
      </AnimationRevealPage>
    </>
  );
}
