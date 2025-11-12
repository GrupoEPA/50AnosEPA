document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const invitation = document.getElementById('invitation');
    const guestNameInput = document.getElementById('guest-name');
    const departmentInput = document.getElementById('department');
    const personalizedMessage = document.querySelector('.personalized-message');
  
    // 1. ANIMAÇÃO DE ENTRADA (3 SEGUNDOS)
    const delayTime = 3000;
  
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transition = 'opacity 0.7s ease';
      loadingScreen.style.pointerEvents = 'none'; // 🔹 libera cliques imediatamente
  
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        invitation.classList.remove('hidden');
        invitation.classList.add('visible');
      }, 700); // tempo da transição de fade
    }, delayTime);
  
    // 2. FUNCIONALIDADE DE PERSONALIZAÇÃO
    const updatePersonalizedMessage = () => {
      const name = guestNameInput?.value.trim();
      const dept = departmentInput?.value.trim();
  
      let message = "Aguardamos ansiosamente por você!";
  
      if (name && dept) {
        message = `É uma honra tê-lo(a), <strong>${name}</strong> (${dept}), nesta celebração!`;
      } else if (name) {
        message = `É uma honra tê-lo(a), <strong>${name}</strong>, nesta celebração!`;
      }
  
      if (personalizedMessage) personalizedMessage.innerHTML = message;
    };
  
    if (guestNameInput && departmentInput) {
      guestNameInput.addEventListener('input', updatePersonalizedMessage);
      departmentInput.addEventListener('input', updatePersonalizedMessage);
      updatePersonalizedMessage();
    }
  });
  