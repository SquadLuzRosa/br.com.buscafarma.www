// src/components/Main/Banner.jsx
const Banner = () => {
  return (
    <div className="w-full h-96 bg-cover bg-center relative flex flex-col items-center justify-center" style={{ backgroundImage: "url('/path/to/your/banner-background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-8 flex flex-col items-center">
        <img src="../../assets/logo.png" alt="Banner" className="w-32 h-32 mb-4 object-contain" />
        <h1 className="text-4xl font-bold">Bem-vindo ao BuscaFarma</h1>
        <p className="mt-2 text-lg">Encontre os melhores preços para seus medicamentos</p>
      </div>
    </div>
  );
};

export default Banner;
