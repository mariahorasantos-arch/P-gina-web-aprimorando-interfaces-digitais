<script>
        const botao = document.querySelectorAll('button');

        botoes.forEach(function(botao) {
            let curtiu = false;

            botao.addEventListener('click', function() {
                let contador = botao.querySelector("span");
                let valorAtual = parseInt(contador.textContent);

                if (!curtiu) {
                    contador.textContent = valorAtual + 1;
                    curtiu = true;
                } else {
                    contador.textContent = valorAtual - 1;
                    curtiu = false;
                }
            });
        });
    </script>