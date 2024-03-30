import { useState } from "react";

import DropDownList from "../../components/DropDownStackList/DropDownList.tsx";
import BnWCodeWindow from "../../components/BnWCodeWindow/BnWCodeWindow.tsx";
import { items } from "../../components/DropDownStackList/interfaces.ts";
import styles from "./StackNCodeSection.module.css";

const item: items[] = [
  {
    name: "React",
    iconPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/128px-React-icon.svg.png",
    nameToPass: "HelloWorld.jsx",
    code: `
      function HelloWorld() {
          return (
            <h1>Hello World!</h1>
          );
        }


        export default HelloWorld;`,
  },
  { name: "Node", iconPath: "https://www.svgrepo.com/show/452075/node-js.svg" },
  {
    name: "Express",
    iconPath: "./src/assets/express-svgrepo-com.svg",
    nameToPass: "helloWorld.js",
    code: `import express from 'express';

  const app = express();

  const port = 3000;

  app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
    }
    
    app.listen(port, () => {
      console.log('Server is running on port: ' + port);
    });
  `,
  },
  {
    name: "TypeScript",
    iconPath: "https://www.svgrepo.com/show/374146/typescript-official.svg",
    nameToPass: "helloWorld.ts",
    code: `console.log('Hello World!');`,
  },
  {
    name: "JavaScript",
    iconPath: "https://www.svgrepo.com/show/452045/js.svg",
    nameToPass: "helloWorld.js",
    code: `console.log('Hello World!');`,
  },
];

function StackNCodeSection() {
  const [language, setLanguage] = useState("helloWorld.js");
  const [code, setCode] = useState("console.log('Hello World!')");

  return (
    <section className={styles.stackSection}>
      <div className={styles.stackGrid}>
        <DropDownList
          title='Stack'
          itemsArray={item}
          setLanguage={setLanguage}
          setCode={setCode}
        />
        <BnWCodeWindow language={language} code={code} />
      </div>
    </section>
  );
}

export default StackNCodeSection;
