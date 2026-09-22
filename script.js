// ==========================================
// CONFIGURACIÓN DE GOOGLE OAUTH Y ADMINISTRACIÓN
// ==========================================
const GOOGLE_CLIENT_ID = '695556528337-katrqu8atnal1d2j9ud3t9jpjhajjhgb.apps.googleusercontent.com';
var ADMIN_EMAIL = 'correadediego30@gmail.com';

// ==========================================
// GESTIÓN DEL FORO Y LOCALSTORAGE (INICIALIZACIÓN)
// ==========================================
let forums = [];
try {
    forums = JSON.parse(localStorage.getItem('nexus_forums')) || [];
} catch (e) {
    console.error('Error al cargar foros desde localStorage:', e);
    forums = [];
}

if (forums.length === 0) {
    forums = [
        {
            id: 'forum_1',
            subject: 'Matemáticas',
            title: 'Foro Oficial de Cálculo y Álgebra',
            desc: 'Espacio para resolver dudas sobre derivadas e integrales con apoyo de la comunidad.',
            admin: 'AdminSuperNova',
            adminEmail: ADMIN_EMAIL,
            messages: [
                { id: 1, author: 'AdminSuperNova', authorEmail: ADMIN_EMAIL, text: '¡Bienvenidos a SuperNova IA! Suban sus preguntas y ejercicios.', img: null }
            ]
        }
    ];
}

// ==========================================
// ESTADO GLOBAL
// ==========================================
let currentUser = localStorage.getItem('username') || '';
let currentUserEmail = localStorage.getItem('user_email') || ADMIN_EMAIL;
let currentForumId = null;
let selectedImageBase64 = null;
let currentEnglishLevel = 'B1';

// ESTADO DEL CHAT IA
let currentAIMode = 'conversational';
let chatAttachmentBase64 = null;
let chatAttachmentName = null;

// ==========================================
// FUNCIONES DE UTILIDAD
// ==========================================
function escapeHTML(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}

function generateDefaultUsername() {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    return `Usuario_${randomId}`;
}

function safeSaveForums() {
    try {
        localStorage.setItem('nexus_forums', JSON.stringify(forums));
    } catch (e) {
        console.error('Error guardando en localStorage:', e);
        alert('El almacenamiento local está lleno. No se pudo guardar el último cambio.');
    }
}

function isUserAdmin(email, name) {
    return (email === ADMIN_EMAIL || name === 'AdminSuperNova' || name === 'Admin');
}

// ==========================================
// INICIALIZACIÓN DEL DOCUMENTO (DOM READY)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ El script script.js optimizado se está ejecutando correctamente.');

    const welcomeScreen = document.getElementById('welcome-screen');
    const usernameInput = document.getElementById('username');
    const userEmailInput = document.getElementById('user-email');

    if (!currentUser) {
        currentUser = generateDefaultUsername();
        localStorage.setItem('username', currentUser);
    }

    if (localStorage.getItem('user_logged_in') === 'true' && currentUser) {
        if (welcomeScreen) welcomeScreen.style.display = 'none';
        if (usernameInput) usernameInput.value = currentUser;
        if (userEmailInput) userEmailInput.value = currentUserEmail;
        calculateDailyStreak();
    } else {
        if (welcomeScreen) welcomeScreen.style.display = 'flex';
        initGoogleSignIn();
    }

    updateUIStats();
    loadAboutContent(); // Carga de Visión y Misión ampliada
});

// ==========================================
// GOOGLE SIGN-IN Y AUTENTICACIÓN
// ==========================================
function initGoogleSignIn() {
    if (window.google && google.accounts) {
        google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleGoogleCredentialResponse,
            auto_select: false
        });

        const btnContainer = document.getElementById('google-btn-container');
        if (btnContainer) {
            google.accounts.id.renderButton(
                btnContainer,
                { theme: 'outline', size: 'large', type: 'standard', text: 'continue_with', shape: 'rectangular', width: 300 }
            );
        }
    } else {
        setTimeout(initGoogleSignIn, 300);
    }
}

