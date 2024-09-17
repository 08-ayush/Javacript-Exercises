function CheckResolution() {
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    const orientation = width > height ? "Landscape" : "Portrait";
  
    document.getElementById(
      "output"
    ).innerText = `The current browser resolution is: ${orientation} \nWidth: ${width}px \nHeight: ${height}px`;
  }
  
  window.onload = checkResolution;
  