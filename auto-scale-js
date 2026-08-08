(function() {
  function applyAutoScale() {
    var desktopWidth = 1280; // Target laptop layout width
    var screenWidth = window.innerWidth;
    var root = document.getElementById('root') || document.body;

    if (screenWidth < desktopWidth) {
      var scale = screenWidth / desktopWidth;

      // 1. Root container ko 1280px par lock karo taaki text na pichke
      root.style.width = desktopWidth + 'px';
      root.style.minWidth = desktopWidth + 'px';
      
      // 2. CSS Scale apply karke frame ke andar fit karo
      root.style.transform = 'scale(' + scale + ')';
      root.style.transformOrigin = 'top left';
      
      // 3. Page ki extra height scaling adjustment
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
    } else {
      // Laptop / Large Screens par normal reset
      root.style.width = '';
      root.style.minWidth = '';
      root.style.transform = '';
      root.style.transformOrigin = '';
    }
  }

  // Page load aur window resize par auto run karega
  window.addEventListener('resize', applyAutoScale);
  window.addEventListener('load', applyAutoScale);
  document.addEventListener('DOMContentLoaded', applyAutoScale);
  applyAutoScale();
})();
