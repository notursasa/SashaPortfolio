import { useEffect, useRef } from 'react';

const InteractiveGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const GRID_SPACING = 30;
    const INTERACTION_RADIUS = 150;
    const PULL_STRENGTH = 0.4;
    const RETURN_SPEED = 0.15;
    
    let points = [];
    let mouse = { x: -1000, y: -1000 };

    const initGrid = () => {
      points = [];
      for (let x = 0; x < width; x += GRID_SPACING) {
        for (let y = 0; y < height; y += GRID_SPACING) {
          points.push({
            bx: x, // base X
            by: y, // base Y
            cx: x, // current X
            cy: y  // current Y
          });
        }
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initGrid();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    initGrid();

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw pink mouse aura
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
        gradient.addColorStop(0, 'rgba(255, 182, 193, 0.25)'); // Soft pink
        gradient.addColorStop(1, 'rgba(255, 182, 193, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw dots
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'; // Faint, non-dizzying dots
      
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        
        // Physics logic
        const dx = mouse.x - p.bx;
        const dy = mouse.y - p.by;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = p.bx;
        let targetY = p.by;

        if (dist < INTERACTION_RADIUS) {
          // Pull towards mouse based on proximity
          const force = (INTERACTION_RADIUS - dist) / INTERACTION_RADIUS;
          targetX = p.bx + dx * force * PULL_STRENGTH;
          targetY = p.by + dy * force * PULL_STRENGTH;
        }

        // Spring easing towards target
        p.cx += (targetX - p.cx) * RETURN_SPEED;
        p.cy += (targetY - p.cy) * RETURN_SPEED;

        // Render point
        ctx.beginPath();
        ctx.arc(p.cx, p.cy, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -2 // Behind content, above base color
      }}
    />
  );
};

export default InteractiveGrid;
