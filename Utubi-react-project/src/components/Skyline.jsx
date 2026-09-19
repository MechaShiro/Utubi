import '../css/skyline.css'

import React, { useMemo } from 'react';


export default function Skyline() {
  const totalPredios = 20; // Aumentei para os prédios ficarem mais finos e detalhados

  // O useMemo "guarda" o desenho da cidade para ela não mudar de repente
  const prediosGerados = useMemo(() => {
    return Array.from({ length: totalPredios }).map((_, index) => {
      // Gera uma altura aleatória entre 35% e 95% do ecrã
      const alturaAleatoria = Math.floor(Math.random() * (95 - 35 + 1)) + 35;
      
      return {
        id: index,
        altura: `${alturaAleatoria}%`
      };
    });
  }, [totalPredios]);

  return (
    <div className="skyline-container">
      {prediosGerados.map((predio) => (
        <div 
          key={predio.id} 
          className="predio" 
          style={{ height: predio.altura }} // Aplica a altura aleatória aqui
        />
      ))}
    </div>
  );
}
