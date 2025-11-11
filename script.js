document.addEventListener('DOMContentLoaded', (event) => {
  const loadingScreen = document.getElementById('loading-screen');
  const invitation = document.getElementById('invitation');
  const guestNameInput = document.getElementById('guest-name');
  const departmentInput = document.getElementById('department');
  const personalizedMessage = document.querySelector('.personalized-message');

  // 1. ANIMAÇÃO DE ENTRADA (3 SEGUNDOS)
  
  const delayTime = 3000; 

  setTimeout(() => {
      loadingScreen.style.opacity = '0'; 

      setTimeout(() => {
          loadingScreen.classList.add('hidden');
          invitation.classList.remove('hidden');
          setTimeout(() => {
              invitation.classList.add('visible'); 
          }, 50); 
          
      }, 500); 
      
  }, delayTime);


  // 2. FUNCIONALIDADE DE PERSONALIZAÇÃO
  
  const updatePersonalizedMessage = () => {
      const name = guestNameInput.value.trim();
      const dept = departmentInput.value.trim();

      let message = "Aguardamos ansiosamente por você!";

      if (name && dept) {
          message = `É uma honra tê-lo(a), **${name}** (${dept}), nesta celebração!`;
      } else if (name) {
          message = `É uma honra tê-lo(a), **${name}**, nesta celebração!`;
      }
      
      personalizedMessage.innerHTML = message;
  };

  guestNameInput.addEventListener('input', updatePersonalizedMessage);
  departmentInput.addEventListener('input', updatePersonalizedMessage);

  updatePersonalizedMessage();
});