function handleGoogleCredentialResponse(response) {
    try {
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        const payload = JSON.parse(jsonPayload);

        const googleUserName = payload.name || generateDefaultUsername();
        const email = payload.email || ADMIN_EMAIL;
        completeLogin(googleUserName, email);
    } catch (e) {
        console.error('Error procesando credenciales de Google:', e);
        completeLogin(generateDefaultUsername(), ADMIN_EMAIL);
    }
}

function loginManual() {
    const input = document.getElementById('manual-user-input');
    const val = input ? input.value.trim() : '';
    const assignedUser = val ? val : generateDefaultUsername();
    completeLogin(assignedUser, ADMIN_EMAIL);
}

function completeLogin(name, email) {
    currentUser = name;
    currentUserEmail = email || ADMIN_EMAIL;

    localStorage.setItem('username', currentUser);
    localStorage.setItem('user_email', currentUserEmail);
    localStorage.setItem('user_logged_in', 'true');
    
    const usernameInput = document.getElementById('username');
    const userEmailInput = document.getElementById('user-email');
    const welcomeScreen = document.getElementById('welcome-screen');

    if (usernameInput) usernameInput.value = currentUser;
    if (userEmailInput) userEmailInput.value = currentUserEmail;
    if (welcomeScreen) welcomeScreen.style.display = 'none';
    
    calculateDailyStreak();
}

function saveUsername(val) {
    if (val && val.trim()) {
        currentUser = val.trim();
        localStorage.setItem('username', currentUser);
    }
}

// ==========================================
// NAVEGACIÓN Y PESTAÑAS
// ==========================================
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.nav-btn, .nav-item, .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeTab = document.getElementById('tab-' + tabId);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    const activeBtn = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    if (tabId === 'forum') {
        renderForumList();
    }
}

// ==========================================
// ESTADÍSTICAS Y RACHA DIARIA
// ==========================================
function calculateDailyStreak() {
    let streak = parseInt(localStorage.getItem('user_streak') || '0', 10);
    let tokens = parseInt(localStorage.getItem('user_tokens') || '0', 10);
    let lastLoginDate = localStorage.getItem('last_login_date');

    const today = new Date().toISOString().split('T')[0];

    if (!lastLoginDate) {
        streak = 1;
        tokens += 100;
        localStorage.setItem('last_login_date', today);
    } else if (lastLoginDate !== today) {
        const lastDate = new Date(lastLoginDate);
        const currentDate = new Date(today);
        const diffTime = Math.abs(currentDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            streak += 1;
            let reward = 100 + (Math.min(streak, 7) - 1) * 50;
            if (streak >= 8) reward = 200;
            tokens += reward;
        } else {
            streak = 1;
            tokens += 100;
        }
        localStorage.setItem('last_login_date', today);
    }

    localStorage.setItem('user_streak', streak.toString());
    localStorage.setItem('user_tokens', tokens.toString());

    updateUIStats();
}

function updateUIStats() {
    let streak = localStorage.getItem('user_streak') || '0';
    let tokens = localStorage.getItem('user_tokens') || '0';
    
    const streakElem = document.getElementById('streak-days');
    const tokensElem = document.getElementById('user-tokens');

    if (streakElem) streakElem.innerText = streak;
    if (tokensElem) tokensElem.innerText = parseInt(tokens, 10).toLocaleString();
}

// ==========================================
// GESTIÓN DE FOROS COMUNITARIOS
// ==========================================
function renderForumList(filteredForums = forums) {
    const listContainer = document.getElementById('forum-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    if (filteredForums.length === 0) {
        listContainer.innerHTML = '<p style="grid-column: 1/-1; color: var(--text-secondary); text-align: center; padding: 20px;">No se encontraron salas disponibles.</p>';
        return;
    }

    filteredForums.forEach(forum => {
        const card = document.createElement('div');
        card.className = 'forum-card';
        card.onclick = () => openForum(forum.id);

        const isAdmin = isUserAdmin(forum.adminEmail, forum.admin);

        card.innerHTML = `
            <span class="forum-tag">${escapeHTML(forum.subject)}</span>
            <h4 style="margin: 8px 0; font-size: 1.1rem; color: var(--text-primary);">${escapeHTML(forum.title)}</h4>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">${escapeHTML(forum.desc)}</p>
            <div style="display:flex; justify-content:space-between; align-items:center; border-top: 1px solid var(--border-color, #2a2a2a); padding-top: 8px;">
                <span style="font-size:0.75rem; color: ${isAdmin ? 'var(--accent-gold, #ffd700)' : 'var(--accent-red, #ff4d4d)'}; font-weight:700;">
                    Creador: ${escapeHTML(forum.admin)} ${isAdmin ? '✨' : ''}
                </span>
                ${isAdmin ? '<span style="font-size:0.75rem; color:var(--accent-gold, #ffd700); font-weight:bold;">Admin</span>' : ''}
            </div>
        `;
        listContainer.appendChild(card);
    });
}

