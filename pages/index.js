import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section
        id="cards"
        className="bg-gray-50 py-14 min-h-screen flex flex-col justify-center items-center"
      >
        <h3 className="font-bold text-2xl md:text-5xl mb-8">Cards</h3>
        <div className="flex flex-col md:flex-row w-full justify-center">
          <Card />
          <Card />
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center">
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}
