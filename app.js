
  const pawsBg = document.getElementById('pawsBg');
  for (let i = 0; i < 18; i++) {
    const paw = document.createElement('div');
    paw.className = 'paw';
    paw.textContent = ['🐾','🐱','💕','✨','🌸'][Math.floor(Math.random()*5)];
    paw.style.left = Math.random()*100 + '%';
    paw.style.animationDuration = (12 + Math.random()*20) + 's';
    paw.style.animationDelay = (Math.random()*20) + 's';
    paw.style.fontSize = (0.8 + Math.random()*1.5) + 'rem';
    pawsBg.appendChild(paw);
  }

  // ===== SPARKLES ON CLICK =====
  const sparkleEmojis = ['💕','🐱','✨','🌸','🐾','💖','🌷','😻'];
  document.addEventListener('click', function(e) {
    for (let i = 0; i < 6; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle';
      s.textContent = sparkleEmojis[Math.floor(Math.random()*sparkleEmojis.length)];
      s.style.left = e.clientX + 'px';
      s.style.top  = e.clientY + 'px';
      const angle = (Math.random()*360) * Math.PI/180;
      const dist  = 40 + Math.random()*60;
      s.style.setProperty('--dx', Math.cos(angle)*dist + 'px');
      s.style.setProperty('--dy', Math.sin(angle)*dist + 'px');
      s.style.animationDelay = (Math.random()*0.2) + 's';
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1000);
    }
  });

  // ===== SCROLL REVEAL =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
