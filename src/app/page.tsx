import NavBarTop from './Components/NavBarTop';
import NavBarMain from './Components/NavBarMain';
import NavBarPromo from './Components/NavBarPromo'

export default function HomePage() {
  return (
    <>
      <NavBarTop />
      <NavBarMain />
      <NavBarPromo />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to AK47Fashion</h1>
      </main>
    </>
  );
}
