/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Martina from "./Martina";

type Props = {
  family: Post[];
  toggleValue: (key: "asiste" | "vegetariano" | "celiaco", el: Post) => any;
  touched: boolean;
  confirm: () => any;
};

function PeopleList({ family, toggleValue, touched, confirm }: Props) {
  return (
    <div className="text-black w-full h-full flex flex-col justify-center gap-4 text-center relative">
      <p className="text-4xl font-['ChopinScript'] mb-4">
        Confirmar asistencia
      </p>

      <p className="text-sm text-left font-['LibreBaskerville']">
        Seleccioná tus condiciones alimentarias y asistencia:
      </p>

      <div className="flex flex-col justify-start gap-4 max-h-[30%] mb-4 overflow-auto mt-4">
        {family.map((el, index) => {
          return (
            <div className="text-left" key={`${el.nombre}-${index}`}>
              <p
                className={`p-2 border-2 inline-block w-full max-w-[65%] font-['LibreBaskerville'] text-sm ${
                  el.asiste === "si" ? "border-green-700" : "border-gray-200"
                }
                    ${el.asiste === "si" ? "bg-gray-300" : "bg-gray-200"}
                    `}
              >
                {el.nombre}
              </p>

              <img
                src={
                  el.asiste === "si"
                    ? "/img/selected.png"
                    : "/img/not-selected.png"
                }
                className="w-[30px] h-[30px] inline-block ml-2"
                onClick={() => toggleValue("asiste", el)}
              />

              {el.asiste === "si" && (
                <img
                  src={
                    el.vegetariano === "si"
                      ? "/img/veggie-selected.png"
                      : "/img/veggie-not-selected.png"
                  }
                  className={`w-[25px] h-[30px] inline-block ml-2 ${
                    el.vegetariano === "si"
                      ? "border-b-[2px] border-b-red-700 pb-1"
                      : ""
                  }`}
                  onClick={() => toggleValue("vegetariano", el)}
                />
              )}

              {el.asiste === "si" && (
                <img
                  src={
                    el.celiaco === "si"
                      ? "/img/sintac-selected.png"
                      : "/img/sintac-not-selected.png"
                  }
                  className={`w-[30px] h-[30px] inline-block ml-2 ${
                    el.celiaco === "si"
                      ? "border-b-[2px] border-b-red-700 pb-1"
                      : ""
                  }`}
                  onClick={() => toggleValue("celiaco", el)}
                />
              )}
            </div>
          );
        })}
      </div>

      <button
        disabled={!touched}
        className={`p-2 pl-4 pr-4 font-['LibreBaskerville'] text-2xl bg-gray-300 w-fit ml-auto mr-auto ${
          touched ? "" : "text-gray-400"
        }`}
        onClick={confirm}
      >
        CONFIRMAR
      </button>

      <div className="absolute bottom-10 ml-auto mr-auto left-0 right-0">
        <Martina />
      </div>
    </div>
  );
}

export default PeopleList;
