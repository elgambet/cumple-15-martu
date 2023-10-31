/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import useData from "./useData";
import { useEffect, useState } from "react";

import Loading from "./components/Loading";
import Welcome from "./components/Welcome";
import AutoComplete from "./components/AutoComplete";
import PeopleList from "./components/PeopleList";
import End from "./components/End";

function Home() {
  const { data, error, loading, success, save, setSuccess } = useData();

  const [inNextScreen, setInNextScreen] = useState(false);

  const [selected, setSelected] = useState("");
  const [confirming, setConfirming] = useState(false);

  const [family, setFamily] = useState<Post[]>([]);

  const found = data.find((el) => el.nombre === selected);

  const familyId = found?.familia ?? null;

  useEffect(() => {
    if (familyId) {
      const familyData = getFamily(data, familyId);
      setFamily(familyData);
    } else {
      setFamily([]);
    }
  }, [data, familyId]);

  function onConfirm() {
    if (!!found && !!found.asiste) {
      setSuccess(true);
    } else {
      setConfirming(true);
    }
  }

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
    <main className="relative w-full h-screen max-w-2xl m-auto pl-4 pr-4 bg-white bg-cover bg-no-repeat bg-[url('../assets/img/fondos-solos-1.png')]">
      {!inNextScreen && <Welcome setInNextScreen={setInNextScreen} />}

      {inNextScreen && (success || error) && (
        <End success={success} error={error} />
      )}

      {inNextScreen && loading && <Loading />}

      {!loading && inNextScreen && !confirming && !success && !error && (
        <AutoComplete
          data={data}
          selected={selected}
          setConfirming={onConfirm}
          setSelected={setSelected}
        />
      )}

      {!loading && inNextScreen && confirming && !success && !error && (
        <PeopleList
          confirm={confirm}
          family={family}
          toggleValue={toggleValue}
          touched={touched}
        />
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
