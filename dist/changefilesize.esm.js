function changefilesize(e){var i="",e=(i=e<102.4?e.toFixed(2)+"B":e<104857.6?(e/1024).toFixed(2)+"KB":e<107374182.4?(e/1048576).toFixed(2)+"MB":(e/1073741824).toFixed(2)+"GB")+"",t=e.indexOf(".");return"00"===e.substr(t+1,2)?e.substring(0,t)+e.substr(t+3,2):i}export{changefilesize,changefilesize as default};
