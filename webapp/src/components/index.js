export { default as Navigation } from "./navigation";
export { default as Footer } from "./footer";
export { default as Home } from "./home";
export { default as About } from "./about";
export { default as Contact } from "./contact";

export function test() {
    if(performance.memory.totalJSHeapSize == 0){
        console.warn('totalJSHeapSize == 0');
      }
    
      var bla = document.getELementByID(bla);
      if(bla == '2'){
        return bla;
      }
}