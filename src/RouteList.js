// const reg = /(?<=\/).*?(?=\/)/;

const componentsList = import.meta.glob("./pages/**/index.jsx", {
  eager: true
});
let RouteList = [];

for (const key in componentsList) {
  let pathName = key.replace("./pages/", "").replace("/index.jsx", "");
  const component = key.replace("router.jsx", "index.jsx");
  RouteList.push({
    name: pathName,
    path: "/Components/" + pathName,
    component: componentsList[component].default
  });
}

export default RouteList;