function filterForums() {
    const searchInput = document.getElementById('search-forum');
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase().trim();
    const filtered = forums.filter(f => 
        f.title.toLowerCase().includes(query) || 
        f.subject.toLowerCase().includes(query) ||
        f.desc.toLowerCase().includes(query)
    );
    renderForumList(filtered);
}

function openCreateForumModal() {
    const modal = document.getElementById('create-forum-modal');
    if (modal) modal.style.display = 'flex';
}

function closeCreateForumModal() {
    const modal = document.getElementById('create-forum-modal');
    if (modal) modal.style.display = 'none';
}

function confirmCreateForum() {
    let tokens = parseInt(localStorage.getItem('user_tokens') || '0', 10);

    if (tokens < 1000) {
        alert('Balance insuficiente. Requiere 1,000 Tokens para aperturar una sala pública.');
        return;
    }

    const subjectInput = document.getElementById('forum-subject');
    const titleInput = document.getElementById('forum-title');
    const descInput = document.getElementById('forum-desc');

    const subject = subjectInput ? subjectInput.value : '';
    const title = titleInput ? titleInput.value.trim() : '';
    const desc = descInput ? descInput.value.trim() : '';

    if (!title || !desc) {
        alert('Complete los campos obligatorios para crear el foro.');
        return;
    }

    tokens -= 1000;
    localStorage.setItem('user_tokens', tokens.toString());
    updateUIStats();

    const newForum = {
        id: 'forum_' + Date.now(),
        subject: subject,
        title: title,
        desc: desc,
        admin: currentUser,
        adminEmail: currentUserEmail,
        messages: [
            { id: Date.now(), author: currentUser, authorEmail: currentUserEmail, text: `Foro iniciado por ${currentUser}.`, img: null }
        ]
    };

    forums.unshift(newForum);
    safeSaveForums();

    closeCreateForumModal();
    renderForumList();
    openForum(newForum.id);
}

function openForum(id) {
    currentForumId = id;
    const forum = forums.find(f => f.id === id);
    if (!forum) return;

    const forumListContainer = document.getElementById('forum-list-container');
    const forumActions = document.querySelector('.forum-actions');
    const activeForumView = document.getElementById('active-forum-view');

    if (forumListContainer) forumListContainer.style.display = 'none';
    if (forumActions) forumActions.style.display = 'none';
    if (activeForumView) activeForumView.style.display = 'block';

    const isAdmin = isUserAdmin(forum.adminEmail, forum.admin);

    const header = document.getElementById('active-forum-header');
    if (header) {
        header.innerHTML = `
            <span class="forum-tag">${escapeHTML(forum.subject)}</span>
            <h3 style="margin: 6px 0;">${escapeHTML(forum.title)}</h3>
            <p style="color:var(--text-secondary); font-size:0.875rem; margin-bottom: 6px;">${escapeHTML(forum.desc)}</p>
            <p style="font-size:0.78rem; color:${isAdmin ? 'var(--accent-gold, #ffd700)' : 'var(--accent-red, #ff4d4d)'}; font-weight:bold;">
                Administrador de la sala: ${escapeHTML(forum.admin)} ${isAdmin ? '✨' : ''}
            </p>
        `;
    }

    renderMessages();
}

