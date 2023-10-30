/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import styles from "./loading.module.css";

function Loading() {
  const [per, setPer] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setPer((current) => {
        if (current < 100) {
          return current + 2;
        }
        return current;
      });
    }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
        // @ts-ignore
        timer = null;
      }
    };
  }, []);

  return (
    <div className="text-black w-full h-full flex flex-col justify-center gap-8 text-center relative">
      <p className="text-lg font-['LibreBaskerville'] bg-gray-300 p-2 w-fit pl-20 pr-20 ml-auto mr-auto">
        Cargando
      </p>
      <img
        src={"/cumple-15-martu/img/loading.png"}
        className={`w-[50px] h-[50px] ${styles["rotating-image"]} ml-auto mr-auto`}
      />

      <div
        style={{ minWidth: `${per}%` }}
        className={`w-fit h-[5px] bg-gray-400`}
      ></div>

      <p className="text-sm font-['LibreBaskerville'">
        Pronto vas a poder continuar confirmando tu asistencia al cumpleaños de
        Martu
      </p>
    </div>
  );
}

export default Loading;
