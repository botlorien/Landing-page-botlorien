    // Exibir o modal
    document.querySelector('[href="#consulta"]').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('emailModal').style.display='flex';
      });
    
      // Enviar o formulário para o Mailchimp
      document.getElementById('closeModal').addEventListener('click', function(event) {
        event.preventDefault();
        // Fechar o modal após a submissão
        document.getElementById('emailModal').style.display='none';
    
        // Adicione aqui o código de integração com o Mailchimp.
      });