function closeActiveForum() {
    currentForumId = null;
    const activeForumView = document.getElementById('active-forum-view');
    const forumListContainer = document.getElementById('forum-list-container');
    const forumActions = document.querySelector('.forum-actions');

    if (activeForumView) activeForumView.style.display = 'none';
    if (forumListContainer) forumListContainer.style.display = 'block';
    if (forumActions) forumActions.style.display = 'flex';
}

function renderMessages() {
    const forum = forums.find(f => f.id === currentForumId);
    if (!forum) return;

    const box = document.getElementById('forum-messages');
    if (!box) return;
    box.innerHTML = '';

    const isCurrentAdmin = isUserAdmin(currentUserEmail, currentUser);

    forum.messages.forEach(msg => {
        const item = document.createElement('div');
        item.className = 'message-item';

        const isMsgAdmin = isUserAdmin(msg.authorEmail, msg.author);

        item.innerHTML = `
            <div class="message-author ${isMsgAdmin ? 'admin-gold' : ''}" style="font-weight: bold; margin-bottom: 4px;">
                ${escapeHTML(msg.author)} ${isMsgAdmin ? '✨ (Admin)' : ''}
            </div>
            <div style="font-size:0.875rem; line-height:1.4;">${escapeHTML(msg.text).replace(/\n/g, '<br>')}</div>
            ${msg.img ? `<img src="${escapeHTML(msg.img)}" class="message-img" style="max-width:100%; border-radius:8px; margin-top:8px;">` : ''}
            ${isCurrentAdmin ? `<button class="btn-delete-msg" onclick="deleteMessage(${msg.id})" style="margin-top:8px; font-size:0.75rem; padding: 2px 8px; border-radius:4px; cursor:pointer;">Eliminar</button>` : ''}
        `;
        box.appendChild(item);
    });

    box.scrollTop = box.scrollHeight;
}

function handleImagePreview(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
        alert('La imagen excede el tamaño máximo permitido (2MB).');
        event.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        selectedImageBase64 = e.target.result;
        const imgContainer = document.getElementById('img-preview-container');
        if (imgContainer) imgContainer.style.display = 'flex';
    };
    reader.readAsDataURL(file);
}

function clearImagePreview() {
    selectedImageBase64 = null;
    const imgInput = document.getElementById('forum-msg-img');
    const imgContainer = document.getElementById('img-preview-container');

    if (imgInput) imgInput.value = '';
    if (imgContainer) imgContainer.style.display = 'none';
}

function sendForumMessage() {
    const textInput = document.getElementById('forum-msg-text');
    const text = textInput ? textInput.value.trim() : '';

    if (!text && !selectedImageBase64) return;

    const forum = forums.find(f => f.id === currentForumId);
    if (!forum) return;

    forum.messages.push({
        id: Date.now(),
        author: currentUser,
        authorEmail: currentUserEmail,
        text: text,
        img: selectedImageBase64
    });

    safeSaveForums();

    if (textInput) textInput.value = '';
    clearImagePreview();
    renderMessages();
}

function deleteMessage(msgId) {
    const forum = forums.find(f => f.id === currentForumId);
    if (!forum) return;

    if (confirm('¿Confirmas la eliminación de este mensaje?')) {
        forum.messages = forum.messages.filter(m => m.id !== msgId);
        safeSaveForums();
        renderMessages();
    }
}

// ==========================================
// CENTRO DE APRENDIZAJE Y MATERIAS
// ==========================================
function handleSubjectChange(subject) {
    const englishMod = document.getElementById('english-module');
    const comingSoon = document.getElementById('subject-coming-soon');

    if (subject === 'english') {
        if (comingSoon) comingSoon.style.display = 'none';
        if (englishMod) englishMod.style.display = 'block';
        selectEnglishLevel('B1');
    } else if (['biology', 'physics', 'chemistry', 'math'].includes(subject)) {
        if (englishMod) englishMod.style.display = 'none';
        if (comingSoon) comingSoon.style.display = 'block';
    } else {
        if (englishMod) englishMod.style.display = 'none';
        if (comingSoon) comingSoon.style.display = 'none';
    }
}

