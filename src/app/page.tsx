"use client";

import Select from "react-select";

import useData from "./useData";
import { useEffect, useState } from "react";

function Home() {
  const { data, loading, error, success, save } = useData();

  const [selected, setSelected] = useState("");
  const [confirming, setConfirming] = useState(false);

  const [family, setFamily] = useState<Post[]>([]);

  const familyId = selected
    ? data.find((el) => el.nombre === selected)!.familia
    : null;

  useEffect(() => {
    if (familyId) {
      const familyData = getFamily(data, familyId);
      setFamily(familyData);
    } else {
      setFamily([]);
    }
  }, [data, familyId]);

  function toggleValue(col: "asiste" | "vegetariano" | "celiaco", el: Post) {
    const newFamily = family.map((current) => {
      if (current.nombre === el.nombre) {
        return { ...el, [col]: current[col] === "si" ? "no" : "si" };
      }
      return current;
    });
    setFamily(newFamily);
  }

  async function confirm() {
    setConfirming(false);
    await save(family);
  }

  const familyOriginalData = familyId ? getFamily(data, familyId) : [];

  const touched =
    familyOriginalData.length === family.length &&
    family.find((el) => {
      return familyOriginalData.find((orig) => {
        return orig.nombre === el.nombre &&
          (`${orig.asiste}` !== `${el.asiste}` ||
            `${orig.celiaco}` !== `${el.celiaco}` ||
            `${orig.vegetariano}` !== `${el.vegetariano}`)
          ? true
          : false;
      });
    })
      ? true
      : false;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-20">
      <div className="items-center justify-between font-mono text-sm lg:flex">
        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">
            {success
              ? "GRACIAS POR CONFIRMAR TU ASISTENCIA"
              : error
              ? "HUBO UN ERROR AL INTENTAR GUARDAR LOS DATOS, POR FAVOR MANDALE UN MENSAJE DE WHATSAPP A GISE"
              : "Confirmá tu asistencia en el cumple de 15 de MARTU"}
          </code>
        </p>
      </div>

      {loading && (
        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Cargando...</code>
        </p>
      )}

      {!loading && !confirming && !success && !error && (
        <>
          {!!data.length && (
            <div className="relative flex place-items-center">
              <Select
                className="basic-single"
                onChange={(value) => setSelected(value?.value || "")}
                styles={{
                  input: (baseStyles) => ({
                    ...baseStyles,
                    minWidth: "200px",
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    color: "black",
                  }),
                }}
                options={data.map((el) => {
                  return { value: el.nombre, label: el.nombre };
                })}
              />
            </div>
          )}

          {selected && (
            <button
              className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
              onClick={() => setConfirming(true)}
            >
              CONFIRMAR ASISTENCIA
            </button>
          )}
        </>
      )}

      {!loading && confirming && !success && !error && (
        <div className="flex flex-col justify-start gap-2">
          {family.map((el, index) => {
            return (
              <div
                className="flex flex-row justify-between gap-8 border-b border-gray-300 bg-gradient-to-b pt-4 pb-4"
                key={`${el.nombre}-${index}`}
              >
                <div>
                  <label>{el.nombre}</label>
                </div>

                <div className="flex flex-row justify-evenly gap-6">
                  <div className="flex flex-col justify-start gap-2">
                    <div>
                      <label>Asistirá</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="asistira"
                        value={el.asiste}
                        checked={el.asiste === "si"}
                        onChange={() => toggleValue("asiste", el)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start gap-2">
                    <div>
                      <label>Vegetariano</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="vegetariano"
                        disabled={el.asiste !== "si"}
                        value={el.vegetariano}
                        checked={el.vegetariano === "si"}
                        onChange={() => toggleValue("vegetariano", el)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start gap-2">
                    <div>
                      <label>Sin TACC</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="sintacc"
                        disabled={el.asiste !== "si"}
                        value={el.celiaco}
                        checked={el.celiaco === "si"}
                        onChange={() => toggleValue("celiaco", el)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            disabled={!touched}
            className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
            onClick={confirm}
          >
            CONFIRMAR
          </button>
        </div>
      )}
    </main>
  );
}

export default Home;

function getFamily(elements: Post[], id: number): Post[] {
  return elements.filter((el) => el.familia === id).map(mapFamily);
}

function mapFamily(el: Post): Post {
  return {
    ...el,
    asiste: el.asiste ? el.asiste : "no",
    celiaco: el.celiaco ? el.celiaco : "no",
    vegetariano: el.vegetariano ? el.vegetariano : "no",
  };
}
