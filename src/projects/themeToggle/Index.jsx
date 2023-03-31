import React from "react";
import { useState } from "react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={darkMode && "dark"}>
      <div className="min-h-screen dark:bg-slate-900 transition">
        <div className="flex-center-center">
          <button
            className="my-10 px-4 py-1 shadow-normal rounded-full dark:text-slate-600 text-slate-100 bg-slate-800 dark:bg-slate-100"
            onClick={toggleDarkMode}
          >
            <i
              className={`mr-2 ${darkMode ? "feather-sun" : "feather-moon"}`}
            ></i>
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
        <div className="max-w-[600px] w-[90%] mx-auto my-10 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-100 rounded-lg dark:ring ring-slate-700 transition">
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa
            velit. Asperiores, nemo? Reiciendis sunt explicabo repudiandae
            voluptatum nostrum atque architecto, corrupti vitae, officiis soluta
            placeat expedita sequi maiores ipsum omnis! Inventore aliquam itaque
            quisquam doloremque fuga, ipsa adipisci, corporis velit laborum
            asperiores dolore maxime neque vero blanditiis suscipit tempore,
            expedita fugit harum ea excepturi magnam. Distinctio sapiente amet
            aperiam excepturi debitis, obcaecati repellat repellendus ut harum
            quod esse illum nesciunt iusto eveniet unde beatae, neque cumque
            laudantium. Asperiores eligendi facilis earum nostrum perspiciatis
            cumque repellendus deserunt dolore, ipsum laboriosam veniam,
            voluptatem necessitatibus quia officiis dolores beatae illo itaque
            sint nam nulla voluptatum dignissimos? Aperiam, neque aliquid
            dolorum,
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
