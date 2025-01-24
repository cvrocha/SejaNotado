class bodyHidden extends HTMLElement {
  connectedCallback(){
  this.innerHTML = `
      <!-- Timer -->
      <div class="timer">
        <div class="timer-content">
          <span id="countdown"></span> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <p> Esta oferta é válida por tempo LIMITADO!</p>
        </div>
      </div>
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="flex-container">
            <div class="container-text-head">
              <h1>Destaque seu <span class="orange-color">currículo</span> e conquiste mais entrevistas<span class="orange-color">.</span></h1>
              <p class="subtitle">(Guia completo desenvolvido por recrutadores e validado por profissionais de RH).</p>
              <div class="price-tag">
                <p class="price-text">De: <s>R$ 49,99</s></p>
                <p class="price-value">Por R$ 9,99</p>
                <a rel="noopener" href="https://pay.hotmart.com/N97718490S" class="cta-button">
                  Comprar Agora
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <p class="price-note">(Oferta válida por tempo limitado,</p>
                <p class="price-note">80% de desconto)</p>
              </div>
            </div>
            <div class="container-image-head">
              <div class="light-image">
                <img src="./_img/capa-ebook-3d-modelo-8a.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Benefícios -->
      <section class="benefits">
        <div class="container">
          <h2>O Que Você Vai Encontrar No Ebook</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div class="benefit-content">
                <h3>ATS Optimization</h3>
                <p>Como otimizar seu currículo para sistemas ATS e aumentar suas chances. Aprenda as técnicas para garantir que seu currículo seja aprovado pelos sistemas de triagem automática.</p>
              </div>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <div class="benefit-content">
                <h3>Palavras-chave Estratégicas</h3>
                <p>Lista completa de palavras-chave para destacar suas competências. Descubra as expressões que os recrutadores mais valorizam em cada área de atuação.</p>
              </div>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
              </div>
              <div class="benefit-content">
                <h3>Dicas de Recrutadores</h3>
                <p>Aprenda o que os recrutadores realmente procuram em um currículo. Descubra como destacar suas habilidades, evitar erros comuns e criar um impacto positivo desde a primeira impressão.</p>
              </div>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><line x1="6" y1="10" x2="18" y2="10"/><line x1="9" y1="6" x2="9.01" y2="6"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
              </div>
              <div class="benefit-content">
                <h3>Como Montar o Currículo</h3>
                <p>Saiba como estruturar um currículo eficiente, destacando suas habilidades, experiências e conquistas. Entenda o que incluir, como organizar as informações e chamar a atenção do recrutador.</p>
              </div>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><path d="M6 16h12"/><path d="M9 20h6"/><path d="M3 8h18"/><path d="M6 4h12"/><path d="M9 0h6"/></svg>
              </div>
              <div class="benefit-content">
                <h3>Currículos Internacionais</h3>
                <p>Descubra as diferenças culturais e de formato para criar currículos que atendam às expectativas de recrutadores no exterior. Aprenda sobre idiomas, objetivos e estrutura para cada mercado.</p>
              </div>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21V7a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v14m-6 0h12"/><path d="M8 10h8"/><path d="M8 14h8"/><path d="M8 18h4"/></svg>
              </div>
              <div class="benefit-content">
                <h3>Modelos de Currículos</h3>
                <p>Tenha acesso a modelos prontos para diferentes situações: estágio, posições júnior, pleno e sênior, currículos internacionais, e até transições de carreira. Encontre o formato certo para se destacar em cada oportunidade!</p>
              </div>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12" y2="16"/></svg>
              </div>
              <div class="benefit-content">
                <h3>Erros Mais Comuns</h3>
                <p>Evite os erros que podem prejudicar sua candidatura, como informações desatualizadas, layouts confusos ou falta de personalização. Aprenda como corrigi-los para se destacar.</p>
              </div>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
              </div>
              <div class="benefit-content">
                <h3>Prompts para IA</h3>
                <p>Prompts otimizados para usar com ChatGPT e outras IAs para melhorar seu currículo. Aprenda a extrair o máximo das ferramentas de IA para criar um currículo impressionante.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    
      <section class="special-offer">
        <h2>Tudo isso por apenas <span>R$9,99.</span></h2>
        <a class="cta-button">QUERO MELHORAR MEU CURRÍCULO</a>
        <p class="price-note">(Oferta válida por tempo limitado.)</p>
        <div class="icons">
          <div class="icon-item">
            <i class="fas fa-shield-alt"></i>
            <p>✅ 100% seguro</p>
          </div>
          <div class="icon-item">
            <i class="fas fa-bolt"></i>
            <p>✅ Acesso imediato</p>
          </div>
          <div class="icon-item">
            <i class="fas fa-cloud"></i>
            <p>✅ 100% Digital</p>
          </div>
        </div>
      </section>
      
    
      <!-- Resto do conteúdo mantido... -->
      
      <section class="testimonials">
        <h2>Se eles conseguiram <span>você também consegue.</span></h2>
        <div class="testimonials-grid">
          <div class="testimonial-item">
            <img src="./_img/depoimento-1.jpg" alt="Depoimento 1">
          </div>
          <div class="testimonial-item">
            <img src="./_img/depoimento-2.jpg" alt="Depoimento 2">
          </div>
          <div class="testimonial-item">
            <img src="./_img/depoimento-3.jpg" alt="Depoimento 3">
          </div>
        </div>
      </section>
      
      <section class="comparison">
        <h2>Tudo isso foi <span>100% aprovado</span> por quem usou nosso ebook, agora a escolha é sua:</h2>
        <div class="comparison-container">
          <!-- Sem o Ebook -->
          <div class="comparison-item">
            <div class="icon">😟</div>
            <h3>SEM O EBOOK</h3>
            <ul>
              <li>❌ Envia currículos sem personalização.</li>
              <li>❌ Recebe poucas respostas ou nenhuma entrevista.</li>
              <li>❌ Não sabe como se destacar na entrevista.</li>
              <li>❌ Perde oportunidades por falta de preparo.</li>
              <li>❌ Continua sem emprego por meses.</li>
            </ul>
          </div>
      
          <!-- Com o Ebook -->
          <div class="comparison-item2">
            <div class="icon">😎</div>
            <h3>COM O EBOOK</h3>
            <ul>
              <li>✅ Aprende a personalizar cada currículo.</li>
              <li>✅ Recebe várias respostas e convites para entrevistas.</li>
              <li>✅ Destaca-se durante as entrevistas com confiança.</li>
              <li>✅ Conquista a vaga dos sonhos mais rápido.</li>
              <li>✅ Torna-se mais valorizado no mercado de trabalho.</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section class="special-offer">
        <h2>Oferta Especial</h2>
        <p class="limited-time">ESTA CONDIÇÃO É VÁLIDA SOMENTE ATÉ</p>
        <div class="countdown" id="countdown">
          <div class="time-box">
            <span id="days">00</span>
            <p>Dias</p>
          </div>
          <div class="time-box">
            <span id="hours">00</span>
            <p>Horas</p>
          </div>
          <div class="time-box">
            <span id="minutes">00</span>
            <p>Minutos</p>
          </div>
          <div class="time-box">
            <span id="seconds">00</span>
            <p>Segundos</p>
          </div>
        </div>
        <div class="offer-content">
          <div class="offer-details">
            <ul>
              <li>✅ 5 Modelos de Currículo Personalizáveis</li>
              <li>✅ Dicas para destacar seu currículo</li>
              <li>✅ Estratégias comprovadas para conquistar entrevistas</li>
              <li>✅ 07 dias de garantia</li>
              <li>✅ Valor único e sem mensalidade</li>
              <li>✅ Acesso vitalício e a atualizações</li>
              <!-- <li>🎁 Bônus exclusivo: <em>Guia para Brilhar em Entrevistas</em></li> -->
            </ul>
          </div>
          <div class="offer-box">
            <h3>Guia Prático de Currículos</h3>
            <p class="price"><span>De R$ 49,99</span> R$ <strong>9,99</strong></p>
            <p class="installment">(ou 1x no cartão)</p>
            <a rel="noopener" href="https://pay.hotmart.com/N97718490S" class="cta-button">COMPRAR AGORA!</a>
            <p class="price-note">(Oferta válida por tempo limitado.)</p>
            <div class="guarantees">
              <span>✅ 100% seguro</span>
              <span>✅ Acesso imediato</span>
              <span>✅ 100% digital</span>
            </div>
          </div>
        </div>
      </section>
      
      <section class="secure-purchase">
        <div class="content-wrapper">
          <div class="image-side">
            <img src="./_img/selo-garantia_less.png" alt="7 Dias de Garantia" />
          </div>
          <div class="text-side">
            <h3>COMPRA <span>100%</span> SEGURA</h3>
            <p>
              Ao adquirir o nosso eBook, você terá acesso imediato ao <strong>Guia Prático para um Currículo Perfeito</strong> diretamente no seu e-mail + bônus exclusivo.
            </p>
            <p>
              Com as dicas do eBook, você poderá criar um currículo que realmente chama a atenção dos recrutadores e aumenta suas chances de conquistar a vaga dos seus sonhos.
            </p>
            <p>
              Caso você sinta que o eBook não atendeu às suas expectativas, é só solicitar o reembolso dentro de 7 dias que devolveremos o valor integral da sua compra, sem complicações.
            </p>
          </div>
        </div>
      </section>
      
      <!-- CTA -->
      <section class="cta">
        <div class="container">
          <h2>Não perca mais oportunidades por causa do seu currículo</h2>
          <p>Aproveite o desconto especial e transforme seu currículo hoje mesmo!</p>
          <h1 class="final-price">De: <s>R$ 49,99</s> por apenas R$ 9,99</h1>
          <a rel="noopener" href="https://pay.hotmart.com/N97718490S" class="cta-button">
            COMPRAR AGORA
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <p class="price-note">(Oferta válida por tempo limitado.)</p>
        </div>
      </section>
      
      <section class="faq">
        <div class="container">
          <h2>Perguntas <span>Frequentes</span></h2>
          <p>Confira as respostas para as principais dúvidas a respeito do nosso eBook.</p>
          <div class="faq-container">
            <!-- Pergunta 1 -->
            <div class="faq-item">
              <div class="faq-question">
                <span>O que vou aprender com o eBook?</span>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Você aprenderá a criar currículos personalizados, destacar suas habilidades, aumentar suas chances de entrevistas e conquistar a vaga desejada.</p>
              </div>
            </div>
      
            <!-- Pergunta 2 -->
            <div class="faq-item">
              <div class="faq-question">
                <span>Como vou receber o eBook?</span>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Após a confirmação do pagamento, você receberá um link para download do eBook diretamente no seu e-mail.</p>
              </div>
            </div>
      
            <!-- Pergunta 3 -->
            <div class="faq-item">
              <div class="faq-question">
                <span>O pagamento é feito neste site?</span>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Não. O pagamento é processado por um site de terceiros seguro, especializado em transações digitais.</p>
              </div>
            </div>
      
            <!-- Pergunta 4 -->
            <div class="faq-item">
              <div class="faq-question">
                <span>Quanto tempo tenho acesso ao eBook?</span>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>O eBook é seu para sempre. Assim que fizer o download, você poderá acessá-lo quando quiser.</p>
              </div>
            </div>
      
            <!-- Pergunta 5 -->
            <div class="faq-item">
              <div class="faq-question">
                <span>É possível pedir reembolso?</span>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Sim, você pode solicitar o reembolso em até 7 dias após a compra caso não esteja satisfeito com o conteúdo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <h2>Ebook's Online</h2>
            <p>EBOOK'S ONLINE – TODOS OS DIREITOS RESERVADOS</p>
            <p>
              AVISO LEGAL: Nenhuma informação contida neste produto deve ser interpretada como uma garantia de obtenção de resultados. Qualquer exemplo mencionado é apenas ilustrativo e não garante resultados iguais. Este site é independente e não está associado a nenhuma marca ou empresa específica.
            </p>
            <p>Copyright 2024 – Todos os Direitos Reservados a Caio Rocha</p>
          </div>
        </div>
      </footer>
  `;
  
  
  }

}

customElements.define('body-hidden', bodyHidden);