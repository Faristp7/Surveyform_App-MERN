import Theme from "../Theme/Theme";

export default function AdminLogin() {
  document.title = "Login";
  return (
    <div className="bg-white dark:bg-black">
      <div className="relative">
        <Theme />
        <h1 className="uppercase text-3xl sm:text-6xl font-bold absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-20 sm:top-10 dark:text-white">
          Admin Login
        </h1>
      </div>
      <div className="flex justify-center items-center align-middle h-screen">
        <div className="border-2">login</div>
      </div>
    </div>
  );
}
