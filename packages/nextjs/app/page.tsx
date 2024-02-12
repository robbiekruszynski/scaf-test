
import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-base-100">
      {/* Sidebar */}
      <div className="w-64 bg-base-200 p-5">
        <h2 className="text-xl font-bold mb-5">Menu</h2>
        <ul className="flex flex-col gap-4">
          {/* Updated Link usage */}
          <li><Link href="/option1" className="hover:text-primary">About</Link></li>
          <li><Link href="/option2" className="hover:text-primary">Option 2</Link></li>
          <li><Link href="/option3" className="hover:text-primary">Option 3</Link></li>
          <li><Link href="/option4" className="hover:text-primary">Option 4</Link></li>
          <li><Link href="/option5" className="hover:text-primary">Option 5</Link></li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-grow">
        <div className="px-5 pt-10">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Blast hack</span>
          </h1>
        </div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card bg-base-200 shadow-xl p-4">
              <h2 className="card-title">Section 1</h2>
              <p>Content for section 1...</p>
            </div>
            <div className="card bg-base-200 shadow-xl p-4">
              <h2 className="card-title">Section 2</h2>
              <p>Content for section 2...</p>
            </div>
            <div className="card bg-base-200 shadow-xl p-4">
              <h2 className="card-title">Section 3</h2>
              <p>Content for section 3...</p>
            </div>
          </div>
          <footer className="text-center mt-8">
            <p>© 2024 Dashboard. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
