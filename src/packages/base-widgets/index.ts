const modules = import.meta.glob("./*/index.vue");

console.log(modules, "modules");

const components = {};

Object.entries(modules).forEach(([key, m]) => {
  console.log(m, "ss");
  const name = key.replace(/\.\/(.*)\/index\.(tsx|vue)/, "$1");
  console.log(name);
});

export default {};
