export { default as Navigation } from "./navigation";
export { default as Footer } from "./footer";
export { default as Home } from "./home";
export { default as About } from "./about";
export { default as Contact } from "./contact";

export function test() {
    if(performance.memory.totalJSHeapSize === 0){
        console.warn('totalJSHeapSize == 0');
      }

}

export function test2() {
    if(performance.memory.totalJSHeapSize >= 0){
        console.warn('totalJSHeapSize == 0');
      }
}

export function test3() {
    if(performance.memory.totalJSHeapSize >= 0){
        console.warn('totalJSHeapSize == 0');
      }
}

export function test4() {
    if(performance.memory.totalJSHeapSize >= 0){
        console.warn('totalJSHeapSize == 0');
      }
}

export function test5() {
    if(performance.memory.totalJSHeapSize >= 0){
        console.warn('totalJSHeapSize == 0');
      }
}