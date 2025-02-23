export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto w-full px-4 xl:px-8">
      {children}
    </div>
  );
}
