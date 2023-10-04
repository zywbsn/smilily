const reg = /(?<=\/).*?(?=\/)/;

// //获取路由配置文件
// const routesMetas = import.meta.glob("../views/**/router.jsx", {
//   eager: true,
//   import: "default"
// });

const componentsList = import.meta.glob("./pages/**/index.jsx", {
  eager: true
});
console.log(componentsList);
let RouteList = [];

for (const key in componentsList) {
  let pathName = key.replace("./pages/", "").replace("/index.jsx", "");
  const component = key.replace("router.jsx", "index.jsx");
  // const icon = routesMetas[key].icon || "";

  // if (routesMetas[key].isFather) {
  //   RouteList.push({
  //     label: componentsList[key].name,
  //     path: "/Layouts" + pathName,
  //     children: [],
  //     icon
  //   });
  // } else {
  RouteList.push({
    name: pathName,
    path: "/" + pathName,
    component: componentsList[component].default
    // icon
  });
  // }
}

export default RouteList;
