"use client"
import React, { useEffect, useState } from 'react';

interface GridItemProps {
  size: number;
  x: number;
  y: number;
  mouseX: number;
  mouseY: number;
}

const GridItem: React.FC<GridItemProps> = ({ size, x, y, mouseX, mouseY }) => {
  const distance = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));
  const maxDistance = 200; // Maximum distance for the effect

  // Calculate intensity based on distance (closer = more intense)
  const intensity = Math.max(0, 1 - distance / maxDistance);
  
  return (
    <div
      className="absolute rounded-md transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: `rgba(59, 130, 246, ${0.05 + intensity * 0.3})`,
        transform: `scale(${1 + intensity * 0.2})`,
        zIndex: 1,
      }}
    />
  );
};

interface GridBackgroundProps {
  children?: React.ReactNode;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gridItems, setGridItems] = useState<{ id: number; x: number; y: number }[]>([]);
  const gridSize = 40; // Size of each grid item
  const spacing = 60; // Space between grid items

  // Generate grid items
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const columns = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      
      const items = [];
      let id = 0;
      
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          items.push({
            id: id++,
            x: i * spacing,
            y: j * spacing,
          });
        }
      }
      
      setGridItems(items);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-50">
      {gridItems.map((item) => (
        <GridItem
          key={item.id}
          size={gridSize}
          x={item.x}
          y={item.y}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        />
      ))}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;