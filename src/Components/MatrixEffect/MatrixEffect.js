import React, { useEffect, useRef } from 'react';
import * as M from '../Main/main_style.js';

const MatrixEffect = () => {
  const canvasRef = useRef(null);
  const letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
  const fontSize = 18;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Definindo o tamanho do canvas
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Calculando o número de colunas
    const columns = canvas.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(1);
    const speeds = new Array(Math.floor(columns)).fill(0).map(() => Math.random() * 0.5 + 0.1);

    const draw = () => {
      // Fundo com opacidade para efeito de rastro
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        // Texto aleatório
        const text = letters[Math.floor(Math.random() * letters.length)];
        
        // Cor e estilo da fonte com opacidade variável
        const opacity = Math.random() * 0.3 + 0.1; // Opacidade entre 0.1 e 0.4
        ctx.fillStyle = `rgba(0, 150, 255, ${opacity})`;
        ctx.font = `${fontSize}px 'Courier New'`;
        
        // Desenhar o texto
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Resetar a posição quando chegar ao final
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        // Mover para baixo com velocidade variável
        drops[i] += speeds[i];
      }

      requestAnimationFrame(draw);
    };

    // Iniciar a animação
    draw();

    // Ajustar o tamanho do canvas quando a janela for redimensionada
    const handleResize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <M.MatrixBackground>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </M.MatrixBackground>
  );
};

export default MatrixEffect; 