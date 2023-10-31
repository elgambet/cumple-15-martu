/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
type Props = {
  success: boolean;
  error: boolean;
};

function End({ success, error }: Props) {
  return (
    <div className="text-black w-full h-full flex flex-col justify-center gap-8 text-center relative">
      <p className="text-6xl font-['ChopinScript'] mb-8">
        {success ? "Felicitaciones" : "Disculpas"}
      </p>
      <p className="text-xl font-['LibreBaskerville'] mb-8 w-[250px] text-center ml-auto mr-auto">
        {success
          ? "Ya confirmaste todo para los 15 de Martu"
          : "Hubo un problema al intentar guardar los datos, por favor mandale un mensaje de whatsapp a Gise"}
      </p>
      <div className="bg-gray-300 ml-auto mr-auto relative w-[300px] h-[30px]">
        <p className="absolute text-5xl font-['ChopinScript'] left-0 right-0 mr-auto ml-auto bottom-0">
          Te esperamos
        </p>
      </div>

      <div className="mt-8">
        <p className="text-lg font-['LibreBaskerville'] flex flex-row justify-center gap-2">
          Av. Díaz Vélez 1497{" "}
          <a href="https://maps.app.goo.gl/TPcKnZ4SgEgY7viN8" target="_blank">
            <img src="/img/google-maps.png" className="w-[25px] h-[25px]" />
          </a>
        </p>
        <p className="text-lg font-['LibreBaskerville']">Isili Recepciones</p>
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

export default End;
