/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Martina from "./Martina";

type Props = {
  setInNextScreen: (inNext: boolean) => any;
};
function Welcome({ setInNextScreen }: Props) {
  return (
    <div className="text-black w-full h-full flex flex-col justify-center gap-8 text-center">
      <Martina />

      <p className="text-lg font-['LibreBaskerville']">
        ¡Te invito a festejar mi cumpleaños!
      </p>

      <div className="grid grid-cols-2 ml-6 mr-6">
        <div className="border-l-[1px] border-l-black">
          <p className="text-2xl font-['LibreBaskerville'] font-light">15</p>
          <p className="text-xl font-['LibreBaskerville'] font-bold">
            Diciembre
          </p>
        </div>
        <div className="border-l-[1px] border-l-black border-r-[1px] border-r-black">
          <p className="text-2xl font-['LibreBaskerville'] font-light">21</p>
          <p className="text-xl font-['LibreBaskerville'] font-bold">Horas</p>
        </div>
      </div>
      <div>
        <p className="text-lg font-['LibreBaskerville'] flex flex-row justify-center gap-2">
          Av. Díaz Vélez 1497, Ramos Mejía{" "}
          <a href="https://maps.app.goo.gl/TPcKnZ4SgEgY7viN8" target="_blank">
            <img src="/img/google-maps.png" className="w-[25px] h-[25px]" />
          </a>
        </p>
        <p className="text-lg font-['LibreBaskerville']">Isili Recepciones</p>
      </div>
      <div>
        <button
          onClick={() => setInNextScreen(true)}
          className="text-lg font-['LibreBaskerville'] bg-gray-300 border-green-700 border-[2px] p-2"
        >
          ¡Click para confirmar asistencia!
        </button>
      </div>

      <div className="max-w-md ml-auto mr-auto">
        <p className="text-lg font-['LibreBaskerville'] mb-2">
          El mejor regalo es tu asistencia, pero si querés tener un detalle te
          dejo mí Alias ☺️
        </p>
        <p>
          <strong>martu.garcia.gam</strong>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
