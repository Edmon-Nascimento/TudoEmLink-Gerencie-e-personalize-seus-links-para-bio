import Header from "../../components/header";
import Input from "../../components/input";
import { useState } from "react";
import { FiTrash } from "react-icons/fi";

export default function Admin() {
  const [linkInput, setLinkInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#fff");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#000");

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
        <label className="text-white font-medium mt-2 mb-2">Link</label>
        <Input
          placeholder="Digite o link"
          value={linkInput}
          onChange={(e) => setLinkInput(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">Url</label>
        <Input
          type="url"
          placeholder="Digite a url"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-2 items-center">
            <label className="text-white font-medium mt-2 mb-2">
              Cor de fundo
            </label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="text-white font-medium mt-2 mb-2">
              Cor do texto
            </label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
        </section>

        {linkInput != "" && (
          <div className="flex flex-col gap-2 items-center justify-start p-1 mb-7 border-gray-100/25 border rounded-md">
            <label className="text-white font-medium mt-2 mb-2">
              Pré-visualização:
            </label>
            <div
              className=" w-11/12 max=w=lg flex flex-col items-center justify-between rounded px-1 py-3"
              style={{
                marginTop: 8,
                marginBottom: 8,
                backgroundColor: backgroundColorInput,
              }}
            >
              <p style={{ color: textColorInput }}>{linkInput}</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 h-9 rounded-md text-white font-medium flex justify-center items-center gap-4 mb-7"
        >
          Cadastrar
        </button>
      </form>

        <h2 className="font-bold text-white mb-4 text-2xl">
            Menus Links
        </h2>

        <section 
            className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
            style={{backgroundColor: "#fff", color:"#000"}}    
        >
            <p>Lorem ipsum dolor sit amet</p>
            <div>
                <button
                    className="border border-dashed p-1 rounded bg-neutral-900"
                >
                    <FiTrash size={20} color="#fff"/>
                </button>
            </div>
        </section>



    </div>
  );
}
