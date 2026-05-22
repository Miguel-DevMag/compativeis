# Implementação - Seção de Aulas "Semana Antes do Divórcio"

## 📋 Resumo

Foi adicionada uma nova seção responsiva na landing page com 3 aulas do YouTube sobre o tema "A Semana Antes do Divórcio". A seção está posicionada entre a **Metodologia (3 Rs)** e o **Programa**, integrando-se perfeitamente ao design existente.

## 🎯 Características Implementadas

### ✅ Seção HTML Nova
- **Local**: Entre `#metodologia` e `#programa`
- **ID**: `#aulas`
- **Componentes**:
  - Badges com ícone de graduação
  - Título: "Semana Antes do **Divórcio**" (Divórcio em destaque)
  - Descrição explicativa
  - Grid de 3 aulas
  - CTA final para formulário

### ✅ Design Profissional
- **Estilo**: Glassmorphism (vidro jateado translúcido)
- **Cores**: Paleta Vantablack & True Gold (consistente)
- **Tipografia**: Playfair Display + Inter
- **Efeitos Hover**: Elevação suave + borda dourada
- **Animações**: GSAP scroll-trigger fade-in

### ✅ Responsividade
```
Desktop (1280px+):  3 colunas
Tablet (1024px):   2 colunas
Mobile (768px-):   1 coluna
```

### ✅ Videos Embarcados
- **Aula 1**: Antes da Crise
  - URL: https://www.youtube.com/watch?v=RiKao9-YMZk
  
- **Aula 2**: A Dinâmica do Casal
  - URL: https://www.youtube.com/watch?v=B2yUvhbr-5Y
  
- **Aula 3**: Decisão Consciente
  - URL: https://www.youtube.com/watch?v=azNDrK8t3xM

**Proporção**: 16:9 (adaptável a qualquer tamanho)

## 📂 Arquivos Modificados

### 1. `index.html`
- ✏️ Adicionada seção `.classes-section` com classes completas
- ✏️ Atualizado menu de navegação com link "As Aulas"
- ✏️ Integração com formulário Respondi

### 2. `css/style.css`
- ✏️ `.classes-section` e componentes relacionados
- ✏️ `.classes-grid` com CSS Grid responsivo
- ✏️ `.class-card` com glassmorphism
- ✏️ `.class-iframe` para videos responsivos
- ✏️ `.classes-cta` para chamada para ação
- ✏️ Media queries para 1024px e 768px

## 🎨 Estrutura CSS

```css
/* Grid Responsivo */
.classes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 colunas */
  gap: 2.5rem;
}

/* Cards com Glassmorphism */
.class-card {
  background: var(--bg-glass);
  backdrop-filter: blur(24px);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  padding: 2rem;
}

/* Videos em 16:9 */
.class-video-wrapper {
  padding-bottom: 56.25%;  /* Aspect ratio 16:9 */
  position: relative;
}

.class-iframe {
  position: absolute;
  width: 100%;
  height: 100%;
}
```

## 🔗 Menu Atualizado

O menu de navegação agora inclui:
```html
<a href="#aulas" class="nav-link">
  <span class="link-text">As Aulas</span>
</a>
```

Ordem de navegação:
1. O Caso
2. O Márcio
3. O Método
4. **As Aulas** ← NOVO
5. O Programa
6. Relatos
7. Suporte

## 🎬 Integração com Animações GSAP

A seção usa a classe `gsap-stagger` que já está configurada no `js/main.js`:

```javascript
gsap.utils.toArray(".gsap-stagger").forEach((elem, i) => {
  gsap.from(elem, {
    scrollTrigger: { trigger: elem.closest('.bento-grid, .methodology-steps, .classes-grid') },
    y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: i * 0.15
  });
});
```

Cada card da aula entra com fade-in escalonado ao fazer scroll.

## 📱 Breakpoints

| Tamanho | Grid | Uso |
|---------|------|-----|
| ≥1280px | 3 colunas | Desktop |
| 1024px | 2 colunas | Tablet |
| 768px | 1 coluna | Mobile |

## ✨ Funcionalidades Extras

### Links para YouTube
- Cada aula tem um link "Assistir no YouTube"
- Ícone de seta que rotaciona no hover
- Cor dourada (var(--gold-pure))

### Call-to-Action
- Seção `.classes-cta` com gradient sutil
- Texto convidativo
- Botão "Preencher Formulário"
- Links para: `https://form.respondi.app/eW9PPMu8`

### Badges
- Numeradas (AULA 1, 2, 3)
- Fundo dourado com transparência
- Borda dourada fina

## 🚀 Deployment

Os arquivos estão prontos para produção:
- ✅ Sem quebra do código existente
- ✅ Sem bibliotecas externas adicionais
- ✅ Compatível com navegadores modernos
- ✅ Otimizado para performance

## 📝 Notas

- Os videos do YouTube carregam sob demanda (lazy loading via iframe)
- O design é totalmente responsivo e testado
- As animações GSAP estão integradas automaticamente
- O formulário Respondi permanece o mesmo: `https://form.respondi.app/eW9PPMu8`

---

**Data**: 22 de maio de 2026  
**Versão**: 1.0  
**Status**: ✅ Implementado e Testado
