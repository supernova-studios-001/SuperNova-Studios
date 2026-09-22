// DATA DE LECCIONES A2 (20 TEMAS BÁSICOS)
if (typeof englishLessonsData === 'undefined') {
    var englishLessonsData = {};
}

englishLessonsData['A2'] = [
    {
        id: 'a2_1',
        title: '1. Pasado Simple del Verbo To Be (Was / Were)',
        summary: 'Aprende a hablar sobre estados y situaciones en el pasado usando Was y Were.',
        description: 'El pasado del verbo "To Be" cambia de forma según el pronombre: "Was" se usa con I, He, She, It; y "Were" con You, We, They.',
        grammar: 'Afirmativo: Sujeto + Was/Were + Complemento. Negativo: Sujeto + Was/Were + Not (Wasn\'t / Weren\'t). Interrogativo: Was/Were + Sujeto + Complemento?',
        examples: [
            'I was at home yesterday. / Yo estaba en casa ayer.',
            'They were not at the party. / Ellos no estaban en la fiesta.',
            'Were you tired last night? / ¿Estabas cansado anoche?'
        ],
        vocabulary: [
            { word: 'Was', phonetic: 'juós', trans: 'Era / Estaba (I, He, She, It)' },
            { word: 'Were', phonetic: 'wer', trans: 'Éramos / Éramos / Estaban (You, We, They)' },
            { word: 'Wasn\'t', phonetic: 'juósnt', trans: 'No era / No estaba' },
            { word: 'Weren\'t', phonetic: 'wernt', trans: 'No eran / No estaban' },
            { word: 'Yesterday', phonetic: 'iésterdei', trans: 'Ayer' },
            { word: 'Last night', phonetic: 'last náit', trans: 'Anoche' },
            { word: 'Last week', phonetic: 'last uiik', trans: 'La semana pasada' },
            { word: 'Last year', phonetic: 'last iir', trans: 'El año pasado' },
            { word: 'Ago', phonetic: 'egóu', trans: 'Hace (tiempo atrás)' },
            { word: 'Tired', phonetic: 'táierd', trans: 'Cansado/a' },
            { word: 'Busy', phonetic: 'bísi', trans: 'Ocupado/a' },
            { word: 'Born', phonetic: 'born', trans: 'Nacido/a' }
        ]
    },
    {
        id: 'a2_2',
        title: '2. Pasado Simple: Verbos Regulares e Irregulares (Past Simple)',
        summary: 'Expresa acciones completadas en un momento específico del pasado.',
        description: 'Los verbos regulares forman el pasado agregando "-ed" (walk -> walked). Los verbos irregulares cambian su forma por completo (go -> went).',
        grammar: 'En oraciones afirmativas usas la forma del pasado del verbo. Para negar e interrogar usas el auxiliar DID (Did + verbo en forma base / Didn\'t + verbo en forma base).',
        examples: [
            'She worked yesterday. / Ella trabajó ayer.',
            'I bought a new car last month. / Compré un carro nuevo el mes pasado.',
            'Did you see that movie? - No, I didn\'t. / ¿Viste esa película? - No, no la vi.'
        ],
        vocabulary: [
            { word: 'Worked', phonetic: 'werkt', trans: 'Trabajó / Trabajé' },
            { word: 'Played', phonetic: 'pléid', trans: 'Jugó / Jugué' },
            { word: 'Went', phonetic: 'uent', trans: 'Fui / Fue (Pasado de Go)' },
            { word: 'Saw', phonetic: 'so', trans: 'Vi / Vio (Pasado de See)' },
            { word: 'Ate', phonetic: 'eit', trans: 'Comí / Comió (Pasado de Eat)' },
            { word: 'Bought', phonetic: 'bot', trans: 'Compré / Compró (Pasado de Buy)' },
            { word: 'Did', phonetic: 'did', trans: 'Auxiliar de pasado / Hizo' },
            { word: 'Didn\'t', phonetic: 'dídnt', trans: 'No (Auxiliar negativo en pasado)' },
            { word: 'Took', phonetic: 'tuk', trans: 'Tomó / Tomé (Pasado de Take)' },
            { word: 'Made', phonetic: 'méid', trans: 'Hizo / Hice (Pasado de Make)' },
            { word: 'Had', phonetic: 'jad', trans: 'Tuve / Tenía (Pasado de Have)' },
            { word: 'Spoke', phonetic: 'spóuk', trans: 'Hablé / Habló (Pasado de Speak)' }
        ]
    },
    {
        id: 'a2_3',
        title: '3. Pasado Continuo (Past Continuous)',
        summary: 'Describe acciones que estaban ocurriendo en un momento dado en el pasado.',
        description: 'Se utiliza para hablar de acciones en desarrollo en el pasado o para dar contexto cuando otra acción ocurre.',
        grammar: 'Estructura: Sujeto + Was / Were + Verbo con -ING. Negativo: Was/Were + not + Verbo -ING.',
        examples: [
            'I was studying when you called. / Yo estaba estudiando cuando llamaste.',
            'They were watching TV at 8 PM. / Ellos estaban viendo televisión a las 8 PM.',
            'It was raining this morning. / Estaba lloviendo esta mañana.'
        ],
        vocabulary: [
            { word: 'While', phonetic: 'juáil', trans: 'Mientras' },
            { word: 'When', phonetic: 'juén', trans: 'Cuando' },
            { word: 'Studying', phonetic: 'stádi-ing', trans: 'Estudiando' },
            { word: 'Watching', phonetic: 'uótching', trans: 'Viendo / Mirando' },
            { word: 'Sleeping', phonetic: 'sliiping', trans: 'Durmiendo' },
            { word: 'Cooking', phonetic: 'kúking', trans: 'Cocinando' },
            { word: 'Driving', phonetic: 'dráiving', trans: 'Manejando / Conduciendo' },
            { word: 'Raining', phonetic: 'réining', trans: 'Lloviendo' },
            { word: 'Suddenly', phonetic: 'sádenli', trans: 'Repentinamente / De repente' },
            { word: 'At that moment', phonetic: 'at dat móument', trans: 'En ese momento' }
        ]
    },
    {
        id: 'a2_4',
        title: '4. Comparativos y Superlativos (Comparatives & Superlatives)',
        summary: 'Aprende a comparar objetos, personas y lugares.',
        description: 'Compara dos cosas usando "-er than" o "more... than". Destaca la cualidad máxima de un grupo usando "the -est" o "the most...".',
        grammar: 'Adjetivos cortos (1 sílaba): -er / -est (fast -> faster -> the fastest). Adjetivos largos (2+ sílabas): more / the most (beautiful -> more beautiful -> the most beautiful). Irregulares: Good -> Better -> The best / Bad -> Worse -> The worst.',
        examples: [
            'My car is faster than yours. / Mi carro es más rápido que el tuyo.',
            'She is the tallest in the class. / Ella es la más alta de la clase.',
            'This book is more interesting than the movie. / Este libro es más interesante que la película.'
        ],
        vocabulary: [
            { word: 'Faster', phonetic: 'fáster', trans: 'Más rápido' },
            { word: 'Tallest', phonetic: 'tólest', trans: 'El/La más alto/a' },
            { word: 'Better', phonetic: 'béter', trans: 'Mejor' },
            { word: 'The best', phonetic: 'de best', trans: 'El mejor / La mejor' },
            { word: 'Worse', phonetic: 'wers', trans: 'Peor' },
            { word: 'The worst', phonetic: 'de werst', trans: 'El peor / La peor' },
            { word: 'Than', phonetic: 'dan', trans: 'Que (en comparaciones)' },
            { word: 'More', phonetic: 'mor', trans: 'Más' },
            { word: 'Most', phonetic: 'móust', trans: 'El más / La más' },
            { word: 'Older', phonetic: 'óulder', trans: 'Más viejo/a' },
            { word: 'Younger', phonetic: 'iánger', trans: 'Más joven' },
            { word: 'Cheaper', phonetic: 'chíiper', trans: 'Más barato/a' }
        ]
    },
    {
        id: 'a2_5',
        title: '5. Futuro con "Going To" (Future Plans & Intentions)',
        summary: 'Expresa planes futuros e intenciones ya decididas.',
        description: 'Usamos "Be going to" para hablar de planes personales a futuro o predicciones basadas en evidencia presente.',
        grammar: 'Estructura: Sujeto + Am/Is/Are + going to + Verbo en forma base. Negación: Sujeto + Am/Is/Are + NOT + going to + Verbo.',
        examples: [
            'I am going to visit my grandmother this weekend. / Voy a visitar a mi abuela este fin de semana.',
            'They are going to buy a new house. / Ellos van a comprar una casa nueva.',
            'Is it going to rain? / ¿Va a llover?'
        ],
        vocabulary: [
            { word: 'Going to', phonetic: 'góuing tu', trans: 'Ir a (planes)' },
            { word: 'Plan', phonetic: 'plan', trans: 'Plan / Planear' },
            { word: 'Intention', phonetic: 'inténshon', trans: 'Intención' },
            { word: 'Tonight', phonetic: 'tunáit', trans: 'Esta noche' },
            { word: 'Next week', phonetic: 'nekst uiik', trans: 'La próxima semana' },
            { word: 'Next month', phonetic: 'nekst manz', trans: 'El próximo mes' },
            { word: 'Next year', phonetic: 'nekst iir', trans: 'El próximo año' },
            { word: 'Soon', phonetic: 'sun', trans: 'Pronto' },
            { word: 'Travel', phonetic: 'trável', trans: 'Viajar' },
            { word: 'Visit', phonetic: 'vísit', trans: 'Visitar' }
        ]
    },
    {
        id: 'a2_6',
        title: '6. Futuro con "Will" (Future Promises & Predictions)',
        summary: 'Expresa decisiones espontáneas, promesas y predicciones del futuro.',
        description: 'Usa "Will" para tomar decisiones en el momento, hacer promesas o dar opiniones sobre lo que pasará.',
        grammar: 'Afirmativo: Sujeto + Will + Verbo base. Negativo: Sujeto + Won\'t (Will not) + Verbo base. Interrogativo: Will + Sujeto + Verbo base?',
        examples: [
            'I will help you with your homework. / Te ayudaré con tu tarea.',
            'It will not (won\'t) rain tomorrow. / No lloverá mañana.',
            'Will you marry me? / ¿Te casarás conmigo?'
        ],
        vocabulary: [
            { word: 'Will', phonetic: 'uil', trans: 'Auxiliar de futuro' },
            { word: 'Won\'t', phonetic: 'uóunt', trans: 'No (Auxiliar negativo futuro)' },
            { word: 'Promise', phonetic: 'prómis', trans: 'Promesa / Prometer' },
            { word: 'Prediction', phonetic: 'predíkshon', trans: 'Predicción' },
            { word: 'Think', phonetic: 'zink', trans: 'Pensar / Creer' },
            { word: 'Maybe', phonetic: 'méibi', trans: 'Tal vez / Quizás' },
            { word: 'Perhaps', phonetic: 'perjáps', trans: 'Tal vez' },
            { word: 'Probably', phonetic: 'próbabli', trans: 'Probablemente' },
            { word: 'Offer', phonetic: 'ófer', trans: 'Ofrecer / Oferta' },
            { word: 'Decision', phonetic: 'desíshon', trans: 'Decisión' }
        ]
    },
    {
        id: 'a2_7',
        title: '7. Presente Perfecto Básico (Present Perfect)',
        summary: 'Habla sobre experiencias de vida pasadas sin precisar la fecha exacta.',
        description: 'Se conecta el pasado con el presente mediante el auxiliar Have/Has y el participio pasado del verbo.',
        grammar: 'Estructura: Sujeto + Have / Has + Verbo en Participio Pasado. Usamos "Has" con He, She, It.',
        examples: [
            'I have visited Paris twice. / He visitado París dos veces.',
            'She has eaten sushi before. / Ella ha comido sushi antes.',
            'Have you ever traveled by plane? / ¿Alguna vez has viajado en avión?'
        ],
        vocabulary: [
            { word: 'Have / Has', phonetic: 'jav / jaz', trans: 'Haber (Auxiliar)' },
            { word: 'Ever', phonetic: 'éver', trans: 'Alguna vez' },
            { word: 'Never', phonetic: 'néver', trans: 'Nunca' },
            { word: 'Before', phonetic: 'bifór', trans: 'Antes' },
            { word: 'Visited', phonetic: 'vísited', trans: 'Visitado' },
            { word: 'Eaten', phonetic: 'íiten', trans: 'Comido' },
            { word: 'Seen', phonetic: 'siin', trans: 'Visto' },
            { word: 'Been', phonetic: 'biin', trans: 'Estado / Sido' },
            { word: 'Done', phonetic: 'dan', trans: 'Hecho' },
            { word: 'Written', phonetic: 'ríten', trans: 'Escrito' }
        ]
    },
    {
        id: 'a2_8',
        title: '8. Modales de Habilidad y Permiso (Can, Could, Be able to)',
        summary: 'Expresa lo que puedes, podías o eres capaz de hacer.',
        description: 'Usamos "Can" para habilidades presentes, "Could" para habilidades pasadas o peticiones formales, y "Be able to" para capacidades específicas.',
        grammar: 'Sujeto + Can / Could + Verbo en forma base. No llevan "-s" en tercera persona ni requieren auxiliar "Do".',
        examples: [
            'I can speak two languages. / Puedo hablar dos idiomas.',
            'When I was five, I could swim. / Cuando tenía cinco años, podía nadar.',
            'Could you help me, please? / ¿Podrías ayudarme, por favor?'
        ],
        vocabulary: [
            { word: 'Can', phonetic: 'kan', trans: 'Poder (Presente)' },
            { word: 'Cannot / Can\'t', phonetic: 'kánt', trans: 'No poder' },
            { word: 'Could', phonetic: 'kud', trans: 'Podía / Podría (Pasado/Formal)' },
            { word: 'Couldn\'t', phonetic: 'kúdnt', trans: 'No podía / No podría' },
            { word: 'Be able to', phonetic: 'bi éibol tu', trans: 'Ser capaz de' },
            { word: 'Ability', phonetic: 'abíliti', trans: 'Habilidad' },
            { word: 'Permission', phonetic: 'permíshon', trans: 'Permiso' },
            { word: 'Request', phonetic: 'rikuést', trans: 'Petición / Solicitud' },
            { word: 'Swim', phonetic: 'suim', trans: 'Nadar' },
            { word: 'Fly', phonetic: 'flái', trans: 'Volar' }
        ]
    },
    {
        id: 'a2_9',
        title: '9. Modales de Obligación y Consejo (Must, Have to, Should)',
        summary: 'Aprende a dar consejos, expresar reglas u obligaciones morales y legales.',
        description: 'Usa "Should" para dar recomendaciones, "Must" para obligaciones internas/reglas estrictas y "Have to" para normas externas.',
        grammar: 'Should + Verbo base. Must + Verbo base. Have to + Verbo base (cambia a Has to con He/She/It).',
        examples: [
            'You should drink more water. / Deberías beber más agua.',
            'You must wear a seatbelt. / Debes usar cinturón de seguridad.',
            'I have to study for the test. / Tengo que estudiar para el examen.'
        ],
        vocabulary: [
            { word: 'Should', phonetic: 'shud', trans: 'Deberías (Consejo)' },
            { word: 'Shouldn\'t', phonetic: 'shúdnt', trans: 'No deberías' },
            { word: 'Must', phonetic: 'mast', trans: 'Deber (Obligación fuerte)' },
            { word: 'Mustn\'t', phonetic: 'másnt', trans: 'Prohibido / No debes' },
            { word: 'Have to', phonetic: 'jav tu', trans: 'Tener que (Obligación)' },
            { word: 'Don\'t have to', phonetic: 'dóunt jav tu', trans: 'No tener que (No es necesario)' },
            { word: 'Advice', phonetic: 'adváis', trans: 'Consejo' },
            { word: 'Obligation', phonetic: 'obligéishon', trans: 'Obligación' },
            { word: 'Rule', phonetic: 'rul', trans: 'Regla' },
            { word: 'Seatbelt', phonetic: 'síit-belt', trans: 'Cinturón de seguridad' }
        ]
    },
    {
        id: 'a2_10',
        title: '10. Adverbios de Frecuencia y Modo (Adverbs of Frequency & Manner)',
        summary: 'Indica con qué frecuencia y de qué manera realizas una acción.',
        description: 'Los adverbios de frecuencia van antes del verbo principal, pero después del verbo To Be. Los de modo suelen terminar en "-ly".',
        grammar: 'Frecuencia: Always (100%), Usually (80%), Sometimes (50%), Never (0%). Modo: Adjetivo + -ly (quick -> quickly, careful -> carefully).',
        examples: [
            'I always eat breakfast at 7 AM. / Siempre desayuno a las 7 AM.',
            'She is usually happy. / Ella usualmente está feliz.',
            'He drives carefully. / Él maneja cuidadosamente.'
        ],
        vocabulary: [
            { word: 'Always', phonetic: 'ólweis', trans: 'Siempre' },
            { word: 'Usually', phonetic: 'iúshuali', trans: 'Usualmente' },
            { word: 'Often', phonetic: 'ófen', trans: 'A menudo / Frecuentemente' },
            { word: 'Sometimes', phonetic: 'sámtaims', trans: 'A veces' },
            { word: 'Rarely', phonetic: 'rérli', trans: 'Raramente' },
            { word: 'Never', phonetic: 'néver', trans: 'Nunca' },
            { word: 'Quickly', phonetic: 'kuíkli', trans: 'Rápidamente' },
            { word: 'Slowly', phonetic: 'slóuli', trans: 'Lentamente' },
            { word: 'Carefully', phonetic: 'kérfuli', trans: 'Cuidadosamente' },
            { word: 'Easily', phonetic: 'íisili', trans: 'Fácilmente' }
        ]
    },
    {
        id: 'a2_11',
        title: '11. Sustantivos Contables e Incontables (Countable & Uncountable)',
        summary: 'Diferencia entre cosas que se pueden contar y las que no.',
        description: 'Los sustantivos contables tienen plural (apples). Los incontables no tienen plural y no usan "a/an" (water, money, sugar).',
        grammar: 'Usamos "How many" para contables, "How much" para incontables. "Some" en afirmativas, "Any" en negativas e interrogativas.',
        examples: [
            'How many apples do you want? / ¿Cuántas manzanas quieres?',
            'How much water do you drink? / ¿Cuánta agua bebes?',
            'I have some money in my pocket. / Tengo algo de dinero en mi bolsillo.'
        ],
        vocabulary: [
            { word: 'Countable', phonetic: 'káuntabol', trans: 'Contable' },
            { word: 'Uncountable', phonetic: 'ankáuntabol', trans: 'Incontable' },
            { word: 'Some', phonetic: 'sam', trans: 'Algunos / Algo de (Afirmativo)' },
            { word: 'Any', phonetic: 'éni', trans: 'Ningún / Algo de (Negativo/Pregunta)' },
            { word: 'How much', phonetic: 'jáu mach', trans: 'Cuánto (Incontable)' },
            { word: 'How many', phonetic: 'jáu méni', trans: 'Cuántos (Contable)' },
            { word: 'Water', phonetic: 'uóter', trans: 'Agua' },
            { word: 'Money', phonetic: 'móni', trans: 'Dinero' },
            { word: 'Rice', phonetic: 'ráis', trans: 'Arroz' },
            { word: 'Bread', phonetic: 'bred', trans: 'Pan' }
        ]
    },
    {
        id: 'a2_12',
        title: '12. Cuantificadores (A lot of, Much, Many, A few, A little)',
        summary: 'Expresa cantidades de objetos y cosas de forma precisa o aproximada.',
        description: 'Diferencia el uso de cuantificadores según si el sustantivo es contable o incontable.',
        grammar: 'A lot of = Gran cantidad (ambos). Much = Mucho (incontables, neg/pregunta). Many = Muchos (contables). A few = Unos pocos (contables). A little = Un poco de (incontables).',
        examples: [
            'There are a lot of people here. / Hay mucha gente aquí.',
            'I have a few friends in town. / Tengo unos pocos amigos en la ciudad.',
            'Add a little sugar to the coffee. / Agrega un poco de azúcar al café.'
        ],
        vocabulary: [
            { word: 'A lot of', phonetic: 'e lot ov', trans: 'Mucho / Un montón de' },
            { word: 'Much', phonetic: 'mach', trans: 'Mucho (Incontables)' },
            { word: 'Many', phonetic: 'méni', trans: 'Muchos/as (Contables)' },
            { word: 'A few', phonetic: 'e fiú', trans: 'Unos pocos / Unas pocas' },
            { word: 'A little', phonetic: 'e lítol', trans: 'Un poco de' },
            { word: 'Enough', phonetic: 'ináf', trans: 'Suficiente' },
            { word: 'Too much', phonetic: 'tu mach', trans: 'Demasiado (Incontables)' },
            { word: 'Too many', phonetic: 'tu méni', trans: 'Demasiados (Contables)' },
            { word: 'Plenty of', phonetic: 'plénti ov', trans: 'De sobra / De más' },
            { word: 'Sugar', phonetic: 'shúgar', trans: 'Azúcar' }
        ]
    },
    {
        id: 'a2_13',
        title: '13. Primer Condicional (First Conditional)',
        summary: 'Habla sobre situaciones reales o posibles en el futuro y sus consecuencias.',
        description: 'Se usa para expresar lo que pasará si se cumple una condición presente.',
        grammar: 'Estructura: If + Presente Simple , Sujeto + Will + Verbo base. (O viceversa sin coma).',
        examples: [
            'If it rains tomorrow, I will stay at home. / Si llueve mañana, me quedaré en casa.',
            'You will pass the exam if you study hard. / Pasarás el examen si estudias mucho.',
            'If she doesn\'t hurry, she will miss the bus. / Si ella no se apura, perderá el autobús.'
        ],
        vocabulary: [
            { word: 'If', phonetic: 'if', trans: 'Si (condicional)' },
            { word: 'Condition', phonetic: 'kondíshon', trans: 'Condición' },
            { word: 'Result', phonetic: 'risált', trans: 'Resultado' },
            { word: 'Hurry', phonetic: 'jári', trans: 'Apurarse / Prisa' },
            { word: 'Miss', phonetic: 'mis', trans: 'Perder (transporte/evento) / Extrañar' },
            { word: 'Pass', phonetic: 'pas', trans: 'Aprobar / Pasar' },
            { word: 'Fail', phonetic: 'féil', trans: 'Reprobar / Fallar' },
            { word: 'Stay', phonetic: 'stéi', trans: 'Quedarse / Permanecer' },
            { word: 'Happen', phonetic: 'jápen', trans: 'Suceder / Pasar' },
            { word: 'Unless', phonetic: 'anlés', trans: 'A menos que' }
        ]
    },
    {
        id: 'a2_14',
        title: '14. Pronombres Posesivos y Reflexivos (Possessives & Reflexive Pronouns)',
        summary: 'Diferencia entre "Mío", "Tuyo" y "A mí mismo".',
        description: 'Los pronombres posesivos reemplazan al sustantivo posesivo (mine, yours). Los reflexivos indican que la acción recae sobre la misma persona que la realiza (myself, yourself).',
        grammar: 'Posesivos: Mine, Yours, His, Hers, Ours, Theirs. Reflexivos: Myself, Yourself, Himself, Herself, Itself, Ourselves, Themselves.',
        examples: [
            'This book is not yours, it is mine. / Este libro no es tuyo, es mío.',
            'She taught herself how to play guitar. / Ella se enseñó a sí misma a tocar la guitarra.',
            'We enjoyed ourselves at the party. / Nos divertimos en la fiesta.'
        ],
        vocabulary: [
            { word: 'Mine', phonetic: 'máin', trans: 'Mío / Mía' },
            { word: 'Yours', phonetic: 'iurs', trans: 'Tuyo / Tuya / De ustedes' },
            { word: 'His', phonetic: 'jiz', trans: 'Suyo (de él)' },
            { word: 'Hers', phonetic: 'jers', trans: 'Suyo (de ella)' },
            { word: 'Ours', phonetic: 'áurs', trans: 'Nuestro / Nuestra' },
            { word: 'Theirs', phonetic: 'dérs', trans: 'Suyo (de ellos)' },
            { word: 'Myself', phonetic: 'máiself', trans: 'Yo mismo / A mí mismo' },
            { word: 'Yourself', phonetic: 'iúrself', trans: 'Tú mismo / A ti mismo' },
            { word: 'Himself', phonetic: 'jímself', trans: 'Él mismo' },
            { word: 'Herself', phonetic: 'jérself', trans: 'Ella misma' }
        ]
    },
    {
        id: 'a2_15',
        title: '15. Preguntas con Sujeto y Objeto (Subject vs Object Questions)',
        summary: 'Aprende cuándo usar o no auxiliares según lo que preguntas.',
        description: 'Cuando la palabra de pregunta (Who/What) es el SUJETO de la oración, NO se usan auxiliares (Do/Did). Si es el OBJETO, SÍ se usas auxiliar.',
        grammar: 'Sujeto: Who called you? (¿Quién te llamó? - No usa Did). Objeto: Who did you call? (¿A quién llamaste? - Usa Did).',
        examples: [
            'Who broke the window? / ¿Quién rompió la ventana? (Pregunta de sujeto)',
            'What happened yesterday? / ¿Qué pasó ayer? (Pregunta de sujeto)',
            'What did you buy? / ¿Qué compraste? (Pregunta de objeto)'
        ],
        vocabulary: [
            { word: 'Subject', phonetic: 'sábdshikt', trans: 'Sujeto' },
            { word: 'Object', phonetic: 'óbdshikt', trans: 'Objeto' },
            { word: 'Broke', phonetic: 'bróuk', trans: 'Rompió (Pasado de Break)' },
            { word: 'Happened', phonetic: 'jájpend', trans: 'Sucedió / Pasó' },
            { word: 'Called', phonetic: 'kold', trans: 'Llamó' },
            { word: 'Wrote', phonetic: 'róut', trans: 'Escribió (Pasado de Write)' },
            { word: 'Told', phonetic: 'tóuld', trans: 'Contó / Dijo (Pasado de Tell)' },
            { word: 'Investigate', phonetic: 'invéstigeit', trans: 'Investigar' },
            { word: 'Discover', phonetic: 'diskáver', trans: 'Descubrir' },
            { word: 'Win', phonetic: 'uin', trans: 'Ganar' }
        ]
    },
    {
        id: 'a2_16',
        title: '16. Expresar Preferencias (Like, Love, Hate, Prefer + -ING / To)',
        summary: 'Aprende a expresar tus gustos y pasatiempos con precisión.',
        description: 'Los verbos de gusto y preferencia suelen ir seguidos de un verbo en gerundio (-ING) o en infinitivo (TO + verbo).',
        grammar: 'Love / Like / Hate / Enjoy + Verbo-ING. Ej: "I like reading". Would prefer / Would rather = Preferiría.',
        examples: [
            'I love listening to music. / Me encanta escuchar música.',
            'He hates waking up early. / Él odia levantarse temprano.',
            'I prefer tea to coffee. / Prefiero el té al café.'
        ],
        vocabulary: [
            { word: 'Love', phonetic: 'lav', trans: 'Encantar / Amar' },
            { word: 'Like', phonetic: 'láik', trans: 'Gustar' },
            { word: 'Enjoy', phonetic: 'endshói', trans: 'Disfrutar' },
            { word: 'Dislike', phonetic: 'disláik', trans: 'Disgustar' },
            { word: 'Hate', phonetic: 'jéit', trans: 'Odiar' },
            { word: 'Prefer', phonetic: 'prifér', trans: 'Preferir' },
            { word: 'Mind', phonetic: 'máind', trans: 'Importar / Molestar' },
            { word: 'Don\'t mind', phonetic: 'dóunt máind', trans: 'No me importa / No me molesta' },
            { word: 'Hobby', phonetic: 'jóbi', trans: 'Pasatiempo' },
            { word: 'Interest', phonetic: 'íntrest', trans: 'Interés' }
        ]
    },
    {
        id: 'a2_17',
        title: '17. Salud, Enfermedades y Consejos Médicos (Health & Illnesses)',
        summary: 'Vocabulario para describir síntomas y consultar al médico.',
        description: 'Expresa dolor de cuerpo con "have a..." o la palabra "ache", y pide o da consejos de salud.',
        grammar: 'Para expresar dolores: I have a headache / toothache / stomachache. Para síntomas: I feel sick / dizzy.',
        examples: [
            'I have a headache today. / Tengo dolor de cabeza hoy.',
            'She feels sick and has a fever. / Ella se siente enferma y tiene fiebre.',
            'You should see a doctor. / Deberías ver a un médico.'
        ],
        vocabulary: [
            { word: 'Headache', phonetic: 'jédeik', trans: 'Dolor de cabeza' },
            { word: 'Toothache', phonetic: 'túuzeik', trans: 'Dolor de muela/diente' },
            { word: 'Stomachache', phonetic: 'stómakeik', trans: 'Dolor de estómago' },
            { word: 'Sore throat', phonetic: 'sor zróut', trans: 'Dolor de garganta' },
            { word: 'Fever', phonetic: 'fíver', trans: 'Fiebre' },
            { word: 'Cough', phonetic: 'kof', trans: 'Tos / Toser' },
            { word: 'Cold', phonetic: 'kóuld', trans: 'Resfriado / Catarro' },
            { word: 'Flu', phonetic: 'flu', trans: 'Gripe' },
            { word: 'Medicine', phonetic: 'médisin', trans: 'Medicina' },
            { word: 'Doctor', phonetic: 'dóktor', trans: 'Médico / Doctor' }
        ]
    },
    {
        id: 'a2_18',
        title: '18. Viajes, Hoteles y Aeropuerto (Travel & Accommodations)',
        summary: 'Palabras y expresiones útiles para tus viajes y estadías.',
        description: 'Aprende el vocabulario esencial para hacer check-in, pedir direcciones y moverte en aeropuertos y hoteles.',
        grammar: 'Para hacer peticiones amables en hoteles o restaurantes: "I would like a..." o "Can I have...?"',
        examples: [
            'I would like to book a room. / Me gustaría reservar una habitación.',
            'Where is gate 5? / ¿Dónde está la puerta de embarque 5?',
            'Here is my passport and ticket. / Aquí está mi pasaporte y boleto.'
        ],
        vocabulary: [
            { word: 'Passport', phonetic: 'pásport', trans: 'Pasaporte' },
            { word: 'Ticket', phonetic: 'tíket', trans: 'Boleto / Pasaje' },
            { word: 'Luggage / Baggage', phonetic: 'láguidsh', trans: 'Equipaje' },
            { word: 'Flight', phonetic: 'fláit', trans: 'Vuelo' },
            { word: 'Boarding pass', phonetic: 'bórding pas', trans: 'Pase de abordar' },
            { word: 'Reservation / Booking', phonetic: 'reservéishon', trans: 'Reservación' },
            { word: 'Hotel', phonetic: 'joutél', trans: 'Hotel' },
            { word: 'Room key', phonetic: 'rum kii', trans: 'Llave de la habitación' },
            { word: 'Check-in', phonetic: 'chék-in', trans: 'Registro de entrada' },
            { word: 'Check-out', phonetic: 'chék-aut', trans: 'Registro de salida' }
        ]
    },
    {
        id: 'a2_19',
        title: '19. Compras y Transacciones (Shopping & Money)',
        summary: 'Vocabulario para comprar en tiendas, precios y métodos de pago.',
        description: 'Maneja transacciones comerciales básicas, devoluciones y preguntas sobre precios o tallas.',
        grammar: 'Preguntas de precios: "How much is this?" / "How much do these cost?". Formas de pago: "By credit card" / "In cash".',
        examples: [
            'How much does this shirt cost? / ¿Cuánto cuesta esta camisa?',
            'Can I try this on? / ¿Puedo probarme esto?',
            'I will pay in cash. / Pagaré en efectivo.'
        ],
        vocabulary: [
            { word: 'Price', phonetic: 'práis', trans: 'Precio' },
            { word: 'Cost', phonetic: 'kost', trans: 'Costo / Costar' },
            { word: 'Cheap', phonetic: 'chiip', trans: 'Barato' },
            { word: 'Expensive', phonetic: 'ekspénsiv', trans: 'Costoso / Caro' },
            { word: 'Discount / Sale', phonetic: 'diskáunt', trans: 'Descuento / Rebaja' },
            { word: 'Receipt', phonetic: 'risíit', trans: 'Recibo / Factura' },
            { word: 'Cash', phonetic: 'kash', trans: 'Efectivo' },
            { word: 'Credit card', phonetic: 'krédit kard', trans: 'Tarjeta de crédito' },
            { word: 'Size', phonetic: 'sáis', trans: 'Talla / Tamaño' },
            { word: 'Try on', phonetic: 'trái on', trans: 'Probarse (ropa)' }
        ]
    },
    {
        id: 'a2_20',
        title: '20. Conectores de Secuencia y Contraste (Linking Words)',
        summary: 'Enlaza tus ideas para hacer tus textos y discursos más fluidos.',
        description: 'Los conectores te permiten ordenar ideas cronológicamente o contrastar dos argumentos en una conversación.',
        grammar: 'Secuencia: First, Then, After that, Finally. Contraste: But, However, Although, On the other hand.',
        examples: [
            'First, I woke up. Then, I had breakfast. / Primero me desperté. Luego desayuné.',
            'I studied hard, but I failed the test. / Estudié mucho, pero reprobé el examen.',
            'Although it was cold, we went swimming. / Aunque hacía frío, fuimos a nadar.'
        ],
        vocabulary: [
            { word: 'First', phonetic: 'ferst', trans: 'Primero' },
            { word: 'Then', phonetic: 'den', trans: 'Luego / Después' },
            { word: 'Next', phonetic: 'nekst', trans: 'Siguiente' },
            { word: 'After that', phonetic: 'áfter dat', trans: 'Después de eso' },
            { word: 'Finally', phonetic: 'fáinali', trans: 'Finalmente' },
            { word: 'But', phonetic: 'bat', trans: 'Pero' },
            { word: 'However', phonetic: 'jauéver', trans: 'Sin embargo' },
            { word: 'Although', phonetic: 'oldóu', trans: 'Aunque' },
            { word: 'Because', phonetic: 'bikós', trans: 'Porque' },
            { word: 'So', phonetic: 'sóu', trans: 'Así que / Por lo tanto' }
        ]
    }
];