function selectEnglishLevel(level) {
    currentEnglishLevel = level;
    
    const targetKey = String(level).trim().toLowerCase();
    const buttons = document.querySelectorAll('.btn-level');

    buttons.forEach(btn => {
        let btnLevel = btn.getAttribute('data-level');
        
        if (!btnLevel) {
            const text = btn.innerText.trim().toLowerCase();
            if (text.includes('pre-a1') || text.includes('pre a1')) btnLevel = 'pre-a1';
            else if (text.includes('a1')) btnLevel = 'a1';
            else if (text.includes('a2')) btnLevel = 'a2';
            else if (text.includes('b1')) btnLevel = 'b1';
            else if (text.includes('b2')) btnLevel = 'b2';
            else if (text.includes('c1')) btnLevel = 'c1';
            else if (text.includes('c2')) btnLevel = 'c2';
            else btnLevel = text;
        } else {
            btnLevel = btnLevel.trim().toLowerCase();
        }

        if (btnLevel === targetKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const levelTitle = document.getElementById('level-title');
    if (levelTitle) levelTitle.innerText = `Temas Disponibles - Nivel ${level}`;
    
    closeTopicDisplay();
    renderEnglishTopics(level);
}

function renderEnglishTopics(level) {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const lessons = (typeof englishLessonsData !== 'undefined' && englishLessonsData[level]) ? englishLessonsData[level] : [];

    if (lessons.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; color: var(--text-secondary); text-align:center; padding:20px;">No hay temas disponibles para este nivel por el momento.</p>';
        return;
    }

    lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.onclick = () => loadTopicContent(lesson.id);

        card.innerHTML = `
            <h5 style="margin-bottom: 6px; font-size:1rem; color:var(--text-primary);">${escapeHTML(lesson.title)}</h5>
            <p style="font-size:0.85rem; color:var(--text-secondary);">${escapeHTML(lesson.summary)}</p>
        `;
        grid.appendChild(card);
    });
}

function loadTopicContent(topicId) {
    const topicsListSection = document.getElementById('topics-list-section');
    const topicContentDisplay = document.getElementById('topic-content-display');
    const topicLoader = document.getElementById('topic-loader');

    if (topicsListSection) topicsListSection.style.display = 'none';
    if (topicContentDisplay) topicContentDisplay.style.display = 'none';
    if (topicLoader) topicLoader.style.display = 'block';

    setTimeout(() => {
        if (topicLoader) topicLoader.style.display = 'none';
        
        const lessons = (typeof englishLessonsData !== 'undefined' && englishLessonsData[currentEnglishLevel]) ? englishLessonsData[currentEnglishLevel] : [];
        const lesson = lessons.find(l => l.id === topicId);

        if (!lesson) return;

        const articleContainer = document.getElementById('topic-article');
        if (articleContainer) {
            articleContainer.innerHTML = `
                <h3 style="font-size: 1.4rem; margin-bottom: 8px;">${escapeHTML(lesson.title)}</h3>
                <p style="color:var(--text-secondary); margin-bottom: 16px;">${escapeHTML(lesson.description)}</p>

                <div class="lesson-section" style="margin-bottom: 20px;">
                    <h4 style="margin-bottom: 8px; color:var(--accent-color, #4a90e2);">📐 Reglas Gramaticales y Estructura</h4>
                    <p style="line-height:1.5;">${escapeHTML(lesson.grammar).replace(/\n/g, '<br>')}</p>
                </div>

                <div class="lesson-section" style="margin-bottom: 20px;">
                    <h4 style="margin-bottom: 8px; color:var(--accent-color, #4a90e2);">🗣️ Ejemplos Prácticos Explicados</h4>
                    ${(lesson.examples || []).map(ex => `<div class="example-box" style="padding:10px; margin-bottom:8px; border-left:3px solid var(--accent-color, #4a90e2); border-radius:4px;">${escapeHTML(ex)}</div>`).join('')}
                </div>

                <div class="lesson-section">
                    <h4 style="margin-bottom: 8px; color:var(--accent-color, #4a90e2);">📖 Vocabulario Indispensable</h4>
                    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:10px;">
                        Revisa las palabras clave necesarias para dominar este tema junto con su guía de pronunciación aproximada:
                    </p>
                    <div class="vocab-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap:10px;">
                        ${(lesson.vocabulary || []).map(v => `
                            <div class="vocab-card" style="padding:10px; border-radius:6px; border:1px solid var(--border-color, #333);">
                                <div class="vocab-word" style="font-weight:bold;">${escapeHTML(v.word)}</div>
                                <div class="vocab-phonetic" style="font-size:0.8rem; color:var(--text-secondary);">${escapeHTML(v.phonetic)}</div>
                                <div class="vocab-trans" style="font-size:0.85rem; color:var(--accent-gold, #ffd700);">${escapeHTML(v.trans)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (topicContentDisplay) topicContentDisplay.style.display = 'block';
    }, 400);
}

function closeTopicDisplay() {
    const topicContentDisplay = document.getElementById('topic-content-display');
    const topicLoader = document.getElementById('topic-loader');
    const topicsListSection = document.getElementById('topics-list-section');

    if (topicContentDisplay) topicContentDisplay.style.display = 'none';
    if (topicLoader) topicLoader.style.display = 'none';
    if (topicsListSection) topicsListSection.style.display = 'block';
}

// ==========================================
// CHAT CON INTELIGENCIA ARTIFICIAL
// ==========================================
function sendChatMessage() {
    const chatInput = document.getElementById('chat-input');
    const query = chatInput ? chatInput.value.trim() : '';

    if (!query && !chatAttachmentBase64) return;

    renderChatMessage('user', query);
    if (chatInput) chatInput.value = '';

    renderChatMessage('assistant', 'Pensando...', true);

    setTimeout(() => {
        removeLoadingChatMessage();
        renderChatMessage('assistant', 'Esta es una respuesta simulada. Integra tu backend o clave de API para obtener respuestas interactivas y personalizadas en tiempo real.');
    }, 1200);
}

function renderChatMessage(sender, message, isLoading = false) {
    const chatBox = document.getElementById('chat-messages');
    if (!chatBox) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender}-message ${isLoading ? 'loading-msg' : ''}`;
    msgDiv.innerHTML = `<p style="margin:0; line-height:1.4;">${escapeHTML(message).replace(/\n/g, '<br>')}</p>`;

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeLoadingChatMessage() {
    const loadingMsg = document.querySelector('.loading-msg');
    if (loadingMsg) loadingMsg.remove();
}

// ==========================================
// MISIÓN Y VISIÓN AMPLIADAS Y DINÁMICAS
// ==========================================
function loadAboutContent() {
    const missionContainer = document.getElementById('mission-content');
    const visionContainer = document.getElementById('vision-content');

    if (missionContainer) {
        missionContainer.innerHTML = `
            <h3 style="font-size:1.3rem; margin-bottom:8px; color:var(--text-primary, #fff);">🚀 Nuestra Misión</h3>
            <p style="line-height:1.6; color:var(--text-secondary, #ccc); font-size:0.95rem;">
                En <strong>SuperNova IA</strong>, nuestra misión es democratizar y revolucionar el acceso a la educación global a través del desarrollo e integración de soluciones basadas en Inteligencia Artificial avanzada. Nos dedicamos a derribar las barreras del aprendizaje mediante herramientas interactivas, espacios colaborativos y módulos formativos adaptativos diseñados para potenciar el pensamiento crítico, la resolución de problemas científicos y el dominio de idiomas sin importar la ubicación ni el nivel socioeconómico de los estudiantes.
            </p>
        `;
    }

    if (visionContainer) {
        visionContainer.innerHTML = `
            <h3 style="font-size:1.3rem; margin-bottom:8px; color:var(--text-primary, #fff);">👁️ Nuestra Visión</h3>
            <p style="line-height:1.6; color:var(--text-secondary, #ccc); font-size:0.95rem;">
                Consolidarnos hacia el futuro como la plataforma educativa virtual líder en la región y a nivel internacional, reconocida por transformar la interacción entre los estudiantes y la tecnología. Aspiramos a construir un ecosistema autosostenible donde millones de jóvenes puedan capacitarse, colaborar en foros especializados y personalizar sus itinerarios de aprendizaje guiados por asistentes inteligentes de última generación, formando la comunidad académica y científica del mañana.
            </p>
        `;
    }
}