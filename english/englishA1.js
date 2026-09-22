// CONFIGURACIÓN DE CORREO ADMINISTRADOR
if (typeof ADMIN_EMAIL === 'undefined') {
  var ADMIN_EMAIL = 'correadediego30@gmail.com';
}

// DATA DE LECCIONES A1 (20 TEMAS BÁSICOS)
if (typeof englishLessonsData === 'undefined') {
    var englishLessonsData = {};
}

englishLessonsData['A1'] = [
    {
        id: 'a1_1',
        title: '1. El Verbo To Be (Ser / Estar) en Presente',
        summary: 'Aprende las tres formas del verbo To Be (Am, Is, Are) y cómo usarlas.',
        description: 'El verbo To Be significa "ser" o "estar". Cambia de forma según la persona: Am (I), Is (He, She, It), Are (You, We, They).',
        grammar: 'Afirmativo: Sujeto + Am/Is/Are. Negativo: Sujeto + Am/Is/Are + Not. Interrogativo: Am/Is/Are + Sujeto?',
        examples: [
            'I am a student. / Yo soy estudiante.',
            'She is not at home. / Ella no está en casa.',
            'Are you ready? / ¿Estás listo?'
        ],
        vocabulary: [
            { word: 'Am', phonetic: 'am', trans: 'Soy / Estoy' },
            { word: 'Is', phonetic: 'is', trans: 'Es / Está' },
            { word: 'Are', phonetic: 'ar', trans: 'Eres / Estás / Somos / Están' },
            { word: 'Student', phonetic: 'stiúdent', trans: 'Estudiante' },
            { word: 'Teacher', phonetic: 'tícher', trans: 'Profesor/a' },
            { word: 'Friend', phonetic: 'frend', trans: 'Amigo/a' },
            { word: 'Happy', phonetic: 'jápi', trans: 'Feliz' },
            { word: 'Sad', phonetic: 'sad', trans: 'Triste' },
            { word: 'Ready', phonetic: 'rédi', trans: 'Listo/a' },
            { word: 'At home', phonetic: 'at jóum', trans: 'En casa' }
        ]
    },
    {
        id: 'a1_2',
        title: '2. Artículos Definidos e Indefinidos (A, An, The)',
        summary: 'Cuándo usar A, An y The para nombrar objetos y personas.',
        description: 'Usamos "A" antes de sonidos de consonante y "An" antes de sonidos de vocal. "The" se usa para hablar de algo específico.',
        grammar: 'A + Consonante (a book). An + Vocal (an apple). The + Específico (the sun, the book).',
        examples: [
            'I have a car. / Tengo un carro.',
            'She eats an apple every day. / Ella come una manzana todos los días.',
            'The sun is hot. / El sol está caliente.'
        ],
        vocabulary: [
            { word: 'Book', phonetic: 'buk', trans: 'Libro' },
            { word: 'Apple', phonetic: 'ápol', trans: 'Manzana' },
            { word: 'Elephant', phonetic: 'élefant', trans: 'Elefante' },
            { word: 'Car', phonetic: 'kar', trans: 'Carro / Auto' },
            { word: 'House', phonetic: 'jáus', trans: 'Casa' },
            { word: 'Umbrella', phonetic: 'ambréla', trans: 'Sombrilla / Paraguas' },
            { word: 'Orange', phonetic: 'órendsh', trans: 'Naranja' },
            { word: 'Sun', phonetic: 'san', trans: 'Sol' },
            { word: 'Moon', phonetic: 'mun', trans: 'Luna' },
            { word: 'Table', phonetic: 'téibol', trans: 'Mesa' }
        ]
    },
    {
        id: 'a1_3',
        title: '3. Adjetivos Posesivos (Possessive Adjectives)',
        summary: 'Expresa pertenencia usando my, your, his, her, its, our, their.',
        description: 'Indican de quién es un objeto. Siempre van seguidos de un sustantivo.',
        grammar: 'My (mi), Your (tu), His (su de él), Her (su de ella), Its (su de cosa/animal), Our (nuestro), Their (su de ellos).',
        examples: [
            'This is my phone. / Este es mi teléfono.',
            'Her name is Maria. / Su nombre es María.',
            'Where is our classroom? / ¿Dónde está nuestro salón de clases?'
        ],
        vocabulary: [
            { word: 'My', phonetic: 'mái', trans: 'Mi / Mis' },
            { word: 'Your', phonetic: 'iur', trans: 'Tu / Tus' },
            { word: 'His', phonetic: 'jiz', trans: 'Su / Sus (de él)' },
            { word: 'Her', phonetic: 'jer', trans: 'Su / Sus (de ella)' },
            { word: 'Its', phonetic: 'its', trans: 'Su / Sus (de objeto/animal)' },
            { word: 'Our', phonetic: 'áur', trans: 'Nuestro/a' },
            { word: 'Their', phonetic: 'der', trans: 'Su / Sus (de ellos)' },
            { word: 'Phone', phonetic: 'fóun', trans: 'Teléfono' },
            { word: 'Name', phonetic: 'néim', trans: 'Nombre' },
            { word: 'Family', phonetic: 'fámili', trans: 'Familia' }
        ]
    },
    {
        id: 'a1_4',
        title: '4. Demonstrativos (This, That, These, Those)',
        summary: 'Aprende a señalar objetos según su distancia y cantidad.',
        description: 'This (este/esta) y These (estos/estas) señalan objetos cercanos. That (ese/aquel) y Those (esos/aquellos) señalan objetos lejanos.',
        grammar: 'Cerca: This (singular), These (plural). Lejos: That (singular), Those (plural).',
        examples: [
            'This is my new watch. / Este es mi nuevo reloj.',
            'Look at those birds in the sky. / Mira esos pájaros en el cielo.',
            'Are these your keys? / ¿Son estas tus llaves?'
        ],
        vocabulary: [
            { word: 'This', phonetic: 'dis', trans: 'Este / Esta' },
            { word: 'That', phonetic: 'dat', trans: 'Ese / Esa / Aquel / Aquella' },
            { word: 'These', phonetic: 'diis', trans: 'Estos / Estas' },
            { word: 'Those', phonetic: 'dóus', trans: 'Esos / Esas / Aquellos / Aquellas' },
            { word: 'Watch', phonetic: 'uótch', trans: 'Reloj de pulsera' },
            { word: 'Key', phonetic: 'kii', trans: 'Llave' },
            { word: 'Pen', phonetic: 'pen', trans: 'Bolígrafo / Pluma' },
            { word: 'Chair', phonetic: 'cher', trans: 'Silla' },
            { word: 'Bird', phonetic: 'berd', trans: 'Pájaro' },
            { word: 'Near', phonetic: 'nir', trans: 'Cerca' }
        ]
    },
    {
        id: 'a1_5',
        title: '5. Presente Simple: Afirmativo (Present Simple - Affirmative)',
        summary: 'Habla sobre hábitos, rutinas diarias y verdades generales.',
        description: 'Usamos el Presente Simple para acciones habituales. Con He, She e It, agregamos una "-s" o "-es" al verbo.',
        grammar: 'I / You / We / They + Verbo en forma base. He / She / It + Verbo con -s/-es.',
        examples: [
            'I play football on weekends. / Juego fútbol los fines de semana.',
            'She works in a bank. / Ella trabaja en un banco.',
            'They live in London. / Ellos viven en Londres.'
        ],
        vocabulary: [
            { word: 'Live', phonetic: 'liv', trans: 'Vivir' },
            { word: 'Work', phonetic: 'werk', trans: 'Trabajar' },
            { word: 'Play', phonetic: 'plei', trans: 'Jugar / Tocar un instrumento' },
            { word: 'Eat', phonetic: 'iit', trans: 'Comer' },
            { word: 'Drink', phonetic: 'drink', trans: 'Beber' },
            { word: 'Study', phonetic: 'stádi', trans: 'Estudiar' },
            { word: 'Read', phonetic: 'riid', trans: 'Leer' },
            { word: 'Speak', phonetic: 'spiik', trans: 'Hablar' },
            { word: 'Bank', phonetic: 'bank', trans: 'Banco' },
            { word: 'Weekend', phonetic: 'uíik-end', trans: 'Fin de semana' }
        ]
    },
    {
        id: 'a1_6',
        title: '6. Presente Simple: Negativo e Interrogativo (Don\'t / Doesn\'t / Do / Does)',
        summary: 'Aprende a negar y hacer preguntas en Presente Simple usando los auxiliares Do y Does.',
        description: 'Para negar usas don\'t / doesn\'t. Para preguntar usas Do / Does al principio de la oración. Cuando usas Does o Doesn\'t, el verbo vuelve a su forma base.',
        grammar: 'Negación: Sujeto + don\'t/doesn\'t + verbo base. Pregunta: Do/Does + sujeto + verbo base?',
        examples: [
            'I don\'t drink coffee. / Yo no bebo café.',
            'He doesn\'t like pizza. / A él no le gusta la pizza.',
            'Do you speak English? / ¿Hablas inglés?'
        ],
        vocabulary: [
            { word: 'Do', phonetic: 'du', trans: 'Auxiliar / Hacer' },
            { word: 'Does', phonetic: 'das', trans: 'Auxiliar (He/She/It)' },
            { word: 'Don\'t', phonetic: 'dóunt', trans: 'No (Do not)' },
            { word: 'Doesn\'t', phonetic: 'dásnt', trans: 'No (Does not)' },
            { word: 'Coffee', phonetic: 'kófi', trans: 'Café' },
            { word: 'Tea', phonetic: 'tii', trans: 'Té' },
            { word: 'Understand', phonetic: 'anderstánd', trans: 'Entender / Comprender' },
            { word: 'Know', phonetic: 'nóu', trans: 'Saber / Conocer' },
            { word: 'Like', phonetic: 'láik', trans: 'Gustar' },
            { word: 'Want', phonetic: 'uónt', trans: 'Querer' }
        ]
    },
    {
        id: 'a1_7',
        title: '7. Palabras de Pregunta (Wh- Questions)',
        summary: 'Haz preguntas específicas usando Who, What, Where, When, Why y How.',
        description: 'Las palabras Wh- van al inicio de la pregunta antes del verbo auxiliar o del verbo To Be.',
        grammar: 'Wh- + Auxiliar (Do/Does/To Be) + Sujeto + Verbo base?',
        examples: [
            'What is your name? / ¿Cuál es tu nombre?',
            'Where do you live? / ¿Dónde vives?',
            'Why are you sad? / ¿Por qué estás triste?'
        ],
        vocabulary: [
            { word: 'What', phonetic: 'juót', trans: 'Qué / Cuál' },
            { word: 'Where', phonetic: 'juér', trans: 'Dónde' },
            { word: 'When', phonetic: 'juén', trans: 'Cuándo' },
            { word: 'Who', phonetic: 'ju', trans: 'Quién' },
            { word: 'Why', phonetic: 'juái', trans: 'Por qué' },
            { word: 'How', phonetic: 'jáu', trans: 'Cómo / Cuán' },
            { word: 'How old', phonetic: 'jáu óuld', trans: 'Cuántos años (edad)' },
            { word: 'Time', phonetic: 'táim', trans: 'Tiempo / Hora' },
            { word: 'Place', phonetic: 'pleis', trans: 'Lugar' },
            { word: 'Reason', phonetic: 'ríison', trans: 'Razón' }
        ]
    },
    {
        id: 'a1_8',
        title: '8. Hay (There is / There are)',
        summary: 'Indica la existencia de cosas en singular y plural.',
        description: 'Usamos "There is" para objetos singulares o incontables, y "There are" para objetos en plural.',
        grammar: 'Singular: There is a/an + sustantivo. Plural: There are + números/some + sustantivo plural.',
        examples: [
            'There is a book on the table. / Hay un libro sobre la mesa.',
            'There are three students in the room. / Hay tres estudiantes en la habitación.',
            'Is there any milk in the fridge? / ¿Hay leche en el refrigerador?'
        ],
        vocabulary: [
            { word: 'There is', phonetic: 'der is', trans: 'Hay (singular)' },
            { word: 'There are', phonetic: 'der ar', trans: 'Hay (plural)' },
            { word: 'Milk', phonetic: 'milk', trans: 'Leche' },
            { word: 'Fridge', phonetic: 'fridsh', trans: 'Refrigerador' },
            { word: 'Room', phonetic: 'rum', trans: 'Habitación / Cuarto' },
            { word: 'Window', phonetic: 'uíndou', trans: 'Ventana' },
            { word: 'Door', phonetic: 'dor', trans: 'Puerta' },
            { word: 'Picture', phonetic: 'píkcher', trans: 'Imagen / Cuadro' },
            { word: 'Computer', phonetic: 'kompiúter', trans: 'Computadora' },
            { word: 'Some', phonetic: 'sam', trans: 'Algunos / Algo de' }
        ]
    },
    {
        id: 'a1_9',
        title: '9. Preposiciones de Lugar (In, On, At, Under, Next to)',
        summary: 'Aprende a describir la posición exacta de personas y objetos.',
        description: 'Expresan dónde se encuentra algo respecto a otro lugar u objeto.',
        grammar: 'In = dentro de. On = sobre / encima de (tocando superficie). At = en un punto específico. Under = debajo. Next to = al lado de.',
        examples: [
            'The cat is on the sofa. / El gato está en el sofá.',
            'She lives in Paris. / Ella vive en París.',
            'Meet me at the station. / Encuéntrame en la estación.'
        ],
        vocabulary: [
            { word: 'In', phonetic: 'in', trans: 'En / Dentro de' },
            { word: 'On', phonetic: 'on', trans: 'En / Sobre' },
            { word: 'At', phonetic: 'at', trans: 'En (lugar específico)' },
            { word: 'Under', phonetic: 'ánder', trans: 'Debajo de' },
            { word: 'Next to', phonetic: 'nekst tu', trans: 'Al lado de' },
            { word: 'Behind', phonetic: 'bijáind', trans: 'Detrás de' },
            { word: 'In front of', phonetic: 'in front ov', trans: 'En frente de' },
            { word: 'Between', phonetic: 'bituíin', trans: 'Entre (dos cosas)' },
            { word: 'Sofa', phonetic: 'sóufa', trans: 'Sofá' },
            { word: 'Station', phonetic: 'stéishon', trans: 'Estación' }
        ]
    },
    {
        id: 'a1_10',
        title: '10. Preposiciones de Tiempo (In, On, At)',
        summary: 'Aprende cuándo usar In, On y At para horas, días, meses y años.',
        description: 'Usamos At para horas exactas, On para días y fechas concretas, e In para períodos más largos (meses, años, estaciones).',
        grammar: 'At + horas (at 5 PM). On + días/fechas (on Monday). In + meses/años (in July, in 2024).',
        examples: [
            'The class starts at 8:00 AM. / La clase empieza a las 8:00 AM.',
            'My birthday is on Sunday. / Mi cumpleaños es el domingo.',
            'We go on vacation in August. / Vamos de vacaciones en agosto.'
        ],
        vocabulary: [
            { word: 'At', phonetic: 'at', trans: 'A las (para horas)' },
            { word: 'On', phonetic: 'on', trans: 'El (para días y fechas)' },
            { word: 'In', phonetic: 'in', trans: 'En (para meses, años, épocas)' },
            { word: 'Monday', phonetic: 'mándei', trans: 'Lunes' },
            { word: 'Friday', phonetic: 'fráidei', trans: 'Viernes' },
            { word: 'Morning', phonetic: 'mórning', trans: 'Mañana' },
            { word: 'Afternoon', phonetic: 'afternúun', trans: 'Tarde' },
            { word: 'Night', phonetic: 'náit', trans: 'Noche' },
            { word: 'Birthday', phonetic: 'bérzdei', trans: 'Cumpleaños' },
            { word: 'Vacation', phonetic: 'veikéishon', trans: 'Vacaciones' }
        ]
    },
    {
        id: 'a1_11',
        title: '11. Pronombres Objeto (Object Pronouns)',
        summary: 'Reemplaza a los sustantivos cuando reciben la acción del verbo.',
        description: 'Van después del verbo o de una preposición (me, you, him, her, it, us, them).',
        grammar: 'I -> me, You -> you, He -> him, She -> her, It -> it, We -> us, They -> them.',
        examples: [
            'Can you help me? / ¿Puedes ayudarme?',
            'I see him every day. / Lo veo a él todos los días.',
            'She is talking to us. / Ella está hablando con nosotros.'
        ],
        vocabulary: [
            { word: 'Me', phonetic: 'mii', trans: 'A mí / Me' },
            { word: 'You', phonetic: 'iu', trans: 'A ti / Te / A ustedes' },
            { word: 'Him', phonetic: 'jim', trans: 'A él / Lo' },
            { word: 'Her', phonetic: 'jer', trans: 'A ella / La' },
            { word: 'It', phonetic: 'it', trans: 'A ello / Lo' },
            { word: 'Us', phonetic: 'as', trans: 'A nosotros / Nos' },
            { word: 'Them', phonetic: 'dem', trans: 'A ellos / Los / Las' },
            { word: 'Help', phonetic: 'jelp', trans: 'Ayudar / Ayuda' },
            { word: 'Call', phonetic: 'kol', trans: 'Llamar' },
            { word: 'Listen to', phonetic: 'lísen tu', trans: 'Escuchar a' }
        ]
    },
    {
        id: 'a1_12',
        title: '12. Modales de Habilidad y Permiso: Can / Can\'t',
        summary: 'Expresa lo que sabes o puedes hacer, así como permisos básicos.',
        description: 'Can no cambia según la persona y siempre va seguido de un verbo en su forma base.',
        grammar: 'Afirmativo: Sujeto + Can + Verbo. Negativo: Sujeto + Can\'t + Verbo. Interrogativo: Can + Sujeto + Verbo?',
        examples: [
            'I can speak Spanish. / Puedo hablar español.',
            'He can\'t swim. / Él no sabe nadar.',
            'Can I open the window? / ¿Puedo abrir la ventana?'
        ],
        vocabulary: [
            { word: 'Can', phonetic: 'kan', trans: 'Poder / Saber (habilidad)' },
            { word: 'Can\'t', phonetic: 'kant', trans: 'No poder / No saber' },
            { word: 'Swim', phonetic: 'suim', trans: 'Nadar' },
            { word: 'Dance', phonetic: 'dans', trans: 'Bailar' },
            { word: 'Sing', phonetic: 'sing', trans: 'Cantar' },
            { word: 'Cook', phonetic: 'kuk', trans: 'Cocinar' },
            { word: 'Drive', phonetic: 'dráiv', trans: 'Manejar / Conducir' },
            { word: 'Open', phonetic: 'óupen', trans: 'Abrir' },
            { word: 'Close', phonetic: 'klóus', trans: 'Cerrar' },
            { word: 'Fast', phonetic: 'fast', trans: 'Rápido' }
        ]
    },
    {
        id: 'a1_13',
        title: '13. Presente Continuo (Present Continuous)',
        summary: 'Habla sobre acciones que están ocurriendo en el momento exacto en que hablas.',
        description: 'Combina el verbo To Be en presente con un verbo terminado en -ING.',
        grammar: 'Estructura: Sujeto + Am/Is/Are + Verbo-ING. Negación: Sujeto + Am/Is/Are + Not + Verbo-ING.',
        examples: [
            'I am reading a book right now. / Estoy leyendo un libro en este momento.',
            'She is sleeping. / Ella está durmiendo.',
            'They are not working today. / Ellos no están trabajando hoy.'
        ],
        vocabulary: [
            { word: 'Now', phonetic: 'náu', trans: 'Ahora' },
            { word: 'Right now', phonetic: 'ráit náu', trans: 'En este momento' },
            { word: 'Sleeping', phonetic: 'sliiping', trans: 'Durmiendo' },
            { word: 'Reading', phonetic: 'ríiding', trans: 'Leyendo' },
            { word: 'Eating', phonetic: 'íiting', trans: 'Comiendo' },
            { word: 'Running', phonetic: 'ráning', trans: 'Corriendo' },
            { word: 'Walking', phonetic: 'uóking', trans: 'Caminando' },
            { word: 'Talking', phonetic: 'tóking', trans: 'Hablando' },
            { word: 'Writing', phonetic: 'ráiting', trans: 'Escribiendo' },
            { word: 'Listening', phonetic: 'lísening', trans: 'Escuchando' }
        ]
    },
    {
        id: 'a1_14',
        title: '14. Posesivos con Apóstrofe (\'s)',
        summary: 'Aprende a indicar posesión añadiendo \'s al dueño del objeto.',
        description: 'Usamos el genitivo sajón (\'s) para indicar que algo pertenece a una persona o animal.',
        grammar: 'Poseedor + \'s + Objeto poseído (Ejemplo: John\'s car = El carro de John). Si el nombre termina en s, solo se añade apóstrofe \'.',
        examples: [
            'This is Maria\'s house. / Esta es la casa de María.',
            'Where is the teacher\'s book? / ¿Dónde está el libro del profesor?',
            'My brother\'s car is red. / El carro de mi hermano es rojo.'
        ],
        vocabulary: [
            { word: 'Brother', phonetic: 'bróder', trans: 'Hermano' },
            { word: 'Sister', phonetic: 'síster', trans: 'Hermana' },
            { word: 'Father / Dad', phonetic: 'fáder / dad', trans: 'Padre / Papá' },
            { word: 'Mother / Mom', phonetic: 'máder / mom', trans: 'Madre / Mamá' },
            { word: 'Dog', phonetic: 'dog', trans: 'Perro' },
            { word: 'Cat', phonetic: 'kat', trans: 'Gato' },
            { word: 'Office', phonetic: 'ófis', trans: 'Oficina' },
            { word: 'Bag', phonetic: 'bag', trans: 'Bolsa / Mochila' },
            { word: 'Owner', phonetic: 'óuner', trans: 'Dueño/a' },
            { word: 'Belong', phonetic: 'bilóng', trans: 'Pertenecer' }
        ]
    },
    {
        id: 'a1_15',
        title: '15. Números, Días de la Semana y Meses',
        summary: 'Vocabulario básico para fechas, horas, cantidades y precios.',
        description: 'Los días y meses en inglés siempre se escriben con la primera letra en mayúscula.',
        grammar: 'Días: Monday, Tuesday, Wednesday... Meses: January, February, March... Números: 1-100.',
        examples: [
            'Today is Monday, October 5th. / Hoy es lunes, 5 de octubre.',
            'I have two brothers and one sister. / Tengo dos hermanos y una hermana.',
            'There are twelve months in a year. / Hay doce meses en un año.'
        ],
        vocabulary: [
            { word: 'One / Two / Three', phonetic: 'uan / tu / zrii', trans: 'Uno / Dos / Tres' },
            { word: 'Ten / Twenty / Hundred', phonetic: 'ten / tuénti / jándred', trans: 'Diez / Veinte / Cien' },
            { word: 'Monday', phonetic: 'mándei', trans: 'Lunes' },
            { word: 'Tuesday', phonetic: 'tiúsdei', trans: 'Martes' },
            { word: 'Wednesday', phonetic: 'uénsdei', trans: 'Miércoles' },
            { word: 'January', phonetic: 'dshániuari', trans: 'Enero' },
            { word: 'December', phonetic: 'disémber', trans: 'Diciembre' },
            { word: 'Day', phonetic: 'déi', trans: 'Día' },
            { word: 'Month', phonetic: 'manz', trans: 'Mes' },
            { word: 'Year', phonetic: 'iir', trans: 'Año' }
        ]
    },
    {
        id: 'a1_16',
        title: '16. Dar la Hora (Telling the Time)',
        summary: 'Expresiones esenciales para preguntar y responder la hora en inglés.',
        description: 'Se usa "It is..." para dar la hora. Usa "o\'clock" para horas en punto y "half past" para y media.',
        grammar: '¿Qué hora es?: What time is it? Respuestas: It\'s 3 o\'clock (3:00). It\'s half past 4 (4:30). It\'s quarter past 5 (5:15).',
        examples: [
            'What time is it? - It\'s five o\'clock. / ¿Qué hora es? - Son las cinco en punto.',
            'The movie is at half past seven. / La película es a las siete y media.',
            'It is a quarter to ten. / Es un cuarto para las diez.'
        ],
        vocabulary: [
            { word: 'Time', phonetic: 'táim', trans: 'Hora / Tiempo' },
            { word: 'O\'clock', phonetic: 'oklók', trans: 'En punto' },
            { word: 'Half past', phonetic: 'jaf past', trans: 'Y media' },
            { word: 'Quarter past', phonetic: 'kuórter past', trans: 'Y cuarto' },
            { word: 'Quarter to', phonetic: 'kuórter tu', trans: 'Cuarto para' },
            { word: 'Early', phonetic: 'érli', trans: 'Temprano' },
            { word: 'Late', phonetic: 'léit', trans: 'Tarde' },
            { word: 'Midnight', phonetic: 'mídnait', trans: 'Medianoche' },
            { word: 'Noon / Midday', phonetic: 'nun / míd-dei', trans: 'Mediodía' },
            { word: 'Clock', phonetic: 'klok', trans: 'Reloj de pared' }
        ]
    },
    {
        id: 'a1_17',
        title: '17. Saludos, Despedidas y Cortesía (Greetings & Courtesy)',
        summary: 'Frases indispensables para iniciar y terminar conversaciones cotidianas con educación.',
        description: 'Diferencia las expresiones formales de las informales al interactuar.',
        grammar: 'Saludos: Hello, Hi, Good morning. Despedidas: Goodbye, Bye, See you later. Cortesía: Please, Thank you, You\'re welcome.',
        examples: [
            'Good morning, how are you today? / Buenos días, ¿cómo estás hoy?',
            'Thank you very much! - You\'re welcome. / ¡Muchas gracias! - De nada.',
            'See you tomorrow! Have a nice day! / ¡Nos vemos mañana! ¡Que tengas un buen día!'
        ],
        vocabulary: [
            { word: 'Hello / Hi', phonetic: 'jelóu / jai', trans: 'Hola' },
            { word: 'Good morning', phonetic: 'gud mórning', trans: 'Buenos días' },
            { word: 'Good afternoon', phonetic: 'gud afternúun', trans: 'Buenas tardes' },
            { word: 'Good night', phonetic: 'gud náit', trans: 'Buenas noches (despedida)' },
            { word: 'Goodbye / Bye', phonetic: 'gudbái / bái', trans: 'Adiós' },
            { word: 'Please', phonetic: 'pliiz', trans: 'Por favor' },
            { word: 'Thank you', phonetic: 'zank iu', trans: 'Gracias' },
            { word: 'You\'re welcome', phonetic: 'iur uélkom', trans: 'De nada' },
            { word: 'Sorry / Excuse me', phonetic: 'sóri / ekskiús mii', trans: 'Lo siento / Disculpe' },
            { word: 'Nice to meet you', phonetic: 'náis tu miit iu', trans: 'Gusto en conocerte' }
        ]
    },
    {
        id: 'a1_18',
        title: '18. Imperativos: Órdenes e Instrucciones (Imperatives)',
        summary: 'Usa el verbo directamente para dar indicaciones, órdenes o sugerencias simples.',
        description: 'Los imperativos no llevan sujeto expreso. Para la forma negativa se agrega "Don\'t" antes del verbo.',
        grammar: 'Afirmativo: Verbo base + complemento. Negativo: Don\'t + verbo base + complemento.',
        examples: [
            'Listen carefully, please. / Escuchen atentamente, por favor.',
            'Don\'t touch that! / ¡No toques eso!',
            'Sit down and open your books. / Siéntense y abran sus libros.'
        ],
        vocabulary: [
            { word: 'Listen', phonetic: 'lísen', trans: 'Escuchar' },
            { word: 'Look', phonetic: 'luk', trans: 'Mirar' },
            { word: 'Stop', phonetic: 'stop', trans: 'Parar / Detenerse' },
            { word: 'Sit down', phonetic: 'sit daun', trans: 'Sentarse' },
            { word: 'Stand up', phonetic: 'stand ap', trans: 'Ponerse de pie' },
            { word: 'Don\'t', phonetic: 'dóunt', trans: 'No (para dar órdenes)' },
            { word: 'Wait', phonetic: 'uéit', trans: 'Esperar' },
            { word: 'Come here', phonetic: 'kam jir', trans: 'Ven aquí' },
            { word: 'Be quiet', phonetic: 'bi kuáiet', trans: 'Guarda silencio' },
            { word: 'Carefully', phonetic: 'kérfuli', trans: 'Cuidadosamente' }
        ]
    },
    {
        id: 'a1_19',
        title: '19. La Familia y Relaciones Personales (Family Members)',
        summary: 'Vocabulario fundamental para hablar de los integrantes de tu familia.',
        description: 'Combina estos sustantivos con los adjetivos posesivos para describir a tu entorno familiar.',
        grammar: 'Uso con el verbo To Be o Have: "My father is a doctor", "I have two sisters".',
        examples: [
            'My mother is forty years old. / Mi madre tiene cuarenta años.',
            'Do you have any brothers or sisters? / ¿Tienes hermanos o hermanas?',
            'This is my grandfather. / Este es mi abuelo.'
        ],
        vocabulary: [
            { word: 'Parents', phonetic: 'pérents', trans: 'Padres (mamá y papá)' },
            { word: 'Father', phonetic: 'fáder', trans: 'Padre' },
            { word: 'Mother', phonetic: 'máder', trans: 'Madre' },
            { word: 'Son', phonetic: 'san', trans: 'Hijo' },
            { word: 'Daughter', phonetic: 'dóter', trans: 'Hija' },
            { word: 'Grandfather', phonetic: 'grandfáder', trans: 'Abuelo' },
            { word: 'Grandmother', phonetic: 'grandmáder', trans: 'Abuela' },
            { word: 'Uncle', phonetic: 'ánkel', trans: 'Tío' },
            { word: 'Aunt', phonetic: 'ant', trans: 'Tía' },
            { word: 'Cousin', phonetic: 'kásin', trans: 'Primo/a' }
        ]
    },
    {
        id: 'a1_20',
        title: '20. La Hora de Comer: Alimentos y Bebidas Básicos (Food & Drinks)',
        summary: 'Nombres de alimentos y cómo pedir cosas sencillas de comer y beber.',
        description: 'Combina este vocabulario con verbos como want, eat, drink, y expresiones como "I would like...".',
        grammar: 'Estructuras básicas: "I like..." / "I don\'t like..." / "Can I have...?"',
        examples: [
            'I like chicken and rice for lunch. / Me gusta el pollo con arroz para el almuerzo.',
            'Can I have a glass of water, please? / ¿Puedo tener un vaso de agua, por favor?',
            'He eats bread and cheese for breakfast. / Él come pan y queso en el desayuno.'
        ],
        vocabulary: [
            { word: 'Water', phonetic: 'uóter', trans: 'Agua' },
            { word: 'Bread', phonetic: 'bred', trans: 'Pan' },
            { word: 'Cheese', phonetic: 'chiis', trans: 'Queso' },
            { word: 'Chicken', phonetic: 'chíken', trans: 'Pollo' },
            { word: 'Rice', phonetic: 'ráis', trans: 'Arroz' },
            { word: 'Fruit', phonetic: 'frut', trans: 'Fruta' },
            { word: 'Breakfast', phonetic: 'brékfast', trans: 'Desayuno' },
            { word: 'Lunch', phonetic: 'lanch', trans: 'Almuerzo' },
            { word: 'Dinner', phonetic: 'díner', trans: 'Cena' },
            { word: 'Glass', phonetic: 'glas', trans: 'Vaso' }
        ]
    }
];