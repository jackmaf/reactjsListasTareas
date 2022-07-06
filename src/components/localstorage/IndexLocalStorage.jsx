// Cargas de librerias
import { Code } from '@mantine/core';
// Carga de componentes hijos
// Carga de otros elementos (CSS, IMAGES)

function IndexLocalStorage() {
  return (
    <>
      <h1>LOCALSTORAGE</h1>
      <h3>1. JSON.stringify()</h3>
      <p>convertir a string variables objectos u etc</p>
      <a href='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify'>
        Documentación Mozilla
      </a>
      <p>ejemplo:</p>
      <Code>JSON.stringify([&apos;jack&apos;, &apos;luis&apos;]);</Code>
      <p>resultado:</p>
      <Code>&apos;[&quot;jack&quot;, &quot;luis&quot;]&apos;</Code>
      <h3>2. JSON.parse()</h3>
      <p>convertir de string a variables objectos u etc</p>
      <a href='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse'>
        Documentación Mozilla
      </a>
      <p>ejemplo:</p>
      <Code>JSON.parse(&apos;[&quot;jack&quot;, &quot;luis&quot;]&apos;);</Code>
      <p>resultado:</p>
      <Code>[&apos;jack&apos;, &apos;luis&apos;]</Code>
      <h3>3. CREAR LOCALSTORAGE</h3>
      <p>crear un elemento de localstorage</p>
      <a href='https://developer.mozilla.org/es/docs/Web/API/Window/localStorage'>
        Documentación Mozilla
      </a>
      <p>ejemplo:</p>
      <Code>localStorage.setItem(&apos;llave&apos;, &apos;valor&apos;);</Code>
      <br />
      <Code>
        localStorage.setItem(&apos;tareas&apos;,
        JSON.stringify([&apos;almorzar&apos;, &apos;trabajar&apos;,
        &apos;dormir&apos;]));
      </Code>
      <h3>4. TOMAR DATOS LOCALSTORAGE</h3>
      <p>tomar un elemento de localstorage</p>
      <p>ejemplo:</p>
      <Code>let a = JSON.parse(localStorage.getItem(&apos;llave&apos;));</Code>
      <br />
      <Code>let b = JSON.parse(localStorage.getItem(&apos;tareas&apos;));</Code>
      <h3>5. ELIMINAR UN DATO LOCALSTORAGE</h3>
      <p>
        La sintaxis para eliminar el ítem almacenado en localStorage es la
        siguiente:
      </p>
      <p>ejemplo:</p>
      <Code>let a = localStorage.removeItem(&apos;llave&apos;);</Code>
      <br />
      <Code>let b = localStorage.removeItem(&apos;tareas&apos;);</Code>
      <h3>6. ELIMINAR TODOS LOS DATOS DE LOCALSTORAGE</h3>
      <p>
        La sintaxis para eliminar todos los ítems almacenados en localStorage es
        la siguiente:
      </p>
      <p>ejemplo:</p>
      <Code>localStorage.clear();</Code>
    </>
  );
}

export { IndexLocalStorage };
