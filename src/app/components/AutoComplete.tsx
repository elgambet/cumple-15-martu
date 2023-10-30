import Select from "react-select";
import Martina from "./Martina";

type Props = {
  data: Post[];
  setSelected: (value: string) => any;
  selected: string;
  setConfirming: (value: boolean) => any;
};

function AutoComplete({ data, setSelected, selected, setConfirming }: Props) {
  return (
    <div className="text-black w-full h-full flex flex-col justify-center gap-8 text-center relative">
      <p className="text-4xl font-['ChopinScript'] mb-8">
        Confirmar asistencia
      </p>

      <div className=" flex flex-col gap-2 items-start pl-2 pr-2">
        <p className="text-lg font-['LibreBaskerville']">
          Escribí y seleccioná tu nombre:
        </p>
        {!!data.length && (
          <Select
            className="basic-single w-full text-left font-['LibreBaskerville']"
            placeholder=""
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
        )}
      </div>

      {selected && (
        <button
          className="p-2 pl-4 pr-4 font-['LibreBaskerville'] text-2xl bg-gray-300 w-fit ml-auto mr-auto"
          onClick={() => setConfirming(true)}
        >
          SIGUIENTE
        </button>
      )}

      <div className="absolute bottom-10 ml-auto mr-auto left-0 right-0">
        <Martina />
      </div>
    </div>
  );
}

export default AutoComplete;
