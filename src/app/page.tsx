import NavBarTop from './Components/NavBarTop';
import NavBarMain from './Components/NavBarMain';


export default function HomePage() {
  return (
    <>
      <NavBarTop />
      <NavBarMain />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to AK47Fashion</h1>
      </main>
    </>
  );
}
