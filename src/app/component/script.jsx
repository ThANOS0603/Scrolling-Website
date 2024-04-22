import React, { useEffect } from 'react';

function ScrollAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      const text = document.getElementById('text');
      const treeleft = document.getElementById('treeleft');
      const treeright = document.getElementById('treeright');
      const gateright = document.getElementById('gateright');
      const gateleft = document.getElementById('gateleft');
      
      if (text && treeleft && treeright && gateright && gateleft) {
        let value = window.scrollY;

        text.style.marginTop = value * 2.5 + 'px';
        treeleft.style.left = value * -1.5 + 'px';
        treeright.style.left = value * 1.5 + 'px';
        gateright.style.left = value * -0.5 + 'px';
        gateleft.style.left = value * 0.5 + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}

export default ScrollAnimation;
