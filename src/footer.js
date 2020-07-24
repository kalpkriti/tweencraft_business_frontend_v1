import React from 'react';

export default function Footer(){

    return(
        <div className="py-5" style={{backgroundColor:"#ededed"}}>
        <div className="container">
            
            <div className="row" style={{display:"flex", flexWrap:"wrap"}}>
                <div className="col-md my-3">
                    {/* <svg width="189" height="45" viewBox="0 0 189 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.1144 32.4C64.0044 32.4 64.7203 32.2884 65.2621 32.0651C65.8038 31.8419 66.2972 31.5653 66.7422 31.2353L66.452 30.6529C66.1037 30.847 65.77 30.9926 65.4507 31.0897C65.1315 31.1867 64.7397 31.2353 64.2753 31.2353C62.9209 31.2353 62.2437 30.3617 62.2437 28.6147V19.5882H65.7264V18.4235H62.2437V14.0559H61.0828L59.6317 15.8029V18.4235H57.6001V19.5882H59.6317V28.6147C59.6317 29.8959 59.9413 30.847 60.5604 31.4682C61.1796 32.0894 62.0309 32.4 63.1144 32.4ZM74.2156 32.4L77.8434 23.3735L81.4712 32.4H82.0517L87.7111 18.4235H86.2599L82.487 27.8867L80.0201 21.772C79.4783 20.4132 78.806 19.4669 78.003 18.9331C77.2001 18.3992 76.2762 18.1323 75.2314 18.1323C75.0379 18.1323 74.8444 18.142 74.6509 18.1614C74.4574 18.1809 74.3123 18.1906 74.2156 18.1906V18.7729C74.8541 18.8117 75.3813 19.0398 75.7973 19.4572C76.2133 19.8745 76.6535 20.5976 77.1178 21.6264L74.6509 27.8867L72.184 21.772C71.6422 20.4132 70.9699 19.4669 70.1669 18.9331C69.3639 18.3992 68.4401 18.1323 67.3952 18.1323C67.2018 18.1323 67.0083 18.142 66.8148 18.1614C66.6213 18.1809 66.4762 18.1906 66.3794 18.1906V18.7729C67.0953 18.8117 67.671 19.0495 68.1063 19.4863C68.5416 19.9231 68.9818 20.685 69.4268 21.772L73.6351 32.4H74.2156ZM95.1844 32.4C96.326 32.4 97.3224 32.1573 98.1737 31.672C99.0251 31.1867 99.77 30.4103 100.408 29.3426L99.828 28.9059C99.2863 29.6823 98.701 30.2647 98.0722 30.6529C97.4433 31.0412 96.6742 31.2353 95.7649 31.2353C94.5459 31.2353 93.5882 30.7209 92.8916 29.692C92.1951 28.6632 91.8468 27.3335 91.8468 25.7029H100.641L100.699 24.5382C100.699 22.4612 100.22 20.8742 99.2621 19.7775C98.3043 18.6807 96.8484 18.1323 94.8942 18.1323C93.7139 18.1323 92.6836 18.4478 91.8033 19.0787C90.9229 19.7095 90.2506 20.5685 89.7862 21.6556C89.3218 22.7426 89.0897 23.9462 89.0897 25.2662C89.0897 26.6056 89.3218 27.8139 89.7862 28.8913C90.2506 29.9687 90.9374 30.8228 91.8468 31.4537C92.7562 32.0845 93.8687 32.4 95.1844 32.4ZM97.9416 24.5382H91.8468C91.8468 23.5482 91.9774 22.6553 92.2386 21.8594C92.4998 21.0635 92.8626 20.4375 93.327 19.9813C93.7913 19.5251 94.3137 19.297 94.8942 19.297C95.9197 19.297 96.6839 19.7435 97.187 20.6364C97.69 21.5294 97.9416 22.83 97.9416 24.5382ZM109.072 32.4C110.213 32.4 111.21 32.1573 112.061 31.672C112.912 31.1867 113.657 30.4103 114.296 29.3426L113.715 28.9059C113.174 29.6823 112.588 30.2647 111.959 30.6529C111.331 31.0412 110.562 31.2353 109.652 31.2353C108.433 31.2353 107.475 30.7209 106.779 29.692C106.082 28.6632 105.734 27.3335 105.734 25.7029H114.528L114.586 24.5382C114.586 22.4612 114.107 20.8742 113.149 19.7775C112.192 18.6807 110.736 18.1323 108.782 18.1323C107.601 18.1323 106.571 18.4478 105.691 19.0787C104.81 19.7095 104.138 20.5685 103.674 21.6556C103.209 22.7426 102.977 23.9462 102.977 25.2662C102.977 26.6056 103.209 27.8139 103.674 28.8913C104.138 29.9687 104.825 30.8228 105.734 31.4537C106.644 32.0845 107.756 32.4 109.072 32.4ZM111.829 24.5382H105.734C105.734 23.5482 105.865 22.6553 106.126 21.8594C106.387 21.0635 106.75 20.4375 107.214 19.9813C107.679 19.5251 108.201 19.297 108.782 19.297C109.807 19.297 110.571 19.7435 111.074 20.6364C111.577 21.5294 111.829 22.83 111.829 24.5382ZM120.695 32.1088V20.9859C121.605 19.957 122.572 19.4426 123.598 19.4426C124.507 19.4426 125.266 19.7581 125.876 20.3889C126.485 21.0198 126.79 22.0147 126.79 23.3735V32.1088H129.402V23.3735C129.402 21.4323 128.943 20.0735 128.024 19.297C127.104 18.5206 125.919 18.1323 124.468 18.1323C123.656 18.1323 122.925 18.2731 122.277 18.5545C121.629 18.836 121.102 19.1806 120.695 19.5882H120.55C120.376 19.2 120.1 18.9088 119.723 18.7147C119.346 18.5206 118.799 18.4235 118.083 18.4235H115.471V19.0059H116.052C116.864 19.0059 117.406 19.2437 117.677 19.7192C117.948 20.1948 118.083 20.9276 118.083 21.9176V32.1088H120.695ZM138.762 32.4C139.962 32.4 140.997 32.1622 141.867 31.6866C142.738 31.211 143.493 30.4297 144.131 29.3426L143.551 28.9059C143.009 29.7017 142.419 30.2889 141.78 30.6675C141.142 31.046 140.329 31.2353 139.342 31.2353C137.949 31.2353 136.9 30.682 136.193 29.5756C135.487 28.4691 135.134 27.0326 135.134 25.2662C135.134 23.4997 135.487 22.0632 136.193 20.9567C136.9 19.8503 137.949 19.297 139.342 19.297C140.426 19.297 141.306 19.6028 141.983 20.2142C142.661 20.8257 143.038 21.7332 143.115 22.9367H143.696C143.696 21.6944 143.657 20.8354 143.58 20.3598C143.502 19.8842 143.299 19.4814 142.97 19.1514C142.293 18.472 140.89 18.1323 138.762 18.1323C137.369 18.1323 136.193 18.4478 135.236 19.0787C134.278 19.7095 133.562 20.5637 133.088 21.641C132.614 22.7184 132.377 23.9267 132.377 25.2662C132.377 26.6056 132.614 27.8139 133.088 28.8913C133.562 29.9687 134.278 30.8228 135.236 31.4537C136.193 32.0845 137.369 32.4 138.762 32.4ZM149.747 32.1088V21.3353C150.037 20.8888 150.424 20.5345 150.908 20.2725C151.392 20.0104 151.924 19.8794 152.504 19.8794C153.027 19.8794 153.491 19.9522 153.897 20.0978C154.304 20.2434 154.613 20.4617 154.826 20.7529L155.987 19.8794C155.639 19.2582 155.3 18.8214 154.971 18.5691C154.584 18.2779 154.004 18.1323 153.23 18.1323C152.436 18.1323 151.745 18.2876 151.155 18.5982C150.564 18.9088 150.095 19.2873 149.747 19.7338H149.602C149.447 19.2679 149.181 18.9331 148.804 18.7292C148.426 18.5254 147.87 18.4235 147.135 18.4235H144.813V19.0059H145.103C145.916 19.0059 146.458 19.2437 146.729 19.7192C146.999 20.1948 147.135 20.9276 147.135 21.9176V32.1088H149.747ZM161.4 32.4C162.406 32.4 163.247 32.2447 163.925 31.9341C164.602 31.6235 165.114 31.245 165.463 30.7985H165.608L166.624 32.1088H168.075V24.247C168.075 21.8594 167.62 20.2434 166.711 19.3989C165.801 18.5545 164.563 18.1323 162.996 18.1323C162.048 18.1323 161.172 18.2148 160.369 18.3798C159.566 18.5448 158.991 18.802 158.642 19.1514C158.313 19.4814 158.11 19.8357 158.033 20.2142C157.956 20.5928 157.917 21.112 157.917 21.772H159.223C159.436 20.8597 159.803 20.2191 160.326 19.8503C160.848 19.4814 161.545 19.297 162.415 19.297C163.402 19.297 164.157 19.6464 164.679 20.3453C165.202 21.0441 165.463 22.3447 165.463 24.247H164.592C162.386 24.247 160.601 24.5576 159.237 25.1788C157.873 25.8 157.191 26.8482 157.191 28.3235C157.191 29.3135 157.419 30.1094 157.873 30.7112C158.328 31.3129 158.875 31.7448 159.513 32.0069C160.152 32.2689 160.78 32.4 161.4 32.4ZM162.706 31.0897C161.932 31.0897 161.279 30.8519 160.747 30.3763C160.214 29.9007 159.948 29.2164 159.948 28.3235C159.948 27.45 160.364 26.7463 161.196 26.2125C162.028 25.6787 163.16 25.4117 164.592 25.4117H165.463V29.3426C165.114 29.8862 164.727 30.3132 164.302 30.6238C163.876 30.9344 163.344 31.0897 162.706 31.0897ZM174.997 32.1088V19.5882H179.06V18.4235H174.997V17.55C174.997 15.0264 175.771 13.7647 177.318 13.7647C178.576 13.7647 179.495 14.2014 180.076 15.075L180.946 14.347C180.598 13.7259 180.259 13.2891 179.931 13.0367C179.505 12.7456 178.683 12.6 177.464 12.6C174.078 12.6 172.385 14.25 172.385 17.55V18.4235H170.353V19.5882H172.385V32.1088H174.997ZM185.372 32.4C186.262 32.4 186.978 32.2884 187.52 32.0651C188.062 31.8419 188.555 31.5653 189 31.2353L188.71 30.6529C188.362 30.847 188.028 30.9926 187.709 31.0897C187.389 31.1867 186.998 31.2353 186.533 31.2353C185.179 31.2353 184.502 30.3617 184.502 28.6147V19.5882H187.984V18.4235H184.502V14.0559H183.341L181.89 15.8029V18.4235H179.858V19.5882H181.89V28.6147C181.89 29.8959 182.199 30.847 182.818 31.4682C183.437 32.0894 184.289 32.4 185.372 32.4Z" fill="#28272B"/>
                    <path d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z" fill="#FF784B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.795 15.2607L23.9185 24.9667L35.5899 13L20.795 15.2607ZM20.1237 15.7352C19.0601 17.2315 17.3881 21.6633 14.7425 24.9667H23.1487L20.1237 15.7352ZM33.1291 17.1029L25.8387 24.2829L37.2712 17.9288L33.1291 17.1029ZM9.36249 18.1286V25.3086H13.7427L15.7512 22.808L11.6233 18.1288L9.36249 18.1286ZM8.68999 18.4705L6 20.8638H8.68999V18.4705ZM9.69874 25.9924L20.4856 32.8305L23.485 25.9924H9.69874ZM23.8983 25.6505C22.1817 29.7294 22.3876 28.704 20.795 32.8305L35.9262 29.9151L23.8983 25.6505Z" fill="white"/>
                    </svg> */}

<svg width="115" height="52" viewBox="0 0 115 52" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<rect width="115" height="52" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use href="#image0" transform="translate(-0.00290996) scale(0.00178021 0.00393701)"/>
</pattern>
<image id="image0" width="565" height="254" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjUAAAD+CAYAAADCpfTGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJMmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHBob3Rvc2hvcDpMZWdhY3lJUFRDRGlnZXN0PSIwMDQwQzE2NTI4QTg0MEI0MjI4NEMzOTIzQUI2RTEyMiIgcGhvdG9zaG9wOkluc3RydWN0aW9ucz0iRkJNRDAxMDAwYWMyMDMwMDAwZWIxMDAwMDA1YjFjMDAwMDJlMWQwMDAwNjYxZjAwMDBlOTJhMDAwMGZhMzgwMDAwOGEzZjAwMDAyMTQxMDAwMDQwNDMwMDAwMjk1ODAwMDAiIHBob3Rvc2hvcDpUcmFuc21pc3Npb25SZWZlcmVuY2U9IlFRQlBaWnJxQXd1Z0pqZ2NhckpvIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MWM1NzE5ZC01MzVlLWI2NGMtODcxNC0xZjJlYTFkMjA3NzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZDYyYmUyNzctNGQxZi1jOTRkLTk2MmMtM2FiOGM4ZjM2OGVlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjdFRjZFNEFGMEFEM0U4NUYyNEUzNkFGQTZDRDRDRTA3IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDctMjJUMTU6MTA6NTkrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA3LTIyVDE1OjM4OjQ0KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA3LTIyVDE1OjM4OjQ0KzA1OjMwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWMzNTliODctYTZjZC00YjQxLWE4NGYtZmY2N2YyOTQwMGFlIiBzdEV2dDp3aGVuPSIyMDIwLTA3LTIyVDE1OjIzOjI5KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYwOTk4Yzg4LTcyNWYtN2M0Mi1hMTNhLTA0ZTZlM2IyYWMzYSIgc3RFdnQ6d2hlbj0iMjAyMC0wNy0yMlQxNToyMzoyOSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNjJiZTI3Ny00ZDFmLWM5NGQtOTYyYy0zYWI4YzhmMzY4ZWUiIHN0RXZ0OndoZW49IjIwMjAtMDctMjJUMTU6Mzg6NDQrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OWMzNTliODctYTZjZC00YjQxLWE4NGYtZmY2N2YyOTQwMGFlIiBzdFJlZjpkb2N1bWVudElEPSI3RUY2RTRBRjBBRDNFODVGMjRFMzZBRkE2Q0Q0Q0UwNyIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSI3RUY2RTRBRjBBRDNFODVGMjRFMzZBRkE2Q0Q0Q0UwNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq9K7bsAADkcSURBVHic7d15vNRV/cfx11wuiIgIiisquKEiErjhluaSuaLmlkvmr+WnlqWW5i8XKkzTrCzLtCyr369FM3NLLdMy9zU3RMXcM4IQEQHxyp35/fGe6Q6Xu8zM98x3m/fz8biPO8Dc8z3cmfl+P99zPudzCgceeSxm1pqmTXsk6S5YjaZO3SbpLrSq3YB7gY6kO5JVcZ5n2mI7kpmZWfr0dR1cE/gzMKWXf38f0B68R9YwBzVmZtbKbgQ+2cu/faD8/cM9/Nsw4HEU2FhKOKgxM7NWtRKwH3AFsGIP/75b+fs2QKHbv32u/H14U3pmDXFQY2ZmraoDmF9+vGe3fysAO5Qfd59iage+UH68qCk9s4Y4qDEzszxbAdiFnq93S4F/lR/3tGpm5fL3Yre/X5+uEZqXe/i5NuDLwD519NMCcFBjZpYBXqnWsJHAX4Efsvw1rwQ8VX48hWWnoAo9PL9i3/L3IrCg278NAH4GfAVYo5EOW+Mc1JiZWZ7NAmaiZOArWD435qHy90HAZlV/vyIwqpc2Dyh/nwm80+3fvg18tPz4+vq7my9xB+MOaszMMmLatEc8YlO/InB6+fHHgZO6/ftdVY+3q3q8Aj0v1x4E7Fh+/Ac02lNxIF0JxBcDbzXQ39xI4r3qoMbMzPLuZuDZ8uNLgM2r/u2Zqse7Vj2uDlaqDQOGlh9fV/X3qwK/LT9egqafLGYOaszMLO86gSOq/nwTMLD8eCEwvfx4O5afnupu/arHT5a/F4D/o2tk52iWz7WxGDioMTOzVvAkyqkB2IiuJdkl4Kry49HAkH7aWbv8fQEKiAD2pyt5+GaWHcGxGDmoMTOzvGlDq5C6OwWYW378dWC18uNflr+3o1yavowtf78WLQkfiFY7gaadPsryU1eD8EqoWDioMTOzvPka8ApwMstW/F1M19YHAN8rf38Z+Ev58dJ+2q7k5pxZ/n4MyqcB+CDwZtVzRwBnAbOB12vpuEXjoMbMLGO8AqpfP0PLsb+DgoyT6KpB8zRwZPnxkcA65cdHAecAb/fT9p+ADVHRvnbgG+W/Pxa4p/x4BeA0YB4KsIbT+/5SuZTUe9RBjZlZBjmw6dNMYDyaDgKNyLwK7F7+81XA+eXHlc0q/4UCkN5WPVUsBV4qP14XFff7KEoUBtgZjRJdVPUzhwE/r/c/kVVJvjcd1JiZZZTr1vTpaWA9ukZPRgJ3AJcCg9G00EdQteFGvYrycn6BEowvB+4G1iz/+2xgEl1LvXMv6fejgxozs4xL+kKSYnNRDs3pVX/3aZQXMwa4mq5tEhpRRFNM66DRoeOr/u2r5WM8HqH9TEnD+9BBjZlZDqThgpJSncA30XLtSjLwaDSFND5A+xsBL9C1pcKjwBao+N6SXn4md9Ly/nNQY2aWE2m5sKTUq8AewE4o8ACN0qzVy/P7y60BLRufiaazHkV7Qk0GZkTqqTXMQY2ZWY44sOlTCbgPVQ6eCJxN70u4e9r3qbsisA+wabnN36ORIUuIgxozs5xxYNOvIvAEcB5dxfgq2tDozSU1tFMCbkOjNcWQHbTGOKgxM8shBzZ1G4RWQz0BzKKrlk1FCW1k+QVge2obybGYOagxM8spBzY12xJ4Efg1fScPfwwlHd+PloyPbH7XrB4OaszMcsyBTb+OQJtdjqr6u1uAa6r+XJlauoGuHJyxwDP0nmhsCXBQY2ZmrWpnunboBgUyqwH7AZ/q9twC8A9Uk6ZSTG8kKu43uLndtFo5qDEzs1Y0FPhj1Z+vRDk188p/7u36+G/gcODE8p83AqY2o4NWPwc1ZmY55ymoHp2GtjYArWD6FMuuYCr08bMltCVCZYuFM4CVQ3fQ6uegxszMWs2KwJfKj4vAMSy/JLuW4ntfKX9vA3YI0jOLxEGNmZm1mq3REm6A69GUUiMepisY2jFinywAr7M3M2sBtUxBTZ26TQw9SYU9qx7/pvLg3HMf4Zxz6vodLEI7f3+QZVdPWUI8UmNmZkBL5d4Mq3o8K2JbT5a/b0ffeTgWAwc1Zmb2Hy0S2AyoPCiVCm2lUoELL3wIgIsuerDRNlcK0C+LyEGNmZktowUCm60qD957r4333vvPpXAAQEdHGx0ddV8e2/FITeIc1JiZWSspUJX/0tZWKl188f0AE0olHgeGFIsFisW645NRaFWVJchBjZmZLSfnozVVy7dLxVIJSiXOAMZ3dhZ2HTCgxIABtazoXkY7sEK4LlojHNSYmVmPch7YUCwWGDy4s/PttwdSLBYqdWY+EKHJuiMhC8tBjZmZ9SrPgU2pBIMHFzuB9mKR9cp/vUv5e/difJYBDmrMzKxPeQ1sCgUoFikVi4UBdNVtWzPJPlk0DmrMzKxfeQ1sSstPGKV5hMbX7H74F2R5Mgw4HrgfzW03+mXpVSDaa+vXOIK8BjYZ0UZKA640vS8c1FheDAKOAk6nqgaF9S2DZfE3T7oDrS5NF7AWUsABTU0c1FheDAMOBzaia6M6q0HGApvJSXfA0nchawGpHF1M4/vAG1paXmwNbJt0J7Jq6tRtUnmC6sGVSXfAZNq0R7IWELe0jHy+I/NIjeXFCcDQpDth1kpa5UKZZdOmPdJSr5ODGsuLAf0/xfriu25rRCtdMLOk1YKZCgc1lhcTk+5AHjiwsVbUw7LuzGrVYKbCQY3lxXr9P8Vq4cDG6pX1i2iplP3NtVs9mKlwUGN50ZF0B/LEgY1ZNjiYWZaDGssLL+MOzIGN1SPLF9YsTj85mOmZgxoz65UDG2sFbRm7EjqY6V3GXkozM0urrF5sC4XsDNVk9XccFwc1ZtYnj9aYpYMDmv45qDGzfjmwsVr5wtsc/r3Wph1YERgP/JloFVmzvyaub+3ApsA44BDgA8AKwPAafvZJ4CHgGuCvwLtN6aFZE2VoKwWzKNrKicO1zkkFn7vy56xxbcBidMF1ifnejQA+AXwT+BlwBLAmtQU0oKDxIOBM4MPkPwC0nPKIjdUigxfl/wQmpRKLBg4sMnBgcXGpxILyX/c1qzGq/H0hsChqRzL4u0sVb2jZvzWBzwNTgM0abKMNWBXtJD2TlO64amYWSveLc8oD4v/caHZ2Fh4677yHOeusbZeWSoX7CoXS3ihwGcLyQcsw4IDy46eJWC/LAU10zqnp20jgDOBIGg9oKl4Afone+GaZlfKLk6VUpa5K2i7cpRJtxWKhAzQqUyrxVqkExWKBUokflp82GPgOMLDqR9uB79M1y/GLmLpsffBITe9WAU5D00VRS/DPAm5FU1dLIrZlljjn11gUCY/ilIDngI3a2kosXDioHSi1t5ee6egoTC6VCvMBOjsLADcPGFCaA6wBfBL4EHAdyqfcl65rw2Lg51E65c9TGB6p6d1hwKHA6IjtzAJuBC4E3ojaKTOzvEnggv5M5UGpxIARI94FjaQD3FT1vPeA91f9eT3gc8DxLHuzuz3wdqOdcUATjoOa5bUBewJfATaK2NZcNELzNeCfEdsySxVPQ1lISV3Yi8VCsZwYfMXSpW1HAo8DXHDBQ5WnzAQ2BO7p4cdvQPk2TzV6fAc0YTmoWd7WwPl0ZbQ3qgN4BAU0/4jaKbM0cmBjIcWYc/Ofa9/AgcXVTj55R1BqwFX0vJDjJWAXYF1gV1TSYwPgYCLcsDqg6VEBWB0lYJ8NXIZGxnYCVurvhx3ULGsj4MvApABtPQ2cjj4MZrnlwMZCi+FiP6PyoK2tNBUYcMopOzBt2lZ9/UwJeB24C9Ube5lkV7KuCBwLXF7uR19f/4VqrKW5nMhgYGfgG8D9wPXAucAJ6P94PXA1cCIKenpUOPDIY0O9KGn+ZdViPeAiYB+0TC+K6cAFdM3RWvOFPLlk/b0cuxjvOH2+aiFNDJiHAbPRhRTg552dhY8PGFAq1tHGQDRa8yKwtJFORPjcrItuwD/ZwM+m8b2/FgpejkW/077MBx4ALgXuAN6p/keP1Mg6wDloSDFqQPMSyo6/IWI7Zpnh0RprhiZORy1AqQaVIOZjAwaUrgQG1PjzG6JK8c8B54XvXr+OprGAJo02QL/DL9F/QAMqers3mpr6OKof9B9e0t1Vi2Z/VGgvilkomLkEVZc0M7OIKoFN4OB5BjABBSdtwMfQ9eBgtOqpN+NQYnBlUOCOkJ2q0QUJHLMZ1kHByXHUP8gyGRiERm5+TTlAbfWRmqFoed4BwNoR25qNlm5fhFY9mbUUj9ZYszVh5OZpFNhURmz2Q7kbg3t5/hYsG9B8ArgtZIdaSDuabjqOxmORScCn0VZEEKGhvNgfReW1DHn1pQPtn/V1vHTbzKypAgc3TwPvoyuw2Rf4I8tPRW1B16gOwBXAlY0e1Cuf2BSNjkWNQ7YCTqa8MqqVg5pxwBepivAieApNYb0SoC2zzPJojcUpYGAwnWVXve4C/ISuwGZzlg1orkSJrda4Q4m+/RB0rZraHlo3qNkYTRNtEaCt6WgJ2jP9PdHMzMIKOGrzJDCRquRh4Ddoq5zuAc2nqp5n9WtHy8xD2Rj4ILTmku7RwLdRIZ+oicEvof0+vkmALectEi/pTpEmDq232vnK6hRgtLD7NFO1m4EpRAxoAnw+onwO0vDeXx2YE7jN6cDWrTZSsy7wPTTktUrEtmajPUIuxQGN2TI8DWVJCTBy0z15uGIGcHgPf2/1W4UGa/v0YQwwopWCmrWA7wKroXya3rLbazGHrk0qvdLJzCxlAgU204EX0AjNdmg37iT7lRdLCR8ctgMDWmX6aTha178DeqMuRUOLjQR1c1FA82W8p1OaePophZpwAm+F85UlqJZRxhQEJlmffloJ7Y0YIlG44klgx1YpvncwsBsanlpK40UHK0u3z8UBjZlZ7vRV6C8FwUxeLAb+RNig5g/A4lYYqdkKJfOGWLr9GHAMVZuhWWp4pCalAl8I8n6+MuvPMOCtCD+flvf+h4FrCLMK+wVUxO+evOfUjEUrncYFaKuydNsBjZmZJaXPrcQz5HaUyhHVa8BPgUch33VqRqO8l/cR/f/5Ctqk8vdRO2XWarwSyjJkAMrBXAtVmp+MNo/8L+AwVIV+HZK9do5N8NghLQB+ADwcoY3FwH3Ajynv1p3XnJp1ganAXugNGkVlTydvUmlmll+bAV8B9kGrYwf18JwlwEzgWuB/0Q1vyKnvWkyJ+XjNdDcqcLgyjeXXPAicg67TQD5HalYH/gdtTDYyYltLgPvxJpVmkXi0xjJgA+AIlLPSU0ADCnYmAF8FLkMlQuL2/gSO2SxL6NpDq97UjpnAWcDz1X+Zt6BmKPBZNEQYtVowaKXTGWjOzszM8mtonc/fG22rYNG8BXwfOB+4g/5rAS1FgdDh6Bq9jLwFNQei5dujA7R1D8rJmRmgLbOW59EaS7lGFoGMCt6L/g1L4JjN9g5wFfBpdN19lGWL8xXRtkTfQdf4U4EngM7uDeUpp2YL4AuEWbr9EvB14N4AbZmZWfrNRNMh9VSbv79JfWlFneg1+CZwOUrSXh+9JotR/s2b9JPDlJc6NWPQ8NUH6X0utFaz0O6sf4rYjsXLdWoyImLdmiyfrwaiZMjJwO4sf766D62wnAH8jWi1SKwxb1PfNNQKqChrnKJ+BnJ9fsvDSM06KFloW6IHNDOBi9H6ebNaFVAtpMnATxr8ecuXQcDGwPbAHqii+WronNvbtP/e5a8iyhv4O3A9Kvp5J/AG8a+0aTUPo9eqVnEHNNaPrAc1awJnopVOa0Rs6xW0TO/X+MRh9cnqrr0FNHoA8B4xve+nTt0mr+XmVwJ2AXZE1VLH0tgec20oKBpX/iqiEeSb0Ajyn4H5QXps3V1HfUGNpUyWg5oRwOfRmv21I7Y1G+3CejH5HfIdiJYs7lD+Or6On11Q/n4fqtnzDBoeX9DrT1iarIJWaYxHKwN3RBfO7sPsC9EF9G66XufH0ZC89W41ugqz7UP4BRhtKCH1BBQsPQz8kNpWimTRYPRe3QpN0e2OrlWVm4d70fvzOTSKFfI89FTAtiwBWc2pGYCypE8ienXFDuCP5bZejdhWWqwMTAK2RJnik9FJoZ4EuL5Uto1/Ft3ZPAH8FZgXqP1GJJlTk7Y57hWB7dCU7CHo4tBG/Tcxldf5EeB35e8PUa7cGVWDozVpOV8V0NT34cCR6HcdpxfQZ+4idHHP8ujyYPT72wYFbdug92qt79fF6L36V+AGFJg8iRJM61XvvkpxTx0XiD4ynOvp7qyO1OyJ7lpClIt+CtWiyXJAMwyNvkxAF7FJNHYRq1Wl3QnlryKq5fN7NPf/J/I74pVmq6IgtjIaE3VKtvI671j+moNG625FU7VvRGw/q9YGjkWjxDsm1IeN0OjN+4Dvoot51kZORwAHoffrzjT+fh1S/n5A+Wse8AAa0fox8Dq1B31p/x3WW0un5WRxpGYSKryzdYC2pgNfA64O0FachqKT6QTgUJofxNTrNjQ8fDXxVWJu5ZGaVdFowWHArhHbqtWDKP/sajR929DvoIHRmiTPVyOBY9CNw86B+hHCDBTUXAz8O0I7Y1BO0M9rfP5CNBpc71YBQ1DeyqdRIvWqdfxsvZ5Hyfu/Q4nXtfSznv9L3KMeO6AbiyjSOFJTADZHo3S1vv8qTgT+ghb6lNJyEazVJmgPpo0CtPUSutvMyiaVQ4EPoJPpoajAYFpfv73KX0fRdeGLcrK1no0APoJKu8cVzFRMRrWh9kV3w7eS373RhqLR4ZPQNEnaip+NQ1POQ1F9rVkNtvF0nT8zFLgU+G80GlKL9YDT0ft1Qp3Ha8QmwAUoED2EsNXhk8hn+kACx4xDlCm1y8rfNwOey9JIzQYoOW400aedXkcBzbmkf0+ntdBFay+03DNrVaAXoKHgy9C01KImHaeVRmqGouTJz6DcmeERjx/VdDQy9z3gX/X+cJ2jNXGfr9ZFRT13J56LcBSvoyXg51F/YBPl9/p5NErUl0FoafvpaJQ9qcCwlte9nqmqVSL0pRF/RNeCKNI4UhPic30icHla7/S7G43uQDZGwU2Rxi/ur6PRmQtJb0AzCN0J74UKAY4ie8FMxTD0/1gLXRR+QHp/70kZRu1z+aNRXaYdCFM9O4Tx6OQ+FjgbJa5mXTuaGjkHDYk3c4oklFEoR6UDBTZx5TwdRN9BzQjgE8DR5GuvpMcTOOZ2CRwzKy4DLs/ChbJSXG8Xogc0c1C+x9eAfwbpXXhtKAi4Gl0g1iO7AU21CcBx6CIRdQl+3kyq4TkroWnHX6GLQ1oCmor1UMLnz8rfV6j1B1O4J9RwVPLgEjTtlIWApqIS2HyGrgTaZluvj39bA/gfNEU1MZbe9K7WG4elNT7vjkY7EkHUArO5l/aL5Ug0XLk/XRfCRvu8FO3TMQ34R/SuNc0IFMTl8cK/AZrXPhsFqyab9vPvqwGnoY3ediS+i1W9BqPRjbNQQm2oEgJxWgv4EvA5uhLws2YDFNjsEePxerI6+l0egXJbkhZ6ZmJ64PZqkdbPfmqk+QM7FCXmHUiYC/yjqPrwywHaaqZFBKoDklKj0LLjvAZujZjSx7+tjX5XHyN9ozO92R74OPFdVENZH930HE2YchFJmgR8Ft0YxqF7ADukfPyD0ZRpGtxZ4/Nqnba7q8F+WBOlOajZH93V93YXUI/pwLdpbGv5uC1BAVierY2C1dPRKESr26mXv18HjWodTpjPQZx2RK9vTRe0FExBbYzy9g5GgXceTEbBcBw2rHo8EI3OfIT0BDQAf6jxeU/W+Lwki41aL9Ia1IxDw+0h7kxfQisCbg3QVlzuIrv7CdWqMvd/EsoXsWWNQvlHWb7IbouCsrQtge5uLJram0J8IxtxGIZqF/WV8xJKdd2eScAnSceUU7WXanze7Bqfl/dzdCalMagZjeoKbBmgrcomcN8lW/vX3EntdxVZtgFKft0n6Y4kbHi3P6+LAppQU69JGYJGbNL8+o5FK4U+TNhqrUtR3Z6b0DTMOJTkWejhayQa2fgOuqCGvFhuiZa6DuzviRF9pOrxaaRzlc49NT7v9qb2wpoqbUFNZaXTdkTP8p6Damekeel2b95GNV1a4U5gPDrpr5t0R1JiAsrrOIhsBzQV44BTULXaPsU8BbUu8Eu0aecUwiVgPoxGpzZCBfGmAN8vH+e9Xn7mDeA3wKlo+fi5aAqk1lU4fRmCauw0e9RkePn7FWh0KI3lQubX+Ly8T//n2UppCmpWR3sw7Q+sGbGtuagWTZqXbvenlarwboUufFlcLRPSuWjX4f2I/hkoonolD6MltfuhWjI9jRRUf62Oaor8nHD74ExENytp2rfmNVTxuo0wy2QfR8HMFDTy0+hecv8AvoJGbm4lzA3ZZPpORg9hEgpcDyL7N2NZGtW3ZW2Slmh6OPBFwgy3L0W7CZ9Lupdu92cW2mLglAhtdKBS3g+hkZ870M7aUVdXFdCw/fFo+ijqnP1QVIdoAuprK6quqBllI8p5qFr2XeiiWG8BtrnAlcBPy9/PQ6MtUWq1VJZ6745GT/OiiPI0bkKjMS8SruLxs2ja6FTgU0TPSzoCVXxuVkVvqD1npT9F9D7sROfyx9FS+53QNNpq6P0YpWZZX7K843mrWzctQc3R6EMXIqFtBprTfTlAW0m7FyXc9XeHWyx/PQtch/ZwuYPmTbuVUNXYzwPXoJPlFkQbadkWjdK1alAT1Uw0ZVGZuoiqhAKj49DIwV5EC7bGo4v03cCbEfuWBnOAJ4CvovpXzRideB0lMK+Nbh6ijCiNRflNfwrQr2aYi85d9wK3UN8o9SrA+9GO5Yei91obywY8l9fR3oA6nhun4Ul3IAO2Tnr6aRB6E04lTEDzPEq2q3djtrT6E72X4i6iE+vlwLFohcyW6HcZ5+7Y96PA6xGi5wAci+7IrHYdaMrqa+h1CBHQVHsBJS2HeH23Rwm5vUrB0u5avII2cjwOXYSbOd2yCAWVT0VsZwjacylNiuh3+U00UnsCmvasd9r9LZRucB76P45FN1w3oxHvItrFuVZx7+dUq62S7kAGbJp0ULMLOmFGuQOsNpTs7Lpdi7fQyq1qRfRh/Ty6MzkRJTzOibdry3gc1SSJOvw8Go3YWW1eQ+/3o4D/Q++XZngZTQ8/G7Gd4WiKOU25NfVYjJJIP0m8+XqVm7XnI7ZzKOnZzHAuCjQOQeeOZwgTHFamBL+LyiFsj6ZPr6mjjbQu60/7hqqpkGRQMxYFNCFfqE+Rv+TaP6DduX+KPvx7oQv/d2lgR+QmehBtKBb1xLQX2b3oxWk6CmQ+TfRgoxZPo32dohYc2wndzGTNPPRZ/Dia2o07Gfb3RB+B3pJ0XLBnoxuz42nuSqP3UML2c9SXJ5PWvb4OSroDGbBiUkHN+sA3CF/L4ObA7aXBQjQN9Uk0THsHzU32a1QJJZbOitjO3mTzoheXynTT+agCbq2FwkL4OdGnQVYFdg3QlzjNQ0uuv4Cm95JIJJ2PRoeiaKO2zVObaTZKrD4bTW2mUZqqIFdL2/RhKiUR1KyD9mDanvBLePcN3F5aVBKB0+4t4KqIbbThoKY381Gi7bFoZdzCmI8/F/gh0Zd6H0Z2kh7nolHRL5H84oOooxrtKFk4KXPQjedXSffK1DQWDgTv0F2TuIOa1VHNjClEr8PRkx+RjuHVVnZvgDY+jLdO6K6IRmg+QzK7A1fcSO2VWXszGtgtQF+a7Xk0InYBtRduS7ukNhmtlNqYRroDGoDNku5AD07AQU1N4gxqVgY+hwKaZlVKXQTs2aS2rTb1rDLozQZoibd1eRLdEDyXcD8WofyOKCOHbWiktkcpWQH1OqpG/iM05ZcXSe30Ph0VV30loePXI/QmuwNR/lApwtdlAfsTpR89ff0X6dlw9924gpoCuvs+lObOV45Fd7JZ3QAwD+YTfaqsHa3sMnkBndQeTrojZdcQPXfqMNKbED4HJWD/lHTmr0WRRID2Cnr/JjnCWI8RgdvroL46OVlzJSo8mYrAJq6gZmu0BDmOYb2t0F5CaSks2IpC7FnTZz2TFtKBagFdQ3oqnc5FibNRrEey+R29eQHVhbmRbOSx1Svu82IR5QLVs6Q6aZ7macyLSXcA+GccQc3mwMWoVkAchgAfQhvDWTLqLc3fk21IT02NJM1AiZVpq8L7QMSfbyd9dTdeB64HfpVwP5rprpiPNwNVuU7b+7cvSddvs8ZNb/aLNw7NS08k3juECSj/IK31BvIuaiIp6P0Sem47axaiwop/T7ojPbid6FMZh4boSCCVRNZv0bwihmlwW8zHu53wVa7NejO7WUFNASV6fgdl28c9d96G7vQPj/m4JiHmzgeRzumJOP0N1YZJo3lEn2achBYQpMF0VDslaq5QmlUCt7h0AFeQrWk8jw5n22PNCGoGoqqwl6IiW0OacIxajELVP8ckdPxWFmKkBpIvFJak11ECXporZEdNXE5DMThQHs2lZCeRtVFF4v0/PoK2PzCLS9CRmnYUQPwAjdBsTfIJV1uirRiGJdyPVvNEoHZaeXn+48ANSXeiH9dH/Pl20rFJ33Tg2qQ7UYOoowiPAe+E6EiNric9ye3WGoohg5qj0Pz/cWiVUxqSrQajKYy8VhpOq6gVZyuSqqmRtPlo5GB+st3o1+MB2pgSoI0o5qHtB7KQyBq1HEacgVsHqn6dNQ7Csq0UMvA4GwUQaVtKvRlwMp6GilNnoHaSHulLyu1oj6+0+1uANiavsEIn3b/OOy+2Walrae6miiEdHeFnlxImCK3VDDQyZBarkEHNJgHbCm0iKs+9SsL9aBWh7naSysdKUhEFNFmoYhtiRK6d5KaHF6AAMgt35yOBAyL8/Cuo3lFcbgLejfF4ZkA6pojiMBiVZT8o4X60iixcJNKqA7gu6U7EaBDJbYlxH3BrQseu15HA5Ag//1vi3QA1xHYpZnVrlaAGNJJ0GrBF0h0x68ODwOykOxGzsQkcswj8EXg7gWPXa3XgIxF+vki8+S0dwEMxHs+sopC2oGY+qi1TqPo6ElgcqP2xqAS6d/K2tEr7iqdmSCJZuEj0rR7ichzRajbdCvw1TFdq0kH+9syybGhLU1AzA/gCy+8RchWq8hli6HQQsAuehmq2tG5UmAUtN2xfKLB9oQDdv5rsCeCfTT9KdBujlaVR3Ei8U08Pxnis0IY3oc1CoK+09aeZfWzU6mkJal5BqxB6u3P6PuFWKKwBnEp8e1G1mnFEr1/Syp5OugMtIgsbLI5A+35FOVf9BeXTxCnLo41bJ90Bi2T9NAQ1r6PEyEvo/W5iDirq92ygY44FzgPWDNSewfrAl9HFYo+E+5JVC4H3ku5EnUJMDQ8P0Ea9nkrgmPUooKn4yTRe2mA++jzOC9SnWoUqvpmEzZLugEXyXtI1ZWahpX/fAOb289xbURG9DYlev6QdReQnARfg+d/eDES/7x1Rdd+90O9ueIJ9yrMs7ZFT0UE2l96H2sqjWbYDTgA2itDGA8DVYbpTlxD1i5Kyf9IdsEjWSDKomQ38HlXzrGUTubeB81EkHWVpY8V6KLfmSbIxFF2rdjQStS0KQhyIZEcWK7BOB3aO0kBnZyJT8aGqXjfDxsDXgQkR2ngcuIz4R2kg3vyd0Fp9E92s2ympoGY2Sl6bhqafavU8+qCOIMwy0PHAKWj54SsB2kvKCOADaGfyw1A59XZaa8l+HtyYdAcacDsBgppiMQ05hqkwGt3oTaLxz+/rwC3otTFrJROTCGqqA5p/1PmzJZSEthvK4RgcoD8TgbOAz5OtO4yh6PewK/BhdDJ0EJNtzyXdgQZELoVfDmiGkq3PXzOMQefF3Wh8ZLUD7Z7+fcKVwmgl3vw42zaIO6iZA9xGYwFNxXy0IiDUNNQQYAeU3JqFrP0RwCFo6mwHYNVEe2MhZXGvnPsCtTOJbE6/hbIxMBVthTA8QjtPAedQ25S+Wd6sE+ed/RK0vPAcGg9oKl4Cvku41VDjgc+S7qJ8Q1GRsl8BFwH74YAmb9Kc59GbNwK1s3mgdrJoPHA5cCDRAprpwMXl70nJYrJ7o1yPK32GxxXUFFFBpmmEy125GW3QFmrjv21R5c40WhcFMucBe+OkX0uPUPt87RuonSwZiiqm/x/wfqJNfbyESmNkMS8rq2LbSt5qF1dQ8wJwBvBMwDYXAOcSrt7EMLS/ygaB2gthIEoAvgI4Bt3RmeXRrkl3IGZroHPimSivL0qZilloJeklJL+X1fyEjx9Fva9BK48uplUs2yQ8i7L5HyT87s0vAb8m3AdpSzQ9lpZksf3QcPLeeKjTLC82QrW5Pkb0G5XZaNT6Avqv9RWHLGw90ZvRdT6/FUcXU6/ZQc0rwO/QsGiz/IxwO8IOQsm3+wRqr1EDUf7Mt9FdnFneDU+6AzFoB3YHrgQORrWyopiLApqvkp5gIssJyvWWJmi10cVMaObqp8r2BxfT3CHRN1DS8BqECQA2Q7VrHgReDtBeI3ZCJ6o0TYWZWePWAo4HDiXMNPJclD/zVaIvvAjp3qQ7EIFzZHKgWSM1s9Dy6Fq2PwjhLyiACpWEPJHkpqE2Qks7JyZwbLOk5LVGTTtKAv4J2pYlckBTKv2n1tdXgVejthdYljdk/WCdzx/ejE5YNM0IaioBzXnENxT5DloS+RBhVkMNBrYn/mmoNVDyc4j6O2ZZsjTpDjTBumi7gx+gvLjIJSOKxcK8RYsGPok2j01bQAPZfh3XT7oDFl3ooKZyB3Eu8c/xzkGjK6HuFMahaagxgdrrzxDgRLT3SFY2CKzcXT8InIZKsx+Bdhg2q8fDSXcgoJHAqcBv6RqdCXGunbVkyYC7X3xx5fNJ15RTtU2S7kAESW/wbAGEfBHnoB23kwhoKp5DybVnEWYL+YkoUDqV5hdG2x1VCa43A7/ZFqA6Q/eigPU5VPm2p9/Ht2Lsl+XLLUl3IIBVUd2ZjxBxP6wezAKua2srXUg6R2gq1km6AxFEWVZvKREyqHkWTTnVs0FlM9wE7AlsSPQ3afU01NUR2+rLCDRKMzFQewuA36Cy8zcTruqrWXeh8s7+HqidJFSCmcNozoqY19ANxfmkZ5VTb1ZMugMNGph0ByyMkEHNmSS3WqjaW2i0aByqEhxVZRqqmauhDkbBU1QdwEy0yiLUnjxmfQm1YiSLq2aaHcyAPs/XoxHo2U06RkjDk+5Ag5xPkxMhg5o0nZReAH6I5rZDLIueiFYknUL4aagVCbeP0wzgWMJVWTbrz6aB2nkzUDtxWI2uYGaXJh2jiPZw+jHaRmF+k44TWlZHPJr1OlrM8pwYdR2q+Lge0f+fg1FRvn2BqyK21d12hJl/fxYt8XRAY3GaknQHYrQmcBTKfWvmRXAh8Cj6PN9NtlcUZcUWSXfAwshzUDMPnRTGEqbY1WbAycADhJ2G2hYt5Y7qfuCPAdoxq8dOSXegydpQ8v4hwCcIswChL/OBW9EChReafKxmiGs/wdA+lHQHLIysvgFr9RQasVkcqL2JaBoqZFG+gwO0MRft/fJOgLbMYlUo9PyVAm1oJPVy4CKaH9CAFiScRjYDmizbMOkOWBh5D2pKwI+AvwVqrzINtV+g9lYBtgnQzm9QQqFZ3IZHbaC9vTi/vb1I968UGI120t4rxmOeTPpXOOVRo7MWadn82MryHtSAilRdinJOQqhMQ4VKQA7xGtwToA2zRAwYUOrxKwXGoWKYcXo35uOZioU2Wv7D+0WlTCsENaDCXncSbuXS+1CZ8uER2xlPmLym2wK0YZaUB5LuQC8OI0y+m6VblJWnoVb/WSCtEtQsAC5EKwpCqExDRc2HOTBAX8DF9Szbfp90B3qxZ9Id6G7w4E4mTJiXdDfyZocIP9tKq/8yoVWCGtCKpa8BTwZqbyzwWWBChDaifJjMkhYkn6BU4tlSCbp/pcBKCRxzjwSO2eqijLbkffVf5rRSUANwF/Az4KVA7W0JTAPWauBnC7Te79/yJUR9pQ7Su5nl8ASOOQ3YOIHjtrIoCz98Dk+ZVntBlqLqnA+hk2lU7Wj10mepf2ftkQ38jFmabBmgjaU0f7PYLBkHnA2MSrojLWTrCD/r1U8p02pBDaimy1S0pUAIo1Cl4Xrn3z1saVl3SIA2Hnz33QF0/zrrrMcCNJ1Jw9ES8i8BqyfblZaR5yK0LacVgxpQTZdfEe4OcSJwEhp9qdUmgY5tloRV0SrAqG4M0EberA3sj0aAhybcl7wbSPQR88EhOmJhtGpQA/BTws7lTwY+Vsfzjwl4bLO47U7088dSwhXGzJvRaHVlqEKf1rMQlYS9rDtFWjmomQt8D+2EG8IwtHNvrUX5/h7ouGZJ2Inow/ZFIMvzTK8B1wNfQdPQ7cA3CbcB5XjgC2ilpTVHiOKKIarCWyCtHNQA3IE2ggy1N9SWaCO6WpLHvPmkZdVaKICP6jHg7QDtxO0F4Bvod3Ak2jj3n0AncCbwdeCVQMd6H1oRVc/UttUuRC2ivQO0YYG0elCzEDgPeDxQe4NQ7Zl9aniu92qyrPooYZJYfxugjWaqLq5ZBG4GPoeWsp8B3Ass6fYz7wGXlJ87N0AfBqFNNT+KE1qbIcS+Xqkr0tjK/CHRHdV30ejK+ADtbQacAjyICv71JsvD7ta6VgcOIkw+TahCmM1yC6oZsxkwB3ia2kZ156IK5iNQ1fCoiagbAMeh/KO/RmzLlhXiGtjqgwOp4hdDbkGrMF4L1N5E+p+GeivQsczi9An0/o7qFeC+AO00UweaaroZLSqoZ5r6VVTB/G9olCeq8Wi/uRAb6VqX4QHaiKtWjes51cAjNbIQJQ2PA9ak8R1bKwYD26NpqKv7Oa6XbFpWbA4cTZiikb9F7/88mwGcDvwv0Us4tKEdoc9GU18hprYsnBWBd5p8jBDBMffc03cB/C22eJMRI7K7WbxHarr8CzgLDTGHMA5NQ43p4zlB3qTAaoHaMevNWsD5aComqnloy5IeTZv2SIBDpMYDaEXU8wHaGg7shkbLVgjQnoWzeQzHuDdQO7m+kXZQs6wZwMXAs4Ham0jf01B3BzpOLYnJcXK15HxZGSXIbkuY0d17aa3ckN8AdxJm+mADVOPKyanRhQwMdwvYVm+CFKpcZZWOs9vbi1R/dXYWGDJkKZMnzwlxiEQ5qFnejSjJt/uqhkZUT0P15PoAx4AwGwuGsiG6o7f8+DBaCRRiP6L5wA3AogBtZcV89Jl4kHD5NWfi+jVRjQ7Y1ocCttWbZwhQA2nUqEUnEqYaeCo5qFneW6juxBOB2utrGuo5whTqOoIwyZtRjUGFyEJMUVg67IimZUO9pg8BvwvUVpa8jMpHhFrxNRF91tYM1F4r+mDAtnYI2FZvHidAULzSSkuHjhy55FuDB3cyeHAnK60UqlZkOjio6dlLwA8IMw8OOgGdxfJzmX8jzFTXcHSCS3IDvC2By9AdyxoJ9sPCKADvB34CbBSozenoPfJmoPay5l70+wxRo2oIGqH9HDnPkWiiyQHbGkSYlVR9eZsA24qssEJn29prL94V3WznjoOa3t2Ahos7ArRVmYbqfmewCC0XDWEC8Em0QVuc1kA7Cl+F5vkd0DTuI0l3oGwE8Cngx2iEJsR5ogON0tze15NyliTc3VLgl8BNwKwA7a0HTEGbX1r9tg7Y1iB0E9Bs14ZoZMiQpe1jxrx9HnBCiPbSxEFN795CdSZCrYYaj3bd7X7R/wOac49qA+Bk4NAAbdViNbQz+XVofn8cLhEQ1U/QFEWSUwobA98HvkjYnI0ZKK8k78u4+/MmWozwEGFumMYDp+Ep30aMCdzepMDt9eQxAnyGCgUYOvS9IWPGvP0tNMof981w0zio6dtzwDWEOxFvjZZjVruPcJtqrommzc6geVNRqwKfQXcM56GcCw9/hzEE+Dy6kz8D3YnHZQw6uV0LHE64KSdQNd7LUSE7g9fRjcBTgdrbEu03tU6g9lpF6JuwgwK315P7CZSX1d5eYpVVOgZvsslbp26yyVs3o9H+zHNQ078rUTXREIYBh7HsVvUdwBWEGa0BzeueDPwCzbmHeo3XQneE16E7+V2Jr5JmKxmMlk6fD7yI5tDPAPYl7O97WLnNM8rHeB6VH5hA2JP9UhS495scnPOpp+5mAN8izA3NIJQfcirNz+vIk6hFVrvbgubnNS4m0NJugEKBtsGDO4ets87i90+aNPdSYCrxV60+OWRjni7o32x0EV+dMHtDbYGqgn6KrmXjN5b/HGpp9trlr+3QFhB/RcvH6y1CsBqwB8rsPxL9DhwIx6ONriqycQxrN8sMtJrw30l3JIVuQueUVYg+Krc2yq95GfghYVZVWn3a0UKJXzT5ONehEf+oVaqrDS4U2HngwOKOI0a8ewKqhP8AyoF7I+BxQO/3XdDMxVGE/X84qKnRbajWzIZELxE/CBWnOxL4afnv5qO75P8l7JTDcPSmOQqd6MziNBP4DuHKI+RNZXuWzQizPctYtFjgCeCeiG21ggWEHf1sQwtCmh3UvIBGPk8l/GhTGwqQTwncbmx8112bhShp+PFA7W0AHM+yeQv3owrDrZ5IafnwCsrPuRYoJdyXNKtszxIqv2YCukFaN1B7eRZqm5pqB6G8w2bqBH6Oks2tGwc1tXsF3XWGSurdAjiXrtfgXeBSwq22MkvK66gkwsXUuDVAi+XTdPcs2h8qxLmlDdgGrV5bOUB79SokcMxGhdpLqdrawF5NaLe751AZDSffd+Ogpj63oPyX1wK0NRTYHe16XHEfcCvegdeyaxYKaC7AeTT1+D3KewtxblkV5cJNCdBWvbKU0hAs4bZKG/HUqykCvwb+RJg9xXLDQU19FqE58EcJk4i3Osp3GVn1d99EOxiH2HvKLE6vo7n+r1FHcbkWH6WpqOTX/JkwU9DjUM7Fpv09MbBmTOk0ywyac549gOZPQYF2u/8GuhFeHMPxMsFBTf0qc+AzArRVGSo+hK47nEVo6PgpsnWCsNb2PKqWW1dAY8uYg35/jxLms78lGjELsRFprUbEeKyoHiPMlhXdjSK+TYZfAqahxHDfCOOgplEzgF8RZthvJPAFll22+wI6Gf09QPtmzbQUnVAvQQXg/lXPD3uUZjl/R0vgQ9aviXN/qHrLRiRpEc3ZXLUN2LwJ7fZmBqohdkeMx0wtBzWNC1mUbxMUbVcn9t2ANv9bjEdsajE/UDuen65NEY3IfAtVQf4R4V6DVnc32ncrxIa6awNHoNWWKwZorz/PxXCMkG4h3MbF1fZoQpt9mY5mEH5Hi6+gdVDTuH+jonyhVkPtDPwPXXtwdKLS8l8mzFRXM81DNXd+hebyC6hg36Plf4vDO4HaWRSonTybjl7rPdB79mEa2MfIozS9WopqndxGmJGP0cCxLL+hbmgdKK8qS54A7iR8scKQ+6bVooS2T/gSKs7XslPADmqiuR0tCwwRGQ9FQ4jVywGXoGH9M1CWe1wBQq0eQHvYTEIVLo8Gnqn6t23QthBxfMBCDb3eGaidPJqHNmA9CziRrtfawnsTuBCtiAyRBDoBjag1s37NG8Bvm9h+M1S2qQldIDKJGjIllCP0RVTINdQNd5Yc46AmmoVoj55Q01CD0J1vdVXhDjREehSqa/MgyWa6F4Gb0UVtf5RH8Sq9F1j7MzqZPtjkfl1D9KXw88jeSTkOs9HIwSmoEvaNRAzkPUpTk9fQlip/CdTe+4D/pnk7Mj9G+JL6cXgM1XwJNcq0EKUPJOVfKOG8kkDcCtNRv0K5Y7/OUk2BtHoV3VENRyeNKIFiByqXfhRwEcvm0sxFxf+uBU5AQ/+TIxyrHktR8cHfouXmd1HfB+UGNBK1BNVwaEYw/QyqynxAhDYeoDXvbrpbit6L96D6KXejopDvJdmpFjUDbTI4C9gP5cg0ajjakmEQzXktLyWb+X9LUYXejVDQF/X89Aw6lyRpIbrRux84CfgA8V0vmqWSX3ofug4+hwLSZfIgCwceeWyoEuZZqiQZ2iAUZByKTjxrol9+PR+OIvpwPYWmtabSe57CQJRcPAU4HNWiiLonVbWl5f48hgKZJ9EbKUrEvwLKszkOFR0cRW2/n1rfVwPK7X62fJyRfT99GfPQSegSNI1V7/x61rcBqLz3nkWJhn9Dgcz8Zhws4ihNO5pK+Qzw8Tp/9hNoxHAG2XrNCqjuyTboHPNBtKig0VooA1g++BiEbsq+A+xYZ3tLgI+hEbwsLysehUY36n1fdfc/KIE+LZuKroBWY+0HHAOMAQYn2aF+VG6qnkbT3fej2ZA3qOFz66AmnDa0q/VoYG+04qANvYGGsGyQU0QvWhsKFN5Eia53oRPDTLTbbi2vzUp07eR8MIrG26lvo7MF5T7dWz7+M2ifq7fraKNWK6KT5wQUlO2Efg+9bSxXz/tqANp0dHOUy7NH+XjDe3juApQUfCcK3KYDL9LYiahZn6GB6P+zI7Anel8NIvry3CXo/fccXSNvj6Bh66bfaXvqyVJsXeDTaHp9eAM/fybaHiStwd1KwFbARBq/XoS0EJ1z/oLSLGaga0/DN9CFA488NkjPLFWGoiBnc2BfdIcHerPcSC/DdtawJG4MhqHXeFO6gkPoOhFXXtv70BTSM2gEZn7UTkbloMZSbkU0GvY5YFtq28n7UVQR+jeEW4kZl5VRoFN9LunrRrNesZ6LHNSYRefRzjo4qLEMaEPb2OyLKr6/n54v8vNRkupP0DR9WqacQhpGV9BzAF17Ww1DAUsHKj9wBxrtf4EEfw9OFDYzM1tWEa36+xlKuN0Ujd4cDqwD/AO4Grijs7Pw7IABpTzvvbQATdPfCfww0Z7UwEGNmZlZz0oov+PR8teFdI2oZnGlV+45qDEzM6tNiWytnGs5Lr5nZmZmueCgxszMzHLBQY2ZmZnlgoMaMzMzywUHNWZmZpYLDmrMzMwsFxzUmJmZWS44qDEzM7NccFBjZmZmueCgxszMzHLBQY2ZmZnlgoMaMzMzywUHNWZmZpYLDmrMzMwsFxzUmJmZWS44qDEzM7NccFBjZmZmueCgxszMzHLBQY2ZmZnlgoMaMzMzywUHNWZmZpYLDmrMzMwsFxzUmJmZWS44qDEzM7NccFBjZmZmueCgxszMzHLBQY2ZmZnlgoMaMzMzywUHNWZmZpYLDmrMzMwsFxzUmJmZWS44qDEzM7NccFBjZmZmueCgxszMzHLBQY2ZmZnlgoMaMzMzywUHNWZmZpYLDmrMzMwsFxzUmFmspk7dJukumFlOOagxMzOzXHBQY2ax82iNmTWDgxozMzPLBQc1ZpYIj9aYWWgOaszMzCwXHNSYWWI8WmNmITmoMTMzs1xwUGNmifJojZmF4qDGzMzMcsFBjZklzqM1ZhaCgxozMzPLBQc1ZpYKHq0xs6gc1JiZmVkuOKgxs9TwaI2ZReGgxszMzHLBQY2ZpYpHa8ysUQ5qzKKbn3QHzMzMQY1ZCO8k3YG88WiNmTXCQY1ZdLcn3QEzM3NQYxbCNcCspDuRNx6tMbN6Oagxi+4Z4CqcW2NmligHNWbRvQj8Avge8CzQASxNtEc54dEaM6tHe9IdMMuBIvA4MBMFNtsC/w2UgK2B9VCgMyih/pmZtYT/B/Sasr2D+EXAAAAAAElFTkSuQmCC"/>
</defs>
</svg>


                
                    <br />
                    <br />
                    Businesses to take their digital marketing to the next level with animated videos.

                </div>
                <div className="col-sm my-4" style={{display:"flex", flexWrap:"wrap"}}>
                    Company
                    <br />
                    <br />
                    About Us 
                    <br />
                    How it Works
                    <br />
                    Pricing
                    <br />
                    Privacy Policy
                </div>
                <div className="col-md my-4">
                    Industries
                    <br />
                    <br />
                    General Shop
                    <br />
                    Insurance
                    <br />
                    Jewellery
                    <br />
                    Miscellaneous
                    <br />
                    Education
                    <br />
                    Covid Safety
                    <br />
                    Digital marketing
                </div>
                
                <div className="col-md my-4">
                    Contact Us
                    <br />
                    <br />
                    +918744032032
                    <br />
                    ad@kalpkriti.com
                    <br />
                    Play Store
                </div>

            </div>

            
        </div>

        </div>
    )
}
