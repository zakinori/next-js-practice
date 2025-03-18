// import { Header } from "./components/Header";
import { HeadLine } from "./components/HeadLine";
// import { Links } from "./components/Links";
import { Profile } from "./components/Profile";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Header /> */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <HeadLine subtitle1="Get started by editing!!! "/>

        {/* <Links/>  */}

        <Profile imageUrl="画像を張り付ける予定..." description="--経歴の表示--" />
        <Profile imageUrl="画像を張り付ける予定..." description="--経歴の表示--" />
        <Profile imageUrl="画像を張り付ける予定..." description="--経歴の表示--" />
      </main>
      <Footer />
    </div>
  );
}
