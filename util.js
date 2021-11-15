const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function l([message, ...rest], ...parts) {
  const combined = Object.assign({}, ...parts);
  console.group(message);
  Object.keys(combined)
    .sort()
    .forEach((key) => {
      console.log(`${key}:`, combined[key]);
    });
  console.groupEnd();
}

function codeToInject() {
  window.debug = { };
}

function embed(fn) {
  const script = document.createElement("script");
  script.text = `(${fn.toString()})();`;
  document.documentElement.appendChild(script);
}

embed(codeToInject);
