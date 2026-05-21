import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const primaryCursorRef = useRef(null);

  useEffect(() => {
    // Check for touch devices so we don't handle custom cursors on mobile
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e) => {
      // Instantly update primary cursor (NO THROTTLE for maximum smoothness)
      if (primaryCursorRef.current) {
        primaryCursorRef.current.style.left = `${e.clientX}px`;
        primaryCursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e) => {
      if (primaryCursorRef.current) {
        if (e.target.closest('a, button, [role="button"], input[type="submit"], input[type="button"], .clickable')) {
          primaryCursorRef.current.src = "/newElements/custom cursor click.png";
          primaryCursorRef.current.style.transform = 'translate(-20%, -20%) scaleX(1)';
          primaryCursorRef.current.style.width = '80px';
        } else {
          primaryCursorRef.current.src = "/newElements/custom cursor.png";
          primaryCursorRef.current.style.transform = 'translate(-20%, -20%) scaleX(-1)';
          primaryCursorRef.current.style.width = '56px';
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div id="cursor-wrapper" style={{ pointerEvents: 'none', zIndex: 9999 }}>
      {/* Primary Custom Cursor */}
      <img 
        ref={primaryCursorRef}
        src="/newElements/custom cursor.png"
        alt="cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '56px', // Increased size from 32px
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-20%, -20%) scaleX(-1)' // offset slightly so clicking feels natural, and flipped horizontally
        }}
      />
    </div>
  );
};

export default CustomCursor;
